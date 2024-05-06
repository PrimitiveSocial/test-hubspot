# Primitive's Hubspot Starter Theme ✨

<h1>Set up 🔨</h1>
<ol>
    <li>
        <h3>Install Hubspot CLI 🔧</h3>
        If you don't have the hubspot cli installed yet <br>
        <code>npm install -g @hubspot/cli</code>
    </li>
    <li style="margin-top: 20px">
        <h3>Initialize Hubspot theme with Hubspot Account 📦️</h3>
        Run this command and follow the prompts <br>
        <code>hs init</code>
    </li>
    <li style="margin-top: 20px">
        <h3>Initial Upload Command 🚚</h3>
        Upload the website theme to hubspot <br>
        <code>hs upload website-theme website-theme</code> <br>
        This will upload the theme to the hubspot portal you are currently logged into under the name
        "website-theme". You will be able to see the theme in the design tools in hubspot.
    </li>
    <li style="margin-top: 20px">
        <h3>Watch Command 🧐</h3>
        After the initial upload you can run this command to upload dynamically as you make changes <br>
        <code>hs watch  website-theme website-theme</code>
    </li>
    <li style="margin-top: 20px">
        <h3>TailwindCSS Watcher 🎨</h3>
        In another terminal run this command  <br>
        <code>npx tailwindcss -i ./website-theme/css/main.css -o ./website-theme/css/output.css --watch</code>
    </li>
</ol>

<h2>Hubspot Dev Tips 📝</h2>

<ul>
    <li>
        <h3>Module Creation 🗃️</h3>
        The easiest way to create a new module is to create one through the design tools in hubspot <br>
        Once you have created the module and its fields you can then run this command below <br>
        <code>hs fetch website-theme website-theme </code> <br>
    </li>
    <li>
        <h3>CSS Development 🎨</h3>
        Anything added to main.css will be auto compiled with the
        TailwindCSS Watcher command and outputted to output.css.
        output.css is pulled in through the <code>base.html</code> layout
        Any specific css for a module should be placed in the module css file.
    </li>
    <li>
        <h3>JS Development ⚡️</h3>
        In order to keep the JS files short and to the point for easy readability,
        create any JS code in the module js files. Global JS code can be placed in 
        <code>main.js</code>. Any other code should be made into its own file and or directory
        to avoid spaghetti code.
    </li>
    <li>
        <h3>Partial Includes 📄</h3>
        <code>{% include /website-theme/templates/partials/component-here.html %}</code>
    </li>
</ul>

    