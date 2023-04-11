import { NextPage } from 'next';
import Head from 'next/head';
import { useRef, useState } from 'react';
import Layout from '../../components/layouts/Layout';

const File: NextPage = () => {

  const [file, setFile] = useState<File | null>()
  const [fileHover, setFileHover] = useState(false)
  const fileInput = useRef<HTMLInputElement>(null)

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    setFile(e.target.files?.item(0))
  }

  function handleDragEnter(e: React.DragEvent<HTMLDivElement>) {
    console.log('Enter', e);
    setFileHover(true)
  }

  function handleDragOver(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault()
  }

  function handleDragExit(e: React.DragEvent<HTMLDivElement>) {
    console.log('Exit', e);
    setFileHover(false)
  }

  function handleDrop(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault()
    e.stopPropagation()
    console.log('Drop')
    const { files } = e.dataTransfer
    if (1 < files.length) {
      alert('Please upload only 1 file!')
    }
    setFile(files[0])
    setFileHover(false)
  }

  return (
    <Layout>
      <Head>
        <title>Text Input | UI Components</title>
      </Head>
      <section className='px-16 py-6 bg-slate-50 text-slate-900 min-h-[82vh]'>
        <h2 className='mb-4 text-3xl'>Text Input</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum similique error numquam ut tempore dolores provident earum eveniet alias, totam atque pariatur assumenda, neque illum velit quos est suscipit nisi.</p>
        <div className='mx-auto my-4 px-6 py-3 max-w-lg bg-slate-300 rounded shadow-lg'>
          <h3 className='text-2xl'>Upload File</h3>
          <form>
            <div className='my-2'>
              <label htmlFor='file' className='block py-2 font-semibold'>Choose a file</label>
              <input ref={fileInput} type='file' onChange={e => handleFileChange(e)} className='hidden' />
              <button className='btn' type='button' onClick={() => fileInput.current?.click()}>Upload File</button>
              <button className='ml-2 btn' type='button' onClick={() => setFile(null)} disabled={!file}>Remove</button>
              {file && (
                <div>
                  <p className='pt-2 truncate'>File name : {file.name}</p>
                  <p className='pt-2 truncate'>File type : {file.type}</p>
                  <p className='pt-2 truncate'>File size : {file.size} bytes</p>
                </div>
              )}
              <div onDragEnter={handleDragEnter} onDragExit={handleDragExit} onDrop={handleDrop} onDragOver={handleDragOver} className={`my-2 p-2 h-40 flex justify-center items-center bg-slate-50 border-2 border-slate-900 ${fileHover ? 'border-solid' : 'border-dashed'} rounded`}>
                {fileHover ? <p>Drop to upload</p> : <p>Drop a file here</p>}
              </div>
            </div>
          </form>
        </div>
      </section>
    </Layout>
  )
}

export default File
