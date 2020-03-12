/*
プロパティーをExpressionでリンクさせると通常、絶対パスで指定されますが、
thisProperty.popertYGroup(*)を使って相対パス指定をさせたい時があります。

これは、Expressionで相対パス指定を作成するスクリプトです。



*/

(function(me){
	//UIの配列
	var cntrlTbl = [];
	//ターゲット
	var targetPath = [];
	var basePath = [];

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
	var winObj = ( me instanceof Panel) ? me : new Window("palette", "ShapeExpression", [ 703,  320,  703+ 497,  320+ 360]  ,{resizeable:true, maximizeButton:true, minimizeButton:true});
	// ********************************************************************************
	var btnCreateShape = winObj.add("button", [  15,   15,   15+ 470,   15+  25], "create ShapeLayer" );
	btnCreateShape.graphics.font = ScriptUI.newFont("Tahoma",ScriptUI.FontStyle.REGULAR, 11);
	var btnGetTargetProperty = winObj.add("button", [  15,   80,   15+ 470,   80+  25], "get TargetProperty" );
	btnGetTargetProperty.graphics.font = ScriptUI.newFont("Tahoma",ScriptUI.FontStyle.REGULAR, 11);
	var edTargetPropery = winObj.add("edittext", [  15,  105,   15+ 470,  105+  50], "", { readonly:true, multiline:true, scrollable:true });
	edTargetPropery.graphics.font = ScriptUI.newFont("Tahoma",ScriptUI.FontStyle.REGULAR, 19);
	var btnGetBaseProperty = winObj.add("button", [  15,  165,   15+ 470,  165+  25], "get BaseProperty" );
	btnGetBaseProperty.graphics.font = ScriptUI.newFont("Tahoma",ScriptUI.FontStyle.REGULAR, 11);
	var edBaseProperty = winObj.add("edittext", [  15,  190,   15+ 470,  190+  50], "", { readonly:true, multiline:true, scrollable:true });
	edBaseProperty.graphics.font = ScriptUI.newFont("Tahoma",ScriptUI.FontStyle.REGULAR, 19);
	var btnCreateRelative = winObj.add("button", [  15,  250,   15+ 470,  250+  25], "create Relative Path" );
	btnCreateRelative.graphics.font = ScriptUI.newFont("Tahoma",ScriptUI.FontStyle.REGULAR, 11);
	var edRelative = winObj.add("edittext", [  15,  275,   15+ 470,  275+  50], "", { readonly:true, multiline:true, scrollable:true });
	edRelative.graphics.font = ScriptUI.newFont("Tahoma",ScriptUI.FontStyle.REGULAR, 19);
	var stCaption = winObj.add("statictext", [  12,   55,   12+ 519,   55+  25], "Expressionを相対パスで指定するスクリプト");
	stCaption.graphics.font = ScriptUI.newFont("Tahoma",ScriptUI.FontStyle.REGULAR, 11);

	// ********************************************************************************


	// ********************************************************************************
	cntrlTbl.push(btnCreateShape);
	
	cntrlTbl.push(btnGetTargetProperty);
	cntrlTbl.push(edTargetPropery);

	cntrlTbl.push(btnGetBaseProperty);
	cntrlTbl.push(edBaseProperty);

	cntrlTbl.push(btnCreateRelative);
	cntrlTbl.push(edRelative);

	
	// ********************************************************************************
	var getPropertyPath = function(prop)
	{
		var ary = [];
		// ************************************
		var pstr = function(pr)
		{
			var ret = true;
			if (pr instanceof Property){ //
				ary.unshift("(" + pr.propertyIndex + ")");
			}else if ((pr instanceof AVLayer)||(pr instanceof Layer)||(pr instanceof CameraLayer)
			||(pr instanceof ShapeLayer)||(pr instanceof TextLayer)||(pr instanceof LightLayer)){
				var cmp = pr.containingComp;
				ary.unshift(".layer(\"" + pr.name + "\")");
				ary.unshift("comp(\"" + cmp.name+ "\")");
				ret = false;
			}else if ( (pr instanceof PropertyBase)||(pr instanceof PropertyGroup)){
			 if ( 
			 	(pr.propertyType ===  PropertyType.INDEXED_GROUP) //"
				||(pr.matchName === "ADBE Transform Group")
				||(pr.matchName === "ADBE Effect Parade") 
				||(pr.matchName === "ADBE Camera Options Group") 
				||(pr.matchName === "ADBE Light Options Group") 
				||(pr.matchName === "ADBE Mask Parade")
				||(pr.matchName === "ADBE Material Options Group")
				||(pr.matchName === "ADBE Root Vectors Group")
				||(pr.matchName === "ADBE Vector Transform Group")
				||(pr.matchName === "ADBE Vector Repeater Transform")
				||(pr.matchName === "ADBE Vector Wiggler Transform")
			){
					ary.unshift("(" + pr.propertyIndex + ")");
				}else {
					ary.unshift("(\"" + pr.name + "\")");
				}
			}
			return ret;
		}
		// ************************************
		var flg = true;
		var p = prop;
		str = "";
		do {
			flg = pstr(p);
			if (flg === true)
			{
				p = p.parentProperty;
				if (p == null) { flg = false; }
			}
		 } while( flg );
		
		return ary;
	}
	// ********************************************************************************
	var getProperty = function()
	{
		var ret = null;
		var ac = getActiveComp();
		if (ac==null) return ret;
		
		var sel = ac.selectedProperties;
		var selc = sel.length;
		if (selc>0)
		{
			for ( var i = selc-1; i>=0; i--)
			{
				if ( (sel[i] instanceof Property) === false) {
					sel.splice(i,1);
				}
 			}
		}
		selc = sel.length;
		if (selc!==1) {
		
			alert("プロパティを1個だけ選んでください");
			return ret;
		}
		ret = sel[0];
		
		return ret;
	}
	// ********************************************************************************
	var getTargetPath = function()
	{
		targetPath = [];
		var p = getProperty();
		if (p==null) return ret;
		
		targetPath = getPropertyPath(p);
		
		edTargetPropery.text = targetPath.join("");
	}
// ********************************************************************************
	var getBasePath = function()
	{
		basePath = [];
		var p = getProperty();
		if (p==null) return ret;
		
		basePath = getPropertyPath(p);
		edBaseProperty.text = basePath.join("");
	}

	// ********************************************************************************
	var createRelative = function()
	{
		if ( (targetPath==null)||(targetPath.length<=0)||(basePath==null)||(basePath.length<=0))
		{
			alert("選択してください");
			return;
		}
		
		var cnt = targetPath.length;
		if (cnt>basePath.length) cnt = basePath.length;
		
		var c = 0;
		for (var i=0; i<cnt; i++)
		{
			if (targetPath[i] !== basePath[i]) {
				break;
			}else{
				c++;
			}
		}
		var rel = [];
		
		if ( (c==targetPath.length)&&(c==basePath.length))
		{
			rel.push("value");
		}else if (c <=0) {
			rel = targetPath;
		}else if (c<=2) {
			rel.push("thisComp");
			for ( var i=1; i<=targetPath; i++)
			{
				rel.push(targetPath[i]);
			}
		}else{
			rel.push("thisProperty");
			rel.push(".propertyGroup(" + (basePath.length - c ) + ")");
			for ( var i=c; i<targetPath.length; i++)
			{
				rel.push(targetPath[i]);
			}
		}
		
		edRelative.text = rel.join("");
		
	}
	// ********************************************************************************
	btnCreateShape.onClick = createShapeLayer;
	btnGetTargetProperty.onClick = getTargetPath;
	btnGetBaseProperty.onClick = getBasePath;
	btnCreateRelative.onClick = createRelative;
	
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
			bs[0] = 15;
			bs[2] = bs[0] + w - 25;
			c.bounds = bs;
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