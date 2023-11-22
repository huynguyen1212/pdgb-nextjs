import React, { useEffect, useRef, useState } from "react";
import {
  Button,
  Form,
  Input,
  message,
  Modal,
  Select,
} from "antd";
import { Container } from "styled-bootstrap-grid";
import { SFormRequestCreateClub } from "./style";
import { request } from "src/api/axios";
import API_URL from "src/api/url";
import { useMutation, useQuery } from "react-query";

type FieldType = {
  name?: string;
  type?: string[];
  avatar?: string;
};

export default function FormRequestCreateClub() {
  useQuery({
    queryKey: ["getNewsNear"],
    queryFn: () =>
      request({
        method: "GET",
        url: API_URL.NEWS.GET,
      }),
    onSuccess(data) {
      console.log(data);
    },
  });

  const { isLoading, mutateAsync } = useMutation({
    mutationFn: (data) =>
      request({ method: "POST", url: API_URL.CREATE_CLUB, data: data }),
    onError(error: any, variables, context) {
      message.error(error?.response?.data?.message || "Thất bại");
    },
    onSuccess(data, variables, context) {
      message.success("Tạo club thành công");
    },
  });

  const onFinish = (values: any) => {
    console.log("Success:", values);
    mutateAsync(values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  const [image, setImage] = useState("");
  const [currentPage, setCurrentPage] = useState("choose-img");
  const [imgAfterCrop, setImgAfterCrop] = useState("");

  const inputRef: any = useRef();

  const handleOnChange = (event: any) => {
    if (event.target.files && event.target.files.length > 0) {
      const reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = function (e) {
        onImageSelected(reader.result);
      };
    }
  };

  const onChooseImg = () => {
    if (inputRef && inputRef.current) {
      inputRef.current.click();
    }
  };

  // Invoked when new image file is selected
  const onImageSelected = (selectedImg: any) => {
    setImage(selectedImg);
    setCurrentPage("crop-img");
  };

  // Generating Cropped Image When Done Button Clicked
  const onCropDone = (imgCroppedArea: any) => {
    const canvasEle = document.createElement("canvas");
    canvasEle.width = imgCroppedArea.width;
    canvasEle.height = imgCroppedArea.height;

    const context: any = canvasEle.getContext("2d");

    let imageObj1 = new Image();
    imageObj1.src = image;
    imageObj1.onload = function () {
      context.drawImage(
        imageObj1,
        imgCroppedArea.x,
        imgCroppedArea.y,
        imgCroppedArea.width,
        imgCroppedArea.height,
        0,
        0,
        imgCroppedArea.width,
        imgCroppedArea.height
      );

      const dataURL = canvasEle.toDataURL("image/jpeg");

      setImgAfterCrop(dataURL);
      setCurrentPage("img-cropped");
    };
  };

  // Handle Cancel Button Click
  const onCropCancel = () => {
    setCurrentPage("choose-img");
    setImage("");
  };

  return (
    <SFormRequestCreateClub>
      <Container>
        <div className="form_request_create_club">
          <h3 className="page-content-title title_form">
            Form request create club
          </h3>

          <Form
            layout="vertical"
            name="basic"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            {/* <div className="mb-[16px]">
              {currentPage === "choose-img" ? (
                <div>
                  <Form.Item<FieldType> label="Avatar" name="avatar">
                    <input
                      type="file"
                      accept="image/*"
                      ref={inputRef}
                      onChange={handleOnChange}
                      style={{ display: "none" }}
                    />
                    <button className="btn-upload" onClick={onChooseImg}>
                      <PlusOutlined />
                    </button>
                  </Form.Item>
                </div>
              ) : currentPage === "crop-img" ? (
                <ImageCropper
                  image={image}
                  onCropDone={onCropDone}
                  onCropCancel={onCropCancel}
                />
              ) : (
                <div>
                  <div>
                    <img src={imgAfterCrop} className="cropped-img" />
                  </div>

                  <button
                    onClick={() => {
                      setCurrentPage("crop-img");
                    }}
                    className="btn"
                  >
                    Crop
                  </button>

                  <button
                    onClick={() => {
                      setCurrentPage("choose-img");
                      setImage("");
                    }}
                    className="btn"
                  >
                    New Image
                  </button>
                </div>
              )}
            </div> */}
            <div className="mb-[16px]">
              <Form.Item<FieldType>
                label="Club"
                name="name"
                rules={[
                  {
                    required: true,
                    message: "Please input your club name!",
                  },
                ]}
              >
                <Input size="large" placeholder="Input your club name" />
              </Form.Item>
            </div>

            <div className="mb-[16px]">
              <Form.Item
                label="Sport"
                name="type"
                rules={[
                  {
                    required: true,
                    message: "Please input your sport name!",
                  },
                ]}
              >
                <Select size="large" placeholder="Select a sport name">
                  <Select.Option value="1">Cầu lông</Select.Option>
                  <Select.Option value="2">Bóng đá</Select.Option>
                  <Select.Option value="3">Bi lắc</Select.Option>
                  <Select.Option value="4">Bi-a</Select.Option>
                  <Select.Option value="5">Bóng bàn</Select.Option>
                </Select>
              </Form.Item>
            </div>

            <Form.Item>
              <Button type="primary" htmlType="submit" className="btn-create">
                Create club
              </Button>
            </Form.Item>
          </Form>
        </div>
      </Container>
    </SFormRequestCreateClub>
  );
}
