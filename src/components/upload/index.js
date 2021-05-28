import React, { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { useDream } from "../../hooks/dream";
import { DropContainer, UploadMessage, ImageContainer } from "./style";

const Dropzone = (props) => {
  const { setCreateData } = useDream();
  const [files, setFiles] = useState([]);
  const [showDropzone, setShowDropzone] = useState(true);

  useEffect(() => () => {
    // Make sure to revoke the data uris to avoid memory leaks
    files.forEach(file => URL.revokeObjectURL(file.preview));
  }, [files]);


  const { getRootProps, getInputProps, isDragActive, isDragReject } =
    useDropzone({
      accept: "image/*",
      onDrop: (acceptedFiles) => {
        setFiles(
          acceptedFiles.map((file) => {
            const preview = URL.createObjectURL(file);
            console.log(file);
            setCreateData("picture", file);
            file = {
              ...file,
              preview,
            };
            return file;
          })
        );
        setShowDropzone(false);
      },
    });

  const renderDragMessage = (isDragActive, isDragReject) => {
    if (!isDragActive) {
      return (
        <UploadMessage>
          Arraste arquivos para cá ou clique duas vezes...
        </UploadMessage>
      );
    }
    if (isDragReject) {
      return <UploadMessage type="error">Arquivo não suportado</UploadMessage>;
    }

    return <UploadMessage type="success">Solte o arquivo aqui</UploadMessage>;
  };

  const thumbs = files.map((file) => (
    <div key={file.name}>
      <div>
        <img src={file.preview} alt={"imagem do sonho"} />
      </div>
    </div>
  ));
  return (
    <DropContainer
      className="container"
      isDragActive={isDragActive}
      isDragReject={isDragReject}
    >
      {showDropzone && (
        <div {...getRootProps({ className: "dropzone" })}>
          <input {...getInputProps()} />
          {renderDragMessage(isDragActive, isDragReject)}
        </div>
      )}
      <ImageContainer>{thumbs}</ImageContainer>
    </DropContainer>
  );
};

<Dropzone />;

export default Dropzone;
