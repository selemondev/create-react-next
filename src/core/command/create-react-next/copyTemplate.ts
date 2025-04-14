import { copy as fsCopy, move } from 'fs-extra'
import { resolve } from 'node:path'
import options from '../../../core/utils/react/options'
import { ejsRender } from '../../../utils/ejsRender'
import chalk from "chalk"
import { templateFilesMap } from '../../../core/utils/react/templateFile'
import { getFilterFile } from '../../../filter/filterFiles'
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';
import ora from 'ora'

async function copyTemplate() {
    const __filename = fileURLToPath(import.meta.url);

    const __dirname = dirname(__filename);

    const spinner = ora('Copying template...').start();

    const language = options.useTypeScript ? 'react-ts' : 'react-js';

    options.src = resolve(__dirname, `../template/${language}`);

    const dest = options.name && resolve(process.cwd(), options.name)
    
    options.dest = dest

    const templatePath = resolve(
        __dirname,
        `../../../../template/${language}`
    );
    options.templatePath = templatePath

    const filterFileFn = getFilterFile()

    async function copy() {
        const targetDirectory = resolve(__dirname, '../');
        if(!dest) {
            return;
        };
        await fsCopy(`${targetDirectory}/template/${language}`, dest)
    }
    await copy();

    filterFileFn && await filterFileFn();

    options.dest && await move(
        resolve(options.dest, '.gitignore.ejs'),
        resolve(options.dest, '.gitignore'),
        { overwrite: true }
    );

   await Promise.all(
        templateFilesMap
            .get('react')()
            .map((file: string) => options.name && ejsRender(file, options.name))
    )
    spinner.text = chalk.green('Template successfully copied!');
    
    spinner.succeed()
}
export default copyTemplate
