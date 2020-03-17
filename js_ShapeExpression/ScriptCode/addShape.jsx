﻿/*
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
	var scriptName = File.decode($.fileName.getName().changeExt(""));
	var targetFolder = new Folder ( $.fileName.getParent() + "/(" +$.fileName.getName().changeExt("")+ ")");
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
	}
	var getPropertyBase = function()
	{
		var ret = null;
		var ac = getActiveComp();
		if (ac==null) return ret;
		
		var sel = ac.selectedProperties;
		var selc = sel.length;
		;
		{
			ret = sel[0];
		}
		return ret;
	}
	var h = imageFiles.length * 25 + 10;
	// ********************************************************************************
	var winObj = ( me instanceof Panel) ? me : new Window("palette", "ShapeExpression", [ 0,  0,  w,  h]  ,{resizeable:false, maximizeButton:false, minimizeButton:false});
	// ********************************************************************************
	var ctrl_xx = 15;
	var ctrl_yy = 15;

	// ********************************************************************************
		}


	


	// ********************************************************************************
	//-------------------------------------------------------------------------
	if ( ( me instanceof Panel) == false){
		winObj.center(); 
		winObj.show();
	}
	//-------------------------------------------------------------------------
})(this);