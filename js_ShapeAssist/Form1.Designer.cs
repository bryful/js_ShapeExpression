namespace js_ShapeAssist
{
    partial class Form1
    {
        /// <summary>
        /// 必要なデザイナー変数です。
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// 使用中のリソースをすべてクリーンアップします。
        /// </summary>
        /// <param name="disposing">マネージド リソースを破棄する場合は true を指定し、その他の場合は false を指定します。</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows フォーム デザイナーで生成されたコード

        /// <summary>
        /// デザイナー サポートに必要なメソッドです。このメソッドの内容を
        /// コード エディターで変更しないでください。
        /// </summary>
        private void InitializeComponent()
        {
            this.components = new System.ComponentModel.Container();
            this.ShapeAssist = new bryful_due.Ae_window();
            this.btnCreateShapeLayer = new bryful_due.Button_AE();
            this.iconImag01 = new bryful_due.Image_AE();
            ((System.ComponentModel.ISupportInitialize)(this.iconImag01)).BeginInit();
            this.SuspendLayout();
            // 
            // ShapeAssist
            // 
            this.ShapeAssist.AE_Form = this;
            this.ShapeAssist.AE_funcName = "myDialog";
            this.ShapeAssist.AE_isCenter = true;
            this.ShapeAssist.AE_isExportPict = true;
            this.ShapeAssist.AE_isInFunc = true;
            this.ShapeAssist.AE_isLocal = true;
            this.ShapeAssist.AE_maximizeButton = true;
            this.ShapeAssist.AE_minimizeButton = true;
            this.ShapeAssist.AE_objName = "winObj";
            this.ShapeAssist.AE_resizeable = true;
            this.ShapeAssist.AE_size = new System.Drawing.Size(345, 361);
            this.ShapeAssist.AE_title = "ShapeAssist";
            this.ShapeAssist.AE_windowType = bryful_due.windowType.floatingPalette;
            // 
            // btnCreateShapeLayer
            // 
            this.btnCreateShapeLayer.AE_bounds = new System.Drawing.Rectangle(15, 15, 320, 25);
            this.btnCreateShapeLayer.AE_defaultElement = bryful_due.defaultElement.none;
            this.btnCreateShapeLayer.AE_isLocal = true;
            this.btnCreateShapeLayer.AE_objName = "btnCreateShapeLayer";
            this.btnCreateShapeLayer.AE_text = "create shapeLayer";
            this.btnCreateShapeLayer.AE_textObjName = "";
            this.btnCreateShapeLayer.Font = new System.Drawing.Font("Tahoma", 8.25F);
            this.btnCreateShapeLayer.Location = new System.Drawing.Point(15, 15);
            this.btnCreateShapeLayer.Name = "btnCreateShapeLayer";
            this.btnCreateShapeLayer.Size = new System.Drawing.Size(320, 25);
            this.btnCreateShapeLayer.TabIndex = 0;
            this.btnCreateShapeLayer.Text = "create shapeLayer";
            this.btnCreateShapeLayer.UseVisualStyleBackColor = true;
            // 
            // iconImag01
            // 
            this.iconImag01.AE_bounds = new System.Drawing.Rectangle(15, 59, 50, 50);
            this.iconImag01.AE_defaultExt = ".png";
            this.iconImag01.AE_imageFileName = "iconImag01.png";
            this.iconImag01.AE_imageFilePath = "./";
            this.iconImag01.AE_imageObjName = "iconImag01";
            this.iconImag01.AE_isLocal = true;
            this.iconImag01.AE_objName = "iconImag01";
            this.iconImag01.BackColor = System.Drawing.SystemColors.ControlLight;
            this.iconImag01.Font = new System.Drawing.Font("Tahoma", 8.25F);
            this.iconImag01.Location = new System.Drawing.Point(15, 59);
            this.iconImag01.Name = "iconImag01";
            this.iconImag01.Size = new System.Drawing.Size(50, 50);
            this.iconImag01.TabIndex = 1;
            this.iconImag01.TabStop = false;
            // 
            // Form1
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 12F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(345, 361);
            this.Controls.Add(this.iconImag01);
            this.Controls.Add(this.btnCreateShapeLayer);
            this.FormBorderStyle = System.Windows.Forms.FormBorderStyle.SizableToolWindow;
            this.Name = "Form1";
            this.StartPosition = System.Windows.Forms.FormStartPosition.CenterScreen;
            this.Text = "ShapeAssist";
            ((System.ComponentModel.ISupportInitialize)(this.iconImag01)).EndInit();
            this.ResumeLayout(false);

        }

        #endregion

        private bryful_due.Ae_window ShapeAssist;
        private bryful_due.Button_AE btnCreateShapeLayer;
        private bryful_due.Image_AE iconImag01;
    }
}

