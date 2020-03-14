(function(me){

	var iconsFiles = []; //アイコンファイルのパス配列
	var iconsFunc = [];//プリセット/jsxファイルのパス配列
	var icons = []; // imageの配列
	
	//----------------------------------
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

	
	//----------------------------------
	var scriptName = File.decode($.fileName.getName().changeExt(""));
	var targetFolder = new Folder ( $.fileName.getParent() + "/(" +$.fileName.getName().changeExt("")+ ")");

	// ************************************************************************
	var iconLoad = function()
	{
		var ret = false;
		iconsFiles = []; //アイコンファイルのパス配列
		iconsFunc = [];//プリセットファイルのパス配列
		if (targetFolder.exists == false) {
			alert("フォルダがないです");
			return ret;
		}
		var pngFiles = f.getFiles("*.png");
		if (pngFiles.length <=0) {
			alert("pngファイルがないです");
			return ret;
		}
		// ffx/jsxを探す
		for ( var i = 0; i<pngFiles.length; i++){
			var jsx = new File( pngFiles[i].fullName.changeExt(".jsx"));
			var ffx = new File( pngFiles[i].fullName.changeExt(".ffx"));
			if (jsx.exists == true) {
				iconsFiles.push(pngFiles[i]);
				ffx.isFFX = false;
				ffx.isJSX = true;
				iconsFunc.push(ffx);
			}else{
				if (ffx.exists == true) {
					iconsFiles.push(pngFiles[i]);
					ffx.isFFX = true;
					ffx.isJSX = false;
					iconsFunc.push(ffx);
				}
			}
		}
		ret = (iconsFiles.length > 0);
		if ( ret==false )
		{
			alert("jsx/ffxファイルがないです");
		}
		return ret;
	}
	iconLoad(targetFolder);
	// ************************************************************************
	var initIcons = function()
	{
		if (icons.length ==0) return;
		
		for ( var i= icons.length-1; i>=0; i--)
		{
			icons[i].visible = false;
			delete icons[i];
			icons[i] = null;
		}
		icons = [];
	}
	// ************************************************************************
	var winObj = ( me instanceof Panel) ? me : new Window("palette", "ShapeAssist", [ 0,  0, 345,  360]  ,{resizeable:true, maximizeButton:true, minimizeButton:true});
	// ************************************************************************
	var btnCreateShapeLayer = winObj.add("button", [  15,   15,   15+ 320,   15+  25], "create shapeLayer" );
	var iconImag01 = winObj.add("image", [  15,   59,   15+  50,   59+  50] /*, iconImag01*/ );

	// ************************************************************************
	var createIcons = function()
	{
		initIcons();
		if (iconsFiles.length<=0) return;
		for ( var i=0; i<iconsFiles.length; i++)
		{
		}
	}
	// ************************************************************************
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
	// ************************************************************************
	var getPropertyGroup = function()
	{
		var ret = null;
		var ac = getActiveComp();
		if (ac==null) {
			alert("not actived CompItem!");
			return ret;
		}
		
		var sel = ac.selectedProperties;
		var selP = null;
		var selPG = null;
		
		if (sel.length>0)
		{
			for ( var i=0; i < sel.length; i++)
			{
				if ( (selP != null) && (selPG != null) ) break;
				if ( selP == null) {
					if (sel[i] instanceof Property) {
						selP = sel[i];
					}
				if ( selPG == null) {
					if ( (sel[i] instanceof Property)==false) {
						selPG = sel[i];
					}
				}
				}
			}
			if (selPG != null) {
				ret = selPG;
			}else if (selP != null){
				ret = selP.parentProperty;
			}
		}
		if (ret=== null)
		{
			alert("not selected PropertyGroup!");
		}else{
			while ( (ret.matchName !== "ADBE Vector Group") && (ret.matchName !== "ADBE Root Vectors Group") )
			{
				ret = ret.parentProperty;
			}
		}
		return ret;
	}
	// ************************************************************************
	var createShapeLayer = function()
	{
		var ret = false;
		
		var ac = getActiveComp();
		if (ac==null) return ret;

		var  lyr = null;
		
		if (ac.selectedLayers.length>0)
		{
			lyr = ac.selectedLayers[0];
		}

		
		app.beginUndoGroup("createShapeLayer");
		var sl = ac.layers.addShape();
		if (sl === null ){
			alert("errer!");
			return ret;
		}
		if (lyr !== null)
		{
			sl.moveBefore(lyr);
		}
		app.endUndoGroup();
	}
	// ************************************************************************
	btnCreateShapeLayer.onClick = createShapeLayer;
	// ************************************************************************
	var resizeWin = function()
	{
		var b = winObj.bounds;
		var w = b[2] - b[0];
		var h = b[3] - b[1];
		
		var b2 = btnCreateShapeLayer.bounds;
		b2[0] = 15;
		b2[2] = b2[0] + (w - 30);
		btnCreateShapeLayer.bounds = b2;
		
	}
	resizeWin();
	winObj.onResize = resizeWin;
	//-------------------------------------------------------------------------
	if ( ( me instanceof Panel) == false){
		winObj.center(); 
		winObj.show();
	}
	//-------------------------------------------------------------------------
})(this);