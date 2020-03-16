using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace AE_Expression_CopyPaste
{
    public partial class NavBar : Form
    {
        private Form m_form = null;
        public Form Form
        {
            get { return m_form; }
            set
            {
                m_form = value;
                if(m_form!=null)
                {
                    SizeSet();
                    LocSet();

                    m_form.SizeChanged += M_form_SizeChanged;
                    m_form.Move += M_form_Move;

                }
            }
        }

        private void M_form_Move(object sender, EventArgs e)
        {
            LocSet();
        }

        private void M_form_SizeChanged(object sender, EventArgs e)
        {
            SizeSet();
        }

        private Point mousePoint;
        private Point formPoint;

        public NavBar()
        {
            InitializeComponent();
        }
        // *****************************************************************
        public void LocSet()
        {
            if (m_form == null) return;

            this.Location = new Point(m_form.Left+10, m_form.Top - this.Height - 4);

        }
        // *****************************************************************
        public void SizeSet()
        {
            if (m_form == null) return;

            this.Size = new Size(m_form.Width - 20, 20);

        }
        // *****************************************************************
        private void NavBar_MouseDown(object sender, MouseEventArgs e)
        {
            formActive();
            if ((e.Button & MouseButtons.Left) == MouseButtons.Left)
            {
                mousePoint = new Point(e.X, e.Y);
                if (m_form!=null)
                {
                    formPoint = new Point(m_form.Location.X, m_form.Location.Y);
                }
            }
        }

        private void NavBar_MouseMove(object sender, MouseEventArgs e)
        {
            if ((e.Button & MouseButtons.Left) == MouseButtons.Left)
            {
                int xx = e.X - mousePoint.X;
                int yy = e.Y - mousePoint.Y;
                this.Location = new Point(this.Location.X + xx, this.Location.Y + yy);
                if (m_form!=null)
                {
                    m_form.Location = new Point(this.Location.X-10, this.Location.Y + this.Height+4);
                }
            }
        }
        // *****************************************************************
        private void formActive()
        {
            if (m_form == null) return;
            //m_form.Activate();
            //m_form.BringToFront();
            m_form.TopMost = true;
            m_form.TopMost = false;
        }
        // *****************************************************************
    }
}
