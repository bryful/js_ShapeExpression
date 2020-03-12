(function(me){

	//-------------------------------------------------------------------------
	var winObj = ( me instanceof Panel) ? me : new Window("palette", "ShapeAssist", [ 779,  320,  779+ 345,  320+ 361]  ,{resizeable:true, maximizeButton:true, minimizeButton:true});
	//-------------------------------------------------------------------------
	var btnCreateShapeLayer = winObj.add("button", [  15,   15,   15+ 320,   15+  25], "create shapeLayer" );
	btnCreateShapeLayer.graphics.font = ScriptUI.newFont("Tahoma",ScriptUI.FontStyle.REGULAR, 11);
	var btnExportShape = winObj.add("button", [  15,   55,   15+ 320,   55+  25], "export Shape" );
	btnExportShape.graphics.font = ScriptUI.newFont("Tahoma",ScriptUI.FontStyle.REGULAR, 11);

	this.image_AE1 = winObj.add("image", [  15,   99,   15+  50,   99+  50] /*, image_AE1_img*/ );

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
	var exportShape = function()
	{
		var str = "";
		// ******************************
		var exportShapeSubProperty = function(p,parentPG)
		{
		}
		// ******************************
		var exportShapeSub = function(prop,paretPG)
		{
			if (prop instanceof Property)
			{
				return;
			}
			
		}
		// ******************************
	
		var pg = getPropertyGroup();
		alert(pg.name);
	}
	btnExportShape.onClick = exportShape;
	//-------------------------------------------------------------------------
	if ( ( me instanceof Panel) == false){
		winObj.center(); 
		winObj.show();
	}
	//-------------------------------------------------------------------------
})(this);