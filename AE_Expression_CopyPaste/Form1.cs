using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using System.IO;

using BRY;

using Codeplex.Data;
/// <summary>
/// 基本となるアプリのスケルトン
/// </summary>
namespace AE_Expression_CopyPaste
{
    public partial class Form1 : Form
    {
        //-------------------------------------------------------------
        private List<string> expStr = new List<string>();
        private List<string> expCap = new List<string>();
        //-------------------------------------------------------------
        /// <summary>
        /// コンストラクタ
        /// </summary>
        public Form1()
        {
            InitializeComponent();
        }
        /// <summary>
        /// コントロールの初期化はこっちでやる
        /// </summary>
        protected override void InitLayout()
        {
            base.InitLayout();
        }
        //-------------------------------------------------------------
        /// <summary>
        /// フォーム作成時に呼ばれる
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="e"></param>
        private void Form1_Load(object sender, EventArgs e)
        {
            listBox1.Items.Clear();
            //設定ファイルの読み込み
            JsonPref pref = new JsonPref();
            if (pref.Load())
            {
                bool ok = false;
                Size sz = pref.GetSize("Size", out ok);
                if (ok) this.Size = sz;
                Point p = pref.GetPoint("Point", out ok);
                if (ok) this.Location = p;
                string[] sa = pref.GetStringArray("expStr", out ok);
                if (ok) expStr = sa.ToList<string>();
                string[] sb = pref.GetStringArray("expCap", out ok);
                if (ok)
                {
                    expCap = sb.ToList<string>();
                    listBox1.Items.AddRange(sb);
                }


            }
            this.Text = Path.GetFileNameWithoutExtension(Application.ExecutablePath);
            if (listBox1.Items.Count<=0)
            {
                AddExp("effect(\"open\")");
                AddExp("p = effect(\"open\")/100; \r\n if (p<0) {p=0;} else if (p>1){p=1;}\r\n");
                AddExp("value * effect(\"open\") / 100");
                AddExp("Math.PI/180");
                AddExp("Math.sin(r * Math.PI/180)");
                AddExp("Math.cos(r * Math.PI/180)");
                AddExp("Math.tan(r * Math.PI/180)");
            }
        }
        //-------------------------------------------------------------
        /// <summary>
        /// フォームが閉じられた時
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="e"></param>
        private void Form1_FormClosed(object sender, FormClosedEventArgs e)
        {
            //設定ファイルの保存
            JsonPref pref = new JsonPref();
            pref.SetSize("Size", this.Size);
            pref.SetPoint("Point", this.Location);

            string[] sa = new string[expStr.Count];

            pref.SetStringArray("expStr", expStr.ToArray());
            pref.SetStringArray("expCap", expCap.ToArray());
            pref.Save();

        }
        //-------------------------------------------------------------
        /// <summary>
        /// ドラッグ＆ドロップの準備
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="e"></param>
        private void Form1_DragEnter(object sender, DragEventArgs e)
        {
            if (e.Data.GetDataPresent(DataFormats.FileDrop))
            {
                e.Effect = DragDropEffects.All;
            }
            else
            {
                e.Effect = DragDropEffects.None;
            }
        }
        /// <summary>
        /// ドラッグ＆ドロップの本体
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="e"></param>
        private void Form1_DragDrop(object sender, DragEventArgs e)
        {
            string[] files = (string[])e.Data.GetData(DataFormats.FileDrop, false);
            //ここでは単純にファイルをリストアップするだけ
            GetCommand(files);
        }
        //-------------------------------------------------------------
        /// <summary>
        /// ダミー関数
        /// </summary>
        /// <param name="cmd"></param>
        public void GetCommand(string[] cmd)
        {
            if (cmd.Length > 0)
            {
                foreach (string s in cmd)
                {
                    listBox1.Items.Add(s);
                }
            }
        }
        /// <summary>
        /// メニューの終了
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="e"></param>
        //-------------------------------------------------------------
        private void quitToolStripMenuItem_Click(object sender, EventArgs e)
        {
            Application.Exit();
        }

        private void aboutToolStripMenuItem_Click(object sender, EventArgs e)
        {
            AppInfoDialog.ShowAppInfoDialog();
        }
        
        // ***************************************************
        public void ClearAll()
        {
            expStr.Clear();
            expCap.Clear();
            listBox1.Items.Clear();
        }
        // ***************************************************
        private string ToCap(string s)
        {
            if (s == "") return s;
            s = s.Replace("\r\n", "\n");
            s = s.Replace("\n", "\\n");
            if (s.Length > 30) {
                s = s.Trim().Substring(0, 30);
                s += "(略)";
            }
            return s;
        }
        // ***************************************************
        public void AddExp(string s)
        {
            if (s == "") return;

            string cap = ToCap(s);
            expCap.Add(cap);
            listBox1.Items.Add(cap);

            expStr.Add(s);
            EnabledChk();
        }
        // ***************************************************
        public void OverrideExp(int idx, string s)
        {
            if (s == "") return;
            if ((idx >= 0) && (idx < expStr.Count))
            {
                string cap = ToCap(s);
                expStr[idx] = s;
                expCap[idx] = (cap);
                listBox1.Items[idx] = cap;
                EnabledChk();
            }
        }
        // ***************************************************
        public void Swap(int s, int d)
        {
            int cnt = expStr.Count;
            if ((s<0)||(d<0)||(s>=cnt) || (d >= cnt) || (s == d))
            {
                return;
            }
            string temp = "";
            temp = expStr[s];
            expStr[s] = expStr[d];
            expStr[d] = temp;
            temp = expCap[s];
            expCap[s] = expCap[d];
            expCap[d] = temp;
            temp = (string)listBox1.Items[s];
            listBox1.Items[s] = listBox1.Items[d];
            listBox1.Items[d] = temp;

        }
        // ***************************************************
        public void Up()
        {
            int si = listBox1.SelectedIndex;
            if (si <= 0) return;
            Swap(si - 1, si);
            listBox1.SelectedIndex = si - 1;

        }
        // ***************************************************
        public void Down()
        {
            int si = listBox1.SelectedIndex;
            int cnt = expStr.Count - 1;
            if ((si < 0)||(si>=cnt)) return;
            Swap(si, si+1);
            listBox1.SelectedIndex = si + 1;

        }
        // ***************************************************
        public void CopyExec()
        {
            int si = listBox1.SelectedIndex;
            if((si>=0)&&(si<expStr.Count))
            {
                string s = expStr[si];
                Clipboard.SetText(s);
            }

        }
        // ***************************************************
        public void PasteOverrideExec()
        {
            int si = listBox1.SelectedIndex;
            if ((si >= 0) && (si < expStr.Count))
            {
                string s = Clipboard.GetText();
                OverrideExp(si, s);
            }
        }
        // ***************************************************
        public void PasteAddExec()
        {
            string s = Clipboard.GetText();
            AddExp(s);
        }
        // ***************************************************
        private void EnabledChk()
        {
            int si = listBox1.SelectedIndex;
            removeToolStripMenuItem.Enabled =
            copyMenu.Enabled =
                pasteOverrideMenu.Enabled =
                    btnCopy.Enabled = (si >= 0);
            btnUP.Enabled = (si >= 1);
            btnDown.Enabled = ((si >= 0) && (si - 1 < listBox1.Items.Count));
        }
        private void RemoveExec()
        {
            int si = listBox1.SelectedIndex;
            if ((si >= 0) && (si < expStr.Count))
            {
                expCap.RemoveAt(si);
                expStr.RemoveAt(si);
                listBox1.Items.RemoveAt(si);
                if (si >= listBox1.Items.Count)
                {
                    si = listBox1.Items.Count;
                }
                listBox1.SelectedIndex = si;
            }
        }

        private void btnUP_Click(object sender, EventArgs e)
        {
            Up();
        }

        private void btnDown_Click(object sender, EventArgs e)
        {
            Down();
        }

        private void btnCopy_Click(object sender, EventArgs e)
        {
            CopyExec();
        }

        private void pasteAddMenu_Click(object sender, EventArgs e)
        {
            PasteAddExec();
        }

        private void pasteOverrideMenu_Click(object sender, EventArgs e)
        {
            PasteOverrideExec();
        }

        private void listBox1_SelectedIndexChanged(object sender, EventArgs e)
        {
            EnabledChk();
        }

        public void EditExp()
        {
            int si = listBox1.SelectedIndex;
            if ((si >= 0) && (si < expStr.Count))
            {
                TextInputDialog dlg = new TextInputDialog();
                try
                {
                    dlg.ExpStr = expStr[si];
                    dlg.ExpCap = expCap[si];

                    if( dlg.ShowDialog()==DialogResult.OK)
                    {
                        expStr[si] = dlg.ExpStr; 
                        expCap[si] = dlg.ExpCap;
                        listBox1.Items[si] = dlg.ExpCap;
                    }
                }
                finally
                {
                    dlg.Dispose();
                }
            }
        }

        private void strEditToolStripMenuItem_Click(object sender, EventArgs e)
        {
            EditExp();
        }

        private void removeToolStripMenuItem_Click(object sender, EventArgs e)
        {
            RemoveExec();
        }

        /*
private void button1_Click(object sender, EventArgs e)
{
	dynamic a = new DynamicJson();
	a.fff = new string[] { "a", "B" };
	a.fff = "12";
	//a.fff = new { aaa=12, ccc="www" };

	MessageBox.Show(a.fff.GetType().ToString());

	JsonPref s = new JsonPref();
	s.AddInt("aaa", 99);
	string ss = s.ToJson();
	MessageBox.Show(ss);
	s.Parse(ss);
	string sss = s.ToJson();
	MessageBox.Show(sss);

	int i = s.GetInt("aaa");
	MessageBox.Show(String.Format("{0}", i));
}
*/
    }
        }
