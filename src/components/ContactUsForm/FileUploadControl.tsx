import React, { SetStateAction } from "react";
import { Box, Button, Flex, Stack, Text, VStack } from "@chakra-ui/react";

interface FileUploadControlProps {
  selectedFiles: File[];
  setSelectedFiles: React.Dispatch<SetStateAction<File[]>>;
}

const MAX_FILE_SIZE_MB = 5; // Maximum file size allowed in MB
const MAX_FILES = 4; // Maximum number of files allowed

const FileUploadControl = ({
  selectedFiles,
  setSelectedFiles,
}: FileUploadControlProps) => {
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files as FileList);

    // Limit number of files uploaded
    if (files.length > MAX_FILES) {
      alert(`Maximum ${MAX_FILES} files allowed`);
      return;
    }

    // Validate file size
    const oversizedFiles = files.filter(
      (file) => file.size > MAX_FILE_SIZE_MB * 1024 * 1024
    );
    if (oversizedFiles.length > 0) {
      alert(`Maximum file size allowed is ${MAX_FILE_SIZE_MB}MB`);
      return;
    }

    setSelectedFiles(files);
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const files = Array.from(event.dataTransfer.files);

    // Limit number of files uploaded
    if (files.length + selectedFiles.length > MAX_FILES) {
      alert(`Maximum ${MAX_FILES} files allowed`);
      return;
    }

    // Validate file size
    const oversizedFiles = files.filter(
      (file) => file.size > MAX_FILE_SIZE_MB * 1024 * 1024
    );
    if (oversizedFiles.length > 0) {
      alert(`Maximum file size allowed is ${MAX_FILE_SIZE_MB}MB`);
      return;
    }

    setSelectedFiles([...selectedFiles, ...files]);
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const removeFile = (index: number) => {
    const updatedFiles = [...selectedFiles];
    updatedFiles.splice(index, 1);
    setSelectedFiles(updatedFiles);
  };

  return (
    <VStack w="100%" spacing={4} align="center">
      <Box
        my="4"
        p={6}
        w="100%"
        borderWidth={2}
        borderStyle="dashed"
        borderRadius="md"
        borderColor="gray.300"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        cursor="pointer"
      >
        <Stack
          direction={["column", "column", "row"]}
          color="grey"
          spacing={["5px", "10px"]}
          justifyContent="center"
        >
          <Text fontSize={["xs", "lg"]} textAlign="center">
            Drag & Drop Your Project files or
          </Text>
          <Text
            fontSize={["xs", "lg"]}
            textDecoration="underline"
            colorScheme="teal"
            as="label"
            htmlFor="projectFiles"
          >
            Browse Files
          </Text>
          <input
            id="projectFiles"
            type="file"
            multiple
            style={{ display: "none" }}
            onChange={handleFileChange}
          />
        </Stack>
      </Box>
      <Flex w="100%" justifyContent="flex-start">
        <Text color="#FF5714">
          Please rename all files to describe what they contain. e.g
          requirements-spec.pdf
        </Text>
      </Flex>
      {selectedFiles.length > 0 && (
        <Box>
          <Text fontSize="lg">Selected Files:</Text>
          <ol>
            {selectedFiles.map((file, index) => (
              <li key={index}>
                {file.name}
                <Button ml={2} size="sm" onClick={() => removeFile(index)}>
                  Remove
                </Button>
              </li>
            ))}
          </ol>
        </Box>
      )}
    </VStack>
  );
};

export default FileUploadControl;
