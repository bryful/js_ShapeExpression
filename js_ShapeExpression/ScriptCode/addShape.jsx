/*
*/

(function(me){
	//UIの配列
	//ターゲット
	// ********************************************************************************
	//prototype登録
	String.prototype.trim = function(){
		if (this=="" ) return ""
		else return this.replace(/[\r\n]+$|^\s+|\s+$/g, "");
	}
	String.prototype.getParent = function(){
		var r=this;var i=this.lastIndexOf("/");if(i>=0) r=this.substring(0,i);
		return r;
	}
	//ファイル名のみ取り出す（拡張子付き）
	String.prototype.getName = function(){
		var r=this;var i=this.lastIndexOf("/");if(i>=0) r=this.substring(i+1);
		return r;
	}
	//拡張子のみを取り出す。
	String.prototype.getExt = function(){
		var r="";var i=this.lastIndexOf(".");if (i>=0) r=this.substring(i);
		return r;
	}
	//指定した書拡張子に変更（dotを必ず入れること）空文字を入れれば拡張子の消去。
	String.prototype.changeExt=function(s){
		var i=this.lastIndexOf(".");
		if(i>=0){return this.substring(0,i)+s;}else{return this; }
	}
	//文字の置換。（全ての一致した部分を置換）
	String.prototype.replaceAll=function(s,d){ return this.split(s).join(d);}

	FootageItem.prototype.nameTrue = function(){ var b=this.name;this.name=""; var ret=this.name;this.name=b;return ret;}
	
	//----------------------------------
	var scriptName = File.decode($.fileName.getName().changeExt(""));	var aeclipPath = File.decode($.fileName.getParent()+"/aeclip.exe");
	var targetFolder = new Folder ( $.fileName.getParent() + "/(" +$.fileName.getName().changeExt("")+ ")");	var matchNames = [		"ADBE Vector Group",		"ADBE Vector Shape - Rect",		"ADBE Vector Shape - Ellipse",		"ADBE Vector Shape - Star",		"ADBE Vector Shape - Group",		"ADBE Vector Graphic - Fill",		"ADBE Vector Graphic - Stroke",		"ADBE Vector Graphic - G-Fill",		"ADBE Vector Graphic - G-Stroke",		"ADBE Vector Filter - Merge",		"ADBE Vector Filter - Offset",		"ADBE Vector Filter - PB",		"ADBE Vector Filter - Repeater",		"ADBE Vector Filter - RC",		"ADBE Vector Filter - Trim",		"ADBE Vector Filter - Twist",		"ADBE Vector Filter - Roughen",		"ADBE Vector Filter - Wiggler",		"ADBE Vector Filter - Zigzag"	];	// ********************************************************************************
	/*
		アクティブなコンポジションを獲得
	*/
	// ********************************************************************************
	var getActiveComp = function()
	{
		var ret = null;
		ret = app.project.activeItem;
		
		if ( (ret instanceof CompItem)===false)
		{
			ret = null;
			alert("コンポをアクティブにしてください！");
			
		}
		return ret;
	}		// ********************************************************************************	var isPB = function(prop)	{		return ( (prop.matchName =="ADBE Root Vectors Group")||(prop.matchName =="ADBE Vector Group"));	}
	var getPropertyBase = function()
	{
		var ret = null;
		var ac = getActiveComp();
		if (ac==null) return ret;
		
		var sel = ac.selectedProperties;
		var selc = sel.length;
		;		if (selc>0)
		{
			ret = sel[0];
		}		if (ret==null){			alert("select!");		}
		return ret;
	}	// ********************************************************************************	var addShapes = function(mn)	{		var p = getPropertyBase();		if (p==null) return;		var pindex = 0;		if (p instanceof Property){			 pindex = p.parentProperty.propertyIndex;		}else if (p instanceof PropertyGroup){			if (isPB(p)==false){			 	pindex = p.propertyIndex;			 }		}		while(isPB(p)==false){			p = p.parentProperty;			if ((p instanceof ShapeLayer)||(p instanceof AVLayer)){				return;			}		}		if (p.matchName == "ADBE Vector Group"){			p = p.property(2);		}		if (p.canAddProperty(mn) == true)		{			var np = p.addProperty(mn);			if (pindex>=1){				np.moveTo(pindex+1);			}			np.selected = true;		}	}	// ********************************************************************************	var imageFiles = [];	var openImage = function()	{		var df = new Folder(targetFolder);		if (df.exists==false) return;		var pngFiles = df.getFiles("*.png");		if (pngFiles.length!=19){			alert("画像が足りない");		 	return;		}				for ( var i =0; i<pngFiles.length; i++)		{			imageFiles.push(new File(pngFiles[i].fullName));		}	}	openImage();	var w = 25 + 10;
	var h = imageFiles.length * 25 + 10;
	// ********************************************************************************
	var winObj = ( me instanceof Panel) ? me : new Window("palette", "ShapeExpression", [ 0,  0,  w,  h]  ,{resizeable:false, maximizeButton:false, minimizeButton:false});
	// ********************************************************************************
	var ctrl_xx = 15;
	var ctrl_yy = 15;

	// ********************************************************************************	var imageCtrls = [];	if (imageFiles.length>0){		var x = 5;		var y = 5;				for (var i=0; i<imageFiles.length; i++)		{			imageCtrls.push(winObj.add("iconbutton", [  x,   y,   x +  25,   y +  25] , imageFiles[i]));			imageCtrls[i].mname = matchNames[i];			imageCtrls[i].onClick = function()			{				addShapes(this.mname);							};			y += 25;
		}	}


	


	// ********************************************************************************
	//-------------------------------------------------------------------------
	if ( ( me instanceof Panel) == false){
		winObj.center(); 
		winObj.show();
	}
	//-------------------------------------------------------------------------
})(this);