using Orchard.Environment;
using React;

namespace CodesanookTheme {
    public class ShellEvent : IOrchardShellEvents {
        public void Activated() {
            ReactSiteConfiguration.Configuration
                .SetLoadBabel(false)
                .AddScriptWithoutTransform("~/Themes/CodesanookTheme/scripts/codesanook-theme.js");
        }

        public void Terminating() {
        }
    }
}