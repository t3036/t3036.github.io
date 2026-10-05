/* Danh sách bài hiển thị ở ngăn bên trái của các bài giảng. Sửa tay file này khi thêm bài mới (href rỗng = "Sắp có"). Đường dẫn tính từ thư mục gốc. */
const LESSON_INDEX = {
    "2":  [
              {
                  "topic":  "Chủ đề 1. Căn bản về công nghệ"
              },
              {
                  "stt":  "1, 2",
                  "name":  "Hệ điều hành",
                  "links":  [
                                {
                                    "text":  "Bài học",
                                    "href":  ""
                                },
                                {
                                    "text":  "Ôn tập",
                                    "href":  ""
                                }
                            ]
              },
              {
                  "stt":  "3",
                  "name":  "Thông tin đầu vào - đầu ra; bộ nhớ; thiết bị lưu trữ",
                  "links":  [
                                {
                                    "text":  "Bài học",
                                    "href":  ""
                                },
                                {
                                    "text":  "Ôn tập",
                                    "href":  ""
                                }
                            ]
              },
              {
                  "stt":  "4",
                  "name":  "Các vấn đề liên quan đến ứng dụng (Apps)",
                  "links":  [
                                {
                                    "text":  "Bài học",
                                    "href":  "spark2/bai-04/index.html"
                                },
                                {
                                    "text":  "Ôn tập",
                                    "href":  ""
                                }
                            ]
              },
              {
                  "stt":  "5, 6",
                  "name":  "Thiết bị nhập và thiết bị xuất",
                  "links":  [
                                {
                                    "text":  "Bài học",
                                    "href":  ""
                                },
                                {
                                    "text":  "Ôn tập",
                                    "href":  ""
                                }
                            ]
              },
              {
                  "stt":  "7",
                  "name":  "Mạng (Network) là gì?",
                  "links":  [
                                {
                                    "text":  "Bài học",
                                    "href":  "spark2/bai-07/index.html"
                                },
                                {
                                    "text":  "Ôn tập",
                                    "href":  ""
                                }
                            ]
              },
              {
                  "stt":  "8",
                  "name":  "Kết nối các thiết bị (Connection)",
                  "links":  [
                                {
                                    "text":  "Bài học",
                                    "href":  "spark2/bai-08/index.html"
                                },
                                {
                                    "text":  "Ôn tập",
                                    "href":  ""
                                }
                            ]
              },
              {
                  "stt":  "📝",
                  "name":  "Ôn tập Chủ đề 1",
                  "links":  [
                                {
                                    "text":  "Ôn tập",
                                    "href":  "https://server1-ic3.netlify.app/bai-on-luyen-hoc-sinh-spark-lv2-can-ban-ve-cong-nghe-muks461m7weh.html"
                                },
                                {
                                    "text":  "Kiểm tra",
                                    "href":  "https://server2-ic3.netlify.app/bai-kiem-tra-hoc-sinh-spark-lv2-can-ban-ve-cong-nghe-mugnjayd2ayh.html"
                                }
                            ]
              },
              {
                  "topic":  "Chủ đề 2. Quản lý thông tin"
              },
              {
                  "stt":  "9, 10",
                  "name":  "Trình duyệt web – Đánh dấu trang",
                  "links":  [
                                {
                                    "text":  "Bài học",
                                    "href":  "spark2/bai-09-10/index.html"
                                },
                                {
                                    "text":  "Ôn tập",
                                    "href":  ""
                                }
                            ]
              },
              {
                  "stt":  "11",
                  "name":  "Phân loại nội dung trực tuyến",
                  "links":  [
                                {
                                    "text":  "Bài học",
                                    "href":  "spark1/bai-11/index.html"
                                },
                                {
                                    "text":  "Ôn tập",
                                    "href":  ""
                                }
                            ]
              },
              {
                  "stt":  "12",
                  "name":  "Tìm hiểu URL của một trang web",
                  "links":  [
                                {
                                    "text":  "Bài học",
                                    "href":  ""
                                },
                                {
                                    "text":  "Ôn tập",
                                    "href":  ""
                                }
                            ]
              },
              {
                  "stt":  "13",
                  "name":  "Xác định nguồn thông tin trực tuyến tin cậy",
                  "links":  [
                                {
                                    "text":  "Bài học",
                                    "href":  ""
                                },
                                {
                                    "text":  "Ôn tập",
                                    "href":  ""
                                }
                            ]
              },
              {
                  "stt":  "14",
                  "name":  "Tìm kiếm thông tin trực tuyến",
                  "links":  [
                                {
                                    "text":  "Bài học",
                                    "href":  ""
                                },
                                {
                                    "text":  "Ôn tập",
                                    "href":  ""
                                }
                            ]
              },
              {
                  "stt":  "📝",
                  "name":  "Ôn tập Chủ đề 2",
                  "links":  [
                                {
                                    "text":  "Ôn tập",
                                    "href":  ""
                                },
                                {
                                    "text":  "Kiểm tra",
                                    "href":  ""
                                }
                            ]
              },
              {
                  "topic":  "Chủ đề 3. Sáng tạo nội dung"
              },
              {
                  "stt":  "15",
                  "name":  "Các khái niệm cơ bản trong sáng tạo nội dung",
                  "links":  [
                                {
                                    "text":  "Bài học",
                                    "href":  ""
                                },
                                {
                                    "text":  "Ôn tập",
                                    "href":  ""
                                }
                            ]
              },
              {
                  "stt":  "16, 17",
                  "name":  "Ứng dụng văn phòng",
                  "links":  [
                                {
                                    "text":  "Bài học",
                                    "href":  ""
                                },
                                {
                                    "text":  "Ôn tập",
                                    "href":  ""
                                }
                            ]
              },
              {
                  "stt":  "18",
                  "name":  "Danh Sách Bullets Và Numbering",
                  "links":  [
                                {
                                    "text":  "Bài học",
                                    "href":  ""
                                },
                                {
                                    "text":  "Ôn tập",
                                    "href":  ""
                                }
                            ]
              },
              {
                  "stt":  "19",
                  "name":  "Định dạng văn bản cơ bản",
                  "links":  [
                                {
                                    "text":  "Bài học",
                                    "href":  ""
                                },
                                {
                                    "text":  "Ôn tập",
                                    "href":  ""
                                }
                            ]
              },
              {
                  "stt":  "20",
                  "name":  "Thao tác với hình ảnh",
                  "links":  [
                                {
                                    "text":  "Bài học",
                                    "href":  ""
                                },
                                {
                                    "text":  "Ôn tập",
                                    "href":  ""
                                }
                            ]
              },
              {
                  "stt":  "21",
                  "name":  "Tạo chú thích cho hình ảnh",
                  "links":  [
                                {
                                    "text":  "Bài học",
                                    "href":  ""
                                },
                                {
                                    "text":  "Ôn tập",
                                    "href":  ""
                                }
                            ]
              },
              {
                  "stt":  "📝",
                  "name":  "Ôn tập Chủ đề 3",
                  "links":  [
                                {
                                    "text":  "Ôn tập",
                                    "href":  ""
                                },
                                {
                                    "text":  "Kiểm tra",
                                    "href":  ""
                                }
                            ]
              },
              {
                  "topic":  "Chủ đề 4. Công dân số"
              },
              {
                  "stt":  "22",
                  "name":  "Quyền công dân kĩ thuật số",
                  "links":  [
                                {
                                    "text":  "Bài học",
                                    "href":  ""
                                },
                                {
                                    "text":  "Ôn tập",
                                    "href":  ""
                                }
                            ]
              },
              {
                  "stt":  "23",
                  "name":  "Ứng xử trực tuyến",
                  "links":  [
                                {
                                    "text":  "Bài học",
                                    "href":  ""
                                },
                                {
                                    "text":  "Ôn tập",
                                    "href":  ""
                                }
                            ]
              },
              {
                  "stt":  "24",
                  "name":  "Dấu chân kĩ thuật số",
                  "links":  [
                                {
                                    "text":  "Bài học",
                                    "href":  ""
                                },
                                {
                                    "text":  "Ôn tập",
                                    "href":  ""
                                }
                            ]
              },
              {
                  "stt":  "📝",
                  "name":  "Ôn tập Chủ đề 4",
                  "links":  [
                                {
                                    "text":  "Ôn tập",
                                    "href":  ""
                                },
                                {
                                    "text":  "Kiểm tra",
                                    "href":  ""
                                }
                            ]
              },
              {
                  "topic":  "Chủ đề 5. Giao tiếp kĩ thuật số"
              },
              {
                  "stt":  "25, 26, 27",
                  "name":  "Giao tiếp kĩ thuật số",
                  "links":  [
                                {
                                    "text":  "Bài học",
                                    "href":  ""
                                },
                                {
                                    "text":  "Ôn tập",
                                    "href":  ""
                                }
                            ]
              },
              {
                  "stt":  "📝",
                  "name":  "Ôn tập Chủ đề 5",
                  "links":  [
                                {
                                    "text":  "Ôn tập",
                                    "href":  ""
                                },
                                {
                                    "text":  "Kiểm tra",
                                    "href":  ""
                                }
                            ]
              },
              {
                  "topic":  "Chủ đề 6. Cộng tác"
              },
              {
                  "stt":  "28",
                  "name":  "Cộng tác (Collaboration)",
                  "links":  [
                                {
                                    "text":  "Bài học",
                                    "href":  ""
                                },
                                {
                                    "text":  "Ôn tập",
                                    "href":  ""
                                }
                            ]
              },
              {
                  "stt":  "29",
                  "name":  "Kĩ năng cộng tác",
                  "links":  [
                                {
                                    "text":  "Bài học",
                                    "href":  ""
                                },
                                {
                                    "text":  "Ôn tập",
                                    "href":  ""
                                }
                            ]
              },
              {
                  "stt":  "📝",
                  "name":  "Ôn tập Chủ đề 6",
                  "links":  [
                                {
                                    "text":  "Ôn tập",
                                    "href":  ""
                                },
                                {
                                    "text":  "Kiểm tra",
                                    "href":  ""
                                }
                            ]
              },
              {
                  "topic":  "Chủ đề 7. An toàn và bảo mật"
              },
              {
                  "stt":  "30",
                  "name":  "Ánh sáng xanh và công thái học",
                  "links":  [
                                {
                                    "text":  "Bài học",
                                    "href":  ""
                                },
                                {
                                    "text":  "Ôn tập",
                                    "href":  ""
                                }
                            ]
              },
              {
                  "stt":  "31",
                  "name":  "Ảnh hưởng của sử dụng thiết bị điện tử đến sức khỏe",
                  "links":  [
                                {
                                    "text":  "Bài học",
                                    "href":  ""
                                },
                                {
                                    "text":  "Ôn tập",
                                    "href":  ""
                                }
                            ]
              },
              {
                  "stt":  "32",
                  "name":  "Các hành vi bắt nạt trực tuyến",
                  "links":  [
                                {
                                    "text":  "Bài học",
                                    "href":  ""
                                },
                                {
                                    "text":  "Ôn tập",
                                    "href":  ""
                                }
                            ]
              },
              {
                  "stt":  "33",
                  "name":  "Các thiết bị thông minh",
                  "links":  [
                                {
                                    "text":  "Bài học",
                                    "href":  ""
                                },
                                {
                                    "text":  "Ôn tập",
                                    "href":  ""
                                }
                            ]
              },
              {
                  "stt":  "34",
                  "name":  "Phân loại nội dung kĩ thuật số",
                  "links":  [
                                {
                                    "text":  "Bài học",
                                    "href":  ""
                                },
                                {
                                    "text":  "Ôn tập",
                                    "href":  ""
                                }
                            ]
              },
              {
                  "stt":  "35",
                  "name":  "Thông tin lưu trữ về người dùng",
                  "links":  [
                                {
                                    "text":  "Bài học",
                                    "href":  ""
                                },
                                {
                                    "text":  "Ôn tập",
                                    "href":  ""
                                }
                            ]
              },
              {
                  "stt":  "📝",
                  "name":  "Ôn tập Chủ đề 7",
                  "links":  [
                                {
                                    "text":  "Ôn tập",
                                    "href":  ""
                                },
                                {
                                    "text":  "Kiểm tra",
                                    "href":  ""
                                }
                            ]
              }
          ],
    "1":  [
              {
                  "topic":  "Chủ đề 1: Cơ bản về công nghệ"
              },
              {
                  "stt":  "1, 2",
                  "name":  "Phần cứng máy tính",
                  "links":  [
                                {
                                    "text":  "Bài học",
                                    "href":  ""
                                },
                                {
                                    "text":  "Ôn tập",
                                    "href":  ""
                                }
                            ]
              },
              {
                  "stt":  "3, 4",
                  "name":  "Phần mềm máy tính",
                  "links":  [
                                {
                                    "text":  "Bài học",
                                    "href":  ""
                                },
                                {
                                    "text":  "Ôn tập",
                                    "href":  ""
                                }
                            ]
              },
              {
                  "stt":  "5, 6",
                  "name":  "Tập tin và thư mục",
                  "links":  [
                                {
                                    "text":  "Bài học",
                                    "href":  "spark1/bai-05-06/index.html"
                                },
                                {
                                    "text":  "Ôn tập",
                                    "href":  ""
                                }
                            ]
              },
              {
                  "stt":  "7",
                  "name":  "Thiết bị di động",
                  "links":  [
                                {
                                    "text":  "Bài học",
                                    "href":  "spark1/bai-07/index.html"
                                },
                                {
                                    "text":  "Ôn tập",
                                    "href":  ""
                                }
                            ]
              },
              {
                  "stt":  "8",
                  "name":  "Mạng và Internet",
                  "links":  [
                                {
                                    "text":  "Bài học",
                                    "href":  "spark1/bai-08/index.html"
                                },
                                {
                                    "text":  "Ôn tập",
                                    "href":  ""
                                }
                            ]
              },
              {
                  "stt":  "📝",
                  "name":  "Ôn tập Chủ đề 1",
                  "links":  [
                                {
                                    "text":  "Ôn tập",
                                    "href":  "spark1/on-tap-1/index.html"
                                },
                                {
                                    "text":  "Kiểm tra",
                                    "href":  ""
                                }
                            ]
              },
              {
                  "topic":  "Chủ đề 2: An toàn và bảo mật"
              },
              {
                  "stt":  "9",
                  "name":  "Bắt nạt trực tuyến và ứng xử có trách nhiệm",
                  "links":  [
                                {
                                    "text":  "Bài học",
                                    "href":  "spark1/bai-09/index.html"
                                },
                                {
                                    "text":  "Ôn tập",
                                    "href":  ""
                                }
                            ]
              },
              {
                  "stt":  "10",
                  "name":  "Mật khẩu và dữ liệu cá nhân",
                  "links":  [
                                {
                                    "text":  "Bài học",
                                    "href":  "spark1/bai-10/index.html"
                                },
                                {
                                    "text":  "Ôn tập",
                                    "href":  ""
                                }
                            ]
              },
              {
                  "stt":  "11",
                  "name":  "Bảo mật máy tính, thiết bị và tài khoản",
                  "links":  [
                                {
                                    "text":  "Bài học",
                                    "href":  ""
                                },
                                {
                                    "text":  "Ôn tập",
                                    "href":  ""
                                }
                            ]
              },
              {
                  "stt":  "12",
                  "name":  "Máy tính và sức khỏe",
                  "links":  [
                                {
                                    "text":  "Bài học",
                                    "href":  ""
                                },
                                {
                                    "text":  "Ôn tập",
                                    "href":  ""
                                }
                            ]
              },
              {
                  "stt":  "📝",
                  "name":  "Ôn tập Chủ đề 2",
                  "links":  [
                                {
                                    "text":  "Ôn tập",
                                    "href":  ""
                                },
                                {
                                    "text":  "Kiểm tra",
                                    "href":  ""
                                }
                            ]
              },
              {
                  "topic":  "Chủ đề 3: Quản lý thông tin"
              },
              {
                  "stt":  "13",
                  "name":  "Thông tin trực tuyến",
                  "links":  [
                                {
                                    "text":  "Bài học",
                                    "href":  ""
                                },
                                {
                                    "text":  "Ôn tập",
                                    "href":  ""
                                }
                            ]
              },
              {
                  "stt":  "14",
                  "name":  "Trang Web và trình duyệt (1) – Trình duyệt Web",
                  "links":  [
                                {
                                    "text":  "Bài học",
                                    "href":  ""
                                },
                                {
                                    "text":  "Ôn tập",
                                    "href":  ""
                                }
                            ]
              },
              {
                  "stt":  "15",
                  "name":  "Trang Web và trình duyệt (2) – Thẻ trình duyệt",
                  "links":  [
                                {
                                    "text":  "Bài học",
                                    "href":  ""
                                },
                                {
                                    "text":  "Ôn tập",
                                    "href":  ""
                                }
                            ]
              },
              {
                  "stt":  "16",
                  "name":  "Trang Web và trình duyệt (3) – Lịch sử Web và dấu trang",
                  "links":  [
                                {
                                    "text":  "Bài học",
                                    "href":  ""
                                },
                                {
                                    "text":  "Ôn tập",
                                    "href":  ""
                                }
                            ]
              },
              {
                  "stt":  "📝",
                  "name":  "Ôn tập Chủ đề 3",
                  "links":  [
                                {
                                    "text":  "Ôn tập",
                                    "href":  ""
                                },
                                {
                                    "text":  "Kiểm tra",
                                    "href":  ""
                                }
                            ]
              },
              {
                  "topic":  "Chủ đề 4: Sáng tạo nội dung"
              },
              {
                  "stt":  "17",
                  "name":  "Tài liệu và bài trình chiếu",
                  "links":  [
                                {
                                    "text":  "Bài học",
                                    "href":  ""
                                },
                                {
                                    "text":  "Ôn tập",
                                    "href":  ""
                                }
                            ]
              },
              {
                  "stt":  "18",
                  "name":  "Làm quen với phần mềm tạo tài liệu và xử lí văn bản (Microsoft Word)",
                  "links":  [
                                {
                                    "text":  "Bài học",
                                    "href":  ""
                                },
                                {
                                    "text":  "Ôn tập",
                                    "href":  ""
                                }
                            ]
              },
              {
                  "stt":  "19",
                  "name":  "Khám phá giao diện Microsoft Word",
                  "links":  [
                                {
                                    "text":  "Bài học",
                                    "href":  ""
                                },
                                {
                                    "text":  "Ôn tập",
                                    "href":  ""
                                }
                            ]
              },
              {
                  "stt":  "20",
                  "name":  "Khám phá các nút lệnh",
                  "links":  [
                                {
                                    "text":  "Bài học",
                                    "href":  ""
                                },
                                {
                                    "text":  "Ôn tập",
                                    "href":  ""
                                }
                            ]
              },
              {
                  "stt":  "21",
                  "name":  "Nhập, chọn và tìm kiếm văn bản",
                  "links":  [
                                {
                                    "text":  "Bài học",
                                    "href":  ""
                                },
                                {
                                    "text":  "Ôn tập",
                                    "href":  ""
                                }
                            ]
              },
              {
                  "stt":  "22",
                  "name":  "Làm quen với phần mềm trình chiếu (Microsoft PowerPoint)",
                  "links":  [
                                {
                                    "text":  "Bài học",
                                    "href":  ""
                                },
                                {
                                    "text":  "Ôn tập",
                                    "href":  ""
                                }
                            ]
              },
              {
                  "stt":  "23",
                  "name":  "Bắt đầu một bài trình chiếu mới",
                  "links":  [
                                {
                                    "text":  "Bài học",
                                    "href":  ""
                                },
                                {
                                    "text":  "Ôn tập",
                                    "href":  ""
                                }
                            ]
              },
              {
                  "stt":  "24",
                  "name":  "Cấu trúc cơ bản bài trình chiếu",
                  "links":  [
                                {
                                    "text":  "Bài học",
                                    "href":  ""
                                },
                                {
                                    "text":  "Ôn tập",
                                    "href":  ""
                                }
                            ]
              },
              {
                  "stt":  "25",
                  "name":  "Quản lí các trang chiếu",
                  "links":  [
                                {
                                    "text":  "Bài học",
                                    "href":  ""
                                },
                                {
                                    "text":  "Ôn tập",
                                    "href":  ""
                                }
                            ]
              },
              {
                  "stt":  "26",
                  "name":  "Tạo nội dung bài trình chiếu",
                  "links":  [
                                {
                                    "text":  "Bài học",
                                    "href":  ""
                                },
                                {
                                    "text":  "Ôn tập",
                                    "href":  ""
                                }
                            ]
              },
              {
                  "stt":  "27",
                  "name":  "Lựa chọn tài liệu hay bài trình chiếu",
                  "links":  [
                                {
                                    "text":  "Bài học",
                                    "href":  ""
                                },
                                {
                                    "text":  "Ôn tập",
                                    "href":  ""
                                }
                            ]
              },
              {
                  "stt":  "📝",
                  "name":  "Ôn tập Chủ đề 4",
                  "links":  [
                                {
                                    "text":  "Ôn tập",
                                    "href":  ""
                                },
                                {
                                    "text":  "Kiểm tra",
                                    "href":  ""
                                }
                            ]
              },
              {
                  "topic":  "Chủ đề 5: Công dân số"
              },
              {
                  "stt":  "28",
                  "name":  "Công dân số",
                  "links":  [
                                {
                                    "text":  "Bài học",
                                    "href":  ""
                                },
                                {
                                    "text":  "Ôn tập",
                                    "href":  ""
                                }
                            ]
              },
              {
                  "stt":  "29",
                  "name":  "Giao tiếp và ứng xử trên môi trường số",
                  "links":  [
                                {
                                    "text":  "Bài học",
                                    "href":  ""
                                },
                                {
                                    "text":  "Ôn tập",
                                    "href":  ""
                                }
                            ]
              },
              {
                  "stt":  "30",
                  "name":  "Hành vi trực tuyến",
                  "links":  [
                                {
                                    "text":  "Bài học",
                                    "href":  ""
                                },
                                {
                                    "text":  "Ôn tập",
                                    "href":  ""
                                }
                            ]
              },
              {
                  "stt":  "31",
                  "name":  "Danh tính kĩ thuật số",
                  "links":  [
                                {
                                    "text":  "Bài học",
                                    "href":  ""
                                },
                                {
                                    "text":  "Ôn tập",
                                    "href":  ""
                                }
                            ]
              },
              {
                  "stt":  "📝",
                  "name":  "Ôn tập Chủ đề 5",
                  "links":  [
                                {
                                    "text":  "Ôn tập",
                                    "href":  ""
                                },
                                {
                                    "text":  "Kiểm tra",
                                    "href":  ""
                                }
                            ]
              },
              {
                  "topic":  "Chủ đề 6: Giao tiếp kĩ thuật số"
              },
              {
                  "stt":  "32",
                  "name":  "Truyền thông điện tử",
                  "links":  [
                                {
                                    "text":  "Bài học",
                                    "href":  ""
                                },
                                {
                                    "text":  "Ôn tập",
                                    "href":  ""
                                }
                            ]
              },
              {
                  "stt":  "33, 34",
                  "name":  "Thư điện tử",
                  "links":  [
                                {
                                    "text":  "Bài học",
                                    "href":  ""
                                },
                                {
                                    "text":  "Ôn tập",
                                    "href":  ""
                                }
                            ]
              },
              {
                  "stt":  "35",
                  "name":  "Các phương pháp truyền thông điện tử",
                  "links":  [
                                {
                                    "text":  "Bài học",
                                    "href":  ""
                                },
                                {
                                    "text":  "Ôn tập",
                                    "href":  ""
                                }
                            ]
              },
              {
                  "stt":  "📝",
                  "name":  "Ôn tập Chủ đề 6",
                  "links":  [
                                {
                                    "text":  "Ôn tập",
                                    "href":  ""
                                },
                                {
                                    "text":  "Kiểm tra",
                                    "href":  ""
                                }
                            ]
              }
          ],
    "3":  [
              {
                  "topic":  "Chủ đề 1. Cơ bản về công nghệ"
              },
              {
                  "stt":  "1",
                  "name":  "Ứng dụng công nghệ đa dạng",
                  "links":  [
                                {
                                    "text":  "Bài học",
                                    "href":  ""
                                },
                                {
                                    "text":  "Ôn tập",
                                    "href":  ""
                                }
                            ]
              },
              {
                  "stt":  "2",
                  "name":  "Lưu trữ thông tin",
                  "links":  [
                                {
                                    "text":  "Bài học",
                                    "href":  ""
                                },
                                {
                                    "text":  "Ôn tập",
                                    "href":  ""
                                }
                            ]
              },
              {
                  "stt":  "3",
                  "name":  "(Máy học); Khả năng tiếp cận công nghệ",
                  "links":  [
                                {
                                    "text":  "Bài học",
                                    "href":  ""
                                },
                                {
                                    "text":  "Ôn tập",
                                    "href":  ""
                                }
                            ]
              },
              {
                  "stt":  "4, 5",
                  "name":  "Mạng máy tính",
                  "links":  [
                                {
                                    "text":  "Bài học",
                                    "href":  ""
                                },
                                {
                                    "text":  "Ôn tập",
                                    "href":  ""
                                }
                            ]
              },
              {
                  "stt":  "6, 7",
                  "name":  "Trình duyệt web",
                  "links":  [
                                {
                                    "text":  "Bài học",
                                    "href":  ""
                                },
                                {
                                    "text":  "Ôn tập",
                                    "href":  ""
                                }
                            ]
              },
              {
                  "stt":  "8",
                  "name":  "Xử lí sự cố công nghệ",
                  "links":  [
                                {
                                    "text":  "Bài học",
                                    "href":  "spark3/bai-08/index.html"
                                },
                                {
                                    "text":  "Ôn tập",
                                    "href":  ""
                                }
                            ]
              },
              {
                  "stt":  "📝",
                  "name":  "Ôn tập Chủ đề 1",
                  "links":  [
                                {
                                    "text":  "Ôn tập",
                                    "href":  "https://server3-ic3.netlify.app/bai-on-luyen-hoc-sinh-spark-lv3-can-ban-ve-cong-nghe-muajzpmcmpsb.html"
                                },
                                {
                                    "text":  "Kiểm tra",
                                    "href":  ""
                                }
                            ]
              },
              {
                  "topic":  "Chủ đề 2. Quản lý thông tin"
              },
              {
                  "stt":  "9",
                  "name":  "Dữ liệu, thông tin và kiến thức",
                  "links":  [
                                {
                                    "text":  "Bài học",
                                    "href":  "spark3/bai-09/index.html"
                                },
                                {
                                    "text":  "Ôn tập",
                                    "href":  ""
                                }
                            ]
              },
              {
                  "stt":  "10",
                  "name":  "Đánh giá thông tin",
                  "links":  [
                                {
                                    "text":  "Bài học",
                                    "href":  "spark3/bai-10/index.html"
                                },
                                {
                                    "text":  "Ôn tập",
                                    "href":  ""
                                }
                            ]
              },
              {
                  "stt":  "11",
                  "name":  "Quan điểm và thiên kiến",
                  "links":  [
                                {
                                    "text":  "Bài học",
                                    "href":  "spark3/bai-11/index.html"
                                },
                                {
                                    "text":  "Ôn tập",
                                    "href":  ""
                                }
                            ]
              },
              {
                  "stt":  "12, 13",
                  "name":  "Nguồn thông tin đáng tin cậy",
                  "links":  [
                                {
                                    "text":  "Bài học",
                                    "href":  "spark3/bai-12-13/index.html"
                                },
                                {
                                    "text":  "Ôn tập",
                                    "href":  ""
                                }
                            ]
              },
              {
                  "stt":  "14",
                  "name":  "Bảo vệ sở hữu trí tuệ",
                  "links":  [
                                {
                                    "text":  "Bài học",
                                    "href":  "spark3/bai-14/index.html"
                                },
                                {
                                    "text":  "Ôn tập",
                                    "href":  ""
                                }
                            ]
              },
              {
                  "stt":  "15",
                  "name":  "Khám phá Creative Commons",
                  "links":  [
                                {
                                    "text":  "Bài học",
                                    "href":  "spark3/bai-15/index.html"
                                },
                                {
                                    "text":  "Ôn tập",
                                    "href":  ""
                                }
                            ]
              },
              {
                  "stt":  "📝",
                  "name":  "Ôn tập Chủ đề 2",
                  "links":  [
                                {
                                    "text":  "Ôn tập",
                                    "href":  "spark3/on-tap-2/index.html"
                                },
                                {
                                    "text":  "Kiểm tra",
                                    "href":  ""
                                }
                            ]
              },
              {
                  "topic":  "Chủ đề 3. Công dân số"
              },
              {
                  "stt":  "16",
                  "name":  "Đạo đức và hợp pháp",
                  "links":  [
                                {
                                    "text":  "Bài học",
                                    "href":  "spark3/bai-16/index.html"
                                },
                                {
                                    "text":  "Ôn tập",
                                    "href":  ""
                                }
                            ]
              },
              {
                  "stt":  "17",
                  "name":  "Tin tặc",
                  "links":  [
                                {
                                    "text":  "Bài học",
                                    "href":  ""
                                },
                                {
                                    "text":  "Ôn tập",
                                    "href":  ""
                                }
                            ]
              },
              {
                  "stt":  "18",
                  "name":  "Rủi ro trực tuyến",
                  "links":  [
                                {
                                    "text":  "Bài học",
                                    "href":  ""
                                },
                                {
                                    "text":  "Ôn tập",
                                    "href":  ""
                                }
                            ]
              },
              {
                  "stt":  "19, 20",
                  "name":  "Quyền riêng tư",
                  "links":  [
                                {
                                    "text":  "Bài học",
                                    "href":  ""
                                },
                                {
                                    "text":  "Ôn tập",
                                    "href":  ""
                                }
                            ]
              },
              {
                  "stt":  "📝",
                  "name":  "Ôn tập Chủ đề 3",
                  "links":  [
                                {
                                    "text":  "Ôn tập",
                                    "href":  ""
                                },
                                {
                                    "text":  "Kiểm tra",
                                    "href":  ""
                                }
                            ]
              },
              {
                  "topic":  "Chủ đề 4. Sáng tạo nội dung"
              },
              {
                  "stt":  "21",
                  "name":  "Trích dẫn nguồn thông tin",
                  "links":  [
                                {
                                    "text":  "Bài học",
                                    "href":  ""
                                },
                                {
                                    "text":  "Ôn tập",
                                    "href":  ""
                                }
                            ]
              },
              {
                  "stt":  "22",
                  "name":  "Tính năng tiện ích",
                  "links":  [
                                {
                                    "text":  "Bài học",
                                    "href":  ""
                                },
                                {
                                    "text":  "Ôn tập",
                                    "href":  ""
                                }
                            ]
              },
              {
                  "stt":  "23",
                  "name":  "Trực quan hóa dữ liệu",
                  "links":  [
                                {
                                    "text":  "Bài học",
                                    "href":  ""
                                },
                                {
                                    "text":  "Ôn tập",
                                    "href":  ""
                                }
                            ]
              },
              {
                  "stt":  "📝",
                  "name":  "Ôn tập Chủ đề 4",
                  "links":  [
                                {
                                    "text":  "Ôn tập",
                                    "href":  ""
                                },
                                {
                                    "text":  "Kiểm tra",
                                    "href":  ""
                                }
                            ]
              },
              {
                  "topic":  "Chủ đề 5. Giao tiếp kĩ thuật số"
              },
              {
                  "stt":  "24",
                  "name":  "Giao tiếp kĩ thuật số",
                  "links":  [
                                {
                                    "text":  "Bài học",
                                    "href":  ""
                                },
                                {
                                    "text":  "Ôn tập",
                                    "href":  ""
                                }
                            ]
              },
              {
                  "stt":  "25",
                  "name":  "Thư điện tử",
                  "links":  [
                                {
                                    "text":  "Bài học",
                                    "href":  ""
                                },
                                {
                                    "text":  "Ôn tập",
                                    "href":  ""
                                }
                            ]
              },
              {
                  "stt":  "26",
                  "name":  "Kĩ năng giao tiếp kĩ thuật số phù hợp",
                  "links":  [
                                {
                                    "text":  "Bài học",
                                    "href":  ""
                                },
                                {
                                    "text":  "Ôn tập",
                                    "href":  ""
                                }
                            ]
              },
              {
                  "stt":  "📝",
                  "name":  "Ôn tập Chủ đề 5",
                  "links":  [
                                {
                                    "text":  "Ôn tập",
                                    "href":  ""
                                },
                                {
                                    "text":  "Kiểm tra",
                                    "href":  ""
                                }
                            ]
              },
              {
                  "topic":  "Chủ đề 6. Cộng tác"
              },
              {
                  "stt":  "27",
                  "name":  "Cộng tác",
                  "links":  [
                                {
                                    "text":  "Bài học",
                                    "href":  ""
                                },
                                {
                                    "text":  "Ôn tập",
                                    "href":  ""
                                }
                            ]
              },
              {
                  "stt":  "28",
                  "name":  "Lợi ích cộng tác",
                  "links":  [
                                {
                                    "text":  "Bài học",
                                    "href":  ""
                                },
                                {
                                    "text":  "Ôn tập",
                                    "href":  ""
                                }
                            ]
              },
              {
                  "stt":  "29",
                  "name":  "Cộng tác kĩ thuật số trong học tập và giải trí",
                  "links":  [
                                {
                                    "text":  "Bài học",
                                    "href":  ""
                                },
                                {
                                    "text":  "Ôn tập",
                                    "href":  ""
                                }
                            ]
              },
              {
                  "stt":  "📝",
                  "name":  "Ôn tập Chủ đề 6",
                  "links":  [
                                {
                                    "text":  "Ôn tập",
                                    "href":  ""
                                },
                                {
                                    "text":  "Kiểm tra",
                                    "href":  ""
                                }
                            ]
              },
              {
                  "topic":  "Chủ đề 7. An toàn và bảo mật"
              },
              {
                  "stt":  "30",
                  "name":  "Bắt nạt trực tuyến",
                  "links":  [
                                {
                                    "text":  "Bài học",
                                    "href":  ""
                                },
                                {
                                    "text":  "Ôn tập",
                                    "href":  ""
                                }
                            ]
              },
              {
                  "stt":  "31",
                  "name":  "Dấu chân kĩ thuật số",
                  "links":  [
                                {
                                    "text":  "Bài học",
                                    "href":  ""
                                },
                                {
                                    "text":  "Ôn tập",
                                    "href":  ""
                                }
                            ]
              },
              {
                  "stt":  "32",
                  "name":  "Thu thập dữ liệu",
                  "links":  [
                                {
                                    "text":  "Bài học",
                                    "href":  ""
                                },
                                {
                                    "text":  "Ôn tập",
                                    "href":  ""
                                }
                            ]
              },
              {
                  "stt":  "33",
                  "name":  "An toàn và bảo mật trên môi trường kĩ thuật số",
                  "links":  [
                                {
                                    "text":  "Bài học",
                                    "href":  ""
                                },
                                {
                                    "text":  "Ôn tập",
                                    "href":  ""
                                }
                            ]
              },
              {
                  "stt":  "34",
                  "name":  "Ứng xử với thông tin không phù hợp",
                  "links":  [
                                {
                                    "text":  "Bài học",
                                    "href":  ""
                                },
                                {
                                    "text":  "Ôn tập",
                                    "href":  ""
                                }
                            ]
              },
              {
                  "stt":  "35",
                  "name":  "Đảm bảo sức khỏe khi sử dụng kĩ thuật số",
                  "links":  [
                                {
                                    "text":  "Bài học",
                                    "href":  ""
                                },
                                {
                                    "text":  "Ôn tập",
                                    "href":  ""
                                }
                            ]
              },
              {
                  "stt":  "📝",
                  "name":  "Ôn tập Chủ đề 7",
                  "links":  [
                                {
                                    "text":  "Ôn tập",
                                    "href":  ""
                                },
                                {
                                    "text":  "Kiểm tra",
                                    "href":  ""
                                }
                            ]
              }
          ]
};
