(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[37617],{888054:(e,t,a)=>{a.d(t,{Z:()=>m});var s=a(667294),i=a(867631),r=a.n(i),l=a(34411),n=a(549135),o=a(585967),h=a(883119),d=a(872324),c=a(208757),u=a(785893);function p(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}class y extends s.PureComponent{constructor(...e){super(...e),p(this,"state",{canPlayVideo:!1,isManifestParsed:!1,playbackState:c.Cy.DEFAULT}),p(this,"errorRetryCount",1),p(this,"firstFragBuffered",!1),p(this,"hasPlaybackStarted",!1),p(this,"hasVideoSessionStarted",!1),p(this,"hasVideoSessionEnded",!1),p(this,"hls",null),p(this,"fragStartupTime",{}),p(this,"lastLevelSwitchKbps",null),p(this,"lastStallTime",null),p(this,"logSessionStartOnNextPlay",!1),p(this,"playerId",""),p(this,"videoSessionId",""),p(this,"videoVisibleTime",null),p(this,"playbackPerformance",{canPlayTime:null,detailedErrors:"",downloadedKiloBytes:0,errorCode:0,errorName:"",errorReason:"",hasFatalError:!1,loadStartTime:null,numberOfStalls:0,numberOfSeeks:0,playbackStartTimestamp:null,segments:[],srcString:"string"==typeof this.props.src?this.props.src:this.props.src[0].src,totalStallDurationMs:0,videoCreatedTime:null}),p(this,"initializeHls",(()=>{this.destroyHls();const{src:e,hlsConfig:t}=this.props,a=new(r())(t);a.loadSource(e),this.videoPlayerRef&&a.attachMedia(this.videoPlayerRef.video),a.on(r().Events.FRAG_BUFFERED,this.handleHlsFragBuffered),a.on(r().Events.FRAG_CHANGED,this.handleHlsFragChanged),a.on(r().Events.FRAG_LOADING,this.handleHlsFragLoading),a.on(r().Events.FRAG_LOADED,this.handleHlsFragLoaded),a.on(r().Events.MANIFEST_PARSED,(()=>{this.setState({isManifestParsed:!0})})),a.on(r().Events.LEVEL_SWITCHED,this.handleHlsLevelSwitched),a.on(r().Events.ERROR,this.handleHlsError),this.hls=a})),p(this,"destroyHls",(()=>{const{hls:e}=this;e&&e.destroy()})),p(this,"addSegment",(e=>{const{segments:t}=this.playbackPerformance,a=t&&t[t.length-1];if(this.hls&&t.length&&a&&a.uri!==e.url){this.updateWatchDurationForCurrentSegment();const a=this.videoPlayerRef&&this.videoPlayerRef.video,s=this.hls&&this.hls.levels||{},i="number"==typeof e.level?s[e.level]:{},r=this.fragStartupTime[e.url];let l=-1;r&&r.startLoadTime&&r.endLoadTime&&(l=r.endLoadTime-r.startLoadTime);const n={indicatedKbps:i.bitrate/c.bR,duration:e.duration,level:e.level,lastStartPlayTime:this.getCurrentVideoTime(),numServerAddressChange:-1,observedKbps:this.hls&&this.hls.bandwidthEstimate/c.bR||-1,playbackStartDate:Date.now(),serverAddress:"",sn:e.sn,sourceWidth:i.width,sourceHeight:i.height,startupTimeMs:l,switchBitrateKbps:this.lastLevelSwitchKbps||-1,uri:e.url,viewportWidth:a&&a.clientWidth||-1,viewportHeight:a&&a.clientHeight||-1,watchedDurationMs:0};t.push(n)}})),p(this,"initializeSegments",(e=>{const{contextLogData:t={}}=this.props,{is_closeup_video:a=!1}=t,{segments:s}=this.playbackPerformance;if(!s.length)if(this.hls&&this.videoPlayerRef&&this.videoPlayerRef.video&&e){if(!s.length&&"number"==typeof e.level){const t=this.videoPlayerRef&&this.videoPlayerRef.video,a=this.hls.levels,i="number"==typeof e.level?a[e.level]:{},r=this.fragStartupTime[e.url];let l=-1;r&&r.startLoadTime&&r.endLoadTime&&(l=r.endLoadTime-r.startLoadTime),this.lastLevelSwitchKbps=this.hls.bandwidthEstimate/c.bR;const n={indicatedKbps:i.bitrate/c.bR,duration:e.duration,level:e.level,lastStartPlayTime:null,numServerAddressChange:-1,observedKbps:this.hls.bandwidthEstimate/c.bR||-1,playbackStartDate:null,serverAddress:"",sn:e.sn,sourceWidth:i.width,sourceHeight:i.height,startupTimeMs:l,switchBitrateKbps:this.lastLevelSwitchKbps||-1,uri:e.url,viewportWidth:t.clientWidth,viewportHeight:t.clientHeight,watchedDurationMs:0};s.push(n)}}else(0,d.tE)("initializeSegmentsFailed",!0,a)})),p(this,"getCurrentVideoTime",(()=>this.videoPlayerRef&&this.videoPlayerRef.video?this.videoPlayerRef.video.currentTime*c.gJ:null)),p(this,"handleCanPlayVideo",(e=>{const{contextLogData:t={},onReady:a,playing:s}=this.props,{is_closeup_video:i=!1}=t,{canPlayVideo:r}=this.state;(0,d.tE)("handleCanPlayVideo",!0,i,{firstCanPlayEvent:!r,playing:s}),this.playbackPerformance.hasFatalError=!1,r||(this.playbackPerformance.canPlayTime=new Date),this.setState({canPlayVideo:!0}),a&&a(e)})),p(this,"handleEnded",(e=>{const{loop:t,onEnded:a}=this.props,{segments:s}=this.playbackPerformance,i=s&&s[s.length-1];t&&this.videoPlayerRef&&this.videoPlayerRef.video?(this.updateWatchDurationForCurrentSegment(),i&&(i.lastStartPlayTime=0),this.fragStartupTime={}):t||this.logPlaybackPerformance(c.$f,{initiator:"videoEnded",loop:t}),this.setState({playbackState:c.Cy.ENDED}),a&&a(e)})),p(this,"handleHlsError",((e,t)=>{var a;const{contextLogData:s={}}=this.props,{is_closeup_video:i=!1}=s;if(this.playbackPerformance.detailedErrors+=`${this.playbackPerformance.detailedErrors.length>0?", ":""}${t.details}`,t.fatal){var l,n,o,h;this.playbackPerformance.hasFatalError=!0,this.playbackPerformance.errorName=t.type,this.playbackPerformance.errorReason=t.details,this.playbackPerformance.errorCode=t.response&&t.response.code?t.response.code:0;const e={errorName:t.type,errorReason:t.details,errorRetryCount:this.errorRetryCount,errorMessage:(null===(l=t.err)||void 0===l||null===(n=l.message)||void 0===n?void 0:n.slice(0,50))||"unknown",errorResponse:(null===(o=t.response)||void 0===o||null===(h=o.text)||void 0===h?void 0:h.slice(0,50))||"unknown",playbackState:this.state.playbackState};if((0,d.tE)("fatalError",!0,i,e),this.errorRetryCount>0)switch(this.errorRetryCount-=1,t.type){case r().ErrorTypes.NETWORK_ERROR:if(t.details===r().ErrorDetails.MANIFEST_LOAD_ERROR||t.details===r().ErrorDetails.MANIFEST_LOAD_TIMEOUT||t.details===r().ErrorDetails.MANIFEST_LOAD_PARSING_ERROR){var u;const{src:e}=this.props;null===(u=this.hls)||void 0===u||u.loadSource(e)}else{var p;null===(p=this.hls)||void 0===p||p.startLoad()}break;case r().ErrorTypes.MEDIA_ERROR:null===(a=this.hls)||void 0===a||a.recoverMediaError()}}this.updateWatchDurationForCurrentSegment(),this.setState({playbackState:c.Cy.FAILED})})),p(this,"handleHlsFragBuffered",((e,t)=>{this.firstFragBuffered||(this.initializeSegments(t.frag),this.firstFragBuffered=!0)})),p(this,"handleHlsFragChanged",((e,t)=>{this.addSegment(t.frag)})),p(this,"handleHlsFragLoading",((e,t)=>{var a;const s=null===(a=t.frag)||void 0===a?void 0:a.url;s&&!this.fragStartupTime[s]&&(this.fragStartupTime[s]={startLoadTime:new Date})})),p(this,"handleHlsFragLoaded",((e,t)=>{var a;t.frag&&t.frag.loaded&&(this.playbackPerformance.downloadedKiloBytes+=t.frag.loaded/c.Fm);const s=null===(a=t.frag)||void 0===a?void 0:a.url;s&&this.fragStartupTime[s]&&this.fragStartupTime[s].startLoadTime&&(this.fragStartupTime[s].endLoadTime=new Date)})),p(this,"handleHlsLevelSwitched",(()=>{this.hls&&this.hls.bandwidthEstimate&&(this.lastLevelSwitchKbps=this.hls.bandwidthEstimate/c.bR)})),p(this,"handleLoadedMetadata",(()=>{this.setState({playbackState:c.Cy.LOADED_METADATA})})),p(this,"handleLoadStart",(()=>{this.playbackPerformance.loadStartTime=new Date,this.setState({playbackState:c.Cy.LOAD_START})})),p(this,"handleLoadedData",(()=>{this.setState({playbackState:c.Cy.LOADED_DATA})})),p(this,"handlePlaying",(()=>{this.playbackPerformance.hasFatalError=!1,this.setPlaybackStartTime(),this.setLastSegmentStartPlayTime(),this.setLastSegmentPlaybackStartDate(),this.updateStallDuration(),this.setState({playbackState:c.Cy.PLAYING})})),p(this,"handlePause",(()=>{this.state.playbackState!==c.Cy.STALLING&&this.state.playbackState!==c.Cy.SEEKING&&(this.updateWatchDurationForCurrentSegment(),this.updateStallDuration()),this.setState({playbackState:c.Cy.PAUSED})})),p(this,"handleSeeking",(()=>{this.playbackPerformance.numberOfSeeks+=1;const{segments:e}=this.playbackPerformance,t=e&&e[e.length-1];t&&(t.lastStartPlayTime=null),this.state.playbackState!==c.Cy.ENDED&&this.setState({playbackState:c.Cy.SEEKING})})),p(this,"handleStalled",(()=>{null===this.lastStallTime&&this.state.playbackState!==c.Cy.ENDED&&(this.lastStallTime=new Date,this.playbackPerformance.numberOfStalls+=1),this.setState({playbackState:c.Cy.STALLING})})),p(this,"handleTimeUpdate",(e=>{const{onTimeChange:t}=this.props;t&&t(e),this.state.playbackState===c.Cy.PLAYING&&(this.updateWatchDurationForCurrentSegment(),this.setLastSegmentStartPlayTime())})),p(this,"resetPlaybackMetrics",(()=>{this.hasPlaybackStarted=!1,this.hasVideoSessionStarted=!1,this.hasVideoSessionEnded=!0,this.lastLevelSwitchKbps=null,this.lastStallTime=null,this.videoSessionId="",this.videoVisibleTime=null,this.logSessionStartOnNextPlay=!1;const e={...this.playbackPerformance.segments[this.playbackPerformance.segments.length-1],lastStartPlayTime:null,playbackStartDate:null,switchBitrateKbps:-1,watchedDurationMs:0};this.playbackPerformance.detailedErrors="",this.playbackPerformance.downloadedKiloBytes=0,this.playbackPerformance.errorCode=0,this.playbackPerformance.errorName="",this.playbackPerformance.errorReason="",this.playbackPerformance.hasFatalError=!1,this.playbackPerformance.numberOfStalls=0,this.playbackPerformance.numberOfSeeks=0,this.playbackPerformance.playbackStartTimestamp=null,this.playbackPerformance.totalStallDurationMs=0,this.playbackPerformance.segments=[e]})),p(this,"setLastSegmentStartPlayTime",(()=>{const{segments:e}=this.playbackPerformance,t=e&&e[e.length-1];t&&null===t.lastStartPlayTime&&(t.lastStartPlayTime=this.getCurrentVideoTime())})),p(this,"setLastSegmentPlaybackStartDate",(()=>{const{segments:e}=this.playbackPerformance,t=e&&e[e.length-1];t&&null===t.playbackStartDate&&(t.playbackStartDate=Date.now())})),p(this,"setPlaybackStartTime",(()=>{this.hasPlaybackStarted||(this.playbackPerformance.playbackStartTimestamp=Date.now(),this.hasPlaybackStarted=!0)})),p(this,"setVideoPlayerRef",(e=>{const{setVideoRef:t}=this.props;if(e&&(t&&t(e),this.videoPlayerRef=e,this.videoPlayerRef.video)){const e=this.videoPlayerRef.video;e.addEventListener("loadedmetadata",this.handleLoadedMetadata),e.addEventListener("loadeddata",this.handleLoadedData),e.addEventListener("pause",this.handlePause),e.readyState>=3&&(this.setState({canPlayVideo:!0}),this.playbackPerformance.canPlayTime=new Date)}})),p(this,"updateStallDuration",(()=>{null!==this.lastStallTime&&(this.playbackPerformance.totalStallDurationMs+=new Date-this.lastStallTime,this.lastStallTime=null)})),p(this,"updateWatchDurationForCurrentSegment",(()=>{const{segments:e}=this.playbackPerformance,t=e&&e[e.length-1],a=t?t.lastStartPlayTime:null,s=this.getCurrentVideoTime();if(t&&null!==a&&"number"==typeof s&&"number"==typeof a){const e=s-a;e>0&&(t.watchedDurationMs+=e,t.lastStartPlayTime=null)}})),p(this,"logPlaybackPerformance",((e,t)=>{const{contextLogData:a={},userId:s,isAutoPlay:i}=this.props,{is_closeup_video:r=!1}=a,{canPlayTime:l,detailedErrors:o,downloadedKiloBytes:h,errorCode:u,errorName:p,errorReason:y,hasFatalError:m,playbackStartTimestamp:b,segments:S,srcString:f,loadStartTime:g,numberOfStalls:P,numberOfSeeks:v}=this.playbackPerformance,D=this.videoPlayerRef&&this.videoPlayerRef.video,E=e===c.DR,k=E&&!this.hasVideoSessionStarted,T=!E&&!this.hasVideoSessionEnded&&this.hasVideoSessionStarted;if(this.hls&&D&&(k||T)){var L;let k=-1;l&&g&&(k=l>g?l-g:0);let T=-1;l&&this.videoVisibleTime&&(T=l>this.videoVisibleTime?l-this.videoVisibleTime:0);const R={autoplaying:i,averageVideoKbps:-1,detailedErrors:o,downloadedKiloBytes:h,isCellular:!1,errorCode:u,errorName:p,errorReason:y,fatalError:m,nativeVideoDurationMs:D.duration*c.gJ||-1,numberOfStalls:P,numberOfSeeks:v,overallWatchedDurationMs:-1,rebufferRate:-1,playbackSessionId:this.videoSessionId,playbackStartTimestamp:b||-1,segments:[],sessionMark:e,screenPixelScale:null!==(L=window)&&void 0!==L&&L.devicePixelRatio?window.devicePixelRatio:-1,startupPlayerWidth:D.clientWidth,startupPlayerHeight:D.clientHeight,startupTimeMs:k,startupLatencyMs:T,startupVariantKbps:-1,startupVariantWatchedDurationMs:-1,startupVariantWidth:D.videoWidth,startupVariantHeight:D.videoHeight,videoUrl:f};if(E)this.videoSessionId=(0,c.Y7)(s),this.playerId=this.playerId||(0,c.EB)();else if(S.length>0){const e=this.hls.levels,t=S[0];this.updateWatchDurationForCurrentSegment(),this.updateStallDuration();const a=S.reduce(((t,a)=>{if(a&&"number"==typeof a.level&&e&&e.length>0){return t+(e[a.level]||{}).bitrate*(a.watchedDurationMs||0)/c.gJ}return t}),0),s=S.reduce(((e,t)=>e+(t.watchedDurationMs||0)),0);let i=null,r=0,l=0;do{r+=S[l].watchedDurationMs,i=i||S[l].level,l+=1}while(l<S.length&&S[l].level===i);R.startupVariantKbps=t.indicatedKbps,R.startupVariantWatchedDurationMs=r,R.startupVariantWidth=t.sourceWidth,R.startupVariantHeight=t.sourceHeight,R.startupPlayerWidth=t.viewportWidth,R.startupPlayerHeight=t.viewportHeight,R.overallWatchedDurationMs=s,s>0?(R.averageVideoKbps=a/(s/c.gJ),R.rebufferRate=this.playbackPerformance.totalStallDurationMs/s):0===s&&(R.averageVideoKbps=0,R.rebufferRate=0),R.segments=S}(0,d.ZP)(R,!0,r,{playbackState:this.state.playbackState,...t}),(0,n.j)(3606,{...a,is_closeup_video:r,playback_session_id:this.videoSessionId,eventData:{videoPerformanceData:R}}),E?(this.hasVideoSessionStarted=!0,this.hasVideoSessionEnded=!1):this.resetPlaybackMetrics(),(0,d.tE)(E?"sessionStart":"sessionEnd",!0,r,{playbackState:this.state.playbackState,...t})}}))}componentDidMount(){const{contextLogData:e={},playing:t}=this.props,{is_closeup_video:a=!1}=e;this.playbackPerformance.videoCreatedTime=new Date,this.initializeHls(),(0,d.tE)("videoMounted",!0,a),t&&(this.videoVisibleTime=new Date,this.logPlaybackPerformance(c.DR,{initiator:"mount"}))}componentDidUpdate(e){const{loop:t,playing:a,src:s,visible:i}=this.props;var r,l;(typeof(r=e.src)!=typeof(l=s)||(Array.isArray(l)?r.length!==l.length||l.some(((e,t)=>!Array.isArray(r)||e.type!==r[t].type||e.src!==r[t].src)):l!==r))&&this.initializeHls(),e.visible&&!1===i&&(this.logSessionStartOnNextPlay=!1,this.logPlaybackPerformance(c.$f,{initiator:"update",loop:t})),!1===e.visible&&!0===i&&(this.videoVisibleTime=this.videoVisibleTime||new Date,a?(this.setPlaybackStartTime(),this.setLastSegmentStartPlayTime(),this.setLastSegmentPlaybackStartDate(),this.logPlaybackPerformance(c.DR,{initiator:"update"})):this.logSessionStartOnNextPlay=!0),a&&this.logSessionStartOnNextPlay&&(this.setPlaybackStartTime(),this.setLastSegmentStartPlayTime(),this.setLastSegmentPlaybackStartDate(),this.logPlaybackPerformance(c.DR,{initiator:"update"}),this.logSessionStartOnNextPlay=!1)}componentWillUnmount(){const{loop:e}=this.props;this.logPlaybackPerformance(c.$f,{initiator:"unmount",loop:e}),this.destroyHls()}render(){const{accessibilityMaximizeLabel:e,accessibilityMinimizeLabel:t,accessibilityMuteLabel:a,accessibilityPauseLabel:s,accessibilityPlayLabel:i,accessibilityUnmuteLabel:r,aspectRatio:l,captions:n,controls:o,loop:d,loopOverride:c,onDurationChange:p,onFullscreenChange:y,onLoadedChange:m,onPause:b,onPlay:S,onPlayheadDown:f,onPlayheadUp:g,onSeek:P,onVolumeChange:v,playbackRate:D,playing:E,playsInline:k,poster:T,preload:L,src:R,volume:w}=this.props,{canPlayVideo:A,isManifestParsed:C}=this.state;return(0,u.jsx)(h.nk,{accessibilityMaximizeLabel:e,accessibilityMinimizeLabel:t,accessibilityMuteLabel:a,accessibilityPauseLabel:s,accessibilityPlayLabel:i,accessibilityUnmuteLabel:r,aspectRatio:l,captions:n,controls:o,loop:void 0===c?d:c,onDurationChange:p,onEnded:this.handleEnded,onFullscreenChange:y,onLoadStart:this.handleLoadStart,onLoadedChange:m,onPause:b,onPlay:S,onPlaying:this.handlePlaying,onPlayheadDown:f,onPlayheadUp:g,onReady:this.handleCanPlayVideo,onSeek:P,onSeeking:this.handleSeeking,onStalled:this.handleStalled,onTimeChange:this.handleTimeUpdate,onVolumeChange:v,onWaiting:this.handleStalled,playbackRate:D,playing:C&&A&&E,playsInline:k,poster:T,preload:L,ref:this.setVideoPlayerRef,src:R,volume:w})}}const m=(0,s.memo)((function(e){const{country:t,isAuthenticated:a,isBot:s,isSocialBot:i,unauthId:r,userAgent:n}=(0,o.B)(),{browserName:h,browserVersion:c,isMobile:p}=n,{contextLogData:m={}}=e,{is_closeup_video:b=!1,view:S,viewParameter:f}=m,g=(0,l.ZP)(),P={browserName:h,browserVersion:c,country:t,isAuthenticated:a,isBot:s,is_closeup_video:b,isMobile:p,isSocialBot:i,view:S,viewParameter:f};return(0,d.r$)(P),(0,u.jsx)(y,{...e,userId:g.id||r})}))},80078:(e,t,a)=>{a.d(t,{VS:()=>s,HJ:()=>i,iM:()=>r});const s=2,i="V_HLSV3_MOBILE",r=[0,.01,.02,.03,.04,.05,.06,.07,.08,.09,.1,.11,.12,.13,.14,.15,.16,.17,.18,.19,.2,.21,.22,.23,.24,.25,.26,.27,.28,.29,.3,.31,.32,.33,.34,.35,.36,.37,.38,.39,.4,.41,.42,.43,.44,.45,.46,.47,.48,.49,.5,.51,.52,.53,.54,.55,.56,.57,.58,.59,.6,.61,.62,.63,.64,.65,.66,.67,.68,.69,.7,.71,.72,.73,.74,.75,.76,.77,.78,.79,.8,.81,.82,.83,.84,.85,.86,.87,.88,.89,.9,.91,.92,.93,.94,.95,.96,.97,.98,.99,1]},872324:(e,t,a)=>{a.d(t,{ZP:()=>d,r$:()=>o,tE:()=>h});var s=a(731164),i=a(208757);const r=["isCellular","videoUrl","sessionMark"];let l={},n="";const o=e=>{const{browserName:t,browserVersion:a,country:s,isAuthenticated:i,isBot:r,isMobile:o,isSocialBot:h,view:d="unknown",viewParameter:c="unknown"}=e;n=(h?"socialBot":r&&"bot")||"nonbot";const u=(e=>{switch(e){case"BR":case"MX":case"AR":case"CL":case"CO":return"LatAm";case"US":return"US";default:return"OTHER"}})(s);l={browserName:t,browserVersion:(null==a?void 0:a.split(".")[0])||"0",isAuthenticated:i,isMobile:o,region:u,view:d,viewParameter:c}};function h(e,t,a,i={}){const r=a?"closeup":"nonCloseup",o=t?"hls":"nonHls",h={...i,...l},d=`web.video.${o}.${n}.${r}.${e}`;s.Z.increment(d,1,h)}function d(e,t,a,o={}){const h=a?"closeup":"nonCloseup",d=t?"hls":"nonHls",c=e.sessionMark===i.DR?"sessionStart":"sessionEnd",u={...o,...l};if(Object.entries(e).forEach((([t,a])=>{const i=`web.video.${d}.${n}.${h}.${c}.${t}`,l=parseInt(a,10),o="number"==typeof l?l:-1;var p;if(!r.includes(t))if(t.includes("fatalError")&&!0===a){const{errorCode:t,errorName:a,errorReason:r}=e;s.Z.increment(i,1,{errorCode:t,errorName:a,errorReason:r,...u})}else if(t.includes("Width")||t.includes("Height")){const e=(p=o)<0?"negative":0===p?"zero":p<200?"xs":p<400?"s":p<600?"m":p<800?"l":p<1e3?"xl":p<1200?"xxl":"over1200";s.Z.increment(i,1,{dimensionBucket:e,...u})}else if("numberOfStalls"===t){let e=a;o>1e3?e="over1000":o>10?e="over10":o<0&&(e="negative"),s.Z.increment(i,1,{numberOfStalls:e,...u})}else"screenPixelScale"===t?s.Z.increment(i,1,{screenPixelScale:a||-1,...u}):o>=0?(0===o&&s.Z.increment(`${i}.zero`,1,u),s.Z.timing(i,o,1),s.Z.timing(`${i}_with_tags`,o,1,u)):o<0&&s.Z.increment(`${i}.negative`,1,u)})),e.sessionMark!==i.DR){const{rebufferRate:t,screenPixelScale:a,startupLatencyMs:i,startupVariantWidth:r,startupPlayerWidth:l}=e,o=`web.video.${d}.${n}.${h}.${c}`;if("number"==typeof r&&"number"==typeof l&&"number"==typeof a){const e=1.5*r>a*l;s.Z.increment(`${o}.upscaled.${e?"good":"bad"}`,1,u)}"number"==typeof i&&s.Z.increment(`${o}.startupLatency.${i<500?"good":"bad"}`,1,u),"number"==typeof t&&s.Z.increment(`${o}.rebufferRate.${t<.01?"good":"bad"}`,1,u)}}},208757:(e,t,a)=>{a.d(t,{DR:()=>i,$f:()=>r,gJ:()=>l,bR:()=>n,Fm:()=>o,Cy:()=>h,lG:()=>d,Y7:()=>c,EB:()=>u});var s=a(172045);const i=1,r=2,l=1e3,n=1e3,o=1e3,h=Object.freeze({DEFAULT:0,LOAD_START:1,LOADED_METADATA:2,LOADED_DATA:3,PLAYING:4,PAUSED:5,SEEKING:6,STALLING:7,FAILED:8,ENDED:9}),d=Object.freeze({MEDIA_ERR_ABORTED:1,MEDIA_ERR_NETWORK:2,MEDIA_ERR_DECODE:3,MEDIA_ERR_SRC_NOT_SUPPORTED:4});function c(e){return e+"-"+(0,s.Z)()}function u(){return(0,s.Z)()}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/37617-1c0a2869b1b6ea1a.mjs.map