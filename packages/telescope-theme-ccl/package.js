Package.describe({ 
  summary: "Telescope CCL Theme Package",
  version: '0.0.1',
  name: "telescope-theme-ccl"
});

Package.on_use(function (api) {

  api.use([
    'telescope-base',
    'templating',
    'telescope-theme-weld'
  ], ['server', 'client']);

  api.addFiles([
    'lib/client/templates/custom_css_ccl.html',
    'lib/client/templates/member_menu_ccl.html',
    'lib/client/templates/logo_ccl.html',
    'lib/client/js/ccl_templates.js'    
  ], ['client']);

  api.export([
    'primaryNav'
  ]);
});
