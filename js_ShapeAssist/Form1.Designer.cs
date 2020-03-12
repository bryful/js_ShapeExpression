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
            this.image_AE1 = new bryful_due.Image_AE();
            this.ExportShape = new bryful_due.Button_AE();
            ((System.ComponentModel.ISupportInitialize)(this.image_AE1)).BeginInit();
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
            // image_AE1
            // 
            this.image_AE1.AE_bounds = new System.Drawing.Rectangle(15, 99, 50, 50);
            this.image_AE1.AE_defaultExt = ".png";
            this.image_AE1.AE_imageFileName = "image_AE1_img.png";
            this.image_AE1.AE_imageFilePath = "./";
            this.image_AE1.AE_imageObjName = "image_AE1_img";
            this.image_AE1.AE_isLocal = false;
            this.image_AE1.AE_objName = "image_AE1";
            this.image_AE1.BackColor = System.Drawing.SystemColors.ControlLight;
            this.image_AE1.Font = new System.Drawing.Font("Tahoma", 8.25F);
            this.image_AE1.Location = new System.Drawing.Point(15, 99);
            this.image_AE1.Name = "image_AE1";
            this.image_AE1.Size = new System.Drawing.Size(50, 50);
            this.image_AE1.TabIndex = 1;
            this.image_AE1.TabStop = false;
            // 
            // ExportShape
            // 
            this.ExportShape.AE_bounds = new System.Drawing.Rectangle(15, 55, 320, 25);
            this.ExportShape.AE_defaultElement = bryful_due.defaultElement.none;
            this.ExportShape.AE_isLocal = true;
            this.ExportShape.AE_objName = "btnExportShape";
            this.ExportShape.AE_text = "export Shape";
            this.ExportShape.AE_textObjName = "";
            this.ExportShape.Font = new System.Drawing.Font("Tahoma", 8.25F);
            this.ExportShape.Location = new System.Drawing.Point(15, 55);
            this.ExportShape.Name = "ExportShape";
            this.ExportShape.Size = new System.Drawing.Size(320, 25);
            this.ExportShape.TabIndex = 2;
            this.ExportShape.Text = "export Shape";
            this.ExportShape.UseVisualStyleBackColor = true;
            // 
            // Form1
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 12F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(345, 361);
            this.Controls.Add(this.ExportShape);
            this.Controls.Add(this.image_AE1);
            this.Controls.Add(this.btnCreateShapeLayer);
            this.FormBorderStyle = System.Windows.Forms.FormBorderStyle.SizableToolWindow;
            this.Name = "Form1";
            this.StartPosition = System.Windows.Forms.FormStartPosition.CenterScreen;
            this.Text = "ShapeAssist";
            ((System.ComponentModel.ISupportInitialize)(this.image_AE1)).EndInit();
            this.ResumeLayout(false);

        }

        #endregion

        private bryful_due.Ae_window ShapeAssist;
        private bryful_due.Button_AE btnCreateShapeLayer;
        private bryful_due.Button_AE ExportShape;
        private bryful_due.Image_AE image_AE1;
    }
}

