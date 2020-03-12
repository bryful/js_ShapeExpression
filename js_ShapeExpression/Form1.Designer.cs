namespace js_ShapeExpresstion
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
            this.ae_window1 = new bryful_due.Ae_window();
            this.btnCreateShape = new bryful_due.Button_AE();
            this.btnGetTargetProperty = new bryful_due.Button_AE();
            this.edTargetPropery = new bryful_due.Edittext_AE();
            this.edBaseProperty = new bryful_due.Edittext_AE();
            this.btnGetBaseProperty = new bryful_due.Button_AE();
            this.edRelative = new bryful_due.Edittext_AE();
            this.btnCreateRelative = new bryful_due.Button_AE();
            this.stCaption = new bryful_due.Statictext_AE();
            this.SuspendLayout();
            // 
            // ae_window1
            // 
            this.ae_window1.AE_Form = this;
            this.ae_window1.AE_funcName = "myDialog";
            this.ae_window1.AE_isCenter = true;
            this.ae_window1.AE_isExportPict = true;
            this.ae_window1.AE_isInFunc = true;
            this.ae_window1.AE_isLocal = true;
            this.ae_window1.AE_maximizeButton = true;
            this.ae_window1.AE_minimizeButton = true;
            this.ae_window1.AE_objName = "winObj";
            this.ae_window1.AE_resizeable = true;
            this.ae_window1.AE_size = new System.Drawing.Size(497, 360);
            this.ae_window1.AE_title = "ShapeExpression";
            this.ae_window1.AE_windowType = bryful_due.windowType.floatingPalette;
            // 
            // btnCreateShape
            // 
            this.btnCreateShape.AE_bounds = new System.Drawing.Rectangle(15, 15, 470, 25);
            this.btnCreateShape.AE_defaultElement = bryful_due.defaultElement.none;
            this.btnCreateShape.AE_isLocal = true;
            this.btnCreateShape.AE_objName = "btnCreateShape";
            this.btnCreateShape.AE_text = "create ShapeLayer";
            this.btnCreateShape.AE_textObjName = "";
            this.btnCreateShape.Font = new System.Drawing.Font("Tahoma", 8.25F);
            this.btnCreateShape.Location = new System.Drawing.Point(15, 15);
            this.btnCreateShape.Name = "btnCreateShape";
            this.btnCreateShape.Size = new System.Drawing.Size(470, 25);
            this.btnCreateShape.TabIndex = 0;
            this.btnCreateShape.Text = "create ShapeLayer";
            this.btnCreateShape.UseVisualStyleBackColor = true;
            // 
            // btnGetTargetProperty
            // 
            this.btnGetTargetProperty.AE_bounds = new System.Drawing.Rectangle(15, 80, 470, 25);
            this.btnGetTargetProperty.AE_defaultElement = bryful_due.defaultElement.none;
            this.btnGetTargetProperty.AE_isLocal = true;
            this.btnGetTargetProperty.AE_objName = "btnGetTargetProperty";
            this.btnGetTargetProperty.AE_text = "get TargetProperty";
            this.btnGetTargetProperty.AE_textObjName = "";
            this.btnGetTargetProperty.Font = new System.Drawing.Font("Tahoma", 8.25F);
            this.btnGetTargetProperty.Location = new System.Drawing.Point(15, 80);
            this.btnGetTargetProperty.Name = "btnGetTargetProperty";
            this.btnGetTargetProperty.Size = new System.Drawing.Size(470, 25);
            this.btnGetTargetProperty.TabIndex = 3;
            this.btnGetTargetProperty.Text = "get TargetProperty";
            this.btnGetTargetProperty.UseVisualStyleBackColor = true;
            // 
            // edTargetPropery
            // 
            this.edTargetPropery.AE_borderless = false;
            this.edTargetPropery.AE_bounds = new System.Drawing.Rectangle(15, 105, 470, 50);
            this.edTargetPropery.AE_isLocal = true;
            this.edTargetPropery.AE_multiline = true;
            this.edTargetPropery.AE_noecho = false;
            this.edTargetPropery.AE_objName = "edTargetPropery";
            this.edTargetPropery.AE_readonly = true;
            this.edTargetPropery.AE_scrollable = true;
            this.edTargetPropery.AE_text = new string[0];
            this.edTargetPropery.AE_textObjName = "";
            this.edTargetPropery.Font = new System.Drawing.Font("Tahoma", 14.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.edTargetPropery.Location = new System.Drawing.Point(15, 105);
            this.edTargetPropery.Multiline = true;
            this.edTargetPropery.Name = "edTargetPropery";
            this.edTargetPropery.ReadOnly = true;
            this.edTargetPropery.ScrollBars = System.Windows.Forms.ScrollBars.Both;
            this.edTargetPropery.Size = new System.Drawing.Size(470, 50);
            this.edTargetPropery.TabIndex = 4;
            // 
            // edBaseProperty
            // 
            this.edBaseProperty.AE_borderless = false;
            this.edBaseProperty.AE_bounds = new System.Drawing.Rectangle(15, 190, 470, 50);
            this.edBaseProperty.AE_isLocal = true;
            this.edBaseProperty.AE_multiline = true;
            this.edBaseProperty.AE_noecho = false;
            this.edBaseProperty.AE_objName = "edBaseProperty";
            this.edBaseProperty.AE_readonly = true;
            this.edBaseProperty.AE_scrollable = true;
            this.edBaseProperty.AE_text = new string[0];
            this.edBaseProperty.AE_textObjName = "";
            this.edBaseProperty.Font = new System.Drawing.Font("Tahoma", 14.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.edBaseProperty.Location = new System.Drawing.Point(15, 190);
            this.edBaseProperty.Multiline = true;
            this.edBaseProperty.Name = "edBaseProperty";
            this.edBaseProperty.ReadOnly = true;
            this.edBaseProperty.ScrollBars = System.Windows.Forms.ScrollBars.Both;
            this.edBaseProperty.Size = new System.Drawing.Size(470, 50);
            this.edBaseProperty.TabIndex = 6;
            // 
            // btnGetBaseProperty
            // 
            this.btnGetBaseProperty.AE_bounds = new System.Drawing.Rectangle(15, 165, 470, 25);
            this.btnGetBaseProperty.AE_defaultElement = bryful_due.defaultElement.none;
            this.btnGetBaseProperty.AE_isLocal = true;
            this.btnGetBaseProperty.AE_objName = "btnGetBaseProperty";
            this.btnGetBaseProperty.AE_text = "get BaseProperty";
            this.btnGetBaseProperty.AE_textObjName = "";
            this.btnGetBaseProperty.Font = new System.Drawing.Font("Tahoma", 8.25F);
            this.btnGetBaseProperty.Location = new System.Drawing.Point(15, 165);
            this.btnGetBaseProperty.Name = "btnGetBaseProperty";
            this.btnGetBaseProperty.Size = new System.Drawing.Size(470, 25);
            this.btnGetBaseProperty.TabIndex = 5;
            this.btnGetBaseProperty.Text = "get BaseProperty";
            this.btnGetBaseProperty.UseVisualStyleBackColor = true;
            // 
            // edRelative
            // 
            this.edRelative.AE_borderless = false;
            this.edRelative.AE_bounds = new System.Drawing.Rectangle(15, 275, 470, 50);
            this.edRelative.AE_isLocal = true;
            this.edRelative.AE_multiline = true;
            this.edRelative.AE_noecho = false;
            this.edRelative.AE_objName = "edRelative";
            this.edRelative.AE_readonly = true;
            this.edRelative.AE_scrollable = true;
            this.edRelative.AE_text = new string[0];
            this.edRelative.AE_textObjName = "";
            this.edRelative.Font = new System.Drawing.Font("Tahoma", 14.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.edRelative.Location = new System.Drawing.Point(15, 275);
            this.edRelative.Multiline = true;
            this.edRelative.Name = "edRelative";
            this.edRelative.ReadOnly = true;
            this.edRelative.ScrollBars = System.Windows.Forms.ScrollBars.Both;
            this.edRelative.Size = new System.Drawing.Size(470, 50);
            this.edRelative.TabIndex = 8;
            // 
            // btnCreateRelative
            // 
            this.btnCreateRelative.AE_bounds = new System.Drawing.Rectangle(15, 250, 470, 25);
            this.btnCreateRelative.AE_defaultElement = bryful_due.defaultElement.none;
            this.btnCreateRelative.AE_isLocal = true;
            this.btnCreateRelative.AE_objName = "btnCreateRelative";
            this.btnCreateRelative.AE_text = "create Relative Path";
            this.btnCreateRelative.AE_textObjName = "";
            this.btnCreateRelative.Font = new System.Drawing.Font("Tahoma", 8.25F);
            this.btnCreateRelative.Location = new System.Drawing.Point(15, 250);
            this.btnCreateRelative.Name = "btnCreateRelative";
            this.btnCreateRelative.Size = new System.Drawing.Size(470, 25);
            this.btnCreateRelative.TabIndex = 7;
            this.btnCreateRelative.Text = "create Relative Path";
            this.btnCreateRelative.UseVisualStyleBackColor = true;
            // 
            // stCaption
            // 
            this.stCaption.AE_bounds = new System.Drawing.Rectangle(12, 55, 519, 25);
            this.stCaption.AE_isLocal = true;
            this.stCaption.AE_multiline = false;
            this.stCaption.AE_objName = "stCaption";
            this.stCaption.AE_scrolling = false;
            this.stCaption.AE_text = "Expressionを相対パスで指定するスクリプト";
            this.stCaption.AE_textObjName = "";
            this.stCaption.Font = new System.Drawing.Font("Tahoma", 8.25F);
            this.stCaption.Location = new System.Drawing.Point(12, 55);
            this.stCaption.Name = "stCaption";
            this.stCaption.Size = new System.Drawing.Size(519, 25);
            this.stCaption.TabIndex = 9;
            this.stCaption.Text = "Expressionを相対パスで指定するスクリプト";
            // 
            // Form1
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 12F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(497, 360);
            this.Controls.Add(this.stCaption);
            this.Controls.Add(this.edRelative);
            this.Controls.Add(this.btnCreateRelative);
            this.Controls.Add(this.edBaseProperty);
            this.Controls.Add(this.btnGetBaseProperty);
            this.Controls.Add(this.edTargetPropery);
            this.Controls.Add(this.btnGetTargetProperty);
            this.Controls.Add(this.btnCreateShape);
            this.FormBorderStyle = System.Windows.Forms.FormBorderStyle.SizableToolWindow;
            this.Name = "Form1";
            this.StartPosition = System.Windows.Forms.FormStartPosition.CenterScreen;
            this.Text = "ShapeExpression";
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private bryful_due.Ae_window ae_window1;
        private bryful_due.Button_AE btnCreateShape;
        private bryful_due.Edittext_AE edRelative;
        private bryful_due.Button_AE btnCreateRelative;
        private bryful_due.Edittext_AE edBaseProperty;
        private bryful_due.Button_AE btnGetBaseProperty;
        private bryful_due.Edittext_AE edTargetPropery;
        private bryful_due.Button_AE btnGetTargetProperty;
        private bryful_due.Statictext_AE stCaption;
    }
}

