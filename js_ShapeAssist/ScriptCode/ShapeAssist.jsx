(function(me){

	var imageWidth = 32;
	var imageHeight = 32;
	
	var imageFiles = []; //アイコンファイルのパス配列
	var imageFuncs = [];//プリセット/jsxファイルのパス配列

	var imageCtrls = []; // imageの配列
	
	
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
	// ********************************************************************************
	var getActiveLayer = function(cmp)
	{
		var ret = null;
		if ( (cmp instanceof CompItem)==false) return ret;
		var sl = cmp.selectedLayers;
		if (sl.length<=0) {
			alert("	レイヤが選択されていません");
			return ret;
		}
		ret = sl[0];
		return ret;
	}
	// ********************************************************************************
	var getActivePropertyGroup = function(cmp)
	{
		var ret = null;
		if ( (cmp instanceof CompItem)==false) return ret;
		var sp = cmp.selectedProperties;
		if (sp.length<=0) {
			alert("	プロパティが選択されていません");
			return ret;
		}
		ret = sp[0];
		return ret;
	}
	// ************************************************************************
	var folderScan = function(f)
	{
		var ret = false;
		if (f.exists == false) {
			alert(f.name + " : フォルダがないです");
			return ret;
		}
		imageFiles = []; //アイコンファイルのパス配列
		imageFuncs = [];

		var pngFiles = f.getFiles("*.png");
			
		for ( var i=0; i<pngFiles.length; i++)
		{
			var ffx = new File( pngFiles[i].fullName.changeExt(".ffx"));
			if (ffx.exists == true) {
				imageFiles.push(pngFiles[i]);
				imageFuncs.push(ffx);
			}	
		}
		ret = (imageFiles.length > 0);
		if ( ret==false )
		{
			alert("ffxファイルがないです");
		}
		return ret;
	}
	folderScan(targetFolder);
	
	// ************************************************************************
	var initImageCtrls = function()
	{
		if (imageCtrls.length ==0) return;
		
		for ( var i= imageCtrls.length-1; i>=0; i--)
		{
			imageCtrls[i].visible = false;
			delete imageCtrls[i];
			imageCtrls[i] = null;
		}
		imageCtrls = [];
	}
	// ************************************************************************
	var winObj = ( me instanceof Panel) ? me : new Window("palette", "ShapeAssist", [ 0,  0, 345,  360]  ,{resizeable:true, maximizeButton:true, minimizeButton:true});
	// ************************************************************************
	var btnCreateShapeLayer = winObj.add("button", [  15,   15,   15+ 320,   15+  25], "create shapeLayer" );
	// ************************************************************************
	var applyFunc = function()
	{
		var ac = getActiveComp();
		var ap = getActivePropertyGroup(ac);
		var lyr = getActiveLayer(ac);
		if ( (lyr instanceof ShapeLayer) == false) {
			alert("シェイプレイヤを選んでください");
			return;
		}
		if ( ap == null) {
			alert("何か選んでください");
			return;
		}
		var f = this.funcFile;
		if ( (ap.matchName =="ADBE Root Vectors Group")||(ap.matchName =="ADBE Vector Group")){
			lyr.applyPreset(f);
			
		}else{
			alert("	シェイプグループが選択されていません");
		}
	}	

	// ************************************************************************
	var createImageCtrls = function()
	{
		initImageCtrls();
		if (imageFiles.length<=0) return;
		var x = 15;
		for ( var i=0; i<imageFiles.length; i++)
		{

			imageCtrls.push(winObj.add("iconbutton", [  x,   50,   x +  imageWidth,   50 +  imageHeight] , imageFiles[i]));
			imageCtrls[i].funcFile = imageFuncs[i];
			imageCtrls[i].onClick = applyFunc;
			imageCtrls[i].visible = true;
			x += imageWidth;
		}
	}
	createImageCtrls();
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
		
		if (imageCtrls.length>0) {
			var xmax = w - imageWidth/2;
			
			var xm = b2[0];
			var ym = b2[3] + xm;
			var xpos = xm;
			var ypos = ym;
			for ( var i = 0; i<imageCtrls.length; i++){
				ib = imageCtrls[i].bounds;
				ib[0] = xpos;
				ib[1] = ypos;
				ib[2] = xpos + imageWidth;
				ib[3] = ypos + imageHeight;
				imageCtrls[i].bounds = ib;
				xpos += imageWidth;
				if (xpos>=xmax){
					xpos = xm;
					ypos += imageHeight;
				}
			}
		}
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