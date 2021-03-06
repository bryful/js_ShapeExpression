﻿/*
*/

(function(me){
	//UIの配列
	//ターゲット
	#include "bryScriptLib.jsxinc"
	
	var lyoutMode = 0;
	//----------------------------------
	var scriptName = File.decode($.fileName.getName().changeExt(""));	var aeclipPath = File.decode($.fileName.getParent()+"/aeclip.exe");
	var targetFolder = new Folder ( File.decode($.fileName.getParent() + "/(" +$.fileName.getName().changeExt("")+ ")"));	var prefPath = new Folder ( File.decode($.fileName.getParent() + "/(" +$.fileName.getName().changeExt(".pref")+ ")"));	var matchNames = [		"layout",		"ADBE Vector Group",		"ADBE Vector Shape - Rect",		"ADBE Vector Shape - Ellipse",		"ADBE Vector Shape - Star",		"ADBE Vector Shape - Group",		"ADBE Vector Graphic - Fill",		"ADBE Vector Graphic - Stroke",		"ADBE Vector Graphic - G-Fill",		"ADBE Vector Graphic - G-Stroke",		"ADBE Vector Filter - Merge",		"ADBE Vector Filter - Offset",		"ADBE Vector Filter - PB",		"ADBE Vector Filter - Repeater",		"ADBE Vector Filter - RC",		"ADBE Vector Filter - Trim",		"ADBE Vector Filter - Twist",		"ADBE Vector Filter - Roughen",		"ADBE Vector Filter - Wiggler",		"ADBE Vector Filter - Zigzag"	];
	var iconPaths = [
		"Add00Layoutset.png",
		"Add01Group.png",
		"Add02Rect.png",
		"Add03En.png",
		"Add04star.png",
		"Add05Shape.png",
		"Add06Fill.png",
		"Add07Stroke.png",
		"Add08GFill.png",
		"Add09GStroke.png",
		"Add10Merge.png",
		"Add11Offset.png",
		"Add12PANK.png",
		"Add13Rep.png",
		"Add14kadomaru.png",
		"Add15Trimi.png",
		"Add16Twist.png",
		"Add17Roughen.png",
		"Add18Wjggle.png",
		"Add19Zigzag.png"
		];
	// ********************************************************************************
	var prefSave = function()
	{
		var pef = {};
		pref.layoutMode = layoutMode;
		
		var f = new File(prefPath);
		
		try{
			if (f.open("w")){
				f.write("Sample Text");
			}
		}finally{
			f.close();
		}
	}	// ********************************************************************************	var addShapes = function(mn)	{
		var ac = getActiveComp();
		if (ac==null) return;		var lyr = getActiveLayer(ac);		var p = getPropertyBase(lyr);
		if (p==null) return;		/*
		var pindex = p.propertyIndex;
		if (p.matchName=="ADBE Root Vectors Group") pindex =-1;
		if (p.matchName=="ADBE Vector Group") pindex =-1;
		*/
		var pg = p.findContent();
		if(pg.matchName =="ADBE Vector Group"){
			pg = pg.property(2);
		}
		try{
			if (pg.canAddProperty(mn) == true)			{				var pp  = pg.addProperty(mn);
				pp.selected = true;
				/*if (pindex>=0) {
					pp.moveTo(pindex);
				}*/
			}else{
				alert("er" + pg.name);
			}
		}catch(e){
			alert(e.toString());
		}	}	// ********************************************************************************	var imageFiles = [];	var openImage = function()	{		for ( var i =0; i<iconPaths.length; i++)		{
			var p = targetFolder.fullName +"/" +iconPaths[i];
			var f = new File(p);
			if (f.exists==false) {
				alert(p + "\r\nがありません！");
				return;
			}			imageFiles.push(f);		}	}	openImage();	var w = 25 + 10;
	var h = imageFiles.length * 25 + 10;
	// ********************************************************************************
	var winObj = ( me instanceof Panel) ? me : new Window("palette", "ShapeExpression", [ 0,  0,  w,  h]  ,{resizeable:false, maximizeButton:false, minimizeButton:false});
	// ********************************************************************************
	var ctrl_xx = 15;
	var ctrl_yy = 15;

	// ********************************************************************************	var imageCtrls = [];	if (imageFiles.length>0){		var x = 5;		var y = 5;				for (var i=0; i<imageFiles.length; i++)		{			imageCtrls.push(winObj.add("iconbutton", [  x,   y,   x +  25,   y +  25] , imageFiles[i]));			imageCtrls[i].mname = matchNames[i];			y += 25;
		}
		for (var i=1; i<imageFiles.length; i++)		{			imageCtrls[i].onClick = function(){				addShapes(this.mname);
			}		};
		imageCtrls[0].onClick= function()
		{
			lyoutMode = (lyoutMode +1) % 2;
			lyoutSet();
		}	}
	
	// ********************************************************************************	var lyoutSet = function()
	{
		//windowサイズ
		var sz = 25;
		var w = 0
		var h = 0;
		switch(lyoutMode){
			case 0:
				w = sz + 10;
				h = imageFiles.length * sz + 10;
				break;
			case 1:
				h = sz + 10;
				w = imageFiles.length * sz + 10;
				break;
		}
		var b = winObj.bounds;
		b[2] = b[0]+w;
		b[3] = b[1]+h;

		var x = 5;		var y = 5;
		for (var i=0; i<imageFiles.length; i++)		{
			var b = imageCtrls[i].bounds;

			b[0] = x;
			b[1] = y;
			b[2] = b[0] + sz;
			b[3] = b[1] + sz;
			switch(lyoutMode){
				case 0:
					y+=sz;
					break;
				case 1:
					x+=sz;
					break;
			}		}
	}
	lyoutMode = 0;
	lyoutSet();


	// ********************************************************************************
	//-------------------------------------------------------------------------
	if ( ( me instanceof Panel) == false){
		winObj.center(); 
		winObj.show();
	}
	//-------------------------------------------------------------------------
})(this);