import React from 'react'
import { Card, Upload } from 'antd'
import uploadCVIcon from '../../../assets/images/upload-cv-icon.svg'

function EmployeeCV() {
  const { Dragger } = Upload;

  return (
    <Card className='custom-card mt-4'>
      <h6 className='small-h6 uppercase'>My CV</h6>
      <Dragger
        name="file"
        className="cv-uploader "
        action="#"
        /* beforeUpload={beforeUpload}
        onChange={handleChange}
        onRemove={() => setImageUrl([])}
        maxCount={1}
        showUploadList={uploadedList} */
      >
        <div className="upload-cv-content">
          <img src={uploadCVIcon} alt="" />
          <p>Upload or Drop your CV here</p>
          <span className='allowed-files'>Upload only .pdf &amp; .Doc</span>
        </div>
        {/* <p className="text-muted">
          .xlsx file only <span style={{ color: '#1277CF' }}>Browse</span>
        </p> */}
      </Dragger>
    </Card>
  )
}

export default EmployeeCV