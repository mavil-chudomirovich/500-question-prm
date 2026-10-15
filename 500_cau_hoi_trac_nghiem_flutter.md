# 500 câu hỏi trắc nghiệm Flutter

Bộ câu hỏi được biên soạn dựa trên các chủ đề trong tài liệu Flutter chính thức: cài đặt và learning pathway, widget/UI, state management, navigation, platform integration, DevTools, testing và supported platforms.

**Cách dùng:** 5 đợt, mỗi đợt 100 câu. Mỗi câu có 4 lựa chọn và đáp án kèm giải thích ngắn. Các câu được đánh số liên tục từ 1 đến 500.

> Lưu ý: tài liệu Flutter thay đổi theo phiên bản. Với yêu cầu phụ thuộc phiên bản hệ điều hành/SDK, hãy đối chiếu trang chính thức tại thời điểm sử dụng.

## Nguồn tài liệu chính thức
- https://docs.flutter.dev/learn
- https://docs.flutter.dev/install/quick
- https://docs.flutter.dev/ui
- https://docs.flutter.dev/data-and-backend/state-mgmt
- https://docs.flutter.dev/ui/navigation
- https://docs.flutter.dev/platform-integration
- https://docs.flutter.dev/testing/overview
- https://docs.flutter.dev/testing/integration-tests
- https://docs.flutter.dev/tools/sdk
- https://docs.flutter.dev/reference/supported-platforms

## Đợt 1 — Nền tảng Flutter, cài đặt và Dart

### Câu 1. Flutter là gì theo tài liệu chính thức?
A. Một ngôn ngữ lập trình riêng
B. Bộ công cụ UI đa nền tảng
C. Một hệ quản trị cơ sở dữ liệu
D. Một máy chủ web
**Đáp án: B.** Flutter là bộ công cụ để xây dựng ứng dụng đa nền tảng từ một codebase.

### Câu 2. Ngôn ngữ chính dùng để viết ứng dụng Flutter là gì?
A. Kotlin
B. Swift
C. Dart
D. TypeScript
**Đáp án: C.** Flutter sử dụng Dart.

### Câu 3. Lệnh nào thường dùng để kiểm tra môi trường phát triển Flutter?
A. flutter doctor
B. flutter inspect-all
C. dart verify-sdk
D. flutter validate-system
**Đáp án: A.** flutter doctor kiểm tra công cụ và cấu hình môi trường.

### Câu 4. Công cụ dòng lệnh nào đi kèm Flutter SDK để thao tác với dự án Flutter?
A. npm
B. flutter
C. gradle בלבד
D. cargo
**Đáp án: B.** Flutter CLI hỗ trợ tạo, chạy, kiểm thử và build ứng dụng.

### Câu 5. Flutter SDK có bao gồm Dart SDK không?
A. Không bao giờ
B. Có
C. Chỉ khi cài Xcode
D. Chỉ trên Linux
**Đáp án: B.** Dart SDK được phân phối cùng Flutter SDK.

### Câu 6. Mục đích chính của lệnh `flutter create` là gì?
A. Tạo dự án Flutter
B. Xuất bản ứng dụng lên cửa hàng
C. Xóa cache toàn hệ thống
D. Tạo tài khoản Google
**Đáp án: A.** Lệnh tạo bộ khung dự án mới.

### Câu 7. Lệnh nào thường chạy ứng dụng Flutter trên thiết bị/giả lập đã kết nối?
A. flutter deploy-now
B. flutter run
C. dart publish-app
D. flutter start-server
**Đáp án: B.** flutter run biên dịch và khởi chạy ứng dụng.

### Câu 8. Lệnh `flutter pub get` chủ yếu làm gì?
A. Lấy/cài các dependency được khai báo
B. Tạo ảnh splash screen
C. Ký APK
D. Mở DevTools
**Đáp án: A.** Lệnh giải quyết và tải các package phụ thuộc.

### Câu 9. File nào thường khai báo metadata dự án và dependencies của Flutter?
A. pubspec.yaml
B. analysis_options.json
C. README.lock
D. routes.xml
**Đáp án: A.** pubspec.yaml chứa thông tin package, dependency và tài nguyên.

### Câu 10. Thư mục nào thường chứa mã nguồn Dart của ứng dụng?
A. android-only/
B. lib/
C. build-cache/
D. vendor-bin/
**Đáp án: B.** Mã nguồn ứng dụng thường nằm trong lib/.

### Câu 11. Tệp nào thường là điểm bắt đầu của ứng dụng Flutter mẫu?
A. lib/main.dart
B. pubspec.lock
C. test_config.xml
D. assets/index.css
**Đáp án: A.** main.dart thường chứa hàm main và khởi tạo widget gốc.

### Câu 12. Vai trò của hàm `main()` trong ứng dụng Dart là gì?
A. Điểm bắt đầu thực thi
B. Định nghĩa màu mặc định
C. Tạo database tự động
D. Đóng gói ứng dụng
**Đáp án: A.** main là entry point thông thường của chương trình Dart.

### Câu 13. Lệnh `flutter --version` dùng để làm gì?
A. Hiển thị phiên bản Flutter
B. Cập nhật tất cả package
C. Chạy test
D. Mở emulator
**Đáp án: A.** Lệnh in thông tin phiên bản Flutter.

### Câu 14. Vì sao nên đọc kết quả `flutter doctor` sau khi cài đặt?
A. Để phát hiện thiếu công cụ hoặc cấu hình
B. Để tự động viết giao diện
C. Để tạo API backend
D. Để tăng RAM máy
**Đáp án: A.** Kết quả giúp xác định các thành phần môi trường còn thiếu.

### Câu 15. Khi phát triển Flutter cho iOS, điều kiện công cụ nào đáng chú ý?
A. Cần môi trường macOS cho quy trình iOS chính thức
B. Chỉ cần máy Windows
C. Bắt buộc dùng Linux
D. Không cần Xcode
**Đáp án: A.** Tài liệu Flutter chỉ dẫn phát triển/build iOS trên macOS.

### Câu 16. Mục tiêu của hot reload trong quá trình phát triển là gì?
A. Áp dụng thay đổi mã nhanh mà thường giữ trạng thái hiện tại
B. Xóa dữ liệu người dùng
C. Tạo bản phát hành cửa hàng
D. Cài lại hệ điều hành
**Đáp án: A.** Hot reload giúp lặp nhanh khi phát triển UI và logic.

### Câu 17. Hot reload có luôn thay thế hoàn toàn hot restart không?
A. Có, trong mọi trường hợp
B. Không; một số thay đổi cần hot restart
C. Có, nhưng chỉ trên iOS
D. Không có khái niệm hot restart
**Đáp án: B.** Một số thay đổi như khởi tạo trạng thái cấp cao có thể cần restart.

### Câu 18. Flutter SDK cung cấp công cụ nào để debug và profile ứng dụng?
A. Flutter DevTools
B. Photoshop
C. MySQL Workbench
D. Postman בלבד
**Đáp án: A.** DevTools có các công cụ kiểm tra widget, hiệu năng và bộ nhớ.

### Câu 19. Mục tiêu của `dart format` là gì?
A. Định dạng mã Dart theo quy tắc chuẩn
B. Biên dịch ứng dụng iOS
C. Tạo file APK
D. Cài plugin native
**Đáp án: A.** dart format tự động định dạng mã nguồn Dart.

### Câu 20. Công cụ nào dùng để phân tích tĩnh mã Dart/Flutter?
A. dart analyze
B. flutter upload
C. dart screenshot
D. pub remove-all
**Đáp án: A.** Phân tích tĩnh giúp phát hiện lỗi và vấn đề trước khi chạy.

### Câu 21. Trong một dự án mới, đội phát triển cần quyết định: khi `flutter doctor` báo thiếu Android toolchain nhưng bạn chỉ build web, bước hợp lý nhất là gì?
A. Xem cảnh báo có liên quan mục tiêu web hay không
B. Xóa thư mục lib
C. Đổi sang Kotlin
D. Bỏ pubspec.yaml
**Đáp án: A.** Công cụ cần thiết phụ thuộc nền tảng mục tiêu.

### Câu 22. Khi review code, lập trình viên nên ưu tiên: khi `flutter doctor` báo thiếu Android toolchain nhưng bạn chỉ build web, bước hợp lý nhất là gì?
A. Xem cảnh báo có liên quan mục tiêu web hay không
B. Xóa thư mục lib
C. Đổi sang Kotlin
D. Bỏ pubspec.yaml
**Đáp án: A.** Công cụ cần thiết phụ thuộc nền tảng mục tiêu.

### Câu 23. Trong tình huống thực tế, câu hỏi cần giải quyết là: khi `flutter doctor` báo thiếu Android toolchain nhưng bạn chỉ build web, bước hợp lý nhất là gì?
A. Xem cảnh báo có liên quan mục tiêu web hay không
B. Xóa thư mục lib
C. Đổi sang Kotlin
D. Bỏ pubspec.yaml
**Đáp án: A.** Công cụ cần thiết phụ thuộc nền tảng mục tiêu.

### Câu 24. Để xử lý yêu cầu này, phương án nào hợp lý nhất: khi `flutter doctor` báo thiếu Android toolchain nhưng bạn chỉ build web, bước hợp lý nhất là gì?
A. Xem cảnh báo có liên quan mục tiêu web hay không
B. Xóa thư mục lib
C. Đổi sang Kotlin
D. Bỏ pubspec.yaml
**Đáp án: A.** Công cụ cần thiết phụ thuộc nền tảng mục tiêu.

### Câu 25. Khi debug ứng dụng, nên chọn cách nào: khi `flutter doctor` báo thiếu Android toolchain nhưng bạn chỉ build web, bước hợp lý nhất là gì?
A. Xem cảnh báo có liên quan mục tiêu web hay không
B. Xóa thư mục lib
C. Đổi sang Kotlin
D. Bỏ pubspec.yaml
**Đáp án: A.** Công cụ cần thiết phụ thuộc nền tảng mục tiêu.

### Câu 26. Trong quy trình phát triển, đâu là lựa chọn chính xác: khi `flutter doctor` báo thiếu Android toolchain nhưng bạn chỉ build web, bước hợp lý nhất là gì?
A. Xem cảnh báo có liên quan mục tiêu web hay không
B. Xóa thư mục lib
C. Đổi sang Kotlin
D. Bỏ pubspec.yaml
**Đáp án: A.** Công cụ cần thiết phụ thuộc nền tảng mục tiêu.

### Câu 27. Nếu cần chọn giải pháp phù hợp, cách làm nào phù hợp: khi `flutter doctor` báo thiếu Android toolchain nhưng bạn chỉ build web, bước hợp lý nhất là gì?
A. Xem cảnh báo có liên quan mục tiêu web hay không
B. Xóa thư mục lib
C. Đổi sang Kotlin
D. Bỏ pubspec.yaml
**Đáp án: A.** Công cụ cần thiết phụ thuộc nền tảng mục tiêu.

### Câu 28. Khi tối ưu quy trình làm việc, nên áp dụng điều gì: khi `flutter doctor` báo thiếu Android toolchain nhưng bạn chỉ build web, bước hợp lý nhất là gì?
A. Xem cảnh báo có liên quan mục tiêu web hay không
B. Xóa thư mục lib
C. Đổi sang Kotlin
D. Bỏ pubspec.yaml
**Đáp án: A.** Công cụ cần thiết phụ thuộc nền tảng mục tiêu.

### Câu 29. Trong một dự án mới, đội phát triển cần quyết định: bạn vừa cài Flutter nhưng terminal cũ chưa nhận lệnh `flutter`. Nên thử gì trước?
A. Mở terminal mới và kiểm tra PATH
B. Viết lại main.dart
C. Xóa Dart SDK
D. Chạy integration test
**Đáp án: A.** Cập nhật PATH có thể chỉ có hiệu lực ở terminal mới.

### Câu 30. Khi review code, lập trình viên nên ưu tiên: bạn vừa cài Flutter nhưng terminal cũ chưa nhận lệnh `flutter`. Nên thử gì trước?
A. Mở terminal mới và kiểm tra PATH
B. Viết lại main.dart
C. Xóa Dart SDK
D. Chạy integration test
**Đáp án: A.** Cập nhật PATH có thể chỉ có hiệu lực ở terminal mới.

### Câu 31. Trong tình huống thực tế, câu hỏi cần giải quyết là: bạn vừa cài Flutter nhưng terminal cũ chưa nhận lệnh `flutter`. Nên thử gì trước?
A. Mở terminal mới và kiểm tra PATH
B. Viết lại main.dart
C. Xóa Dart SDK
D. Chạy integration test
**Đáp án: A.** Cập nhật PATH có thể chỉ có hiệu lực ở terminal mới.

### Câu 32. Để xử lý yêu cầu này, phương án nào hợp lý nhất: bạn vừa cài Flutter nhưng terminal cũ chưa nhận lệnh `flutter`. Nên thử gì trước?
A. Mở terminal mới và kiểm tra PATH
B. Viết lại main.dart
C. Xóa Dart SDK
D. Chạy integration test
**Đáp án: A.** Cập nhật PATH có thể chỉ có hiệu lực ở terminal mới.

### Câu 33. Khi debug ứng dụng, nên chọn cách nào: bạn vừa cài Flutter nhưng terminal cũ chưa nhận lệnh `flutter`. Nên thử gì trước?
A. Mở terminal mới và kiểm tra PATH
B. Viết lại main.dart
C. Xóa Dart SDK
D. Chạy integration test
**Đáp án: A.** Cập nhật PATH có thể chỉ có hiệu lực ở terminal mới.

### Câu 34. Trong quy trình phát triển, đâu là lựa chọn chính xác: bạn vừa cài Flutter nhưng terminal cũ chưa nhận lệnh `flutter`. Nên thử gì trước?
A. Mở terminal mới và kiểm tra PATH
B. Viết lại main.dart
C. Xóa Dart SDK
D. Chạy integration test
**Đáp án: A.** Cập nhật PATH có thể chỉ có hiệu lực ở terminal mới.

### Câu 35. Nếu cần chọn giải pháp phù hợp, cách làm nào phù hợp: bạn vừa cài Flutter nhưng terminal cũ chưa nhận lệnh `flutter`. Nên thử gì trước?
A. Mở terminal mới và kiểm tra PATH
B. Viết lại main.dart
C. Xóa Dart SDK
D. Chạy integration test
**Đáp án: A.** Cập nhật PATH có thể chỉ có hiệu lực ở terminal mới.

### Câu 36. Khi tối ưu quy trình làm việc, nên áp dụng điều gì: bạn vừa cài Flutter nhưng terminal cũ chưa nhận lệnh `flutter`. Nên thử gì trước?
A. Mở terminal mới và kiểm tra PATH
B. Viết lại main.dart
C. Xóa Dart SDK
D. Chạy integration test
**Đáp án: A.** Cập nhật PATH có thể chỉ có hiệu lực ở terminal mới.

### Câu 37. Trong một dự án mới, đội phát triển cần quyết định: một package được thêm vào pubspec.yaml nhưng chưa tải về. Nên chạy lệnh nào?
A. flutter pub get
B. flutter doctor
C. flutter clean --all-tests
D. dart format
**Đáp án: A.** pub get giải quyết dependencies.

### Câu 38. Khi review code, lập trình viên nên ưu tiên: một package được thêm vào pubspec.yaml nhưng chưa tải về. Nên chạy lệnh nào?
A. flutter pub get
B. flutter doctor
C. flutter clean --all-tests
D. dart format
**Đáp án: A.** pub get giải quyết dependencies.

### Câu 39. Trong tình huống thực tế, câu hỏi cần giải quyết là: một package được thêm vào pubspec.yaml nhưng chưa tải về. Nên chạy lệnh nào?
A. flutter pub get
B. flutter doctor
C. flutter clean --all-tests
D. dart format
**Đáp án: A.** pub get giải quyết dependencies.

### Câu 40. Để xử lý yêu cầu này, phương án nào hợp lý nhất: một package được thêm vào pubspec.yaml nhưng chưa tải về. Nên chạy lệnh nào?
A. flutter pub get
B. flutter doctor
C. flutter clean --all-tests
D. dart format
**Đáp án: A.** pub get giải quyết dependencies.

### Câu 41. Khi debug ứng dụng, nên chọn cách nào: một package được thêm vào pubspec.yaml nhưng chưa tải về. Nên chạy lệnh nào?
A. flutter pub get
B. flutter doctor
C. flutter clean --all-tests
D. dart format
**Đáp án: A.** pub get giải quyết dependencies.

### Câu 42. Trong quy trình phát triển, đâu là lựa chọn chính xác: một package được thêm vào pubspec.yaml nhưng chưa tải về. Nên chạy lệnh nào?
A. flutter pub get
B. flutter doctor
C. flutter clean --all-tests
D. dart format
**Đáp án: A.** pub get giải quyết dependencies.

### Câu 43. Nếu cần chọn giải pháp phù hợp, cách làm nào phù hợp: một package được thêm vào pubspec.yaml nhưng chưa tải về. Nên chạy lệnh nào?
A. flutter pub get
B. flutter doctor
C. flutter clean --all-tests
D. dart format
**Đáp án: A.** pub get giải quyết dependencies.

### Câu 44. Khi tối ưu quy trình làm việc, nên áp dụng điều gì: một package được thêm vào pubspec.yaml nhưng chưa tải về. Nên chạy lệnh nào?
A. flutter pub get
B. flutter doctor
C. flutter clean --all-tests
D. dart format
**Đáp án: A.** pub get giải quyết dependencies.

### Câu 45. Trong một dự án mới, đội phát triển cần quyết định: bạn muốn xem phiên bản SDK đang dùng trong dự án. Lệnh nào trực tiếp nhất?
A. flutter --version
B. flutter test
C. dart fix
D. flutter devices --clear
**Đáp án: A.** Lệnh hiển thị phiên bản SDK.

### Câu 46. Khi review code, lập trình viên nên ưu tiên: bạn muốn xem phiên bản SDK đang dùng trong dự án. Lệnh nào trực tiếp nhất?
A. flutter --version
B. flutter test
C. dart fix
D. flutter devices --clear
**Đáp án: A.** Lệnh hiển thị phiên bản SDK.

### Câu 47. Trong tình huống thực tế, câu hỏi cần giải quyết là: bạn muốn xem phiên bản SDK đang dùng trong dự án. Lệnh nào trực tiếp nhất?
A. flutter --version
B. flutter test
C. dart fix
D. flutter devices --clear
**Đáp án: A.** Lệnh hiển thị phiên bản SDK.

### Câu 48. Để xử lý yêu cầu này, phương án nào hợp lý nhất: bạn muốn xem phiên bản SDK đang dùng trong dự án. Lệnh nào trực tiếp nhất?
A. flutter --version
B. flutter test
C. dart fix
D. flutter devices --clear
**Đáp án: A.** Lệnh hiển thị phiên bản SDK.

### Câu 49. Khi debug ứng dụng, nên chọn cách nào: bạn muốn xem phiên bản SDK đang dùng trong dự án. Lệnh nào trực tiếp nhất?
A. flutter --version
B. flutter test
C. dart fix
D. flutter devices --clear
**Đáp án: A.** Lệnh hiển thị phiên bản SDK.

### Câu 50. Trong quy trình phát triển, đâu là lựa chọn chính xác: bạn muốn xem phiên bản SDK đang dùng trong dự án. Lệnh nào trực tiếp nhất?
A. flutter --version
B. flutter test
C. dart fix
D. flutter devices --clear
**Đáp án: A.** Lệnh hiển thị phiên bản SDK.

### Câu 51. Nếu cần chọn giải pháp phù hợp, cách làm nào phù hợp: bạn muốn xem phiên bản SDK đang dùng trong dự án. Lệnh nào trực tiếp nhất?
A. flutter --version
B. flutter test
C. dart fix
D. flutter devices --clear
**Đáp án: A.** Lệnh hiển thị phiên bản SDK.

### Câu 52. Khi tối ưu quy trình làm việc, nên áp dụng điều gì: bạn muốn xem phiên bản SDK đang dùng trong dự án. Lệnh nào trực tiếp nhất?
A. flutter --version
B. flutter test
C. dart fix
D. flutter devices --clear
**Đáp án: A.** Lệnh hiển thị phiên bản SDK.

### Câu 53. Trong một dự án mới, đội phát triển cần quyết định: một thành viên mới chưa biết bắt đầu học Flutter ở đâu. Tài liệu chính thức khuyên gì?
A. Theo learning pathway Dart và Flutter
B. Bắt đầu bằng viết plugin native ngay
C. Chỉ đọc release notes
D. Bỏ qua Dart
**Đáp án: A.** Learning pathway dành cho người mới đi từ Dart đến Flutter.

### Câu 54. Khi review code, lập trình viên nên ưu tiên: một thành viên mới chưa biết bắt đầu học Flutter ở đâu. Tài liệu chính thức khuyên gì?
A. Theo learning pathway Dart và Flutter
B. Bắt đầu bằng viết plugin native ngay
C. Chỉ đọc release notes
D. Bỏ qua Dart
**Đáp án: A.** Learning pathway dành cho người mới đi từ Dart đến Flutter.

### Câu 55. Trong tình huống thực tế, câu hỏi cần giải quyết là: một thành viên mới chưa biết bắt đầu học Flutter ở đâu. Tài liệu chính thức khuyên gì?
A. Theo learning pathway Dart và Flutter
B. Bắt đầu bằng viết plugin native ngay
C. Chỉ đọc release notes
D. Bỏ qua Dart
**Đáp án: A.** Learning pathway dành cho người mới đi từ Dart đến Flutter.

### Câu 56. Để xử lý yêu cầu này, phương án nào hợp lý nhất: một thành viên mới chưa biết bắt đầu học Flutter ở đâu. Tài liệu chính thức khuyên gì?
A. Theo learning pathway Dart và Flutter
B. Bắt đầu bằng viết plugin native ngay
C. Chỉ đọc release notes
D. Bỏ qua Dart
**Đáp án: A.** Learning pathway dành cho người mới đi từ Dart đến Flutter.

### Câu 57. Khi debug ứng dụng, nên chọn cách nào: một thành viên mới chưa biết bắt đầu học Flutter ở đâu. Tài liệu chính thức khuyên gì?
A. Theo learning pathway Dart và Flutter
B. Bắt đầu bằng viết plugin native ngay
C. Chỉ đọc release notes
D. Bỏ qua Dart
**Đáp án: A.** Learning pathway dành cho người mới đi từ Dart đến Flutter.

### Câu 58. Trong quy trình phát triển, đâu là lựa chọn chính xác: một thành viên mới chưa biết bắt đầu học Flutter ở đâu. Tài liệu chính thức khuyên gì?
A. Theo learning pathway Dart và Flutter
B. Bắt đầu bằng viết plugin native ngay
C. Chỉ đọc release notes
D. Bỏ qua Dart
**Đáp án: A.** Learning pathway dành cho người mới đi từ Dart đến Flutter.

### Câu 59. Nếu cần chọn giải pháp phù hợp, cách làm nào phù hợp: một thành viên mới chưa biết bắt đầu học Flutter ở đâu. Tài liệu chính thức khuyên gì?
A. Theo learning pathway Dart và Flutter
B. Bắt đầu bằng viết plugin native ngay
C. Chỉ đọc release notes
D. Bỏ qua Dart
**Đáp án: A.** Learning pathway dành cho người mới đi từ Dart đến Flutter.

### Câu 60. Khi tối ưu quy trình làm việc, nên áp dụng điều gì: một thành viên mới chưa biết bắt đầu học Flutter ở đâu. Tài liệu chính thức khuyên gì?
A. Theo learning pathway Dart và Flutter
B. Bắt đầu bằng viết plugin native ngay
C. Chỉ đọc release notes
D. Bỏ qua Dart
**Đáp án: A.** Learning pathway dành cho người mới đi từ Dart đến Flutter.

### Câu 61. Trong một dự án mới, đội phát triển cần quyết định: ứng dụng cần hỗ trợ Android, iOS, web và desktop. Lợi ích cốt lõi của Flutter là gì?
A. Có thể xây dựng nhiều nền tảng từ một codebase
B. Không cần kiểm thử trên nền tảng nào
C. Mọi API native tự động giống hệt
D. Không cần cấu hình build
**Đáp án: A.** Flutter hướng đến phát triển đa nền tảng từ một codebase.

### Câu 62. Khi review code, lập trình viên nên ưu tiên: ứng dụng cần hỗ trợ Android, iOS, web và desktop. Lợi ích cốt lõi của Flutter là gì?
A. Có thể xây dựng nhiều nền tảng từ một codebase
B. Không cần kiểm thử trên nền tảng nào
C. Mọi API native tự động giống hệt
D. Không cần cấu hình build
**Đáp án: A.** Flutter hướng đến phát triển đa nền tảng từ một codebase.

### Câu 63. Trong tình huống thực tế, câu hỏi cần giải quyết là: ứng dụng cần hỗ trợ Android, iOS, web và desktop. Lợi ích cốt lõi của Flutter là gì?
A. Có thể xây dựng nhiều nền tảng từ một codebase
B. Không cần kiểm thử trên nền tảng nào
C. Mọi API native tự động giống hệt
D. Không cần cấu hình build
**Đáp án: A.** Flutter hướng đến phát triển đa nền tảng từ một codebase.

### Câu 64. Để xử lý yêu cầu này, phương án nào hợp lý nhất: ứng dụng cần hỗ trợ Android, iOS, web và desktop. Lợi ích cốt lõi của Flutter là gì?
A. Có thể xây dựng nhiều nền tảng từ một codebase
B. Không cần kiểm thử trên nền tảng nào
C. Mọi API native tự động giống hệt
D. Không cần cấu hình build
**Đáp án: A.** Flutter hướng đến phát triển đa nền tảng từ một codebase.

### Câu 65. Khi debug ứng dụng, nên chọn cách nào: ứng dụng cần hỗ trợ Android, iOS, web và desktop. Lợi ích cốt lõi của Flutter là gì?
A. Có thể xây dựng nhiều nền tảng từ một codebase
B. Không cần kiểm thử trên nền tảng nào
C. Mọi API native tự động giống hệt
D. Không cần cấu hình build
**Đáp án: A.** Flutter hướng đến phát triển đa nền tảng từ một codebase.

### Câu 66. Trong quy trình phát triển, đâu là lựa chọn chính xác: ứng dụng cần hỗ trợ Android, iOS, web và desktop. Lợi ích cốt lõi của Flutter là gì?
A. Có thể xây dựng nhiều nền tảng từ một codebase
B. Không cần kiểm thử trên nền tảng nào
C. Mọi API native tự động giống hệt
D. Không cần cấu hình build
**Đáp án: A.** Flutter hướng đến phát triển đa nền tảng từ một codebase.

### Câu 67. Nếu cần chọn giải pháp phù hợp, cách làm nào phù hợp: ứng dụng cần hỗ trợ Android, iOS, web và desktop. Lợi ích cốt lõi của Flutter là gì?
A. Có thể xây dựng nhiều nền tảng từ một codebase
B. Không cần kiểm thử trên nền tảng nào
C. Mọi API native tự động giống hệt
D. Không cần cấu hình build
**Đáp án: A.** Flutter hướng đến phát triển đa nền tảng từ một codebase.

### Câu 68. Khi tối ưu quy trình làm việc, nên áp dụng điều gì: ứng dụng cần hỗ trợ Android, iOS, web và desktop. Lợi ích cốt lõi của Flutter là gì?
A. Có thể xây dựng nhiều nền tảng từ một codebase
B. Không cần kiểm thử trên nền tảng nào
C. Mọi API native tự động giống hệt
D. Không cần cấu hình build
**Đáp án: A.** Flutter hướng đến phát triển đa nền tảng từ một codebase.

### Câu 69. Trong một dự án mới, đội phát triển cần quyết định: bạn thay đổi một chuỗi văn bản trong widget và muốn thấy nhanh kết quả khi debug. Nên thử gì?
A. Hot reload
B. Build appbundle
C. Publish package
D. Tạo GlobalKey mới
**Đáp án: A.** Hot reload hỗ trợ vòng lặp phát triển nhanh.

### Câu 70. Khi review code, lập trình viên nên ưu tiên: bạn thay đổi một chuỗi văn bản trong widget và muốn thấy nhanh kết quả khi debug. Nên thử gì?
A. Hot reload
B. Build appbundle
C. Publish package
D. Tạo GlobalKey mới
**Đáp án: A.** Hot reload hỗ trợ vòng lặp phát triển nhanh.

### Câu 71. Trong tình huống thực tế, câu hỏi cần giải quyết là: bạn thay đổi một chuỗi văn bản trong widget và muốn thấy nhanh kết quả khi debug. Nên thử gì?
A. Hot reload
B. Build appbundle
C. Publish package
D. Tạo GlobalKey mới
**Đáp án: A.** Hot reload hỗ trợ vòng lặp phát triển nhanh.

### Câu 72. Để xử lý yêu cầu này, phương án nào hợp lý nhất: bạn thay đổi một chuỗi văn bản trong widget và muốn thấy nhanh kết quả khi debug. Nên thử gì?
A. Hot reload
B. Build appbundle
C. Publish package
D. Tạo GlobalKey mới
**Đáp án: A.** Hot reload hỗ trợ vòng lặp phát triển nhanh.

### Câu 73. Khi debug ứng dụng, nên chọn cách nào: bạn thay đổi một chuỗi văn bản trong widget và muốn thấy nhanh kết quả khi debug. Nên thử gì?
A. Hot reload
B. Build appbundle
C. Publish package
D. Tạo GlobalKey mới
**Đáp án: A.** Hot reload hỗ trợ vòng lặp phát triển nhanh.

### Câu 74. Trong quy trình phát triển, đâu là lựa chọn chính xác: bạn thay đổi một chuỗi văn bản trong widget và muốn thấy nhanh kết quả khi debug. Nên thử gì?
A. Hot reload
B. Build appbundle
C. Publish package
D. Tạo GlobalKey mới
**Đáp án: A.** Hot reload hỗ trợ vòng lặp phát triển nhanh.

### Câu 75. Nếu cần chọn giải pháp phù hợp, cách làm nào phù hợp: bạn thay đổi một chuỗi văn bản trong widget và muốn thấy nhanh kết quả khi debug. Nên thử gì?
A. Hot reload
B. Build appbundle
C. Publish package
D. Tạo GlobalKey mới
**Đáp án: A.** Hot reload hỗ trợ vòng lặp phát triển nhanh.

### Câu 76. Khi tối ưu quy trình làm việc, nên áp dụng điều gì: bạn thay đổi một chuỗi văn bản trong widget và muốn thấy nhanh kết quả khi debug. Nên thử gì?
A. Hot reload
B. Build appbundle
C. Publish package
D. Tạo GlobalKey mới
**Đáp án: A.** Hot reload hỗ trợ vòng lặp phát triển nhanh.

### Câu 77. Trong một dự án mới, đội phát triển cần quyết định: bạn cần định dạng cả file Dart theo chuẩn. Dùng công cụ nào?
A. dart format
B. flutter doctor
C. flutter build
D. dart devtools
**Đáp án: A.** dart format định dạng mã Dart.

### Câu 78. Khi review code, lập trình viên nên ưu tiên: bạn cần định dạng cả file Dart theo chuẩn. Dùng công cụ nào?
A. dart format
B. flutter doctor
C. flutter build
D. dart devtools
**Đáp án: A.** dart format định dạng mã Dart.

### Câu 79. Trong tình huống thực tế, câu hỏi cần giải quyết là: bạn cần định dạng cả file Dart theo chuẩn. Dùng công cụ nào?
A. dart format
B. flutter doctor
C. flutter build
D. dart devtools
**Đáp án: A.** dart format định dạng mã Dart.

### Câu 80. Để xử lý yêu cầu này, phương án nào hợp lý nhất: bạn cần định dạng cả file Dart theo chuẩn. Dùng công cụ nào?
A. dart format
B. flutter doctor
C. flutter build
D. dart devtools
**Đáp án: A.** dart format định dạng mã Dart.

### Câu 81. Khi debug ứng dụng, nên chọn cách nào: bạn cần định dạng cả file Dart theo chuẩn. Dùng công cụ nào?
A. dart format
B. flutter doctor
C. flutter build
D. dart devtools
**Đáp án: A.** dart format định dạng mã Dart.

### Câu 82. Trong quy trình phát triển, đâu là lựa chọn chính xác: bạn cần định dạng cả file Dart theo chuẩn. Dùng công cụ nào?
A. dart format
B. flutter doctor
C. flutter build
D. dart devtools
**Đáp án: A.** dart format định dạng mã Dart.

### Câu 83. Nếu cần chọn giải pháp phù hợp, cách làm nào phù hợp: bạn cần định dạng cả file Dart theo chuẩn. Dùng công cụ nào?
A. dart format
B. flutter doctor
C. flutter build
D. dart devtools
**Đáp án: A.** dart format định dạng mã Dart.

### Câu 84. Khi tối ưu quy trình làm việc, nên áp dụng điều gì: bạn cần định dạng cả file Dart theo chuẩn. Dùng công cụ nào?
A. dart format
B. flutter doctor
C. flutter build
D. dart devtools
**Đáp án: A.** dart format định dạng mã Dart.

### Câu 85. Trong một dự án mới, đội phát triển cần quyết định: bạn muốn tìm vấn đề mã nguồn trước khi chạy app. Nên dùng gì?
A. dart analyze
B. flutter build apk
C. Navigator.pop
D. ListView
**Đáp án: A.** Phân tích tĩnh phát hiện vấn đề trong mã.

### Câu 86. Khi review code, lập trình viên nên ưu tiên: bạn muốn tìm vấn đề mã nguồn trước khi chạy app. Nên dùng gì?
A. dart analyze
B. flutter build apk
C. Navigator.pop
D. ListView
**Đáp án: A.** Phân tích tĩnh phát hiện vấn đề trong mã.

### Câu 87. Trong tình huống thực tế, câu hỏi cần giải quyết là: bạn muốn tìm vấn đề mã nguồn trước khi chạy app. Nên dùng gì?
A. dart analyze
B. flutter build apk
C. Navigator.pop
D. ListView
**Đáp án: A.** Phân tích tĩnh phát hiện vấn đề trong mã.

### Câu 88. Để xử lý yêu cầu này, phương án nào hợp lý nhất: bạn muốn tìm vấn đề mã nguồn trước khi chạy app. Nên dùng gì?
A. dart analyze
B. flutter build apk
C. Navigator.pop
D. ListView
**Đáp án: A.** Phân tích tĩnh phát hiện vấn đề trong mã.

### Câu 89. Khi debug ứng dụng, nên chọn cách nào: bạn muốn tìm vấn đề mã nguồn trước khi chạy app. Nên dùng gì?
A. dart analyze
B. flutter build apk
C. Navigator.pop
D. ListView
**Đáp án: A.** Phân tích tĩnh phát hiện vấn đề trong mã.

### Câu 90. Trong quy trình phát triển, đâu là lựa chọn chính xác: bạn muốn tìm vấn đề mã nguồn trước khi chạy app. Nên dùng gì?
A. dart analyze
B. flutter build apk
C. Navigator.pop
D. ListView
**Đáp án: A.** Phân tích tĩnh phát hiện vấn đề trong mã.

### Câu 91. Nếu cần chọn giải pháp phù hợp, cách làm nào phù hợp: bạn muốn tìm vấn đề mã nguồn trước khi chạy app. Nên dùng gì?
A. dart analyze
B. flutter build apk
C. Navigator.pop
D. ListView
**Đáp án: A.** Phân tích tĩnh phát hiện vấn đề trong mã.

### Câu 92. Khi tối ưu quy trình làm việc, nên áp dụng điều gì: bạn muốn tìm vấn đề mã nguồn trước khi chạy app. Nên dùng gì?
A. dart analyze
B. flutter build apk
C. Navigator.pop
D. ListView
**Đáp án: A.** Phân tích tĩnh phát hiện vấn đề trong mã.

### Câu 93. Trong một dự án mới, đội phát triển cần quyết định: máy phát triển thiếu một công cụ cần cho nền tảng mục tiêu. Nguồn đầu tiên nên xem?
A. Hướng dẫn cài đặt nền tảng tương ứng trên docs.flutter.dev
B. Màu sắc trong ThemeData
C. Widget Text
D. Một file ảnh bất kỳ
**Đáp án: A.** Hướng dẫn chính thức liệt kê yêu cầu theo nền tảng.

### Câu 94. Khi review code, lập trình viên nên ưu tiên: máy phát triển thiếu một công cụ cần cho nền tảng mục tiêu. Nguồn đầu tiên nên xem?
A. Hướng dẫn cài đặt nền tảng tương ứng trên docs.flutter.dev
B. Màu sắc trong ThemeData
C. Widget Text
D. Một file ảnh bất kỳ
**Đáp án: A.** Hướng dẫn chính thức liệt kê yêu cầu theo nền tảng.

### Câu 95. Trong tình huống thực tế, câu hỏi cần giải quyết là: máy phát triển thiếu một công cụ cần cho nền tảng mục tiêu. Nguồn đầu tiên nên xem?
A. Hướng dẫn cài đặt nền tảng tương ứng trên docs.flutter.dev
B. Màu sắc trong ThemeData
C. Widget Text
D. Một file ảnh bất kỳ
**Đáp án: A.** Hướng dẫn chính thức liệt kê yêu cầu theo nền tảng.

### Câu 96. Để xử lý yêu cầu này, phương án nào hợp lý nhất: máy phát triển thiếu một công cụ cần cho nền tảng mục tiêu. Nguồn đầu tiên nên xem?
A. Hướng dẫn cài đặt nền tảng tương ứng trên docs.flutter.dev
B. Màu sắc trong ThemeData
C. Widget Text
D. Một file ảnh bất kỳ
**Đáp án: A.** Hướng dẫn chính thức liệt kê yêu cầu theo nền tảng.

### Câu 97. Khi debug ứng dụng, nên chọn cách nào: máy phát triển thiếu một công cụ cần cho nền tảng mục tiêu. Nguồn đầu tiên nên xem?
A. Hướng dẫn cài đặt nền tảng tương ứng trên docs.flutter.dev
B. Màu sắc trong ThemeData
C. Widget Text
D. Một file ảnh bất kỳ
**Đáp án: A.** Hướng dẫn chính thức liệt kê yêu cầu theo nền tảng.

### Câu 98. Trong quy trình phát triển, đâu là lựa chọn chính xác: máy phát triển thiếu một công cụ cần cho nền tảng mục tiêu. Nguồn đầu tiên nên xem?
A. Hướng dẫn cài đặt nền tảng tương ứng trên docs.flutter.dev
B. Màu sắc trong ThemeData
C. Widget Text
D. Một file ảnh bất kỳ
**Đáp án: A.** Hướng dẫn chính thức liệt kê yêu cầu theo nền tảng.

### Câu 99. Nếu cần chọn giải pháp phù hợp, cách làm nào phù hợp: máy phát triển thiếu một công cụ cần cho nền tảng mục tiêu. Nguồn đầu tiên nên xem?
A. Hướng dẫn cài đặt nền tảng tương ứng trên docs.flutter.dev
B. Màu sắc trong ThemeData
C. Widget Text
D. Một file ảnh bất kỳ
**Đáp án: A.** Hướng dẫn chính thức liệt kê yêu cầu theo nền tảng.

### Câu 100. Khi tối ưu quy trình làm việc, nên áp dụng điều gì: máy phát triển thiếu một công cụ cần cho nền tảng mục tiêu. Nguồn đầu tiên nên xem?
A. Hướng dẫn cài đặt nền tảng tương ứng trên docs.flutter.dev
B. Màu sắc trong ThemeData
C. Widget Text
D. Một file ảnh bất kỳ
**Đáp án: A.** Hướng dẫn chính thức liệt kê yêu cầu theo nền tảng.

## Đợt 2 — Widget, giao diện và bố cục

### Câu 101. Trong Flutter, giao diện được xây dựng chủ yếu từ thành phần nào?
A. Widget
B. Activity
C. DOM node
D. Storyboard
**Đáp án: A.** Widget mô tả cấu hình và cách hiển thị giao diện.

### Câu 102. StatelessWidget phù hợp nhất khi nào?
A. UI không cần quản lý trạng thái có thể thay đổi nội bộ
B. Widget luôn cần gọi setState
C. Mọi màn hình có API
D. Chỉ dùng cho animation
**Đáp án: A.** StatelessWidget nhận cấu hình và mô tả UI mà không giữ State mutable riêng.

### Câu 103. StatefulWidget thường dùng khi nào?
A. Giao diện phụ thuộc trạng thái có thể thay đổi
B. Không có dữ liệu nào
C. Chỉ hiển thị văn bản tĩnh
D. Chỉ tạo package
**Đáp án: A.** StatefulWidget kết hợp đối tượng State để quản lý trạng thái thay đổi.

### Câu 104. Phương thức nào xây dựng cây widget cho StatelessWidget?
A. render()
B. build(BuildContext context)
C. drawUI()
D. initWidget()
**Đáp án: B.** Widget ghi đè build để mô tả giao diện.

### Câu 105. `BuildContext` chủ yếu đại diện cho điều gì?
A. Vị trí của widget trong cây widget
B. Một kết nối SQL
C. Một HTTP response
D. Một file cấu hình
**Đáp án: A.** BuildContext là handle tới vị trí của widget trong cây.

### Câu 106. Widget `Text` thường dùng để làm gì?
A. Hiển thị văn bản
B. Sắp xếp widget theo hàng
C. Quản lý route
D. Lưu dữ liệu cục bộ
**Đáp án: A.** Text hiển thị chuỗi trong giao diện.

### Câu 107. Widget `Icon` dùng để làm gì?
A. Hiển thị biểu tượng
B. Tạo bảng dữ liệu
C. Đọc file JSON
D. Điều hướng trang
**Đáp án: A.** Icon hiển thị glyph từ bộ icon được hỗ trợ.

### Câu 108. `Container` thường được dùng để làm gì?
A. Kết hợp padding, margin, kích thước, decoration và căn chỉnh
B. Thực hiện truy vấn SQL
C. Quản lý quyền camera
D. Chạy background isolate tự động
**Đáp án: A.** Container là widget tiện ích cho bố cục và trang trí.

### Câu 109. `Center` có tác dụng chính nào?
A. Căn giữa child trong không gian được cấp
B. Tạo thanh điều hướng
C. Cuộn danh sách
D. Gọi API
**Đáp án: A.** Center đặt child ở giữa vùng bố cục.

### Câu 110. `Padding` dùng để làm gì?
A. Thêm khoảng đệm quanh child
B. Tạo khoảng cách ngoài theo CSS margin
C. Tạo route mới
D. Tự động lưu state
**Đáp án: A.** Padding thêm khoảng trống bên trong quanh child.

### Câu 111. `Row` sắp xếp các child theo hướng nào?
A. Ngang
B. Dọc
C. Theo vòng tròn
D. Theo lưới bắt buộc
**Đáp án: A.** Row bố trí child theo trục ngang.

### Câu 112. `Column` sắp xếp các child theo hướng nào?
A. Ngang
B. Dọc
C. Theo chiều sâu 3D
D. Theo thứ tự ngẫu nhiên
**Đáp án: B.** Column bố trí child theo trục dọc.

### Câu 113. Widget nào phù hợp để cuộn danh sách dài theo chiều dọc?
A. ListView
B. Row
C. Icon
D. Divider
**Đáp án: A.** ListView cung cấp danh sách có thể cuộn.

### Câu 114. `SingleChildScrollView` khác `ListView` ở điểm cơ bản nào?
A. Thường cuộn một child có thể chứa nội dung lớn
B. Chỉ hiển thị icon
C. Không thể cuộn
D. Bắt buộc có nhiều child trực tiếp
**Đáp án: A.** SingleChildScrollView cuộn một child; ListView phù hợp danh sách item.

### Câu 115. `Expanded` trong Row/Column thường làm gì?
A. Chiếm phần không gian còn lại theo flex
B. Tạo hiệu ứng chuyển cảnh
C. Đọc dữ liệu mạng
D. Đóng bàn phím
**Đáp án: A.** Expanded buộc child lấp đầy không gian còn lại theo flex.

### Câu 116. `Flexible` có điểm khác đáng chú ý nào so với Expanded?
A. Cho child linh hoạt hơn, không nhất thiết buộc lấp đầy toàn bộ phần được chia
B. Luôn tạo scroll
C. Chỉ dùng ngoài Row/Column
D. Tạo route mới
**Đáp án: A.** Flexible cho phép child dùng ít hơn phần không gian được phân bổ.

### Câu 117. `Stack` dùng để làm gì?
A. Xếp chồng các child lên nhau
B. Sắp xếp child thành một hàng
C. Quản lý HTTP
D. Tạo database
**Đáp án: A.** Stack cho phép chồng các widget trong cùng vùng.

### Câu 118. Widget `Positioned` thường đi cùng widget nào?
A. Stack
B. ListTile
C. MaterialApp
D. FutureBuilder
**Đáp án: A.** Positioned đặt vị trí child trong Stack.

### Câu 119. `Scaffold` cung cấp điều gì?
A. Cấu trúc trang Material như app bar, body, drawer, floating action button
B. Cơ chế lưu mật khẩu
C. Một HTTP client
D. Trình biên dịch Dart
**Đáp án: A.** Scaffold tạo khung trang Material Design.

### Câu 120. `AppBar` thường đặt ở đâu?
A. Thuộc tính appBar của Scaffold
B. Thuộc tính pubspec
C. Trong hàm main bắt buộc
D. Trong thư mục test
**Đáp án: A.** Scaffold có slot appBar để hiển thị thanh ứng dụng.

### Câu 121. Trong một dự án mới, đội phát triển cần quyết định: một màn hình có tiêu đề và nội dung tĩnh, không quản lý trạng thái nội bộ. Widget cơ sở nào phù hợp?
A. StatelessWidget
B. StatefulWidget luôn luôn
C. StreamBuilder
D. Navigator
**Đáp án: A.** UI tĩnh có thể được mô tả bằng StatelessWidget.

### Câu 122. Khi review code, lập trình viên nên ưu tiên: một màn hình có tiêu đề và nội dung tĩnh, không quản lý trạng thái nội bộ. Widget cơ sở nào phù hợp?
A. StatelessWidget
B. StatefulWidget luôn luôn
C. StreamBuilder
D. Navigator
**Đáp án: A.** UI tĩnh có thể được mô tả bằng StatelessWidget.

### Câu 123. Trong tình huống thực tế, câu hỏi cần giải quyết là: một màn hình có tiêu đề và nội dung tĩnh, không quản lý trạng thái nội bộ. Widget cơ sở nào phù hợp?
A. StatelessWidget
B. StatefulWidget luôn luôn
C. StreamBuilder
D. Navigator
**Đáp án: A.** UI tĩnh có thể được mô tả bằng StatelessWidget.

### Câu 124. Để xử lý yêu cầu này, phương án nào hợp lý nhất: một màn hình có tiêu đề và nội dung tĩnh, không quản lý trạng thái nội bộ. Widget cơ sở nào phù hợp?
A. StatelessWidget
B. StatefulWidget luôn luôn
C. StreamBuilder
D. Navigator
**Đáp án: A.** UI tĩnh có thể được mô tả bằng StatelessWidget.

### Câu 125. Khi debug ứng dụng, nên chọn cách nào: một màn hình có tiêu đề và nội dung tĩnh, không quản lý trạng thái nội bộ. Widget cơ sở nào phù hợp?
A. StatelessWidget
B. StatefulWidget luôn luôn
C. StreamBuilder
D. Navigator
**Đáp án: A.** UI tĩnh có thể được mô tả bằng StatelessWidget.

### Câu 126. Trong quy trình phát triển, đâu là lựa chọn chính xác: một màn hình có tiêu đề và nội dung tĩnh, không quản lý trạng thái nội bộ. Widget cơ sở nào phù hợp?
A. StatelessWidget
B. StatefulWidget luôn luôn
C. StreamBuilder
D. Navigator
**Đáp án: A.** UI tĩnh có thể được mô tả bằng StatelessWidget.

### Câu 127. Nếu cần chọn giải pháp phù hợp, cách làm nào phù hợp: một màn hình có tiêu đề và nội dung tĩnh, không quản lý trạng thái nội bộ. Widget cơ sở nào phù hợp?
A. StatelessWidget
B. StatefulWidget luôn luôn
C. StreamBuilder
D. Navigator
**Đáp án: A.** UI tĩnh có thể được mô tả bằng StatelessWidget.

### Câu 128. Khi tối ưu quy trình làm việc, nên áp dụng điều gì: một màn hình có tiêu đề và nội dung tĩnh, không quản lý trạng thái nội bộ. Widget cơ sở nào phù hợp?
A. StatelessWidget
B. StatefulWidget luôn luôn
C. StreamBuilder
D. Navigator
**Đáp án: A.** UI tĩnh có thể được mô tả bằng StatelessWidget.

### Câu 129. Trong một dự án mới, đội phát triển cần quyết định: bạn cần hiển thị các phần tử theo chiều dọc. Chọn widget nào?
A. Column
B. Row
C. Stack
D. Positioned
**Đáp án: A.** Column sắp xếp child theo trục dọc.

### Câu 130. Khi review code, lập trình viên nên ưu tiên: bạn cần hiển thị các phần tử theo chiều dọc. Chọn widget nào?
A. Column
B. Row
C. Stack
D. Positioned
**Đáp án: A.** Column sắp xếp child theo trục dọc.

### Câu 131. Trong tình huống thực tế, câu hỏi cần giải quyết là: bạn cần hiển thị các phần tử theo chiều dọc. Chọn widget nào?
A. Column
B. Row
C. Stack
D. Positioned
**Đáp án: A.** Column sắp xếp child theo trục dọc.

### Câu 132. Để xử lý yêu cầu này, phương án nào hợp lý nhất: bạn cần hiển thị các phần tử theo chiều dọc. Chọn widget nào?
A. Column
B. Row
C. Stack
D. Positioned
**Đáp án: A.** Column sắp xếp child theo trục dọc.

### Câu 133. Khi debug ứng dụng, nên chọn cách nào: bạn cần hiển thị các phần tử theo chiều dọc. Chọn widget nào?
A. Column
B. Row
C. Stack
D. Positioned
**Đáp án: A.** Column sắp xếp child theo trục dọc.

### Câu 134. Trong quy trình phát triển, đâu là lựa chọn chính xác: bạn cần hiển thị các phần tử theo chiều dọc. Chọn widget nào?
A. Column
B. Row
C. Stack
D. Positioned
**Đáp án: A.** Column sắp xếp child theo trục dọc.

### Câu 135. Nếu cần chọn giải pháp phù hợp, cách làm nào phù hợp: bạn cần hiển thị các phần tử theo chiều dọc. Chọn widget nào?
A. Column
B. Row
C. Stack
D. Positioned
**Đáp án: A.** Column sắp xếp child theo trục dọc.

### Câu 136. Khi tối ưu quy trình làm việc, nên áp dụng điều gì: bạn cần hiển thị các phần tử theo chiều dọc. Chọn widget nào?
A. Column
B. Row
C. Stack
D. Positioned
**Đáp án: A.** Column sắp xếp child theo trục dọc.

### Câu 137. Trong một dự án mới, đội phát triển cần quyết định: bạn cần hai nút nằm cạnh nhau theo chiều ngang. Widget bố cục nào phù hợp?
A. Row
B. Column
C. ListView
D. Center
**Đáp án: A.** Row sắp xếp child theo trục ngang.

### Câu 138. Khi review code, lập trình viên nên ưu tiên: bạn cần hai nút nằm cạnh nhau theo chiều ngang. Widget bố cục nào phù hợp?
A. Row
B. Column
C. ListView
D. Center
**Đáp án: A.** Row sắp xếp child theo trục ngang.

### Câu 139. Trong tình huống thực tế, câu hỏi cần giải quyết là: bạn cần hai nút nằm cạnh nhau theo chiều ngang. Widget bố cục nào phù hợp?
A. Row
B. Column
C. ListView
D. Center
**Đáp án: A.** Row sắp xếp child theo trục ngang.

### Câu 140. Để xử lý yêu cầu này, phương án nào hợp lý nhất: bạn cần hai nút nằm cạnh nhau theo chiều ngang. Widget bố cục nào phù hợp?
A. Row
B. Column
C. ListView
D. Center
**Đáp án: A.** Row sắp xếp child theo trục ngang.

### Câu 141. Khi debug ứng dụng, nên chọn cách nào: bạn cần hai nút nằm cạnh nhau theo chiều ngang. Widget bố cục nào phù hợp?
A. Row
B. Column
C. ListView
D. Center
**Đáp án: A.** Row sắp xếp child theo trục ngang.

### Câu 142. Trong quy trình phát triển, đâu là lựa chọn chính xác: bạn cần hai nút nằm cạnh nhau theo chiều ngang. Widget bố cục nào phù hợp?
A. Row
B. Column
C. ListView
D. Center
**Đáp án: A.** Row sắp xếp child theo trục ngang.

### Câu 143. Nếu cần chọn giải pháp phù hợp, cách làm nào phù hợp: bạn cần hai nút nằm cạnh nhau theo chiều ngang. Widget bố cục nào phù hợp?
A. Row
B. Column
C. ListView
D. Center
**Đáp án: A.** Row sắp xếp child theo trục ngang.

### Câu 144. Khi tối ưu quy trình làm việc, nên áp dụng điều gì: bạn cần hai nút nằm cạnh nhau theo chiều ngang. Widget bố cục nào phù hợp?
A. Row
B. Column
C. ListView
D. Center
**Đáp án: A.** Row sắp xếp child theo trục ngang.

### Câu 145. Trong một dự án mới, đội phát triển cần quyết định: một trang Material cần thanh app bar và vùng body. Widget khung trang nào phù hợp?
A. Scaffold
B. Text
C. Icon
D. Padding
**Đáp án: A.** Scaffold cung cấp các slot cấu trúc trang.

### Câu 146. Khi review code, lập trình viên nên ưu tiên: một trang Material cần thanh app bar và vùng body. Widget khung trang nào phù hợp?
A. Scaffold
B. Text
C. Icon
D. Padding
**Đáp án: A.** Scaffold cung cấp các slot cấu trúc trang.

### Câu 147. Trong tình huống thực tế, câu hỏi cần giải quyết là: một trang Material cần thanh app bar và vùng body. Widget khung trang nào phù hợp?
A. Scaffold
B. Text
C. Icon
D. Padding
**Đáp án: A.** Scaffold cung cấp các slot cấu trúc trang.

### Câu 148. Để xử lý yêu cầu này, phương án nào hợp lý nhất: một trang Material cần thanh app bar và vùng body. Widget khung trang nào phù hợp?
A. Scaffold
B. Text
C. Icon
D. Padding
**Đáp án: A.** Scaffold cung cấp các slot cấu trúc trang.

### Câu 149. Khi debug ứng dụng, nên chọn cách nào: một trang Material cần thanh app bar và vùng body. Widget khung trang nào phù hợp?
A. Scaffold
B. Text
C. Icon
D. Padding
**Đáp án: A.** Scaffold cung cấp các slot cấu trúc trang.

### Câu 150. Trong quy trình phát triển, đâu là lựa chọn chính xác: một trang Material cần thanh app bar và vùng body. Widget khung trang nào phù hợp?
A. Scaffold
B. Text
C. Icon
D. Padding
**Đáp án: A.** Scaffold cung cấp các slot cấu trúc trang.

### Câu 151. Nếu cần chọn giải pháp phù hợp, cách làm nào phù hợp: một trang Material cần thanh app bar và vùng body. Widget khung trang nào phù hợp?
A. Scaffold
B. Text
C. Icon
D. Padding
**Đáp án: A.** Scaffold cung cấp các slot cấu trúc trang.

### Câu 152. Khi tối ưu quy trình làm việc, nên áp dụng điều gì: một trang Material cần thanh app bar và vùng body. Widget khung trang nào phù hợp?
A. Scaffold
B. Text
C. Icon
D. Padding
**Đáp án: A.** Scaffold cung cấp các slot cấu trúc trang.

### Câu 153. Trong một dự án mới, đội phát triển cần quyết định: một danh sách có nhiều mục vượt quá chiều cao màn hình. Nên dùng gì?
A. ListView
B. Column không cuộn
C. Icon
D. SizedBox duy nhất
**Đáp án: A.** ListView hỗ trợ cuộn danh sách.

### Câu 154. Khi review code, lập trình viên nên ưu tiên: một danh sách có nhiều mục vượt quá chiều cao màn hình. Nên dùng gì?
A. ListView
B. Column không cuộn
C. Icon
D. SizedBox duy nhất
**Đáp án: A.** ListView hỗ trợ cuộn danh sách.

### Câu 155. Trong tình huống thực tế, câu hỏi cần giải quyết là: một danh sách có nhiều mục vượt quá chiều cao màn hình. Nên dùng gì?
A. ListView
B. Column không cuộn
C. Icon
D. SizedBox duy nhất
**Đáp án: A.** ListView hỗ trợ cuộn danh sách.

### Câu 156. Để xử lý yêu cầu này, phương án nào hợp lý nhất: một danh sách có nhiều mục vượt quá chiều cao màn hình. Nên dùng gì?
A. ListView
B. Column không cuộn
C. Icon
D. SizedBox duy nhất
**Đáp án: A.** ListView hỗ trợ cuộn danh sách.

### Câu 157. Khi debug ứng dụng, nên chọn cách nào: một danh sách có nhiều mục vượt quá chiều cao màn hình. Nên dùng gì?
A. ListView
B. Column không cuộn
C. Icon
D. SizedBox duy nhất
**Đáp án: A.** ListView hỗ trợ cuộn danh sách.

### Câu 158. Trong quy trình phát triển, đâu là lựa chọn chính xác: một danh sách có nhiều mục vượt quá chiều cao màn hình. Nên dùng gì?
A. ListView
B. Column không cuộn
C. Icon
D. SizedBox duy nhất
**Đáp án: A.** ListView hỗ trợ cuộn danh sách.

### Câu 159. Nếu cần chọn giải pháp phù hợp, cách làm nào phù hợp: một danh sách có nhiều mục vượt quá chiều cao màn hình. Nên dùng gì?
A. ListView
B. Column không cuộn
C. Icon
D. SizedBox duy nhất
**Đáp án: A.** ListView hỗ trợ cuộn danh sách.

### Câu 160. Khi tối ưu quy trình làm việc, nên áp dụng điều gì: một danh sách có nhiều mục vượt quá chiều cao màn hình. Nên dùng gì?
A. ListView
B. Column không cuộn
C. Icon
D. SizedBox duy nhất
**Đáp án: A.** ListView hỗ trợ cuộn danh sách.

### Câu 161. Trong một dự án mới, đội phát triển cần quyết định: bạn muốn đặt nhãn ở giữa vùng bố cục. Widget nào đơn giản nhất?
A. Center
B. Navigator
C. FutureBuilder
D. ChangeNotifier
**Đáp án: A.** Center căn giữa child trong vùng được cấp.

### Câu 162. Khi review code, lập trình viên nên ưu tiên: bạn muốn đặt nhãn ở giữa vùng bố cục. Widget nào đơn giản nhất?
A. Center
B. Navigator
C. FutureBuilder
D. ChangeNotifier
**Đáp án: A.** Center căn giữa child trong vùng được cấp.

### Câu 163. Trong tình huống thực tế, câu hỏi cần giải quyết là: bạn muốn đặt nhãn ở giữa vùng bố cục. Widget nào đơn giản nhất?
A. Center
B. Navigator
C. FutureBuilder
D. ChangeNotifier
**Đáp án: A.** Center căn giữa child trong vùng được cấp.

### Câu 164. Để xử lý yêu cầu này, phương án nào hợp lý nhất: bạn muốn đặt nhãn ở giữa vùng bố cục. Widget nào đơn giản nhất?
A. Center
B. Navigator
C. FutureBuilder
D. ChangeNotifier
**Đáp án: A.** Center căn giữa child trong vùng được cấp.

### Câu 165. Khi debug ứng dụng, nên chọn cách nào: bạn muốn đặt nhãn ở giữa vùng bố cục. Widget nào đơn giản nhất?
A. Center
B. Navigator
C. FutureBuilder
D. ChangeNotifier
**Đáp án: A.** Center căn giữa child trong vùng được cấp.

### Câu 166. Trong quy trình phát triển, đâu là lựa chọn chính xác: bạn muốn đặt nhãn ở giữa vùng bố cục. Widget nào đơn giản nhất?
A. Center
B. Navigator
C. FutureBuilder
D. ChangeNotifier
**Đáp án: A.** Center căn giữa child trong vùng được cấp.

### Câu 167. Nếu cần chọn giải pháp phù hợp, cách làm nào phù hợp: bạn muốn đặt nhãn ở giữa vùng bố cục. Widget nào đơn giản nhất?
A. Center
B. Navigator
C. FutureBuilder
D. ChangeNotifier
**Đáp án: A.** Center căn giữa child trong vùng được cấp.

### Câu 168. Khi tối ưu quy trình làm việc, nên áp dụng điều gì: bạn muốn đặt nhãn ở giữa vùng bố cục. Widget nào đơn giản nhất?
A. Center
B. Navigator
C. FutureBuilder
D. ChangeNotifier
**Đáp án: A.** Center căn giữa child trong vùng được cấp.

### Câu 169. Trong một dự án mới, đội phát triển cần quyết định: bạn muốn thêm khoảng đệm quanh nội dung. Widget nào trực tiếp nhất?
A. Padding
B. Router
C. AppBar
D. StreamBuilder
**Đáp án: A.** Padding thêm khoảng đệm quanh child.

### Câu 170. Khi review code, lập trình viên nên ưu tiên: bạn muốn thêm khoảng đệm quanh nội dung. Widget nào trực tiếp nhất?
A. Padding
B. Router
C. AppBar
D. StreamBuilder
**Đáp án: A.** Padding thêm khoảng đệm quanh child.

### Câu 171. Trong tình huống thực tế, câu hỏi cần giải quyết là: bạn muốn thêm khoảng đệm quanh nội dung. Widget nào trực tiếp nhất?
A. Padding
B. Router
C. AppBar
D. StreamBuilder
**Đáp án: A.** Padding thêm khoảng đệm quanh child.

### Câu 172. Để xử lý yêu cầu này, phương án nào hợp lý nhất: bạn muốn thêm khoảng đệm quanh nội dung. Widget nào trực tiếp nhất?
A. Padding
B. Router
C. AppBar
D. StreamBuilder
**Đáp án: A.** Padding thêm khoảng đệm quanh child.

### Câu 173. Khi debug ứng dụng, nên chọn cách nào: bạn muốn thêm khoảng đệm quanh nội dung. Widget nào trực tiếp nhất?
A. Padding
B. Router
C. AppBar
D. StreamBuilder
**Đáp án: A.** Padding thêm khoảng đệm quanh child.

### Câu 174. Trong quy trình phát triển, đâu là lựa chọn chính xác: bạn muốn thêm khoảng đệm quanh nội dung. Widget nào trực tiếp nhất?
A. Padding
B. Router
C. AppBar
D. StreamBuilder
**Đáp án: A.** Padding thêm khoảng đệm quanh child.

### Câu 175. Nếu cần chọn giải pháp phù hợp, cách làm nào phù hợp: bạn muốn thêm khoảng đệm quanh nội dung. Widget nào trực tiếp nhất?
A. Padding
B. Router
C. AppBar
D. StreamBuilder
**Đáp án: A.** Padding thêm khoảng đệm quanh child.

### Câu 176. Khi tối ưu quy trình làm việc, nên áp dụng điều gì: bạn muốn thêm khoảng đệm quanh nội dung. Widget nào trực tiếp nhất?
A. Padding
B. Router
C. AppBar
D. StreamBuilder
**Đáp án: A.** Padding thêm khoảng đệm quanh child.

### Câu 177. Trong một dự án mới, đội phát triển cần quyết định: bạn cần một huy hiệu nằm chồng lên ảnh. Cặp widget nào phù hợp?
A. Stack và Positioned
B. Row và Navigator
C. Column và Future
D. Scaffold và ChangeNotifier
**Đáp án: A.** Stack chồng child; Positioned định vị child trong Stack.

### Câu 178. Khi review code, lập trình viên nên ưu tiên: bạn cần một huy hiệu nằm chồng lên ảnh. Cặp widget nào phù hợp?
A. Stack và Positioned
B. Row và Navigator
C. Column và Future
D. Scaffold và ChangeNotifier
**Đáp án: A.** Stack chồng child; Positioned định vị child trong Stack.

### Câu 179. Trong tình huống thực tế, câu hỏi cần giải quyết là: bạn cần một huy hiệu nằm chồng lên ảnh. Cặp widget nào phù hợp?
A. Stack và Positioned
B. Row và Navigator
C. Column và Future
D. Scaffold và ChangeNotifier
**Đáp án: A.** Stack chồng child; Positioned định vị child trong Stack.

### Câu 180. Để xử lý yêu cầu này, phương án nào hợp lý nhất: bạn cần một huy hiệu nằm chồng lên ảnh. Cặp widget nào phù hợp?
A. Stack và Positioned
B. Row và Navigator
C. Column và Future
D. Scaffold và ChangeNotifier
**Đáp án: A.** Stack chồng child; Positioned định vị child trong Stack.

### Câu 181. Khi debug ứng dụng, nên chọn cách nào: bạn cần một huy hiệu nằm chồng lên ảnh. Cặp widget nào phù hợp?
A. Stack và Positioned
B. Row và Navigator
C. Column và Future
D. Scaffold và ChangeNotifier
**Đáp án: A.** Stack chồng child; Positioned định vị child trong Stack.

### Câu 182. Trong quy trình phát triển, đâu là lựa chọn chính xác: bạn cần một huy hiệu nằm chồng lên ảnh. Cặp widget nào phù hợp?
A. Stack và Positioned
B. Row và Navigator
C. Column và Future
D. Scaffold và ChangeNotifier
**Đáp án: A.** Stack chồng child; Positioned định vị child trong Stack.

### Câu 183. Nếu cần chọn giải pháp phù hợp, cách làm nào phù hợp: bạn cần một huy hiệu nằm chồng lên ảnh. Cặp widget nào phù hợp?
A. Stack và Positioned
B. Row và Navigator
C. Column và Future
D. Scaffold và ChangeNotifier
**Đáp án: A.** Stack chồng child; Positioned định vị child trong Stack.

### Câu 184. Khi tối ưu quy trình làm việc, nên áp dụng điều gì: bạn cần một huy hiệu nằm chồng lên ảnh. Cặp widget nào phù hợp?
A. Stack và Positioned
B. Row và Navigator
C. Column và Future
D. Scaffold và ChangeNotifier
**Đáp án: A.** Stack chồng child; Positioned định vị child trong Stack.

### Câu 185. Trong một dự án mới, đội phát triển cần quyết định: một nút cần lấp phần không gian còn lại trong Row. Nên bọc bằng gì?
A. Expanded
B. Icon
C. Divider
D. MaterialApp
**Đáp án: A.** Expanded chia phần không gian còn lại theo flex.

### Câu 186. Khi review code, lập trình viên nên ưu tiên: một nút cần lấp phần không gian còn lại trong Row. Nên bọc bằng gì?
A. Expanded
B. Icon
C. Divider
D. MaterialApp
**Đáp án: A.** Expanded chia phần không gian còn lại theo flex.

### Câu 187. Trong tình huống thực tế, câu hỏi cần giải quyết là: một nút cần lấp phần không gian còn lại trong Row. Nên bọc bằng gì?
A. Expanded
B. Icon
C. Divider
D. MaterialApp
**Đáp án: A.** Expanded chia phần không gian còn lại theo flex.

### Câu 188. Để xử lý yêu cầu này, phương án nào hợp lý nhất: một nút cần lấp phần không gian còn lại trong Row. Nên bọc bằng gì?
A. Expanded
B. Icon
C. Divider
D. MaterialApp
**Đáp án: A.** Expanded chia phần không gian còn lại theo flex.

### Câu 189. Khi debug ứng dụng, nên chọn cách nào: một nút cần lấp phần không gian còn lại trong Row. Nên bọc bằng gì?
A. Expanded
B. Icon
C. Divider
D. MaterialApp
**Đáp án: A.** Expanded chia phần không gian còn lại theo flex.

### Câu 190. Trong quy trình phát triển, đâu là lựa chọn chính xác: một nút cần lấp phần không gian còn lại trong Row. Nên bọc bằng gì?
A. Expanded
B. Icon
C. Divider
D. MaterialApp
**Đáp án: A.** Expanded chia phần không gian còn lại theo flex.

### Câu 191. Nếu cần chọn giải pháp phù hợp, cách làm nào phù hợp: một nút cần lấp phần không gian còn lại trong Row. Nên bọc bằng gì?
A. Expanded
B. Icon
C. Divider
D. MaterialApp
**Đáp án: A.** Expanded chia phần không gian còn lại theo flex.

### Câu 192. Khi tối ưu quy trình làm việc, nên áp dụng điều gì: một nút cần lấp phần không gian còn lại trong Row. Nên bọc bằng gì?
A. Expanded
B. Icon
C. Divider
D. MaterialApp
**Đáp án: A.** Expanded chia phần không gian còn lại theo flex.

### Câu 193. Trong một dự án mới, đội phát triển cần quyết định: bạn muốn giao diện dùng chung màu sắc và kiểu chữ. Nên cấu hình gì?
A. ThemeData
B. TextEditingController
C. Navigator.pop
D. Future
**Đáp án: A.** ThemeData định nghĩa phong cách dùng chung.

### Câu 194. Khi review code, lập trình viên nên ưu tiên: bạn muốn giao diện dùng chung màu sắc và kiểu chữ. Nên cấu hình gì?
A. ThemeData
B. TextEditingController
C. Navigator.pop
D. Future
**Đáp án: A.** ThemeData định nghĩa phong cách dùng chung.

### Câu 195. Trong tình huống thực tế, câu hỏi cần giải quyết là: bạn muốn giao diện dùng chung màu sắc và kiểu chữ. Nên cấu hình gì?
A. ThemeData
B. TextEditingController
C. Navigator.pop
D. Future
**Đáp án: A.** ThemeData định nghĩa phong cách dùng chung.

### Câu 196. Để xử lý yêu cầu này, phương án nào hợp lý nhất: bạn muốn giao diện dùng chung màu sắc và kiểu chữ. Nên cấu hình gì?
A. ThemeData
B. TextEditingController
C. Navigator.pop
D. Future
**Đáp án: A.** ThemeData định nghĩa phong cách dùng chung.

### Câu 197. Khi debug ứng dụng, nên chọn cách nào: bạn muốn giao diện dùng chung màu sắc và kiểu chữ. Nên cấu hình gì?
A. ThemeData
B. TextEditingController
C. Navigator.pop
D. Future
**Đáp án: A.** ThemeData định nghĩa phong cách dùng chung.

### Câu 198. Trong quy trình phát triển, đâu là lựa chọn chính xác: bạn muốn giao diện dùng chung màu sắc và kiểu chữ. Nên cấu hình gì?
A. ThemeData
B. TextEditingController
C. Navigator.pop
D. Future
**Đáp án: A.** ThemeData định nghĩa phong cách dùng chung.

### Câu 199. Nếu cần chọn giải pháp phù hợp, cách làm nào phù hợp: bạn muốn giao diện dùng chung màu sắc và kiểu chữ. Nên cấu hình gì?
A. ThemeData
B. TextEditingController
C. Navigator.pop
D. Future
**Đáp án: A.** ThemeData định nghĩa phong cách dùng chung.

### Câu 200. Khi tối ưu quy trình làm việc, nên áp dụng điều gì: bạn muốn giao diện dùng chung màu sắc và kiểu chữ. Nên cấu hình gì?
A. ThemeData
B. TextEditingController
C. Navigator.pop
D. Future
**Đáp án: A.** ThemeData định nghĩa phong cách dùng chung.

## Đợt 3 — State, tương tác, điều hướng và dữ liệu

### Câu 201. `setState()` thường được gọi để làm gì?
A. Thông báo State thay đổi để Flutter lên lịch build lại
B. Lưu state vĩnh viễn vào database
C. Điều hướng sang URL
D. Tạo isolate
**Đáp án: A.** setState báo framework rằng trạng thái của State đã thay đổi.

### Câu 202. Có nên gọi `setState` sau khi State đã dispose không?
A. Có, luôn luôn
B. Không; cần kiểm tra vòng đời và tránh cập nhật State đã dispose
C. Chỉ khi chạy release
D. Chỉ khi dùng Row
**Đáp án: B.** Cập nhật State sau dispose có thể gây lỗi.

### Câu 203. `initState()` thường được dùng cho mục đích nào?
A. Khởi tạo State một lần khi State được tạo
B. Chạy mỗi frame
C. Thay thế build
D. Xóa widget cha
**Đáp án: A.** initState là lifecycle hook để khởi tạo tài nguyên/trạng thái.

### Câu 204. `dispose()` thường dùng để làm gì?
A. Giải phóng controller, listener hoặc tài nguyên khi State bị loại bỏ
B. Tạo widget mới
C. Tải package
D. Định tuyến deep link
**Đáp án: A.** dispose dọn dẹp tài nguyên và listener.

### Câu 205. Ephemeral state thường là gì?
A. Trạng thái cục bộ, ngắn hạn của một phần UI
B. Toàn bộ dữ liệu dùng chung toàn ứng dụng
C. Chỉ dữ liệu trên server
D. Một loại widget
**Đáp án: A.** Ví dụ: tab đang chọn hoặc trạng thái mở/đóng của một control.

### Câu 206. App state thường khác ephemeral state ở điểm nào?
A. Có thể cần chia sẻ giữa nhiều màn hình hoặc tồn tại lâu hơn
B. Không bao giờ thay đổi
C. Chỉ chứa màu sắc
D. Không thể kiểm thử
**Đáp án: A.** App state có phạm vi chia sẻ rộng hơn giữa các phần ứng dụng.

### Câu 207. `ChangeNotifier` cung cấp cơ chế nào?
A. Thông báo cho listener khi dữ liệu thay đổi
B. Mã hóa APK
C. Tạo animation tự động
D. Gửi push notification
**Đáp án: A.** ChangeNotifier cho phép các listener được thông báo khi notifyListeners được gọi.

### Câu 208. Vai trò của `ListenableBuilder` là gì?
A. Xây dựng lại một phần UI khi Listenable thông báo thay đổi
B. Tạo bảng SQL
C. Định nghĩa route server
D. Đóng ứng dụng
**Đáp án: A.** ListenableBuilder lắng nghe Listenable và rebuild builder.

### Câu 209. Widget `FutureBuilder` phù hợp với trường hợp nào?
A. Xây dựng UI dựa trên kết quả của một Future
B. Tạo danh sách vô hạn bắt buộc
C. Đọc file pubspec
D. Quản lý animation theo frame
**Đáp án: A.** FutureBuilder nhận Future và cập nhật UI theo trạng thái async.

### Câu 210. Widget `StreamBuilder` phù hợp khi nào?
A. UI cần phản ứng với các sự kiện từ Stream
B. Chỉ cần văn bản tĩnh
C. Tạo route không tên
D. Căn giữa widget
**Đáp án: A.** StreamBuilder xây dựng UI theo các snapshot của Stream.

### Câu 211. `Navigator.push()` thường thực hiện điều gì?
A. Đẩy route mới lên stack điều hướng
B. Xóa toàn bộ widget tree
C. Gửi POST request
D. Lưu token vào secure storage
**Đáp án: A.** push đưa route mới lên trên stack.

### Câu 212. `Navigator.pop()` thường thực hiện điều gì?
A. Loại route hiện tại khỏi stack
B. Tạo route mới
C. Tải lại toàn bộ app
D. Cài package
**Đáp án: A.** pop quay lại route trước nếu có thể.

### Câu 213. Khi ứng dụng cần deep link phức tạp hoặc đồng bộ URL web, tài liệu khuyên cân nhắc gì?
A. Router
B. Chỉ dùng setState
C. Container
D. ThemeData
**Đáp án: A.** Router phù hợp yêu cầu routing/deep linking phức tạp hơn.

### Câu 214. `MaterialApp` thường đóng vai trò gì?
A. Widget gốc cấu hình ứng dụng Material, theme và routing
B. Một widget chỉ dành cho ảnh
C. Cơ sở dữ liệu cục bộ
D. Trình kiểm thử
**Đáp án: A.** MaterialApp cung cấp các cấu hình cấp ứng dụng phổ biến.

### Câu 215. `ThemeData` dùng để làm gì?
A. Cấu hình phong cách/theme dùng chung
B. Lưu dữ liệu API
C. Tạo route
D. Kiểm tra quyền hệ thống
**Đáp án: A.** ThemeData định nghĩa màu sắc, kiểu chữ và nhiều thuộc tính giao diện.

### Câu 216. `MediaQuery` thường giúp lấy thông tin nào?
A. Kích thước màn hình, insets và các thuộc tính môi trường hiển thị
B. Thông tin đăng nhập server
C. Phiên bản database
D. Danh sách package
**Đáp án: A.** MediaQuery cung cấp dữ liệu về môi trường hiển thị hiện tại.

### Câu 217. Thiết kế responsive nhằm mục đích gì?
A. Thích ứng với kích thước và không gian hiển thị khác nhau
B. Chỉ hỗ trợ một độ phân giải
C. Tăng kích thước APK
D. Thay thế kiểm thử
**Đáp án: A.** Responsive/adaptive design giúp UI phù hợp các thiết bị và cửa sổ khác nhau.

### Câu 218. `GestureDetector` có thể được dùng để làm gì?
A. Phát hiện các thao tác như tap, drag hoặc long press
B. Lưu dữ liệu vĩnh viễn
C. Tạo model JSON tự động
D. Build ứng dụng
**Đáp án: A.** GestureDetector nhận diện nhiều loại cử chỉ.

### Câu 219. `TextField` thường dùng để làm gì?
A. Nhận văn bản nhập từ người dùng
B. Hiển thị route stack
C. Định nghĩa animation
D. Đóng database
**Đáp án: A.** TextField là thành phần nhập văn bản.

### Câu 220. `TextEditingController` có tác dụng gì?
A. Đọc/điều khiển nội dung và selection của TextField
B. Tạo theme
C. Tự động xác thực server
D. Căn chỉnh Row
**Đáp án: A.** Controller cho phép thao tác với giá trị trường nhập.

### Câu 221. Trong một dự án mới, đội phát triển cần quyết định: một bộ đếm thay đổi sau mỗi lần bấm nút trong StatefulWidget. Cách thông báo cập nhật thông thường là gì?
A. Gọi setState khi giá trị thay đổi
B. Gọi dispose
C. Dùng flutter doctor
D. Sửa pubspec mỗi lần
**Đáp án: A.** setState yêu cầu framework xây dựng lại UI dựa trên State mới.

### Câu 222. Khi review code, lập trình viên nên ưu tiên: một bộ đếm thay đổi sau mỗi lần bấm nút trong StatefulWidget. Cách thông báo cập nhật thông thường là gì?
A. Gọi setState khi giá trị thay đổi
B. Gọi dispose
C. Dùng flutter doctor
D. Sửa pubspec mỗi lần
**Đáp án: A.** setState yêu cầu framework xây dựng lại UI dựa trên State mới.

### Câu 223. Trong tình huống thực tế, câu hỏi cần giải quyết là: một bộ đếm thay đổi sau mỗi lần bấm nút trong StatefulWidget. Cách thông báo cập nhật thông thường là gì?
A. Gọi setState khi giá trị thay đổi
B. Gọi dispose
C. Dùng flutter doctor
D. Sửa pubspec mỗi lần
**Đáp án: A.** setState yêu cầu framework xây dựng lại UI dựa trên State mới.

### Câu 224. Để xử lý yêu cầu này, phương án nào hợp lý nhất: một bộ đếm thay đổi sau mỗi lần bấm nút trong StatefulWidget. Cách thông báo cập nhật thông thường là gì?
A. Gọi setState khi giá trị thay đổi
B. Gọi dispose
C. Dùng flutter doctor
D. Sửa pubspec mỗi lần
**Đáp án: A.** setState yêu cầu framework xây dựng lại UI dựa trên State mới.

### Câu 225. Khi debug ứng dụng, nên chọn cách nào: một bộ đếm thay đổi sau mỗi lần bấm nút trong StatefulWidget. Cách thông báo cập nhật thông thường là gì?
A. Gọi setState khi giá trị thay đổi
B. Gọi dispose
C. Dùng flutter doctor
D. Sửa pubspec mỗi lần
**Đáp án: A.** setState yêu cầu framework xây dựng lại UI dựa trên State mới.

### Câu 226. Trong quy trình phát triển, đâu là lựa chọn chính xác: một bộ đếm thay đổi sau mỗi lần bấm nút trong StatefulWidget. Cách thông báo cập nhật thông thường là gì?
A. Gọi setState khi giá trị thay đổi
B. Gọi dispose
C. Dùng flutter doctor
D. Sửa pubspec mỗi lần
**Đáp án: A.** setState yêu cầu framework xây dựng lại UI dựa trên State mới.

### Câu 227. Nếu cần chọn giải pháp phù hợp, cách làm nào phù hợp: một bộ đếm thay đổi sau mỗi lần bấm nút trong StatefulWidget. Cách thông báo cập nhật thông thường là gì?
A. Gọi setState khi giá trị thay đổi
B. Gọi dispose
C. Dùng flutter doctor
D. Sửa pubspec mỗi lần
**Đáp án: A.** setState yêu cầu framework xây dựng lại UI dựa trên State mới.

### Câu 228. Khi tối ưu quy trình làm việc, nên áp dụng điều gì: một bộ đếm thay đổi sau mỗi lần bấm nút trong StatefulWidget. Cách thông báo cập nhật thông thường là gì?
A. Gọi setState khi giá trị thay đổi
B. Gọi dispose
C. Dùng flutter doctor
D. Sửa pubspec mỗi lần
**Đáp án: A.** setState yêu cầu framework xây dựng lại UI dựa trên State mới.

### Câu 229. Trong một dự án mới, đội phát triển cần quyết định: bạn cần giải phóng TextEditingController khi màn hình bị loại bỏ. Lifecycle method nào phù hợp?
A. dispose
B. build
C. main
D. didPushOnly
**Đáp án: A.** dispose dùng để giải phóng tài nguyên.

### Câu 230. Khi review code, lập trình viên nên ưu tiên: bạn cần giải phóng TextEditingController khi màn hình bị loại bỏ. Lifecycle method nào phù hợp?
A. dispose
B. build
C. main
D. didPushOnly
**Đáp án: A.** dispose dùng để giải phóng tài nguyên.

### Câu 231. Trong tình huống thực tế, câu hỏi cần giải quyết là: bạn cần giải phóng TextEditingController khi màn hình bị loại bỏ. Lifecycle method nào phù hợp?
A. dispose
B. build
C. main
D. didPushOnly
**Đáp án: A.** dispose dùng để giải phóng tài nguyên.

### Câu 232. Để xử lý yêu cầu này, phương án nào hợp lý nhất: bạn cần giải phóng TextEditingController khi màn hình bị loại bỏ. Lifecycle method nào phù hợp?
A. dispose
B. build
C. main
D. didPushOnly
**Đáp án: A.** dispose dùng để giải phóng tài nguyên.

### Câu 233. Khi debug ứng dụng, nên chọn cách nào: bạn cần giải phóng TextEditingController khi màn hình bị loại bỏ. Lifecycle method nào phù hợp?
A. dispose
B. build
C. main
D. didPushOnly
**Đáp án: A.** dispose dùng để giải phóng tài nguyên.

### Câu 234. Trong quy trình phát triển, đâu là lựa chọn chính xác: bạn cần giải phóng TextEditingController khi màn hình bị loại bỏ. Lifecycle method nào phù hợp?
A. dispose
B. build
C. main
D. didPushOnly
**Đáp án: A.** dispose dùng để giải phóng tài nguyên.

### Câu 235. Nếu cần chọn giải pháp phù hợp, cách làm nào phù hợp: bạn cần giải phóng TextEditingController khi màn hình bị loại bỏ. Lifecycle method nào phù hợp?
A. dispose
B. build
C. main
D. didPushOnly
**Đáp án: A.** dispose dùng để giải phóng tài nguyên.

### Câu 236. Khi tối ưu quy trình làm việc, nên áp dụng điều gì: bạn cần giải phóng TextEditingController khi màn hình bị loại bỏ. Lifecycle method nào phù hợp?
A. dispose
B. build
C. main
D. didPushOnly
**Đáp án: A.** dispose dùng để giải phóng tài nguyên.

### Câu 237. Trong một dự án mới, đội phát triển cần quyết định: bạn muốn khởi tạo controller một lần khi State được tạo. Nên dùng gì?
A. initState
B. build mỗi frame
C. Navigator.pop
D. ThemeData
**Đáp án: A.** initState chạy khi State được tạo.

### Câu 238. Khi review code, lập trình viên nên ưu tiên: bạn muốn khởi tạo controller một lần khi State được tạo. Nên dùng gì?
A. initState
B. build mỗi frame
C. Navigator.pop
D. ThemeData
**Đáp án: A.** initState chạy khi State được tạo.

### Câu 239. Trong tình huống thực tế, câu hỏi cần giải quyết là: bạn muốn khởi tạo controller một lần khi State được tạo. Nên dùng gì?
A. initState
B. build mỗi frame
C. Navigator.pop
D. ThemeData
**Đáp án: A.** initState chạy khi State được tạo.

### Câu 240. Để xử lý yêu cầu này, phương án nào hợp lý nhất: bạn muốn khởi tạo controller một lần khi State được tạo. Nên dùng gì?
A. initState
B. build mỗi frame
C. Navigator.pop
D. ThemeData
**Đáp án: A.** initState chạy khi State được tạo.

### Câu 241. Khi debug ứng dụng, nên chọn cách nào: bạn muốn khởi tạo controller một lần khi State được tạo. Nên dùng gì?
A. initState
B. build mỗi frame
C. Navigator.pop
D. ThemeData
**Đáp án: A.** initState chạy khi State được tạo.

### Câu 242. Trong quy trình phát triển, đâu là lựa chọn chính xác: bạn muốn khởi tạo controller một lần khi State được tạo. Nên dùng gì?
A. initState
B. build mỗi frame
C. Navigator.pop
D. ThemeData
**Đáp án: A.** initState chạy khi State được tạo.

### Câu 243. Nếu cần chọn giải pháp phù hợp, cách làm nào phù hợp: bạn muốn khởi tạo controller một lần khi State được tạo. Nên dùng gì?
A. initState
B. build mỗi frame
C. Navigator.pop
D. ThemeData
**Đáp án: A.** initState chạy khi State được tạo.

### Câu 244. Khi tối ưu quy trình làm việc, nên áp dụng điều gì: bạn muốn khởi tạo controller một lần khi State được tạo. Nên dùng gì?
A. initState
B. build mỗi frame
C. Navigator.pop
D. ThemeData
**Đáp án: A.** initState chạy khi State được tạo.

### Câu 245. Trong một dự án mới, đội phát triển cần quyết định: bạn muốn chuyển từ màn hình danh sách sang chi tiết bằng Navigator. Phương thức nào thường dùng?
A. push
B. pop
C. dispose
D. notifyListeners
**Đáp án: A.** push đưa route mới lên stack.

### Câu 246. Khi review code, lập trình viên nên ưu tiên: bạn muốn chuyển từ màn hình danh sách sang chi tiết bằng Navigator. Phương thức nào thường dùng?
A. push
B. pop
C. dispose
D. notifyListeners
**Đáp án: A.** push đưa route mới lên stack.

### Câu 247. Trong tình huống thực tế, câu hỏi cần giải quyết là: bạn muốn chuyển từ màn hình danh sách sang chi tiết bằng Navigator. Phương thức nào thường dùng?
A. push
B. pop
C. dispose
D. notifyListeners
**Đáp án: A.** push đưa route mới lên stack.

### Câu 248. Để xử lý yêu cầu này, phương án nào hợp lý nhất: bạn muốn chuyển từ màn hình danh sách sang chi tiết bằng Navigator. Phương thức nào thường dùng?
A. push
B. pop
C. dispose
D. notifyListeners
**Đáp án: A.** push đưa route mới lên stack.

### Câu 249. Khi debug ứng dụng, nên chọn cách nào: bạn muốn chuyển từ màn hình danh sách sang chi tiết bằng Navigator. Phương thức nào thường dùng?
A. push
B. pop
C. dispose
D. notifyListeners
**Đáp án: A.** push đưa route mới lên stack.

### Câu 250. Trong quy trình phát triển, đâu là lựa chọn chính xác: bạn muốn chuyển từ màn hình danh sách sang chi tiết bằng Navigator. Phương thức nào thường dùng?
A. push
B. pop
C. dispose
D. notifyListeners
**Đáp án: A.** push đưa route mới lên stack.

### Câu 251. Nếu cần chọn giải pháp phù hợp, cách làm nào phù hợp: bạn muốn chuyển từ màn hình danh sách sang chi tiết bằng Navigator. Phương thức nào thường dùng?
A. push
B. pop
C. dispose
D. notifyListeners
**Đáp án: A.** push đưa route mới lên stack.

### Câu 252. Khi tối ưu quy trình làm việc, nên áp dụng điều gì: bạn muốn chuyển từ màn hình danh sách sang chi tiết bằng Navigator. Phương thức nào thường dùng?
A. push
B. pop
C. dispose
D. notifyListeners
**Đáp án: A.** push đưa route mới lên stack.

### Câu 253. Trong một dự án mới, đội phát triển cần quyết định: bạn muốn quay lại màn hình trước. Phương thức nào thường dùng?
A. pop
B. push
C. initState
D. build
**Đáp án: A.** pop loại route hiện tại khỏi stack.

### Câu 254. Khi review code, lập trình viên nên ưu tiên: bạn muốn quay lại màn hình trước. Phương thức nào thường dùng?
A. pop
B. push
C. initState
D. build
**Đáp án: A.** pop loại route hiện tại khỏi stack.

### Câu 255. Trong tình huống thực tế, câu hỏi cần giải quyết là: bạn muốn quay lại màn hình trước. Phương thức nào thường dùng?
A. pop
B. push
C. initState
D. build
**Đáp án: A.** pop loại route hiện tại khỏi stack.

### Câu 256. Để xử lý yêu cầu này, phương án nào hợp lý nhất: bạn muốn quay lại màn hình trước. Phương thức nào thường dùng?
A. pop
B. push
C. initState
D. build
**Đáp án: A.** pop loại route hiện tại khỏi stack.

### Câu 257. Khi debug ứng dụng, nên chọn cách nào: bạn muốn quay lại màn hình trước. Phương thức nào thường dùng?
A. pop
B. push
C. initState
D. build
**Đáp án: A.** pop loại route hiện tại khỏi stack.

### Câu 258. Trong quy trình phát triển, đâu là lựa chọn chính xác: bạn muốn quay lại màn hình trước. Phương thức nào thường dùng?
A. pop
B. push
C. initState
D. build
**Đáp án: A.** pop loại route hiện tại khỏi stack.

### Câu 259. Nếu cần chọn giải pháp phù hợp, cách làm nào phù hợp: bạn muốn quay lại màn hình trước. Phương thức nào thường dùng?
A. pop
B. push
C. initState
D. build
**Đáp án: A.** pop loại route hiện tại khỏi stack.

### Câu 260. Khi tối ưu quy trình làm việc, nên áp dụng điều gì: bạn muốn quay lại màn hình trước. Phương thức nào thường dùng?
A. pop
B. push
C. initState
D. build
**Đáp án: A.** pop loại route hiện tại khỏi stack.

### Câu 261. Trong một dự án mới, đội phát triển cần quyết định: một ứng dụng web cần deep link và URL đồng bộ phức tạp. Nên cân nhắc gì?
A. Router
B. Chỉ Container
C. TextField
D. dart format
**Đáp án: A.** Router phù hợp yêu cầu routing/deep link phức tạp.

### Câu 262. Khi review code, lập trình viên nên ưu tiên: một ứng dụng web cần deep link và URL đồng bộ phức tạp. Nên cân nhắc gì?
A. Router
B. Chỉ Container
C. TextField
D. dart format
**Đáp án: A.** Router phù hợp yêu cầu routing/deep link phức tạp.

### Câu 263. Trong tình huống thực tế, câu hỏi cần giải quyết là: một ứng dụng web cần deep link và URL đồng bộ phức tạp. Nên cân nhắc gì?
A. Router
B. Chỉ Container
C. TextField
D. dart format
**Đáp án: A.** Router phù hợp yêu cầu routing/deep link phức tạp.

### Câu 264. Để xử lý yêu cầu này, phương án nào hợp lý nhất: một ứng dụng web cần deep link và URL đồng bộ phức tạp. Nên cân nhắc gì?
A. Router
B. Chỉ Container
C. TextField
D. dart format
**Đáp án: A.** Router phù hợp yêu cầu routing/deep link phức tạp.

### Câu 265. Khi debug ứng dụng, nên chọn cách nào: một ứng dụng web cần deep link và URL đồng bộ phức tạp. Nên cân nhắc gì?
A. Router
B. Chỉ Container
C. TextField
D. dart format
**Đáp án: A.** Router phù hợp yêu cầu routing/deep link phức tạp.

### Câu 266. Trong quy trình phát triển, đâu là lựa chọn chính xác: một ứng dụng web cần deep link và URL đồng bộ phức tạp. Nên cân nhắc gì?
A. Router
B. Chỉ Container
C. TextField
D. dart format
**Đáp án: A.** Router phù hợp yêu cầu routing/deep link phức tạp.

### Câu 267. Nếu cần chọn giải pháp phù hợp, cách làm nào phù hợp: một ứng dụng web cần deep link và URL đồng bộ phức tạp. Nên cân nhắc gì?
A. Router
B. Chỉ Container
C. TextField
D. dart format
**Đáp án: A.** Router phù hợp yêu cầu routing/deep link phức tạp.

### Câu 268. Khi tối ưu quy trình làm việc, nên áp dụng điều gì: một ứng dụng web cần deep link và URL đồng bộ phức tạp. Nên cân nhắc gì?
A. Router
B. Chỉ Container
C. TextField
D. dart format
**Đáp án: A.** Router phù hợp yêu cầu routing/deep link phức tạp.

### Câu 269. Trong một dự án mới, đội phát triển cần quyết định: bạn cần UI cập nhật khi một ChangeNotifier thông báo thay đổi. Widget nào phù hợp?
A. ListenableBuilder
B. AppBar
C. Positioned
D. Padding
**Đáp án: A.** ListenableBuilder phản ứng với thay đổi của Listenable.

### Câu 270. Khi review code, lập trình viên nên ưu tiên: bạn cần UI cập nhật khi một ChangeNotifier thông báo thay đổi. Widget nào phù hợp?
A. ListenableBuilder
B. AppBar
C. Positioned
D. Padding
**Đáp án: A.** ListenableBuilder phản ứng với thay đổi của Listenable.

### Câu 271. Trong tình huống thực tế, câu hỏi cần giải quyết là: bạn cần UI cập nhật khi một ChangeNotifier thông báo thay đổi. Widget nào phù hợp?
A. ListenableBuilder
B. AppBar
C. Positioned
D. Padding
**Đáp án: A.** ListenableBuilder phản ứng với thay đổi của Listenable.

### Câu 272. Để xử lý yêu cầu này, phương án nào hợp lý nhất: bạn cần UI cập nhật khi một ChangeNotifier thông báo thay đổi. Widget nào phù hợp?
A. ListenableBuilder
B. AppBar
C. Positioned
D. Padding
**Đáp án: A.** ListenableBuilder phản ứng với thay đổi của Listenable.

### Câu 273. Khi debug ứng dụng, nên chọn cách nào: bạn cần UI cập nhật khi một ChangeNotifier thông báo thay đổi. Widget nào phù hợp?
A. ListenableBuilder
B. AppBar
C. Positioned
D. Padding
**Đáp án: A.** ListenableBuilder phản ứng với thay đổi của Listenable.

### Câu 274. Trong quy trình phát triển, đâu là lựa chọn chính xác: bạn cần UI cập nhật khi một ChangeNotifier thông báo thay đổi. Widget nào phù hợp?
A. ListenableBuilder
B. AppBar
C. Positioned
D. Padding
**Đáp án: A.** ListenableBuilder phản ứng với thay đổi của Listenable.

### Câu 275. Nếu cần chọn giải pháp phù hợp, cách làm nào phù hợp: bạn cần UI cập nhật khi một ChangeNotifier thông báo thay đổi. Widget nào phù hợp?
A. ListenableBuilder
B. AppBar
C. Positioned
D. Padding
**Đáp án: A.** ListenableBuilder phản ứng với thay đổi của Listenable.

### Câu 276. Khi tối ưu quy trình làm việc, nên áp dụng điều gì: bạn cần UI cập nhật khi một ChangeNotifier thông báo thay đổi. Widget nào phù hợp?
A. ListenableBuilder
B. AppBar
C. Positioned
D. Padding
**Đáp án: A.** ListenableBuilder phản ứng với thay đổi của Listenable.

### Câu 277. Trong một dự án mới, đội phát triển cần quyết định: bạn cần biểu diễn dữ liệu trả về từ một Future. Widget nào phù hợp?
A. FutureBuilder
B. Row
C. Icon
D. ScaffoldMessenger
**Đáp án: A.** FutureBuilder nhận Future và cung cấp snapshot cho UI.

### Câu 278. Khi review code, lập trình viên nên ưu tiên: bạn cần biểu diễn dữ liệu trả về từ một Future. Widget nào phù hợp?
A. FutureBuilder
B. Row
C. Icon
D. ScaffoldMessenger
**Đáp án: A.** FutureBuilder nhận Future và cung cấp snapshot cho UI.

### Câu 279. Trong tình huống thực tế, câu hỏi cần giải quyết là: bạn cần biểu diễn dữ liệu trả về từ một Future. Widget nào phù hợp?
A. FutureBuilder
B. Row
C. Icon
D. ScaffoldMessenger
**Đáp án: A.** FutureBuilder nhận Future và cung cấp snapshot cho UI.

### Câu 280. Để xử lý yêu cầu này, phương án nào hợp lý nhất: bạn cần biểu diễn dữ liệu trả về từ một Future. Widget nào phù hợp?
A. FutureBuilder
B. Row
C. Icon
D. ScaffoldMessenger
**Đáp án: A.** FutureBuilder nhận Future và cung cấp snapshot cho UI.

### Câu 281. Khi debug ứng dụng, nên chọn cách nào: bạn cần biểu diễn dữ liệu trả về từ một Future. Widget nào phù hợp?
A. FutureBuilder
B. Row
C. Icon
D. ScaffoldMessenger
**Đáp án: A.** FutureBuilder nhận Future và cung cấp snapshot cho UI.

### Câu 282. Trong quy trình phát triển, đâu là lựa chọn chính xác: bạn cần biểu diễn dữ liệu trả về từ một Future. Widget nào phù hợp?
A. FutureBuilder
B. Row
C. Icon
D. ScaffoldMessenger
**Đáp án: A.** FutureBuilder nhận Future và cung cấp snapshot cho UI.

### Câu 283. Nếu cần chọn giải pháp phù hợp, cách làm nào phù hợp: bạn cần biểu diễn dữ liệu trả về từ một Future. Widget nào phù hợp?
A. FutureBuilder
B. Row
C. Icon
D. ScaffoldMessenger
**Đáp án: A.** FutureBuilder nhận Future và cung cấp snapshot cho UI.

### Câu 284. Khi tối ưu quy trình làm việc, nên áp dụng điều gì: bạn cần biểu diễn dữ liệu trả về từ một Future. Widget nào phù hợp?
A. FutureBuilder
B. Row
C. Icon
D. ScaffoldMessenger
**Đáp án: A.** FutureBuilder nhận Future và cung cấp snapshot cho UI.

### Câu 285. Trong một dự án mới, đội phát triển cần quyết định: một luồng dữ liệu phát ra nhiều sự kiện theo thời gian. Widget nào có thể phản ứng với Stream?
A. StreamBuilder
B. StatelessWidget không state
C. Divider
D. Center
**Đáp án: A.** StreamBuilder cập nhật UI theo các snapshot từ Stream.

### Câu 286. Khi review code, lập trình viên nên ưu tiên: một luồng dữ liệu phát ra nhiều sự kiện theo thời gian. Widget nào có thể phản ứng với Stream?
A. StreamBuilder
B. StatelessWidget không state
C. Divider
D. Center
**Đáp án: A.** StreamBuilder cập nhật UI theo các snapshot từ Stream.

### Câu 287. Trong tình huống thực tế, câu hỏi cần giải quyết là: một luồng dữ liệu phát ra nhiều sự kiện theo thời gian. Widget nào có thể phản ứng với Stream?
A. StreamBuilder
B. StatelessWidget không state
C. Divider
D. Center
**Đáp án: A.** StreamBuilder cập nhật UI theo các snapshot từ Stream.

### Câu 288. Để xử lý yêu cầu này, phương án nào hợp lý nhất: một luồng dữ liệu phát ra nhiều sự kiện theo thời gian. Widget nào có thể phản ứng với Stream?
A. StreamBuilder
B. StatelessWidget không state
C. Divider
D. Center
**Đáp án: A.** StreamBuilder cập nhật UI theo các snapshot từ Stream.

### Câu 289. Khi debug ứng dụng, nên chọn cách nào: một luồng dữ liệu phát ra nhiều sự kiện theo thời gian. Widget nào có thể phản ứng với Stream?
A. StreamBuilder
B. StatelessWidget không state
C. Divider
D. Center
**Đáp án: A.** StreamBuilder cập nhật UI theo các snapshot từ Stream.

### Câu 290. Trong quy trình phát triển, đâu là lựa chọn chính xác: một luồng dữ liệu phát ra nhiều sự kiện theo thời gian. Widget nào có thể phản ứng với Stream?
A. StreamBuilder
B. StatelessWidget không state
C. Divider
D. Center
**Đáp án: A.** StreamBuilder cập nhật UI theo các snapshot từ Stream.

### Câu 291. Nếu cần chọn giải pháp phù hợp, cách làm nào phù hợp: một luồng dữ liệu phát ra nhiều sự kiện theo thời gian. Widget nào có thể phản ứng với Stream?
A. StreamBuilder
B. StatelessWidget không state
C. Divider
D. Center
**Đáp án: A.** StreamBuilder cập nhật UI theo các snapshot từ Stream.

### Câu 292. Khi tối ưu quy trình làm việc, nên áp dụng điều gì: một luồng dữ liệu phát ra nhiều sự kiện theo thời gian. Widget nào có thể phản ứng với Stream?
A. StreamBuilder
B. StatelessWidget không state
C. Divider
D. Center
**Đáp án: A.** StreamBuilder cập nhật UI theo các snapshot từ Stream.

### Câu 293. Trong một dự án mới, đội phát triển cần quyết định: một trạng thái chỉ dùng để bật/tắt một menu cục bộ. Đây thường là loại state nào?
A. Ephemeral state
B. App state dùng chung bắt buộc
C. Native platform state
D. Build artifact
**Đáp án: A.** Trạng thái cục bộ ngắn hạn thường là ephemeral state.

### Câu 294. Khi review code, lập trình viên nên ưu tiên: một trạng thái chỉ dùng để bật/tắt một menu cục bộ. Đây thường là loại state nào?
A. Ephemeral state
B. App state dùng chung bắt buộc
C. Native platform state
D. Build artifact
**Đáp án: A.** Trạng thái cục bộ ngắn hạn thường là ephemeral state.

### Câu 295. Trong tình huống thực tế, câu hỏi cần giải quyết là: một trạng thái chỉ dùng để bật/tắt một menu cục bộ. Đây thường là loại state nào?
A. Ephemeral state
B. App state dùng chung bắt buộc
C. Native platform state
D. Build artifact
**Đáp án: A.** Trạng thái cục bộ ngắn hạn thường là ephemeral state.

### Câu 296. Để xử lý yêu cầu này, phương án nào hợp lý nhất: một trạng thái chỉ dùng để bật/tắt một menu cục bộ. Đây thường là loại state nào?
A. Ephemeral state
B. App state dùng chung bắt buộc
C. Native platform state
D. Build artifact
**Đáp án: A.** Trạng thái cục bộ ngắn hạn thường là ephemeral state.

### Câu 297. Khi debug ứng dụng, nên chọn cách nào: một trạng thái chỉ dùng để bật/tắt một menu cục bộ. Đây thường là loại state nào?
A. Ephemeral state
B. App state dùng chung bắt buộc
C. Native platform state
D. Build artifact
**Đáp án: A.** Trạng thái cục bộ ngắn hạn thường là ephemeral state.

### Câu 298. Trong quy trình phát triển, đâu là lựa chọn chính xác: một trạng thái chỉ dùng để bật/tắt một menu cục bộ. Đây thường là loại state nào?
A. Ephemeral state
B. App state dùng chung bắt buộc
C. Native platform state
D. Build artifact
**Đáp án: A.** Trạng thái cục bộ ngắn hạn thường là ephemeral state.

### Câu 299. Nếu cần chọn giải pháp phù hợp, cách làm nào phù hợp: một trạng thái chỉ dùng để bật/tắt một menu cục bộ. Đây thường là loại state nào?
A. Ephemeral state
B. App state dùng chung bắt buộc
C. Native platform state
D. Build artifact
**Đáp án: A.** Trạng thái cục bộ ngắn hạn thường là ephemeral state.

### Câu 300. Khi tối ưu quy trình làm việc, nên áp dụng điều gì: một trạng thái chỉ dùng để bật/tắt một menu cục bộ. Đây thường là loại state nào?
A. Ephemeral state
B. App state dùng chung bắt buộc
C. Native platform state
D. Build artifact
**Đáp án: A.** Trạng thái cục bộ ngắn hạn thường là ephemeral state.

## Đợt 4 — Mạng, kiến trúc, plugin, hiệu năng và bảo trì

### Câu 301. Để gửi HTTP request trong ví dụ học Flutter, tài liệu thường hướng dẫn bắt đầu từ đâu?
A. Make HTTP requests trong learning pathway/cookbook
B. Widget Inspector
C. AppBar
D. CupertinoIcons
**Đáp án: A.** Tài liệu có bài học và recipe về gọi HTTP.

### Câu 302. Khi tải dữ liệu bất đồng bộ, UI nên xử lý điều gì?
A. Đang tải, thành công và lỗi
B. Chỉ trường hợp thành công
C. Chỉ trạng thái offline
D. Không cần trạng thái
**Đáp án: A.** UI tốt nên thể hiện loading, data và error.

### Câu 303. Vì sao không nên chặn main isolate bằng công việc tính toán nặng?
A. Có thể làm khựng hoặc đóng băng UI
B. Làm tăng độ phân giải
C. Tự xóa dependency
D. Ngăn Navigator hoạt động vĩnh viễn
**Đáp án: A.** Công việc nặng trên isolate UI ảnh hưởng độ mượt.

### Câu 304. Isolate trong Dart có ích gì?
A. Thực thi công việc đồng thời với bộ nhớ tách biệt
B. Chia sẻ mọi biến mutable trực tiếp
C. Thay thế widget
D. Tạo file YAML
**Đáp án: A.** Isolate giao tiếp qua message thay vì chia sẻ bộ nhớ mutable thông thường.

### Câu 305. Flutter plugin thường dùng để làm gì?
A. Kết nối app với chức năng nền tảng hoặc SDK bên ngoài
B. Thay thế Dart
C. Tạo layout Row
D. Chỉ đổi màu chữ
**Đáp án: A.** Plugin cung cấp tích hợp với API native hoặc dịch vụ bên thứ ba.

### Câu 306. Nếu plugin có sẵn không đáp ứng nhu cầu native, có thể cân nhắc gì?
A. Viết platform-specific code hoặc tạo plugin riêng
B. Sửa trực tiếp Flutter engine trong mọi trường hợp
C. Chỉ dùng StatelessWidget
D. Không có phương án nào
**Đáp án: A.** Tài liệu hướng dẫn tích hợp nền tảng và tạo plugin khi cần.

### Câu 307. Mục đích của platform channels là gì?
A. Trao đổi thông điệp giữa Dart và mã native
B. Định dạng file Dart
C. Thay thế pubspec.yaml
D. Chụp screenshot UI
**Đáp án: A.** Platform channels cho phép giao tiếp giữa Flutter và mã nền tảng.

### Câu 308. Kiến trúc MVVM trong tài liệu architecture giúp phân tách điều gì?
A. UI, logic trình bày và dữ liệu/model
B. Chỉ màu sắc và font
C. Android với iOS thành hai codebase bắt buộc
D. Unit test với widget test
**Đáp án: A.** MVVM giúp phân tách trách nhiệm và hỗ trợ bảo trì/kiểm thử.

### Câu 309. Tại sao nên tách logic nghiệp vụ khỏi widget giao diện?
A. Giúp code dễ kiểm thử, tái sử dụng và bảo trì
B. Để mọi logic nằm trong build
C. Để không cần test
D. Để vô hiệu hóa hot reload
**Đáp án: A.** Phân tách trách nhiệm giảm độ phụ thuộc giữa UI và logic.

### Câu 310. DevTools Widget Inspector hỗ trợ gì?
A. Quan sát cây widget và kiểm tra cấu trúc UI
B. Xuất bản lên App Store
C. Quản lý mật khẩu người dùng
D. Tạo schema SQL
**Đáp án: A.** Widget Inspector giúp hiểu cây widget và debug bố cục.

### Câu 311. Property editor trong DevTools có ích gì?
A. Thử nghiệm thuộc tính widget trong lúc debug
B. Tạo chứng chỉ ký
C. Tự động viết unit test đầy đủ
D. Cài Android SDK
**Đáp án: A.** Property editor hỗ trợ thử các giá trị thuộc tính.

### Câu 312. Khi debug lỗi layout, thông tin constraints giúp xác định điều gì?
A. Giới hạn kích thước mà parent truyền cho child
B. Quyền camera
C. HTTP status code
D. Phiên bản package
**Đáp án: A.** Flutter layout dựa trên constraints được truyền qua cây.

### Câu 313. Vì sao nên dùng `const` constructor khi phù hợp?
A. Cho phép tạo widget bất biến và có thể giảm công việc dựng lại không cần thiết
B. Tự động gọi API
C. Bắt buộc mọi widget phải const
D. Thay thế state management
**Đáp án: A.** const hữu ích với cấu hình compile-time và widget bất biến.

### Câu 314. Key trong Flutter giúp ích gì?
A. Giúp framework nhận diện widget khi cập nhật cây
B. Mã hóa dữ liệu
C. Đặt địa chỉ IP
D. Tải ảnh từ mạng
**Đáp án: A.** Key hỗ trợ nhận diện và giữ đúng danh tính widget qua các lần build.

### Câu 315. `GlobalKey` có đặc điểm nào?
A. Có thể truy cập State hoặc context liên quan và phải dùng thận trọng
B. Chỉ dùng làm màu
C. Không thể đặt trong widget
D. Là một loại HTTP header
**Đáp án: A.** GlobalKey cung cấp danh tính toàn cục và một số khả năng truy cập State/context.

### Câu 316. Tại sao nên tránh tạo Future mới trong mỗi lần build cho cùng một tác vụ tải dữ liệu?
A. Có thể khởi động lại tác vụ nhiều lần ngoài ý muốn
B. Future chỉ chạy trên iOS
C. Nó xóa route
D. Flutter không hỗ trợ Future
**Đáp án: A.** Nên tạo Future ở lifecycle phù hợp để tránh gọi lặp khi rebuild.

### Câu 317. Mục đích của caching dữ liệu là gì?
A. Giảm tải yêu cầu lặp và có thể cải thiện trải nghiệm
B. Bắt buộc mọi dữ liệu luôn mới tuyệt đối
C. Thay thế xử lý lỗi
D. Tắt network
**Đáp án: A.** Cache giúp giảm độ trễ/tải mạng nhưng cần chính sách làm mới phù hợp.

### Câu 318. Khi dùng package bên thứ ba, điều gì nên được xem xét?
A. Khả năng tương thích, chất lượng, bảo trì và quyền cần thiết
B. Chỉ số lượng chữ trong tên
C. Màu logo package
D. Không cần đọc tài liệu
**Đáp án: A.** Dependency cần được đánh giá về tính phù hợp và bảo trì.

### Câu 319. Mục tiêu của accessibility trong UI là gì?
A. Giúp nhiều người, bao gồm người dùng công nghệ hỗ trợ, sử dụng ứng dụng
B. Chỉ tăng hiệu ứng chuyển động
C. Giới hạn font chữ
D. Thay thế responsive
**Đáp án: A.** Accessibility bao gồm nhãn, tương phản, kích thước và hỗ trợ tương tác.

### Câu 320. Tại sao nên kiểm tra hiệu năng trên thiết bị phù hợp thay vì chỉ dựa vào debug mode?
A. Debug mode có overhead và không phản ánh chính xác hiệu năng release
B. Debug mode không thể chạy widget
C. Release mode không có UI
D. Thiết bị thật không hỗ trợ Flutter
**Đáp án: A.** Đánh giá hiệu năng cần chế độ và thiết bị đại diện cho người dùng.

### Câu 321. Trong một dự án mới, đội phát triển cần quyết định: bạn cần mở camera nhưng không tìm được plugin đáp ứng yêu cầu. Hướng xử lý nào được Flutter hỗ trợ?
A. Tích hợp mã nền tảng hoặc tự tạo plugin
B. Không thể gọi native
C. Chuyển mọi UI sang SQL
D. Dùng Row thay thế camera
**Đáp án: A.** Flutter hỗ trợ tích hợp nền tảng và tạo plugin.

### Câu 322. Khi review code, lập trình viên nên ưu tiên: bạn cần mở camera nhưng không tìm được plugin đáp ứng yêu cầu. Hướng xử lý nào được Flutter hỗ trợ?
A. Tích hợp mã nền tảng hoặc tự tạo plugin
B. Không thể gọi native
C. Chuyển mọi UI sang SQL
D. Dùng Row thay thế camera
**Đáp án: A.** Flutter hỗ trợ tích hợp nền tảng và tạo plugin.

### Câu 323. Trong tình huống thực tế, câu hỏi cần giải quyết là: bạn cần mở camera nhưng không tìm được plugin đáp ứng yêu cầu. Hướng xử lý nào được Flutter hỗ trợ?
A. Tích hợp mã nền tảng hoặc tự tạo plugin
B. Không thể gọi native
C. Chuyển mọi UI sang SQL
D. Dùng Row thay thế camera
**Đáp án: A.** Flutter hỗ trợ tích hợp nền tảng và tạo plugin.

### Câu 324. Để xử lý yêu cầu này, phương án nào hợp lý nhất: bạn cần mở camera nhưng không tìm được plugin đáp ứng yêu cầu. Hướng xử lý nào được Flutter hỗ trợ?
A. Tích hợp mã nền tảng hoặc tự tạo plugin
B. Không thể gọi native
C. Chuyển mọi UI sang SQL
D. Dùng Row thay thế camera
**Đáp án: A.** Flutter hỗ trợ tích hợp nền tảng và tạo plugin.

### Câu 325. Khi debug ứng dụng, nên chọn cách nào: bạn cần mở camera nhưng không tìm được plugin đáp ứng yêu cầu. Hướng xử lý nào được Flutter hỗ trợ?
A. Tích hợp mã nền tảng hoặc tự tạo plugin
B. Không thể gọi native
C. Chuyển mọi UI sang SQL
D. Dùng Row thay thế camera
**Đáp án: A.** Flutter hỗ trợ tích hợp nền tảng và tạo plugin.

### Câu 326. Trong quy trình phát triển, đâu là lựa chọn chính xác: bạn cần mở camera nhưng không tìm được plugin đáp ứng yêu cầu. Hướng xử lý nào được Flutter hỗ trợ?
A. Tích hợp mã nền tảng hoặc tự tạo plugin
B. Không thể gọi native
C. Chuyển mọi UI sang SQL
D. Dùng Row thay thế camera
**Đáp án: A.** Flutter hỗ trợ tích hợp nền tảng và tạo plugin.

### Câu 327. Nếu cần chọn giải pháp phù hợp, cách làm nào phù hợp: bạn cần mở camera nhưng không tìm được plugin đáp ứng yêu cầu. Hướng xử lý nào được Flutter hỗ trợ?
A. Tích hợp mã nền tảng hoặc tự tạo plugin
B. Không thể gọi native
C. Chuyển mọi UI sang SQL
D. Dùng Row thay thế camera
**Đáp án: A.** Flutter hỗ trợ tích hợp nền tảng và tạo plugin.

### Câu 328. Khi tối ưu quy trình làm việc, nên áp dụng điều gì: bạn cần mở camera nhưng không tìm được plugin đáp ứng yêu cầu. Hướng xử lý nào được Flutter hỗ trợ?
A. Tích hợp mã nền tảng hoặc tự tạo plugin
B. Không thể gọi native
C. Chuyển mọi UI sang SQL
D. Dùng Row thay thế camera
**Đáp án: A.** Flutter hỗ trợ tích hợp nền tảng và tạo plugin.

### Câu 329. Trong một dự án mới, đội phát triển cần quyết định: một tính năng chỉ có API native. Cơ chế giao tiếp Dart-native thường được dùng là gì?
A. Platform channels
B. ListView
C. ThemeData
D. dart format
**Đáp án: A.** Platform channels cho phép trao đổi thông điệp giữa Dart và native.

### Câu 330. Khi review code, lập trình viên nên ưu tiên: một tính năng chỉ có API native. Cơ chế giao tiếp Dart-native thường được dùng là gì?
A. Platform channels
B. ListView
C. ThemeData
D. dart format
**Đáp án: A.** Platform channels cho phép trao đổi thông điệp giữa Dart và native.

### Câu 331. Trong tình huống thực tế, câu hỏi cần giải quyết là: một tính năng chỉ có API native. Cơ chế giao tiếp Dart-native thường được dùng là gì?
A. Platform channels
B. ListView
C. ThemeData
D. dart format
**Đáp án: A.** Platform channels cho phép trao đổi thông điệp giữa Dart và native.

### Câu 332. Để xử lý yêu cầu này, phương án nào hợp lý nhất: một tính năng chỉ có API native. Cơ chế giao tiếp Dart-native thường được dùng là gì?
A. Platform channels
B. ListView
C. ThemeData
D. dart format
**Đáp án: A.** Platform channels cho phép trao đổi thông điệp giữa Dart và native.

### Câu 333. Khi debug ứng dụng, nên chọn cách nào: một tính năng chỉ có API native. Cơ chế giao tiếp Dart-native thường được dùng là gì?
A. Platform channels
B. ListView
C. ThemeData
D. dart format
**Đáp án: A.** Platform channels cho phép trao đổi thông điệp giữa Dart và native.

### Câu 334. Trong quy trình phát triển, đâu là lựa chọn chính xác: một tính năng chỉ có API native. Cơ chế giao tiếp Dart-native thường được dùng là gì?
A. Platform channels
B. ListView
C. ThemeData
D. dart format
**Đáp án: A.** Platform channels cho phép trao đổi thông điệp giữa Dart và native.

### Câu 335. Nếu cần chọn giải pháp phù hợp, cách làm nào phù hợp: một tính năng chỉ có API native. Cơ chế giao tiếp Dart-native thường được dùng là gì?
A. Platform channels
B. ListView
C. ThemeData
D. dart format
**Đáp án: A.** Platform channels cho phép trao đổi thông điệp giữa Dart và native.

### Câu 336. Khi tối ưu quy trình làm việc, nên áp dụng điều gì: một tính năng chỉ có API native. Cơ chế giao tiếp Dart-native thường được dùng là gì?
A. Platform channels
B. ListView
C. ThemeData
D. dart format
**Đáp án: A.** Platform channels cho phép trao đổi thông điệp giữa Dart và native.

### Câu 337. Trong một dự án mới, đội phát triển cần quyết định: bạn muốn tìm nguyên nhân widget bị đặt sai kích thước. Công cụ nào nên mở?
A. DevTools Widget Inspector
B. Google Play Console
C. pub.dev score only
D. App Store Connect
**Đáp án: A.** Widget Inspector hỗ trợ kiểm tra cây widget và layout.

### Câu 338. Khi review code, lập trình viên nên ưu tiên: bạn muốn tìm nguyên nhân widget bị đặt sai kích thước. Công cụ nào nên mở?
A. DevTools Widget Inspector
B. Google Play Console
C. pub.dev score only
D. App Store Connect
**Đáp án: A.** Widget Inspector hỗ trợ kiểm tra cây widget và layout.

### Câu 339. Trong tình huống thực tế, câu hỏi cần giải quyết là: bạn muốn tìm nguyên nhân widget bị đặt sai kích thước. Công cụ nào nên mở?
A. DevTools Widget Inspector
B. Google Play Console
C. pub.dev score only
D. App Store Connect
**Đáp án: A.** Widget Inspector hỗ trợ kiểm tra cây widget và layout.

### Câu 340. Để xử lý yêu cầu này, phương án nào hợp lý nhất: bạn muốn tìm nguyên nhân widget bị đặt sai kích thước. Công cụ nào nên mở?
A. DevTools Widget Inspector
B. Google Play Console
C. pub.dev score only
D. App Store Connect
**Đáp án: A.** Widget Inspector hỗ trợ kiểm tra cây widget và layout.

### Câu 341. Khi debug ứng dụng, nên chọn cách nào: bạn muốn tìm nguyên nhân widget bị đặt sai kích thước. Công cụ nào nên mở?
A. DevTools Widget Inspector
B. Google Play Console
C. pub.dev score only
D. App Store Connect
**Đáp án: A.** Widget Inspector hỗ trợ kiểm tra cây widget và layout.

### Câu 342. Trong quy trình phát triển, đâu là lựa chọn chính xác: bạn muốn tìm nguyên nhân widget bị đặt sai kích thước. Công cụ nào nên mở?
A. DevTools Widget Inspector
B. Google Play Console
C. pub.dev score only
D. App Store Connect
**Đáp án: A.** Widget Inspector hỗ trợ kiểm tra cây widget và layout.

### Câu 343. Nếu cần chọn giải pháp phù hợp, cách làm nào phù hợp: bạn muốn tìm nguyên nhân widget bị đặt sai kích thước. Công cụ nào nên mở?
A. DevTools Widget Inspector
B. Google Play Console
C. pub.dev score only
D. App Store Connect
**Đáp án: A.** Widget Inspector hỗ trợ kiểm tra cây widget và layout.

### Câu 344. Khi tối ưu quy trình làm việc, nên áp dụng điều gì: bạn muốn tìm nguyên nhân widget bị đặt sai kích thước. Công cụ nào nên mở?
A. DevTools Widget Inspector
B. Google Play Console
C. pub.dev score only
D. App Store Connect
**Đáp án: A.** Widget Inspector hỗ trợ kiểm tra cây widget và layout.

### Câu 345. Trong một dự án mới, đội phát triển cần quyết định: một tác vụ CPU nặng làm UI giật. Hướng xử lý nào đáng xem xét?
A. Chuyển công việc phù hợp sang isolate
B. Đưa thêm logic vào build
C. Tạo thêm Row
D. Gọi setState liên tục
**Đáp án: A.** Isolate giúp xử lý công việc mà không chặn isolate UI.

### Câu 346. Khi review code, lập trình viên nên ưu tiên: một tác vụ CPU nặng làm UI giật. Hướng xử lý nào đáng xem xét?
A. Chuyển công việc phù hợp sang isolate
B. Đưa thêm logic vào build
C. Tạo thêm Row
D. Gọi setState liên tục
**Đáp án: A.** Isolate giúp xử lý công việc mà không chặn isolate UI.

### Câu 347. Trong tình huống thực tế, câu hỏi cần giải quyết là: một tác vụ CPU nặng làm UI giật. Hướng xử lý nào đáng xem xét?
A. Chuyển công việc phù hợp sang isolate
B. Đưa thêm logic vào build
C. Tạo thêm Row
D. Gọi setState liên tục
**Đáp án: A.** Isolate giúp xử lý công việc mà không chặn isolate UI.

### Câu 348. Để xử lý yêu cầu này, phương án nào hợp lý nhất: một tác vụ CPU nặng làm UI giật. Hướng xử lý nào đáng xem xét?
A. Chuyển công việc phù hợp sang isolate
B. Đưa thêm logic vào build
C. Tạo thêm Row
D. Gọi setState liên tục
**Đáp án: A.** Isolate giúp xử lý công việc mà không chặn isolate UI.

### Câu 349. Khi debug ứng dụng, nên chọn cách nào: một tác vụ CPU nặng làm UI giật. Hướng xử lý nào đáng xem xét?
A. Chuyển công việc phù hợp sang isolate
B. Đưa thêm logic vào build
C. Tạo thêm Row
D. Gọi setState liên tục
**Đáp án: A.** Isolate giúp xử lý công việc mà không chặn isolate UI.

### Câu 350. Trong quy trình phát triển, đâu là lựa chọn chính xác: một tác vụ CPU nặng làm UI giật. Hướng xử lý nào đáng xem xét?
A. Chuyển công việc phù hợp sang isolate
B. Đưa thêm logic vào build
C. Tạo thêm Row
D. Gọi setState liên tục
**Đáp án: A.** Isolate giúp xử lý công việc mà không chặn isolate UI.

### Câu 351. Nếu cần chọn giải pháp phù hợp, cách làm nào phù hợp: một tác vụ CPU nặng làm UI giật. Hướng xử lý nào đáng xem xét?
A. Chuyển công việc phù hợp sang isolate
B. Đưa thêm logic vào build
C. Tạo thêm Row
D. Gọi setState liên tục
**Đáp án: A.** Isolate giúp xử lý công việc mà không chặn isolate UI.

### Câu 352. Khi tối ưu quy trình làm việc, nên áp dụng điều gì: một tác vụ CPU nặng làm UI giật. Hướng xử lý nào đáng xem xét?
A. Chuyển công việc phù hợp sang isolate
B. Đưa thêm logic vào build
C. Tạo thêm Row
D. Gọi setState liên tục
**Đáp án: A.** Isolate giúp xử lý công việc mà không chặn isolate UI.

### Câu 353. Trong một dự án mới, đội phát triển cần quyết định: bạn cần kiểm tra constraints truyền từ parent xuống child. Đây thuộc chủ đề nào?
A. Flutter layout
B. Signing
C. Package publishing
D. Deep linking
**Đáp án: A.** Hệ thống layout Flutter dựa trên constraints.

### Câu 354. Khi review code, lập trình viên nên ưu tiên: bạn cần kiểm tra constraints truyền từ parent xuống child. Đây thuộc chủ đề nào?
A. Flutter layout
B. Signing
C. Package publishing
D. Deep linking
**Đáp án: A.** Hệ thống layout Flutter dựa trên constraints.

### Câu 355. Trong tình huống thực tế, câu hỏi cần giải quyết là: bạn cần kiểm tra constraints truyền từ parent xuống child. Đây thuộc chủ đề nào?
A. Flutter layout
B. Signing
C. Package publishing
D. Deep linking
**Đáp án: A.** Hệ thống layout Flutter dựa trên constraints.

### Câu 356. Để xử lý yêu cầu này, phương án nào hợp lý nhất: bạn cần kiểm tra constraints truyền từ parent xuống child. Đây thuộc chủ đề nào?
A. Flutter layout
B. Signing
C. Package publishing
D. Deep linking
**Đáp án: A.** Hệ thống layout Flutter dựa trên constraints.

### Câu 357. Khi debug ứng dụng, nên chọn cách nào: bạn cần kiểm tra constraints truyền từ parent xuống child. Đây thuộc chủ đề nào?
A. Flutter layout
B. Signing
C. Package publishing
D. Deep linking
**Đáp án: A.** Hệ thống layout Flutter dựa trên constraints.

### Câu 358. Trong quy trình phát triển, đâu là lựa chọn chính xác: bạn cần kiểm tra constraints truyền từ parent xuống child. Đây thuộc chủ đề nào?
A. Flutter layout
B. Signing
C. Package publishing
D. Deep linking
**Đáp án: A.** Hệ thống layout Flutter dựa trên constraints.

### Câu 359. Nếu cần chọn giải pháp phù hợp, cách làm nào phù hợp: bạn cần kiểm tra constraints truyền từ parent xuống child. Đây thuộc chủ đề nào?
A. Flutter layout
B. Signing
C. Package publishing
D. Deep linking
**Đáp án: A.** Hệ thống layout Flutter dựa trên constraints.

### Câu 360. Khi tối ưu quy trình làm việc, nên áp dụng điều gì: bạn cần kiểm tra constraints truyền từ parent xuống child. Đây thuộc chủ đề nào?
A. Flutter layout
B. Signing
C. Package publishing
D. Deep linking
**Đáp án: A.** Hệ thống layout Flutter dựa trên constraints.

### Câu 361. Trong một dự án mới, đội phát triển cần quyết định: bạn thêm dependency chưa rõ độ tin cậy. Nên kiểm tra gì?
A. Tương thích, bảo trì, chất lượng và quyền
B. Chỉ tên package
C. Chỉ màu icon
D. Không cần kiểm tra
**Đáp án: A.** Đánh giá dependency giúp giảm rủi ro bảo trì và bảo mật.

### Câu 362. Khi review code, lập trình viên nên ưu tiên: bạn thêm dependency chưa rõ độ tin cậy. Nên kiểm tra gì?
A. Tương thích, bảo trì, chất lượng và quyền
B. Chỉ tên package
C. Chỉ màu icon
D. Không cần kiểm tra
**Đáp án: A.** Đánh giá dependency giúp giảm rủi ro bảo trì và bảo mật.

### Câu 363. Trong tình huống thực tế, câu hỏi cần giải quyết là: bạn thêm dependency chưa rõ độ tin cậy. Nên kiểm tra gì?
A. Tương thích, bảo trì, chất lượng và quyền
B. Chỉ tên package
C. Chỉ màu icon
D. Không cần kiểm tra
**Đáp án: A.** Đánh giá dependency giúp giảm rủi ro bảo trì và bảo mật.

### Câu 364. Để xử lý yêu cầu này, phương án nào hợp lý nhất: bạn thêm dependency chưa rõ độ tin cậy. Nên kiểm tra gì?
A. Tương thích, bảo trì, chất lượng và quyền
B. Chỉ tên package
C. Chỉ màu icon
D. Không cần kiểm tra
**Đáp án: A.** Đánh giá dependency giúp giảm rủi ro bảo trì và bảo mật.

### Câu 365. Khi debug ứng dụng, nên chọn cách nào: bạn thêm dependency chưa rõ độ tin cậy. Nên kiểm tra gì?
A. Tương thích, bảo trì, chất lượng và quyền
B. Chỉ tên package
C. Chỉ màu icon
D. Không cần kiểm tra
**Đáp án: A.** Đánh giá dependency giúp giảm rủi ro bảo trì và bảo mật.

### Câu 366. Trong quy trình phát triển, đâu là lựa chọn chính xác: bạn thêm dependency chưa rõ độ tin cậy. Nên kiểm tra gì?
A. Tương thích, bảo trì, chất lượng và quyền
B. Chỉ tên package
C. Chỉ màu icon
D. Không cần kiểm tra
**Đáp án: A.** Đánh giá dependency giúp giảm rủi ro bảo trì và bảo mật.

### Câu 367. Nếu cần chọn giải pháp phù hợp, cách làm nào phù hợp: bạn thêm dependency chưa rõ độ tin cậy. Nên kiểm tra gì?
A. Tương thích, bảo trì, chất lượng và quyền
B. Chỉ tên package
C. Chỉ màu icon
D. Không cần kiểm tra
**Đáp án: A.** Đánh giá dependency giúp giảm rủi ro bảo trì và bảo mật.

### Câu 368. Khi tối ưu quy trình làm việc, nên áp dụng điều gì: bạn thêm dependency chưa rõ độ tin cậy. Nên kiểm tra gì?
A. Tương thích, bảo trì, chất lượng và quyền
B. Chỉ tên package
C. Chỉ màu icon
D. Không cần kiểm tra
**Đáp án: A.** Đánh giá dependency giúp giảm rủi ro bảo trì và bảo mật.

### Câu 369. Trong một dự án mới, đội phát triển cần quyết định: một ứng dụng có nhiều màn hình cùng cần dữ liệu người dùng. Cách tổ chức nào thường hữu ích?
A. Tách state/logic dùng chung khỏi widget đơn lẻ
B. Nhân bản toàn bộ logic vào từng build
C. Chỉ dùng biến local trong một widget
D. Không dùng state
**Đáp án: A.** State management giúp chia sẻ dữ liệu giữa các phần ứng dụng.

### Câu 370. Khi review code, lập trình viên nên ưu tiên: một ứng dụng có nhiều màn hình cùng cần dữ liệu người dùng. Cách tổ chức nào thường hữu ích?
A. Tách state/logic dùng chung khỏi widget đơn lẻ
B. Nhân bản toàn bộ logic vào từng build
C. Chỉ dùng biến local trong một widget
D. Không dùng state
**Đáp án: A.** State management giúp chia sẻ dữ liệu giữa các phần ứng dụng.

### Câu 371. Trong tình huống thực tế, câu hỏi cần giải quyết là: một ứng dụng có nhiều màn hình cùng cần dữ liệu người dùng. Cách tổ chức nào thường hữu ích?
A. Tách state/logic dùng chung khỏi widget đơn lẻ
B. Nhân bản toàn bộ logic vào từng build
C. Chỉ dùng biến local trong một widget
D. Không dùng state
**Đáp án: A.** State management giúp chia sẻ dữ liệu giữa các phần ứng dụng.

### Câu 372. Để xử lý yêu cầu này, phương án nào hợp lý nhất: một ứng dụng có nhiều màn hình cùng cần dữ liệu người dùng. Cách tổ chức nào thường hữu ích?
A. Tách state/logic dùng chung khỏi widget đơn lẻ
B. Nhân bản toàn bộ logic vào từng build
C. Chỉ dùng biến local trong một widget
D. Không dùng state
**Đáp án: A.** State management giúp chia sẻ dữ liệu giữa các phần ứng dụng.

### Câu 373. Khi debug ứng dụng, nên chọn cách nào: một ứng dụng có nhiều màn hình cùng cần dữ liệu người dùng. Cách tổ chức nào thường hữu ích?
A. Tách state/logic dùng chung khỏi widget đơn lẻ
B. Nhân bản toàn bộ logic vào từng build
C. Chỉ dùng biến local trong một widget
D. Không dùng state
**Đáp án: A.** State management giúp chia sẻ dữ liệu giữa các phần ứng dụng.

### Câu 374. Trong quy trình phát triển, đâu là lựa chọn chính xác: một ứng dụng có nhiều màn hình cùng cần dữ liệu người dùng. Cách tổ chức nào thường hữu ích?
A. Tách state/logic dùng chung khỏi widget đơn lẻ
B. Nhân bản toàn bộ logic vào từng build
C. Chỉ dùng biến local trong một widget
D. Không dùng state
**Đáp án: A.** State management giúp chia sẻ dữ liệu giữa các phần ứng dụng.

### Câu 375. Nếu cần chọn giải pháp phù hợp, cách làm nào phù hợp: một ứng dụng có nhiều màn hình cùng cần dữ liệu người dùng. Cách tổ chức nào thường hữu ích?
A. Tách state/logic dùng chung khỏi widget đơn lẻ
B. Nhân bản toàn bộ logic vào từng build
C. Chỉ dùng biến local trong một widget
D. Không dùng state
**Đáp án: A.** State management giúp chia sẻ dữ liệu giữa các phần ứng dụng.

### Câu 376. Khi tối ưu quy trình làm việc, nên áp dụng điều gì: một ứng dụng có nhiều màn hình cùng cần dữ liệu người dùng. Cách tổ chức nào thường hữu ích?
A. Tách state/logic dùng chung khỏi widget đơn lẻ
B. Nhân bản toàn bộ logic vào từng build
C. Chỉ dùng biến local trong một widget
D. Không dùng state
**Đáp án: A.** State management giúp chia sẻ dữ liệu giữa các phần ứng dụng.

### Câu 377. Trong một dự án mới, đội phát triển cần quyết định: bạn cần UI thích ứng khi cửa sổ desktop thay đổi kích thước. Nên ưu tiên gì?
A. Responsive/adaptive layout
B. Kích thước cố định cho mọi màn hình
C. Bỏ MediaQuery
D. Chỉ test điện thoại
**Đáp án: A.** Responsive/adaptive design giúp phù hợp không gian khác nhau.

### Câu 378. Khi review code, lập trình viên nên ưu tiên: bạn cần UI thích ứng khi cửa sổ desktop thay đổi kích thước. Nên ưu tiên gì?
A. Responsive/adaptive layout
B. Kích thước cố định cho mọi màn hình
C. Bỏ MediaQuery
D. Chỉ test điện thoại
**Đáp án: A.** Responsive/adaptive design giúp phù hợp không gian khác nhau.

### Câu 379. Trong tình huống thực tế, câu hỏi cần giải quyết là: bạn cần UI thích ứng khi cửa sổ desktop thay đổi kích thước. Nên ưu tiên gì?
A. Responsive/adaptive layout
B. Kích thước cố định cho mọi màn hình
C. Bỏ MediaQuery
D. Chỉ test điện thoại
**Đáp án: A.** Responsive/adaptive design giúp phù hợp không gian khác nhau.

### Câu 380. Để xử lý yêu cầu này, phương án nào hợp lý nhất: bạn cần UI thích ứng khi cửa sổ desktop thay đổi kích thước. Nên ưu tiên gì?
A. Responsive/adaptive layout
B. Kích thước cố định cho mọi màn hình
C. Bỏ MediaQuery
D. Chỉ test điện thoại
**Đáp án: A.** Responsive/adaptive design giúp phù hợp không gian khác nhau.

### Câu 381. Khi debug ứng dụng, nên chọn cách nào: bạn cần UI thích ứng khi cửa sổ desktop thay đổi kích thước. Nên ưu tiên gì?
A. Responsive/adaptive layout
B. Kích thước cố định cho mọi màn hình
C. Bỏ MediaQuery
D. Chỉ test điện thoại
**Đáp án: A.** Responsive/adaptive design giúp phù hợp không gian khác nhau.

### Câu 382. Trong quy trình phát triển, đâu là lựa chọn chính xác: bạn cần UI thích ứng khi cửa sổ desktop thay đổi kích thước. Nên ưu tiên gì?
A. Responsive/adaptive layout
B. Kích thước cố định cho mọi màn hình
C. Bỏ MediaQuery
D. Chỉ test điện thoại
**Đáp án: A.** Responsive/adaptive design giúp phù hợp không gian khác nhau.

### Câu 383. Nếu cần chọn giải pháp phù hợp, cách làm nào phù hợp: bạn cần UI thích ứng khi cửa sổ desktop thay đổi kích thước. Nên ưu tiên gì?
A. Responsive/adaptive layout
B. Kích thước cố định cho mọi màn hình
C. Bỏ MediaQuery
D. Chỉ test điện thoại
**Đáp án: A.** Responsive/adaptive design giúp phù hợp không gian khác nhau.

### Câu 384. Khi tối ưu quy trình làm việc, nên áp dụng điều gì: bạn cần UI thích ứng khi cửa sổ desktop thay đổi kích thước. Nên ưu tiên gì?
A. Responsive/adaptive layout
B. Kích thước cố định cho mọi màn hình
C. Bỏ MediaQuery
D. Chỉ test điện thoại
**Đáp án: A.** Responsive/adaptive design giúp phù hợp không gian khác nhau.

### Câu 385. Trong một dự án mới, đội phát triển cần quyết định: một widget cần được nhận diện ổn định khi danh sách thay đổi thứ tự. Cơ chế nào liên quan?
A. Key
B. HTTP status
C. pubspec.lock
D. Isolate name
**Đáp án: A.** Key giúp framework nhận diện danh tính widget qua các lần cập nhật.

### Câu 386. Khi review code, lập trình viên nên ưu tiên: một widget cần được nhận diện ổn định khi danh sách thay đổi thứ tự. Cơ chế nào liên quan?
A. Key
B. HTTP status
C. pubspec.lock
D. Isolate name
**Đáp án: A.** Key giúp framework nhận diện danh tính widget qua các lần cập nhật.

### Câu 387. Trong tình huống thực tế, câu hỏi cần giải quyết là: một widget cần được nhận diện ổn định khi danh sách thay đổi thứ tự. Cơ chế nào liên quan?
A. Key
B. HTTP status
C. pubspec.lock
D. Isolate name
**Đáp án: A.** Key giúp framework nhận diện danh tính widget qua các lần cập nhật.

### Câu 388. Để xử lý yêu cầu này, phương án nào hợp lý nhất: một widget cần được nhận diện ổn định khi danh sách thay đổi thứ tự. Cơ chế nào liên quan?
A. Key
B. HTTP status
C. pubspec.lock
D. Isolate name
**Đáp án: A.** Key giúp framework nhận diện danh tính widget qua các lần cập nhật.

### Câu 389. Khi debug ứng dụng, nên chọn cách nào: một widget cần được nhận diện ổn định khi danh sách thay đổi thứ tự. Cơ chế nào liên quan?
A. Key
B. HTTP status
C. pubspec.lock
D. Isolate name
**Đáp án: A.** Key giúp framework nhận diện danh tính widget qua các lần cập nhật.

### Câu 390. Trong quy trình phát triển, đâu là lựa chọn chính xác: một widget cần được nhận diện ổn định khi danh sách thay đổi thứ tự. Cơ chế nào liên quan?
A. Key
B. HTTP status
C. pubspec.lock
D. Isolate name
**Đáp án: A.** Key giúp framework nhận diện danh tính widget qua các lần cập nhật.

### Câu 391. Nếu cần chọn giải pháp phù hợp, cách làm nào phù hợp: một widget cần được nhận diện ổn định khi danh sách thay đổi thứ tự. Cơ chế nào liên quan?
A. Key
B. HTTP status
C. pubspec.lock
D. Isolate name
**Đáp án: A.** Key giúp framework nhận diện danh tính widget qua các lần cập nhật.

### Câu 392. Khi tối ưu quy trình làm việc, nên áp dụng điều gì: một widget cần được nhận diện ổn định khi danh sách thay đổi thứ tự. Cơ chế nào liên quan?
A. Key
B. HTTP status
C. pubspec.lock
D. Isolate name
**Đáp án: A.** Key giúp framework nhận diện danh tính widget qua các lần cập nhật.

### Câu 393. Trong một dự án mới, đội phát triển cần quyết định: bạn cần xem hiệu năng thực tế hơn khi đo. Điều gì nên lưu ý?
A. Debug mode có overhead; dùng profile/release phù hợp mục tiêu
B. Debug luôn chính xác nhất
C. Không cần thiết bị mục tiêu
D. Chỉ xem kích thước font
**Đáp án: A.** Debug mode không đại diện hoàn toàn cho hiệu năng phát hành.

### Câu 394. Khi review code, lập trình viên nên ưu tiên: bạn cần xem hiệu năng thực tế hơn khi đo. Điều gì nên lưu ý?
A. Debug mode có overhead; dùng profile/release phù hợp mục tiêu
B. Debug luôn chính xác nhất
C. Không cần thiết bị mục tiêu
D. Chỉ xem kích thước font
**Đáp án: A.** Debug mode không đại diện hoàn toàn cho hiệu năng phát hành.

### Câu 395. Trong tình huống thực tế, câu hỏi cần giải quyết là: bạn cần xem hiệu năng thực tế hơn khi đo. Điều gì nên lưu ý?
A. Debug mode có overhead; dùng profile/release phù hợp mục tiêu
B. Debug luôn chính xác nhất
C. Không cần thiết bị mục tiêu
D. Chỉ xem kích thước font
**Đáp án: A.** Debug mode không đại diện hoàn toàn cho hiệu năng phát hành.

### Câu 396. Để xử lý yêu cầu này, phương án nào hợp lý nhất: bạn cần xem hiệu năng thực tế hơn khi đo. Điều gì nên lưu ý?
A. Debug mode có overhead; dùng profile/release phù hợp mục tiêu
B. Debug luôn chính xác nhất
C. Không cần thiết bị mục tiêu
D. Chỉ xem kích thước font
**Đáp án: A.** Debug mode không đại diện hoàn toàn cho hiệu năng phát hành.

### Câu 397. Khi debug ứng dụng, nên chọn cách nào: bạn cần xem hiệu năng thực tế hơn khi đo. Điều gì nên lưu ý?
A. Debug mode có overhead; dùng profile/release phù hợp mục tiêu
B. Debug luôn chính xác nhất
C. Không cần thiết bị mục tiêu
D. Chỉ xem kích thước font
**Đáp án: A.** Debug mode không đại diện hoàn toàn cho hiệu năng phát hành.

### Câu 398. Trong quy trình phát triển, đâu là lựa chọn chính xác: bạn cần xem hiệu năng thực tế hơn khi đo. Điều gì nên lưu ý?
A. Debug mode có overhead; dùng profile/release phù hợp mục tiêu
B. Debug luôn chính xác nhất
C. Không cần thiết bị mục tiêu
D. Chỉ xem kích thước font
**Đáp án: A.** Debug mode không đại diện hoàn toàn cho hiệu năng phát hành.

### Câu 399. Nếu cần chọn giải pháp phù hợp, cách làm nào phù hợp: bạn cần xem hiệu năng thực tế hơn khi đo. Điều gì nên lưu ý?
A. Debug mode có overhead; dùng profile/release phù hợp mục tiêu
B. Debug luôn chính xác nhất
C. Không cần thiết bị mục tiêu
D. Chỉ xem kích thước font
**Đáp án: A.** Debug mode không đại diện hoàn toàn cho hiệu năng phát hành.

### Câu 400. Khi tối ưu quy trình làm việc, nên áp dụng điều gì: bạn cần xem hiệu năng thực tế hơn khi đo. Điều gì nên lưu ý?
A. Debug mode có overhead; dùng profile/release phù hợp mục tiêu
B. Debug luôn chính xác nhất
C. Không cần thiết bị mục tiêu
D. Chỉ xem kích thước font
**Đáp án: A.** Debug mode không đại diện hoàn toàn cho hiệu năng phát hành.

## Đợt 5 — Kiểm thử, build, triển khai và tình huống thực tế

### Câu 401. Unit test kiểm tra điều gì?
A. Một hàm, phương thức hoặc lớp riêng lẻ
B. Toàn bộ app trên thiết bị bắt buộc
C. Chỉ màu sắc màn hình
D. Quy trình phát hành cửa hàng
**Đáp án: A.** Unit test tập trung vào một đơn vị logic.

### Câu 402. Widget test chủ yếu xác minh điều gì?
A. UI của widget và tương tác của nó trong môi trường test
B. Chỉ backend production
C. Cấu hình DNS
D. Chữ ký APK
**Đáp án: A.** Widget test kiểm tra hiển thị và hành vi của widget.

### Câu 403. Integration test thường kiểm tra điều gì?
A. Nhiều thành phần phối hợp trong toàn app hoặc phần lớn app
B. Một phép tính thuần túy duy nhất
C. Chỉ định dạng Dart
D. Một màu trong ThemeData
**Đáp án: A.** Integration test xác minh các phần hoạt động cùng nhau.

### Câu 404. Trong ba loại test cơ bản, loại nào thường chạy nhanh nhất?
A. Unit test
B. Widget test
C. Integration test
D. Cả ba luôn giống nhau
**Đáp án: A.** Unit test thường ít phụ thuộc và chạy nhanh nhất.

### Câu 405. Loại test nào thường có chi phí bảo trì và phụ thuộc cao nhất trong bảng so sánh tài liệu?
A. Integration test
B. Unit test
C. Format check
D. Static analysis
**Đáp án: A.** Integration test bao phủ hệ thống rộng hơn nên chi phí thường cao hơn.

### Câu 406. Package chính thức thường dùng cho integration test Flutter là gì?
A. integration_test
B. flutter_router_test
C. widget_network_test
D. app_publish_test
**Đáp án: A.** Flutter SDK có package integration_test.

### Câu 407. Một hạn chế được nêu của `integration_test` là gì?
A. Không tương tác được với UI native như hộp thoại quyền hệ điều hành
B. Không thể chạy trên thiết bị
C. Không dùng được API test
D. Chỉ kiểm tra màu
**Đáp án: A.** Tài liệu nêu hạn chế với UI native; Patrol có thể mở rộng khả năng này.

### Câu 408. Patrol khác integration_test ở điểm nổi bật nào?
A. Có thể tương tác thêm với UI native như permission dialogs
B. Là ngôn ngữ thay Dart
C. Chỉ chạy unit test
D. Là công cụ thiết kế icon
**Đáp án: A.** Patrol là framework bên thứ ba mở rộng kiểm thử tương tác native.

### Câu 409. Trong widget test, finder được dùng để làm gì?
A. Tìm widget trong cây widget kiểm thử
B. Tìm package trên pub.dev
C. Tìm thiết bị Bluetooth
D. Tìm lỗi SQL
**Đáp án: A.** Finder xác định widget để assert hoặc tương tác.

### Câu 410. Trong widget test, thao tác `tester.tap` thường mô phỏng điều gì?
A. Chạm vào widget được tìm thấy
B. Chụp ảnh màn hình hệ điều hành
C. Tải ứng dụng lên store
D. Chạy linter
**Đáp án: A.** tester.tap mô phỏng thao tác chạm trong môi trường test.

### Câu 411. Vì sao nên mock dependency trong unit test?
A. Cô lập đơn vị đang kiểm tra khỏi hệ thống bên ngoài
B. Làm test luôn pass bất kể logic
C. Thay thế tất cả assertion
D. Tự động kiểm tra giao diện
**Đáp án: A.** Mock giúp kiểm soát đầu vào và tránh phụ thuộc không liên quan.

### Câu 412. Code coverage có thể giúp ích gì?
A. Cho biết phần mã được thực thi trong quá trình test
B. Chứng minh tuyệt đối không còn bug
C. Đo tốc độ internet
D. Thay thế review
**Đáp án: A.** Coverage là chỉ báo phạm vi thực thi, không đảm bảo không có lỗi.

### Câu 413. CI thường làm gì trong dự án Flutter?
A. Tự động chạy kiểm tra/test khi có thay đổi mã
B. Chỉ chỉnh sửa UI bằng tay
C. Tắt mọi test
D. Thay thế quản lý phiên bản
**Đáp án: A.** CI giúp phản hồi sớm khi thay đổi gây lỗi.

### Câu 414. Lệnh nào thường chạy bộ test Dart/Flutter của dự án?
A. flutter test
B. flutter doctor --publish
C. dart install-app
D. flutter ui-check
**Đáp án: A.** flutter test chạy các test của dự án.

### Câu 415. Build mode nào phù hợp để kiểm tra hiệu năng gần với bản phân phối?
A. Profile hoặc release tùy mục tiêu đo
B. Chỉ debug
C. Chế độ pub get
D. Chế độ format
**Đáp án: A.** Profile phục vụ phân tích hiệu năng; release mô phỏng bản phát hành.

### Câu 416. Lệnh nào tạo bản build Android App Bundle trong dự án Flutter?
A. flutter build appbundle
B. flutter create appbundle
C. dart bundle --android
D. flutter test --appbundle
**Đáp án: A.** flutter build appbundle tạo Android App Bundle.

### Câu 417. Lệnh nào tạo APK Android?
A. flutter build apk
B. flutter apk create
C. dart compile apk
D. flutter run --apk-only
**Đáp án: A.** flutter build apk tạo gói APK.

### Câu 418. Trước khi phát hành ứng dụng, vì sao cần cấu hình signing đúng?
A. Để tạo gói phát hành được ký theo yêu cầu nền tảng
B. Để Row hiển thị ngang
C. Để hot reload nhanh hơn
D. Để pubspec tự xóa package
**Đáp án: A.** Phát hành Android cần cấu hình ký ứng dụng phù hợp.

### Câu 419. Khi phát hành web, Flutter có thể tạo ứng dụng chạy trên nền tảng nào?
A. Trình duyệt web được hỗ trợ
B. Chỉ thiết bị Android
C. Chỉ máy chủ SQL
D. Chỉ terminal
**Đáp án: A.** Flutter hỗ trợ build ứng dụng web.

### Câu 420. Lý do cần kiểm tra ma trận nền tảng được hỗ trợ là gì?
A. Phiên bản hệ điều hành và kiến trúc có thể có trạng thái hỗ trợ khác nhau
B. Tất cả nền tảng luôn có yêu cầu giống hệt
C. Để chọn màu theme
D. Để tạo widget const
**Đáp án: A.** Tài liệu phân loại nền tảng/phiên bản được hỗ trợ, CI-tested hoặc không hỗ trợ.

### Câu 421. Trong một dự án mới, đội phát triển cần quyết định: bạn muốn kiểm tra phép tính thuần túy của một lớp nghiệp vụ. Loại test phù hợp nhất?
A. Unit test
B. Integration test toàn app
C. Kiểm tra phát hành thủ công
D. Visual design review
**Đáp án: A.** Unit test cô lập logic đơn vị.

### Câu 422. Khi review code, lập trình viên nên ưu tiên: bạn muốn kiểm tra phép tính thuần túy của một lớp nghiệp vụ. Loại test phù hợp nhất?
A. Unit test
B. Integration test toàn app
C. Kiểm tra phát hành thủ công
D. Visual design review
**Đáp án: A.** Unit test cô lập logic đơn vị.

### Câu 423. Trong tình huống thực tế, câu hỏi cần giải quyết là: bạn muốn kiểm tra phép tính thuần túy của một lớp nghiệp vụ. Loại test phù hợp nhất?
A. Unit test
B. Integration test toàn app
C. Kiểm tra phát hành thủ công
D. Visual design review
**Đáp án: A.** Unit test cô lập logic đơn vị.

### Câu 424. Để xử lý yêu cầu này, phương án nào hợp lý nhất: bạn muốn kiểm tra phép tính thuần túy của một lớp nghiệp vụ. Loại test phù hợp nhất?
A. Unit test
B. Integration test toàn app
C. Kiểm tra phát hành thủ công
D. Visual design review
**Đáp án: A.** Unit test cô lập logic đơn vị.

### Câu 425. Khi debug ứng dụng, nên chọn cách nào: bạn muốn kiểm tra phép tính thuần túy của một lớp nghiệp vụ. Loại test phù hợp nhất?
A. Unit test
B. Integration test toàn app
C. Kiểm tra phát hành thủ công
D. Visual design review
**Đáp án: A.** Unit test cô lập logic đơn vị.

### Câu 426. Trong quy trình phát triển, đâu là lựa chọn chính xác: bạn muốn kiểm tra phép tính thuần túy của một lớp nghiệp vụ. Loại test phù hợp nhất?
A. Unit test
B. Integration test toàn app
C. Kiểm tra phát hành thủ công
D. Visual design review
**Đáp án: A.** Unit test cô lập logic đơn vị.

### Câu 427. Nếu cần chọn giải pháp phù hợp, cách làm nào phù hợp: bạn muốn kiểm tra phép tính thuần túy của một lớp nghiệp vụ. Loại test phù hợp nhất?
A. Unit test
B. Integration test toàn app
C. Kiểm tra phát hành thủ công
D. Visual design review
**Đáp án: A.** Unit test cô lập logic đơn vị.

### Câu 428. Khi tối ưu quy trình làm việc, nên áp dụng điều gì: bạn muốn kiểm tra phép tính thuần túy của một lớp nghiệp vụ. Loại test phù hợp nhất?
A. Unit test
B. Integration test toàn app
C. Kiểm tra phát hành thủ công
D. Visual design review
**Đáp án: A.** Unit test cô lập logic đơn vị.

### Câu 429. Trong một dự án mới, đội phát triển cần quyết định: bạn cần xác minh nút xuất hiện và phản ứng khi tap. Loại test nào phù hợp?
A. Widget test
B. Chỉ unit test thuần túy
C. Chỉ kiểm tra signing
D. Chỉ CI config
**Đáp án: A.** Widget test kiểm tra UI và tương tác.

### Câu 430. Khi review code, lập trình viên nên ưu tiên: bạn cần xác minh nút xuất hiện và phản ứng khi tap. Loại test nào phù hợp?
A. Widget test
B. Chỉ unit test thuần túy
C. Chỉ kiểm tra signing
D. Chỉ CI config
**Đáp án: A.** Widget test kiểm tra UI và tương tác.

### Câu 431. Trong tình huống thực tế, câu hỏi cần giải quyết là: bạn cần xác minh nút xuất hiện và phản ứng khi tap. Loại test nào phù hợp?
A. Widget test
B. Chỉ unit test thuần túy
C. Chỉ kiểm tra signing
D. Chỉ CI config
**Đáp án: A.** Widget test kiểm tra UI và tương tác.

### Câu 432. Để xử lý yêu cầu này, phương án nào hợp lý nhất: bạn cần xác minh nút xuất hiện và phản ứng khi tap. Loại test nào phù hợp?
A. Widget test
B. Chỉ unit test thuần túy
C. Chỉ kiểm tra signing
D. Chỉ CI config
**Đáp án: A.** Widget test kiểm tra UI và tương tác.

### Câu 433. Khi debug ứng dụng, nên chọn cách nào: bạn cần xác minh nút xuất hiện và phản ứng khi tap. Loại test nào phù hợp?
A. Widget test
B. Chỉ unit test thuần túy
C. Chỉ kiểm tra signing
D. Chỉ CI config
**Đáp án: A.** Widget test kiểm tra UI và tương tác.

### Câu 434. Trong quy trình phát triển, đâu là lựa chọn chính xác: bạn cần xác minh nút xuất hiện và phản ứng khi tap. Loại test nào phù hợp?
A. Widget test
B. Chỉ unit test thuần túy
C. Chỉ kiểm tra signing
D. Chỉ CI config
**Đáp án: A.** Widget test kiểm tra UI và tương tác.

### Câu 435. Nếu cần chọn giải pháp phù hợp, cách làm nào phù hợp: bạn cần xác minh nút xuất hiện và phản ứng khi tap. Loại test nào phù hợp?
A. Widget test
B. Chỉ unit test thuần túy
C. Chỉ kiểm tra signing
D. Chỉ CI config
**Đáp án: A.** Widget test kiểm tra UI và tương tác.

### Câu 436. Khi tối ưu quy trình làm việc, nên áp dụng điều gì: bạn cần xác minh nút xuất hiện và phản ứng khi tap. Loại test nào phù hợp?
A. Widget test
B. Chỉ unit test thuần túy
C. Chỉ kiểm tra signing
D. Chỉ CI config
**Đáp án: A.** Widget test kiểm tra UI và tương tác.

### Câu 437. Trong một dự án mới, đội phát triển cần quyết định: bạn muốn kiểm tra luồng đăng nhập qua nhiều màn hình và dịch vụ. Loại test nào hữu ích?
A. Integration test
B. Chỉ format
C. Chỉ unit test cho một hàm
D. Chỉ phân tích tĩnh
**Đáp án: A.** Integration test kiểm tra các thành phần phối hợp.

### Câu 438. Khi review code, lập trình viên nên ưu tiên: bạn muốn kiểm tra luồng đăng nhập qua nhiều màn hình và dịch vụ. Loại test nào hữu ích?
A. Integration test
B. Chỉ format
C. Chỉ unit test cho một hàm
D. Chỉ phân tích tĩnh
**Đáp án: A.** Integration test kiểm tra các thành phần phối hợp.

### Câu 439. Trong tình huống thực tế, câu hỏi cần giải quyết là: bạn muốn kiểm tra luồng đăng nhập qua nhiều màn hình và dịch vụ. Loại test nào hữu ích?
A. Integration test
B. Chỉ format
C. Chỉ unit test cho một hàm
D. Chỉ phân tích tĩnh
**Đáp án: A.** Integration test kiểm tra các thành phần phối hợp.

### Câu 440. Để xử lý yêu cầu này, phương án nào hợp lý nhất: bạn muốn kiểm tra luồng đăng nhập qua nhiều màn hình và dịch vụ. Loại test nào hữu ích?
A. Integration test
B. Chỉ format
C. Chỉ unit test cho một hàm
D. Chỉ phân tích tĩnh
**Đáp án: A.** Integration test kiểm tra các thành phần phối hợp.

### Câu 441. Khi debug ứng dụng, nên chọn cách nào: bạn muốn kiểm tra luồng đăng nhập qua nhiều màn hình và dịch vụ. Loại test nào hữu ích?
A. Integration test
B. Chỉ format
C. Chỉ unit test cho một hàm
D. Chỉ phân tích tĩnh
**Đáp án: A.** Integration test kiểm tra các thành phần phối hợp.

### Câu 442. Trong quy trình phát triển, đâu là lựa chọn chính xác: bạn muốn kiểm tra luồng đăng nhập qua nhiều màn hình và dịch vụ. Loại test nào hữu ích?
A. Integration test
B. Chỉ format
C. Chỉ unit test cho một hàm
D. Chỉ phân tích tĩnh
**Đáp án: A.** Integration test kiểm tra các thành phần phối hợp.

### Câu 443. Nếu cần chọn giải pháp phù hợp, cách làm nào phù hợp: bạn muốn kiểm tra luồng đăng nhập qua nhiều màn hình và dịch vụ. Loại test nào hữu ích?
A. Integration test
B. Chỉ format
C. Chỉ unit test cho một hàm
D. Chỉ phân tích tĩnh
**Đáp án: A.** Integration test kiểm tra các thành phần phối hợp.

### Câu 444. Khi tối ưu quy trình làm việc, nên áp dụng điều gì: bạn muốn kiểm tra luồng đăng nhập qua nhiều màn hình và dịch vụ. Loại test nào hữu ích?
A. Integration test
B. Chỉ format
C. Chỉ unit test cho một hàm
D. Chỉ phân tích tĩnh
**Đáp án: A.** Integration test kiểm tra các thành phần phối hợp.

### Câu 445. Trong một dự án mới, đội phát triển cần quyết định: một integration test cần thao tác hộp thoại quyền native. Điều gì nên cân nhắc?
A. Framework như Patrol có hỗ trợ tương tác native
B. ListView
C. ThemeData
D. dart format
**Đáp án: A.** Patrol bổ sung khả năng tương tác native UI.

### Câu 446. Khi review code, lập trình viên nên ưu tiên: một integration test cần thao tác hộp thoại quyền native. Điều gì nên cân nhắc?
A. Framework như Patrol có hỗ trợ tương tác native
B. ListView
C. ThemeData
D. dart format
**Đáp án: A.** Patrol bổ sung khả năng tương tác native UI.

### Câu 447. Trong tình huống thực tế, câu hỏi cần giải quyết là: một integration test cần thao tác hộp thoại quyền native. Điều gì nên cân nhắc?
A. Framework như Patrol có hỗ trợ tương tác native
B. ListView
C. ThemeData
D. dart format
**Đáp án: A.** Patrol bổ sung khả năng tương tác native UI.

### Câu 448. Để xử lý yêu cầu này, phương án nào hợp lý nhất: một integration test cần thao tác hộp thoại quyền native. Điều gì nên cân nhắc?
A. Framework như Patrol có hỗ trợ tương tác native
B. ListView
C. ThemeData
D. dart format
**Đáp án: A.** Patrol bổ sung khả năng tương tác native UI.

### Câu 449. Khi debug ứng dụng, nên chọn cách nào: một integration test cần thao tác hộp thoại quyền native. Điều gì nên cân nhắc?
A. Framework như Patrol có hỗ trợ tương tác native
B. ListView
C. ThemeData
D. dart format
**Đáp án: A.** Patrol bổ sung khả năng tương tác native UI.

### Câu 450. Trong quy trình phát triển, đâu là lựa chọn chính xác: một integration test cần thao tác hộp thoại quyền native. Điều gì nên cân nhắc?
A. Framework như Patrol có hỗ trợ tương tác native
B. ListView
C. ThemeData
D. dart format
**Đáp án: A.** Patrol bổ sung khả năng tương tác native UI.

### Câu 451. Nếu cần chọn giải pháp phù hợp, cách làm nào phù hợp: một integration test cần thao tác hộp thoại quyền native. Điều gì nên cân nhắc?
A. Framework như Patrol có hỗ trợ tương tác native
B. ListView
C. ThemeData
D. dart format
**Đáp án: A.** Patrol bổ sung khả năng tương tác native UI.

### Câu 452. Khi tối ưu quy trình làm việc, nên áp dụng điều gì: một integration test cần thao tác hộp thoại quyền native. Điều gì nên cân nhắc?
A. Framework như Patrol có hỗ trợ tương tác native
B. ListView
C. ThemeData
D. dart format
**Đáp án: A.** Patrol bổ sung khả năng tương tác native UI.

### Câu 453. Trong một dự án mới, đội phát triển cần quyết định: một unit test phụ thuộc API ngoài nên làm sao để cô lập logic?
A. Mock dependency
B. Gọi production API bắt buộc
C. Bỏ assertion
D. Chỉ chạy trên web
**Đáp án: A.** Mock giúp kiểm soát phụ thuộc và kết quả.

### Câu 454. Khi review code, lập trình viên nên ưu tiên: một unit test phụ thuộc API ngoài nên làm sao để cô lập logic?
A. Mock dependency
B. Gọi production API bắt buộc
C. Bỏ assertion
D. Chỉ chạy trên web
**Đáp án: A.** Mock giúp kiểm soát phụ thuộc và kết quả.

### Câu 455. Trong tình huống thực tế, câu hỏi cần giải quyết là: một unit test phụ thuộc API ngoài nên làm sao để cô lập logic?
A. Mock dependency
B. Gọi production API bắt buộc
C. Bỏ assertion
D. Chỉ chạy trên web
**Đáp án: A.** Mock giúp kiểm soát phụ thuộc và kết quả.

### Câu 456. Để xử lý yêu cầu này, phương án nào hợp lý nhất: một unit test phụ thuộc API ngoài nên làm sao để cô lập logic?
A. Mock dependency
B. Gọi production API bắt buộc
C. Bỏ assertion
D. Chỉ chạy trên web
**Đáp án: A.** Mock giúp kiểm soát phụ thuộc và kết quả.

### Câu 457. Khi debug ứng dụng, nên chọn cách nào: một unit test phụ thuộc API ngoài nên làm sao để cô lập logic?
A. Mock dependency
B. Gọi production API bắt buộc
C. Bỏ assertion
D. Chỉ chạy trên web
**Đáp án: A.** Mock giúp kiểm soát phụ thuộc và kết quả.

### Câu 458. Trong quy trình phát triển, đâu là lựa chọn chính xác: một unit test phụ thuộc API ngoài nên làm sao để cô lập logic?
A. Mock dependency
B. Gọi production API bắt buộc
C. Bỏ assertion
D. Chỉ chạy trên web
**Đáp án: A.** Mock giúp kiểm soát phụ thuộc và kết quả.

### Câu 459. Nếu cần chọn giải pháp phù hợp, cách làm nào phù hợp: một unit test phụ thuộc API ngoài nên làm sao để cô lập logic?
A. Mock dependency
B. Gọi production API bắt buộc
C. Bỏ assertion
D. Chỉ chạy trên web
**Đáp án: A.** Mock giúp kiểm soát phụ thuộc và kết quả.

### Câu 460. Khi tối ưu quy trình làm việc, nên áp dụng điều gì: một unit test phụ thuộc API ngoài nên làm sao để cô lập logic?
A. Mock dependency
B. Gọi production API bắt buộc
C. Bỏ assertion
D. Chỉ chạy trên web
**Đáp án: A.** Mock giúp kiểm soát phụ thuộc và kết quả.

### Câu 461. Trong một dự án mới, đội phát triển cần quyết định: bạn muốn tự động chạy test mỗi khi đẩy code lên repo. Khái niệm nào phù hợp?
A. Continuous Integration
B. Hot reload
C. Navigator
D. MediaQuery
**Đáp án: A.** CI chạy các kiểm tra tự động khi có thay đổi.

### Câu 462. Khi review code, lập trình viên nên ưu tiên: bạn muốn tự động chạy test mỗi khi đẩy code lên repo. Khái niệm nào phù hợp?
A. Continuous Integration
B. Hot reload
C. Navigator
D. MediaQuery
**Đáp án: A.** CI chạy các kiểm tra tự động khi có thay đổi.

### Câu 463. Trong tình huống thực tế, câu hỏi cần giải quyết là: bạn muốn tự động chạy test mỗi khi đẩy code lên repo. Khái niệm nào phù hợp?
A. Continuous Integration
B. Hot reload
C. Navigator
D. MediaQuery
**Đáp án: A.** CI chạy các kiểm tra tự động khi có thay đổi.

### Câu 464. Để xử lý yêu cầu này, phương án nào hợp lý nhất: bạn muốn tự động chạy test mỗi khi đẩy code lên repo. Khái niệm nào phù hợp?
A. Continuous Integration
B. Hot reload
C. Navigator
D. MediaQuery
**Đáp án: A.** CI chạy các kiểm tra tự động khi có thay đổi.

### Câu 465. Khi debug ứng dụng, nên chọn cách nào: bạn muốn tự động chạy test mỗi khi đẩy code lên repo. Khái niệm nào phù hợp?
A. Continuous Integration
B. Hot reload
C. Navigator
D. MediaQuery
**Đáp án: A.** CI chạy các kiểm tra tự động khi có thay đổi.

### Câu 466. Trong quy trình phát triển, đâu là lựa chọn chính xác: bạn muốn tự động chạy test mỗi khi đẩy code lên repo. Khái niệm nào phù hợp?
A. Continuous Integration
B. Hot reload
C. Navigator
D. MediaQuery
**Đáp án: A.** CI chạy các kiểm tra tự động khi có thay đổi.

### Câu 467. Nếu cần chọn giải pháp phù hợp, cách làm nào phù hợp: bạn muốn tự động chạy test mỗi khi đẩy code lên repo. Khái niệm nào phù hợp?
A. Continuous Integration
B. Hot reload
C. Navigator
D. MediaQuery
**Đáp án: A.** CI chạy các kiểm tra tự động khi có thay đổi.

### Câu 468. Khi tối ưu quy trình làm việc, nên áp dụng điều gì: bạn muốn tự động chạy test mỗi khi đẩy code lên repo. Khái niệm nào phù hợp?
A. Continuous Integration
B. Hot reload
C. Navigator
D. MediaQuery
**Đáp án: A.** CI chạy các kiểm tra tự động khi có thay đổi.

### Câu 469. Trong một dự án mới, đội phát triển cần quyết định: coverage đạt 100% có chứng minh chắc chắn app không còn lỗi không?
A. Không
B. Có, tuyệt đối
C. Chỉ khi dùng Row
D. Chỉ khi build web
**Đáp án: A.** Coverage đo mã được thực thi chứ không chứng minh mọi hành vi đúng.

### Câu 470. Khi review code, lập trình viên nên ưu tiên: coverage đạt 100% có chứng minh chắc chắn app không còn lỗi không?
A. Không
B. Có, tuyệt đối
C. Chỉ khi dùng Row
D. Chỉ khi build web
**Đáp án: A.** Coverage đo mã được thực thi chứ không chứng minh mọi hành vi đúng.

### Câu 471. Trong tình huống thực tế, câu hỏi cần giải quyết là: coverage đạt 100% có chứng minh chắc chắn app không còn lỗi không?
A. Không
B. Có, tuyệt đối
C. Chỉ khi dùng Row
D. Chỉ khi build web
**Đáp án: A.** Coverage đo mã được thực thi chứ không chứng minh mọi hành vi đúng.

### Câu 472. Để xử lý yêu cầu này, phương án nào hợp lý nhất: coverage đạt 100% có chứng minh chắc chắn app không còn lỗi không?
A. Không
B. Có, tuyệt đối
C. Chỉ khi dùng Row
D. Chỉ khi build web
**Đáp án: A.** Coverage đo mã được thực thi chứ không chứng minh mọi hành vi đúng.

### Câu 473. Khi debug ứng dụng, nên chọn cách nào: coverage đạt 100% có chứng minh chắc chắn app không còn lỗi không?
A. Không
B. Có, tuyệt đối
C. Chỉ khi dùng Row
D. Chỉ khi build web
**Đáp án: A.** Coverage đo mã được thực thi chứ không chứng minh mọi hành vi đúng.

### Câu 474. Trong quy trình phát triển, đâu là lựa chọn chính xác: coverage đạt 100% có chứng minh chắc chắn app không còn lỗi không?
A. Không
B. Có, tuyệt đối
C. Chỉ khi dùng Row
D. Chỉ khi build web
**Đáp án: A.** Coverage đo mã được thực thi chứ không chứng minh mọi hành vi đúng.

### Câu 475. Nếu cần chọn giải pháp phù hợp, cách làm nào phù hợp: coverage đạt 100% có chứng minh chắc chắn app không còn lỗi không?
A. Không
B. Có, tuyệt đối
C. Chỉ khi dùng Row
D. Chỉ khi build web
**Đáp án: A.** Coverage đo mã được thực thi chứ không chứng minh mọi hành vi đúng.

### Câu 476. Khi tối ưu quy trình làm việc, nên áp dụng điều gì: coverage đạt 100% có chứng minh chắc chắn app không còn lỗi không?
A. Không
B. Có, tuyệt đối
C. Chỉ khi dùng Row
D. Chỉ khi build web
**Đáp án: A.** Coverage đo mã được thực thi chứ không chứng minh mọi hành vi đúng.

### Câu 477. Trong một dự án mới, đội phát triển cần quyết định: bạn cần tạo gói Android App Bundle để phân phối. Lệnh nào phù hợp?
A. flutter build appbundle
B. flutter test appbundle
C. dart format appbundle
D. flutter doctor appbundle
**Đáp án: A.** Đây là lệnh build Android App Bundle.

### Câu 478. Khi review code, lập trình viên nên ưu tiên: bạn cần tạo gói Android App Bundle để phân phối. Lệnh nào phù hợp?
A. flutter build appbundle
B. flutter test appbundle
C. dart format appbundle
D. flutter doctor appbundle
**Đáp án: A.** Đây là lệnh build Android App Bundle.

### Câu 479. Trong tình huống thực tế, câu hỏi cần giải quyết là: bạn cần tạo gói Android App Bundle để phân phối. Lệnh nào phù hợp?
A. flutter build appbundle
B. flutter test appbundle
C. dart format appbundle
D. flutter doctor appbundle
**Đáp án: A.** Đây là lệnh build Android App Bundle.

### Câu 480. Để xử lý yêu cầu này, phương án nào hợp lý nhất: bạn cần tạo gói Android App Bundle để phân phối. Lệnh nào phù hợp?
A. flutter build appbundle
B. flutter test appbundle
C. dart format appbundle
D. flutter doctor appbundle
**Đáp án: A.** Đây là lệnh build Android App Bundle.

### Câu 481. Khi debug ứng dụng, nên chọn cách nào: bạn cần tạo gói Android App Bundle để phân phối. Lệnh nào phù hợp?
A. flutter build appbundle
B. flutter test appbundle
C. dart format appbundle
D. flutter doctor appbundle
**Đáp án: A.** Đây là lệnh build Android App Bundle.

### Câu 482. Trong quy trình phát triển, đâu là lựa chọn chính xác: bạn cần tạo gói Android App Bundle để phân phối. Lệnh nào phù hợp?
A. flutter build appbundle
B. flutter test appbundle
C. dart format appbundle
D. flutter doctor appbundle
**Đáp án: A.** Đây là lệnh build Android App Bundle.

### Câu 483. Nếu cần chọn giải pháp phù hợp, cách làm nào phù hợp: bạn cần tạo gói Android App Bundle để phân phối. Lệnh nào phù hợp?
A. flutter build appbundle
B. flutter test appbundle
C. dart format appbundle
D. flutter doctor appbundle
**Đáp án: A.** Đây là lệnh build Android App Bundle.

### Câu 484. Khi tối ưu quy trình làm việc, nên áp dụng điều gì: bạn cần tạo gói Android App Bundle để phân phối. Lệnh nào phù hợp?
A. flutter build appbundle
B. flutter test appbundle
C. dart format appbundle
D. flutter doctor appbundle
**Đáp án: A.** Đây là lệnh build Android App Bundle.

### Câu 485. Trong một dự án mới, đội phát triển cần quyết định: bạn muốn tạo APK để cài thử thủ công. Lệnh nào phù hợp?
A. flutter build apk
B. flutter create apk
C. dart analyze apk
D. flutter pub get apk
**Đáp án: A.** flutter build apk tạo file APK.

### Câu 486. Khi review code, lập trình viên nên ưu tiên: bạn muốn tạo APK để cài thử thủ công. Lệnh nào phù hợp?
A. flutter build apk
B. flutter create apk
C. dart analyze apk
D. flutter pub get apk
**Đáp án: A.** flutter build apk tạo file APK.

### Câu 487. Trong tình huống thực tế, câu hỏi cần giải quyết là: bạn muốn tạo APK để cài thử thủ công. Lệnh nào phù hợp?
A. flutter build apk
B. flutter create apk
C. dart analyze apk
D. flutter pub get apk
**Đáp án: A.** flutter build apk tạo file APK.

### Câu 488. Để xử lý yêu cầu này, phương án nào hợp lý nhất: bạn muốn tạo APK để cài thử thủ công. Lệnh nào phù hợp?
A. flutter build apk
B. flutter create apk
C. dart analyze apk
D. flutter pub get apk
**Đáp án: A.** flutter build apk tạo file APK.

### Câu 489. Khi debug ứng dụng, nên chọn cách nào: bạn muốn tạo APK để cài thử thủ công. Lệnh nào phù hợp?
A. flutter build apk
B. flutter create apk
C. dart analyze apk
D. flutter pub get apk
**Đáp án: A.** flutter build apk tạo file APK.

### Câu 490. Trong quy trình phát triển, đâu là lựa chọn chính xác: bạn muốn tạo APK để cài thử thủ công. Lệnh nào phù hợp?
A. flutter build apk
B. flutter create apk
C. dart analyze apk
D. flutter pub get apk
**Đáp án: A.** flutter build apk tạo file APK.

### Câu 491. Nếu cần chọn giải pháp phù hợp, cách làm nào phù hợp: bạn muốn tạo APK để cài thử thủ công. Lệnh nào phù hợp?
A. flutter build apk
B. flutter create apk
C. dart analyze apk
D. flutter pub get apk
**Đáp án: A.** flutter build apk tạo file APK.

### Câu 492. Khi tối ưu quy trình làm việc, nên áp dụng điều gì: bạn muốn tạo APK để cài thử thủ công. Lệnh nào phù hợp?
A. flutter build apk
B. flutter create apk
C. dart analyze apk
D. flutter pub get apk
**Đáp án: A.** flutter build apk tạo file APK.

### Câu 493. Trong một dự án mới, đội phát triển cần quyết định: trước phát hành, bạn cần xác nhận OS/architecture được hỗ trợ. Nguồn nào đáng tin nhất?
A. Trang Supported deployment platforms của Flutter
B. Tên widget trong app
C. Ảnh chụp giao diện
D. Một bài đăng không rõ nguồn
**Đáp án: A.** Trang chính thức liệt kê nền tảng và phiên bản được hỗ trợ.

### Câu 494. Khi review code, lập trình viên nên ưu tiên: trước phát hành, bạn cần xác nhận OS/architecture được hỗ trợ. Nguồn nào đáng tin nhất?
A. Trang Supported deployment platforms của Flutter
B. Tên widget trong app
C. Ảnh chụp giao diện
D. Một bài đăng không rõ nguồn
**Đáp án: A.** Trang chính thức liệt kê nền tảng và phiên bản được hỗ trợ.

### Câu 495. Trong tình huống thực tế, câu hỏi cần giải quyết là: trước phát hành, bạn cần xác nhận OS/architecture được hỗ trợ. Nguồn nào đáng tin nhất?
A. Trang Supported deployment platforms của Flutter
B. Tên widget trong app
C. Ảnh chụp giao diện
D. Một bài đăng không rõ nguồn
**Đáp án: A.** Trang chính thức liệt kê nền tảng và phiên bản được hỗ trợ.

### Câu 496. Để xử lý yêu cầu này, phương án nào hợp lý nhất: trước phát hành, bạn cần xác nhận OS/architecture được hỗ trợ. Nguồn nào đáng tin nhất?
A. Trang Supported deployment platforms của Flutter
B. Tên widget trong app
C. Ảnh chụp giao diện
D. Một bài đăng không rõ nguồn
**Đáp án: A.** Trang chính thức liệt kê nền tảng và phiên bản được hỗ trợ.

### Câu 497. Khi debug ứng dụng, nên chọn cách nào: trước phát hành, bạn cần xác nhận OS/architecture được hỗ trợ. Nguồn nào đáng tin nhất?
A. Trang Supported deployment platforms của Flutter
B. Tên widget trong app
C. Ảnh chụp giao diện
D. Một bài đăng không rõ nguồn
**Đáp án: A.** Trang chính thức liệt kê nền tảng và phiên bản được hỗ trợ.

### Câu 498. Trong quy trình phát triển, đâu là lựa chọn chính xác: trước phát hành, bạn cần xác nhận OS/architecture được hỗ trợ. Nguồn nào đáng tin nhất?
A. Trang Supported deployment platforms của Flutter
B. Tên widget trong app
C. Ảnh chụp giao diện
D. Một bài đăng không rõ nguồn
**Đáp án: A.** Trang chính thức liệt kê nền tảng và phiên bản được hỗ trợ.

### Câu 499. Nếu cần chọn giải pháp phù hợp, cách làm nào phù hợp: trước phát hành, bạn cần xác nhận OS/architecture được hỗ trợ. Nguồn nào đáng tin nhất?
A. Trang Supported deployment platforms của Flutter
B. Tên widget trong app
C. Ảnh chụp giao diện
D. Một bài đăng không rõ nguồn
**Đáp án: A.** Trang chính thức liệt kê nền tảng và phiên bản được hỗ trợ.

### Câu 500. Khi tối ưu quy trình làm việc, nên áp dụng điều gì: trước phát hành, bạn cần xác nhận OS/architecture được hỗ trợ. Nguồn nào đáng tin nhất?
A. Trang Supported deployment platforms của Flutter
B. Tên widget trong app
C. Ảnh chụp giao diện
D. Một bài đăng không rõ nguồn
**Đáp án: A.** Trang chính thức liệt kê nền tảng và phiên bản được hỗ trợ.
