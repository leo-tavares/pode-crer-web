import React from 'react';
import {useDropzone} from 'react-dropzone';
import { DropContainer, UploadMessage} from './style';

const Dropzone = (props) => {
    
      const {acceptedFiles, getRootProps, getInputProps, isDragActive, isDragReject} = useDropzone();
      
      const renderDragMessage = (isDragActive, isDragReject) => {
          if(!isDragActive) {
              return <UploadMessage>Arraste arquivos para cá ou clique duas vezes...</UploadMessage>
          }
          if(isDragReject) {
              return <UploadMessage type="error">Arquivo não suportado</UploadMessage>
          }

          return <UploadMessage type="success">Solte o arquivo aqui</UploadMessage>
      }

      const files = acceptedFiles.map(file => (
        <li key={file.path}>
          {file.path} - {file.size} bytes
        </li>
      ));
    
      return (
        <DropContainer className="container" isDragActive={isDragActive} isDragReject={isDragReject}>
          <div {...getRootProps({className: 'dropzone'})} >
            <input {...getInputProps()} />
            {renderDragMessage(isDragActive, isDragReject)}
          </div>
          <aside>
            <h4>Imagens:</h4>
            <ul>{files} <button onClick={()=>{}}>Remover</button></ul>
          </aside>
        </DropContainer>
      );
    }
    
<Dropzone />

export default Dropzone;