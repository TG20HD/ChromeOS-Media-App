(function(_bl) {'use strict';var x4=function(a){if(a.currentTarget instanceof HTMLElement&&null!==a.currentTarget.ariaChecked)return"true"===a.currentTarget.ariaChecked},y4=async function(a){try{return{proxy:a,blob:await _bl.Zi(a)}}catch(b){return{proxy:a,error:b,blob:void 0}}},A4=async function(a){var b=z4;a=await Promise.all(a.map(y4));const c=[];for(const d of a)d.blob?c.push(d):b(d.proxy,d.error);return c},B4=function(a){return _bl.Fk("Video",a)},D4=function(a){try{return 0!==a.captureStream().getVideoTracks().length}catch(b){return a=
_bl.Fc(_bl.oc(b)),_bl.zc(C4,a),0===a&&_bl.Uh(_bl.lc("videoHasVideoTrack",b,{tm:!0})),!1}},E4=async function(a,b,c,d){const e=document.createElement("video");b=await _bl.Aq(e,b,a.h);if(2!==b){e.setAttribute("aria-description",d);d=new Set([e.src]);for(const f of c)c=document.createElement("track"),c.label=_bl.Ui(f.proxy.name()).filename,c.src=_bl.Pb(_bl.nc(f.blob)),e.appendChild(c),d.add(c.src);_bl.yq(a,d);a.mediaElement.parentNode===a&&a.replaceChild(e,a.mediaElement);a.mediaElement=e;a.mediaElement.setAttribute("autoPictureInPicture",
"")}return b},F4=function(a,b){if(0===b.length)return[];const c=[...b];b=[{fq:!0,va:"no-text-track",entryType:0,label:_bl.D.MSG_VIDEO_HANDLER_CONTROLS_CAPTIONS_OFF,qa:()=>{for(const d of c)d.mode="disabled";a.la()},role:"radio",activated:c.every(d=>"showing"!==d.mode)}];for(const d of c)b.push({fq:!0,va:`text-track-${d.label}`,entryType:0,label:d.label,qa:()=>{d.mode="showing"===d.mode?"disabled":"showing";a.la()},role:"radio",activated:"showing"===d.mode});return[{va:"captions",entryType:1,label:_bl.D.MSG_VIDEO_HANDLER_CONTROLS_CAPTIONS_LABEL,
sb:{entries:b},se:_bl.Pi}]},G4=function(a,b){const c=a.delegate.media;b?(c.style.cursor="none",c.ontimeupdate=null):(c.style.cursor="unset",c.ontimeupdate=()=>void _bl.Po(a.ph),_bl.Po(a.ph))},H4=function(a){a.controls.sk();_bl.tA(a)},I4=function(){return Array.from({length:12},(a,b)=>.25+.25*b)},J4=function(a,b){const c=_bl.Ui(a.name).filename;return b.filter(d=>{d=d.name();d=_bl.Ui(d);return".vtt"===d.extension&&(d.filename===c||_bl.Ui(d.filename).filename===c)})},z4=function(a,b){console.error(`Ignoring subtitle track: ${a.name()}: ${b}`)},
L4=async function(a,b){a=a.media;b=b??a!==document.vO;try{b?D4(a)&&await a.lZ():await document.kY()}catch(c){c instanceof DOMException?(_bl.zc(K4,_bl.Fc(_bl.oc(c))),/Must be handling a user gesture/.test(c.message)||_bl.Uh(_bl.B(`pictureInPicture [${c.name}]`,c))):_bl.Uh(_bl.B("pictureInPicture",c))}},M4=function(a,b){a.media.loop=b??!a.media.loop;a.controls.la();_bl.zj({message:a.media.loop?_bl.D.MSG_VIDEO_HANDLER_LOOP_ENABLED:_bl.D.MSG_VIDEO_HANDLER_LOOP_DISABLED})},N4=async function(a){const b=
_bl.N;if(b&&(a.h=!1,b.wb(),a.eb&&!["video/webm"].includes(a.eb.mimeType))){if(!_bl.$d("photosIntegrationEmulation")){const c=a.eb;if(!(c.editInPhotos&&await c.isArcWritable?.()&&await c.isBrowserWritable?.())||a.eb!==c)return}a.h=!0;b.wb()}};var C4={name:"MediaApp.Video.TrackMetadataQueryResult",maxValue:20};var O4=class extends _bl.RQ{constructor(){super(document.createElement("video"));this.h={od:0};this.mediaElement.style.display="none"}bb(){const a=this.mediaElement.clientWidth,b=this.mediaElement.clientHeight;return new _bl.Vh(this.mediaElement.videoWidth||a,this.mediaElement.videoHeight||b)}transform({te:a=0,bf:b=0,scale:c=1}={},d=0){_bl.Xi(this,d);this.style.transform=(0,_bl.W)`translate(${a}px, ${b}px) scale(${c})`.toString()}static get styles(){return(0,_bl.W)`
      :host {
        display: flex;
        overflow: hidden;
        user-select: none;
        z-index: ${2};
      }

      ::slotted(*) {
        background: black;
      }

      @media all and (display-mode: fullscreen) {
        :host {
          height: 100%;
          justify-content: center;
          transform: unset !important;
          width: 100%;
        }

        ::slotted(*) {
          max-height: 100%;
          max-width: 100%;
        }
      }
    `}render(){return(0,_bl.L)`<slot></slot>`}};O4=_bl.t([_bl.Z("backlight-managed-video"),_bl.v("design:paramtypes",[])],O4);var P4=class extends _bl.xP{constructor(a){super(a);this.delegate=a;this.rw=()=>{this.la();_bl.N?.wb()};this.rD=window.matchMedia("(display-mode: fullscreen)")}connectedCallback(){super.connectedCallback();document.addEventListener("fullscreenchange",this.rw);this.rD.onchange=this.rw}disconnectedCallback(){super.disconnectedCallback();document.removeEventListener("fullscreenchange",this.rw);this.rD.onchange=null}render(){return(0,_bl.L)`
      <ea-fadeable @fully-faded-changed=${this.cO}>
        ${super.render()}
      </ea-fadeable>
    `}static get styles(){const a=(0,_bl.W)`
      :host {
        bottom: ${48}px;
        margin-inline-start: calc(
            50% - ${568}px / 2);
        position: absolute;
        z-index: ${3};
      }

      ea-fadeable {
        backdrop-filter: blur(${30}px);
        background-color: ${_bl.LK};
        border-radius: ${16}px;
      }

      ea-fadeable[fullyfaded] {
        backdrop-filter: unset;
      }

      #controls-container {
        background-color: ${_bl.KK};
        border-radius: ${16}px;
      }

      #secondary-controls {
        display: grid;
        grid-auto-columns: 50%;
        grid-template-areas: ". .";
      }
    `;return[_bl.xP.styles,a]}pa(a){super.pa(a);this.ie.h=!1}oH(){var a=this.delegate.media;const b=D4(a)?[{va:"toggle-pip",entryType:0,label:_bl.D.MSG_VIDEO_HANDLER_CONTROLS_PIP_LABEL,qa:c=>L4(this.delegate,x4(c)),role:"checkbox",activated:a===document.vO}]:[];a=[...F4(this,a.textTracks),...b,{va:"toggle-loop",entryType:0,label:_bl.D.MSG_PLAYBACK_HANDLER_CONTROLS_LOOP_PLAYBACK_LABEL,qa:c=>void M4(this.delegate,x4(c)),role:"checkbox",activated:a.loop}];return(0,_bl.L)`
      <div id="secondary-controls">
        ${(new _bl.ko(_bl.N?.hq()?_bl.dC:_bl.iD,_bl.D.MSG_TOOLTIP_FULLSCREEN,B4("ToggleFullscreen"),async()=>void await this.delegate.fl())).create("fullscreen-button")}
        <backlight-overflow-menu
            alignstart
            anchorbottom
            .overflowLabel=${_bl.D.MSG_VIDEO_HANDLER_OPTIONS_MENU}
            .entries=${a}>
        </backlight-overflow-menu>
      </div>
    `}sk(){super.sk();this.ie&&(this.ie.h=!1);G4(this,!1)}nc(){this.ie?.nc()}zP(){if(this.ie)if(this.ie.tq)this.ie.nc();else{var a=this.ie;(a.animation?.currentTime??0)>a.fadeDelayMs||(a.animation?.cancel(),a.fade(0))}}sG(){this.ie&&(this.ie.h=!0);this.nc();this.la()}rG(){this.ie&&(this.ie.h=!1);this.nc();this.la()}cO(a){G4(this,a.detail.tq)}};_bl.t([_bl.H("ea-fadeable"),_bl.v("design:type",_bl.kP)],P4.prototype,"ie",void 0);
P4=_bl.t([_bl.Z("backlight-video-controls"),_bl.v("design:paramtypes",[Object])],P4);var Q4=class extends _bl.$U{};var R4=class extends _bl.bV{constructor(a){super(a,new O4);this.controls=new P4(a)}connectedCallback(){super.connectedCallback();this.controls.isConnected||this.appendChild(this.controls)}transform(a=0){const b=(e,f,g)=>{e+=(f-g)/2;return 1===this.scale?Math.round(e):e},c=_bl.sA(this).bb(),d=this.da();this.media.transform({te:("rtl"===document.dir?-1:1)*b(this.offset.x,c.width,d.width),bf:b(this.offset.y,c.height,d.height),scale:this.scale},a)}ka(a){return new Q4(a)}};
R4=_bl.t([_bl.Z("backlight-video-viewport"),_bl.v("design:paramtypes",[Object])],R4);var K4={name:"MediaApp.Generic.PictureInPictureError",maxValue:20},S4=class extends _bl.yP{constructor(){super(...arguments);this.fi="video/*";this.ak=_bl.yG;this.le="VideoHandler";this.bs=this.kz=!0;this.l=0;this.h=!1;this.viewport=this.appendChild(new R4(this));this.o=a=>{a.ctrlKey?(M4(this),a.preventDefault()):this.yc();this.viewport.controls?.nc()};this.xc=a=>{a.stopPropagation();a.target!==this.media?this.viewport.controls?.nc():this.viewport.controls?.zP()};this.fb=()=>void this.fl();this.j=
I4()}get media(){return this.viewport.media.mediaElement}get controls(){return this.viewport.controls}connectedCallback(){super.connectedCallback();window.addEventListener("pointerdown",this.xc);this.viewport.media.addEventListener("click",this.o);this.viewport.media.addEventListener("dblclick",this.fb)}disconnectedCallback(){super.disconnectedCallback();window.removeEventListener("pointerdown",this.xc);this.viewport.media.removeEventListener("click",this.o);this.viewport.media.removeEventListener("dblclick",
this.fb)}pa(a){super.pa(a);_bl.rA(this.viewport)}yw(){return this.l+1}async kk(a,b){const c=this.sessionId;if(a.name.endsWith(".vtt")){const e=a.name.split(".")[0];var d=b.find(f=>f.name().startsWith(e)&&!f.name().endsWith(".vtt"));if(d)try{a=await _bl.aj(d);if(c!==this.sessionId)return 4;this.ba=a;_bl.N?.notifyCurrentFile()}catch(f){}}this.mg(a);d=a.blob;a.mimeType&&d.type!==a.mimeType&&(d=new Blob([d],{type:a.mimeType}));b=await A4(J4(a,b));this.l=b.length;if(c!==this.sessionId)return 4;switch(await E4(this.viewport.media,
d,b,a.name)){case 0:break;case 2:return 4;case 5:return this.loadError="MediaErrSrcNotSupported",11;case 4:return this.loadError="EncodingError",10;default:return 13}H4(this.viewport);_bl.zk(this.ig());N4(this);return 0}gh(){var a=[["F"]];_bl.N?.hq()&&a.push(["Escape"]);a=[new _bl.oP("ToggleFullscreen",B4("ToggleFullscreen"),async()=>void await this.fl(),a),new _bl.oP("TogglePictureInPicture",B4("TogglePictureInPicture"),async()=>void await L4(this),[["I"]]),new _bl.oP("ToggleLoop",this.hc("ToggleLoop"),
async()=>void M4(this),[["R"]])];const b=_bl.$d("photosIntegrationEmulation")||_bl.$d("photosAvailableForVideo")&&this.h?[new _bl.on(_bl.D.MSG_VIDEO_HANDLER_PHOTOS_INTEGRATION_BUTTON,"edit-in-photos-button",B4("EditInPhotos"),()=>void this.eb?.editInPhotos?.(),{jb:-1,icon:_bl.oD})]:[];return[...super.gh(),...a,...b]}async pd(){await _bl.N.loadPrev()}async rc(){await _bl.N.loadNext()}hc(a){return B4(a)}ja(){return{loop:this.media.loop,...super.ja()}}async fl(){await _bl.N?.fl()}};
S4=_bl.t([_bl.Z("backlight-video-handler")],S4);_bl.lb(()=>new S4);}).call(this, bl);
