window.skins=window.skins||{};
                var __extends = this && this.__extends|| function (d, b) {
                    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
                        function __() {
                            this.constructor = d;
                        }
                    __.prototype = b.prototype;
                    d.prototype = new __();
                };
                window.generateEUI = window.generateEUI||{};
                generateEUI.paths = generateEUI.paths||{};
                generateEUI.styles = undefined;
                generateEUI.skins = {"eui.Button":"resource/eui_skins/ButtonSkin.exml","eui.CheckBox":"resource/eui_skins/CheckBoxSkin.exml","eui.HScrollBar":"resource/eui_skins/HScrollBarSkin.exml","eui.HSlider":"resource/eui_skins/HSliderSkin.exml","eui.Panel":"resource/eui_skins/PanelSkin.exml","eui.TextInput":"resource/eui_skins/TextInputSkin.exml","eui.ProgressBar":"resource/eui_skins/ProgressBarSkin.exml","eui.RadioButton":"resource/eui_skins/RadioButtonSkin.exml","eui.Scroller":"resource/eui_skins/ScrollerSkin.exml","eui.ToggleSwitch":"resource/eui_skins/ToggleSwitchSkin.exml","eui.VScrollBar":"resource/eui_skins/VScrollBarSkin.exml","eui.VSlider":"resource/eui_skins/VSliderSkin.exml","eui.ItemRenderer":"resource/eui_skins/ItemRendererSkin.exml","loginComponent":"resource/eui_skins/skins/loginComponent.exml","lobbyComponent":"resource/eui_skins/skins/lobbyComponent.exml","gameComponent":"resource/eui_skins/skins/gameComponent.exml","cardComponent":"resource/eui_skins/skins/cardComponent.exml","userHead":"resource/eui_skins/skins/userHead.exml","userHeadComponent":"resource/eui_skins/skins/userHeadComponent.exml","CPGComponent":"resource/eui_skins/skins/CPGComponent.exml","settlementComponent":"resource/eui_skins/skins/settlementComponent.exml","roomComponent":"resource/eui_skins/skins/roomComponent.exml","userComponent":"resource/eui_skins/skins/userComponent.exml","RechargeComponent":"resource/eui_skins/skins/RechargeComponent.exml","loadComponent":"resource/eui_skins/skins/loadComponent.exml","waresComponent":"resource/eui_skins/skins/waresComponent.exml","dialogComponent":"resource/eui_skins/skins/dialogComponent.exml","InputComponent":"resource/eui_skins/skins/InputComponent.exml"};generateEUI.paths['resource/eui_skins/ButtonSkin.exml'] = window.skins.ButtonSkin = (function (_super) {
	__extends(ButtonSkin, _super);
	function ButtonSkin() {
		_super.call(this);
		this.skinParts = ["bg","labelDisplay","iconDisplay"];
		
		this.currentState = "up";
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this.bg_i(),this.labelDisplay_i(),this.iconDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
				])
			,
			new eui.State ("disabled",
				[
				])
		];
	}
	var _proto = ButtonSkin.prototype;

	_proto.bg_i = function () {
		var t = new eui.Image();
		this.bg = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(35,16,268,45);
		t.source = "btn_match_apply_png";
		t.top = 0;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.horizontalCenter = 0;
		t.size = 40;
		t.text = "确定";
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.verticalAlign = "middle";
		t.verticalCenter = -7;
		return t;
	};
	_proto.iconDisplay_i = function () {
		var t = new eui.Image();
		this.iconDisplay = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		return t;
	};
	return ButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/CheckBoxSkin.exml'] = window.skins.CheckBoxSkin = (function (_super) {
	__extends(CheckBoxSkin, _super);
	function CheckBoxSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","alpha",0.7)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_up_png")
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_down_png")
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_disabled_png")
				])
		];
	}
	var _proto = CheckBoxSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.alpha = 1;
		t.fillMode = "scale";
		t.source = "checkbox_unselect_png";
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		return t;
	};
	return CheckBoxSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/HScrollBarSkin.exml'] = window.skins.HScrollBarSkin = (function (_super) {
	__extends(HScrollBarSkin, _super);
	function HScrollBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb"];
		
		this.minHeight = 8;
		this.minWidth = 20;
		this.elementsContent = [this.thumb_i()];
	}
	var _proto = HScrollBarSkin.prototype;

	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.height = 8;
		t.scale9Grid = new egret.Rectangle(3,3,2,2);
		t.source = "roundthumb_png";
		t.verticalCenter = 0;
		t.width = 30;
		return t;
	};
	return HScrollBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/HSliderSkin.exml'] = window.skins.HSliderSkin = (function (_super) {
	__extends(HSliderSkin, _super);
	function HSliderSkin() {
		_super.call(this);
		this.skinParts = ["track","thumb"];
		
		this.minHeight = 8;
		this.minWidth = 20;
		this.elementsContent = [this.track_i(),this.thumb_i()];
	}
	var _proto = HSliderSkin.prototype;

	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.height = 6;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_sb_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.source = "thumb_png";
		t.verticalCenter = 0;
		return t;
	};
	return HSliderSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ItemRendererSkin.exml'] = window.skins.ItemRendererSkin = (function (_super) {
	__extends(ItemRendererSkin, _super);
	function ItemRendererSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","button_down_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
		];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data"],[0],this.labelDisplay,"text");
	}
	var _proto = ItemRendererSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 8;
		t.fontFamily = "Tahoma";
		t.left = 8;
		t.right = 8;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	return ItemRendererSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/PanelSkin.exml'] = window.skins.PanelSkin = (function (_super) {
	__extends(PanelSkin, _super);
	function PanelSkin() {
		_super.call(this);
		this.skinParts = ["titleDisplay","moveArea","closeButton"];
		
		this.minHeight = 230;
		this.minWidth = 450;
		this.elementsContent = [this._Image1_i(),this.moveArea_i(),this.closeButton_i()];
	}
	var _proto = PanelSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(2,2,12,12);
		t.source = "border_png";
		t.top = 0;
		return t;
	};
	_proto.moveArea_i = function () {
		var t = new eui.Group();
		this.moveArea = t;
		t.height = 45;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._Image2_i(),this.titleDisplay_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "header_png";
		t.top = 0;
		return t;
	};
	_proto.titleDisplay_i = function () {
		var t = new eui.Label();
		this.titleDisplay = t;
		t.fontFamily = "Tahoma";
		t.left = 15;
		t.right = 5;
		t.size = 20;
		t.textColor = 0xFFFFFF;
		t.verticalCenter = 0;
		t.wordWrap = false;
		return t;
	};
	_proto.closeButton_i = function () {
		var t = new eui.Button();
		this.closeButton = t;
		t.bottom = 5;
		t.horizontalCenter = 0;
		t.label = "close";
		return t;
	};
	return PanelSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ProgressBarSkin.exml'] = window.skins.ProgressBarSkin = (function (_super) {
	__extends(ProgressBarSkin, _super);
	function ProgressBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb","labelDisplay"];
		
		this.minHeight = 18;
		this.minWidth = 30;
		this.elementsContent = [this._Image1_i(),this.thumb_i(),this.labelDisplay_i()];
	}
	var _proto = ProgressBarSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_pb_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.percentHeight = 100;
		t.source = "thumb_pb_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.horizontalCenter = 0;
		t.size = 15;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		return t;
	};
	return ProgressBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/RadioButtonSkin.exml'] = window.skins.RadioButtonSkin = (function (_super) {
	__extends(RadioButtonSkin, _super);
	function RadioButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","alpha",0.7)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_up_png")
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_down_png")
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_disabled_png")
				])
		];
	}
	var _proto = RadioButtonSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.alpha = 1;
		t.fillMode = "scale";
		t.source = "radiobutton_unselect_png";
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		return t;
	};
	return RadioButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ScrollerSkin.exml'] = window.skins.ScrollerSkin = (function (_super) {
	__extends(ScrollerSkin, _super);
	function ScrollerSkin() {
		_super.call(this);
		this.skinParts = ["horizontalScrollBar","verticalScrollBar"];
		
		this.minHeight = 20;
		this.minWidth = 20;
		this.elementsContent = [this.horizontalScrollBar_i(),this.verticalScrollBar_i()];
	}
	var _proto = ScrollerSkin.prototype;

	_proto.horizontalScrollBar_i = function () {
		var t = new eui.HScrollBar();
		this.horizontalScrollBar = t;
		t.bottom = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.verticalScrollBar_i = function () {
		var t = new eui.VScrollBar();
		this.verticalScrollBar = t;
		t.percentHeight = 100;
		t.right = 0;
		return t;
	};
	return ScrollerSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/skins/cardComponent.exml'] = window.cardComponentSkin = (function (_super) {
	__extends(cardComponentSkin, _super);
	function cardComponentSkin() {
		_super.call(this);
		this.skinParts = ["bg","word1","chair1","chair2","chair3","chair4","word5","chair5","word6","chair6","word7","chair7","word8","chair8","chair9","chair10","chair11","chair12"];
		
		this.height = 100;
		this.width = 78;
		this.elementsContent = [this.chair1_i(),this.chair2_i(),this.chair3_i(),this.chair4_i(),this.chair5_i(),this.chair6_i(),this.chair7_i(),this.chair8_i(),this.chair9_i(),this.chair10_i(),this.chair11_i(),this.chair12_i()];
	}
	var _proto = cardComponentSkin.prototype;

	_proto.chair1_i = function () {
		var t = new eui.Group();
		this.chair1 = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.visible = false;
		t.elementsContent = [this.bg_i(),this.word1_i()];
		return t;
	};
	_proto.bg_i = function () {
		var t = new eui.Image();
		this.bg = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "cardImg_json.zm_banzizheng";
		t.top = 0;
		return t;
	};
	_proto.word1_i = function () {
		var t = new eui.Image();
		this.word1 = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "cardImg_json.suo_z_1";
		t.top = 0;
		return t;
	};
	_proto.chair2_i = function () {
		var t = new eui.Group();
		this.chair2 = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.visible = false;
		t.elementsContent = [this._Image1_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "tile_back_side_stand_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.chair3_i = function () {
		var t = new eui.Group();
		this.chair3 = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.visible = false;
		t.elementsContent = [this._Image2_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "tile_back_up_stand_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.chair4_i = function () {
		var t = new eui.Group();
		this.chair4 = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.visible = false;
		t.elementsContent = [this._Image3_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.skewY = 180;
		t.source = "tile_back_side_stand_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.chair5_i = function () {
		var t = new eui.Group();
		this.chair5 = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.visible = false;
		t.elementsContent = [this._Image4_i(),this.word5_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "tile_face_bottom_lie_s_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.word5_i = function () {
		var t = new eui.Image();
		this.word5 = t;
		t.horizontalCenter = 0;
		t.scaleX = 0.4;
		t.scaleY = 0.4;
		t.source = "cardImg_json.suo_z_2";
		t.verticalCenter = -10;
		return t;
	};
	_proto.chair6_i = function () {
		var t = new eui.Group();
		this.chair6 = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.visible = false;
		t.elementsContent = [this._Image5_i(),this.word6_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 21.5;
		t.anchorOffsetY = 32;
		t.horizontalCenter = -8;
		t.rotation = 90;
		t.source = "tile_face_side_lie_s_png";
		t.verticalCenter = -7;
		return t;
	};
	_proto.word6_i = function () {
		var t = new eui.Image();
		this.word6 = t;
		t.horizontalCenter = 0;
		t.rotation = 0;
		t.scaleX = 0.4;
		t.scaleY = 0.4;
		t.source = "cardImg_json.suo_z_2";
		t.verticalCenter = -10;
		return t;
	};
	_proto.chair7_i = function () {
		var t = new eui.Group();
		this.chair7 = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.visible = false;
		t.elementsContent = [this._Image6_i(),this.word7_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.rotation = 0;
		t.source = "tile_face_bottom_lie_s_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.word7_i = function () {
		var t = new eui.Image();
		this.word7 = t;
		t.horizontalCenter = 0;
		t.rotation = 0;
		t.scaleX = 0.4;
		t.scaleY = 0.4;
		t.source = "cardImg_json.suo_z_7";
		t.verticalCenter = -10;
		return t;
	};
	_proto.chair8_i = function () {
		var t = new eui.Group();
		this.chair8 = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.visible = false;
		t.elementsContent = [this._Image7_i(),this.word8_i()];
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 21.5;
		t.anchorOffsetY = 32;
		t.horizontalCenter = 0;
		t.rotation = -90;
		t.source = "tile_face_side_lie_s_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.word8_i = function () {
		var t = new eui.Image();
		this.word8 = t;
		t.horizontalCenter = -8;
		t.rotation = 0;
		t.scaleX = 0.4;
		t.scaleY = 0.4;
		t.source = "cardImg_json.suo_z_2";
		t.verticalCenter = -2;
		return t;
	};
	_proto.chair9_i = function () {
		var t = new eui.Group();
		this.chair9 = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.visible = false;
		t.elementsContent = [this._Image8_i()];
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "tile_back_up_lie_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.chair10_i = function () {
		var t = new eui.Group();
		this.chair10 = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.visible = false;
		t.elementsContent = [this._Image9_i()];
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 21.5;
		t.anchorOffsetY = 32;
		t.horizontalCenter = -8;
		t.rotation = 90;
		t.source = "tile_back_side_lie_s_png";
		t.verticalCenter = -7;
		return t;
	};
	_proto.chair11_i = function () {
		var t = new eui.Group();
		this.chair11 = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.visible = false;
		t.elementsContent = [this._Image10_i()];
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.rotation = 0;
		t.source = "tile_back_up_lie_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.chair12_i = function () {
		var t = new eui.Group();
		this.chair12 = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.visible = false;
		t.elementsContent = [this._Image11_i()];
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 21.5;
		t.anchorOffsetY = 32;
		t.horizontalCenter = 0;
		t.rotation = -90;
		t.source = "tile_back_side_lie_s_png";
		t.verticalCenter = 0;
		return t;
	};
	return cardComponentSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/skins/CPGComponent.exml'] = window.CPGComponentSkin = (function (_super) {
	__extends(CPGComponentSkin, _super);
	function CPGComponentSkin() {
		_super.call(this);
		this.skinParts = ["card1_1","card2_1","card3_1","card4_1","CPGGroup1","card3_2","card2_2","card1_2","card4_2","CPGGroup2","card1_3","card2_3","card3_3","card4_3","CPGGroup3","card1_4","card2_4","card3_4","card4_4","CPGGroup4"];
		
		this.height = 100;
		this.width = 150;
		this.elementsContent = [this.CPGGroup1_i(),this.CPGGroup2_i(),this.CPGGroup3_i(),this.CPGGroup4_i()];
	}
	var _proto = CPGComponentSkin.prototype;

	_proto.CPGGroup1_i = function () {
		var t = new eui.Group();
		this.CPGGroup1 = t;
		t.anchorOffsetX = 0;
		t.visible = false;
		t.width = 150;
		t.layout = this._BasicLayout1_i();
		t.elementsContent = [this.card1_1_i(),this.card2_1_i(),this.card3_1_i(),this.card4_1_i()];
		return t;
	};
	_proto._BasicLayout1_i = function () {
		var t = new eui.BasicLayout();
		return t;
	};
	_proto.card1_1_i = function () {
		var t = new eui.Group();
		this.card1_1 = t;
		t.left = 0;
		t.elementsContent = [this._cardComponent1_i()];
		return t;
	};
	_proto._cardComponent1_i = function () {
		var t = new cardComponent();
		t.height = 100;
		t.width = 78;
		return t;
	};
	_proto.card2_1_i = function () {
		var t = new eui.Group();
		this.card2_1 = t;
		t.horizontalCenter = 0;
		t.elementsContent = [this._cardComponent2_i()];
		return t;
	};
	_proto._cardComponent2_i = function () {
		var t = new cardComponent();
		t.height = 100;
		t.width = 78;
		return t;
	};
	_proto.card3_1_i = function () {
		var t = new eui.Group();
		this.card3_1 = t;
		t.right = 0;
		t.elementsContent = [this._cardComponent3_i()];
		return t;
	};
	_proto._cardComponent3_i = function () {
		var t = new cardComponent();
		t.height = 100;
		t.width = 78;
		return t;
	};
	_proto.card4_1_i = function () {
		var t = new eui.Group();
		this.card4_1 = t;
		t.horizontalCenter = 0;
		t.y = -15;
		t.elementsContent = [this._cardComponent4_i()];
		return t;
	};
	_proto._cardComponent4_i = function () {
		var t = new cardComponent();
		t.height = 100;
		t.width = 78;
		return t;
	};
	_proto.CPGGroup2_i = function () {
		var t = new eui.Group();
		this.CPGGroup2 = t;
		t.anchorOffsetX = 0;
		t.visible = false;
		t.width = 146;
		t.x = 10;
		t.y = 10;
		t.layout = this._BasicLayout2_i();
		t.elementsContent = [this.card3_2_i(),this.card2_2_i(),this.card1_2_i(),this.card4_2_i()];
		return t;
	};
	_proto._BasicLayout2_i = function () {
		var t = new eui.BasicLayout();
		return t;
	};
	_proto.card3_2_i = function () {
		var t = new eui.Group();
		this.card3_2 = t;
		t.right = 0;
		t.elementsContent = [this._cardComponent5_i()];
		return t;
	};
	_proto._cardComponent5_i = function () {
		var t = new cardComponent();
		t.height = 100;
		t.width = 78;
		return t;
	};
	_proto.card2_2_i = function () {
		var t = new eui.Group();
		this.card2_2 = t;
		t.horizontalCenter = 0;
		t.elementsContent = [this._cardComponent6_i()];
		return t;
	};
	_proto._cardComponent6_i = function () {
		var t = new cardComponent();
		t.height = 100;
		t.width = 78;
		return t;
	};
	_proto.card1_2_i = function () {
		var t = new eui.Group();
		this.card1_2 = t;
		t.left = 0;
		t.elementsContent = [this._cardComponent7_i()];
		return t;
	};
	_proto._cardComponent7_i = function () {
		var t = new cardComponent();
		t.height = 100;
		t.width = 78;
		return t;
	};
	_proto.card4_2_i = function () {
		var t = new eui.Group();
		this.card4_2 = t;
		t.horizontalCenter = 9;
		t.y = 0;
		t.elementsContent = [this._cardComponent8_i()];
		return t;
	};
	_proto._cardComponent8_i = function () {
		var t = new cardComponent();
		t.height = 100;
		t.width = 78;
		return t;
	};
	_proto.CPGGroup3_i = function () {
		var t = new eui.Group();
		this.CPGGroup3 = t;
		t.anchorOffsetX = 0;
		t.visible = false;
		t.width = 150;
		t.x = 10;
		t.y = 10;
		t.layout = this._BasicLayout3_i();
		t.elementsContent = [this.card1_3_i(),this.card2_3_i(),this.card3_3_i(),this.card4_3_i()];
		return t;
	};
	_proto._BasicLayout3_i = function () {
		var t = new eui.BasicLayout();
		return t;
	};
	_proto.card1_3_i = function () {
		var t = new eui.Group();
		this.card1_3 = t;
		t.left = 0;
		t.elementsContent = [this._cardComponent9_i()];
		return t;
	};
	_proto._cardComponent9_i = function () {
		var t = new cardComponent();
		t.height = 100;
		t.width = 78;
		return t;
	};
	_proto.card2_3_i = function () {
		var t = new eui.Group();
		this.card2_3 = t;
		t.horizontalCenter = 0;
		t.elementsContent = [this._cardComponent10_i()];
		return t;
	};
	_proto._cardComponent10_i = function () {
		var t = new cardComponent();
		t.height = 100;
		t.width = 78;
		return t;
	};
	_proto.card3_3_i = function () {
		var t = new eui.Group();
		this.card3_3 = t;
		t.right = 0;
		t.elementsContent = [this._cardComponent11_i()];
		return t;
	};
	_proto._cardComponent11_i = function () {
		var t = new cardComponent();
		t.height = 100;
		t.width = 78;
		return t;
	};
	_proto.card4_3_i = function () {
		var t = new eui.Group();
		this.card4_3 = t;
		t.horizontalCenter = 0;
		t.y = -15;
		t.elementsContent = [this._cardComponent12_i()];
		return t;
	};
	_proto._cardComponent12_i = function () {
		var t = new cardComponent();
		t.height = 100;
		t.width = 78;
		return t;
	};
	_proto.CPGGroup4_i = function () {
		var t = new eui.Group();
		this.CPGGroup4 = t;
		t.anchorOffsetX = 0;
		t.visible = false;
		t.width = 150;
		t.x = 10;
		t.y = 10;
		t.layout = this._BasicLayout4_i();
		t.elementsContent = [this.card1_4_i(),this.card2_4_i(),this.card3_4_i(),this.card4_4_i()];
		return t;
	};
	_proto._BasicLayout4_i = function () {
		var t = new eui.BasicLayout();
		return t;
	};
	_proto.card1_4_i = function () {
		var t = new eui.Group();
		this.card1_4 = t;
		t.left = 0;
		t.elementsContent = [this._cardComponent13_i()];
		return t;
	};
	_proto._cardComponent13_i = function () {
		var t = new cardComponent();
		t.height = 100;
		t.width = 78;
		return t;
	};
	_proto.card2_4_i = function () {
		var t = new eui.Group();
		this.card2_4 = t;
		t.horizontalCenter = 0;
		t.elementsContent = [this._cardComponent14_i()];
		return t;
	};
	_proto._cardComponent14_i = function () {
		var t = new cardComponent();
		t.height = 100;
		t.width = 78;
		return t;
	};
	_proto.card3_4_i = function () {
		var t = new eui.Group();
		this.card3_4 = t;
		t.right = 0;
		t.elementsContent = [this._cardComponent15_i()];
		return t;
	};
	_proto._cardComponent15_i = function () {
		var t = new cardComponent();
		t.height = 100;
		t.width = 78;
		return t;
	};
	_proto.card4_4_i = function () {
		var t = new eui.Group();
		this.card4_4 = t;
		t.horizontalCenter = -4;
		t.y = 0;
		t.elementsContent = [this._cardComponent16_i()];
		return t;
	};
	_proto._cardComponent16_i = function () {
		var t = new cardComponent();
		t.height = 100;
		t.width = 78;
		return t;
	};
	return CPGComponentSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/skins/dialogComponent.exml'] = window.dialogComponentSkin = (function (_super) {
	__extends(dialogComponentSkin, _super);
	function dialogComponentSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 300;
		this.width = 400;
		this.elementsContent = [this._Image1_i(),this._Rect1_i(),this._Label1_i()];
	}
	var _proto = dialogComponentSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(76,45,461,274);
		t.source = "bg_dialog_png";
		t.top = 0;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 60;
		t.ellipseWidth = 60;
		t.fillColor = 0x939090;
		t.height = 200;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 300;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.height = 180;
		t.horizontalCenter = 0;
		t.text = "txt";
		t.textAlign = "center";
		t.verticalCenter = 0;
		t.width = 260;
		return t;
	};
	return dialogComponentSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/skins/gameComponent.exml'] = window.gameComponentSkin = (function (_super) {
	__extends(gameComponentSkin, _super);
	function gameComponentSkin() {
		_super.call(this);
		this.skinParts = ["CPG1","CPG2","CPG3","CPG4","CPGGroup","handCardGrp_1","drawnCard_1","handCard_1","drawnCard_2","handCardGrp_2","handCard_2","drawnCard_3","handCardGrp_3","handCard_3","handCardGrp_4","drawnCard_4","handCard_4","handCard","user1","user2","user3","user4","userHead","discard_1","discard_2","discard_3","discard_4","discard","chiBtn","pengBtn","gangBtn","guoBtn","huBtn","CPGBtnGrp","chooseChow","d0","d_3","d_2","d_4","d_1","residue","fengGroup","waitTxt"];
		
		this.height = 640;
		this.width = 1136;
		this.elementsContent = [this._Image1_i(),this.CPGGroup_i(),this.handCard_i(),this.userHead_i(),this.discard_i(),this.CPGBtnGrp_i(),this.chooseChow_i(),this.fengGroup_i(),this.waitTxt_i()];
	}
	var _proto = gameComponentSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(399,350,227,242);
		t.source = "background_2_jpg";
		t.verticalCenter = 0;
		return t;
	};
	_proto.CPGGroup_i = function () {
		var t = new eui.Group();
		this.CPGGroup = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this.CPG1_i(),this.CPG2_i(),this.CPG3_i(),this.CPG4_i()];
		return t;
	};
	_proto.CPG1_i = function () {
		var t = new eui.Group();
		this.CPG1 = t;
		t.bottom = -10;
		t.height = 100;
		t.left = -50;
		t.width = 300;
		t.layout = this._HorizontalLayout1_i();
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = -30;
		t.paddingLeft = 40;
		return t;
	};
	_proto.CPG2_i = function () {
		var t = new eui.Group();
		this.CPG2 = t;
		t.anchorOffsetX = 0;
		t.bottom = 60;
		t.height = 100;
		t.right = 44;
		t.rotation = -90;
		t.width = 300;
		t.layout = this._HorizontalLayout2_i();
		return t;
	};
	_proto._HorizontalLayout2_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = -30;
		t.paddingLeft = 40;
		return t;
	};
	_proto.CPG3_i = function () {
		var t = new eui.Group();
		this.CPG3 = t;
		t.height = 100;
		t.right = 140;
		t.rotation = 180;
		t.top = 0;
		t.width = 300;
		t.layout = this._HorizontalLayout3_i();
		return t;
	};
	_proto._HorizontalLayout3_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = -30;
		t.paddingLeft = 40;
		return t;
	};
	_proto.CPG4_i = function () {
		var t = new eui.Group();
		this.CPG4 = t;
		t.height = 100;
		t.left = 54;
		t.rotation = 90;
		t.top = -50;
		t.width = 300;
		t.layout = this._HorizontalLayout4_i();
		return t;
	};
	_proto._HorizontalLayout4_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = -30;
		t.paddingLeft = 40;
		return t;
	};
	_proto.handCard_i = function () {
		var t = new eui.Group();
		this.handCard = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.handCard_1_i(),this.handCard_2_i(),this.handCard_3_i(),this.handCard_4_i()];
		return t;
	};
	_proto.handCard_1_i = function () {
		var t = new eui.Group();
		this.handCard_1 = t;
		t.bottom = 0;
		t.right = 10;
		t.layout = this._HorizontalLayout6_i();
		t.elementsContent = [this.handCardGrp_1_i(),this.drawnCard_1_i()];
		return t;
	};
	_proto._HorizontalLayout6_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 40;
		return t;
	};
	_proto.handCardGrp_1_i = function () {
		var t = new eui.Group();
		this.handCardGrp_1 = t;
		t.right = 100;
		t.layout = this._HorizontalLayout5_i();
		return t;
	};
	_proto._HorizontalLayout5_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 0;
		return t;
	};
	_proto.drawnCard_1_i = function () {
		var t = new eui.Group();
		this.drawnCard_1 = t;
		t.x = 1114;
		t.y = 0;
		return t;
	};
	_proto.handCard_2_i = function () {
		var t = new eui.Group();
		this.handCard_2 = t;
		t.right = 90;
		t.top = 20;
		t.layout = this._VerticalLayout2_i();
		t.elementsContent = [this.drawnCard_2_i(),this.handCardGrp_2_i()];
		return t;
	};
	_proto._VerticalLayout2_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = -24;
		return t;
	};
	_proto.drawnCard_2_i = function () {
		var t = new eui.Group();
		this.drawnCard_2 = t;
		t.right = 0;
		t.y = 0;
		return t;
	};
	_proto.handCardGrp_2_i = function () {
		var t = new eui.Group();
		this.handCardGrp_2 = t;
		t.top = 60;
		t.x = 0;
		t.layout = this._VerticalLayout1_i();
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = -80;
		return t;
	};
	_proto.handCard_3_i = function () {
		var t = new eui.Group();
		this.handCard_3 = t;
		t.left = 300;
		t.top = -12;
		t.layout = this._HorizontalLayout8_i();
		t.elementsContent = [this.drawnCard_3_i(),this.handCardGrp_3_i()];
		return t;
	};
	_proto._HorizontalLayout8_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = -20;
		return t;
	};
	_proto.drawnCard_3_i = function () {
		var t = new eui.Group();
		this.drawnCard_3 = t;
		return t;
	};
	_proto.handCardGrp_3_i = function () {
		var t = new eui.Group();
		this.handCardGrp_3 = t;
		t.anchorOffsetX = 0;
		t.layout = this._HorizontalLayout7_i();
		return t;
	};
	_proto._HorizontalLayout7_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = -40;
		return t;
	};
	_proto.handCard_4_i = function () {
		var t = new eui.Group();
		this.handCard_4 = t;
		t.bottom = 120;
		t.left = 90;
		t.skewX = 0;
		t.skewY = 0;
		t.layout = this._VerticalLayout4_i();
		t.elementsContent = [this.handCardGrp_4_i(),this.drawnCard_4_i()];
		return t;
	};
	_proto._VerticalLayout4_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = -24;
		return t;
	};
	_proto.handCardGrp_4_i = function () {
		var t = new eui.Group();
		this.handCardGrp_4 = t;
		t.layout = this._VerticalLayout3_i();
		return t;
	};
	_proto._VerticalLayout3_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = -80;
		return t;
	};
	_proto.drawnCard_4_i = function () {
		var t = new eui.Group();
		this.drawnCard_4 = t;
		return t;
	};
	_proto.userHead_i = function () {
		var t = new eui.Group();
		this.userHead = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.touchThrough = true;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.user1_i(),this.user2_i(),this.user3_i(),this.user4_i()];
		return t;
	};
	_proto.user1_i = function () {
		var t = new userHeadComponent();
		this.user1 = t;
		t.bottom = 80;
		t.height = 110;
		t.left = 20;
		t.width = 80;
		return t;
	};
	_proto.user2_i = function () {
		var t = new userHeadComponent();
		this.user2 = t;
		t.height = 110;
		t.right = -20;
		t.top = 80;
		t.width = 80;
		return t;
	};
	_proto.user3_i = function () {
		var t = new userHeadComponent();
		this.user3 = t;
		t.height = 110;
		t.left = 180;
		t.top = 8;
		t.width = 80;
		return t;
	};
	_proto.user4_i = function () {
		var t = new userHeadComponent();
		this.user4 = t;
		t.height = 110;
		t.left = 0;
		t.verticalCenter = 69;
		t.width = 80;
		return t;
	};
	_proto.discard_i = function () {
		var t = new eui.Group();
		this.discard = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.touchEnabled = false;
		t.touchThrough = true;
		t.elementsContent = [this.discard_1_i(),this.discard_2_i(),this.discard_3_i(),this.discard_4_i()];
		return t;
	};
	_proto.discard_1_i = function () {
		var t = new eui.Group();
		this.discard_1 = t;
		t.anchorOffsetX = 270;
		t.anchorOffsetY = 75;
		t.height = 150;
		t.horizontalCenter = 0;
		t.verticalCenter = 125;
		t.width = 540;
		t.layout = this._TileLayout1_i();
		return t;
	};
	_proto._TileLayout1_i = function () {
		var t = new eui.TileLayout();
		t.horizontalGap = -38;
		t.verticalGap = -50;
		return t;
	};
	_proto.discard_2_i = function () {
		var t = new eui.Group();
		this.discard_2 = t;
		t.anchorOffsetX = 200;
		t.anchorOffsetY = 75;
		t.height = 150;
		t.horizontalCenter = 340;
		t.rotation = -90;
		t.sortableChildren = true;
		t.verticalCenter = 0;
		t.width = 400;
		t.layout = this._TileLayout2_i();
		return t;
	};
	_proto._TileLayout2_i = function () {
		var t = new eui.TileLayout();
		t.horizontalAlign = "right";
		t.horizontalGap = -46;
		t.orientation = "rows";
		t.verticalGap = -50;
		return t;
	};
	_proto.discard_3_i = function () {
		var t = new eui.Group();
		this.discard_3 = t;
		t.anchorOffsetX = 270;
		t.anchorOffsetY = 60;
		t.height = 150;
		t.horizontalCenter = 0;
		t.verticalCenter = -170;
		t.width = 540;
		t.layout = this._TileLayout3_i();
		return t;
	};
	_proto._TileLayout3_i = function () {
		var t = new eui.TileLayout();
		t.horizontalGap = -38;
		t.verticalGap = -50;
		return t;
	};
	_proto.discard_4_i = function () {
		var t = new eui.Group();
		this.discard_4 = t;
		t.anchorOffsetX = 200;
		t.anchorOffsetY = 75;
		t.height = 150;
		t.horizontalCenter = -340;
		t.rotation = 90;
		t.verticalCenter = 0;
		t.width = 400;
		t.layout = this._TileLayout4_i();
		return t;
	};
	_proto._TileLayout4_i = function () {
		var t = new eui.TileLayout();
		t.horizontalAlign = "left";
		t.horizontalGap = -46;
		t.verticalAlign = "top";
		t.verticalGap = -50;
		return t;
	};
	_proto.CPGBtnGrp_i = function () {
		var t = new eui.Group();
		this.CPGBtnGrp = t;
		t.bottom = 150;
		t.height = 120;
		t.right = 50;
		t.width = 600;
		t.layout = this._HorizontalLayout9_i();
		t.elementsContent = [this.chiBtn_i(),this.pengBtn_i(),this.gangBtn_i(),this.guoBtn_i(),this.huBtn_i()];
		return t;
	};
	_proto._HorizontalLayout9_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 0;
		t.horizontalAlign = "right";
		return t;
	};
	_proto.chiBtn_i = function () {
		var t = new eui.Group();
		this.chiBtn = t;
		t.height = 120;
		t.visible = false;
		t.width = 120;
		t.elementsContent = [this._Image2_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 80;
		t.horizontalCenter = 0;
		t.source = "btn_chow_png";
		t.verticalCenter = 0;
		t.width = 80;
		return t;
	};
	_proto.pengBtn_i = function () {
		var t = new eui.Group();
		this.pengBtn = t;
		t.height = 120;
		t.visible = false;
		t.width = 120;
		t.x = 10;
		t.y = 10;
		t.elementsContent = [this._Image3_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 80;
		t.horizontalCenter = 0;
		t.source = "btn_pong_png";
		t.verticalCenter = 0;
		t.width = 80;
		return t;
	};
	_proto.gangBtn_i = function () {
		var t = new eui.Group();
		this.gangBtn = t;
		t.height = 120;
		t.visible = false;
		t.width = 120;
		t.x = 20;
		t.y = 20;
		t.elementsContent = [this._Image4_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.height = 80;
		t.horizontalCenter = 0;
		t.source = "btn_kong_png";
		t.verticalCenter = 0;
		t.width = 80;
		return t;
	};
	_proto.guoBtn_i = function () {
		var t = new eui.Group();
		this.guoBtn = t;
		t.height = 120;
		t.visible = false;
		t.width = 120;
		t.x = 30;
		t.y = 30;
		t.elementsContent = [this._Image5_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "btn_pass_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.huBtn_i = function () {
		var t = new eui.Group();
		this.huBtn = t;
		t.height = 120;
		t.visible = false;
		t.width = 120;
		t.x = 40;
		t.y = 40;
		t.elementsContent = [this._Image6_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.height = 80;
		t.horizontalCenter = 0;
		t.source = "btn_win_png";
		t.verticalCenter = 0;
		t.width = 80;
		return t;
	};
	_proto.chooseChow_i = function () {
		var t = new eui.Group();
		this.chooseChow = t;
		t.bottom = 150;
		t.height = 80;
		t.right = 140;
		t.visible = false;
		t.layout = this._HorizontalLayout10_i();
		return t;
	};
	_proto._HorizontalLayout10_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 20;
		return t;
	};
	_proto.fengGroup_i = function () {
		var t = new eui.Group();
		this.fengGroup = t;
		t.horizontalCenter = 0;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.verticalCenter = -20;
		t.visible = false;
		t.elementsContent = [this.d0_i(),this.d_3_i(),this.d_2_i(),this.d_4_i(),this.d_1_i(),this.residue_i()];
		return t;
	};
	_proto.d0_i = function () {
		var t = new eui.Image();
		this.d0 = t;
		t.source = "d0_png";
		return t;
	};
	_proto.d_3_i = function () {
		var t = new eui.Image();
		this.d_3 = t;
		t.source = "d1_png";
		t.visible = false;
		return t;
	};
	_proto.d_2_i = function () {
		var t = new eui.Image();
		this.d_2 = t;
		t.source = "d4_png";
		t.visible = false;
		return t;
	};
	_proto.d_4_i = function () {
		var t = new eui.Image();
		this.d_4 = t;
		t.source = "d2_png";
		t.visible = false;
		return t;
	};
	_proto.d_1_i = function () {
		var t = new eui.Image();
		this.d_1 = t;
		t.source = "d3_png";
		t.visible = false;
		return t;
	};
	_proto.residue_i = function () {
		var t = new eui.Label();
		this.residue = t;
		t.fontFamily = "SimHei";
		t.horizontalCenter = 0;
		t.size = 40;
		t.text = "88";
		t.textAlign = "center";
		t.textColor = 0x02d6ad;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		return t;
	};
	_proto.waitTxt_i = function () {
		var t = new eui.Label();
		this.waitTxt = t;
		t.horizontalCenter = 0;
		t.size = 50;
		t.text = "匹配中...";
		t.verticalCenter = 0;
		return t;
	};
	return gameComponentSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/skins/InputComponent.exml'] = window.InputComponentSkin = (function (_super) {
	__extends(InputComponentSkin, _super);
	function InputComponentSkin() {
		_super.call(this);
		this.skinParts = ["inputImage","ImageInput"];
		
		this.height = 200;
		this.width = 200;
		this.elementsContent = [this.ImageInput_i()];
	}
	var _proto = InputComponentSkin.prototype;

	_proto.ImageInput_i = function () {
		var t = new eui.Group();
		this.ImageInput = t;
		t.height = 200;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 200;
		t.elementsContent = [this._Rect1_i(),this._Rect2_i(),this._Rect3_i(),this.inputImage_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillColor = 0x383838;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.bottom = 20;
		t.fillColor = 0x918C8C;
		t.horizontalCenter = 0;
		t.top = 20;
		t.width = 20;
		return t;
	};
	_proto._Rect3_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x918C8C;
		t.height = 20;
		t.left = 20;
		t.right = 20;
		t.verticalCenter = 0;
		return t;
	};
	_proto.inputImage_i = function () {
		var t = new eui.Image();
		this.inputImage = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	return InputComponentSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/skins/loadComponent.exml'] = window.loadComponentSkin = (function (_super) {
	__extends(loadComponentSkin, _super);
	function loadComponentSkin() {
		_super.call(this);
		this.skinParts = ["textField"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this._Rect1_i(),this.textField_i()];
	}
	var _proto = loadComponentSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillColor = 0x3476bc;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto.textField_i = function () {
		var t = new eui.Label();
		this.textField = t;
		t.horizontalCenter = 0;
		t.size = 40;
		t.text = "Label";
		t.verticalCenter = 80;
		return t;
	};
	return loadComponentSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/skins/lobbyComponent.exml'] = window.lobbyComponentSkin = (function (_super) {
	__extends(lobbyComponentSkin, _super);
	function lobbyComponentSkin() {
		_super.call(this);
		this.skinParts = ["before_input","after_input","submit","before","after","submitGrp"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this._Rect1_i(),this.before_input_i(),this._Label1_i(),this._Label2_i(),this.after_input_i(),this.submit_i(),this.submitGrp_i()];
	}
	var _proto = lobbyComponentSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillColor = 0x3476bc;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto.before_input_i = function () {
		var t = new InputComponent();
		this.before_input = t;
		t.height = 20;
		t.width = 20;
		t.x = 240;
		t.y = 206;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.text = "打扫前";
		t.x = 80;
		t.y = 34;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.text = "打扫后";
		t.x = 80;
		t.y = 411;
		return t;
	};
	_proto.after_input_i = function () {
		var t = new InputComponent();
		this.after_input = t;
		t.height = 20;
		t.width = 20;
		t.x = 240;
		t.y = 588;
		return t;
	};
	_proto.submit_i = function () {
		var t = new eui.Button();
		this.submit = t;
		t.label = "提交";
		t.x = 176;
		t.y = 862;
		return t;
	};
	_proto.submitGrp_i = function () {
		var t = new eui.Group();
		this.submitGrp = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.visible = false;
		t.elementsContent = [this._Rect2_i(),this._Label3_i(),this._Label4_i(),this.before_i(),this.after_i(),this._Label5_i()];
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillColor = 0xba9234;
		t.left = 0;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 0;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "打扫前";
		t.x = 90;
		t.y = 44;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "打扫后";
		t.x = 90;
		t.y = 421;
		return t;
	};
	_proto.before_i = function () {
		var t = new eui.Image();
		this.before = t;
		t.height = 200;
		t.source = "";
		t.width = 200;
		t.x = 240;
		t.y = 174;
		return t;
	};
	_proto.after_i = function () {
		var t = new eui.Image();
		this.after = t;
		t.height = 200;
		t.source = "";
		t.width = 200;
		t.x = 240;
		t.y = 530;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 122;
		t.text = "XXX于某年某月某日提交";
		t.width = 426;
		t.x = 134;
		t.y = 854;
		return t;
	};
	return lobbyComponentSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/skins/loginComponent.exml'] = window.loginComponentSkin = (function (_super) {
	__extends(loginComponentSkin, _super);
	function loginComponentSkin() {
		_super.call(this);
		this.skinParts = ["loginLabel","userId","vCode","yesBtn","vCodeBtn"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this._Image1_i(),this._Rect1_i(),this.loginLabel_i(),this._Rect2_i(),this._Rect3_i(),this.userId_i(),this.vCode_i(),this.yesBtn_i(),this.vCodeBtn_i()];
	}
	var _proto = loginComponentSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "denglu_jpg";
		t.top = 0;
		t.visible = false;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillColor = 0x3476bc;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto.loginLabel_i = function () {
		var t = new eui.Label();
		this.loginLabel = t;
		t.fontFamily = "DFKai-SB";
		t.horizontalCenter = 0;
		t.size = 40;
		t.text = "手机号登录";
		t.textColor = 0x000000;
		t.y = 138;
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 40;
		t.ellipseWidth = 40;
		t.fillColor = 0xe5f9f9;
		t.height = 80;
		t.horizontalCenter = 0;
		t.strokeColor = 0x05b7fc;
		t.strokeWeight = 2;
		t.width = 520;
		t.y = 240;
		return t;
	};
	_proto._Rect3_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 40;
		t.ellipseWidth = 40;
		t.fillColor = 0xE5F9F9;
		t.height = 80;
		t.horizontalCenter = 0;
		t.strokeColor = 0x05B7FC;
		t.strokeWeight = 2;
		t.width = 520;
		t.y = 340;
		return t;
	};
	_proto.userId_i = function () {
		var t = new eui.EditableText();
		this.userId = t;
		t.height = 80;
		t.horizontalCenter = "0";
		t.prompt = "请输入手机号";
		t.size = 50;
		t.text = "";
		t.textAlign = "center";
		t.textColor = 0x02f7e7;
		t.verticalAlign = "middle";
		t.width = 520;
		t.y = 240;
		return t;
	};
	_proto.vCode_i = function () {
		var t = new eui.EditableText();
		this.vCode = t;
		t.height = 80;
		t.horizontalCenter = "0";
		t.prompt = "请输入验证码";
		t.size = 50;
		t.text = "";
		t.textAlign = "center";
		t.textColor = 0x02F7E7;
		t.verticalAlign = "middle";
		t.width = 520;
		t.y = 340;
		return t;
	};
	_proto.yesBtn_i = function () {
		var t = new eui.Button();
		this.yesBtn = t;
		t.horizontalCenter = 0;
		t.label = "登录";
		t.y = 442;
		return t;
	};
	_proto.vCodeBtn_i = function () {
		var t = new eui.Button();
		this.vCodeBtn = t;
		t.horizontalCenter = 405;
		t.label = "获取验证码";
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.verticalCenter = 65;
		t.visible = false;
		return t;
	};
	return loginComponentSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/skins/RechargeComponent.exml'] = window.RechargeComponentSkin = (function (_super) {
	__extends(RechargeComponentSkin, _super);
	function RechargeComponentSkin() {
		_super.call(this);
		this.skinParts = ["gold","diamond","btnGold","btnDiamond","btnGrp"];
		
		this.height = 640;
		this.width = 1136;
		this.elementsContent = [this._Image1_i(),this.gold_i(),this.diamond_i(),this.btnGrp_i(),this._Label3_i()];
	}
	var _proto = RechargeComponentSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "bg_friendscircle_hall_jpg";
		t.top = 0;
		return t;
	};
	_proto.gold_i = function () {
		var t = new eui.Group();
		this.gold = t;
		t.height = 400;
		t.horizontalCenter = 50;
		t.verticalCenter = 0;
		t.width = 915;
		t.layout = this._TileLayout1_i();
		return t;
	};
	_proto._TileLayout1_i = function () {
		var t = new eui.TileLayout();
		t.horizontalGap = 10;
		t.verticalGap = 10;
		return t;
	};
	_proto.diamond_i = function () {
		var t = new eui.Group();
		this.diamond = t;
		t.height = 400;
		t.horizontalCenter = 50;
		t.verticalCenter = 0;
		t.visible = false;
		t.width = 915;
		t.layout = this._TileLayout2_i();
		return t;
	};
	_proto._TileLayout2_i = function () {
		var t = new eui.TileLayout();
		t.horizontalGap = 10;
		t.verticalGap = 10;
		return t;
	};
	_proto.btnGrp_i = function () {
		var t = new eui.Group();
		this.btnGrp = t;
		t.anchorOffsetX = 0;
		t.height = 400;
		t.left = 50;
		t.top = 120;
		t.width = 115;
		t.elementsContent = [this.btnGold_i(),this.btnDiamond_i()];
		return t;
	};
	_proto.btnGold_i = function () {
		var t = new eui.Group();
		this.btnGold = t;
		t.height = 200;
		t.horizontalCenter = 0;
		t.top = 0;
		t.width = 115;
		t.elementsContent = [this._Rect1_i(),this._Label1_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillAlpha = 0.5;
		t.fillColor = 0xffffff;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.height = 120;
		t.horizontalCenter = 0;
		t.size = 40;
		t.text = "欢乐豆";
		t.verticalCenter = 0;
		t.width = 40;
		return t;
	};
	_proto.btnDiamond_i = function () {
		var t = new eui.Group();
		this.btnDiamond = t;
		t.bottom = 0;
		t.height = 200;
		t.horizontalCenter = 0;
		t.width = 115;
		t.x = 10;
		t.elementsContent = [this._Rect2_i(),this._Label2_i()];
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillAlpha = 0.5;
		t.fillColor = 0xffffff;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.height = 80;
		t.horizontalCenter = 0;
		t.size = 40;
		t.text = "钻石";
		t.verticalCenter = 0;
		t.width = 40;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.horizontalCenter = 0;
		t.size = 50;
		t.text = "充值";
		t.textColor = 0xffffff;
		t.top = 30;
		return t;
	};
	return RechargeComponentSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/skins/roomComponent.exml'] = window.roomComponentSkin = (function (_super) {
	__extends(roomComponentSkin, _super);
	function roomComponentSkin() {
		_super.call(this);
		this.skinParts = ["bg","roomName_1","need_1","basePoint_1","room_1","roomName_3","need_3","basePoint_3","room_3","roomName_2","need_2","basePoint_2","room_2","ruleBtn","closeBtn","ruleBg","ruleTxt","title","ruleGrp"];
		
		this.height = 640;
		this.width = 1136;
		this.elementsContent = [this._Rect1_i(),this._Group1_i(),this._Image4_i(),this.closeBtn_i(),this.ruleGrp_i()];
	}
	var _proto = roomComponentSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillAlpha = 0.5;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetY = 0;
		t.height = 540;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 936;
		t.elementsContent = [this.bg_i(),this.room_1_i(),this.room_3_i(),this.room_2_i(),this.ruleBtn_i()];
		return t;
	};
	_proto.bg_i = function () {
		var t = new eui.Image();
		this.bg = t;
		t.height = 640;
		t.horizontalCenter = 0;
		t.source = "bg_dialog_png";
		t.verticalCenter = 0;
		t.width = 1136;
		return t;
	};
	_proto.room_1_i = function () {
		var t = new eui.Group();
		this.room_1 = t;
		t.bottom = 0;
		t.width = 312;
		t.x = 0;
		t.elementsContent = [this._Image1_i(),this.roomName_1_i(),this.need_1_i(),this.basePoint_1_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "bg_room_primary_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.roomName_1_i = function () {
		var t = new eui.Label();
		this.roomName_1 = t;
		t.horizontalCenter = 0;
		t.text = "新手";
		t.verticalCenter = 60;
		return t;
	};
	_proto.need_1_i = function () {
		var t = new eui.Label();
		this.need_1 = t;
		t.height = 120;
		t.horizontalCenter = 0;
		t.size = 26;
		t.text = "需要";
		t.textAlign = "center";
		t.verticalCenter = 185;
		t.width = 260;
		return t;
	};
	_proto.basePoint_1_i = function () {
		var t = new eui.Label();
		this.basePoint_1 = t;
		t.horizontalCenter = 0;
		t.text = "Label";
		t.textAlign = "center";
		t.verticalCenter = 164;
		return t;
	};
	_proto.room_3_i = function () {
		var t = new eui.Group();
		this.room_3 = t;
		t.bottom = 0;
		t.width = 312;
		t.x = 624;
		t.elementsContent = [this._Image2_i(),this.roomName_3_i(),this.need_3_i(),this.basePoint_3_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "bg_room_top_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.roomName_3_i = function () {
		var t = new eui.Label();
		this.roomName_3 = t;
		t.horizontalCenter = 0;
		t.text = "新手";
		t.verticalCenter = 60;
		return t;
	};
	_proto.need_3_i = function () {
		var t = new eui.Label();
		this.need_3 = t;
		t.height = 120;
		t.horizontalCenter = 0;
		t.size = 26;
		t.text = "需要";
		t.textAlign = "center";
		t.verticalCenter = 185;
		t.width = 260;
		return t;
	};
	_proto.basePoint_3_i = function () {
		var t = new eui.Label();
		this.basePoint_3 = t;
		t.horizontalCenter = 0;
		t.text = "Label";
		t.textAlign = "center";
		t.verticalCenter = 164;
		return t;
	};
	_proto.room_2_i = function () {
		var t = new eui.Group();
		this.room_2 = t;
		t.bottom = 0;
		t.width = 312;
		t.x = 312;
		t.elementsContent = [this._Image3_i(),this.roomName_2_i(),this.need_2_i(),this.basePoint_2_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "bg_room_advanced_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.roomName_2_i = function () {
		var t = new eui.Label();
		this.roomName_2 = t;
		t.horizontalCenter = 0;
		t.text = "新手";
		t.verticalCenter = 60;
		return t;
	};
	_proto.need_2_i = function () {
		var t = new eui.Label();
		this.need_2 = t;
		t.height = 120;
		t.horizontalCenter = 0;
		t.size = 26;
		t.text = "需要";
		t.textAlign = "center";
		t.verticalCenter = 185;
		t.width = 260;
		return t;
	};
	_proto.basePoint_2_i = function () {
		var t = new eui.Label();
		this.basePoint_2 = t;
		t.horizontalCenter = 0;
		t.text = "Label";
		t.textAlign = "center";
		t.verticalCenter = 164;
		return t;
	};
	_proto.ruleBtn_i = function () {
		var t = new eui.Image();
		this.ruleBtn = t;
		t.right = -6;
		t.source = "btn_rule_png";
		t.top = -30;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "txt_click_join_png";
		t.top = 27;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new eui.Image();
		this.closeBtn = t;
		t.right = 6;
		t.source = "icon_first_purchase_close_png";
		t.top = 14;
		return t;
	};
	_proto.ruleGrp_i = function () {
		var t = new eui.Group();
		this.ruleGrp = t;
		t.height = 640;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.visible = false;
		t.width = 1136;
		t.elementsContent = [this.ruleBg_i(),this.ruleTxt_i(),this.title_i()];
		return t;
	};
	_proto.ruleBg_i = function () {
		var t = new eui.Rect();
		this.ruleBg = t;
		t.bottom = 0;
		t.fillAlpha = 0.8;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto.ruleTxt_i = function () {
		var t = new eui.EditableText();
		this.ruleTxt = t;
		t.anchorOffsetY = 0;
		t.height = 465;
		t.horizontalCenter = "0";
		t.text = "";
		t.touchEnabled = false;
		t.verticalCenter = "18";
		t.width = 836;
		return t;
	};
	_proto.title_i = function () {
		var t = new eui.Label();
		this.title = t;
		t.horizontalCenter = 0;
		t.size = 50;
		t.text = "规则说明";
		t.top = 44;
		return t;
	};
	return roomComponentSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/skins/settlementComponent.exml'] = window.settlementComponentSkin = (function (_super) {
	__extends(settlementComponentSkin, _super);
	function settlementComponentSkin() {
		_super.call(this);
		this.skinParts = ["hand1","hand2","hand3","hand4","score1","score2","score3","score4","name1","name2","name3","name4","nextBtn","goBackBtn"];
		
		this.height = 640;
		this.width = 1136;
		this.elementsContent = [this._Rect1_i(),this._Group2_i()];
	}
	var _proto = settlementComponentSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillAlpha = 0.6;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.anchorOffsetY = 0;
		t.height = 576;
		t.horizontalCenter = 0;
		t.verticalCenter = 24;
		t.width = 1036;
		t.elementsContent = [this.hand1_i(),this.hand2_i(),this.hand3_i(),this.hand4_i(),this.score1_i(),this.score2_i(),this.score3_i(),this.score4_i(),this.name1_i(),this.name2_i(),this.name3_i(),this.name4_i(),this._Group1_i(),this.nextBtn_i(),this.goBackBtn_i()];
		return t;
	};
	_proto.hand1_i = function () {
		var t = new eui.Group();
		this.hand1 = t;
		t.anchorOffsetX = 0;
		t.height = 80;
		t.width = 800;
		t.x = 100;
		t.layout = this._HorizontalLayout1_i();
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = -38;
		return t;
	};
	_proto.hand2_i = function () {
		var t = new eui.Group();
		this.hand2 = t;
		t.height = 80;
		t.width = 800;
		t.x = 100;
		t.y = 80;
		t.layout = this._HorizontalLayout2_i();
		return t;
	};
	_proto._HorizontalLayout2_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = -38;
		return t;
	};
	_proto.hand3_i = function () {
		var t = new eui.Group();
		this.hand3 = t;
		t.height = 80;
		t.width = 800;
		t.x = 100;
		t.y = 160;
		t.layout = this._HorizontalLayout3_i();
		return t;
	};
	_proto._HorizontalLayout3_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = -38;
		return t;
	};
	_proto.hand4_i = function () {
		var t = new eui.Group();
		this.hand4 = t;
		t.height = 80;
		t.width = 800;
		t.x = 100;
		t.y = 240;
		t.layout = this._HorizontalLayout4_i();
		return t;
	};
	_proto._HorizontalLayout4_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = -38;
		return t;
	};
	_proto.score1_i = function () {
		var t = new eui.Label();
		this.score1 = t;
		t.height = 80;
		t.text = "+999";
		t.verticalAlign = "middle";
		t.x = 940;
		t.y = 0;
		return t;
	};
	_proto.score2_i = function () {
		var t = new eui.Label();
		this.score2 = t;
		t.height = 80;
		t.text = "+999";
		t.verticalAlign = "middle";
		t.x = 940;
		t.y = 80;
		return t;
	};
	_proto.score3_i = function () {
		var t = new eui.Label();
		this.score3 = t;
		t.height = 80;
		t.text = "+999";
		t.verticalAlign = "middle";
		t.x = 940;
		t.y = 160;
		return t;
	};
	_proto.score4_i = function () {
		var t = new eui.Label();
		this.score4 = t;
		t.height = 80;
		t.text = "+999";
		t.verticalAlign = "middle";
		t.x = 940;
		t.y = 240;
		return t;
	};
	_proto.name1_i = function () {
		var t = new eui.Label();
		this.name1 = t;
		t.height = 80;
		t.text = "玩家1";
		t.verticalAlign = "middle";
		t.x = 0;
		t.y = 10;
		return t;
	};
	_proto.name2_i = function () {
		var t = new eui.Label();
		this.name2 = t;
		t.height = 80;
		t.text = "玩家2";
		t.verticalAlign = "middle";
		t.x = 0;
		t.y = 90;
		return t;
	};
	_proto.name3_i = function () {
		var t = new eui.Label();
		this.name3 = t;
		t.height = 80;
		t.text = "玩家3";
		t.verticalAlign = "middle";
		t.x = 0;
		t.y = 170;
		return t;
	};
	_proto.name4_i = function () {
		var t = new eui.Label();
		this.name4 = t;
		t.height = 80;
		t.text = "玩家4";
		t.verticalAlign = "middle";
		t.x = 0;
		t.y = 250;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetY = 0;
		t.height = 144;
		t.horizontalCenter = 0;
		t.width = 1000;
		t.y = 332;
		t.layout = this._BasicLayout1_i();
		return t;
	};
	_proto._BasicLayout1_i = function () {
		var t = new eui.BasicLayout();
		return t;
	};
	_proto.nextBtn_i = function () {
		var t = new eui.Group();
		this.nextBtn = t;
		t.bottom = 0;
		t.height = 80;
		t.horizontalCenter = -180;
		t.touchChildren = false;
		t.touchEnabled = true;
		t.width = 300;
		t.elementsContent = [this._Rect2_i(),this._Label1_i()];
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 40;
		t.ellipseWidth = 40;
		t.fillColor = 0x02fc81;
		t.height = 80;
		t.touchEnabled = false;
		t.width = 300;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.size = 50;
		t.text = "继续匹配";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		return t;
	};
	_proto.goBackBtn_i = function () {
		var t = new eui.Group();
		this.goBackBtn = t;
		t.bottom = 0;
		t.height = 80;
		t.horizontalCenter = 180;
		t.touchChildren = false;
		t.touchEnabled = true;
		t.width = 300;
		t.elementsContent = [this._Rect3_i(),this._Label2_i()];
		return t;
	};
	_proto._Rect3_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 40;
		t.ellipseWidth = 40;
		t.fillColor = 0xf73b2e;
		t.height = 80;
		t.touchEnabled = false;
		t.width = 300;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.size = 50;
		t.text = "返回大厅";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		return t;
	};
	return settlementComponentSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/skins/userComponent.exml'] = window.userComponentSkin = (function (_super) {
	__extends(userComponentSkin, _super);
	function userComponentSkin() {
		_super.call(this);
		this.skinParts = ["winNum","loseNum","head","nickName","closeBtn"];
		
		this.height = 640;
		this.width = 1136;
		this.elementsContent = [this._Image1_i(),this._Group6_i(),this.head_i(),this.nickName_i(),this.closeBtn_i()];
	}
	var _proto = userComponentSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "bg_invited_my_info_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group6_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 326;
		t.horizontalCenter = 319;
		t.verticalCenter = 13.5;
		t.width = 336;
		t.layout = this._VerticalLayout1_i();
		t.elementsContent = [this._Group1_i(),this._Group2_i(),this._Group3_i(),this._Group4_i(),this._Group5_i()];
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 60;
		t.width = 336;
		t.x = -558;
		t.y = -234;
		t.elementsContent = [this._Label1_i(),this.winNum_i()];
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.left = 20;
		t.text = "胜场数:";
		t.verticalCenter = 0;
		return t;
	};
	_proto.winNum_i = function () {
		var t = new eui.Label();
		this.winNum = t;
		t.right = 20;
		t.text = "1000";
		t.textAlign = "left";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.height = 60;
		t.width = 336;
		t.x = -558;
		t.y = -234;
		t.elementsContent = [this._Label2_i(),this.loseNum_i()];
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.left = 20;
		t.text = "负场数:";
		t.verticalCenter = 0;
		return t;
	};
	_proto.loseNum_i = function () {
		var t = new eui.Label();
		this.loseNum = t;
		t.right = 20;
		t.text = "1000";
		t.textAlign = "left";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.height = 60;
		t.width = 336;
		t.x = -548;
		t.y = -224;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.height = 60;
		t.width = 336;
		t.x = -538;
		t.y = -214;
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.height = 60;
		t.width = 336;
		t.x = -528;
		t.y = -204;
		return t;
	};
	_proto.head_i = function () {
		var t = new eui.Image();
		this.head = t;
		t.height = 140;
		t.horizontalCenter = -81;
		t.source = "face1_png";
		t.verticalCenter = -123;
		t.width = 140;
		return t;
	};
	_proto.nickName_i = function () {
		var t = new eui.Label();
		this.nickName = t;
		t.height = 40;
		t.horizontalCenter = -77;
		t.size = 40;
		t.text = "十亿少女的梦中情人";
		t.verticalCenter = 69;
		t.width = 360;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new eui.Image();
		this.closeBtn = t;
		t.right = 20;
		t.source = "icon_first_purchase_close_png";
		t.top = 20;
		return t;
	};
	return userComponentSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/skins/userHeadComponent.exml'] = window.userHeadComponentSkin = (function (_super) {
	__extends(userHeadComponentSkin, _super);
	function userHeadComponentSkin() {
		_super.call(this);
		this.skinParts = ["headbg","score"];
		
		this.height = 110;
		this.width = 80;
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = userHeadComponentSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 110;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.width = 80;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.headbg_i(),this._Rect1_i(),this.score_i()];
		return t;
	};
	_proto.headbg_i = function () {
		var t = new eui.Image();
		this.headbg = t;
		t.height = 80;
		t.source = "";
		t.width = 80;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetY = 0;
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.fillAlpha = 0.7;
		t.height = 30;
		t.x = 0;
		t.y = 80;
		return t;
	};
	_proto.score_i = function () {
		var t = new eui.Label();
		this.score = t;
		t.fontFamily = "SimHei";
		t.horizontalCenter = 0;
		t.text = "";
		t.textAlign = "center";
		t.textColor = 0xd68b35;
		t.y = 80;
		return t;
	};
	return userHeadComponentSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/skins/waresComponent.exml'] = window.waresComponentSkin = (function (_super) {
	__extends(waresComponentSkin, _super);
	function waresComponentSkin() {
		_super.call(this);
		this.skinParts = ["img","txt","price"];
		
		this.height = 200;
		this.width = 200;
		this.elementsContent = [this.img_i(),this.txt_i(),this.price_i()];
	}
	var _proto = waresComponentSkin.prototype;

	_proto.img_i = function () {
		var t = new eui.Image();
		this.img = t;
		t.horizontalCenter = 0;
		t.verticalCenter = -40;
		return t;
	};
	_proto.txt_i = function () {
		var t = new eui.Label();
		this.txt = t;
		t.bottom = 0;
		t.height = 60;
		t.left = 0;
		t.right = 0;
		t.size = 22;
		t.text = "Label";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		return t;
	};
	_proto.price_i = function () {
		var t = new eui.Label();
		this.price = t;
		t.bottom = 60;
		t.left = 0;
		t.right = 0;
		t.size = 24;
		t.text = "price";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		return t;
	};
	return waresComponentSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/TextInputSkin.exml'] = window.skins.TextInputSkin = (function (_super) {
	__extends(TextInputSkin, _super);
	function TextInputSkin() {
		_super.call(this);
		this.skinParts = ["textDisplay","promptDisplay"];
		
		this.minHeight = 40;
		this.minWidth = 300;
		this.elementsContent = [this._Image1_i(),this._Rect1_i(),this.textDisplay_i()];
		this.promptDisplay_i();
		
		this.states = [
			new eui.State ("normal",
				[
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("textDisplay","textColor",0xff0000)
				])
			,
			new eui.State ("normalWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,"")
				])
			,
			new eui.State ("disabledWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,"")
				])
		];
	}
	var _proto = TextInputSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.visible = false;
		t.percentWidth = 100;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillAlpha = 0;
		t.fillColor = 0x1be9f7;
		t.percentHeight = 100;
		t.strokeColor = 0x57e1f2;
		t.strokeWeight = 2;
		t.percentWidth = 100;
		return t;
	};
	_proto.textDisplay_i = function () {
		var t = new eui.EditableText();
		this.textDisplay = t;
		t.height = 24;
		t.left = "10";
		t.right = "10";
		t.size = 20;
		t.textColor = 0x000000;
		t.verticalCenter = "0";
		t.percentWidth = 100;
		return t;
	};
	_proto.promptDisplay_i = function () {
		var t = new eui.Label();
		this.promptDisplay = t;
		t.height = 24;
		t.left = 10;
		t.right = 10;
		t.size = 20;
		t.textColor = 0xa9a9a9;
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	return TextInputSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ToggleSwitchSkin.exml'] = window.skins.ToggleSwitchSkin = (function (_super) {
	__extends(ToggleSwitchSkin, _super);
	function ToggleSwitchSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.elementsContent = [this._Image1_i(),this._Image2_i()];
		this.states = [
			new eui.State ("up",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
		];
	}
	var _proto = ToggleSwitchSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.source = "on_png";
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.horizontalCenter = -18;
		t.source = "handle_png";
		t.verticalCenter = 0;
		return t;
	};
	return ToggleSwitchSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/VScrollBarSkin.exml'] = window.skins.VScrollBarSkin = (function (_super) {
	__extends(VScrollBarSkin, _super);
	function VScrollBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb"];
		
		this.minHeight = 20;
		this.minWidth = 8;
		this.elementsContent = [this.thumb_i()];
	}
	var _proto = VScrollBarSkin.prototype;

	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.height = 30;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(3,3,2,2);
		t.source = "roundthumb_png";
		t.width = 8;
		return t;
	};
	return VScrollBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/VSliderSkin.exml'] = window.skins.VSliderSkin = (function (_super) {
	__extends(VSliderSkin, _super);
	function VSliderSkin() {
		_super.call(this);
		this.skinParts = ["track","thumb"];
		
		this.minHeight = 30;
		this.minWidth = 25;
		this.elementsContent = [this.track_i(),this.thumb_i()];
	}
	var _proto = VSliderSkin.prototype;

	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_png";
		t.width = 7;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.horizontalCenter = 0;
		t.source = "thumb_png";
		return t;
	};
	return VSliderSkin;
})(eui.Skin);