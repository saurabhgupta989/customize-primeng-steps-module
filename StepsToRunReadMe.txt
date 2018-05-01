Step1-
Your running angular project

Step2- [step required if not installed for your project]
npm install primeng --save 

Step3- [step required if not installed for your project]
npm install font-awesome --save

Step 4-[step required if not added for your project]
update below file to use to use prime ng css.
Note- If you are using bootstrap that also can be added below these 3 css.
path- project-name\.angular-cli.json

"styles": [
        "../node_modules/font-awesome/css/font-awesome.min.css",
        "../node_modules/primeng/resources/themes/omega/theme.css",
        "../node_modules/primeng/resources/primeng.min.css",
        "styles.css"
      ],
	  

Step5- 
copy steps folder from cloned project and paste it into your project inside project-name\node-modules\primeng\components\ (allow overriding files)
Note-steps folder is inside cloned project

Step6-
run project
command - ng serve

