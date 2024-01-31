import { useEffect } from 'react';

import { Viewer } from '@react-pdf-viewer/core'
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import { pageNavigationPlugin } from '@react-pdf-viewer/page-navigation';

import '@react-pdf-viewer/page-navigation/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import { usePage } from '../contexts/PageContext';
import { PDF_URL } from '../constants';

const PdfViewer = () => {
  const pageNavigationPluginInstance = pageNavigationPlugin();
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  const { jumpToPage } = pageNavigationPluginInstance

  const { currentPage } = usePage()

  useEffect(()=>{
    if (currentPage){
      jumpToPage(currentPage)
    }
  },[currentPage])

  return (
    <div className='h-screen'>
      <Viewer
        fileUrl={PDF_URL}
        plugins={[defaultLayoutPluginInstance, pageNavigationPluginInstance]}
      />
    </div>
  )
}

export default PdfViewer;