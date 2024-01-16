import React from 'react';
import css from '../icons/CSS.svg';
import git from '../icons/Git.svg';
import html from '../icons/HTML.svg'
import javaScript from '../icons/JavaScript.svg'
import node from '../icons/Node.svg';
import reactNative from '../icons/React.svg';
import tailwindCss from '../icons/Tailwind.svg';
import vscode from '../icons/VSCode.svg'

const Skills = () => {
  return (
    <section className="bg-primary px-5 py-32" id="skills">
        <div className='container mx-auto'>
                <div className="mb-5">
                    <h2 className="text-4xl font-bold mb-10 border-b-[5px] w-[180px] border-[#c6bcce] pb-2">
                        Skills
                    </h2>

                    <div className="grid grid-cols-2 md:grid-cols-4 justify-items-center items-center gap-3 md:py-10">
                    <div className='text-center'>
                        <img
                        src={ css }
                        alt='CSS-icon'
                        width={100}
                        height={100}/>
                        <p className='py-5'>CSS</p>
                    </div>
                    <div className='text-center'>
                        <img
                        src={ html }
                        alt='html-icon'
                        width={100}
                        height={100}/>
                        <p className='py-5'>HTML</p>
                    </div>
                    <div className='text-center'>
                        <img
                        src={ reactNative }
                        alt='react-icon'
                        width={100}
                        height={100}/>
                        <p className='py-5'>React</p>
                    </div>
                    <div className='text-center'>
                        <img
                        src={ javaScript }
                        alt='javascript-icon'
                        width={100}
                        height={100}/>
                        <p className='py-5'>JavaScript</p>
                    </div>
                    <div className='text-center'>
                        <img
                        src={ git }
                        alt='git-icon'
                        width={100}
                        height={100}/>
                        <p className='py-5'>Git</p>
                    </div>
                    <div className='text-center'>
                        <img
                        src={ vscode }
                        alt='vscode-icon'
                        width={100}
                        height={100}/>
                        <p className='py-5'>VS Code</p>
                    </div>
                    <div className='text-center'>
                        <img
                        src={ tailwindCss }
                        alt='tailwind-icon'
                        width={100}
                        height={100}/>
                        <p className='py-5'>Tailwind CSS</p>
                    </div>
                    <div className='text-center'>
                        <img
                        src={ node }
                        alt='node-icon'
                        width={100}
                        height={100}/>
                        <p className='py-5'>Node</p>
                    </div>
                    </div>
                </div>
            </div>
    </section>
  )
}

export default Skills