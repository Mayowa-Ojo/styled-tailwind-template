# Styled-tailwind-template

> This is a starter template (react) for anyone who's a fan of both tailwindcss and styled-components and wants the best of both worlds.

#### Motivation
Tailwind is awesome, it lets you move fast with development with its simple utility classes and intuitive api. However;
   - There are times when you need to write your own css and this means going back and forth between your css files and your jsx.
   - Classnames tend to get pretty long when you start taking into account responsive states, hover, focus etc.

This is not that much big of a deal tbh, but combining these two libraries will give you more flexibility than you can imagine. It feels like a match made in heaven (at least that's my impression :trollface:).

#### Usage
```shell
$ mkdir <your-project-name>
$ git clone https://github.com/Mayowa-Ojo/styled-tailwind-template.git .
$ npm install
$ npm start
```

#### How it works
twin.macro uses babel to convert your classes into css objects and compiles. You can use sass styles, tailwind classes in your styled components, write inline css/tailwind in your jsx. The possibilities are endless.

To learn more, visit:

[twin.macro](https://github.com/ben-rogerson/twin.macro)

[tailwindcss](https://tailwindcss.com/docs/installation)

[styled-components](https://styled-components.com/docs)

> **Bonus**: I've set up a simple global state management using the flux pattern with react context and hooks.