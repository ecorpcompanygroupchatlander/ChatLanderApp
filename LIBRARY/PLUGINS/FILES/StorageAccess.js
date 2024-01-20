const FILESTORAGE = async (ELEMENT,NAME) => {

  // Display elements in the specified container
    
  const container = ELEMENT;
   
  // Handle different file types

  function handleFile(fileHandle) {
      
    return new Promise(async (resolve) => {

      const file = await fileHandle.getFile();
      
      const url = URL.createObjectURL(file);
    
      const extension = file.name.split('.').pop().toLowerCase();

        let element;
        
        ELEMENT.innerHTML='';
  
        switch (extension) {

          case 'jpg':

          case 'jpeg':

          case 'png':

            element = document.createElement('img');

            element.classList.add(NAME);

            element.src = url;

            break;

          case 'mp3':

          case 'wav':

            element = document.createElement('audio');

            element.classList.add(NAME);

            element.controls = true;

            element.src = url;

            break;

          case 'mp4':

          case 'webm':

            element = document.createElement('video');

            element.classList.add(NAME);

            element.controls = true;

            element.src = url;

            break;

          case 'pdf':

            element = document.createElement('iframe');

            element.classList.add(NAME);

            element.src = url;

            break;

          case 'exe':

            // Handle .exe files (display a message, as direct display is not supported)
            
            element = document.createElement('p');

            element.classList.add(NAME);
            
            element.textContent = '.exe files are not directly supported for display.';
            
            break;
          
          case 'rar':
            
            // Handle RAR files (display a message, as direct display may not be supported)
          
            element = document.createElement('p');

            element.classList.add(NAME);
            
            element.textContent = 'RAR files are compressed archives and may not be directly supported for display.';
            
            break;
          
          case 'txt':

            // Handle text files (display content)
            element = document.createElement('pre');

            element.classList.add(NAME);

            fetch(url)

            .then(response => response.text())

            .then(text => {

              element.textContent = text;

            })

            .catch(error => console.error('Error loading text file:', error));
            
            break;

          case 'js':

            // Handle JavaScript files (execute the script)
            element = document.createElement('script');

            element.src = url;

            document.head.appendChild(element);

            break;

          case 'css':

            // Handle CSS files (link to the stylesheet)
            element = document.createElement('link');

            element.rel = 'stylesheet';

            element.type = 'text/css';

            element.href = url;

            document.head.appendChild(element);

            break;

          case 'html':

          case 'htm':

          case 'index':

            // Handle HTML files (display content)
            element = document.createElement('iframe');

            element.src = url;

            break;

          default:

            element = document.createElement('p');

            element.textContent = `Unsupported file type: ${file.name}`;

            break;

        }
  
        element.addEventListener('click', () => {

          if (element.tagName === 'AUDIO' || element.tagName === 'VIDEO') {

            element.play().catch(error => console.error('Error playing media:', error));
          
          }

        });
  
        container.appendChild(element);

        resolve();

      });

    }
  
    // Request file system access
  try {

    const fileHandles = await window.showOpenFilePicker({ multiple: true });
  
      // Process each file
      for (const fileHandle of fileHandles) {

      await handleFile(fileHandle);

    }

  } catch (error) {

    console.error('Error accessing the file system:', error);

  }

};
  
export { FILESTORAGE };
  