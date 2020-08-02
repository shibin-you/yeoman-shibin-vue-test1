const Generator = require('yeoman-generator')
module.exports = class extends Generator {
    prompting() {
        return this.prompt([{
            type: 'input',
            name: 'name',
            message: 'Your project name',
            default: this.appname
        }]).then(res => {
            this.answers = res
        })
    }
    writing() {
        const templates = [
            '.gitignore',
            'babel.config.js',
            'package-lock.json',
            'package.json',
            'public/favicon.ico',
            'public/index.html',
            'README.md',
            'src/App.vue',
            'src/assets/logo.png',
            'src/components/Button.vue',
            'src/components/HelloWorld.vue',
            'src/main.ts',
            'src/shims-tsx.d.ts',
            'src/shims-vue.d.ts',
            'tsconfig.json'
        ]
        templates.forEach(item => {
            this.fs.copyTpl(this.templatePath(item), this.destinationPath(item),this.answers)

        })

    }
}
// var fs = require('fs');
// var {join,resolve} = require('path');

// function getJsonFiles(jsonPath){
//     let jsonFiles = [];
//     function findJsonFile(path){
//         let files = fs.readdirSync(path);
//         files.forEach(function (item, index) {
//             let fPath = join(path,item);
//             let stat = fs.statSync(fPath);
//             if(stat.isDirectory() === true) {
//                 findJsonFile(fPath);
//             }
//             if (stat.isFile() === true) { 
//                 fPath=fPath.replace(/\\/g,'/').substr(10)

//               jsonFiles.push(fPath);
//             }
//         });
//     }
//     findJsonFile(jsonPath);
//     console.log(jsonFiles);
// }

// getJsonFiles("templates");