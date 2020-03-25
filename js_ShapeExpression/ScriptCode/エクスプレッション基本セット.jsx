/*

*/

(function(me){
	//UIの配列
	var cntrlTbl = [];
	//ターゲット
	var targetPath = [];
	var basePath = [];
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
	// ********************************************************************************
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
	// ********************************************************************************	var getPropertyGroup = function(cmp)	{		var ret = null;
		if ((cmp instanceof CompItem)==false){			return ret;		}		var lyrs = cmp.selectedLayers;		if(lyrs.length!==1){			alert("レイヤを1個だけ選んでください");
			return ret;
		}		var props = lyrs[0].selectedProperties;		var pg = null;		if(props.length>=1){			for ( var i=0; i<props.length; i++)			{				if ((props[i].matchName=="ADBE Root Vectors Group")||(props[i].matchName=="ADBE Vector Group"))				{					pg = props[i];					break;				}			}			if(pg==null){				for ( var i=0; i<props.length; i++)				{					if (props[i] instanceof Property){						pg = props[i].parentProperty;						break;					} else{						pg = props[i].parentProperty;						break;					}				}			}		}else{			pg = lyrs[0].property("ADBE Root Vectors Group");		}		if(pg==null){			alert("グループかコンテンツを選んでください");
		}else{			ret = pg;		}		return ret;	}
	// ********************************************************************************
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
	// ********************************************************************************
	/*
		スライダーエフェクト[open]を追加
	*/
	// ********************************************************************************
	var addSilderOpen = function()
	{
		var ret = false;
		
		var ac = getActiveComp();
		if (ac==null) return ret;

		var  lyr = null;
		
		if (ac.selectedLayers.length>0)
		{
			lyr = ac.selectedLayers[0];
		}

		
		app.beginUndoGroup("addSilderOpen");
		var efg = lyr.property("ADBE Effect Parade");
		var fx = null;
		if (efg.canAddProperty("ADBE Slider Control")){
			fx = efg.addProperty("ADBE Slider Control");
			if (fx!=null) {
				fx.name = "open";
				fx.enabled =false;
				fx.property(1).setValue(100);
			}
		}
		app.endUndoGroup();

	}
	// ********************************************************************************
	/*
		スライダーエフェクト[open]を追加
	*/
	// ********************************************************************************
	var addColor = function()
	{
		var ret = false;
		
		var ac = getActiveComp();
		if (ac==null) return ret;

		var  lyr = null;
		
		if (ac.selectedLayers.length>0)
		{
			lyr = ac.selectedLayers[0];
		}

		
		app.beginUndoGroup("addSilderOpen");
		var efg = lyr.property("ADBE Effect Parade");
		var fx = null;
		if (efg.canAddProperty("ADBE Color Control")){
			fx = efg.addProperty("ADBE Color Control");
			if (fx!=null) {
				fx.name = "color";
				fx.enabled =false;
				fx.property(1).setValue([234/255,7/255,87/255,1]);
			}
		}
		app.endUndoGroup();

	}		// ********************************************************************************
	/*
		スライダーエフェクト[open]を追加
	*/
	// ********************************************************************************
	var addExpCtrolAll = function()
	{		function addSub(lyr,mn,na)		{			var efg = lyr.property("ADBE Effect Parade");
			var fx = null;
			if (efg.canAddProperty(mn)){
				fx = efg.addProperty(mn);
				if (fx!=null) {
					fx.name = na;
					fx.enabled =false;
				}
			}			return fx;		}
		var ret = false;
		
		var ac = getActiveComp();
		if (ac==null) return ret;

		var  lyr = null;
		
		if (ac.selectedLayers.length>0)
		{
			lyr = ac.selectedLayers[0];
			app.beginUndoGroup("とりあえず追加");			var fx = addSub(lyr,"ADBE Slider Control","open");			if (fx!=null) fx.property(1).setValue(100);			var fx = addSub(lyr,"ADBE Slider Control","close");			if (fx!=null) fx.property(1).setValue(100);			var fx = addSub(lyr,"ADBE Slider Control","width");			if (fx!=null) fx.property(1).setValue(1600);			var fx = addSub(lyr,"ADBE Slider Control","height");			if (fx!=null) fx.property(1).setValue(900);			app.endUndoGroup();
		}


	}	// ********************************************************************************
	/*
		
	*/
	// ********************************************************************************
	var addBaseShape = function()
	{
		
		var ac = getActiveComp();
		if (ac==null) return ret;
		var pg = getPropertyGroup(ac);		alert(pg.name);		if (pg==null) return ret;				alert(pg.name);	}
		// ********************************************************************************
	/*
	*/
	// ********************************************************************************
	var expressionOn = function()
	{
		var p = getProperty();
		if (p==null) return;
		
		if (p.canSetExpression==true){
			if (p.expression =="")
			{
				p.expression = "value";
			}
		}
	}
	// ********************************************************************************
	var winObj = ( me instanceof Panel) ? me : new Window("palette", "ShapeExpression", [ 0,  0,  500,  480]  ,{resizeable:true, maximizeButton:true, minimizeButton:true});
	// ********************************************************************************
	var ctrl_xx = 15;
	var ctrl_yy = 15;
	var btnCreateShape = winObj.add("button",    [ctrl_xx,ctrl_yy,ctrl_xx+ 470,ctrl_yy+ 25], "新規シェイプレイヤー" );
	ctrl_yy += 35;
	var btnAddALL = winObj.add("button",    [ctrl_xx,ctrl_yy,ctrl_xx+ 470,ctrl_yy+ 25], "とりあえずExpCtrl全部追加" );
	ctrl_yy += 35;
	var btnBaseShape = winObj.add("button",    [ctrl_xx,ctrl_yy,ctrl_xx+ 470,ctrl_yy+ 25], "とりあえず追加" );
	ctrl_yy += 35;
	var btnAddSliderOpen = winObj.add("button",    [ctrl_xx,ctrl_yy,ctrl_xx+ 470,ctrl_yy+ 25], "Slider \"open\"を追加" );
	ctrl_yy += 35;
	var btnAddColor = winObj.add("button",    [ctrl_xx,ctrl_yy,ctrl_xx+ 470,ctrl_yy+ 25], "\"color\"を追加" );
	ctrl_yy += 35;
	var btnExpressin = winObj.add("button",    [ctrl_xx,ctrl_yy,ctrl_xx+ 470,ctrl_yy+ 25], "\"value\"を追加" );
	ctrl_yy += 35;

	// ********************************************************************************


	// ********************************************************************************
	cntrlTbl.push(btnCreateShape);
	cntrlTbl.push(btnAddALL);	cntrlTbl.push(btnBaseShape);	cntrlTbl.push(btnAddSliderOpen);
	cntrlTbl.push(btnAddColor);
	cntrlTbl.push(btnExpressin);

	// ********************************************************************************
	btnCreateShape.onClick = createShapeLayer;
	btnAddALL.onClick = addExpCtrolAll;
	btnBaseShape.onClick = addBaseShape;
	btnAddSliderOpen.onClick = addSilderOpen;
	btnAddColor.onClick = addColor;	btnExpressin.onClick = expressionOn;
	
	// ********************************************************************************
	var resizeWin = function()
	{
		var b = winObj.bounds;
		var w = b[2] - b[0];
		var h = b[3] - b[1];
		var cnt = cntrlTbl.length;
		for ( var i=0; i<cnt; i++)
		{
			var c = cntrlTbl[i];
			var bs = c.bounds;
			bs[0] = ctrl_xx;
			bs[2] = bs[0] + w - ctrl_xx*2;
			c.bounds = bs;
		}
	}
	resizeWin();
	winObj.onResize = resizeWin;

	//-------------------------------------------------------------------------
	//-------------------------------------------------------------------------
	if ( ( me instanceof Panel) == false){
		winObj.center(); 
		winObj.show();
	}
	//-------------------------------------------------------------------------
})(this);