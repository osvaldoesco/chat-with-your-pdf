import { Viewer, SpecialZoomLevel } from '@react-pdf-viewer/core'
import { toolbarPlugin } from '@react-pdf-viewer/toolbar';
import '@react-pdf-viewer/toolbar/lib/styles/index.css';

const PdfViewer = () => {
  const toolbarPluginInstance = toolbarPlugin();
  const { Toolbar } = toolbarPluginInstance
  return (
    <div>
      <Toolbar />
      <Viewer
        fileUrl={'/src/assets/hiscox_gl.pdf'}
        defaultScale={SpecialZoomLevel.PageFit}
        plugins={[toolbarPluginInstance]}
      />
    </div>
  )
}

export default PdfViewer;