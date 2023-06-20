import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import Image from "next/image";
import Button from "./ui/Button";
import Input from "./ui/Input";

export const UploadImage = ({
    className,
    setImageURLChild,
    imageURLString,
}: any) => {
    const [files, setFiles] = useState<any>();
    const [imageURL, setImageURL] = useState(imageURLString);

    // receive the accepted files and rejected files
    const onDrop = useCallback((acceptedFiles: any) => {
        console.log(acceptedFiles);
        if (acceptedFiles) {
            const file = acceptedFiles[0]; // Get the first file from the acceptedFiles array
            const fileWithPreview = Object.assign(file, {
                preview: URL.createObjectURL(file),
            });

            setFiles(fileWithPreview);
        }
    }, []);

    const { getRootProps, getInputProps, isDragActive, acceptedFiles } =
        useDropzone({
            onDrop,
            accept: {
                "image/jpeg": [],
                "image/png": [],
            },
        });

    const handleSubmit = async (files: any) => {
        if (!files) {
            throw new Error("Files is empty");
        }

        const formData = new FormData();

        formData.append("file", files);

        formData.append("upload_preset", "menuropang");

        const URL = "https://api.cloudinary.com/v1_1/wpmenuimage/image/upload";

        const data = await fetch(URL, {
            method: "POST",
            body: formData,
        }).then((res) => res.json());

        setImageURLChild(data.secure_url);
        setImageURL(data.secure_url);
    };

    return (
        <form className="flex flex-col mb-6">
            <div
                {...getRootProps({
                    className: className,
                })}
            >
                <label htmlFor="image">Image</label>
                <input id="image" {...getInputProps()} />
                {files ? (
                    <div className="flex justify-center flex-col items-center">
                        <div className="border-2 border-gray-300 border-dashed rounded-lg cursor-pointer w-full h-fit p-10">
                            <Image
                                src={files.preview}
                                alt={files.name}
                                width={200}
                                height={200}
                                onLoad={() => {
                                    URL.revokeObjectURL(files.preview);
                                }}
                                className="w-52 h-52 object-cover"
                            />
                        </div>
                        <p className="my-3 text-xs text-gray-500 dark:text-gray-400 flex justify-center">
                            *Click or Drag n Drop on the same area to upload
                            different picture
                        </p>
                    </div>
                ) : isDragActive ? (
                    <div className="flex flex-col items-center justify-center border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 w-full h-[19rem]">
                        <div>
                            <svg
                                aria-hidden="true"
                                className="w-10 h-10 mb-3 text-gray-400"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                                ></path>
                            </svg>
                        </div>
                        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400 flex justify-center">
                            Drop the files here
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                            SVG, PNG, JPG or GIF (MAX. 800x400px)
                        </p>
                    </div>
                ) : (
                    <div className="flex flex-col items-center justify-center border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 w-full h-[19rem]">
                        <div>
                            <svg
                                aria-hidden="true"
                                className="w-full h-10 mb-3 text-gray-400"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                                ></path>
                            </svg>
                        </div>
                        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400 flex justify-center">
                            <span className="font-semibold">
                                Click to upload
                            </span>{" "}
                            or drag n drop
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                            SVG, PNG, JPG or GIF (MAX. 800x400px)
                        </p>
                    </div>
                )}
            </div>
            <input id="dropzone-file" type="file" className="hidden" />

            <div className="flex gap-2 items-center mt-2">
                <Button
                    type="submit"
                    className="max-w-xs content-center w-[19rem]"
                    onClick={(e) => {
                        e.preventDefault();
                        handleSubmit(files);
                    }}
                >
                    Upload Picture
                </Button>
                <Input className="w-full" readOnly value={imageURL} />
            </div>
        </form>
    );
};

export default UploadImage;
