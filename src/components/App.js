import React, { useState, useEffect } from 'react';
import { ProSidebar, SidebarHeader, SidebarContent } from 'react-pro-sidebar';
import { Button, ListGroup } from "react-bootstrap"

import 'react-pro-sidebar/dist/css/styles.css';
import Editor from './Editor'
import useLocalStorage from '../hooks/useLocalStorage'
function App() {
  const [html, setHtml] = useLocalStorage('html', '')
  const [css, setCss] = useLocalStorage('css', '')
  const [js, setJs] = useLocalStorage('js', '')
  const [srcDoc, setSrcDoc] = useState('')
  const [openhtml, setopenhtml] = useState(false)
  const [opencss, setopencss] = useState(false)
  const [openjs, setopenjs] = useState(false)
  function showhtml() {
    setopenhtml(true)
    setopencss(false)
    setopenjs(false)
  }
  function showcss() {
    setopenhtml(false)
    setopencss(true)
    setopenjs(false)
  }
  function showjs() {
    setopenhtml(false)
    setopencss(false)
    setopenjs(true)
  }
  function alertClicked() {
    alert('You clicked the third ListGroupItem');
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
        <html>
          <body>${html}</body>
          <style>${css}</style>
          <script>${js}</script>
        </html>
      `)
    }, 250)

    return () => clearTimeout(timeout)
  }, [html, css, js])
  return (
    <>
      <div>

        <div className="pane top-pane">
          <ProSidebar>
            <SidebarHeader>
              <h4>Choose the file</h4><br></br>
            </SidebarHeader>
            <SidebarContent>
              <ListGroup>
                <ListGroup.Item action onClick={showhtml}>index.html</ListGroup.Item>
                <ListGroup.Item action onClick={showcss}>index.css</ListGroup.Item>
                <ListGroup.Item action onClick={showjs}>index.js</ListGroup.Item>
              </ListGroup>
            </SidebarContent>
          </ProSidebar>
          {openhtml != false && (
            <Editor
              language="xml"
              displayName="HTML"
              value={html}
              onChange={setHtml}
            />
          )}
          {opencss != false && (
            <Editor
            language="css"
            displayName="CSS"
            value={css}
            onChange={setCss}
          />
          )}
          {openjs != false && (
           <Editor
           language="javascript"
           displayName="JS"
           value={js}
           onChange={setJs}
         />
          )}
        </div>
        <div className="pane">
          <iframe
            srcDoc={srcDoc}
            title="output"
            sandbox="allow-scripts"
            frameBorder="0"
            width="100%"
            height="100%"
          />
        </div>
      </div>
    </>
  )
}
export default App;