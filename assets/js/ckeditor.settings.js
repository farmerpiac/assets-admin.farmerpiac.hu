function MinHeightPlugin(e){this.editor=e}MinHeightPlugin.prototype.init=function(){this.editor.ui.view.editable.extendTemplate({attributes:{style:{overflow:"auto"}}})},DecoupledEditor.builtinPlugins.push(MinHeightPlugin),DecoupledEditor.create(document.querySelector("#editor"),{ckfinder:{uploadUrl:"https://"+window.location.hostname+"/vezerlopult/hirlevel/hirlevel-kepfeltoltes",withCredentials:!0,options:{resourceType:"Images"}}}).then((e=>{document.querySelector("#toolbar-container").appendChild(e.ui.view.toolbar.element)})).catch((e=>{console.error(e)}));
