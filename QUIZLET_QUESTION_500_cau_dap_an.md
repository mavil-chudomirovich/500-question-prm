### Câu 1: Giới thiệu Flutter & Dart

**Question:** Which of the following is the best example of a case where you should NOT choose Flutter and should build natively instead?

A. A simple movie ticket booking app

B. An e-commerce app with a standard UI

C. A real-time graphics-intensive game requiring low-level hardware access

D. An internal enterprise management dashboard app

**Correct Answer:** C

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **C**.

Một trò chơi thời gian thực, sử dụng nhiều đồ họa yêu cầu quyền truy cập phần cứng cấp thấp là ví dụ trong sách giáo khoa về 'Khi thích hợp cho việc phát triển bản địa'. A, B, D đều là những trường hợp trong đó Flutter rất phù hợp.

**Link tham khảo:**

https://docs.flutter.dev/resources/faq

### Câu 2: Giới thiệu Flutter & Dart

**Question:** In Dart, `Set<int> s = {1, 2, 2, 3};` --- after initialization, what is `s.length`?

A. 4

B. 3

C. 2

D. Compile error because Set doesn't allow duplicate elements in a declaration

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

Set xóa các bản sao: `{1,2,2,3}` trở thành `{1,2,3}` → length = 3. A đếm sai số trùng lặp; C thiếu một phần tử; D sai vì Set cho phép trùng lặp trong khai báo, nó chỉ tự động xóa chúng khi được lưu trữ.

**Link tham khảo:**

https://docs.flutter.dev/resources/faq

### Câu 3: Giới thiệu Flutter & Dart

**Question:** Consider this named constructor code: class Point { int x, y; Point(this.x, this.y); Point.origin() : x = 0, y = 0; } void main() { var p1 = Point(3, 4); var p2 = Point.origin(); print('${p1.x},${p1.y} - ${p2.x},${p2.y}'); } What is printed?

A. 0,0 - 3,4

B. 3,4 - 0,0

C. Error because Dart doesn't support multiple constructors in the same class

D. null,null - 0,0

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

`Point(3,4)` gán x=3,y=4; `Point.origin()` gán x=0,y=0 thông qua danh sách khởi tạo --- in "3,4 - 0,0". A đảo ngược đầu ra; C sai vì Dart hỗ trợ các hàm tạo được đặt tên; D sai vì các giá trị được gán chính xác chứ không phải rỗng.

**Link tham khảo:**

https://docs.flutter.dev/resources/faq

### Câu 4: Giới thiệu Flutter & Dart

**Question:** Given this function: void greet({String name = "Guest", int age = 18}) { print("\$name is \$age"); } What does calling `greet(name: "Lan");` print?

A. Error due to missing age parameter

B. Lan is 18

C. Guest is 18

D. Lan is null

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

`greet(name: "Lan")` chỉ vượt qua name; age sử dụng giá trị mặc định là 18 → "Lan is 18". is sai vì age có giá trị mặc định; C is sai vì name đã được thông qua; D is sai vì age rõ ràng có giá trị mặc định.

**Link tham khảo:**

https://docs.flutter.dev/resources/faq

### Câu 5: Giới thiệu Flutter & Dart

**Question:** Consider this OOP code: class Animal { String sound() => "Some sound"; } class Dog extends Animal { @override String sound() => "Woof"; } void main() { Animal a = Dog(); print(a.sound()); } What is printed, and which OOP concept does it illustrate?

A. Some sound" --- illustrates Encapsulation

B. Woof" --- illustrates Polymorphism via method override

C. Compile error because Dog cannot be assigned to an Animal-typed variable

D. Woof Some sound" --- both functions are called

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

Điều này minh họa Tính đa hình: một biến được nhập dưới dạng Animal gọi phương thức được ghi đè của Dog khi chạy, in "Woof". A dán nhãn sai cho khái niệm; C sai vì việc cập nhật là hợp lệ; D sai vì chỉ có một phương thức được gọi.

**Link tham khảo:**

https://docs.flutter.dev/resources/faq

### Câu 6: Giới thiệu Flutter & Dart

**Question:** Given this string interpolation code: String name = "FPT University"; print("Hello \$name"); print("Length: \${name.length}"); print("Upper: \${name.toUpperCase()[0]}"); What character does the third line print?

A. f

B. F

C. FPT

D. Error because you cannot index directly into a function result inside string interpolation

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

`name.toUpperCase()` = "FPT ĐẠI HỌC", chỉ số [0] = 'F'. A có trường hợp sai; C không phải là một ký tự đơn lẻ; D sai vì Dart cho phép lập chỉ mục kết quả hàm trực tiếp bên trong phép nội suy chuỗi.

**Link tham khảo:**

https://docs.flutter.dev/resources/faq

### Câu 7: Giới thiệu Flutter & Dart

**Question:** In Dart, what is the role of the `main()` function?

A. It's a callback called last when the app closes

B. It's the entry point of execution for every Dart program

C. Only used in Flutter, not in pure Dart

D. A function used to define classes

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

`main()` là điểm bắt đầu thực thi cho mọi chương trình Dart. A, C, D mô tả sai vai trò của hàm main.

**Link tham khảo:**

https://docs.flutter.dev/resources/faq

### Câu 8: Giới thiệu Flutter & Dart

**Question:** In `List<int> nums = [1,2,3]; for(var x in nums) print(x);`, what is the main purpose of using `var` instead of `int` for variable `x`?

A. `var` must be used because `int` would cause an error

B. Type inference --- Dart automatically infers the data type (int) based on the List's elements, keeping code concise while still being strongly typed

C. `var` makes variable x fully dynamic with no type checking at all

D. No difference at all, it's just a coding habit

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

`var` cho phép Dart suy ra type (int) từ các phần tử của List, giữ cho mã ngắn gọn trong khi vẫn được gõ mạnh. A sai vì int có giá trị như nhau; C sai vì var khác với dynamic; D sai vì có sự suy luận kiểu in khác biệt ngay cả khi kết quả thời gian chạy trông giống nhau.

**Link tham khảo:**

https://docs.flutter.dev/resources/faq

### Câu 9: Giới thiệu Flutter & Dart

**Question:** Given this code, predict the result of calling `Eagle().fly()`: class Bird { void fly() => print("Bird flying"); } class Eagle implements Bird { @override void fly() => print("Eagle gliding"); }

A. Bird flying" because implements also inherits the method body

B. Eagle gliding" --- because implements only takes the interface (signature), Eagle must redefine fly() entirely itself

C. Compile error because Eagle has not defined a constructor

D. Both "Bird flying" and "Eagle gliding" are printed

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

Vì `implements` chỉ lấy chữ ký nên Eagle phải xác định lại hoàn toàn fly() → in "Eagle gliding". A sai vì implements không kế thừa phần thân phương thức; C sai vì ở đây không cần hàm tạo nào; D sai vì chỉ có một phương thức được gọi.

**Link tham khảo:**

https://docs.flutter.dev/resources/faq

### Câu 10: Giới thiệu Flutter & Dart

**Question:** Given this generic constraint: abstract class Animal { String sound(); } class Cat extends Animal { sound() => "Meow"; } class Box`<T extends Animal>` { T pet; Box(this.pet); void play() => print(pet.sound()); } What does the `<T extends Animal>` syntax mean?

A. Box can only hold the exact Animal type, no subclasses accepted

B. Restricts the generic type T to be Animal or a subclass of Animal, guaranteeing T always has a sound() method

C. This is invalid syntax, Dart doesn't support generic constraints

D. `extends` here means Box inherits from Animal

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

`<T extends Animal>` giới hạn T chung ở Animal hoặc các lớp con của nó, đảm bảo T có phương thức sound(). A sai vì các lớp con vẫn được chấp nhận; C sai vì this là cú pháp hợp lệ; D nhầm lẫn ràng buộc chung `extends` với kế thừa class.

**Link tham khảo:**

https://docs.flutter.dev/resources/faq

### Câu 11: Giới thiệu Flutter & Dart

**Question:** Given: var base = [1, 2, 3]; var list = [ ...base, if (true) 99, for (var x in base) x * 10 ]; print(list); What is printed?

A. [1, 2, 3, 99, 10, 20, 30]

B. [1, 2, 3, 10, 20, 30, 99]

C. [99, 1, 2, 3, 10, 20, 30]

D. Compile error because you cannot mix spread, if, and for in the same List

**Correct Answer:** A

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **A**.

`[...base, if(true) 99, for(x in base) x*10]` = [1,2,3, 99, 10,20,30]. B, C sai thứ tự; D sai vì Dart cho phép trộn lẫn các cú pháp này.

**Link tham khảo:**

https://docs.flutter.dev/resources/faq

### Câu 12: Giới thiệu Flutter & Dart

**Question:** In the example `AnimationController implements Listenable` mentioned in the lecture, what does using `implements` instead of `extends` demonstrate?

A. AnimationController copies all of Listenable's existing code

B. AnimationController only follows Listenable's contract and implements its own behavior, without inheriting existing implementation

C. AnimationController and Listenable are unrelated to each other

D. This is a syntax error, `extends` must be used

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

`implements` có nghĩa là AnimationController chỉ tuân theo hợp đồng và implements hành vi của chính nó mà không kế thừa cách triển khai hiện có từ Listenable. A sai vì implements không sao chép mã; C sai vì có mối quan hệ rõ ràng qua implements; D sai vì đây là cú pháp Dart hợp lệ.

**Link tham khảo:**

https://docs.flutter.dev/resources/faq

### Câu 13: Giới thiệu Flutter & Dart

**Question:** According to general recommendations, `BottomNavigationBar` best fits apps with how many main navigation tabs?

A. 1 tab

B. 2-5 tabs

C. 10-15 tabs

D. No limit on the number

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

BottomNavigationBar phù hợp nhất với 2-5 tab cho mỗi đề xuất chung. A, C, D không khớp với số được đề xuất.

**Link tham khảo:**

https://docs.flutter.dev/resources/faq

### Câu 14: Giới thiệu Flutter & Dart

**Question:** According to "Using Breakpoints" in the lecture, what layout-splitting rule based on width is proposed?

A. < 400px: Small, 400-800px: Medium, > 800px: Large

B. < 100px: Small, 100-300px: Medium, > 300px: Large

C. Only 2 levels: Mobile and Desktop, no intermediate level

D. Breakpoint is always fixed at 1024px in every case

**Correct Answer:** A

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **A**.

Quy tắc điểm dừng được đề xuất: <400px Nhỏ, 400-800px Trung bình, >800px Lớn --- khớp với trang trình bày. B, C, D không trùng với số đã nêu.

**Link tham khảo:**

https://docs.flutter.dev/resources/faq

### Câu 15: Giới thiệu Flutter & Dart

**Question:** `AutovalidateMode` has three modes: `disabled`, `always`, and `onUserInteraction`. According to the lecture, which mode is recommended and why?

A. `always` --- because showing errors right away helps users be more careful

B. `disabled` --- because never showing errors keeps the UI always clean

C. `onUserInteraction` --- because it avoids showing red errors right from the start (annoying) while still responding promptly once the user starts interacting with that field, balancing "too early" and "too late

D. No mode is recommended, it's arbitrary

**Correct Answer:** C

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **C**.

`onUserInteraction` được khuyên dùng vì nó cân bằng giữa việc không hiển thị lỗi quá early (khó chịu) và không quá late (khó hiểu). A, B, D không phù hợp với chế độ/lý do được đề xuất.

**Link tham khảo:**

https://docs.flutter.dev/resources/faq

### Câu 16: Giới thiệu Flutter & Dart

**Question:** Per the "Error Messages & UX" section, which of the following error messages is a GOOD UX example?

A. ERROR_400_INVALID_FIELD

B. Enter a valid email

C. Invalid!!!

D. Something went wrong somewhere

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

Nhập email hợp lệ" là một ví dụ UX tốt: ngắn gọn, rõ ràng, cụ thể. A, C, D tệ examples (mã lỗi kỹ thuật, mơ hồ, không cụ thể).

**Link tham khảo:**

https://docs.flutter.dev/resources/faq

### Câu 17: Giới thiệu Flutter & Dart

**Question:** What main benefit does Firebase Authentication provide over building your own authentication system from scratch?

A. It requires writing a more complex custom backend

B. Provides a secure, scalable login solution, supporting multiple methods (Google, Apple, Facebook, Email/Password) along with automatic session persistence and token refresh, reducing the effort of building an identity backend

C. Only works for apps that don't need login

D. Not compatible with Flutter

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

Firebase Auth cung cấp khả năng đăng nhập đa phương thức, an toàn, có thể mở rộng với khả năng duy trì/làm mới phiên tự động, giảm nỗ lực nhận dạng phụ trợ. A, C, D không khớp với lợi ích thực sự của Xác thực Firebase.

**Link tham khảo:**

https://docs.flutter.dev/resources/faq

### Câu 18: Giới thiệu Flutter & Dart

**Question:** In the Google Sign-In flow: "User taps Sign in with Google → Google account chooser → Google issues OAuth tokens → Convert to Firebase credential → Firebase signs in the user → App receives Firebase User object." What is the core meaning of the statement "Firebase handles identity → our app only handles UI + navigation"?

A. The Flutter app must write all the OAuth authentication logic itself from scratch

B. Firebase handles all the complex parts of identity verification and OAuth token management; the Flutter developer only needs to focus on building the UI and handling navigation after a successful login

C. Google Sign-In is unrelated to Firebase at all

D. UI and navigation must be entirely handled on the server side

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

Firebase xử lý tất cả xác minh danh tính/OAuth phức tạp, cho phép nhà phát triển Flutter chỉ tập trung vào UI và điều hướng. A, C, D không phù hợp với ý nghĩa của câu này.

**Link tham khảo:**

https://docs.flutter.dev/resources/faq

### Câu 19: Giới thiệu Flutter & Dart

**Question:** Per the "Understanding User Session" section, what components does a typical session usually include?

A. Only the user's password

B. Access token, user profile info, and the token expiry timestamp

C. Only the app name and Flutter version

D. The user's entire operation history on the device

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

Một phiên thông thường bao gồm: mã thông báo truy cập, người dùng profile và dấu thời gian hết hạn mã thông báo. A, C, D chưa đầy đủ/sai về nội dung phần "Tìm hiểu phiên người dùng.

**Link tham khảo:**

https://docs.flutter.dev/resources/faq

### Câu 20: Giới thiệu Flutter & Dart

**Question:** Which language is mainly used to write Flutter applications?

A. Dart

B. Kotlin

C. JavaScript

D. Swift

**Correct Answer:** A

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **A**.

Tùy chọn A đúng: Dart. Câu trả lời phù hợp với hành vi loại hệ thống hoặc an toàn vô giá trị của Dart; sử dụng các loại nullable và toán tử nhận biết null một cách có chủ ý để tránh lỗi null.

**Link tham khảo:**

https://docs.flutter.dev/resources/faq

### Câu 21: Giới thiệu Flutter & Dart

**Question:** Why is Flutter especially suitable for MVPs and startups?

A. It runs only on high-end devices

B. It requires two separate codebases

C. It eliminates the need for testing

D. It shortens time to market and maintains one codebase

**Correct Answer:** D

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **D**.

Tùy chọn D đúng: Nó rút ngắn thời gian tiếp thị và duy trì một cơ sở mã. Câu trả lời phù hợp với hành vi loại hệ thống hoặc an toàn vô giá trị của Dart; sử dụng các loại nullable và toán tử nhận biết null một cách có chủ ý để tránh lỗi null.

**Link tham khảo:**

https://docs.flutter.dev/resources/faq

### Câu 22: Giới thiệu Flutter & Dart

**Question:** In a Flutter-and-native integration model, which parts are usually handled by Flutter?

A. UI and business logic

B. The operating-system kernel

C. Driver compilation

D. Device firmware

**Correct Answer:** A

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **A**.

Tùy chọn A đúng: UI và logic nghiệp vụ. Câu trả lời phù hợp với hành vi loại hệ thống hoặc an toàn vô giá trị của Dart; sử dụng các loại nullable và toán tử nhận biết null một cách có chủ ý để tránh lỗi null.

**Link tham khảo:**

https://docs.flutter.dev/resources/faq

### Câu 23: Giới thiệu Flutter & Dart

**Question:** Which language is the Flutter Engine layer mainly written in?

A. Dart

B. Kotlin

C. Objective-C

D. C++

**Correct Answer:** D

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **D**.

Lựa chọn D đúng: C++. Câu trả lời phù hợp với hành vi loại hệ thống hoặc an toàn vô giá trị của Dart; sử dụng các loại nullable và toán tử nhận biết null một cách có chủ ý để tránh lỗi null.

**Link tham khảo:**

https://docs.flutter.dev/resources/faq

### Câu 24: Giới thiệu Flutter & Dart

**Question:** Which two compilation approaches does Dart combine?

A. JIT and AOT

B. SQL and NoSQL

C. HTML and CSS

D. JVM and CLR

**Correct Answer:** A

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **A**.

Tùy chọn A đúng: JIT và AOT. Câu trả lời phù hợp với hành vi loại hệ thống hoặc an toàn vô giá trị của Dart; sử dụng các loại nullable và toán tử nhận biết null một cách có chủ ý để tránh lỗi null.

**Link tham khảo:**

https://docs.flutter.dev/resources/faq

### Câu 25: Giới thiệu Flutter & Dart

**Question:** From which function does every Dart program begin execution?

A. run()

B. start()

C. init()

D. main()

**Correct Answer:** D

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **D**.

Tùy chọn D đúng: main(). Câu trả lời phù hợp với hành vi loại hệ thống hoặc an toàn vô giá trị của Dart; sử dụng các loại nullable và toán tử nhận biết null một cách có chủ ý để tránh lỗi null.

**Link tham khảo:**

https://docs.flutter.dev/resources/faq

### Câu 26: Giới thiệu Flutter & Dart

**Question:** Which function prints a line to the console in Dart?

A. print()

B. console.log()

C. echo()

D. Java's println()

**Correct Answer:** A

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **A**.

Tùy chọn A đúng: print(). Câu trả lời phù hợp với hành vi loại hệ thống hoặc an toàn vô giá trị của Dart; sử dụng các loại nullable và toán tử nhận biết null một cách có chủ ý để tránh lỗi null.

**Link tham khảo:**

https://docs.flutter.dev/resources/faq

### Câu 27: Giới thiệu Flutter & Dart

**Question:** Which Dart type is used for whole numbers?

A. bool

B. String

C. int

D. double

**Correct Answer:** C

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **C**.

Tùy chọn C đúng: int. Câu trả lời phù hợp với hành vi loại hệ thống hoặc an toàn vô giá trị của Dart; sử dụng các loại nullable và toán tử nhận biết null một cách có chủ ý để tránh lỗi null.

**Link tham khảo:**

https://docs.flutter.dev/resources/faq

### Câu 28: Giới thiệu Flutter & Dart

**Question:** Which Dart type is used for fractional numbers?

A. Never

B. Set

C. int

D. double

**Correct Answer:** D

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **D**.

Tùy chọn D đúng: double. Câu trả lời phù hợp với hành vi loại hệ thống hoặc an toàn vô giá trị của Dart; sử dụng các loại nullable và toán tử nhận biết null một cách có chủ ý để tránh lỗi null.

**Link tham khảo:**

https://docs.flutter.dev/resources/faq

### Câu 29: Giới thiệu Flutter & Dart

**Question:** Which data type represents an ordered collection?

A. List

B. enum

C. Map

D. Set

**Correct Answer:** A

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **A**.

Tùy chọn A đúng: List. Câu trả lời phù hợp với hành vi loại hệ thống hoặc an toàn vô giá trị của Dart; sử dụng các loại nullable và toán tử nhận biết null một cách có chủ ý để tránh lỗi null.

**Link tham khảo:**

https://docs.flutter.dev/resources/faq

### Câu 30: Giới thiệu Flutter & Dart

**Question:** What is the logical AND operator in Dart?

A. !

B. \|\|

C. &&

D. ??

**Correct Answer:** C

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **C**.

Lựa chọn C đúng: &&. Câu trả lời phù hợp với hành vi loại hệ thống hoặc an toàn vô giá trị của Dart; sử dụng các loại nullable và toán tử nhận biết null một cách có chủ ý để tránh lỗi null.

**Link tham khảo:**

https://docs.flutter.dev/resources/faq

### Câu 31: Giới thiệu Flutter & Dart

**Question:** According to the slide example, what is the main difference between dynamic and var?

A. dynamic is resolved at runtime and may hold values of different types

B. dynamic is always an integer

C. dynamic is a constant

D. dynamic cannot be assigned a value

**Correct Answer:** A

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **A**.

Tùy chọn A đúng: dynamic được giải quyết trong thời gian chạy và có thể chứa các giá trị thuộc các loại khác nhau. Câu trả lời phù hợp với hành vi loại hệ thống hoặc an toàn vô giá trị của Dart; sử dụng các loại nullable và toán tử nhận biết null một cách có chủ ý để tránh lỗi null.

**Link tham khảo:**

https://docs.flutter.dev/resources/faq

### Câu 32: Giới thiệu Flutter & Dart

**Question:** When is final appropriate?

A. When a function returns no value

B. When the value must be known at compile time

C. When a variable must continuously change type

D. When a value is assigned once but may be determined at runtime

**Correct Answer:** D

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **D**.

Tùy chọn D đúng: Khi một giá trị được gán một lần nhưng có thể được xác định khi chạy. Câu trả lời phù hợp với hành vi loại hệ thống hoặc an toàn vô giá trị của Dart; sử dụng các loại nullable và toán tử nhận biết null một cách có chủ ý để tránh lỗi null.

**Link tham khảo:**

https://docs.flutter.dev/resources/faq

### Câu 33: Giới thiệu Flutter & Dart

**Question:** In object-oriented programming, what is an object?

A. An operator

B. A configuration file

C. A type of loop

D. An instance of a class

**Correct Answer:** D

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **D**.

Tùy chọn D đúng: Một thể hiện của một lớp. Câu trả lời phù hợp với hành vi loại hệ thống hoặc an toàn vô giá trị của Dart; sử dụng các loại nullable và toán tử nhận biết null một cách có chủ ý để tránh lỗi null.

**Link tham khảo:**

https://docs.flutter.dev/resources/faq

### Câu 34: Giới thiệu Flutter & Dart

**Question:** What is the ?? operator commonly used for in null safety?

A. Providing a fallback value when the left side is null

B. Asserting that a value is definitely non-null

C. Declaring a nullable variable

D. Comparing two numbers

**Correct Answer:** A

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **A**.

Tùy chọn A đúng: Cung cấp giá trị dự phòng khi phía bên trái rỗng. Câu trả lời phù hợp với hành vi loại hệ thống hoặc an toàn vô giá trị của Dart; sử dụng các loại nullable và toán tử nhận biết null một cách có chủ ý để tránh lỗi null.

**Link tham khảo:**

https://docs.flutter.dev/resources/faq

### Câu 35: Giới thiệu Flutter & Dart

**Question:** When a class uses implements, what must it do?

A. Fully override the required interface members

B. Be declared abstract

C. Use only one method

D. Inherit all existing behavior without rewriting it

**Correct Answer:** A

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **A**.

Tùy chọn A đúng: Có đầy đủ override thành viên giao diện được yêu cầu. Câu trả lời phù hợp với hành vi loại hệ thống hoặc an toàn vô giá trị của Dart; sử dụng các loại nullable và toán tử nhận biết null một cách có chủ ý để tránh lỗi null.

**Link tham khảo:**

https://docs.flutter.dev/resources/faq

### Câu 36: Cài đặt & Môi trường

**Question:** A student creates an emulator on a low-spec PC. According to the lecture's recommendation, which emulator configuration is more suitable to reduce the load on the machine?

A. Pixel 8, API 33+

B. Pixel 3a, API 30

C. Pixel Tablet, API 34

D. Pixel Fold, API 35

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

Bài giảng khuyên dùng Pixel 3a / API 30 cho các máy có cấu hình thấp. A, C, D là cấu hình nặng hơn, không phù hợp với máy yếu.

**Link tham khảo:**

https://docs.flutter.dev/get-started/install

### Câu 37: Cài đặt & Môi trường

**Question:** How does DartPad differ from VS Code/Android Studio when developing Flutter?

A. DartPad requires a full SDK installation just like Android Studio

B. DartPad is an online environment, requires no installation, and runs directly in the browser

C. DartPad does not support basic widgets like Text, Column

D. DartPad can only be used for the Kotlin language

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

DartPad là môi trường trực tuyến không cần cài đặt. A sai vì DartPad không cần SDK đầy đủ; C sai vì DartPad hỗ trợ Văn bản, Cột; D sai vì đây là Dart/Flutter, không phải Kotlin.

**Link tham khảo:**

https://docs.flutter.dev/get-started/install

### Câu 38: Cài đặt & Môi trường

**Question:** In the 'Hello World' example run across three environments (DartPad, VS Code, Android Studio), what is the most important common point emphasized?

A. Each environment uses a different programming language

B. All tools compile down to the same Flutter runtime, producing identical results

C. Only Android Studio can run a real app

D. DartPad cannot display TextStyle

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

Điểm chung chính: tất cả các công cụ biên dịch theo cùng một thời gian chạy Flutter, cho kết quả giống hệt nhau trên DartPad/VS Code/Android Studio. A, C, D đều sai trong bài giảng.

**Link tham khảo:**

https://docs.flutter.dev/get-started/install

### Câu 39: Cài đặt & Môi trường

**Question:** According to the lecture, what tool does macOS need to build a Flutter app for iOS?

A. Android Studio

B. Xcode

C. Visual Studio

D. IntelliJ IDEA

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

macOS cần Xcode để xây dựng cho iOS, theo ghi chú 'macOS người dùng cần Xcode cho các bản dựng iOS.' A, C, D không phải là công cụ được nêu cho mục đích này.

**Link tham khảo:**

https://docs.flutter.dev/get-started/install

### Câu 40: Cài đặt & Môi trường

**Question:** Comparing `TimePicker` (`showTimePicker`) and `DatePicker` (`showDatePicker`) in the context of building a booking flow combining both date and time: what is the correct approach per the lecture?

A. Only call one of the two, Flutter will automatically infer the other value

B. Call two separate async functions sequentially (`pickDate()` and `pickTime()`), store the results in two separate State variables (`DateTime? d`, `TimeOfDay? t`), then display them combined in the UI

C. Use a single built-in `DateTimePicker` widget in the Flutter SDK

D. It's impossible to combine DatePicker and TimePicker on the same screen

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

Gọi `pickDate()` và `pickTime()` theo tuần tự, lưu trữ kết quả trong hai biến State riêng biệt, sau đó hiển thị kết hợp --- phù hợp với cách tiếp cận của bản demo Đặt trước. A, C, D không phản ánh việc thực hiện được dạy.

**Link tham khảo:**

https://docs.flutter.dev/get-started/install

### Câu 41: Cài đặt & Môi trường

**Question:** Given: ElevatedButton( onPressed: () { Navigator.push( context, MaterialPageRoute(builder: (_) => SecondPage()), ); }, child: Text('Go to Second Page'), ) According to the lecture's explanation of why this original code doesn't run directly on DartPad, what is the main cause?

A. DartPad doesn't support ElevatedButton

B. Missing a complete program structure: DartPad requires `main()`, `runApp()`, and a root `MaterialApp`; providing only a lone widget like this without a valid Navigator context (e.g. SecondPage undefined, or missing the surrounding MaterialApp) causes an error

C. Navigator.push only works on real devices, not on DartPad

D. MaterialPageRoute is an API that has been removed from Flutter

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

DartPad cần một structure hoàn chỉnh (main, runApp, MaterialApp); thiếu những thứ này hoặc tham chiếu không xác định classes (như SecondPage) gây ra lỗi. A, C, D không phù hợp với lời giải thích của bài giảng.

**Link tham khảo:**

https://docs.flutter.dev/get-started/install

### Câu 42: Cài đặt & Môi trường

**Question:** What is the main reason "hardcoding URLs everywhere in the code" is listed as a pitfall?

A. Hardcoded URLs make the app run significantly slower

B. It makes it difficult to change the base URL (e.g. switching dev/production environments), easily leading to mistakes and duplicated code when it must be edited in multiple places

C. Dart doesn't allow declaring URL strings directly in code

D. Only affects security, unrelated to code maintenance

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

Các URL được mã hóa cứng khiến việc thay đổi URL cơ sở trở nên khó khăn và gây ra sự trùng lặp/lỗi trên cơ sở mã. A, C, D không phù hợp với lý do thực tế đã nêu.

**Link tham khảo:**

https://docs.flutter.dev/get-started/install

### Câu 43: Cài đặt & Môi trường

**Question:** Given this FakePrefs code simulating SharedPreferences in DartPad: class FakePrefs { static final Map<String, Object> _store = {}; Future`<void>` setBool(String key, bool value) async { _store[key] = value; } bool getBool(String key) { final value = _store[key]; if (value is bool) return value; return false; } } Why is `_store` declared `static`?

A. To limit the app to only one FakePrefs object existing

B. So the stored data is shared across all instances of FakePrefs (mimicking the singleton-ish behavior of real SharedPreferences), instead of each instance having its own separate data copy

C. `static` has no effect in this context

D. To automatically save data permanently even after the app is closed

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

`static` làm cho dữ liệu được lưu trữ được chia sẻ trên tất cả các phiên bản FakePrefs, bắt chước hành vi đơn lẻ của SharedPreferences' thực tế. A, C, D không khớp với vai trò thực tế của static ở đây.

**Link tham khảo:**

https://docs.flutter.dev/get-started/install

### Câu 44: Cài đặt & Môi trường

**Question:** The slide note "Note: data resets on reload (not persistent)" when using FakePrefs on DartPad hints at what limitation?

A. Data stored in FakePrefs persists forever even after reloading the page

B. Since FakePrefs only stores data in the RAM of the current session, the data is lost on hot-restart or page reload --- unlike real SharedPreferences, which persists durably on the device

C. FakePrefs only works with the String data type

D. This is a Flutter bug that needs to be patched

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

FakePrefs chỉ lưu trữ dữ liệu trong bộ nhớ cho phiên hiện tại, do đó dữ liệu sẽ bị mất khi khởi động lại/tải lại nóng, không giống như SharedPreferences thực sự bền bỉ. A, C, D không phù hợp với giới hạn đã nêu này.

**Link tham khảo:**

https://docs.flutter.dev/get-started/install

### Câu 45: Cài đặt & Môi trường

**Question:** In the high-level Authentication Flow, after the backend verifies valid login credentials, what does the system usually return to the app?

A. The user's password in encrypted form

B. A token (usually a JWT) for the app to store and use for subsequent requests

C. The entire user database

D. A list of other apps the user has installed

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

Phần phụ trợ trả về token (thường là JWT) để ứng dụng lưu trữ và sử dụng cho các yêu cầu tiếp theo. A, C, D không khớp với quy trình xác thực tiêu chuẩn.

**Link tham khảo:**

https://docs.flutter.dev/get-started/install

### Câu 46: Cài đặt & Môi trường

**Question:** In Demo 10.5, at what point in the app's actual flow is the local notification triggered?

A. Right when the app opens, before login

B. Right after a successful login

C. Only when the app is fully in the background

D. When the app is uninstalled

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

Thông báo cục bộ được kích hoạt ngay sau khi đăng nhập thành công, theo Bản demo 10.5. A, C, D không khớp với luồng thực được mô tả.

**Link tham khảo:**

https://docs.flutter.dev/get-started/install

### Câu 47: Cài đặt & Môi trường

**Question:** Which description best defines Flutter?

A. Google's UI toolkit for building natively compiled applications from a single codebase

B. A programming language that completely replaces Dart

C. An Android emulator

D. Google's database management system

**Correct Answer:** A

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **A**.

Tùy chọn A đúng: Bộ công cụ UI của Google để xây dựng các ứng dụng được biên dịch nguyên bản từ một cơ sở mã duy nhất. Câu trả lời phù hợp với hành vi loại hệ thống hoặc an toàn vô giá trị của Dart; sử dụng các loại nullable và toán tử nhận biết null một cách có chủ ý để tránh lỗi null.

**Link tham khảo:**

https://docs.flutter.dev/get-started/install

### Câu 48: Cài đặt & Môi trường

**Question:** What does the Repository pattern separate from the UI?

A. The Android emulator

B. Data-access, API, and database logic

C. ThemeData colors

D. Row and Column layout

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

Tùy chọn B đúng: Truy cập dữ liệu, API và logic cơ sở dữ liệu. Câu trả lời phù hợp với hành vi loại hệ thống hoặc an toàn vô giá trị của Dart; sử dụng các loại nullable và toán tử nhận biết null một cách có chủ ý để tránh lỗi null.

**Link tham khảo:**

https://docs.flutter.dev/get-started/install

### Câu 49: Cài đặt & Môi trường

**Question:** What does setState() do?

A. Notifies the framework to rebuild the relevant State UI

B. Runs flutter doctor

C. Creates a database migration

D. Stores a token on the server

**Correct Answer:** A

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **A**.

Tùy chọn A đúng: Thông báo cho khung để xây dựng lại State UI có liên quan. Đây là khái niệm quản lý state: các thay đổi state phải thông báo hoặc kích hoạt phần có liên quan của UI để xây dựng lại.

**Link tham khảo:**

https://docs.flutter.dev/get-started/install

### Câu 50: Cài đặt & Môi trường

**Question:** Why cannot DartPad use the real SharedPreferences plugin?

A. Its environment does not provide native plugin or persistent-storage support

B. It requires JWT

C. SharedPreferences works only on iOS

D. DartPad runs only Java

**Correct Answer:** A

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **A**.

Tùy chọn A đúng: Môi trường của nó không cung cấp hỗ trợ gốc plugin hoặc lưu trữ liên tục. Câu trả lời phù hợp với hành vi loại hệ thống hoặc an toàn vô giá trị của Dart; sử dụng các loại nullable và toán tử nhận biết null một cách có chủ ý để tránh lỗi null.

**Link tham khảo:**

https://docs.flutter.dev/get-started/install

### Câu 51: Cài đặt & Môi trường

**Question:** Where does FakePrefs in DartPad store data?

A. A real database file

B. Secure Storage

C. A cloud server

D. An in-memory Map that resets on reload

**Correct Answer:** D

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **D**.

Tùy chọn D đúng: Map trong bộ nhớ sẽ đặt lại khi tải lại. Câu trả lời phù hợp với hành vi loại hệ thống hoặc an toàn vô giá trị của Dart; sử dụng các loại nullable và toán tử nhận biết null một cách có chủ ý để tránh lỗi null.

**Link tham khảo:**

https://docs.flutter.dev/get-started/install

### Câu 52: Cài đặt & Môi trường

**Question:** How is an access token normally used?

A. To store the password

B. To create a UI theme

C. Only once during application installation

D. It is sent with every API request that requires authentication

**Correct Answer:** D

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **D**.

Tùy chọn D đúng: Nó được gửi cùng với mọi yêu cầu API yêu cầu xác thực. Câu trả lời phù hợp với hành vi loại hệ thống hoặc an toàn vô giá trị của Dart; sử dụng các loại nullable và toán tử nhận biết null một cách có chủ ý để tránh lỗi null.

**Link tham khảo:**

https://docs.flutter.dev/get-started/install

### Câu 53: Cài đặt & Môi trường

**Question:** Which mode should be used for more accurate performance measurements?

A. Test mode only

B. Debug mode

C. DartPad mode

D. Profile mode

**Correct Answer:** D

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **D**.

Tùy chọn D đúng: Chế độ hồ sơ. Hiệu suất Flutter phải được đánh giá ở chế độ profile, tốt nhất là trên thiết bị vật lý vì thời gian ở chế độ debug không mang tính đại diện.

**Link tham khảo:**

https://docs.flutter.dev/get-started/install

### Câu 54: Cài đặt & Môi trường

**Question:** ListView.builder is best for?

A. One small fixed list

B. Large or dynamic lists

C. Static images

D. Theme setup

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

Tùy chọn B đúng: Danh sách lớn hoặc dynamic. Bố cục Flutter được tạo từ widgets; widget đã chọn cung cấp hành vi sắp xếp, định cỡ, giãn cách hoặc ràng buộc được mô tả.

**Link tham khảo:**

https://docs.flutter.dev/get-started/install

### Câu 55: Cài đặt & Môi trường

**Question:** Which command checks environment setup?

A. flutter doctor

B. flutter inspect

C. flutter env

D. flutter config

**Correct Answer:** A

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **A**.

Tùy chọn A đúng: flutter doctor. Câu trả lời phù hợp với hành vi loại hệ thống hoặc an toàn vô giá trị của Dart; sử dụng các loại nullable và toán tử nhận biết null một cách có chủ ý để tránh lỗi null.

**Link tham khảo:**

https://docs.flutter.dev/get-started/install

### Câu 56: Cài đặt & Môi trường

**Question:** Which command lists connected devices?

A. flutter devices

B. flutter emulators

C. flutter targets

D. flutter doctor

**Correct Answer:** A

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **A**.

Tùy chọn A đúng: flutter devices. Câu trả lời phù hợp với hành vi loại hệ thống hoặc an toàn vô giá trị của Dart; sử dụng các loại nullable và toán tử nhận biết null một cách có chủ ý để tránh lỗi null.

**Link tham khảo:**

https://docs.flutter.dev/get-started/install

### Câu 57: Cài đặt & Môi trường

**Question:** Which command shows available emulators?

A. flutter devices

B. flutter emulators

C. flutter doctor

D. flutter list

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

Tùy chọn B đúng: flutter emulators. Câu trả lời phù hợp với hành vi loại hệ thống hoặc an toàn vô giá trị của Dart; sử dụng các loại nullable và toán tử nhận biết null một cách có chủ ý để tránh lỗi null.

**Link tham khảo:**

https://docs.flutter.dev/get-started/install

### Câu 58: Cài đặt & Môi trường

**Question:** What is the purpose of pub.dev?

A. Flutter package repository

B. Device emulator

C. Rendering engine

D. Cloud IDE

**Correct Answer:** A

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **A**.

Tùy chọn A đúng: kho lưu trữ Flutter package. Câu trả lời phù hợp với hành vi loại hệ thống hoặc an toàn vô giá trị của Dart; sử dụng các loại nullable và toán tử nhận biết null một cách có chủ ý để tránh lỗi null.

**Link tham khảo:**

https://docs.flutter.dev/get-started/install

### Câu 59: Cài đặt & Môi trường

**Question:** Which tool is used to inspect widget tree and performance?

A. Flutter DevTools

B. Android Paint

C. Xcode Organizer only

D. Pub Inspector

**Correct Answer:** A

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **A**.

Lựa chọn A đúng: Flutter DevTools. Hiệu suất Flutter phải được đánh giá ở chế độ profile, tốt nhất là trên thiết bị vật lý vì thời gian ở chế độ debug không mang tính đại diện.

**Link tham khảo:**

https://docs.flutter.dev/get-started/install

### Câu 60: Cài đặt & Môi trường

**Question:** Which development environment is described as an online editor ideal for quick demos and learning syntax without installation?

A. VS Code

B. Android Studio

C. DartPad

D. Xcode

**Correct Answer:** C

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **C**.

Tùy chọn C đúng: DartPad. Câu trả lời phù hợp với hành vi loại hệ thống hoặc an toàn vô giá trị của Dart; sử dụng các loại nullable và toán tử nhận biết null một cách có chủ ý để tránh lỗi null.

**Link tham khảo:**

https://docs.flutter.dev/get-started/install

### Câu 61: Cài đặt & Môi trường

**Question:** Which command should a developer use to verify the Flutter installation and see a summary of the environment status?

A. flutter run

B. flutter create

C. flutter doctor

D. flutter build

**Correct Answer:** C

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **C**.

Tùy chọn C đúng: flutter doctor. Câu trả lời phù hợp với hành vi loại hệ thống hoặc an toàn vô giá trị của Dart; sử dụng các loại nullable và toán tử nhận biết null một cách có chủ ý để tránh lỗi null.

**Link tham khảo:**

https://docs.flutter.dev/get-started/install

### Câu 62: Cài đặt & Môi trường

**Question:** When should a developer choose to use local JSON files (dart:io) instead of SharedPreferences?

A. When storing a single boolean for dark mode.

B. When the data is larger than simple key-value pairs or needs to be exported/imported.

C. When the app requires complex relational data with sorting and filtering.

D. Only when the app is running in a DartPad environment.

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

Tùy chọn B đúng: Khi dữ liệu lớn hơn các cặp khóa-giá trị đơn giản hoặc cần được xuất/nhập.. Câu trả lời khớp với hành vi loại hệ thống hoặc an toàn rỗng của Dart; sử dụng các loại nullable và toán tử nhận biết null một cách có chủ ý để tránh lỗi null.

**Link tham khảo:**

https://docs.flutter.dev/get-started/install

### Câu 63: Cài đặt & Môi trường

**Question:** During the SQFlite setup process, which method is used to define the initial table structure when the database is first created?

A. openDatabase()

B. onCreate

C. insert()

D. query()

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

Tùy chọn B đúng: onCreate. Câu trả lời phù hợp với hành vi loại hệ thống hoặc an toàn vô giá trị của Dart; sử dụng các loại nullable và toán tử nhận biết null một cách có chủ ý để tránh lỗi null.

**Link tham khảo:**

https://docs.flutter.dev/get-started/install

### Câu 64: Flutter CLI & Pub

**Question:** In a Flutter project, which file is the entry point of the app?

A. pubspec.yaml

B. lib/main.dart

C. android/build.gradle

D. web/index.html

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

`lib/main.dart` là điểm vào, như đã nêu trong bảng cấu trúc dự án. A là tệp cấu hình phụ thuộc; C, D là các tệp cấu hình nền tảng, không phải điểm vào.

**Link tham khảo:**

https://docs.flutter.dev/tools/pubspec

### Câu 65: Flutter CLI & Pub

**Question:** Consider the following code running in main.dart: import 'package:flutter/material.dart'; void main() => runApp(const MaterialApp( home: Scaffold( body: Center( child: Text('Hello, World', style: TextStyle(fontSize: 28, fontWeight: FontWeight.bold)), ), ), )); If the `const` keyword before `MaterialApp` is removed, what happens to the app's behavior?

A. The app will fail to compile immediately

B. The app still runs correctly, only losing the performance optimization benefit since Flutter can no longer reuse the same immutable widget instance

C. The Text will fail to display "Hello, World

D. The Scaffold will no longer be able to have an AppBar later

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

`const` giúp Flutter tối ưu hóa việc phân biệt cây; gỡ bỏ nó vẫn chạy chính xác nhưng làm mất đi lợi ích hiệu suất đó. A sai vì nó không gây ra lỗi biên dịch; C sai vì Text vẫn hiển thị bình thường; D không liên quan.

**Link tham khảo:**

https://docs.flutter.dev/tools/pubspec

### Câu 66: Flutter CLI & Pub

**Question:** An instructor creates a new Flutter project with Organization ID `com.fptu.movies` and project name `movies`. What is the main purpose of the Organization ID during project creation?

A. Only used to set the display name shown on the device's home screen

B. Determines the unique package name/bundle identifier for the app when packaged for Android/iOS

C. Has no real effect, purely illustrative

D. Used to set the app's color theme

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

ID tổ chức xác định tên/số nhận dạng gói package duy nhất khi đóng gói ứng dụng. A, C, D mô tả sai vai trò kỹ thuật của nó.

**Link tham khảo:**

https://docs.flutter.dev/tools/pubspec

### Câu 67: Flutter CLI & Pub

**Question:** The lecture has this snippet: Widget tile(String t, String s) => Card( margin: const EdgeInsets.symmetric(vertical: 6), child: ListTile(title: Text(t), subtitle: Text(s)), ); What is the main benefit of extracting repeated UI into a separate function/widget like `tile()`, in the spirit of "Everything is a Widget"?

A. Makes Flutter run faster in absolute CPU terms

B. Reuse and organize UI into blocks (LEGO blocks), making code more readable, maintainable, and consistent in spacing

C. It's mandatory or Flutter will throw an error

D. No real benefit, just a coding style

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

Việc trích xuất các khối UI lặp lại sẽ hỗ trợ việc tái sử dụng, tổ chức, khả năng đọc, khả năng bảo trì và tính nhất quán về khoảng cách. A, C, D không phù hợp với lợi ích thực tế đã nêu.

**Link tham khảo:**

https://docs.flutter.dev/tools/pubspec

### Câu 68: Flutter CLI & Pub

**Question:** What is the difference between `Image.network` and `Image.asset`?

A. `Image.network` loads an image from an internet URL, `Image.asset` loads an image bundled within the project (declared in pubspec.yaml)

B. Both only load images from local storage

C. `Image.asset` only works on Web

D. `Image.network` doesn't support BoxFit

**Correct Answer:** A

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **A**.

`Image.network` tải từ một URL, `Image.asset` tải các hình ảnh dự án được nhóm. B, C, D mô tả sai hai chức năng của hình ảnh widgets'.

**Link tham khảo:**

https://docs.flutter.dev/tools/pubspec

### Câu 69: Flutter CLI & Pub

**Question:** In an Android deep link configuration, where does the following XML snippet belong and what does it mean? `<intent-filter>` `<action android:name="android.intent.action.VIEW" />` `<category android:name="android.intent.category.DEFAULT" />` `<category android:name="android.intent.category.BROWSABLE" />` `<data android:scheme="movieapps" android:host="movies" />` `</intent-filter>`

A. In `pubspec.yaml`, used to declare a dependency

B. In `AndroidManifest.xml`, declaring an intent-filter so the Android OS recognizes and routes links like `movieapps://movies` to the correct app

C. In `main.dart`, used to define a Flutter route

D. In `Info.plist`, only applicable to iOS

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

Đoạn mã này thuộc về `AndroidManifest.xml`, khai báo intent-filter để Android định tuyến các liên kết phù hợp tới ứng dụng này. A, C, D là vị trí tệp sai.

**Link tham khảo:**

https://docs.flutter.dev/tools/pubspec

### Câu 70: Flutter CLI & Pub

**Question:** On iOS, to support a custom URL scheme (e.g. `movieapps://`), where does the configuration need to be added?

A. AndroidManifest.xml

B. build.gradle

C. Info.plist (add URL Types → URL Schemes)

D. pubspec.yaml

**Correct Answer:** C

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **C**.

Cấu hình lược đồ URL tùy chỉnh trên iOS nằm trong Info.plist (Loại URL → Lược đồ URL). A, B, D không phải là vị trí chính xác cho cấu hình này.

**Link tham khảo:**

https://docs.flutter.dev/tools/pubspec

### Câu 71: Flutter CLI & Pub

**Question:** Comparing using the plain `http` package versus a more advanced HTTP management package (e.g. Dio, not in the slides but askable at an analytical level): in the spirit of Module 8's "Service Layer Pattern," why does wrapping HTTP logic in `ApiService` make switching HTTP libraries later (if needed) easier?

A. Because every HTTP package has an entirely identical API

B. Because all networking logic is isolated in a single class; if the library needs to change, you only edit inside `ApiService` without touching every widget that consumes the data, minimizing risk and effort

C. No benefit at all, switching libraries always requires rewriting the entire app

D. The Service Layer Pattern only applies to the `http` package, not to other packages

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

Việc tách biệt logic mạng trong một lớp có nghĩa là việc chuyển đổi thư viện chỉ yêu cầu chỉnh sửa ApiService chứ không phải tiêu tốn hết widget, giảm thiểu rủi ro/công sức. A, C, D không phù hợp với nguyên tắc kiến ​​trúc phần mềm này.

**Link tham khảo:**

https://docs.flutter.dev/tools/pubspec

### Câu 72: Flutter CLI & Pub

**Question:** Which package is mentioned for determining the app's storage directory when working with local JSON files?

A. shared_preferences

B. path_provider

C. sqflite

D. http

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

`path_provider` được sử dụng để xác định thư mục lưu trữ ứng dụng cho các tệp JSON cục bộ. A, C, D không phải là package cho mục đích này.

**Link tham khảo:**

https://docs.flutter.dev/tools/pubspec

### Câu 73: Flutter CLI & Pub

**Question:** Per the Google Sign-In "Common Errors & Fixes" table, the "DEVELOPER_ERROR" is usually caused by what?

A. Missing Internet connection

B. Wrong package name not matching the Firebase configuration

C. Missing pubspec.yaml file

D. Too-new Flutter version

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

DEVELOPER_ERROR" thường do tên package sai không khớp với cấu hình Firebase. A, C, D không khớp với nguyên nhân chung đã nêu.

**Link tham khảo:**

https://docs.flutter.dev/tools/pubspec

### Câu 74: Flutter CLI & Pub

**Question:** In the `flutter_bloc` package, what is the correct data-flow relationship between Event, Bloc, and State?

A. State → Bloc → Event

B. UI sends an Event into the Bloc → Bloc processes and maps the Event into a new State → Bloc emits the State → UI listens to the State to rebuild

C. Event and State are the same concept, interchangeable

D. Bloc only receives State, not Event

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

Luồng chính xác: UI gửi Sự kiện → Bloc quy trình/bản đồ tới State mới → phát ra State → UI lắng nghe và xây dựng lại. A đảo ngược điều này; C, D mô tả sai mối quan hệ giữa Sự kiện/State/Bloc.

**Link tham khảo:**

https://docs.flutter.dev/tools/pubspec

### Câu 75: Flutter CLI & Pub

**Question:** How does `Cubit` in the `flutter_bloc` package differ from a traditional `Bloc`?

A. Cubit cannot manage state, only Bloc can

B. Cubit is a simplified version of Bloc --- it doesn't need a separate Event class defined, instead directly calling methods to emit new States, reducing boilerplate compared to a full Bloc

C. Cubit only works with int data

D. Cubit and Bloc are entirely identical in API, no difference

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

Cubit là một Bloc được đơn giản hóa --- không cần lớp Sự kiện riêng biệt, các phương thức trực tiếp phát ra State mới, giảm bớt bản soạn sẵn. A, C, D mô tả sai đặc điểm của Cubit.

**Link tham khảo:**

https://docs.flutter.dev/tools/pubspec

### Câu 76: Flutter CLI & Pub

**Question:** Which file declares a Flutter project's dependencies and assets?

A. build.gradle.kts only

B. package.json

C. settings.xml

D. pubspec.yaml

**Correct Answer:** D

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **D**.

Tùy chọn D đúng: pubspec.yaml. pubspec.yaml là tệp kê khai dự án dùng để khai báo các gói và cấu hình nội dung.

**Link tham khảo:**

https://docs.flutter.dev/tools/pubspec

### Câu 77: Flutter CLI & Pub

**Question:** On Android, which element is commonly used to configure deep links?

A. ThemeData in main.dart

B. An SQLite trigger

C. An intent-filter in AndroidManifest

D. pubspec.lock

**Correct Answer:** C

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **C**.

Tùy chọn C là chính xác: Bộ lọc ý định trong AndroidManifest. API điều hướng Flutter quản lý quá trình chuyển đổi tuyến đường hoặc ánh xạ thông tin URL/tuyến đường đến tới ứng dụng state, tùy thuộc vào API được sử dụng.

**Link tham khảo:**

https://docs.flutter.dev/tools/pubspec

### Câu 78: Flutter CLI & Pub

**Question:** What is DEVELOPER_ERROR commonly related to?

A. An incorrect SQL SELECT statement

B. An incorrect package name or Firebase configuration

C. A missing SafeArea

D. A missing ListView

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

Tùy chọn B đúng: Tên package hoặc cấu hình Firebase không chính xác. Câu trả lời phù hợp với hành vi loại hệ thống hoặc an toàn vô giá trị của Dart; sử dụng các loại nullable và toán tử nhận biết null một cách có chủ ý để tránh lỗi null.

**Link tham khảo:**

https://docs.flutter.dev/tools/pubspec

### Câu 79: Flutter CLI & Pub

**Question:** What does CPU Profiler help identify?

A. A Firebase package name

B. A screen notch

C. Execution-time hotspots

D. Form error text

**Correct Answer:** C

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **C**.

Tùy chọn C đúng: Điểm nóng tại thời điểm thực thi. Câu trả lời phù hợp với hành vi loại hệ thống hoặc an toàn vô giá trị của Dart; sử dụng các loại nullable và toán tử nhận biết null một cách có chủ ý để tránh lỗi null.

**Link tham khảo:**

https://docs.flutter.dev/tools/pubspec

### Câu 80: Flutter CLI & Pub

**Question:** for-in loop is mainly used for?

A. Arithmetic

B. Iterating collections

C. Creating widgets

D. Importing packages

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

Tùy chọn B đúng: Lặp lại các bộ sưu tập. Câu trả lời phù hợp với hành vi loại hệ thống hoặc an toàn vô giá trị của Dart; sử dụng các loại nullable và toán tử nhận biết null một cách có chủ ý để tránh lỗi null.

**Link tham khảo:**

https://docs.flutter.dev/tools/pubspec

### Câu 81: Flutter CLI & Pub

**Question:** A class defines?

A. A loop

B. A structure or blueprint

C. A package

D. An import

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

Lựa chọn B đúng: Một công trình hoặc bản thiết kế. Câu trả lời phù hợp với hành vi loại hệ thống hoặc an toàn vô giá trị của Dart; sử dụng các loại nullable và toán tử nhận biết null một cách có chủ ý để tránh lỗi null.

**Link tham khảo:**

https://docs.flutter.dev/tools/pubspec

### Câu 82: Flutter CLI & Pub

**Question:** What is pubspec.yaml used for?

A. App screenshots

B. Dependencies and assets

C. SQL tables

D. Route trees

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

Tùy chọn B đúng: Phụ thuộc và tài sản. pubspec.yaml là tệp kê khai dự án dùng để khai báo các gói và cấu hình nội dung.

**Link tham khảo:**

https://docs.flutter.dev/tools/pubspec

### Câu 83: Flutter CLI & Pub

**Question:** Assets must be declared in?

A. main.dart

B. pubspec.yaml

C. analysis_options.yaml

D. androidmanifest.xml

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

Tùy chọn B đúng: pubspec.yaml. pubspec.yaml là tệp kê khai dự án dùng để khai báo các gói và cấu hình nội dung.

**Link tham khảo:**

https://docs.flutter.dev/tools/pubspec

### Câu 84: Flutter CLI & Pub

**Question:** Which command fetches Flutter dependencies?

A. flutter add

B. flutter get

C. flutter pub get

D. dart fetch

**Correct Answer:** C

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **C**.

Tùy chọn C đúng: flutter pub get. pubspec.yaml is the project manifest used to declare packages and asset configuration.

**Link tham khảo:**

https://docs.flutter.dev/tools/pubspec

### Câu 85: Flutter CLI & Pub

**Question:** Which command creates a new Flutter project?

A. flutter new

B. flutter create

C. dart create flutter

D. flutter init

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

Tùy chọn B đúng: flutter create. Câu trả lời phù hợp với hành vi loại hệ thống hoặc an toàn vô giá trị của Dart; sử dụng các loại nullable và toán tử nhận biết null một cách có chủ ý để tránh lỗi null.

**Link tham khảo:**

https://docs.flutter.dev/tools/pubspec

### Câu 86: Flutter CLI & Pub

**Question:** Which command runs a Flutter app?

A. flutter go

B. flutter start

C. flutter run

D. dart run ui

**Correct Answer:** C

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **C**.

Tùy chọn C đúng: flutter run. Câu trả lời phù hợp với hành vi loại hệ thống hoặc an toàn vô giá trị của Dart; sử dụng các loại nullable và toán tử nhận biết null một cách có chủ ý để tránh lỗi null.

**Link tham khảo:**

https://docs.flutter.dev/tools/pubspec

### Câu 87: Flutter CLI & Pub

**Question:** Which command cleans the build folder?

A. flutter purge

B. flutter clear

C. flutter clean

D. flutter remove

**Correct Answer:** C

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **C**.

Tùy chọn C đúng: flutter clean. Câu trả lời phù hợp với hành vi loại hệ thống hoặc an toàn vô giá trị của Dart; sử dụng các loại nullable và toán tử nhận biết null một cách có chủ ý để tránh lỗi null.

**Link tham khảo:**

https://docs.flutter.dev/tools/pubspec

### Câu 88: Flutter CLI & Pub

**Question:** Which command builds an iOS app?

A. flutter build ios

B. flutter ios build

C. flutter make ios

D. dart build ios

**Correct Answer:** A

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **A**.

Tùy chọn A đúng: flutter build ios. Flutter supports multiple deployment targets, mặc dù mỗi mục tiêu có thể có SDK, yêu cầu về công cụ và tích hợp nền tảng riêng.

**Link tham khảo:**

https://docs.flutter.dev/tools/pubspec

### Câu 89: Flutter CLI & Pub

**Question:** Which package is popular for simple state management?

A. Provider

B. SQL

C. HttpClient

D. Lint

**Correct Answer:** A

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **A**.

Tùy chọn A đúng: Provider. Đây là khái niệm quản lý state: các thay đổi state phải thông báo hoặc kích hoạt phần có liên quan của UI để xây dựng lại.

**Link tham khảo:**

https://docs.flutter.dev/tools/pubspec

### Câu 90: Flutter CLI & Pub

**Question:** Which package is used for HTTP requests commonly?

A. path

B. async

C. http

D. test

**Correct Answer:** C

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **C**.

Tùy chọn C đúng: http. Câu trả lời phù hợp với hành vi loại hệ thống hoặc an toàn vô giá trị của Dart; sử dụng các loại nullable và toán tử nhận biết null một cách có chủ ý để tránh lỗi null.

**Link tham khảo:**

https://docs.flutter.dev/tools/pubspec

### Câu 91: Flutter CLI & Pub

**Question:** Which method sends a GET request with package:http?

A. http.load

B. http.fetch

C. http.get

D. http.readall

**Correct Answer:** C

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **C**.

Tùy chọn C đúng: http.get. Câu trả lời phù hợp với hành vi loại hệ thống hoặc an toàn vô giá trị của Dart; sử dụng các loại nullable và toán tử nhận biết null một cách có chủ ý để tránh lỗi null.

**Link tham khảo:**

https://docs.flutter.dev/tools/pubspec

### Câu 92: Flutter CLI & Pub

**Question:** Which package is widely used for local key-value storage?

A. dio

B. shared_preferences

C. provider

D. analyzer

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

Tùy chọn B đúng: shared_preferences. Câu trả lời phù hợp với hành vi loại hệ thống hoặc an toàn vô giá trị của Dart; sử dụng các loại nullable và toán tử nhận biết null một cách có chủ ý để tránh lỗi null.

**Link tham khảo:**

https://docs.flutter.dev/tools/pubspec

### Câu 93: Flutter CLI & Pub

**Question:** Which package is often used for powerful networking in Flutter?

A. dio

B. lint

C. path

D. test

**Correct Answer:** A

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **A**.

Tùy chọn A đúng: dio. Câu trả lời phù hợp với hành vi loại hệ thống hoặc an toàn vô giá trị của Dart; sử dụng các loại nullable và toán tử nhận biết null một cách có chủ ý để tránh lỗi null.

**Link tham khảo:**

https://docs.flutter.dev/tools/pubspec

### Câu 94: Flutter CLI & Pub

**Question:** Which command runs tests in Flutter?

A. flutter test

B. flutter run test

C. dart flutter test

D. flutter check

**Correct Answer:** A

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **A**.

Tùy chọn A đúng: flutter test. Câu trả lời phù hợp với hành vi loại hệ thống hoặc an toàn vô giá trị của Dart; sử dụng các loại nullable và toán tử nhận biết null một cách có chủ ý để tránh lỗi null.

**Link tham khảo:**

https://docs.flutter.dev/tools/pubspec

### Câu 95: Flutter CLI & Pub

**Question:** Which file often stores lint rules for Dart/Flutter?

A. analysis_options.yaml

B. pubspec.lock

C. routes.yaml

D. build.gradle

**Correct Answer:** A

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **A**.

Tùy chọn A đúng: analysis_options.yaml. Câu trả lời phù hợp với hành vi loại hệ thống hoặc an toàn vô giá trị của Dart; sử dụng các loại nullable và toán tử nhận biết null một cách có chủ ý để tránh lỗi null.

**Link tham khảo:**

https://docs.flutter.dev/tools/pubspec

### Câu 96: Flutter CLI & Pub

**Question:** The extends keyword is used to?

A. Implement interface only

B. Inherit from a class

C. Create object

D. Import package

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

Tùy chọn B đúng: Kế thừa từ một lớp. Câu trả lời phù hợp với hành vi loại hệ thống hoặc an toàn vô giá trị của Dart; sử dụng các loại nullable và toán tử nhận biết null một cách có chủ ý để tránh lỗi null.

**Link tham khảo:**

https://docs.flutter.dev/tools/pubspec

### Câu 97: Flutter CLI & Pub

**Question:** The implements keyword is used to?

A. Force interface contract implementation

B. Extend build time

C. Export packages

D. Hide members

**Correct Answer:** A

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **A**.

Tùy chọn A đúng: Buộc thực hiện hợp đồng giao diện. Câu trả lời phù hợp với hành vi loại hệ thống hoặc an toàn vô giá trị của Dart; sử dụng các loại nullable và toán tử nhận biết null một cách có chủ ý để tránh lỗi null.

**Link tham khảo:**

https://docs.flutter.dev/tools/pubspec

### Câu 98: Flutter CLI & Pub

**Question:** Which file is generated and should usually not be edited manually for dependencies lock?

A. pubspec.lock

B. main.dart

C. analysis_options.yaml

D. android/app/build.gradle

**Correct Answer:** A

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **A**.

Tùy chọn A đúng: pubspec.lock. pubspec.yaml là tệp kê khai dự án dùng để khai báo các gói và cấu hình nội dung.

**Link tham khảo:**

https://docs.flutter.dev/tools/pubspec

### Câu 99: Công cụ dev & Hot reload

**Question:** Which combined compilation model does Dart use to support both fast development and optimized production performance?

A. JIT (Just-In-Time) only

B. AOT (Ahead-Of-Time) only

C. Both JIT (development) and AOT (production)

D. Purely interpreted, no compilation

**Correct Answer:** C

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **C**.

Dart kết hợp JIT (phát triển nhanh, hot reload) và AOT (biên dịch sản xuất hiệu suất cao). A và B state chỉ là một nửa sự thật; D hoàn toàn sai.

**Link tham khảo:**

https://docs.flutter.dev/tools/devtools/overview

### Câu 100: Công cụ dev & Hot reload

**Question:** Which statement is FALSE regarding the reasons to choose Flutter ('Why Flutter')?

A. Hot Reload/Hot Restart enables fast development

B. Provides Material & Cupertino widgets for a beautiful UI

C. Can only run on a single platform

D. Near-native performance

**Correct Answer:** C

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **C**.

'Chỉ có thể chạy trên một nền tảng duy nhất' là SAI vì Flutter là chéo-platform (Android, iOS, Web, Máy tính để bàn) --- đây là sức mạnh cốt lõi của Flutter, hoàn toàn trái ngược với tuyên bố 'Tại sao Flutter'. A, B, D đều là những lý do chính đáng được nêu trong bài giảng.

**Link tham khảo:**

https://docs.flutter.dev/tools/devtools/overview

### Câu 101: Công cụ dev & Hot reload

**Question:** What benefit does a Custom Exception in Dart (e.g. `class LoginException implements Exception`) offer over throwing an ordinary error string?

A. No benefit, it just adds code complexity

B. Provides specific business-domain error context, making it easier to debug and handle logic at the UI/Repository layer

C. Custom Exceptions run faster than plain Strings

D. Custom Exceptions can only be used with external APIs, not internally

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

Ngoại lệ tùy chỉnh cung cấp ngữ cảnh lỗi miền cụ thể, hỗ trợ gỡ lỗi và xử lý ở lớp UI/Repository. A, C, D không phù hợp với lợi ích thực tế đã nêu.

**Link tham khảo:**

https://docs.flutter.dev/tools/devtools/overview

### Câu 102: Công cụ dev & Hot reload

**Question:** Per the "Security" section of Best Practices, what practice is recommended regarding token storage?

A. Store the token as public plain text in a log file for easy debugging

B. Don't store raw tokens insecurely --- use a secure storage mechanism and always use HTTPS

C. Send the token over an unencrypted HTTP channel to increase speed

D. Share the token via social media to sync across multiple devices

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

Phương pháp được khuyến nghị là lưu trữ an toàn và luôn sử dụng HTTPS, không bao giờ lưu trữ mã thông báo thô một cách không an toàn. A, C, D là các hành vi SAI, trái với hướng dẫn bảo mật được khuyến nghị.

**Link tham khảo:**

https://docs.flutter.dev/tools/devtools/overview

### Câu 103: Công cụ dev & Hot reload

**Question:** What characteristic of the UI Overflow bug described in Module 11 makes it hard to detect if you only rely on running the app normally?

A. Overflow always makes the app crash instantly, so it's very easy to spot

B. Overflow bugs typically don't crash the app (no exception stopping the program), so tools like tests or DevTools are needed to detect them, rather than just relying on the app "still running

C. Overflow only occurs on iOS devices

D. Overflow is always automatically fixed by Dart at compile time

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

Lỗi tràn thường không làm hỏng ứng dụng, yêu cầu kiểm tra/DevTools để phát hiện thay vì chỉ quan sát rằng ứng dụng "vẫn chạy". A, C, D không phù hợp với đặc tính thực tế của lỗi tràn.

**Link tham khảo:**

https://docs.flutter.dev/tools/devtools/overview

### Câu 104: Công cụ dev & Hot reload

**Question:** In "Debugging Goals in Flutter," the "Frequent unnecessary rebuilds" issue directly relates to which topic that will be explored deeper in Module 12?

A. Building local JSON files

B. Performance Optimization

C. Deep link configuration

D. Setting up Firebase Authentication

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

Việc xây dựng lại thường xuyên không cần thiết" liên quan trực tiếp đến Tối ưu hóa Hiệu suất, được tìm hiểu sâu hơn trong Học phần 12. A, C, D không liên quan đến vấn đề xây dựng lại này.

**Link tham khảo:**

https://docs.flutter.dev/tools/devtools/overview

### Câu 105: Công cụ dev & Hot reload

**Question:** When Flutter does not directly support a feature such as camera, Bluetooth, or NFC, what integration approach is recommended?

A. Write native code and connect it through Platform Channels

B. Convert the entire application to HTML

C. Store the feature data in SharedPreferences

D. Use only Widget Inspector

**Correct Answer:** A

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **A**.

Tùy chọn A đúng: Viết mã gốc và kết nối nó thông qua Kênh nền tảng. Câu trả lời phù hợp với hành vi loại hệ thống hoặc an toàn vô giá trị của Dart; sử dụng các loại nullable và toán tử nhận biết null một cách có chủ ý để tránh lỗi null.

**Link tham khảo:**

https://docs.flutter.dev/tools/devtools/overview

### Câu 106: Công cụ dev & Hot reload

**Question:** What is a breakpoint used for?

A. Selecting a layout for a defined range of sizes

B. Encrypting a token

C. Pausing the debugger

D. Creating a database index

**Correct Answer:** A

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **A**.

Tùy chọn A đúng: Chọn bố cục cho phạm vi kích thước xác định. Câu trả lời phù hợp với hành vi loại hệ thống hoặc an toàn vô giá trị của Dart; sử dụng các loại nullable và toán tử nhận biết null một cách có chủ ý để tránh lỗi null.

**Link tham khảo:**

https://docs.flutter.dev/tools/devtools/overview

### Câu 107: Công cụ dev & Hot reload

**Question:** What does the DevTools Performance view help inspect?

A. JWT payloads

B. SQL schemas

C. The FPS timeline and frame-rendering cost

D. Named routes

**Correct Answer:** C

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **C**.

Tùy chọn C đúng: Dòng thời gian FPS và chi phí kết xuất khung hình. Hiệu suất Flutter phải được đánh giá ở chế độ profile, tốt nhất là trên thiết bị vật lý vì thời gian ở chế độ debug không mang tính đại diện.

**Link tham khảo:**

https://docs.flutter.dev/tools/devtools/overview

### Câu 108: Công cụ dev & Hot reload

**Question:** According to the source, what is a "Breakpoint"?

A. A point where the application code stops for debugging.

B. A specific pixel width (e.g., 600px) used to define when layout logic should change.

C. The maximum height a ListView can reach before it scrolls.

D. A crash that occurs when a widget overflows its boundaries.

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

Tùy chọn B đúng: Một pixel cụ thể width (e.g., 600px) được sử dụng để xác định khi nào logic bố cục sẽ thay đổi.. Câu trả lời khớp với hành vi loại hệ thống hoặc an toàn vô giá trị của Dart; sử dụng các loại nullable và toán tử nhận biết null một cách có chủ ý để tránh lỗi null.

**Link tham khảo:**

https://docs.flutter.dev/tools/devtools/overview

### Câu 109: Widget cơ bản & Key

**Question:** In Dart, what is the basic difference between `final` and `const`?

A. No difference, the two keywords are interchangeable in every case

B. `final` is a compile-time constant, `const` is a runtime constant

C. `final` is a value assigned once at runtime (runtime-constant), `const` is a compile-time constant

D. `final` is only for numeric types, `const` is only for string types

**Correct Answer:** C

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **C**.

`final` được chỉ định một lần khi chạy; `const` là giá trị được biết trước tại thời điểm biên dịch. B đảo ngược các định nghĩa; D sai vì cả hai đều không bị giới hạn ở một loại dữ liệu cụ thể.

**Link tham khảo:**

https://docs.flutter.dev/ui

### Câu 110: Widget cơ bản & Key

**Question:** Which statement is correct about the differences between `List`, `Set`, and `Map` in Dart?

A. List is unordered and disallows duplicates, Set is ordered, Map stores key-value pairs

B. List is an ordered collection, Set is a collection of unique (unordered) elements, Map stores key-value pairs

C. All three are the same data type, just different names

D. Set is ordered and allows duplicates, List does not

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

List được sắp xếp; Set là tập hợp các phần tử duy nhất, không có thứ tự; Map lưu trữ các cặp khóa-giá trị --- định nghĩa tiêu chuẩn. A, C, D đều mô tả sai các đặc điểm cơ bản.

**Link tham khảo:**

https://docs.flutter.dev/ui

### Câu 111: Widget cơ bản & Key

**Question:** In Flutter, `State<T>` is a textbook example of which concept from Module 3?

A. Mixin

B. Abstract class --- forcing StatefulWidgets to override methods to define behavior

C. Generic Constraint

D. Factory Constructor

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

`State<T>` là một lớp trừu tượng, buộc StatefulWidget phải sử dụng các phương thức override để xác định hành vi. A, C, D không mô tả chính xác bản chất của State`<T>`.

**Link tham khảo:**

https://docs.flutter.dev/ui

### Câu 112: Widget cơ bản & Key

**Question:** What does collection-if / collection-for syntax allow in Dart?

A. Only usable in a regular for loop, not in a List declaration

B. Flexibly building a List/Set/Map by inserting conditional elements (`if`) or generating elements from a loop (`for`) directly inside the collection declaration

C. Fully replaces the `var` keyword

D. Only applies to Map, not to List

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

Bộ sưu tập-if/for cho phép bạn xây dựng các bộ sưu tập một cách linh hoạt với các phần tử chèn có điều kiện hoặc được tạo vòng lặp ngay bên trong phần khai báo. A, C, D mô tả sai phạm vi áp dụng.

**Link tham khảo:**

https://docs.flutter.dev/ui

### Câu 113: Widget cơ bản & Key

**Question:** According to the lecture, what are Material Icons in Flutter commonly used for?

A. Purely decorative, no function

B. Navigation buttons, action buttons (add, delete), and status indicators

C. Only used as a Scaffold background

D. Completely replaces the Text widget

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

Biểu tượng Material được sử dụng cho các nút điều hướng, nút hành động và chỉ báo trạng thái. A, C, D mô tả sai mục đích của chúng.

**Link tham khảo:**

https://docs.flutter.dev/ui

### Câu 114: Widget cơ bản & Key

**Question:** Which data type stores values as key-value pairs?

A. Map

B. List

C. bool

D. Set

**Correct Answer:** A

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **A**.

Tùy chọn A đúng: Map. Câu trả lời phù hợp với hành vi loại hệ thống hoặc an toàn vô giá trị của Dart; sử dụng các loại nullable và toán tử nhận biết null một cách có chủ ý để tránh lỗi null.

**Link tham khảo:**

https://docs.flutter.dev/ui

### Câu 115: Widget cơ bản & Key

**Question:** What does the keyword var mean?

A. A compile-time constant

B. The variable type is inferred from its initial value

C. A function that never returns

D. A variable that can always change to any type

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

Tùy chọn B đúng: Loại biến được suy ra từ giá trị ban đầu của nó. Câu trả lời phù hợp với hành vi loại hệ thống hoặc an toàn vô giá trị của Dart; sử dụng các loại nullable và toán tử nhận biết null một cách có chủ ý để tránh lỗi null.

**Link tham khảo:**

https://docs.flutter.dev/ui

### Câu 116: Widget cơ bản & Key

**Question:** Which keyword is used to inherit from a class in Dart?

A. implements only

B. with only

C. extends

D. inherits

**Correct Answer:** C

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **C**.

Tùy chọn C đúng: extends. Câu trả lời phù hợp với hành vi loại hệ thống hoặc an toàn vô giá trị của Dart; sử dụng các loại nullable và toán tử nhận biết null một cách có chủ ý để tránh lỗi null.

**Link tham khảo:**

https://docs.flutter.dev/ui

### Câu 117: Widget cơ bản & Key

**Question:** How many main Scaffold widgets should a typical Material page usually contain?

A. One

B. Exactly two

C. Unlimited nested Scaffolds are always required

D. Scaffold must not be used

**Correct Answer:** A

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **A**.

Tùy chọn A đúng: One. Câu trả lời phù hợp với hành vi loại hệ thống hoặc an toàn vô giá trị của Dart; sử dụng các loại nullable và toán tử nhận biết null một cách có chủ ý để tránh lỗi null.

**Link tham khảo:**

https://docs.flutter.dev/ui

### Câu 118: Widget cơ bản & Key

**Question:** Which method displays an image declared in the project assets?

A. Image.network

B. AssetText

C. Image.asset

D. FileBuilder

**Correct Answer:** C

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **C**.

Tùy chọn C đúng: Image.asset. pubspec.yaml là tệp kê khai dự án dùng để khai báo các gói và cấu hình nội dung.

**Link tham khảo:**

https://docs.flutter.dev/ui

### Câu 119: Widget cơ bản & Key

**Question:** ElevatedButton is normally used for which kind of action?

A. An icon-only action

B. A secondary text link only

C. A primary action such as Login, Save, or Submit

D. Selecting a continuous value

**Correct Answer:** C

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **C**.

Tùy chọn C đúng: Hành động chính như Đăng nhập, Lưu hoặc Gửi. Câu trả lời phù hợp với hành vi loại hệ thống hoặc an toàn vô giá trị của Dart; sử dụng các loại nullable và toán tử nhận biết null một cách có chủ ý để tránh lỗi null.

**Link tham khảo:**

https://docs.flutter.dev/ui

### Câu 120: Widget cơ bản & Key

**Question:** Which method writes a String to a file?

A. A widget's setString()

B. writeAsString()

C. query()

D. pushNamed()

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

Tùy chọn B đúng: writeAsString(). Câu trả lời phù hợp với hành vi loại hệ thống hoặc an toàn vô giá trị của Dart; sử dụng các loại nullable và toán tử nhận biết null một cách có chủ ý để tránh lỗi null.

**Link tham khảo:**

https://docs.flutter.dev/ui

### Câu 121: Widget cơ bản & Key

**Question:** How is a token described?

A. An image file

B. A widget

C. The user's raw password

D. A short-lived digital credential generated by the server to prove identity

**Correct Answer:** D

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **D**.

Tùy chọn D đúng: Thông tin xác thực kỹ thuật số có thời hạn sử dụng ngắn do máy chủ tạo ra để chứng minh danh tính. Câu trả lời phù hợp với hành vi loại hệ thống hoặc an toàn vô giá trị của Dart; sử dụng các loại nullable và toán tử nhận biết null một cách có chủ ý để tránh lỗi null.

**Link tham khảo:**

https://docs.flutter.dev/ui

### Câu 122: Widget cơ bản & Key

**Question:** What is the main concept of Flutter UI?

A. Everything is a widget

B. Everything is a class

C. Everything is a function

D. Everything is a file

**Correct Answer:** A

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **A**.

Tùy chọn A đúng: Mọi thứ đều là widget. Câu trả lời phù hợp với hành vi loại hệ thống hoặc an toàn vô giá trị của Dart; sử dụng các loại nullable và toán tử nhận biết null một cách có chủ ý để tránh lỗi null.

**Link tham khảo:**

https://docs.flutter.dev/ui

### Câu 123: Widget cơ bản & Key

**Question:** Which Dart keyword declares an inferred variable?

A. let

B. dynamic

C. var

D. auto

**Correct Answer:** C

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **C**.

Tùy chọn C đúng: var. Câu trả lời phù hợp với hành vi loại hệ thống hoặc an toàn vô giá trị của Dart; sử dụng các loại nullable và toán tử nhận biết null một cách có chủ ý để tránh lỗi null.

**Link tham khảo:**

https://docs.flutter.dev/ui

### Câu 124: Widget cơ bản & Key

**Question:** Which collection uses key-value pairs?

A. List

B. Set

C. Map

D. Tuple

**Correct Answer:** C

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **C**.

Tùy chọn C đúng: Map. Câu trả lời phù hợp với hành vi loại hệ thống hoặc an toàn vô giá trị của Dart; sử dụng các loại nullable và toán tử nhận biết null một cách có chủ ý để tránh lỗi null.

**Link tham khảo:**

https://docs.flutter.dev/ui

### Câu 125: Widget cơ bản & Key

**Question:** An object is?

A. A function

B. An instance of a class

C. A library

D. A widget tree

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

Tùy chọn B đúng: Một thể hiện của một lớp. Câu trả lời phù hợp với hành vi loại hệ thống hoặc an toàn vô giá trị của Dart; sử dụng các loại nullable và toán tử nhận biết null một cách có chủ ý để tránh lỗi null.

**Link tham khảo:**

https://docs.flutter.dev/ui

### Câu 126: Widget cơ bản & Key

**Question:** Which widget is commonly used for material cards?

A. Panel

B. Card

C. Canvas

D. Tile

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

Tùy chọn B đúng: Card. Câu trả lời phù hợp với hành vi loại hệ thống hoặc an toàn vô giá trị của Dart; sử dụng các loại nullable và toán tử nhận biết null một cách có chủ ý để tránh lỗi null.

**Link tham khảo:**

https://docs.flutter.dev/ui

### Câu 127: Widget cơ bản & Key

**Question:** Which widget displays a single line of text?

A. Text

B. RichText only

C. Label

D. String

**Correct Answer:** A

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **A**.

Tùy chọn A đúng: Text. Câu trả lời phù hợp với hành vi loại hệ thống hoặc an toàn vô giá trị của Dart; sử dụng các loại nullable và toán tử nhận biết null một cách có chủ ý để tránh lỗi null.

**Link tham khảo:**

https://docs.flutter.dev/ui

### Câu 128: Widget cơ bản & Key

**Question:** Which widget displays an image from assets?

A. Image.asset

B. Asset.image

C. File.image

D. Picture.asset

**Correct Answer:** A

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **A**.

Tùy chọn A đúng: Image.asset. pubspec.yaml là tệp kê khai dự án dùng để khai báo các gói và cấu hình nội dung.

**Link tham khảo:**

https://docs.flutter.dev/ui

### Câu 129: Widget cơ bản & Key

**Question:** Which widget creates a Material button?

A. ElevatedButton

B. ButtonWidget

C. ClickButton

D. TapButton

**Correct Answer:** A

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **A**.

Tùy chọn A đúng: ElevatedButton. Câu trả lời phù hợp với hành vi loại hệ thống hoặc an toàn vô giá trị của Dart; sử dụng các loại nullable và toán tử nhận biết null một cách có chủ ý để tránh lỗi null.

**Link tham khảo:**

https://docs.flutter.dev/ui

### Câu 130: Widget cơ bản & Key

**Question:** Which widget is used for icon-only actions?

A. FloatingActionButton

B. IconButton

C. ActionChip

D. PopupMenuButton

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

Tùy chọn B đúng: IconButton. Câu trả lời phù hợp với hành vi loại hệ thống hoặc an toàn vô giá trị của Dart; sử dụng các loại nullable và toán tử nhận biết null một cách có chủ ý để tránh lỗi null.

**Link tham khảo:**

https://docs.flutter.dev/ui

### Câu 131: Widget cơ bản & Key

**Question:** Which widget commonly shows a circular action button?

A. ElevatedButton

B. Icon

C. FloatingActionButton

D. Card

**Correct Answer:** C

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **C**.

Tùy chọn C đúng: FloatingActionButton. Câu trả lời phù hợp với hành vi loại hệ thống hoặc an toàn vô giá trị của Dart; sử dụng các loại nullable và toán tử nhận biết null một cách có chủ ý để tránh lỗi null.

**Link tham khảo:**

https://docs.flutter.dev/ui

### Câu 132: Widget cơ bản & Key

**Question:** Which widget shows a popup message at the bottom?

A. AlertDialog

B. SnackBar

C. Banner

D. ToastView

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

Tùy chọn B đúng: SnackBar. Câu trả lời phù hợp với hành vi loại hệ thống hoặc an toàn vô giá trị của Dart; sử dụng các loại nullable và toán tử nhận biết null một cách có chủ ý để tránh lỗi null.

**Link tham khảo:**

https://docs.flutter.dev/ui

### Câu 133: Widget cơ bản & Key

**Question:** Which widget shows a modal dialog?

A. AlertDialog

B. Card

C. SnackBar

D. Drawer

**Correct Answer:** A

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **A**.

Tùy chọn A đúng: AlertDialog. Câu trả lời phù hợp với hành vi loại hệ thống hoặc an toàn vô giá trị của Dart; sử dụng các loại nullable và toán tử nhận biết null một cách có chủ ý để tránh lỗi null.

**Link tham khảo:**

https://docs.flutter.dev/ui

### Câu 134: Widget cơ bản & Key

**Question:** Which class holds mutable state for StatefulWidget?

A. State

B. WidgetStateHolder

C. MutableWidget

D. Store

**Correct Answer:** A

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **A**.

Tùy chọn A đúng: State. Đây là khái niệm quản lý state: các thay đổi state phải thông báo hoặc kích hoạt phần có liên quan của UI để xây dựng lại.

**Link tham khảo:**

https://docs.flutter.dev/ui

### Câu 135: Widget cơ bản & Key

**Question:** Which method describes the widget UI?

A. render

B. create

C. build

D. mount

**Correct Answer:** C

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **C**.

Tùy chọn C đúng: build. Câu trả lời phù hợp với hành vi loại hệ thống hoặc an toàn vô giá trị của Dart; sử dụng các loại nullable và toán tử nhận biết null một cách có chủ ý để tránh lỗi null.

**Link tham khảo:**

https://docs.flutter.dev/ui

### Câu 136: Widget cơ bản & Key

**Question:** Which widget should be preferred for static UI parts when possible?

A. const widget

B. dynamic widget

C. late widget

D. mutable widget

**Correct Answer:** A

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **A**.

Lựa chọn A đúng: const widget. Câu trả lời phù hợp với hành vi loại hệ thống hoặc an toàn vô giá trị của Dart; sử dụng các loại nullable và toán tử nhận biết null một cách có chủ ý để tránh lỗi null.

**Link tham khảo:**

https://docs.flutter.dev/ui

### Câu 137: Widget cơ bản & Key

**Question:** Which widget displays app bar title area?

A. AppBar

B. TopBar

C. TitleBar

D. Header

**Correct Answer:** A

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **A**.

Tùy chọn A đúng: AppBar. Câu trả lời phù hợp với hành vi loại hệ thống hoặc an toàn vô giá trị của Dart; sử dụng các loại nullable và toán tử nhận biết null một cách có chủ ý để tránh lỗi null.

**Link tham khảo:**

https://docs.flutter.dev/ui

### Câu 138: Widget cơ bản & Key

**Question:** Which property of AppBar usually shows the title widget?

A. text

B. header

C. title

D. label

**Correct Answer:** C

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **C**.

Tùy chọn C đúng: title. Câu trả lời phù hợp với hành vi loại hệ thống hoặc an toàn vô giá trị của Dart; sử dụng các loại nullable và toán tử nhận biết null một cách có chủ ý để tránh lỗi null.

**Link tham khảo:**

https://docs.flutter.dev/ui

### Câu 139: Widget cơ bản & Key

**Question:** Which widget animates opacity changes?

A. Opacity

B. AnimatedOpacity

C. FadeBox

D. AlphaWidget

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

Tùy chọn B đúng: AnimatedOpacity. Câu trả lời phù hợp với hành vi loại hệ thống hoặc an toàn vô giá trị của Dart; sử dụng các loại nullable và toán tử nhận biết null một cách có chủ ý để tránh lỗi null.

**Link tham khảo:**

https://docs.flutter.dev/ui

### Câu 140: Widget cơ bản & Key

**Question:** Which property of ListTile usually displays leading icon/avatar?

A. before

B. lead

C. leading

D. start

**Correct Answer:** C

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **C**.

Tùy chọn C đúng: leading. Câu trả lời phù hợp với hành vi loại hệ thống hoặc an toàn vô giá trị của Dart; sử dụng các loại nullable và toán tử nhận biết null một cách có chủ ý để tránh lỗi null.

**Link tham khảo:**

https://docs.flutter.dev/ui

### Câu 141: Widget cơ bản & Key

**Question:** Which property of ListTile usually displays smaller text below title?

A. caption

B. body

C. subtitle

D. note

**Correct Answer:** C

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **C**.

Tùy chọn C đúng: subtitle. Câu trả lời phù hợp với hành vi loại hệ thống hoặc an toàn vô giá trị của Dart; sử dụng các loại nullable và toán tử nhận biết null một cách có chủ ý để tránh lỗi null.

**Link tham khảo:**

https://docs.flutter.dev/ui

### Câu 142: Widget cơ bản & Key

**Question:** Which property of ListTile usually displays trailing widget?

A. trailing

B. end

C. after

D. suffix

**Correct Answer:** A

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **A**.

Tùy chọn A đúng: trailing. Câu trả lời phù hợp với hành vi loại hệ thống hoặc an toàn vô giá trị của Dart; sử dụng các loại nullable và toán tử nhận biết null một cách có chủ ý để tránh lỗi null.

**Link tham khảo:**

https://docs.flutter.dev/ui

### Câu 143: Widget cơ bản & Key

**Question:** Which widget can create dismissible list items?

A. Dismissible

B. Removable

C. SwipeDelete

D. HiddenTile

**Correct Answer:** A

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **A**.

Tùy chọn A đúng: Dismissible. Câu trả lời phù hợp với hành vi loại hệ thống hoặc an toàn vô giá trị của Dart; sử dụng các loại nullable và toán tử nhận biết null một cách có chủ ý để tránh lỗi null.

**Link tham khảo:**

https://docs.flutter.dev/ui

### Câu 144: Bố cục cơ bản

**Question:** Consider: dynamic x = 10; x = "Hello"; print(x); What happens when this code runs?

A. Compile error because a String cannot be assigned to a variable already typed as int

B. Prints "Hello" because `dynamic` allows the data type to change at runtime

C. Prints 10 because the original data type is preserved

D. Throws a TypeError exception at runtime

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

`dynamic` cho phép kiểu dữ liệu thay đổi trong thời gian chạy, do đó nó in ra "Hello". A sai vì đây là hành vi `dynamic` hợp lệ; C, D sai vì không có lỗi và giá trị final là "Hello".

**Link tham khảo:**

https://docs.flutter.dev/ui/layout

### Câu 145: Bố cục cơ bản

**Question:** What does the `??` operator do in Dart?

A. Type equality comparison

B. Returns the left-hand value if it's not null, otherwise returns the right-hand value

C. Forces a non-null cast, throwing an error if null

D. Logical XOR operator

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

`??` trả về phía bên trái nếu không rỗng, nếu không thì trả về bên phải side (kết hợp null). A, C, D mô tả sai chức năng của toán tử này.

**Link tham khảo:**

https://docs.flutter.dev/ui/layout

### Câu 146: Bố cục cơ bản

**Question:** Given `Map<String, int> scores = {"Anna": 95};`, what happens when accessing `scores["Ben"]` (a nonexistent key)?

A. Throws an exception immediately

B. Returns 0

C. Returns null

D. Returns an empty string

**Correct Answer:** C

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **C**.

Truy cập Map bằng khóa không tồn tại sẽ trả về giá trị rỗng trong Dart. A, B, D không khớp với hành vi mặc định của Map trong Dart.

**Link tham khảo:**

https://docs.flutter.dev/ui/layout

### Câu 147: Bố cục cơ bản

**Question:** In Dart's try/catch, what does the `catch (e, s)` syntax allow a developer to do?

A. Catch two different exception types at once

B. Catch the error object and its corresponding stack trace

C. Catch errors on two different threads

D. Only applicable to String-type errors

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

`catch (e, s)` bắt cả đối tượng lỗi và dấu vết ngăn xếp. A, C, D mô tả sai chức năng của cú pháp này.

**Link tham khảo:**

https://docs.flutter.dev/ui/layout

### Câu 148: Bố cục cơ bản

**Question:** Consider this constrained mixin code: class Pet { String name; Pet(this.name); } mixin CanBark on Pet { void bark() => print("\$name says woof!"); } class Dog extends Pet with CanBark { Dog() : super("Buddy"); } class Fish { // want to apply "with CanBark" here } If class `Fish` (not extending `Pet`) tries to declare `class Fish with CanBark {}`, what happens?

A. Compiles successfully, Fish will have a working bark() method

B. Compile error, because mixin `CanBark` is constrained `on Pet`, only classes extending Pet can apply this mixin

C. Compiles but throws a runtime error when calling bark()

D. Dart will automatically make Fish implicitly extend Pet

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

Mixin `CanBark on Pet` chỉ bị ràng buộc to các lớp apply to mở rộng Pet; vì Fish không mở rộng Pet nên biên dịch to không thành công. A, C, D không khớp với cách hoạt động của các ràng buộc mixin.

**Link tham khảo:**

https://docs.flutter.dev/ui/layout

### Câu 149: Bố cục cơ bản

**Question:** Given this generic class code: class Box`<T>` { T value; Box(this.value); void show() => print("Value = \$value"); } void main() => Box`<int>`(10).show(); If `Box<int>(10)` is replaced with `Box<String>(10)`, what happens?

A. Runs normally, prints "Value = 10

B. Compile error because 10 is not a String, violating the generic type constraint

C. Dart automatically converts 10 to "10

D. The program throws a runtime exception but still compiles

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

`Box<String>(10)` không biên dịch được vì 10 (int) không khớp với loại String đã khai báo, vi phạm quy trình kiểm tra loại chung nghiêm ngặt. A, C, D không khớp với việc kiểm tra loại chung nghiêm ngặt của Dart.

**Link tham khảo:**

https://docs.flutter.dev/ui/layout

### Câu 150: Bố cục cơ bản

**Question:** In Flutter, which widget acts as the "backbone" of a Material screen, providing AppBar, body, and FloatingActionButton?

A. Container

B. Scaffold

C. MaterialApp

D. Column

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

Scaffold là xương sống của màn hình Material, cung cấp AppBar/body/FAB. A, C, D không mô tả chính xác vai trò cấu trúc này.

**Link tham khảo:**

https://docs.flutter.dev/ui/layout

### Câu 151: Bố cục cơ bản

**Question:** A student places a `ListView` directly inside a `Column` without wrapping it in `Expanded` or `Flexible`. What common error occurs?

A. The app runs completely normally, no issues

B. A "RenderFlex overflow" error or unbounded height constraint error, because both Column and ListView try to claim unlimited space along the main axis

C. The ListView automatically shrinks to exactly 1 item

D. The Column is completely hidden from the screen

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

Việc đặt ListView trong Column không có Expanded/Flexible sẽ gây ra chiều cao không giới hạn error (tràn). A sai vì đây chính xác là lỗi phổ biến; C, D không khớp với hành vi thực tế của Flutter.

**Link tham khảo:**

https://docs.flutter.dev/ui/layout

### Câu 152: Bố cục cơ bản

**Question:** In the ListTile + CircleAvatar example: ListTile( leading: CircleAvatar(child: Text(m['title']\![0])), title: Text(m['title']!), subtitle: Text(m['year']!), trailing: const Icon(Icons.chevron_right), onTap: () => debugPrint('Selected \${m['title']}'), ); What does the `!` after `m['title']` mean in the context of Dart's null-safety?

A. Logical negation (NOT) operator

B. The "null assertion" operator --- asserting to the compiler that the value is definitely non-null; if wrong, it throws a runtime error

C. This operator is purely decorative, no effect on logic

D. Converts a String type to int

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

`!` là toán tử xác nhận null, xác nhận không null cho trình biên dịch, đưa ra lỗi thời gian chạy nếu sai. A, C, D mô tả sai ý nghĩa của toán tử này ở mức độ an toàn vô giá trị.

**Link tham khảo:**

https://docs.flutter.dev/ui/layout

### Câu 153: Bố cục cơ bản

**Question:** How does the `Wrap` widget differ from `Row`, and why does it suit a genre chip list?

A. Wrap is identical to Row, no difference

B. Wrap automatically wraps child elements to a new line when there isn't enough horizontal space, avoiding the overflow error Row would encounter with too many elements

C. Wrap only allows a maximum of 2 child elements

D. Row auto-wraps but Wrap doesn't

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

Wrap tự động xếp các phần tử con vào một dòng mới khi hết không gian theo chiều ngang, tránh tình trạng tràn Row. A, C, D mô tả sai/đảo ngược hai đặc điểm của widgets'.

**Link tham khảo:**

https://docs.flutter.dev/ui/layout

### Câu 154: Bố cục cơ bản

**Question:** In the Sectioned Home Screen code: body: ListView( padding: const EdgeInsets.all(12), children: [ section('Now Playing'), const Placeholder(fallbackHeight: 120), section('Trending'), const Placeholder(fallbackHeight: 120), ], ), Why use `ListView` (instead of `Column`) as the root widget for an entire screen containing multiple sections?

A. Because ListView is mandatory inside every Scaffold

B. Because ListView automatically allows scrolling when content exceeds screen height, while Column by default cannot scroll and easily causes overflow

C. Because Column doesn't support padding

D. No technical reason, it's a random choice

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

ListView cho phép cuộn khi nội dung vượt quá chiều cao màn hình, trong khi Column không cuộn theo mặc định và dễ bị tràn. A, C, D không phù hợp với lý do kỹ thuật thực tế.

**Link tham khảo:**

https://docs.flutter.dev/ui/layout

### Câu 155: Bố cục cơ bản

**Question:** In VS Code, what does the "Wrap with Widget" feature support for a Flutter developer?

A. Automatically deploy the app to a store

B. Quickly wrap a selected widget with another widget like Padding, Center, Expanded to refactor layout

C. Automatically fix all syntax errors in the file

D. Convert Dart to Kotlin

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

Gói bằng Widget" nhanh chóng gói một widget đã chọn bằng Phần đệm/Center/Mở rộng để tái cấu trúc bố cục. A, C, D không phù hợp với chức năng của tính năng này.

**Link tham khảo:**

https://docs.flutter.dev/ui/layout

### Câu 156: Bố cục cơ bản

**Question:** In a basic Scaffold example, where is `floatingActionButton` typically placed and what is it used for?

A. In the middle of the screen, as a background for the whole body

B. Usually floats in the bottom-right corner of the screen, used for a prominent primary action (e.g. add new)

C. Only displayed inside the AppBar

D. No fixed position, always centered in the AppBar

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

floatingActionButton thường nổi ở phía dưới bên phải, được sử dụng cho hành động chính nổi bật. A, C, D mô tả sai vị trí/vai trò của nó.

**Link tham khảo:**

https://docs.flutter.dev/ui/layout

### Câu 157: Bố cục cơ bản

**Question:** According to Module 4, when should `SingleChildScrollView` or `Flexible` be used to fix overflow on small screens?

A. Never needed, Flutter automatically handles overflow

B. When UI content exceeds the available screen size (especially on small screens), you need scrolling or flexible resizing to avoid layout overflow

C. Only used for apps running on Desktop

D. Only applicable to the Text widget

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

Sử dụng chúng khi nội dung vượt quá kích thước màn hình có sẵn, để cho phép cuộn hoặc thay đổi kích thước linh hoạt và tránh tràn. A sai vì Flutter không tự động xử lý mọi trường hợp tràn; C, D hạn chế sai phạm vi sử dụng.

**Link tham khảo:**

https://docs.flutter.dev/ui/layout

### Câu 158: Bố cục cơ bản

**Question:** What is the difference between `Flexible` and `Expanded` in a Row/Column?

A. No difference, the two widgets are entirely equivalent

B. `Expanded` forces a child to occupy the entire allocated space by flex ratio, while `Flexible` allows a child to be smaller than the allocated space if it doesn't need it all (depending on `fit: FlexFit.loose`)

C. Flexible can only be used inside GridView, not in Row/Column

D. Expanded only works with the Text widget

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

Expanded buộc lấp đầy toàn bộ không gian linh hoạt được phân bổ; Flexible cho phép kích thước nhỏ hơn nếu không phải là needed (FlexFit.loose). A, C, D không khớp với hành vi thực tế của chúng.

**Link tham khảo:**

https://docs.flutter.dev/ui/layout

### Câu 159: Bố cục cơ bản

**Question:** Per Module 6's "Best Practices," when should `Wrap` be prioritized over `Row`?

A. When displaying a long chip list that could overflow horizontal space

B. When there's only exactly 1 child element

C. When you need a fixed widget that never changes size

D. `Wrap` should never be prioritized over Row

**Correct Answer:** A

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **A**.

Wrap nên được ưu tiên cho danh sách chip dài có thể tràn theo chiều ngang. B, C, D không phù hợp với phương pháp hay nhất đã nêu.

**Link tham khảo:**

https://docs.flutter.dev/ui/layout

### Câu 160: Bố cục cơ bản

**Question:** In the example above, if the user enters the email `"taken123@test.com"`, what message does the app show after 2 seconds?

A. Account created for taken123@test.com

B. This email is already taken

C. No message is shown

D. The app will throw an exception because the email is invalid

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

Vì email bắt đầu bằng "taken" nên logic `_email.toLowerCase().startsWith("taken")` hiển thị "Email này đã là taken" sau 2 giây. A, C, D không khớp với logic của mã đã cho.

**Link tham khảo:**

https://docs.flutter.dev/ui/layout

### Câu 161: Bố cục cơ bản

**Question:** In the SQL SELECT syntax reviewed in the lecture, which clause is used to FILTER data rows before returning the result?

A. ORDER BY

B. WHERE

C. LIMIT

D. SELECT

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

`WHERE` lọc các hàng dữ liệu trước khi trả về kết quả. A, C, D phục vụ purposes khác (sắp xếp, giới hạn, chọn cột).

**Link tham khảo:**

https://docs.flutter.dev/ui/layout

### Câu 162: Bố cục cơ bản

**Question:** When is the `GROUP BY` clause combined with `HAVING` typically used?

A. When you need to sort results alphabetically

B. When you need to group rows by a criterion and apply a filter condition on aggregate functions like SUM, COUNT

C. When you need to limit the number of returned records (pagination)

D. When you need to rename a column in the query result

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

GROUP BY + HAVING được sử dụng để nhóm các hàng và lọc theo các hàm tổng hợp như SUM/COUNT. A, C, D không phù hợp với mục đích của các điều khoản này.

**Link tham khảo:**

https://docs.flutter.dev/ui/layout

### Câu 163: Bố cục cơ bản

**Question:** Which of the following widgets is a textbook example of Implicit Animation?

A. AnimationController

B. AnimatedContainer

C. Tween

D. CurvedAnimation

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

`AnimatedContainer` là Sách giáo khoa Hoạt ảnh tiềm ẩn widget --- nó tự động hoạt hình khi properties (màu sắc, kích thước...) của nó thay đổi. A, C, D là các thành phần thuộc về Hoạt ảnh rõ ràng hoặc các công cụ hỗ trợ, chứ không phải chính Hoạt ảnh ngầm định widget.

**Link tham khảo:**

https://docs.flutter.dev/ui/layout

### Câu 164: Bố cục cơ bản

**Question:** What does Map.putIfAbsent(key, ifAbsent) do when the key does not exist?

A. Deletes the entire Map

B. Immediately throws an error

C. Calls ifAbsent, stores the result in the Map, and returns the new value

D. Returns null without calling the function

**Correct Answer:** C

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **C**.

Tùy chọn C đúng: Gọi ifAbsent, lưu kết quả vào Map và trả về giá trị mới. Câu trả lời phù hợp với hành vi loại hệ thống hoặc an toàn vô giá trị của Dart; sử dụng các loại nullable và toán tử nhận biết null một cách có chủ ý để tránh lỗi null.

**Link tham khảo:**

https://docs.flutter.dev/ui/layout

### Câu 165: Bố cục cơ bản

**Question:** In which directions do Column and Row arrange their children?

A. Column vertically and Row horizontally

B. Both as grids

C. Both vertically only

D. Column horizontally and Row vertically

**Correct Answer:** A

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **A**.

Lựa chọn A đúng: Cột theo chiều dọc và Hàng theo chiều ngang. Bố cục Flutter được tạo từ widgets; widget đã chọn cung cấp hành vi sắp xếp, định cỡ, giãn cách hoặc ràng buộc được mô tả.

**Link tham khảo:**

https://docs.flutter.dev/ui/layout

### Câu 166: Bố cục cơ bản

**Question:** Which widget is appropriate for displaying a long scrollable list?

A. A non-scrollable Stack

B. IconButton

C. A fixed Row

D. ListView.builder or ListView.separated

**Correct Answer:** D

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **D**.

Tùy chọn D đúng: ListView.builder hoặc ListView.separated. Câu trả lời phù hợp với hành vi loại hệ thống hoặc an toàn vô giá trị của Dart; sử dụng các loại nullable và toán tử nhận biết null một cách có chủ ý để tránh lỗi null.

**Link tham khảo:**

https://docs.flutter.dev/ui/layout

### Câu 167: Bố cục cơ bản

**Question:** How is the common error of placing an unconstrained ListView inside a Column usually fixed?

A. Replace it with Text

B. Add a GlobalKey everywhere

C. Remove the Scaffold

D. Wrap the ListView with Expanded

**Correct Answer:** D

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **D**.

Tùy chọn D đúng: Gói ListView bằng Mở rộng. Bố cục Flutter được tạo từ widgets; widget đã chọn cung cấp hành vi sắp xếp, định cỡ, giãn cách hoặc ràng buộc được mô tả.

**Link tham khảo:**

https://docs.flutter.dev/ui/layout

### Câu 168: Bố cục cơ bản

**Question:** How does Flexible differ from Expanded?

A. It allows a child to flex without forcing it to fill all remaining space

B. It is used only for databases

C. It always creates scrolling

D. It cannot be used in a Row or Column

**Correct Answer:** A

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **A**.

Phương án A đúng: Nó cho phép trẻ uốn cong mà không buộc trẻ phải lấp đầy khoảng trống còn lại. Bố cục Flutter được tạo từ widgets; widget đã chọn cung cấp hành vi sắp xếp, định cỡ, giãn cách hoặc ràng buộc được mô tả.

**Link tham khảo:**

https://docs.flutter.dev/ui/layout

### Câu 169: Bố cục cơ bản

**Question:** Which improvement is suggested for screens wider than 800 pixels?

A. Require a fixed width

B. Hide all filters

C. Use a filter sidebar and a two-column movie list

D. Use only one narrow Column

**Correct Answer:** C

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **C**.

Tùy chọn C đúng: Sử dụng thanh bên bộ lọc và danh sách phim hai cột. Câu trả lời phù hợp với hành vi loại hệ thống hoặc an toàn vô giá trị của Dart; sử dụng các loại nullable và toán tử nhận biết null một cách có chủ ý để tránh lỗi null.

**Link tham khảo:**

https://docs.flutter.dev/ui/layout

### Câu 170: Bố cục cơ bản

**Question:** What type is a network response body before decoding?

A. A ready-made Post object

B. String

C. A database row

D. A widget tree

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

Tùy chọn B đúng: String. Câu trả lời phù hợp với hành vi loại hệ thống hoặc an toàn vô giá trị của Dart; sử dụng các loại nullable và toán tử nhận biết null một cách có chủ ý để tránh lỗi null.

**Link tham khảo:**

https://docs.flutter.dev/ui/layout

### Câu 171: Giới thiệu Flutter & Dart

**Question:** What is the arrow function syntax in Dart?

A. ->

B. =>

C. ==>

D. ::=

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

Tùy chọn B đúng: `=>` là cú pháp mũi tên của Dart cho hàm bao gồm một biểu thức.

**Link tham khảo:**

https://dart.dev/language/functions

### Câu 172: Bố cục cơ bản

**Question:** What does ?? mean in Dart?

A. Throw exception

B. Default if null

C. Force cast

D. Increment

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

Tùy chọn B đúng: Mặc định nếu rỗng. Câu trả lời phù hợp với hành vi loại hệ thống hoặc an toàn vô giá trị của Dart; sử dụng các loại nullable và toán tử nhận biết null một cách có chủ ý để tránh lỗi null.

**Link tham khảo:**

https://docs.flutter.dev/ui/layout

### Câu 173: Bố cục cơ bản

**Question:** Which widget adds empty space around its child?

A. Margin

B. Padding

C. Align

D. Stack

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

Tùy chọn B đúng: Padding. Câu trả lời phù hợp với hành vi loại hệ thống hoặc an toàn vô giá trị của Dart; sử dụng các loại nullable và toán tử nhận biết null một cách có chủ ý để tránh lỗi null.

**Link tham khảo:**

https://docs.flutter.dev/ui/layout

### Câu 174: Bố cục cơ bản

**Question:** Which widget centers its child?

A. Expanded

B. Align

C. Center

D. Positioned

**Correct Answer:** C

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **C**.

Tùy chọn C đúng: Center. Bố cục Flutter được tạo từ widgets; widget đã chọn cung cấp hành vi sắp xếp, định cỡ, giãn cách hoặc ràng buộc được mô tả.

**Link tham khảo:**

https://docs.flutter.dev/ui/layout

### Câu 175: Bố cục cơ bản

**Question:** Which widget arranges children vertically?

A. Row

B. Column

C. Stack

D. Wrap

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

Tùy chọn B đúng: Column. Câu trả lời phù hợp với hành vi loại hệ thống hoặc an toàn vô giá trị của Dart; sử dụng các loại nullable và toán tử nhận biết null một cách có chủ ý để tránh lỗi null.

**Link tham khảo:**

https://docs.flutter.dev/ui/layout

### Câu 176: Bố cục cơ bản

**Question:** Which widget arranges children horizontally?

A. Row

B. Column

C. ListView

D. Flex

**Correct Answer:** A

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **A**.

Tùy chọn A đúng: Row. Câu trả lời phù hợp với hành vi loại hệ thống hoặc an toàn vô giá trị của Dart; sử dụng các loại nullable và toán tử nhận biết null một cách có chủ ý để tránh lỗi null.

**Link tham khảo:**

https://docs.flutter.dev/ui/layout

### Câu 177: Bố cục cơ bản

**Question:** Which widget overlaps children?

A. Stack

B. Wrap

C. Column

D. Expanded

**Correct Answer:** A

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **A**.

Tùy chọn A đúng: Stack. Câu trả lời phù hợp với hành vi loại hệ thống hoặc an toàn vô giá trị của Dart; sử dụng các loại nullable và toán tử nhận biết null một cách có chủ ý để tránh lỗi null.

**Link tham khảo:**

https://docs.flutter.dev/ui/layout

### Câu 178: Bố cục cơ bản

**Question:** Which widget is used for scrollable lists?

A. GridView

B. ListView

C. Row

D. Table

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

Tùy chọn B đúng: ListView. Câu trả lời phù hợp với hành vi loại hệ thống hoặc an toàn vô giá trị của Dart; sử dụng các loại nullable và toán tử nhận biết null một cách có chủ ý để tránh lỗi null.

**Link tham khảo:**

https://docs.flutter.dev/ui/layout

### Câu 179: Bố cục nâng cao

**Question:** What is `CurvedAnimation` in Flutter used for?

A. Drawing a geometric curve shape on screen

B. Applying an easing curve (e.g. `Curves.easeIn`) onto an existing linear Animation, changing how the animation's value varies over time (uneven fast/slow) instead of linearly

C. Fully replacing AnimationController

D. Only usable with SliverAppBar

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

CurvedAnimation áp dụng đường cong giảm dần cho Hoạt ảnh tuyến tính, làm cho giá trị của nó thay đổi phi tuyến tính theo thời gian. A, C, D mô tả sai chức năng của nó.

**Link tham khảo:**

https://docs.flutter.dev/ui/layout

### Câu 180: Bố cục nâng cao

**Question:** What is the basic difference between `SliverAppBar` and a regular `AppBar`?

A. SliverAppBar can only display icons, not text

B. SliverAppBar is designed to work inside a `CustomScrollView`, able to expand, shrink, or show/hide flexibly based on scroll behavior, while a regular AppBar has a fixed position

C. SliverAppBar cannot contain action buttons

D. The two widgets are entirely identical, just different names

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

SliverAppBar hoạt động bên trong CustomScrollView với khả năng mở rộng/thu nhỏ/hiển thị ẩn linh hoạt khi cuộn, không giống như AppBar thông thường có vị trí cố định. A, C, D mô tả sai đặc điểm.

**Link tham khảo:**

https://docs.flutter.dev/ui/layout

### Câu 181: Bố cục nâng cao

**Question:** What are the `flexibleSpace` and `expandedHeight` properties of `SliverAppBar` used for?

A. `flexibleSpace` defines the content shown when the AppBar is in its expanded state (e.g. a large background image); `expandedHeight` sets the maximum height when the AppBar is fully expanded --- as you scroll down, the AppBar gradually shrinks to its standard height

B. These two properties only affect color, not size

C. `expandedHeight` determines the maximum number of action buttons

D. `flexibleSpace` only works when there's no `CustomScrollView`

**Correct Answer:** A

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **A**.

flexibleSpace xác định nội dung mở rộng-state; expandedHeight đặt chiều cao mở rộng tối đa, thu nhỏ khi cuộn. B, C, D mô tả sai chức năng của hai thuộc tính này.

**Link tham khảo:**

https://docs.flutter.dev/ui/layout

### Câu 182: Bố cục nâng cao

**Question:** In the Sliver ecosystem, how do `SliverList` and `SliverGrid` differ from a regular `ListView`/`GridView`?

A. No difference at all, the two types are entirely equivalent in every context

B. `SliverList`/`SliverGrid` are designed to combine multiple different scrollable content types (like SliverAppBar, SliverList, SliverGrid) within a SINGLE `CustomScrollView` with a seamless scroll effect, while `ListView`/`GridView` are independent scrollable widgets, hard to coordinate scroll effects with other scrollable widgets

C. SliverList only displays up to 10 elements

D. SliverGrid doesn't support displaying images

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

SliverList/SliverGrid được thiết kế để kết hợp liền mạch nhiều nội dung có thể cuộn trong một CustomScrollView, không giống như ListView/GridView độc lập. A, C, D không phù hợp với đặc tính kỹ thuật thực tế.

**Link tham khảo:**

https://docs.flutter.dev/ui/layout

### Câu 183: Bố cục nâng cao

**Question:** Which widget clips its child to rounded corners easily?

A. ClipRRect

B. BorderRadius

C. DecoratedBox

D. RoundedBox

**Correct Answer:** A

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **A**.

Tùy chọn A đúng: ClipRRect. Câu trả lời phù hợp với hành vi loại hệ thống hoặc an toàn vô giá trị của Dart; sử dụng các loại nullable và toán tử nhận biết null một cách có chủ ý để tránh lỗi null.

**Link tham khảo:**

https://docs.flutter.dev/ui/layout

### Câu 184: Bố cục nâng cao

**Question:** Which widget is used for custom painting?

A. CustomPaint

B. PaintBox

C. DrawWidget

D. CanvasView

**Correct Answer:** A

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **A**.

Tùy chọn A đúng: CustomPaint. Câu trả lời phù hợp với hành vi loại hệ thống hoặc an toàn vô giá trị của Dart; sử dụng các loại nullable và toán tử nhận biết null một cách có chủ ý để tránh lỗi null.

**Link tham khảo:**

https://docs.flutter.dev/ui/layout

### Câu 185: Bố cục nâng cao

**Question:** Which class is extended for custom drawing?

A. CustomPainter

B. PaintState

C. DrawerPainter

D. ShapeBuilder

**Correct Answer:** A

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **A**.

Tùy chọn A đúng: CustomPainter. Câu trả lời phù hợp với hành vi loại hệ thống hoặc an toàn vô giá trị của Dart; sử dụng các loại nullable và toán tử nhận biết null một cách có chủ ý để tránh lỗi null.

**Link tham khảo:**

https://docs.flutter.dev/ui/layout

### Câu 186: Bố cục nâng cao

**Question:** Which widget combines multiple slivers in one scrollable area?

A. CustomScrollView

B. MultiList

C. ScrollGroup

D. SliverBox

**Correct Answer:** A

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **A**.

Tùy chọn A đúng: CustomScrollView. Câu trả lời phù hợp với hành vi loại hệ thống hoặc an toàn vô giá trị của Dart; sử dụng các loại nullable và toán tử nhận biết null một cách có chủ ý để tránh lỗi null.

**Link tham khảo:**

https://docs.flutter.dev/ui/layout

### Câu 187: Bố cục nâng cao

**Question:** Which widget can pin and expand an app bar in a CustomScrollView?

A. SliverAppBar

B. FlexibleBar

C. StickyBar

D. AppHeader

**Correct Answer:** A

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **A**.

Tùy chọn A đúng: SliverAppBar. Câu trả lời phù hợp với hành vi loại hệ thống hoặc an toàn vô giá trị của Dart; sử dụng các loại nullable và toán tử nhận biết null một cách có chủ ý để tránh lỗi null.

**Link tham khảo:**

https://docs.flutter.dev/ui/layout

### Câu 188: Bố cục nâng cao

**Question:** Which widget is essential for ensuring that UI elements are not obscured by hardware features like the "Dynamic Island," notches, or curved screen edges?

A. Expanded

B. AspectRatio

C. SafeArea

D. FractionallySizedBox

**Correct Answer:** C

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **C**.

Tùy chọn C đúng: SafeArea. Câu trả lời phù hợp với hành vi loại hệ thống hoặc an toàn vô giá trị của Dart; sử dụng các loại nullable và toán tử nhận biết null một cách có chủ ý để tránh lỗi null.

**Link tham khảo:**

https://docs.flutter.dev/ui/layout

### Câu 189: Bố cục nâng cao

**Question:** If you want a GridView to display 2 columns on a mobile device and 4 columns on a tablet, which property should be updated based on screen width?

A. mainAxisSpacing

B. crossAxisCount

C. aspectRatio

D. pixelDensity

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

Tùy chọn B đúng: crossAxisCount. Bố cục Flutter được tạo từ widgets; widget đã chọn cung cấp hành vi sắp xếp, định cỡ, giãn cách hoặc ràng buộc được mô tả.

**Link tham khảo:**

https://docs.flutter.dev/ui/layout

### Câu 190: Theme & Responsive

**Question:** What is the main role of the Embedder Layer in Flutter's architecture?

A. Provide all Material and Cupertino widgets

B. Compile Dart code to ARM machine code

C. Platform-specific integration, handling input, lifecycle, and window management

D. Perform JSON parsing from APIs

**Correct Answer:** C

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **C**.

Lớp nhúng xử lý việc tích hợp, đầu vào, lifecycle và quản lý cửa sổ dành riêng cho nền tảng. A và D thuộc về các lớp Khung/mạng; B là công việc của trình biên dịch Dart AOT, không phải Trình nhúng.

**Link tham khảo:**

https://docs.flutter.dev/ui/adaptive-responsive

### Câu 191: Theme & Responsive

**Question:** What does `ThemeMode.system` mean in `MaterialApp`?

A. Forces the app to always use the light theme

B. Forces the app to always use the dark theme

C. The app automatically follows the device's OS-level light/dark appearance setting

D. Has no effect if darkTheme isn't declared

**Correct Answer:** C

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **C**.

`ThemeMode.system` làm cho ứng dụng tự động tuân theo cài đặt sáng/tối của hệ điều hành của thiết bị. A, B sửa một chế độ, mâu thuẫn với "system"; D sai vì themeMode vẫn có ý nghĩa nhưng hiệu ứng đầy đủ cần được khai báo darkTheme.

**Link tham khảo:**

https://docs.flutter.dev/ui/adaptive-responsive

### Câu 192: Theme & Responsive

**Question:** Given: return MaterialApp( theme: ThemeData.light(useMaterial3: true), darkTheme: ThemeData.dark(useMaterial3: true), themeMode: ThemeMode.dark, home: const DemoTheme(), ); Inside a child widget, what is the correct syntax to access the current theme's style (e.g. `titleLarge`)?

A. `ThemeData.of(context).textTheme.titleLarge`

B. `Theme.of(context).textTheme.titleLarge`

C. `context.theme.titleLarge`

D. `MaterialApp.theme(context).titleLarge`

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

`Theme.of(context).textTheme.titleLarge` is the correct syntax để truy cập the current theme. A, C, D không phải là API Flutter hợp lệ.

**Link tham khảo:**

https://docs.flutter.dev/ui/adaptive-responsive

### Câu 193: Theme & Responsive

**Question:** A student writes: class DemoTheme extends StatelessWidget { @override Widget build(BuildContext context) { return Scaffold( body: Center(child: Text('Current theme', style: Theme.of(context).textTheme.titleLarge)), ); } } What role does `BuildContext context` in the `build` function play when calling `Theme.of(context)`?

A. A parameter with no real effect, purely formal

B. Represents the widget's position in the widget tree, allowing it to look up the nearest InheritedWidget data (like Theme) above it in the tree

C. A global variable storing app state

D. Only used to pass API data

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

`BuildContext` đại diện cho vị trí cây của widget, cho phép tra cứu of InheritedWidget gần nhất (như Theme) phía trên nó. A, C, D mô tả sai vai trò của BuildContext.

**Link tham khảo:**

https://docs.flutter.dev/ui/adaptive-responsive

### Câu 194: Theme & Responsive

**Question:** What is the core difference between "Responsive UI" and "Adaptive UI" per the lecture?

A. Responsive UI changes based on device type, Adaptive UI changes based on available space

B. Responsive UI changes layout based on available space (e.g. Column → Row), while Adaptive UI changes based on device type (e.g. Bottom Nav → NavigationRail on tablet)

C. The two concepts are identical, no real difference

D. Adaptive UI only applies to Web apps

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

Đáp ứng UI phản ứng với không gian có sẵn; Thích ứng UI phản ứng với loại thiết bị. A đảo ngược hai định nghĩa; C, D không phù hợp với nội dung bài giảng.

**Link tham khảo:**

https://docs.flutter.dev/ui/adaptive-responsive

### Câu 195: Theme & Responsive

**Question:** What information does `MediaQuery.of(context).size.width` retrieve?

A. The width of the current widget itself

B. The full width of the current device's screen

C. The width of the virtual keyboard

D. The number of child widgets in the tree

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

`MediaQuery.of(context).size.width` lấy toàn màn hình của thiết bị hiện tại width. A, C, D mô tả sai phạm vi of giá trị được trả về.

**Link tham khảo:**

https://docs.flutter.dev/ui/adaptive-responsive

### Câu 196: Theme & Responsive

**Question:** Given: Widget build(BuildContext context) { final w = MediaQuery.of(context).size.width; return Scaffold( body: Center( child: Text(w < 600 ? "Mobile Layout" : "Tablet Layout"), ), ); } When the device is rotated from portrait to landscape, making the width exceed 600px, what happens to the displayed text?

A. Nothing changes because MediaQuery only reads the value once at app startup

B. Flutter automatically rebuilds the widget when the screen size changes (e.g. due to rotation), so the text switches from "Mobile Layout" to "Tablet Layout

C. The app crashes because MediaQuery doesn't support screen rotation

D. Only the Text is completely hidden until the app restarts

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

Flutter tự động tạo lại khi màn hình size changes (e.g. xoay), do đó MediaQuery phản ánh màn hình đó trong thời gian thực. A, C, D không khớp với hành vi thực tế của MediaQuery/Flutter.

**Link tham khảo:**

https://docs.flutter.dev/ui/adaptive-responsive

### Câu 197: Theme & Responsive

**Question:** What is the core difference between `LayoutBuilder` and `MediaQuery`?

A. LayoutBuilder provides information about the direct parent widget's constraints, while MediaQuery provides the entire device screen's info

B. Both are entirely identical in function

C. LayoutBuilder only works on Web

D. MediaQuery only provides the parent widget's constraints, not the full screen

**Correct Answer:** A

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **A**.

LayoutBuilder đưa ra các ràng buộc của cấp độ gốc trực tiếp; MediaQuery cung cấp thông tin thiết bị toàn màn hình. B, C, D đảo ngược/nhầm lẫn đặc điểm của hai công cụ.

**Link tham khảo:**

https://docs.flutter.dev/ui/adaptive-responsive

### Câu 198: Theme & Responsive

**Question:** Given: LayoutBuilder( builder: (context, c) { return c.maxWidth > 500 ? WideCard() : NarrowCard(); }, ); If this `LayoutBuilder` is placed inside a `Container` with a fixed width of 300px (while the device screen is 800px wide), which widget is displayed?

A. WideCard(), because the device screen is wider than 500px

B. NarrowCard(), because `c.maxWidth` reflects the constraint from the direct parent widget (300px), not the full device screen

C. Both widgets will be displayed at the same time

D. This will cause an error because LayoutBuilder cannot be placed inside a fixed-size Container

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

`c.maxWidth` phản ánh constraint của cha mẹ trực tiếp (300px), không phải toàn màn hình, vì vậy NarrowCard() được hiển thị. A bỏ qua vai trò của ràng buộc cục bộ; C, D không khớp với cách LayoutBuilder thực sự hoạt động.

**Link tham khảo:**

https://docs.flutter.dev/ui/adaptive-responsive

### Câu 199: Theme & Responsive

**Question:** What is `OrientationBuilder` used for?

A. Detecting device rotation (portrait/landscape) and changing the UI accordingly

B. Only used to change the app's background color

C. Checking the device's network connection

D. Fully replaces MediaQuery in every case

**Correct Answer:** A

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **A**.

OrientationBuilder phát hiện thao tác xoay thiết bị và cho phép UI thay đổi tương ứng. B, C, D mô tả sai chức năng của nó.

**Link tham khảo:**

https://docs.flutter.dev/ui/adaptive-responsive

### Câu 200: Theme & Responsive

**Question:** In the "Responsive Widgets Overview" list, which widget helps avoid overflow by letting a child take up the remaining space in a Row/Column?

A. Wrap

B. Expanded

C. AspectRatio

D. FractionallySizedBox

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

Expanded cho phép trẻ chiếm khoảng trống còn lại trong Hàng/Cột, tránh tràn. A, C, D phục vụ các mục đích khác, không cụ thể cho mục đích này.

**Link tham khảo:**

https://docs.flutter.dev/ui/adaptive-responsive

### Câu 201: Theme & Responsive

**Question:** Given this GridView code: GridView.count( crossAxisCount: width < 600 ? 2 : 4, ); If the `width` variable is read ONCE in `initState()` instead of in `build()` (from MediaQuery), what problem could arise when the user rotates the screen afterward?

A. No problem at all because Flutter automatically syncs initState with build

B. `crossAxisCount` won't be updated when the screen size changes (due to rotation), because initState only runs once when the widget is created, causing the layout to no longer reflect the current size

C. GridView will automatically hide completely

D. The app will show a compile error

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

Chỉ đọc width trong initState() có nghĩa là crossAxisCount không được cập nhật khi xoay vòng, vì initState chỉ chạy một lần khi tạo widget. A, C, D không phù hợp với hệ quả kỹ thuật thực tế.

**Link tham khảo:**

https://docs.flutter.dev/ui/adaptive-responsive

### Câu 202: Theme & Responsive

**Question:** In the Genre Chips example (Wrap-based chip list), the lecture emphasizes: "This behavior is achieved automatically by using Wrap, without conditional logic." What does this mean technically?

A. You need many `if` statements to check screen size then decide chips per row

B. The `Wrap` widget automatically calculates and wraps elements to a new line based on available space, without the developer writing manual conditional logic for responsiveness

C. Wrap only works correctly when combined with LayoutBuilder

D. This description is wrong, Wrap always needs accompanying conditional logic

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

`Wrap` tự động tính toán và bao bọc các phần tử dựa trên không gian có sẵn mà không cần logic điều kiện thủ công. A, C, D không khớp với ý nghĩa dự định của câu được trích dẫn.

**Link tham khảo:**

https://docs.flutter.dev/ui/adaptive-responsive

### Câu 203: Theme & Responsive

**Question:** In the Responsive Movie Card example: LayoutBuilder( builder: (context, c) { final isWide = c.maxWidth > 600; return Row(children: [ Image.network(poster, width: isWide ? 150 : 100), SizedBox(width: 16), Expanded(child: Text(title)) ]); }, ) What is the role of `Expanded` wrapping `Text(title)` in this Row?

A. Makes the Text automatically bold

B. Lets the Text take up all remaining horizontal space after the image, while avoiding horizontal overflow when the title is long

C. Expanded is purely cosmetic, unrelated to layout

D. Expanded causes the image to shrink to match the Text's size

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

Expanded cho phép Text chiếm không gian ngang còn lại và tránh tràn ngang cho các tiêu đề dài. A, C, D mô tả sai vai trò kỹ thuật của Expanded ở đây.

**Link tham khảo:**

https://docs.flutter.dev/ui/adaptive-responsive

### Câu 204: Theme & Responsive

**Question:** In Lab 6.3 (Tablet Layout Enhancement), the requirement for screens > 800px is to add a sidebar filter and switch to a 2-column movie list. What technique is recommended to implement this at the screen's root level?

A. Use `Wrap` alone, no other tool needed

B. Use `LayoutBuilder` at the root level to detect the width constraint, deciding whether to show the tablet layout (sidebar + 2 columns) or the mobile layout

C. Use `OrientationBuilder` instead of checking width

D. It's impossible to build a distinct tablet layout in Flutter

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

Việc sử dụng LayoutBuilder ở cấp cơ sở để phát hiện giới hạn về độ rộng là technique được khuyến nghị (theo ghi chú "sử dụng LayoutBuilder ở cấp cơ sở"). A, C, D không phù hợp với kỹ thuật được đề xuất.

**Link tham khảo:**

https://docs.flutter.dev/ui/adaptive-responsive

### Câu 205: Theme & Responsive

**Question:** What problem does the `AspectRatio` widget in the "Responsive Widgets Overview" list help solve?

A. Helps images avoid being stretched/distorted when the container size changes, by maintaining a fixed aspect ratio

B. Speeds up loading images from the network

C. Only usable for video, not for images

D. Fully replaces BoxFit

**Correct Answer:** A

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **A**.

AspectRatio duy trì tỷ lệ khung hình cố định để hình ảnh không bị giãn khi kích thước vùng chứa thay đổi. B, C, D không khớp với phạm vi/chức năng của nó.

**Link tham khảo:**

https://docs.flutter.dev/ui/adaptive-responsive

### Câu 206: Theme & Responsive

**Question:** Consider: a sort Dropdown is placed inside a `Row` with `mainAxisSize: MainAxisSize.max` alongside other large fixed-size widgets, causing the total width to exceed a small screen. In the spirit of Module 6, what is the most reasonable solution?

A. Completely remove the Dropdown from small screens

B. Wrap the flexible element (like the Dropdown or long text) with `Flexible`/`Expanded`, or use `Wrap` to auto-wrap to a new line when there isn't enough space

C. Always give every element in the Row an absolute fixed size

D. Convert the entire Row into a Stack

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

Việc gói phần tử linh hoạt bằng Flexible/Expanded hoặc sử dụng Wrap để tự động gói là giải pháp được đề xuất. A, C, D không phù hợp với nguyên tắc đáp ứng đã dạy.

**Link tham khảo:**

https://docs.flutter.dev/ui/adaptive-responsive

### Câu 207: Theme & Responsive

**Question:** Comparing using `MediaQuery.of(context).size.width` at the full-screen level versus `LayoutBuilder` at a deeply nested child widget level (e.g. inside a narrow Card within a 3-column Row). Which statement is most accurate?

A. Both approaches always give identical results in every case

B. `MediaQuery` returns the device's full screen width even though the child widget is much more constrained by its parent, while `LayoutBuilder` accurately reflects the real space (constraint) the child widget actually has --- so use LayoutBuilder when you need to respond to local space

C. LayoutBuilder cannot be used nested inside a Row

D. MediaQuery only works inside a StatelessWidget

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

MediaQuery trả về toàn màn hình width bất kể ràng buộc cục bộ of; LayoutBuilder phản ánh chính xác không gian cục bộ thực tế --- sử dụng LayoutBuilder để đáp ứng cục bộ. A, C, D không phù hợp với đặc tính kỹ thuật đã phân tích.

**Link tham khảo:**

https://docs.flutter.dev/ui/adaptive-responsive

### Câu 208: Theme & Responsive

**Question:** According to the lecture, which tool in Flutter Inspector helps debug responsive layout?

A. Layout Explorer

B. Network Inspector

C. Memory Profiler

D. CPU Profiler

**Correct Answer:** A

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **A**.

Layout Explorer" trong Flutter Inspector giúp debug bố cục phản hồi theo "Các phương pháp hay nhất" của Mô-đun 6. B, C, D không phải là công cụ được nêu cho mục đích này.

**Link tham khảo:**

https://docs.flutter.dev/ui/adaptive-responsive

### Câu 209: Theme & Responsive

**Question:** In the context of the responsive search bar: Container( padding: EdgeInsets.symmetric(horizontal: 16), child: TextField(...), ) The lecture notes "Students often forget SafeArea here." If this is the first element in the Scaffold's `body` and has no SafeArea, what specific risk is most likely on a device with a notch?

A. The TextField will be automatically disabled

B. The top of the search bar may be overlapped by the status bar/notch, making it hard for the user to tap the TextField accurately

C. The virtual keyboard will never appear

D. The app won't compile

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

Việc thiếu SafeArea có nguy cơ khiến phần trên cùng của thanh tìm kiếm bị chồng lên bởi thanh trạng thái/vết khía, khiến TextField khó chạm chính xác. A, C, D không phản ánh rủi ro thực tế.

**Link tham khảo:**

https://docs.flutter.dev/ui/adaptive-responsive

### Câu 210: Theme & Responsive

**Question:** What is `FractionallySizedBox` in the responsive widget list used for?

A. Sizing a widget as a percentage relative to its parent widget, instead of a fixed pixel value

B. Only used for animations

C. Cropping rounded corners on a widget

D. Has no real function, purely illustrative in the slide

**Correct Answer:** A

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **A**.

FractionallySizedBox kích thước widget theo tỷ lệ phần trăm của cha mẹ thay vì pixel cố định. B, C, D mô tả sai chức năng của nó.

**Link tham khảo:**

https://docs.flutter.dev/ui/adaptive-responsive

### Câu 211: Theme & Responsive

**Question:** Given: if (width < 600) return MobileView(); return TabletView(); If this breakpoint logic is placed in the `build()` function of a deeply nested child widget inside multiple constrained `Padding`/`Container` layers, but `width` is taken from `MediaQuery.of(context).size.width` (full screen width) instead of `LayoutBuilder`, what is the potential consequence?

A. No consequence at all because Flutter automatically syncs

B. The responsive decision could be wrong: the widget might incorrectly choose `TabletView` even though the actual local space it has is very narrow (because parent widgets have constrained the space), leading to overflow or an unsuitable layout

C. The app will always correctly show MobileView regardless of screen size

D. This is the only recommended way to write this in every case

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

Việc sử dụng các ràng buộc MediaQuery width toàn màn hình thay vì of cục bộ LayoutBuilder có thể dẫn đến quyết định phản hồi sai và bố cục tràn/không phù hợp trong các ngữ cảnh lồng nhau. A, C, D không phù hợp với hệ quả thực tế.

**Link tham khảo:**

https://docs.flutter.dev/ui/adaptive-responsive

### Câu 212: Theme & Responsive

**Question:** According to the "Types of Local Storage in Flutter" table, which case best fits using SQLite (sqflite)?

A. Storing a boolean flag "has onboarding been completed

B. Storing structured relational data, e.g. a Todo app with many records needing querying, filtering, sorting

C. Storing only the light/dark theme

D. Storing a simple text string that needs no querying

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

SQLite phù hợp nhất với dữ liệu quan hệ có cấu trúc cần truy vấn/bộ lọc/sắp xếp, như ứng dụng Todo. A, C, D phù hợp hơn với SharedPreferences hoặc một tệp đơn giản.

**Link tham khảo:**

https://docs.flutter.dev/ui/adaptive-responsive

### Câu 213: Theme & Responsive

**Question:** Which data type is NOT listed as a typical example suitable for Local Storage in "Why Local Storage?

A. Dark mode settings

B. Recently viewed items

C. Real-time video call session token (real-time streaming data)

D. Onboarding flag ("first-time user?")

**Correct Answer:** C

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **C**.

Mã thông báo phiên cuộc gọi video theo thời gian thực KHÔNG được liệt kê dưới dạng ví dụ về Bộ nhớ cục bộ điển hình. A, B, D đều là những ví dụ được đề cập rõ ràng trong bài giảng.

**Link tham khảo:**

https://docs.flutter.dev/ui/adaptive-responsive

### Câu 214: Theme & Responsive

**Question:** In Lab 9 (Offline-First Mini App), what part of the app is SharedPreferences suggested to be used for?

A. Storing the entire relationally-structured Todo list

B. Storing the app's theme state (Dark/Light mode)

C. Storing the data export/import JSON file

D. Storing multi-table relational data

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

SharedPreferences được đề xuất để lưu trữ chủ đề của ứng dụng state (Chế độ tối/sáng) trong Lab 9. A, C, D phù hợp hơn với tệp SQLite/JSON.

**Link tham khảo:**

https://docs.flutter.dev/ui/adaptive-responsive

### Câu 215: Theme & Responsive

**Question:** Per "Optimization Technique 3: Avoid Heavy Work in build()," which of the following should NOT be done directly inside the `build()` function?

A. Returning a simple `Text` widget

B. Calling an API, parsing JSON, sorting a list, or doing complex calculations

C. Returning a `Column` containing a few static child widgets

D. Reading a value from MediaQuery

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

KHÔNG nên thực hiện việc gọi API, phân tích cú pháp JSON, sắp xếp hoặc tính toán phức tạp bên trong build(). A, C, D là các hoạt động bình thường, chi phí thấp và không gây ra vấn đề đáng kể về hiệu suất trong build().

**Link tham khảo:**

https://docs.flutter.dev/ui/adaptive-responsive

### Câu 216: Theme & Responsive

**Question:** What required parameter does `AnimationController` need to work, illustrating the connection between animation and widget lifecycle?

A. `context` --- because animation must be tied to BuildContext

B. `vsync` --- usually provided by `TickerProviderStateMixin`, to sync the animation with displayed frames and avoid wasting resources when the widget isn't visible

C. `theme` --- so the animation applies the correct color

D. `key` --- so the animation can be tested

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

`vsync` (thường từ TickerProviderStateMixin) đồng bộ hóa hoạt ảnh với khung hiển thị, tránh lãng phí tài nguyên khi không hiển thị. A, C, D không phải là tham số bắt buộc của AnimationController.

**Link tham khảo:**

https://docs.flutter.dev/ui/adaptive-responsive

### Câu 217: Theme & Responsive

**Question:** What do Material and Cupertino mainly provide in Flutter?

A. Two testing tools

B. Two types of local databases

C. Two state management systems

D. UI widget sets that follow Android and iOS design styles

**Correct Answer:** D

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **D**.

Tùy chọn D đúng: các bộ UI widget tuân theo kiểu thiết kế Android và iOS. Câu trả lời phù hợp với hành vi loại hệ thống hoặc an toàn vô giá trị của Dart; sử dụng các loại nullable và toán tử nhận biết null một cách có chủ ý để tránh lỗi null.

**Link tham khảo:**

https://docs.flutter.dev/ui/adaptive-responsive

### Câu 218: Theme & Responsive

**Question:** Why are custom exceptions useful?

A. They directly increase FPS

B. They replace Provider

C. They provide domain-specific error context instead of generic error strings

D. They automatically make the UI responsive

**Correct Answer:** C

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **C**.

Tùy chọn C đúng: Chúng cung cấp ngữ cảnh lỗi theo miền cụ thể thay vì chuỗi lỗi chung. Câu trả lời phù hợp với hành vi loại hệ thống hoặc an toàn vô giá trị của Dart; sử dụng các loại nullable và toán tử nhận biết null một cách có chủ ý để tránh lỗi null.

**Link tham khảo:**

https://docs.flutter.dev/ui/adaptive-responsive

### Câu 219: Theme & Responsive

**Question:** What is responsive UI?

A. A UI that always uses fixed pixels

B. A layout that changes only according to the operating system

C. A UI that changes only its theme color

D. A layout that changes according to the available space

**Correct Answer:** D

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **D**.

Tùy chọn D đúng: Bố cục thay đổi theo không gian có sẵn. Câu trả lời phù hợp với hành vi loại hệ thống hoặc an toàn vô giá trị của Dart; sử dụng các loại nullable và toán tử nhận biết null một cách có chủ ý để tránh lỗi null.

**Link tham khảo:**

https://docs.flutter.dev/ui/adaptive-responsive

### Câu 220: Theme & Responsive

**Question:** What is adaptive UI?

A. A layout that changes only according to the parent's width

B. A layout that uses only SafeArea

C. A layout that uses only GridView

D. A layout or component that changes according to the device or platform type

**Correct Answer:** D

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **D**.

Tùy chọn D đúng: Bố cục hoặc thành phần thay đổi tùy theo loại thiết bị hoặc nền tảng. Câu trả lời phù hợp với hành vi loại hệ thống hoặc an toàn vô giá trị của Dart; sử dụng các loại nullable và toán tử nhận biết null một cách có chủ ý để tránh lỗi null.

**Link tham khảo:**

https://docs.flutter.dev/ui/adaptive-responsive

### Câu 221: Theme & Responsive

**Question:** Which example is responsive behavior?

A. Replacing BottomNavigationBar with NavigationRail because the device is a tablet

B. Changing a grid from two columns to four columns when the screen becomes wider

C. Using Material on Android and Cupertino on iOS

D. Using Firebase Authentication

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

Tùy chọn B đúng: Thay đổi lưới từ hai cột thành bốn cột khi màn hình rộng hơn. Câu trả lời phù hợp với hành vi loại hệ thống hoặc an toàn vô giá trị của Dart; sử dụng các loại nullable và toán tử nhận biết null một cách có chủ ý để tránh lỗi null.

**Link tham khảo:**

https://docs.flutter.dev/ui/adaptive-responsive

### Câu 222: Theme & Responsive

**Question:** Which example is adaptive behavior?

A. Increasing padding according to width

B. Allowing chips to wrap automatically

C. Using AspectRatio for an image

D. Replacing bottom navigation with NavigationRail on a tablet

**Correct Answer:** D

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **D**.

Tùy chọn D đúng: Thay thế điều hướng phía dưới bằng NavigationRail trên máy tính bảng. Câu trả lời phù hợp với hành vi loại hệ thống hoặc an toàn vô giá trị của Dart; sử dụng các loại nullable và toán tử nhận biết null một cách có chủ ý để tránh lỗi null.

**Link tham khảo:**

https://docs.flutter.dev/ui/adaptive-responsive

### Câu 223: Theme & Responsive

**Question:** Which expression gets the screen width through MediaQuery?

A. Screen.getWidth()

B. MediaQuery.of(context).size.width

C. context.width.database

D. LayoutBuilder.width() without a builder

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

Tùy chọn B đúng: MediaQuery.of(ngữ cảnh).size.width. Câu trả lời phù hợp với hành vi loại hệ thống hoặc an toàn vô giá trị của Dart; sử dụng các loại nullable và toán tử nhận biết null một cách có chủ ý để tránh lỗi null.

**Link tham khảo:**

https://docs.flutter.dev/ui/adaptive-responsive

### Câu 224: Theme & Responsive

**Question:** What does OrientationBuilder detect?

A. Light or dark theme

B. Portrait or landscape orientation

C. Whether a token has expired

D. Whether the device is online or offline

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

Tùy chọn B đúng: Hướng dọc hoặc hướng ngang. Câu trả lời phù hợp với hành vi loại hệ thống hoặc an toàn vô giá trị của Dart; sử dụng các loại nullable và toán tử nhận biết null một cách có chủ ý để tránh lỗi null.

**Link tham khảo:**

https://docs.flutter.dev/ui/adaptive-responsive

### Câu 225: State & Lifecycle

**Question:** What is the difference between an arrow function (`=>`) and a function block (`{ return ...; }`) in Dart?

A. Arrow functions can only be used for async functions

B. An arrow function is shorthand for a function with a single return expression, while a function block allows multiple statements

C. The two syntaxes have completely different meanings regarding return type

D. Arrow functions are not allowed to take parameters

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

Hàm mũi tên là cách viết tắt của một biểu thức đơn return; khối chức năng cho phép nhiều câu lệnh. A, C, D không phù hợp với đặc điểm của cú pháp này.

**Link tham khảo:**

https://docs.flutter.dev/data-and-backend/state-mgmt/intro

### Câu 226: State & Lifecycle

**Question:** Consider this code, predict the result: Future`<String>` fetchData() async { await Future.delayed(Duration(seconds: 1)); return "Data loaded"; } void main() { print("Start"); fetchData().then((value) => print(value)); print("End"); } What order is printed to console?

A. Start, Data loaded, End

B. Start, End, Data loaded

C. Data loaded, Start, End

D. Start, End (never prints "Data loaded")

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

Vì `fetchData()` không được chờ đợi trong `main()` nên nó không chặn mã tiếp theo --- `.then()` là không chặn, vì vậy "Start", "End" print trước tiên và sau 1 giây "Data loaded" sẽ in. A, C xếp sai thứ tự; D sai vì Data loaded cuối cùng cũng được in ra.

**Link tham khảo:**

https://docs.flutter.dev/data-and-backend/state-mgmt/intro

### Câu 227: State & Lifecycle

**Question:** Consider the Student class and mini-lab: class Student { String name; Student(this.name); } void main() async { var list = [Student("An"), Student("Binh")]; await Future.delayed(Duration(seconds: 1)); list.forEach((s) => print(s.name)); } If the `await` keyword before `Future.delayed(...)` is removed, what happens?

A. The program will show a compile error due to missing await

B. `forEach` still prints student names in the correct order but may run before the 1-second delay finishes (since it no longer waits for the Future to complete), because `Future.delayed` without await is merely "started" without blocking execution

C. The program will crash because the Future is unhandled

D. The student list order will be reversed

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

Không chờ `Future.delayed` cho phép `main()` tiếp tục thực thi các câu lệnh tiếp theo mà không cần đợi hết giây --- mặc dù `forEach` vẫn thực thi tên theo đúng thứ tự, nó có thể chạy trước "độ trễ" completes (không có tác dụng thực tế ở đây vì không có gì phụ thuộc vào độ trễ). A sai vì đây không phải là lỗi biên dịch; C sai vì nó không bị lỗi; D sai vì thứ tự name được giữ nguyên.

**Link tham khảo:**

https://docs.flutter.dev/data-and-backend/state-mgmt/intro

### Câu 228: State & Lifecycle

**Question:** Given the comparison table of `extends`, `implements`, `with`, which best describes `implements`?

A. Inherits all available behavior from the parent class

B. Only inherits the "signature" of the class/interface, forcing you to rewrite all custom behavior --- used to define a contract

C. Used to share reusable code blocks without an inheritance relationship

D. Not supported by Dart, only exists in Java

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

`implements` chỉ lấy signature (giao diện), buộc bạn phải tự viết tất cả hành vi, được sử dụng như một hợp đồng. A mô tả `extends`; C mô tả `mixin`; D sai vì Dart hỗ trợ đầy đủ implements.

**Link tham khảo:**

https://docs.flutter.dev/data-and-backend/state-mgmt/intro

### Câu 229: State & Lifecycle

**Question:** What is the main purpose behind introducing the Repository Pattern in Module 3?

A. Fully replaces Widgets in Flutter

B. Separates data-fetching logic from the presentation/UI layer, making code easier to test and maintain, and forming the foundation for Bloc/Provider/Riverpod

C. Only used for apps with no UI

D. A replacement for SQLite

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

Mẫu Repository tách việc tìm nạp dữ liệu khỏi UI, hỗ trợ khả năng kiểm tra/bảo trì và tạo nền tảng cho Bloc/Provider/Riverpod. A, C, D mô tả sai mục đích của nó.

**Link tham khảo:**

https://docs.flutter.dev/data-and-backend/state-mgmt/intro

### Câu 230: State & Lifecycle

**Question:** Given this repository code using a Stream: Stream`<int>` counter() async { for (int i = 1; i <= 3; i++) { await Future.delayed(Duration(milliseconds: 300)); yield i; } } When this Stream is bound to `StreamBuilder(stream: repo.counter(), ...)`, how will the UI behave?

A. The UI only builds once, after the entire loop finishes

B. The UI automatically rebuilds each time a new value is `yield`-ed, creating a real-time update effect

C. StreamBuilder doesn't support Streams generated from `async`

D. The app will freeze (block the UI thread) for a full 900ms

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

UI tự động xây dựng lại mỗi khi có giá trị mới, tạo hiệu ứng cập nhật theo thời gian thực. A sai vì StreamBuilder được xây dựng lại cho mỗi sự kiện; C sai vì StreamBuilder hỗ trợ đầy đủ async*; D sai vì độ trễ không chặn toàn bộ luồng UI nhờ cơ chế async.

**Link tham khảo:**

https://docs.flutter.dev/data-and-backend/state-mgmt/intro

### Câu 231: State & Lifecycle

**Question:** Given: class _RadioScreenState extends State`<RadioScreen>` { String? quality = 'HD'; @override Widget build(BuildContext context) { return Column(children: [ RadioListTile`<String>`( title: const Text('SD'), value: 'SD', groupValue: quality, onChanged: (v) => setState(() => quality = v), ), RadioListTile`<String>`( title: const Text('HD'), value: 'HD', groupValue: quality, onChanged: (v) => setState(() => quality = v), ), ]); } } If `setState()` is removed from `onChanged` (keeping only `quality = v`), what happens when the user taps 'SD'?

A. Variable `quality` is still updated to 'SD' but the UI doesn't rebuild to reflect the change, the radio still displays as before

B. The app throws a runtime error immediately

C. The radio button automatically rebuilds because Flutter always tracks every variable in State

D. The value of quality won't change because setState i

**Correct Answer:** A

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **A**.

Không có setState, `quality` vẫn cập nhật trong bộ nhớ nhưng Flutter không biết cách xây dựng lại --- UI không hiển thị thay đổi nào. B sai vì không có lỗi thời gian chạy; C sai vì Flutter không tự động theo dõi mọi biến; D sai vì quality không thay đổi, chỉ có UI là không.

**Link tham khảo:**

https://docs.flutter.dev/data-and-backend/state-mgmt/intro

### Câu 232: State & Lifecycle

**Question:** This code is used to pick a date: Future`<void>` pickDate() async { final date = await showDatePicker( context: context, initialDate: DateTime.now(), firstDate: DateTime(2000), lastDate: DateTime(2100), ); if (date != null) setState(() => selectedDate = date); } Why is checking `if (date != null)` needed before calling `setState`?

A. Because `showDatePicker` always returns null when working correctly

B. Because the user might cancel/dismiss the date-picker dialog, in which case the Future returns null, and you shouldn't setState with an unwanted null value

C. Because this is required Dart syntax for every async function

D. Because DateTime is never allowed to be null in Flutter

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

Việc kiểm tra null là cần thiết vì người dùng có thể hủy hộp thoại, khiến cho Future trả về null và bạn không nên setState với một null không mong muốn. A, C, D không khớp với lý do thực tế.

**Link tham khảo:**

https://docs.flutter.dev/data-and-backend/state-mgmt/intro

### Câu 233: State & Lifecycle

**Question:** In the `HomeTabs` example: class _HomeTabsState extends State`<HomeTabs>` { int index = 0; final screens = const [Center(child: Text('Home')), ...]; @override Widget build(BuildContext context) { return Scaffold( body: screens[index], bottomNavigationBar: BottomNavigationBar( currentIndex: index, onTap: (i) => setState(() => index = i), items: const [...], ), ); } } If the `index` variable were not held inside a `StatefulWidget` (e.g. declared in a StatelessWidget), what would happen when the user taps a tab?

A. The app still works normally because StatelessWidget also supports setState

B. `setState` cannot be called, and the UI cannot automatically update the corresponding screen when the user switches tabs, because StatelessWidget has no mechanism for mutable internal state

C. The program will automatically switch to using InheritedWidget

D. There's no difference b

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

StatelessWidget không có setState nên không thể lưu trữ và cập nhật `index` state khi người dùng nhấn vào tab. A, C, D mô tả sai đặc điểm của StatelessWidget.

**Link tham khảo:**

https://docs.flutter.dev/data-and-backend/state-mgmt/intro

### Câu 234: State & Lifecycle

**Question:** In Module 4's "Common Errors & Fixes" list, what is the common cause of the UI "not updating" after data changes?

A. Network error

B. Forgetting to call `setState()` after changing a variable's value in a StatefulWidget

C. Missing Scaffold

D. Incorrect import syntax

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

Quên gọi `setState()` là nguyên nhân phổ biến khiến UI không cập nhật, theo danh sách kiểm tra "Lỗi thường gặp và cách khắc phục". A, C, D không phải là nguyên nhân nêu trong bài giảng.

**Link tham khảo:**

https://docs.flutter.dev/data-and-backend/state-mgmt/intro

### Câu 235: State & Lifecycle

**Question:** What is the basic difference between `StatelessWidget` and `StatefulWidget`?

A. StatelessWidget can change its UI more flexibly than StatefulWidget

B. StatelessWidget holds no mutable internal state and doesn't rebuild when internal data changes; StatefulWidget holds state (a State object) and can rebuild via `setState()`

C. Only StatelessWidget has a `build()` method

D. StatefulWidget is not allowed to contain child widgets

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

StatelessWidget không có state có thể thay đổi và không tự xây dựng lại; StatefulWidget giữ đối tượng State và xây dựng lại thông qua setState(). A, C, D mô tả sai đặc điểm cơ bản của hai loại widget.

**Link tham khảo:**

https://docs.flutter.dev/data-and-backend/state-mgmt/intro

### Câu 236: State & Lifecycle

**Question:** Given this CounterPage code using `setState`: class _CounterPageState extends State`<CounterPage>` { int count = 0; void increment() { setState(() { count++; }); } ... } If replaced with just `count++;` WITHOUT calling `setState()`, what happens?

A. `count`'s value still correctly increases in memory, but Flutter won't know to rebuild the widget, so the UI's displayed count doesn't change

B. The app throws an immediate compile error

C. The UI still automatically updates because Flutter always tracks every variable in State

D. The count value resets to 0 every time it rebuilds

**Correct Answer:** A

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **A**.

Không có setState, count vẫn tăng bộ nhớ, nhưng Flutter không biết cách xây dựng lại --- UI hiển thị count không thay đổi. B sai vì không có lỗi biên dịch; C sai vì Flutter không tự động theo dõi mọi biến; D sai vì count không được đặt lại.

**Link tham khảo:**

https://docs.flutter.dev/data-and-backend/state-mgmt/intro

### Câu 237: State & Lifecycle

**Question:** What does "Lifting State Up" mean in Flutter?

A. Removing all state from the app

B. Moving shared state up to a common ancestor widget so child widgets can access and sync data, reducing duplicated logic

C. Moving all UI logic to the server side

D. Only applicable when using Provider

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

Việc nâng State lên sẽ di chuyển state được chia sẻ lên một tổ tiên chung để giảm logic trùng lặp và cải thiện luồng dữ liệu. A, C, D mô tả sai khái niệm này.

**Link tham khảo:**

https://docs.flutter.dev/data-and-backend/state-mgmt/intro

### Câu 238: State & Lifecycle

**Question:** What foundation does `Provider` (ChangeNotifierProvider + Consumer) build on in Flutter, and what benefit does it bring over plain InheritedWidget?

A. Built on SQLite, helps store offline data

B. Built on top of InheritedWidget but reduces boilerplate code, making state sharing and listening much easier

C. Unrelated to InheritedWidget at all

D. Provider only works with the String data type

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

Provider được xây dựng trên InheritedWidget nhưng giảm bớt bản soạn sẵn để chia sẻ/nghe state. A, C, D không phù hợp với nền tảng kỹ thuật thực tế của Provider.

**Link tham khảo:**

https://docs.flutter.dev/data-and-backend/state-mgmt/intro

### Câu 239: State & Lifecycle

**Question:** Given this Provider code: class CounterModel with ChangeNotifier { int count = 0; void increment() { count++; notifyListeners(); } } If the `notifyListeners();` line is removed from `increment()`, what happens?

A. The program shows a compile error

B. `count` still increases in memory, but `Consumer<CounterModel>` widgets won't be notified to rebuild, so the UI doesn't show the new value

C. `notifyListeners()` has no effect on the UI, it's just an internal log

D. The app automatically calls notifyListeners() silently every second

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

Nếu không có notifyListeners(), count vẫn tăng bộ nhớ nhưng Consumer widgets không được thông báo để xây dựng lại --- UI không cập nhật. A, C, D mô tả sai hành vi này.

**Link tham khảo:**

https://docs.flutter.dev/data-and-backend/state-mgmt/intro

### Câu 240: State & Lifecycle

**Question:** In the "Managing App State" section with `ChangeNotifier`: class AppState extends ChangeNotifier { bool loggedIn = false; void login() { loggedIn = true; notifyListeners(); } } Why is separating state (login/logout) into its own class away from the UI considered good practice (per the instructor's note)?

A. Because Flutter requires this to compile

B. Because separation increases testability and clarifies the app's architecture; the UI only needs to listen for changes instead of managing business logic itself

C. Because doing so makes the app run twice as fast

D. No specific reason, just the instructor's personal preference

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

Việc tách state cải thiện khả năng kiểm tra và độ rõ ràng của kiến trúc, cho phép UI chỉ lắng nghe thay vì quản lý logic nghiệp vụ. A, C, D không phải là lý do đúng/hợp lệ.

**Link tham khảo:**

https://docs.flutter.dev/data-and-backend/state-mgmt/intro

### Câu 241: State & Lifecycle

**Question:** According to Module 5's Summary, which state management techniques are covered, in order from basic to more advanced?

A. Provider → InheritedWidget → setState

B. setState → InheritedWidget → Provider

C. Only setState is covered, no other technique is mentioned

D. BLoC → Riverpod → GetX

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

Theo Tóm tắt, thứ tự từ cơ bản đến nâng cao là: setState → InheritedWidget → Provider. A đảo ngược thứ tự; C không đầy đủ; D không phải là trọng tâm của Mô-đun 5 (chỉ được đề cập ngắn gọn ở phần chuẩn bị trong Mô-đun 3).

**Link tham khảo:**

https://docs.flutter.dev/data-and-backend/state-mgmt/intro

### Câu 242: State & Lifecycle

**Question:** In Demo 8.3, the `try/catch/finally` block is used as follows: try { final response = await http.post(...); if (response.statusCode == 201) { setState(() => result = response.body); } else { throw Exception('Failed with status: \${response.statusCode}'); } } catch (e) { setState(() => errorMessage = e.toString()); } finally { setState(() => isLoading = false); } Why is `setState(() => isLoading = false);` placed in the `finally` block instead of just in the `try` block?

A. No difference between placing it in try or finally

B. To ensure the loading state is always turned off whether the request succeeds or fails (throws an exception), avoiding the button getting "stuck" in loading state permanently on error

C. `finally` runs before `try`, so it must be placed there to run earlier

D. Placing it in finally causes isLoading to never become false

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

finally đảm bảo isLoading luôn bị tắt bất kể thành công hay thất bại, tránh việc tải state bị kẹt vĩnh viễn. A, C, D không khớp với vai trò/thứ tự thực hiện thực tế của finally.

**Link tham khảo:**

https://docs.flutter.dev/data-and-backend/state-mgmt/intro

### Câu 243: State & Lifecycle

**Question:** In Module 8's "Common Pitfalls & Best Practices," how is calling an API directly inside `build()` regarded?

A. A best practice that should be applied

B. A common pitfall to avoid --- since `build()` can be called repeatedly, leading to uncontrolled repeated API calls; you should call the API in `initState()` instead

C. The only way to call an API in Flutter

D. Only causes problems with POST, doesn't affect GET

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

Gọi một API bên trong build() là một điều khó tránh vì build() có thể chạy lại nhiều lần; thay vào đó hãy gọi initState(). A, C, D không khớp với nội dung cạm bẫy đã nêu của bài giảng.

**Link tham khảo:**

https://docs.flutter.dev/data-and-backend/state-mgmt/intro

### Câu 244: State & Lifecycle

**Question:** Comparing parsing `response.body` (JSON) directly in a widget's `build()` function versus parsing in a separate function (like `fetchPosts()` called from `initState()`). Which statement is most accurate regarding performance?

A. No performance difference between the two approaches

B. Parsing JSON in `build()` causes the heavy work (parsing) to be redone every time the widget rebuilds --- which can happen very often --- while parsing in a function called from `initState()` (with the result stored in a Future variable) only happens once per data load

C. build() always runs faster than initState() regardless of content

D. Where code is placed doesn't affect performance, only code organization

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

Việc phân tích cú pháp trong build() lặp lại công việc nặng nhọc trong mỗi lần xây dựng lại, trong khi phân tích cú pháp một lần từ initState() (kết quả được lưu vào bộ nhớ đệm trong một Future) chỉ xảy ra một lần cho mỗi lần tải. A, C, D không khớp với phân tích hiệu suất thực tế.

**Link tham khảo:**

https://docs.flutter.dev/data-and-backend/state-mgmt/intro

### Câu 245: State & Lifecycle

**Question:** In SharedPreferences' standard High-Level Flow: "Load storage instance → Read existing value → Update value based on user action → Save back to storage → Refresh the UI." If the "Refresh the UI" step (e.g. calling `setState()`) is skipped after saving the new value, what happens?

A. The value is still correctly saved to device storage (correct on the next app launch), but the current UI won't reflect the change immediately until another rebuild occurs

B. The value won't be saved to storage if this step is missing

C. The app will automatically crash

D. SharedPreferences will automatically call setState implicitly

**Correct Answer:** A

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **A**.

Giá trị vẫn được lưu chính xác vào bộ nhớ nhưng UI hiện tại sẽ không phản ánh thay đổi cho đến khi quá trình xây dựng lại khác diễn ra. B, C, D không khớp với hành vi thực tế của SharedPreferences/Flutter.

**Link tham khảo:**

https://docs.flutter.dev/data-and-backend/state-mgmt/intro

### Câu 246: State & Lifecycle

**Question:** In the Taskly App's architecture (used as the running example throughout Module 11), which component is responsible for managing app-wide state?

A. TaskListScreen

B. TaskProvider

C. TaskRepository

D. main.dart

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

TaskProvider chịu trách nhiệm quản lý toàn bộ ứng dụng state trong kiến trúc của Taskly. A, C, D không phù hợp với trách nhiệm này.

**Link tham khảo:**

https://docs.flutter.dev/data-and-backend/state-mgmt/intro

### Câu 247: State & Lifecycle

**Question:** Given this "before optimization" code from Demo 12.1: Widget build(BuildContext context) { final tasks = context.watch`<TaskProvider>`().tasks; return Column( children: [ InputRow(), // static Expanded( child: ListView.builder( itemCount: tasks.length, itemBuilder: (_, i) => ListTile( title: Text(tasks[i].title), trailing: Checkbox(...), ), ), ), ], ); } Why does using `context.watch<TaskProvider>()` right at the top-level widget (including the static `InputRow`) cause a performance problem?

A. No problem at all, this is the recommended way to write it

B. Any change in `TaskProvider` (even a small change to one task) causes the entire parent widget (including the unrelated static `InputRow`) to rebuild, wasting resources unnecessarily

C. `context.watch` can only be used in a StatelessWidget, causing a compile error here

D. The only problem is misplacing Expanded

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

Việc xem ở cấp cao nhất khiến ngay cả những static widgets không liên quan như InputRow phải xây dựng lại dựa trên bất kỳ thay đổi provider nào, gây lãng phí tài nguyên. A, C, D không phù hợp với vấn đề hiệu suất thực tế.

**Link tham khảo:**

https://docs.flutter.dev/data-and-backend/state-mgmt/intro

### Câu 248: State & Lifecycle

**Question:** What benefit does the "Use Selector to rebuild ONLY the list" solution in Demo 12.1 bring over a plain `context.watch<T>()`?

A. Selector allows fine-grained rebuilding --- only the UI portion actually dependent on the changed data rebuilds, instead of the entire parent widget as with a broad-scope watch

B. Selector and watch behave entirely identically regarding rebuilds

C. Selector only works with the String data type

D. Selector causes the entire app to always rebuild regardless of whether anything changed

**Correct Answer:** A

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **A**.

Bộ chọn cho phép xây dựng lại chi tiết, chỉ xây dựng lại phần thực sự phụ thuộc vào dữ liệu đã thay đổi. B, C, D không phù hợp với hành vi/lợi ích thực sự của Selector.

**Link tham khảo:**

https://docs.flutter.dev/data-and-backend/state-mgmt/intro

### Câu 249: State & Lifecycle

**Question:** Given: class _MyWidgetState extends State`<MyWidget>` with SingleTickerProviderStateMixin { late AnimationController _controller; @override void initState() { super.initState(); _controller = AnimationController( duration: const Duration(seconds: 2), vsync: this, )..repeat(); } @override void dispose() { _controller.dispose(); super.dispose(); } } If a developer forgets to call `_controller.dispose()` in `dispose()`, what is the most likely consequence?

A. No consequence at all because Dart automatically garbage-collects every object

B. The `AnimationController` (especially while `repeat()`-ing) keeps running even after the widget is removed from the tree, causing a memory leak and wasting CPU resources

C. The app crashes immediately when the widget is disposed

D. The animation automatically stops because Flutter always tracks widget lifecycle

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

Việc quên dispose() sẽ khiến một AnimationController lặp lại chạy sau khi xóa widget, gây rò rỉ bộ nhớ và lãng phí CPU. A sai vì GC của Dart không thể thu thập đối tượng vẫn được tham chiếu bởi Mã đang hoạt động; C, D không khớp với hành vi thực tế của Flutter.

**Link tham khảo:**

https://docs.flutter.dev/data-and-backend/state-mgmt/intro

### Câu 250: State & Lifecycle

**Question:** BLoC (Business Logic Component) is a state-management architecture pattern in Flutter, based on which core concept?

A. A parent widget passes data directly to a child widget via the constructor

B. The input stream is Events, the output stream is States --- BLoC receives an Event, processes business logic, then emits a new State for the UI to listen to and update

C. Only using SharedPreferences to store state

D. There's no core concept, BLoC is just another name for setState

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

Khái niệm cốt lõi của BLoC: luồng đầu vào = Sự kiện, luồng đầu ra = Trạng thái, xử lý logic nghiệp vụ ở giữa. A, C, D mô tả sai bản chất cơ bản của BLoC.

**Link tham khảo:**

https://docs.flutter.dev/data-and-backend/state-mgmt/intro

### Câu 251: State & Lifecycle

**Question:** Given this simple Cubit code: class CounterCubit extends Cubit`<int>` { CounterCubit() : super(0); void increment() => emit(state + 1); } Which widget in `flutter_bloc` best listens to `CounterCubit` and automatically rebuilds the UI whenever the `state` value changes?

A. `FutureBuilder`

B. `BlocBuilder<CounterCubit, int>`

C. `StreamController`

D. `InheritedWidget` (used directly, without the library)

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

`BlocBuilder<CounterCubit, int>` là flutter_bloc API chính xác để nghe Cubit và tự động xây dựng lại trên các thay đổi của state. A, C, D không phải là widget/API thích hợp cho mục đích này.

**Link tham khảo:**

https://docs.flutter.dev/data-and-backend/state-mgmt/intro

### Câu 252: State & Lifecycle

**Question:** Per BLoC pattern's design philosophy, why should business logic be entirely separated from the UI widget?

A. Because Flutter doesn't allow writing logic inside a widget

B. To increase testability (testing logic independently without building the UI), reuse logic across different platforms/screens, and keep the widget focused on display

C. Because BLoC runs faster if the logic is inside the widget

D. No clear reason, it's just a naming convention

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

Việc phân tách làm tăng khả năng kiểm tra, cho phép sử dụng lại logic trên các nền tảng/màn hình và giúp widgets tập trung vào hiển thị. A, C, D mô tả sai mục đích của triết lý thiết kế này.

**Link tham khảo:**

https://docs.flutter.dev/data-and-backend/state-mgmt/intro

### Câu 253: State & Lifecycle

**Question:** Consider the Taskly app (from Modules 11/12) rewritten with BLoC architecture instead of Provider: `TaskBloc` would receive `AddTaskEvent` and `ToggleTaskEvent`, then emit a new `TaskState`. Compared to using `TaskProvider` (ChangeNotifier) as in the original slides, what is the core difference in the processing flow?

A. No difference at all, BLoC and Provider are entirely identical in how they receive changes from the UI

B. With ChangeNotifier (Provider), the UI directly calls a method on the Provider (e.g. `taskProvider.addTask(...)`) and the Provider mutates itself then calls `notifyListeners()`; with BLoC, the UI must "dispatch" an Event object (e.g. `bloc.add(AddTaskEvent(...))`) into the input stream, and the Bloc processes that Event to emit a new State, entirely decoupled from a direct call

C. BLoC cannot be used to build a Todo app like Taskly

D. Provider is required to use Events just

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

Provider sử dụng lệnh gọi phương thức trực tiếp + notifyListeners(); BLoC sử dụng các Sự kiện được gửi đi được xử lý thành các Trạng thái được phát ra, tách rời khỏi các cuộc gọi trực tiếp --- đây là điểm khác biệt cốt lõi của luồng. A, C, D không khớp với cách thức hoạt động thực sự của hai kiến ​​trúc.

**Link tham khảo:**

https://docs.flutter.dev/data-and-backend/state-mgmt/intro

### Câu 254: State & Lifecycle

**Question:** Why do many real-world Flutter projects choose BLoC instead of just `setState` for large-scale apps with many screens sharing complex state?

A. Because `setState` isn't supported by Flutter in large apps

B. BLoC clearly separates the Event/State flow, making logic easier to test independently (without building UI), easier to trace data flow explicitly, and scales better when many screens need to share and react to the same complex state source --- something local `setState` struggles with as an app grows

C. `setState` only works with exactly 1 screen in the entire app

D. BLoC is always faster than setState in absolute render performance in every case

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

Tính năng phân tách Sự kiện/{0}} rõ ràng của BLoC hỗ trợ khả năng kiểm tra độc lập, theo dõi luồng dữ liệu rõ ràng và mở rộng quy mô tốt hơn cho state phức tạp được chia sẻ trên nhiều màn hình. A, C, D không phù hợp với lý do thực tế khi chọn BLoC.

**Link tham khảo:**

https://docs.flutter.dev/data-and-backend/state-mgmt/intro

### Câu 255: State & Lifecycle

**Question:** Arrow syntax (=>) is suitable for which type of function?

A. A mandatory factory constructor

B. A function without parameters

C. A function containing several try/catch blocks

D. A function consisting of a single expression

**Correct Answer:** D

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **D**.

Lựa chọn D đúng: Một hàm bao gồm một biểu thức. Bố cục Flutter được tạo từ widgets; widget đã chọn cung cấp hành vi sắp xếp, định cỡ, giãn cách hoặc ràng buộc được mô tả.

**Link tham khảo:**

https://docs.flutter.dev/data-and-backend/state-mgmt/intro

### Câu 256: State & Lifecycle

**Question:** When is Future chaining with then() useful?

A. Defining an SQLite schema

B. Creating multiple inheritance chains

C. Drawing a widget tree

D. Chaining asynchronous steps without an async/await block

**Correct Answer:** D

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **D**.

Tùy chọn D đúng: Xâu chuỗi các bước không đồng bộ mà không có khối async/await. Dart sử dụng Future cho một kết quả không đồng bộ và Stream cho một chuỗi sự kiện không đồng bộ; async/await làm cho mã dựa trên Future dễ đọc hơn.

**Link tham khảo:**

https://docs.flutter.dev/data-and-backend/state-mgmt/intro

### Câu 257: State & Lifecycle

**Question:** Which keyword emits values from a Stream-producing async* function?

A. yield

B. notifyListeners

C. return only

D. emitWidget

**Correct Answer:** A

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **A**.

Tùy chọn A đúng: yield. Dart sử dụng Future cho một kết quả không đồng bộ và Stream cho một chuỗi sự kiện không đồng bộ; async/await làm cho mã dựa trên Future dễ đọc hơn.

**Link tham khảo:**

https://docs.flutter.dev/data-and-backend/state-mgmt/intro

### Câu 258: State & Lifecycle

**Question:** What is a widget in Flutter?

A. A SQL table

B. A compiler

C. A type of token

D. The basic building block of the user interface

**Correct Answer:** D

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **D**.

Tùy chọn D đúng: Khối xây dựng cơ bản của giao diện người dùng. Câu trả lời phù hợp với hành vi loại hệ thống hoặc an toàn vô giá trị của Dart; sử dụng các loại nullable và toán tử nhận biết null một cách có chủ ý để tránh lỗi null.

**Link tham khảo:**

https://docs.flutter.dev/data-and-backend/state-mgmt/intro

### Câu 259: Tương tác, Form & Async UI

**Question:** What is Flutter?

A. A new programming language developed by Google

B. A UI toolkit by Google for building natively compiled apps from a single codebase

C. A framework only for building web applications

D. A mobile operating system by Google

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

Flutter là bộ công cụ UI của Google để xây dựng các ứng dụng được biên dịch nguyên bản từ một cơ sở mã. (A sai vì Flutter không phải là ngôn ngữ; C sai vì Flutter là đa nền tảng, không chỉ web; D sai vì Flutter không phải là hệ điều hành.)

**Link tham khảo:**

https://docs.flutter.dev/cookbook/forms

### Câu 260: Tương tác, Form & Async UI

**Question:** Which layer of the Flutter architecture is written in C++ and uses Skia to handle rendering, accessibility, and text layout?

A. Framework Layer

B. Engine Layer

C. Embedder Layer

D. Widget Layer

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

Lớp Công cụ được viết bằng C++ và sử dụng Skia để hiển thị/khả năng truy cập/bố cục văn bản. Khung Layer (A) là lớp Dart phía trên nó; Embedder (C) xử lý việc tích hợp nền tảng; 'Widget Layer' (D) không phải là tên chính thức cho lớp kiến ​​trúc này.

**Link tham khảo:**

https://docs.flutter.dev/cookbook/forms

### Câu 261: Tương tác, Form & Async UI

**Question:** A startup wants to build an MVP quickly, running on both Android and iOS, with a limited development team and no need for extreme graphics performance. According to the lecture, this situation is:

A. Not suitable for Flutter because Flutter only supports Android

B. A reasonable fit for Flutter because it matches the goal of faster time-to-market and reduced development cost

C. Better suited to pure native code because Flutter doesn't support MVPs

D. Best done in Kotlin because Flutter is not optimized for commercial apps

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

Bài giảng nêu rõ Flutter phù hợp với MVP, công ty khởi nghiệp, giảm chi phí và thời gian tiếp thị --- khớp chính xác với kịch bản này. A, C, D đều mâu thuẫn với nội dung bài giảng.

**Link tham khảo:**

https://docs.flutter.dev/cookbook/forms

### Câu 262: Tương tác, Form & Async UI

**Question:** Flutter communicates with native features (Camera, Bluetooth, NFC...) that it does not support directly through which mechanism?

A. WebSocket

B. Platform Channels

C. REST API

D. Automatic FFI Bridge

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

Flutter tích hợp với các tính năng gốc thông qua Kênh nền tảng. A, C, D không phải là cơ chế được đề cập trong bài giảng.

**Link tham khảo:**

https://docs.flutter.dev/cookbook/forms

### Câu 263: Tương tác, Form & Async UI

**Question:** According to the development history timeline mentioned in the lecture, what platform support did Flutter 2.0 (2021) add?

A. Only added Android Wear support

B. Web and Desktop

C. Only added iOS support

D. Only added watchOS support

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

Flutter 2.0 (2021) đã thêm Web và hỗ trợ Máy tính để bàn theo dòng thời gian của bài giảng. A, C, D không trùng với các mốc đã nêu.

**Link tham khảo:**

https://docs.flutter.dev/cookbook/forms

### Câu 264: Tương tác, Form & Async UI

**Question:** According to the lecture, when should a development team consider using native code (Kotlin/Swift) instead of pure Flutter?

A. When the app needs very low-level hardware access or strict platform-specific UI/UX requirements

B. When the app only needs to run on a simple single Android platform

C. When the team has little experience with Kotlin/Swift

D. When the app only displays a static list of text

**Correct Answer:** A

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **A**.

Bản gốc nên được xem xét để truy cập phần cứng ở cấp độ rất thấp hoặc nền tảng cụ thể nghiêm ngặt UI/UX --- khớp với 'Khi thích hợp phát triển bản địa hơn.' B, C, D là những trường hợp Flutter vẫn phù hợp hoặc không liên quan.

**Link tham khảo:**

https://docs.flutter.dev/cookbook/forms

### Câu 265: Tương tác, Form & Async UI

**Question:** Given the comparison table: Flutter (Dart, Native UI + Engine), React Native (JS, Bridge to Native), Native (Kotlin/Swift, Pure Native). Which statement best analyzes the trade-off among these three approaches?

A. Native is always slower than Flutter because it has no dedicated engine

B. React Native is fastest because it needs no compilation

C. Flutter achieves near-native performance thanks to its own renderer engine (Skia) without needing a bridge like React Native, while Native achieves maximum performance but loses the shared-codebase advantage

D. All three produce identical pure native code

**Correct Answer:** C

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **C**.

Flutter đạt được hiệu suất gần như gốc thông qua công cụ Skia của chính nó mà không cần cầu nối như React Bản địa; Bản địa đạt được hiệu suất cao nhất nhưng mất cơ sở mã chung --- đây là sự đánh đổi chính xác trên mỗi bảng so sánh. A, B, D sai hoặc đơn giản hóa quá mức.

**Link tham khảo:**

https://docs.flutter.dev/cookbook/forms

### Câu 266: Tương tác, Form & Async UI

**Question:** Given: List`<int>` nums = [1, 2, 3, 4, 5]; var result = nums.map((e) => e * 2).where((e) => e > 4).toList(); print(result); What is printed?

A. [2, 4, 6, 8, 10]

B. [6, 8, 10]

C. [3, 4, 5]

D. [1, 2, 3, 4, 5]

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

`[1,2,3,4,5].map(x*2) = [2,4,6,8,10]`, rồi `.where(e>4) = [6,8,10]`. A chỉ hiển thị bước map; C, D không khớp với phép biến đổi.

**Link tham khảo:**

https://docs.flutter.dev/cookbook/forms

### Câu 267: Tương tác, Form & Async UI

**Question:** In the following code, what is printed to the console? void main() { try { int result = 10 \~/ 0; print(result); } catch (e) { print("Error: \$e"); } finally { print("Done"); } }

A. Error: ... then Done (integer division by zero throws IntegerDivisionByZeroException)

B. 10, without printing Done

C. Infinity, Done

D. The program crashes completely with no output

**Correct Answer:** A

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **A**.

Chia số nguyên cho 0 với `~/` ném `IntegerDivisionByZeroException`, bị `catch` bắt, in "Error: ..." rồi "Done" (finally luôn chạy). B, C sai vì xảy ra ngoại lệ; D sai vì catch xử lý lỗi nên chương trình không bị lỗi hoàn toàn.

**Link tham khảo:**

https://docs.flutter.dev/cookbook/forms

### Câu 268: Tương tác, Form & Async UI

**Question:** What is the difference between `for-in` and `forEach` when iterating a List in Dart?

A. `for-in` cannot be used with a List

B. `forEach` is the classic index-based loop syntax, while `for-in` is a higher-order function

C. `for-in` is syntax for iterating each element of a collection, while `forEach` calls a callback function in a functional programming style for each element

D. The two syntaxes are entirely identical in performance and syntax, with no difference

**Correct Answer:** C

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **C**.

`for-in` lặp lại từng phần tử bộ sưu tập; `forEach` là hàm bậc cao hơn lấy kiểu gọi lại in theo kiểu hàm. A sai vì for-in hoạt động với List; B đảo ngược mô tả; D sai vì có sự khác biệt về phong cách.

**Link tham khảo:**

https://docs.flutter.dev/cookbook/forms

### Câu 269: Tương tác, Form & Async UI

**Question:** Consider this code illustrating Dart's Event Loop: import 'dart:async'; void main() { print("A"); scheduleMicrotask(() => print("micro")); Future(() => print("future")); print("B"); } What is the correct output order?

A. A, B, micro, future

B. A, micro, future, B

C. A, B, future, micro

D. micro, A, B, future

**Correct Answer:** A

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **A**.

Các tác vụ vi mô có mức độ ưu tiên cao hơn hàng đợi Sự kiện nhưng vẫn chạy sau khi thực thi mã đồng bộ hiện tại: in "A", "B" (đồng bộ hóa trước), sau đó vi tác vụ "micro" chạy trước Future "future". Câu trả lời đúng: A, B, micro, future.

**Link tham khảo:**

https://docs.flutter.dev/cookbook/forms

### Câu 270: Tương tác, Form & Async UI

**Question:** Given this Stream code: Stream`<int>` countUp() async { for (int i = 1; i <= 3; i++) { yield i; } } void main() async { await for (var value in countUp()) { print(value); } } What is printed?

A. 1

B. 1 2 3 (each number on its own line)

C. 3 2 1

D. Error because `async` is not allowed for a function returning a Stream

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

Vòng lặp `async`/`yield` tạo thứ tự 1, 2, 3 in, mỗi thứ tự được in trên dòng riêng thông qua `await for`. A chỉ liệt kê một value; C đảo ngược thứ tự; D sai vì Dart hỗ trợ đầy đủ `async`.

**Link tham khảo:**

https://docs.flutter.dev/cookbook/forms

### Câu 271: Tương tác, Form & Async UI

**Question:** In Dart, what is the `Never` type used for?

A. A variable that is never assigned a value

B. A function that never returns normally (always throws an exception or loops infinitely)

C. A data type equivalent to `void`

D. A type used for asynchronous functions

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

`Never` được sử dụng cho các hàm không bao giờ trả về normally (luôn ném hoặc lặp vô hạn). A, C, D mô tả sai mục đích của loại Never.

**Link tham khảo:**

https://docs.flutter.dev/cookbook/forms

### Câu 272: Tương tác, Form & Async UI

**Question:** In Dart's switch-case, why is `break` (or `return`) usually needed after each case?

A. Because every non-empty case must end with break/return/continue --- Dart forbids implicit fall-through (unlike C), otherwise it is a compile error

B. Because Dart requires this syntax to compile, unrelated to behavior

C. Because break is used to exit the main function

D. Dart doesn't support switch-case

**Correct Answer:** A

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **A**.

Các trường hợp chuyển đổi không trống trong Dart không bao giờ rơi vào implicitly (chỉ các trường hợp trống mới có chung nội dung); cú pháp bắt buộc phải có dấu kết thúc. B, C, D mô tả sai vai trò của break trong trường hợp chuyển đổi.

**Link tham khảo:**

https://docs.flutter.dev/cookbook/forms

### Câu 273: Tương tác, Form & Async UI

**Question:** What is a mixin used for in Dart?

A. Fully replaces constructors

B. Sharing behavior across multiple classes without a traditional inheritance chain

C. Used exclusively for JSON handling

D. A special kind of variable in Dart

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

mixin chia sẻ hành vi trên nhiều lớp mà không có chuỗi kế thừa truyền thống. A, C, D mô tả sai mục đích của mixin.

**Link tham khảo:**

https://docs.flutter.dev/cookbook/forms

### Câu 274: Tương tác, Form & Async UI

**Question:** How does a factory constructor differ from a regular constructor in Dart?

A. A factory constructor always creates a completely new object, with no exceptions

B. A factory constructor allows control over instance creation --- it can return an existing instance (cache/singleton) or parse data (JSON) instead of always returning a new object

C. A factory constructor cannot be named

D. A factory constructor can only be used with an abstract class

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

Trình xây dựng gốc kiểm soát việc tạo cá thể --- nó có thể trả về một cá thể hiện có hoặc phân tích dữ liệu, thay vì luôn tạo mới. A sai vì đây chính là sự khác biệt; C, D sai về cú pháp/phạm vi.

**Link tham khảo:**

https://docs.flutter.dev/cookbook/forms

### Câu 275: Tương tác, Form & Async UI

**Question:** Given: class User { final String name; factory User.fromJson(Map j) => User._(j['name']); User._(this.name); } Why is the `User._` constructor made private (with `_`)?

A. Because Dart requires every factory constructor to have an accompanying private constructor

B. To prevent code outside the class from directly calling the regular constructor, forcing usage through `User.fromJson` --- controlling how objects are created

C. Because `_` is a required naming convention for JSON parsing

D. No particular reason, just a coding style choice

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

Đặt hàm tạo ở chế độ riêng tư sẽ ngăn các cuộc gọi trực tiếp từ bên ngoài, buộc sử dụng thông qua `fromJson` --- kiểm soát việc tạo đối tượng. A, C, D không phải là lý do đúng/chính xác trong mẫu this factory.

**Link tham khảo:**

https://docs.flutter.dev/cookbook/forms

### Câu 276: Tương tác, Form & Async UI

**Question:** What is the main benefit that generics (`List<T>`, `Future<T>`, `Map<K,V>`) bring in Dart?

A. Makes the program run faster on the CPU

B. Ensures compile-time type safety, avoiding errors from misusing the dynamic type

C. Allows completely skipping data type declarations

D. Only works with primitive types (int, double)

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

Generics đảm bảo an toàn cho loại thời gian biên dịch, tránh các lỗi sử dụng sai loại dynamic. A, C, D mô tả sai lợi ích cốt lõi của thuốc generic.

**Link tham khảo:**

https://docs.flutter.dev/cookbook/forms

### Câu 277: Tương tác, Form & Async UI

**Question:** In Dart, which queue has HIGHER priority between the Microtask queue and the Event queue?

A. The Event queue has higher priority, always running before the Microtask queue

B. The Microtask queue has higher priority --- all microtasks run before Dart continues processing the Event queue (Futures, timers, UI events)

C. Both run in parallel, with no priority order

D. Priority depends on the declaration order in the code, not fixed

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

Hàng đợi Microtask có mức độ ưu tiên cao hơn --- tất cả các microtask chạy trước khi Dart chuyển sang hàng đợi Sự kiện. A đảo ngược điều này; C, D không khớp với cơ chế vòng lặp sự kiện của Dart.

**Link tham khảo:**

https://docs.flutter.dev/cookbook/forms

### Câu 278: Tương tác, Form & Async UI

**Question:** Given this Future chaining code: Future(() => 1) .then((v) => v + 1) .then((v) => print(v)); What value is printed?

A. 1

B. 2

C. 0

D. Nothing is printed because await is missing

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

`Future(()=>1).then((v)=>v+1).then((v)=>print(v))` → 1+1 = 2, in ra 2. A, C có giá trị sai; D sai vì mã vẫn thực thi mà không có await rõ ràng ở phần chính.

**Link tham khảo:**

https://docs.flutter.dev/cookbook/forms

### Câu 279: Tương tác, Form & Async UI

**Question:** Comparing Future chaining (`.then()`) with `async/await`, which statement is most accurate?

A. `.then()` and `async/await` are entirely incompatible, cannot be used together in a project

B. `.then()` suits simple async chains without needing intermediate variables; `async/await` makes async code read linearly, easier to follow when there are multiple dependent steps

C. `async/await` runs fully synchronously, no longer asynchronous

D. `.then()` is always faster than `async/await` in terms of performance

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

`.then()` phù hợp với chuỗi đơn giản; `async/await` giúp mã đọc tuyến tính khi các bước phụ thuộc vào nhau. A sai vì chúng có thể được sử dụng cùng nhau; C sai vì async/await vẫn không đồng bộ; D không có cơ sở về hiệu suất tuyệt đối.

**Link tham khảo:**

https://docs.flutter.dev/cookbook/forms

### Câu 280: Tương tác, Form & Async UI

**Question:** How does `StreamController.broadcast()` differ from the default single-subscription Stream?

A. Broadcast only allows exactly one listener

B. Broadcast allows multiple listeners to listen simultaneously and receive shared events, while single-subscription only allows one listener, consuming sequentially

C. No real difference, just a different name

D. Broadcast only works with String data types

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

Broadcast cho phép nhiều người nghe nhận các sự kiện được chia sẻ; đăng ký một lần chỉ cho phép một. A đảo ngược điều này; C, D không khớp với đặc điểm thực tế của hai loại Stream.

**Link tham khảo:**

https://docs.flutter.dev/cookbook/forms

### Câu 281: Tương tác, Form & Async UI

**Question:** Given this StreamController.broadcast() code: var c = StreamController`<int>`.broadcast(); c.stream.listen((v) => print("A:$v")); c.stream.listen((v) => print("B:$v")); c..add(1)..add(2); What is printed, in order?

A. A:1, A:2, B:1, B:2

B. A:1, B:1, A:2, B:2

C. Only A:1, A:2 are printed because listener B doesn't work

D. Error because StreamController.broadcast() doesn't support multiple listeners

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

Với `c..add(1)..add(2)`, mỗi add sẽ kích hoạt cả người nghe A và B trước add tiếp theo: A:1, B:1, A:2, B:2. A có thứ tự nhóm sai; C sai vì cả hai trình nghe đều hoạt động; D sai vì broadcast hỗ trợ đầy đủ nhiều trình nghe.

**Link tham khảo:**

https://docs.flutter.dev/cookbook/forms

### Câu 282: Tương tác, Form & Async UI

**Question:** According to the "Performance Best Practices" section of Module 3, which practice is NOT recommended?

A. Using const widgets to reduce rebuild cost

B. Running a heavy loop directly on the main isolate while building the UI

C. Using async functions for I/O operations

D. Using Isolates for heavy CPU tasks

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

Chạy một vòng lặp nặng trực tiếp trên isolate chính trong khi xây dựng UI là phương pháp KHÔNG nên áp dụng done (ngược lại với phương pháp hay nhất). A, C, D đều là những phương pháp được khuyến nghị.

**Link tham khảo:**

https://docs.flutter.dev/cookbook/forms

### Câu 283: Tương tác, Form & Async UI

**Question:** In Dart, what is the core difference between an `abstract class` and an `implicit interface` (every class automatically has an interface)?

A. No difference, the two concepts are the same

B. An abstract class can contain both bodied and bodiless methods and cannot be instantiated directly; while any regular class automatically defines an implicit interface that other classes can `implements`

C. Interfaces only exist in Java, Dart has no such concept

D. Abstract classes are always faster than interfaces at runtime

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

Tóm tắt class có thể kết hợp các phương thức có nội dung/không có nội dung và không thể được khởi tạo trực tiếp; mọi class thông thường đều tự động có implicit interface người khác có thể triển khai. A sai vì có sự khác biệt rõ ràng; C sai vì Dart có khái niệm này thông qua giao diện implicit; D không có cơ sở về hiệu suất thời gian chạy tuyệt đối.

**Link tham khảo:**

https://docs.flutter.dev/cookbook/forms

### Câu 284: Tương tác, Form & Async UI

**Question:** A student writes this Repository: class Repo { Future`<String>` getUser() async { await Future.delayed(Duration(milliseconds: 300)); return "Anna"; } } and calls `var name = repo.getUser();` (without using `await`). What type and value will variable `name` have at the moment of assignment?

A. Type String, value "Anna" immediately

B. Type Future`<String>`, a Future object still "pending" completion, not yet the actual String value

C. Type dynamic, value null

D. Compile error due to missing await

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

Không có await, `name` có loại `Future<String>` --- một đối tượng Future đang chờ xử lý, chưa có giá trị String thực tế. A, C, D không khớp với hành vi của Future trong Dart.

**Link tham khảo:**

https://docs.flutter.dev/cookbook/forms

### Câu 285: Tương tác, Form & Async UI

**Question:** In RadioListTile, what is the role of the `groupValue` property?

A. Determines that particular radio button's own value

B. Holds the currently selected value for the entire group of RadioListTiles, used to compare against each item's `value` to determine selected state

C. Has no effect, purely decorative

D. Used to set the background color of RadioListTile

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

`groupValue` giữ value hiện được chọn cho cả nhóm, so với `value` của từng mục. A, C, D mô tả sai chức năng của nó.

**Link tham khảo:**

https://docs.flutter.dev/cookbook/forms

### Câu 286: Tương tác, Form & Async UI

**Question:** What is the difference between `Slider` and `Switch` in Flutter?

A. Slider selects a continuous value within a range, Switch only toggles a boolean value

B. Both are used for boolean values

C. Switch is for real numbers, Slider is for boolean

D. No functional difference

**Correct Answer:** A

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **A**.

Slider chọn một giá trị liên tục, Switch chỉ chuyển đổi boolean. B, C, D mô tả sai/đảo ngược hai hàm widgets'.

**Link tham khảo:**

https://docs.flutter.dev/cookbook/forms

### Câu 287: Tương tác, Form & Async UI

**Question:** In the `showDatePicker` example, what are the `firstDate` and `lastDate` parameters used for?

A. Determine the default current date

B. Restrict the valid date range the user can select on the calendar

C. No real effect, purely a required syntax parameter

D. Determine the date display format (dd/mm/yyyy or mm/dd/yyyy)

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

`firstDate`/`lastDate` hạn chế phạm vi ngày có thể chọn hợp lệ trên lịch. A, C, D mô tả sai chức năng của hai tham số này.

**Link tham khảo:**

https://docs.flutter.dev/cookbook/forms

### Câu 288: Tương tác, Form & Async UI

**Question:** In the Stateless/Stateful comparison table, which usage example fits StatelessWidget?

A. An input form with validation

B. A counter that increases/decreases with user interaction

C. A static logo, unchanging text

D. A list where items can be added/removed

**Correct Answer:** C

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **C**.

Logo tĩnh/văn bản không thay đổi phù hợp với StatelessWidget vì không cần phải xây dựng lại. A, B, D đều yêu cầu StatefulWidget do thay đổi state.

**Link tham khảo:**

https://docs.flutter.dev/cookbook/forms

### Câu 289: Tương tác, Form & Async UI

**Question:** A student forgets to wrap a search bar in `SafeArea` on a device with a notch. What is the most likely real-world consequence?

A. The app automatically crashes right at startup

B. Part of the search bar's top area may be obscured or clipped by the notch/status bar, harming the user experience

C. GridView automatically switches its layout to 2 columns

D. No effect at all, SafeArea is purely cosmetic and unnecessary

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

Thiếu SafeArea có thể khiến phần trên cùng của thanh tìm kiếm bị che khuất/cắt bớt bởi thanh khía/trạng thái, gây hại cho UX. A, C, D không phản ánh hậu quả thực tế.

**Link tham khảo:**

https://docs.flutter.dev/cookbook/forms

### Câu 290: Tương tác, Form & Async UI

**Question:** When should you use `TextFormField` instead of a plain `TextField`?

A. When you don't need any special functionality

B. When the input needs to be inside a `Form` and needs validation functionality

C. `TextFormField` can only be used for Web

D. There's no difference between the two widgets

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

Sử dụng TextFormField khi dữ liệu đầu vào nằm trong Form và cần xác thực. A, C, D mô tả sai cách dùng.

**Link tham khảo:**

https://docs.flutter.dev/cookbook/forms

### Câu 291: Tương tác, Form & Async UI

**Question:** What is `GlobalKey<FormState>` used for in a `Form`?

A. Only used to set the form's color

B. Allows accessing and controlling the Form's state from outside, e.g. calling `validate()`, `save()`, `reset()` on all fields in the form

C. Syntactically required but has no real effect

D. Used to encrypt the entered data

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

GlobalKey`<FormState>` cho phép truy cập/điều khiển state của Form từ bên ngoài thông qua validate()/save()/reset(). A, C, D mô tả sai vai trò của nó.

**Link tham khảo:**

https://docs.flutter.dev/cookbook/forms

### Câu 292: Tương tác, Form & Async UI

**Question:** Given: void _submit() { final isValid = _formKey.currentState!.validate(); if (!isValid) return; _formKey.currentState!.save(); ScaffoldMessenger.of(context).showSnackBar( SnackBar(content: Text('Signed up as $_name ($_email)')), ); } If the order is swapped, calling `_formKey.currentState!.save();` BEFORE calling `validate()`, what could happen?

A. No difference, the call order doesn't matter

B. Invalid data could still be saved into state variables (`_name`, `_email`...) via `onSaved`, because save() doesn't itself check validity before saving --- validate() must be called first to ensure only checked data gets saved

C. The app will show a compile error

D. save() will automatically call validate() implicitly before saving

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

Việc gọi save() trước validate() có nguy cơ lưu dữ liệu chưa được xác thực qua onSaved, vì save() không tự kiểm tra tính hợp lệ. A sai vì thứ tự rất quan trọng; C sai vì đây không phải là lỗi biên dịch; D sai vì save() không tự động gọi validate().

**Link tham khảo:**

https://docs.flutter.dev/cookbook/forms

### Câu 293: Điều hướng & Deep link

**Question:** According to the lecture, what common pitfall is emphasized for students new to Dart?

A. Forgetting to close a class's curly braces

B. Ignoring null-safety warnings and improperly mixing synchronous/asynchronous code

C. Using too many async functions causing incorrect parallel execution

D. Being unable to create a String-type variable

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

Những cạm bẫy phổ biến đã nêu: bỏ qua các cảnh báo an toàn rỗng và trộn mã đồng bộ/{0}} không đúng cách. A, C, D không phải là nội dung được nhấn mạnh trong bài giảng.

**Link tham khảo:**

https://docs.flutter.dev/ui/navigation

### Câu 294: Điều hướng & Deep link

**Question:** Consider Module 4's "Practice Task": build a movie list using `ListView.builder` + `ListTile`, where `onTap` needs to show `SnackBar(title)`. What is the correct way to call a SnackBar in Flutter?

A. `Text(title).showSnackBar()`

B. `ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text(title)))`

C. `Navigator.of(context).showSnackBar(title)`

D. `SnackBar.show(context, title)`

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

`ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text(title)))` là cách gọi đúng. A, C, D không phải là API Flutter hợp lệ.

**Link tham khảo:**

https://docs.flutter.dev/ui/navigation

### Câu 295: Điều hướng & Deep link

**Question:** In Flutter, what does `Navigator.push()` do?

A. Clears the entire navigation stack

B. Adds (pushes) a new route/screen onto the top of the navigation stack

C. Goes back to the previous screen

D. Closes the app

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

`Navigator.push()` đẩy tuyến đường mới lên đầu ngăn xếp điều hướng. A, C, D mô tả sai chức năng của phương pháp này.

**Link tham khảo:**

https://docs.flutter.dev/ui/navigation

### Câu 296: Điều hướng & Deep link

**Question:** What does the `Navigator.pop(context)` method do?

A. Pushes another new screen onto the stack

B. Removes (pops) the screen currently at the top of the stack, revealing the screen below it

C. Replaces the entire stack with a new route

D. Restarts the app from scratch

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

`Navigator.pop(context)` xóa màn hình trên cùng khỏi ngăn xếp, hiển thị màn hình bên dưới. A, C, D mô tả sai hành vi này.

**Link tham khảo:**

https://docs.flutter.dev/ui/navigation

### Câu 297: Điều hướng & Deep link

**Question:** What is the difference between `Navigator.push()` and `Navigator.pushReplacement()`?

A. No difference

B. `push()` adds a new route on top of the current one (the old route stays in the stack), while `pushReplacement()` replaces the current route with a new one (the old route is removed from the stack)

C. `pushReplacement()` can only be used with named routes

D. `push()` doesn't allow going back with the back button

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

`push()` giữ tuyến đường cũ trong ngăn xếp; `pushReplacement()` xóa tuyến đường cũ khi thêm tuyến đường mới. A sai vì có sự khác biệt rõ ràng; C, D là các đặc tính kỹ thuật không chính xác.

**Link tham khảo:**

https://docs.flutter.dev/ui/navigation

### Câu 298: Điều hướng & Deep link

**Question:** In a login flow, a developer uses `Navigator.pushReplacementNamed(context, '/home')` instead of `Navigator.pushNamed(context, '/home')` after a successful login. What is the most reasonable reason for this choice?

A. `pushReplacementNamed` runs faster in terms of performance

B. It prevents the user from pressing Back to return to the Login screen after successfully logging in, since the Login route has been removed from the stack

C. `pushNamed` doesn't support passing parameters

D. There's no real difference between the two calls

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

`pushReplacementNamed` ngăn việc quay lại Đăng nhập qua Quay lại do tuyến Đăng nhập bị xóa khỏi ngăn xếp. A, C, D không phải là lý do đúng.

**Link tham khảo:**

https://docs.flutter.dev/ui/navigation

### Câu 299: Điều hướng & Deep link

**Question:** What benefit do Named Routes in Flutter bring over calling `MaterialPageRoute` directly everywhere?

A. Named Routes run faster at runtime

B. They increase readability and scalability in large apps, especially when parameters need to be passed or many screens need centralized management

C. Named Routes are the only way Flutter supports navigation

D. Named Routes only work with Navigator 2.0

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

Các tuyến được đặt tên cải thiện khả năng đọc và khả năng mở rộng trong các ứng dụng lớn, đặc biệt là đối với việc truyền tham số và quản lý màn hình tập trung. A, C, D không phù hợp với lợi ích thực tế.

**Link tham khảo:**

https://docs.flutter.dev/ui/navigation

### Câu 300: Điều hướng & Deep link

**Question:** What is the core difference between Navigator 1.0 and Navigator 2.0?

A. Navigator 1.0 uses a declarative model, Navigator 2.0 uses an imperative model

B. Navigator 1.0 is imperative --- manually calling push()/pop(); Navigator 2.0 is declarative --- describing the desired stack state and letting the framework sync automatically

C. Both are entirely identical, just different names across Flutter versions

D. Navigator 2.0 doesn't support deep linking, only Navigator 1.0 does

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

Navigator 1.0 là imperative (đẩy/bật thủ công); Navigator 2.0 là declarative (mô tả ngăn xếp mong muốn, đồng bộ hóa khung). A đảo ngược điều này; C, D không phù hợp với đặc điểm của hai phiên bản.

**Link tham khảo:**

https://docs.flutter.dev/ui/navigation

### Câu 301: Điều hướng & Deep link

**Question:** What are the three main components in Navigator 2.0's architecture, as mentioned in the lecture?

A. Router, Controller, View

B. RouterDelegate, RouteInformationParser, BackButtonDispatcher

C. Navigator, Route, Stack

D. Provider, Consumer, ChangeNotifier

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

Ba thành phần chính: RouterDelegate, RouteInformationParser, BackButtonDispatcher --- khớp với slide. A, C, D không phải là tên chính xác của các thành phần này.

**Link tham khảo:**

https://docs.flutter.dev/ui/navigation

### Câu 302: Điều hướng & Deep link

**Question:** What does deep linking in Flutter allow?

A. Increases app build speed

B. Lets the user open a specific screen in the app directly via a URL or external source (e.g. a web link or notification)

C. Only applicable to apps running on Web

D. A feature that fully replaces SharedPreferences

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

Liên kết sâu cho phép người dùng mở một màn hình cụ thể trực tiếp thông qua URL/nguồn bên ngoài. A, C, D mô tả sai mục đích của liên kết sâu.

**Link tham khảo:**

https://docs.flutter.dev/ui/navigation

### Câu 303: Điều hướng & Deep link

**Question:** Given this `InheritedWidget` code: class AppData extends InheritedWidget { final String theme; const AppData({required this.theme, required Widget child, Key? key}) : super(key: key, child: child); static AppData of(BuildContext context) => context.dependOnInheritedWidgetOfExactType`<AppData>`()!; } What is the main purpose of `InheritedWidget` in this example?

A. Only used to define navigation routes

B. Efficiently passing data down to all child widgets in the widget tree without manually passing parameters through every intermediate constructor

C. Fully replaces Scaffold

D. Only used for storing offline data

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

InheritedWidget truyền dữ liệu xuống cây widget một cách hiệu quả mà không cần chuyển qua mọi cấp độ hàm tạo theo cách thủ công. A, C, D mô tả sai mục đích của nó.

**Link tham khảo:**

https://docs.flutter.dev/ui/navigation

### Câu 304: Điều hướng & Deep link

**Question:** In this code combining Navigation and State: if (appState.loggedIn) Navigator.pushNamed(context, '/dashboard'); else Navigator.pushNamed(context, '/login'); What principle does this code illustrate?

A. State is completely separate and unrelated to navigation

B. App state determines the navigation flow --- combining state management logic with the decision of which route to display

C. This is incorrect code because if/else cannot be used with Navigator

D. Only works when using Navigator 2.0

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

Điều này minh họa state việc xác định luồng điều hướng, kết hợp logic state với các quyết định về tuyến đường. A, C, D mô tả sai ý nghĩa/tính hợp lệ của mã này.

**Link tham khảo:**

https://docs.flutter.dev/ui/navigation

### Câu 305: Điều hướng & Deep link

**Question:** In Navigator 2.0, which component's role does the following code illustrate? class AppRouterDelegate extends RouterDelegate`<AppRoute>` with ChangeNotifier, PopNavigatorRouterDelegateMixin`<AppRoute>` { @override Widget build(BuildContext context) { return Navigator( pages: [MaterialPage(child: HomePage())], onPopPage: (route, result) => route.didPop(result), ); } }

A. RouteInformationParser --- responsible for parsing the URL

B. RouterDelegate --- responsible for building the current page stack (`pages`) and handling pop events, reflecting the desired navigation state

C. BackButtonDispatcher --- only handles the Android physical back button

D. This is just a regular StatelessWidget unrelated to navigation

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

Mã này minh họa RouterDelegate --- xây dựng ngăn xếp trang hiện tại và xử lý các sự kiện bật lên. A, C, D gán sai vai trò cho một thành phần Navigator 2.0 khác.

**Link tham khảo:**

https://docs.flutter.dev/ui/navigation

### Câu 306: Điều hướng & Deep link

**Question:** In the MovieDetailPage Hero Banner example: Stack( children: [ Image.network(movie.posterUrl, fit: BoxFit.cover), Positioned(bottom: 0, child: Container(height: 80, decoration: gradient)), ], ) Why is `Stack` used instead of `Column` here?

A. Because Stack runs faster than Column

B. Because Stack allows child widgets to overlap at the same position, needed to place a gradient layer over the poster image

C. Because Column doesn't support Image.network

D. No difference, the two widgets are entirely equivalent

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

Stack cho phép các phần tử con chồng lên nhau, cần thiết để tạo lớp chuyển màu trên hình ảnh áp phích. A, C, D không phù hợp với lý do kỹ thuật của lựa chọn này.

**Link tham khảo:**

https://docs.flutter.dev/ui/navigation

### Câu 307: Điều hướng & Deep link

**Question:** In the deep link handling flow via `onGenerateRoute`, what is the main purpose of this callback in `MaterialApp`?

A. Only handles network errors

B. Allows the app to parse the route name (and parameters) coming from an external link, then dynamically return the corresponding route/screen, commonly used to handle deep links

C. Fully replaces Scaffold

D. Only works when the app is offline

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

`onGenerateRoute` phân tích tên/tham số tuyến đường từ một liên kết bên ngoài và tự động trả về màn hình tương ứng, thường là cho deep links. A, C, D mô tả sai mục đích của nó.

**Link tham khảo:**

https://docs.flutter.dev/ui/navigation

### Câu 308: Điều hướng & Deep link

**Question:** What does the `Route` class in Flutter represent?

A. An API endpoint from a server

B. A screen/page in the app, usually implemented via `MaterialPageRoute`

C. A type of animation

D. A JSON data structure

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

`Route` đại diện cho một màn hình/trang trong ứng dụng, thường được triển khai thông qua MaterialPageRoute. A, C, D mô tả sai khái niệm Route.

**Link tham khảo:**

https://docs.flutter.dev/ui/navigation

### Câu 309: Điều hướng & Deep link

**Question:** Consider the requirement: "Tap outside the form → keyboard hides." What is the common implementation approach mentioned in the lecture?

A. Call `Navigator.pop(context)` when the user taps outside

B. Wrap the form in a `GestureDetector` with `onTap` calling `FocusScope.of(context).unfocus()` (hiding the keyboard when tapping outside the input fields)

C. This cannot be done in Flutter

D. The keyboard can only be hidden with the physical Back button

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

Gói biểu mẫu bằng cách GestureDetector gọi FocusScope.of(context).unfocus() khi nhấn là cách triển khai phổ biến. A, C, D không phù hợp với cách tiếp cận tiêu chuẩn được dạy.

**Link tham khảo:**

https://docs.flutter.dev/ui/navigation

### Câu 310: Điều hướng & Deep link

**Question:** Given: Future`<void>` fetchPosts() async { final url = Uri.parse('https://jsonplaceholder.typicode.com/posts'); final response = await http.get(url); if (response.statusCode == 200) { print('Response body: \${response.body}'); } else { print('Request failed: \${response.statusCode}'); } } Why does this function need to be declared `async` and use `await` before `http.get(url)`?

A. Because `http.get()` always runs synchronously so async is mandatory

B. Because `http.get()` returns a `Future<Response>` --- the network operation doesn't complete immediately, `await` pauses function execution until a response arrives, avoiding blocking the UI thread while waiting

C. `async`/`await` is purely decorative syntax with no effect on behavior

D. Because Dart doesn't support calling an asynchronous function without async

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

`http.get()` trả về Future`<Response>`; await tạm dừng thực thi cho đến khi hoàn thành, tránh chặn luồng UI. A, C, D mô tả sai lý do thực sự về mặt kỹ thuật.

**Link tham khảo:**

https://docs.flutter.dev/ui/navigation

### Câu 311: Điều hướng & Deep link

**Question:** In Demo 8.2, when the user taps an item in the post list to open the detail screen, how is the post data (`Post`) passed to `PostDetailScreen`?

A. Calling the API again to separately load the detail data

B. Directly passing the already-available `Post` object through `PostDetailScreen`'s constructor when navigating via `MaterialPageRoute`

C. Saving it to SharedPreferences then reading it back on the detail screen

D. Using a global variable to share the data

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

Đối tượng Post được truyền trực tiếp qua hàm tạo của PostDetailScreen trong khi điều hướng qua MaterialPageRoute, theo mã Demo 8.2. A, C, D không khớp với cách triển khai thực tế của bản demo.

**Link tham khảo:**

https://docs.flutter.dev/ui/navigation

### Câu 312: Điều hướng & Deep link

**Question:** Suppose a student writes: Future<List`<Post>`> fetchPosts() async { final response = await http.get(url); final List`<dynamic>` jsonList = json.decode(response.body); return jsonList.map((e) => Post.fromJson(e)).toList(); } but does NOT check `response.statusCode` before decoding. If the server returns a 500 error with non-valid-JSON content (e.g. an HTML error page), what is most likely to happen?

A. The app still displays the post list normally

B. `json.decode()` will throw a `FormatException` because the returned content isn't valid JSON, causing the `Future` to error out, which needs handling via `catch` or `snapshot.hasError` in FutureBuilder

C. The server will automatically resend a correctly formatted response

D. Dart will automatically ignore the error and return an empty list

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

json.decode() ném FormatException vào nội dung không phải JSON, gây lỗi Future, yêu cầu xử lý catch/snapshot.hasError. A, C, D không khớp với hành vi thực tế của json.decode() đối với dữ liệu nhập không hợp lệ.

**Link tham khảo:**

https://docs.flutter.dev/ui/navigation

### Câu 313: Điều hướng & Deep link

**Question:** Per "Best Practices & Patterns for Authentication," why is `pushReplacementNamed()` recommended over `pushNamed()` when moving from the Splash/Login screen to Home after successful authentication?

A. Because `pushReplacementNamed()` runs faster in CPU speed

B. To prevent the user from pressing Back to return to the Splash or Login screen that has already served its purpose, avoiding an illogical navigation experience (login → back → login again)

C. Because `pushNamed()` doesn't support named routes

D. There's no real difference between the two methods in this context

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

pushReplacementNamed() ngăn việc quay lại màn hình Splash/Đăng nhập đã hoàn tất thông qua Quay lại, tránh điều hướng phi logic. A, C, D không khớp với lý do thực tế.

**Link tham khảo:**

https://docs.flutter.dev/ui/navigation

### Câu 314: Điều hướng & Deep link

**Question:** The keyword with is normally used with what?

A. Factory constructors

B. Named routes

C. Mixins

D. FutureBuilder

**Correct Answer:** C

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **C**.

Tùy chọn C đúng: Mixins. Câu trả lời phù hợp với hành vi loại hệ thống hoặc an toàn vô giá trị của Dart; sử dụng các loại nullable và toán tử nhận biết null một cách có chủ ý để tránh lỗi null.

**Link tham khảo:**

https://docs.flutter.dev/ui/navigation

### Câu 315: Điều hướng & Deep link

**Question:** What need does a mixin address?

A. Creating declarative routes

B. Reusing behavior across classes without requiring an is-a inheritance relationship

C. Storing relational data

D. Replacing an HTTP client

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

Tùy chọn B đúng: Sử dụng lại hành vi giữa các lớp mà không yêu cầu mối quan hệ kế thừa. Câu trả lời phù hợp với hành vi loại hệ thống hoặc an toàn vô giá trị của Dart; sử dụng các loại nullable và toán tử nhận biết null một cách có chủ ý để tránh lỗi null.

**Link tham khảo:**

https://docs.flutter.dev/ui/navigation

### Câu 316: Điều hướng & Deep link

**Question:** In Box`<T>`, what does T represent?

A. A fixed Future

B. The name of a global variable

C. A route name

D. A generic type parameter

**Correct Answer:** D

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **D**.

Tùy chọn D đúng: Tham số loại chung. Câu trả lời phù hợp với hành vi loại hệ thống hoặc an toàn vô giá trị của Dart; sử dụng các loại nullable và toán tử nhận biết null một cách có chủ ý để tránh lỗi null.

**Link tham khảo:**

https://docs.flutter.dev/ui/navigation

### Câu 317: Điều hướng & Deep link

**Question:** Which two main queues are described in Dart's asynchronous engine?

A. Render queue and Route queue

B. Widget queue and SQL queue

C. HTTP queue and JSON queue

D. Microtask queue and Event queue

**Correct Answer:** D

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **D**.

Tùy chọn D đúng: Hàng đợi microtask và Hàng đợi sự kiện. Dart sử dụng Future cho một kết quả không đồng bộ và Stream cho một chuỗi sự kiện không đồng bộ; async/await làm cho mã dựa trên Future dễ đọc hơn.

**Link tham khảo:**

https://docs.flutter.dev/ui/navigation

### Câu 318: Điều hướng & Deep link

**Question:** Which type of task is processed before tasks in the event queue?

A. Image frame

B. Microtask

C. Named route

D. Database migration

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

Tùy chọn B đúng: Microtask. Câu trả lời phù hợp với hành vi loại hệ thống hoặc an toàn vô giá trị của Dart; sử dụng các loại nullable và toán tử nhận biết null một cách có chủ ý để tránh lỗi null.

**Link tham khảo:**

https://docs.flutter.dev/ui/navigation

### Câu 319: Điều hướng & Deep link

**Question:** What does scheduleMicrotask() do?

A. Adds a callback to the microtask queue

B. Declares a generic

C. Opens a route

D. Creates a JSON file

**Correct Answer:** A

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **A**.

Tùy chọn A đúng: Thêm lệnh gọi lại vào hàng đợi vi nhiệm. Câu trả lời phù hợp với hành vi loại hệ thống hoặc an toàn vô giá trị của Dart; sử dụng các loại nullable và toán tử nhận biết null một cách có chủ ý để tránh lỗi null.

**Link tham khảo:**

https://docs.flutter.dev/ui/navigation

### Câu 320: Điều hướng & Deep link

**Question:** Which lifecycle method is used for one-time initialization logic in a State object?

A. onGenerateRoute()

B. build() only

C. dispose()

D. initState()

**Correct Answer:** D

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **D**.

Tùy chọn D đúng: initState(). Đây là khái niệm quản lý state: các thay đổi state phải thông báo hoặc kích hoạt phần có liên quan của UI để xây dựng lại.

**Link tham khảo:**

https://docs.flutter.dev/ui/navigation

### Câu 321: Điều hướng & Deep link

**Question:** Which method displays an image from a URL?

A. Image.asset only

B. Text.network

C. Image.network

D. Icon.url

**Correct Answer:** C

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **C**.

Tùy chọn C đúng: Image.network. Câu trả lời phù hợp với hành vi loại hệ thống hoặc an toàn vô giá trị của Dart; sử dụng các loại nullable và toán tử nhận biết null một cách có chủ ý để tránh lỗi null.

**Link tham khảo:**

https://docs.flutter.dev/ui/navigation

### Câu 322: Điều hướng & Deep link

**Question:** What does BoxFit control?

A. How a token expires

B. How an image is scaled or fitted inside its display area

C. How a List is filtered

D. How a route is pushed

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

Tùy chọn B đúng: Cách thu nhỏ hoặc điều chỉnh hình ảnh trong khu vực hiển thị của nó. Câu trả lời phù hợp với hành vi loại hệ thống hoặc an toàn vô giá trị của Dart; sử dụng các loại nullable và toán tử nhận biết null một cách có chủ ý để tránh lỗi null.

**Link tham khảo:**

https://docs.flutter.dev/ui/navigation

### Câu 323: Điều hướng & Deep link

**Question:** Which structure does Navigator 1.0 use to manage screens?

A. A stack of routes/pages

B. A SQL tree

C. A list of tokens

D. A microtask queue

**Correct Answer:** A

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **A**.

Tùy chọn A đúng: Một chồng các tuyến đường/trang. API điều hướng Flutter quản lý quá trình chuyển đổi tuyến đường hoặc ánh xạ thông tin URL/tuyến đường đến tới ứng dụng state, tùy thuộc vào API được sử dụng.

**Link tham khảo:**

https://docs.flutter.dev/ui/navigation

### Câu 324: Điều hướng & Deep link

**Question:** When an app needs complex deep links and web URL synchronization, what do the docs recommend considering?

A. Only use setState

B. Container

C. ThemeData

D. Router

**Correct Answer:** D

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **D**.

Router phù hợp với các nhu cầu liên kết sâu và định tuyến phức tạp hơn mà Navigator 1.0 push/pop bắt buộc không thể thể hiện được, bao gồm cả đồng bộ hóa URL web. Các tùy chọn khác là các API widgets hoặc state không liên quan.

**Link tham khảo:**

https://docs.flutter.dev/ui/navigation

### Câu 325: Điều hướng & Deep link

**Question:** What does Navigator.pop() do?

A. Removes the current route and reveals the route below it

B. Replaces the entire application state

C. Adds a new route

D. Creates a deep link

**Correct Answer:** A

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **A**.

Tùy chọn A đúng: Xóa tuyến đường hiện tại và hiển thị tuyến đường bên dưới nó. API điều hướng Flutter quản lý quá trình chuyển đổi tuyến đường hoặc ánh xạ thông tin URL/tuyến đường đến tới ứng dụng state, tùy thuộc vào API được sử dụng.

**Link tham khảo:**

https://docs.flutter.dev/ui/navigation

### Câu 326: Điều hướng & Deep link

**Question:** What does a MaterialPageRoute builder return?

A. A JSON Map

B. A database

C. The widget that defines the next screen's UI

D. A JWT token

**Correct Answer:** C

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **C**.

Tùy chọn C đúng: widget xác định UI của màn hình tiếp theo. API điều hướng Flutter quản lý quá trình chuyển đổi tuyến đường hoặc ánh xạ thông tin URL/tuyến đường đến tới ứng dụng state, tùy thuộc vào API được sử dụng.

**Link tham khảo:**

https://docs.flutter.dev/ui/navigation

### Câu 327: Dữ liệu, Kiến trúc, Plugin & Nền tảng

**Question:** Flutter's architecture has three main layers. What is the correct top-to-bottom order (closest to the developer to closest to the hardware)?

A. Engine → Framework → Embedder

B. Framework → Engine → Embedder

C. Embedder → Framework → Engine

D. Framework → Embedder → Engine

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

Thứ tự kiến trúc: Framework (Dart) → Engine (C++) → Trình nhúng --- thứ tự tiêu chuẩn được nêu trong trang trình bày 'Flutter Tổng quan về kiến trúc'. Các tùy chọn khác đảo ngược thứ tự không chính xác.

**Link tham khảo:**

https://docs.flutter.dev/platform-integration

### Câu 328: Dữ liệu, Kiến trúc, Plugin & Nền tảng

**Question:** According to Flutter's architecture, which statement best describes the concept of a 'Widget'?

A. Widgets are only components that display images

B. In Flutter, everything on screen (layout, style, interaction) is built through Widgets

C. Widgets only exist in the Engine Layer

D. Widget is an Android-only concept, not used in Flutter

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

'Mọi thứ đều là Widget' --- mọi thứ trên màn hình đều là widget. A giới hạn sai phạm vi; C, D sai về vị trí/cái gì của widget.

**Link tham khảo:**

https://docs.flutter.dev/platform-integration

### Câu 329: Dữ liệu, Kiến trúc, Plugin & Nền tảng

**Question:** How does `ListView.separated` differ from `ListView.builder`?

A. `ListView.separated` doesn't support itemBuilder

B. `ListView.separated` allows inserting a separator widget between items via `separatorBuilder`, which `ListView.builder` lacks

C. `ListView.builder` only displays up to 10 items

D. The two are entirely identical in API

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

`ListView.separated` cho phép chèn dấu phân cách giữa các mục thông qua `separatorBuilder`. A sai vì nó vẫn có itemBuilder; C sai vì không có giới hạn 10 mục; D sai vì hai API khác nhau.

**Link tham khảo:**

https://docs.flutter.dev/platform-integration

### Câu 330: Dữ liệu, Kiến trúc, Plugin & Nền tảng

**Question:** What is `FocusNode` combined with `textInputAction: TextInputAction.next` and `onFieldSubmitted` used for?

A. Encrypting data entered into the field

B. Controlling the shift of focus to the next input field when the user presses "Next" on the keyboard, improving the mobile input experience

C. Completely hiding the keyboard when starting to type

D. Automatically filling in data from an API

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

Sự kết hợp này kiểm soát việc chuyển trọng tâm sang trường next khi người dùng nhấn Tiếp theo, cải thiện UX trên thiết bị di động. A, C, D mô tả sai mục đích của nó.

**Link tham khảo:**

https://docs.flutter.dev/platform-integration

### Câu 331: Dữ liệu, Kiến trúc, Plugin & Nền tảng

**Question:** What kind of data does `SharedPreferences` best suit?

A. Complex relational data with many linked tables

B. Simple key-value data like flags or settings

C. Large image files

D. Long-duration video

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

SharedPreferences phù hợp nhất với dữ liệu khóa-giá trị đơn giản như cờ hoặc cài đặt. A, C, D không phải là trường hợp thích hợp cho SharedPreferences.

**Link tham khảo:**

https://docs.flutter.dev/platform-integration

### Câu 332: Dữ liệu, Kiến trúc, Plugin & Nền tảng

**Question:** On Flutter Web, `SharedPreferences` operates based on which browser storage mechanism?

A. IndexedDB

B. Cookie

C. localStorage

D. SessionStorage

**Correct Answer:** C

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **C**.

Trên Flutter Web, SharedPreferences ánh xạ tới `localStorage` của trình duyệt. A, B, D không khớp với cơ chế nêu trong bảng so sánh.

**Link tham khảo:**

https://docs.flutter.dev/platform-integration

### Câu 333: Dữ liệu, Kiến trúc, Plugin & Nền tảng

**Question:** How does SQFlite differ from SQLite, per the "Why not name it SQLite?" explanation?

A. SQFlite and SQLite are two different names for the exact same concept, no technical difference

B. SQLite is the actual storage engine, while SQFlite is a Flutter plugin/wrapper (written in Dart + native code) that lets Flutter communicate with SQLite --- SQFlite is not a standalone database

C. SQFlite runs 10 times faster than SQLite

D. SQFlite only works on Web, SQLite only works on mobile

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

SQLite là công cụ lưu trữ thực tế; SQFlite là plugin/trình bao bọc của Flutter kết nối với nó chứ không phải cơ sở dữ liệu độc lập. A, C, D không khớp với lời giải thích đã cho.

**Link tham khảo:**

https://docs.flutter.dev/platform-integration

### Câu 334: Dữ liệu, Kiến trúc, Plugin & Nền tảng

**Question:** In SQFlite, which function is called to open or create a database, and how often should it be called?

A. `openDatabase()` --- should only be called once (singleton/service) to avoid opening multiple duplicate connections

B. `createDatabase()` --- should be called every time before querying

C. `initDatabase()` --- call frequency doesn't matter

D. `connectDatabase()` --- only usable with Web

**Correct Answer:** A

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **A**.

`openDatabase()` chỉ nên được gọi là once (singleton/service) để tránh kết nối trùng lặp. B, C, D không phải là tên chức năng/cách sử dụng được khuyến nghị.

**Link tham khảo:**

https://docs.flutter.dev/platform-integration

### Câu 335: Dữ liệu, Kiến trúc, Plugin & Nền tảng

**Question:** Given: a Todo app needs to display the task list paginated to avoid loading all data at once on mobile. Which SQL clause is most suitable for implementing pagination?

A. GROUP BY and HAVING

B. LIMIT and OFFSET

C. WHERE alone is sufficient

D. SQLite doesn't support pagination

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

`LIMIT` và `OFFSET` là cú pháp SQL tiêu chuẩn để phân trang. A, C, D không phù hợp/đúng cho mục đích này.

**Link tham khảo:**

https://docs.flutter.dev/platform-integration

### Câu 336: Dữ liệu, Kiến trúc, Plugin & Nền tảng

**Question:** Offline-First" is an app design strategy based on what principle?

A. The app only works with a stable Internet connection

B. Prioritize loading and displaying local data first, then sync with the server when a network connection is available, keeping the app usable offline

C. Never store data locally, always call the API every time data is needed

D. Only applicable to game apps

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

Ngoại tuyến-Đầu tiên ưu tiên tải dữ liệu cục bộ trước, đồng bộ hóa với máy chủ khi trực tuyến, giúp ứng dụng có thể sử dụng ngoại tuyến. A, C, D mô tả sai nguyên tắc thiết kế này.

**Link tham khảo:**

https://docs.flutter.dev/platform-integration

### Câu 337: Dữ liệu, Kiến trúc, Plugin & Nền tảng

**Question:** Why is SharedPreferences described as "NOT for complex objects or large data"?

A. Because SharedPreferences only supports storing integers

B. Because SharedPreferences is designed for storing simple key-value values (String, bool, int, double, List`<String>`), which is unsuitable and inefficient for complex-structured or large-volume data

C. Because SharedPreferences only works with a network connection

D. Because SharedPreferences automatically deletes data after 24 hours

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

SharedPreferences được thiết kế cho dữ liệu khóa-giá trị đơn giản, không phù hợp/không hiệu quả cho dữ liệu phức tạp hoặc lớn. A, C, D không khớp với lý do thực sự.

**Link tham khảo:**

https://docs.flutter.dev/platform-integration

### Câu 338: Dữ liệu, Kiến trúc, Plugin & Nền tảng

**Question:** What is the difference between Authentication and Authorization?

A. The two concepts are entirely identical

B. Authentication answers "Who are you?" (identity verification), Authorization answers "What are you allowed to do?" (access control)

C. Authorization always happens before Authentication

D. Authentication only applies to web, not mobile

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

Xác thực xác minh identity ("Bạn là ai?"); Việc ủy ​​quyền xác định permissions ("Bạn có thể làm gì?"). A, C, D mô tả sai/đảo ngược hai khái niệm.

**Link tham khảo:**

https://docs.flutter.dev/platform-integration

### Câu 339: Dữ liệu, Kiến trúc, Plugin & Nền tảng

**Question:** Per the instructor's note "JWTs must not store passwords. Only identity claims," what is WRONG if a system stores a user's password directly in the JWT payload?

A. No problem at all since JWT is signed, making it always absolutely secure

B. A JWT is only signed, not encrypted by default --- meaning the payload can be decoded and read by anyone holding the token (e.g. via base64 decode), so storing sensitive info like a password is a serious security vulnerability

C. A JWT cannot contain an object-type payload, only plain strings

D. This is a standard, industry-recommended practice

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

JWT chỉ có signed (không được mã hóa), vì vậy bất kỳ ai có mã thông báo đều có thể đọc được tải trọng của nó --- việc lưu trữ mật khẩu trong đó là một lỗ hổng nghiêm trọng. A, C, D không khớp với thuộc tính bảo mật thực tế của JWT.

**Link tham khảo:**

https://docs.flutter.dev/platform-integration

### Câu 340: Dữ liệu, Kiến trúc, Plugin & Nền tảng

**Question:** What is the difference between an Access Token and a Refresh Token, per the lecture?

A. The Access Token has a longer lifetime than the Refresh Token

B. The Access Token is usually short-lived (reducing risk if exposed) and sent with every request; the Refresh Token has stronger privileges, used to get a new Access Token when it expires, so it needs more secure storage (Secure Storage)

C. The two token types have completely identical functions, just different names

D. The Refresh Token is sent with every API request, while the Access Token is only used once

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

Mã thông báo truy cập tồn tại trong thời gian ngắn và được gửi theo yêu cầu; Refresh Token có đặc quyền mạnh hơn, dùng để gia hạn Access Token, cần lưu trữ an toàn hơn. A, C, D mô tả sai đặc điểm của hai token.

**Link tham khảo:**

https://docs.flutter.dev/platform-integration

### Câu 341: Dữ liệu, Kiến trúc, Plugin & Nền tảng

**Question:** In the Signup Flow process, which statement is correct about the relationship between AuthService used for Login (Demo 10.1) and Signup (Demo 10.2)?

A. Signup must create an entirely new service, completely separate from Login's AuthService

B. Signup reuses the same `AuthService` class, only adding a new method (`signup(...)`), keeping the same architecture and error handling already established by Login

C. Signup needs no service at all, handling everything directly in the widget

D. AuthService is only used for logout

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

Đăng ký sử dụng lại cùng một lớp AuthService, thêm phương thức signup() mới trong khi vẫn giữ cấu trúc/xử lý lỗi hiện có. A, C, D không khớp với nội dung "Đăng ký API Integration (Sử dụng lại AuthService)".

**Link tham khảo:**

https://docs.flutter.dev/platform-integration

### Câu 342: Dữ liệu, Kiến trúc, Plugin & Nền tảng

**Question:** What is `SharedPreferences` used for in Demo 10.3, mainly?

A. Storing the user's entire web browsing history

B. Persisting the authentication token to implement auto-login, so the user doesn't need to log in again every time the app opens

C. Storing the user's avatar image as binary data

D. Fully replacing JWT

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

SharedPreferences duy trì mã thông báo xác thực để đăng nhập tự động, tránh đăng nhập nhiều lần. A, C, D không phù hợp với mục đích của nó trong Demo 10.3.

**Link tham khảo:**

https://docs.flutter.dev/platform-integration

### Câu 343: Dữ liệu, Kiến trúc, Plugin & Nền tảng

**Question:** In the Auto Login Flow: "Splash → (has token?) → Home / Login." If the token has expired but still exists in SharedPreferences (the app only checks "does a token exist" WITHOUT checking its expiry), what could happen?

A. The app will always accurately detect an expired token because SharedPreferences auto-validates it

B. The app might mistakenly navigate the user to Home even though the token has expired, causing subsequent API requests to be rejected (401 Unauthorized) --- showing the need to also check token expiry or handle 401 errors to force logout when needed

C. The token will automatically refresh with no additional logic needed

D. The app will always stay on the Splash screen forever

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

Nếu không kiểm tra thời hạn sử dụng, ứng dụng có thể điều hướng sai đến Trang chủ, dẫn đến lỗi 401 trong các yêu cầu tiếp theo, cho thấy cần phải kiểm tra thời hạn sử dụng hoặc xử lý 401. A, C, D không phù hợp với hệ quả thực tế.

**Link tham khảo:**

https://docs.flutter.dev/platform-integration

### Câu 344: Dữ liệu, Kiến trúc, Plugin & Nền tảng

**Question:** An app does the following: (1) The user logs in and receives an Access Token that expires in 15 minutes; (2) The Access Token is stored in SharedPreferences; (3) No Refresh Token mechanism is implemented. What is the most likely real-world consequence after 15 minutes of continuous app use?

A. The app will automatically extend the token forever with no action needed

B. API requests after the expiry point will start being rejected (401 Unauthorized), and since there's no Refresh Token, the user is forced to manually log in again to get a new Access Token --- this is a limitation that should be fixed with a refresh token mechanism

C. The Access Token will automatically become a Refresh Token

D. The app will crash immediately when the Access Token expires

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

Nếu không có cơ chế làm mới, các yêu cầu sau khi hết hạn sẽ gặp lỗi 401, buộc phải đăng nhập lại thủ công --- một hạn chế cần sửa mã thông báo làm mới. A, C, D không phù hợp với hệ quả thực tế.

**Link tham khảo:**

https://docs.flutter.dev/platform-integration

### Câu 345: Dữ liệu, Kiến trúc, Plugin & Nền tảng

**Question:** Compare the AuthService (Singleton pattern) mentioned in "Architecture Patterns" with scattering authentication logic directly across individual screen widgets (LoginScreen, SignupScreen, HomeScreen each writing their own API-calling logic). In the spirit of the lecture, what is the main drawback of the scattered approach?

A. No drawback at all, both approaches are equivalent in quality

B. The scattered approach leads to duplicated logic across screens, is hard to maintain consistently when the auth flow changes, and reduces reusability --- while a centralized AuthService separates UI from business logic, making it easier to test and extend

C. The scattered approach is always faster at runtime

D. The Singleton AuthService is only suitable for apps that don't need login

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

Logic xác thực phân tán gây ra sự trùng lặp, khó bảo trì và khả năng sử dụng lại thấp; AuthService tập trung tách biệt UI khỏi logic, hỗ trợ khả năng kiểm tra/mở rộng. A, C, D không khớp với phân tích kiến ​​trúc phần mềm.

**Link tham khảo:**

https://docs.flutter.dev/platform-integration

### Câu 346: Dữ liệu, Kiến trúc, Plugin & Nền tảng

**Question:** Which rendering engine is mentioned in Flutter's architecture?

A. Gecko

B. Blink

C. Skia

D. WebKit

**Correct Answer:** C

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **C**.

Tùy chọn C đúng: Skia. Câu trả lời phù hợp với hành vi loại hệ thống hoặc an toàn vô giá trị của Dart; sử dụng các loại nullable và toán tử nhận biết null một cách có chủ ý để tránh lỗi null.

**Link tham khảo:**

https://docs.flutter.dev/platform-integration

### Câu 347: Dữ liệu, Kiến trúc, Plugin & Nền tảng

**Question:** What are the three main layers of Flutter architecture?

A. HTML, CSS, and JavaScript

B. Model, View, and Controller

C. Client, Server, and Database

D. Framework, Engine, and Embedder

**Correct Answer:** D

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **D**.

Tùy chọn D đúng: Framework, Engine và Embedder. Câu trả lời phù hợp với hành vi loại hệ thống hoặc an toàn vô giá trị của Dart; sử dụng các loại nullable và toán tử nhận biết null một cách có chủ ý để tránh lỗi null.

**Link tham khảo:**

https://docs.flutter.dev/platform-integration

### Câu 348: Dữ liệu, Kiến trúc, Plugin & Nền tảng

**Question:** When is const appropriate?

A. When a constant value is known at compile time

B. When a value is known only after an API call

C. When a value must be nullable

D. When a variable must change continuously

**Correct Answer:** A

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **A**.

Tùy chọn A đúng: Khi biết giá trị không đổi tại thời điểm biên dịch. Câu trả lời phù hợp với hành vi loại hệ thống hoặc an toàn vô giá trị của Dart; sử dụng các loại nullable và toán tử nhận biết null một cách có chủ ý để tránh lỗi null.

**Link tham khảo:**

https://docs.flutter.dev/platform-integration

### Câu 349: Dữ liệu, Kiến trúc, Plugin & Nền tảng

**Question:** What do Padding and SizedBox mainly improve?

A. Database table creation

B. JWT encryption

C. Spacing, readability, and visual consistency

D. API request speed

**Correct Answer:** C

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **C**.

Tùy chọn C đúng: Khoảng cách, khả năng đọc và tính nhất quán về hình ảnh. Bố cục Flutter được tạo từ widgets; widget đã chọn cung cấp hành vi sắp xếp, định cỡ, giãn cách hoặc ràng buộc được mô tả.

**Link tham khảo:**

https://docs.flutter.dev/platform-integration

### Câu 350: Dữ liệu, Kiến trúc, Plugin & Nền tảng

**Question:** What does AspectRatio help achieve?

A. Preserving the aspect ratio and preventing image distortion

B. Calling an API

C. Encrypting an image

D. Creating multiple grid columns

**Correct Answer:** A

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **A**.

Tùy chọn A đúng: Giữ nguyên tỷ lệ khung hình và ngăn ngừa biến dạng hình ảnh. Câu trả lời phù hợp với hành vi loại hệ thống hoặc an toàn vô giá trị của Dart; sử dụng các loại nullable và toán tử nhận biết null một cách có chủ ý để tránh lỗi null.

**Link tham khảo:**

https://docs.flutter.dev/platform-integration

### Câu 351: Dữ liệu, Kiến trúc, Plugin & Nền tảng

**Question:** What does SafeArea prevent?

A. SQL injection

B. Null exceptions

C. Content being covered by a notch, Dynamic Island, or system UI area

D. API timeout

**Correct Answer:** C

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **C**.

Tùy chọn C đúng: Nội dung được bao phủ bởi khu vực notch, Dynamic Island hoặc hệ thống UI. Câu trả lời phù hợp với hành vi loại hệ thống hoặc an toàn vô giá trị của Dart; sử dụng các loại nullable và toán tử nhận biết null một cách có chủ ý để tránh lỗi null.

**Link tham khảo:**

https://docs.flutter.dev/platform-integration

### Câu 352: Dữ liệu, Kiến trúc, Plugin & Nền tảng

**Question:** What do spacing and runSpacing control in Wrap?

A. Horizontal spacing and spacing between lines

B. API timeout and retry

C. Image width and height

D. Token expiration and refresh

**Correct Answer:** A

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **A**.

Phương án A đúng: Khoảng cách ngang và khoảng cách giữa các dòng. Bố cục Flutter được tạo từ widgets; widget đã chọn cung cấp hành vi sắp xếp, định cỡ, giãn cách hoặc ràng buộc được mô tả.

**Link tham khảo:**

https://docs.flutter.dev/platform-integration

### Câu 353: Dữ liệu, Kiến trúc, Plugin & Nền tảng

**Question:** How is an API described?

A. A required local database

B. A layout widget

C. A contract that lets a client communicate with a server through endpoints

D. An image file

**Correct Answer:** C

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **C**.

Tùy chọn C đúng: Hợp đồng cho phép khách hàng giao tiếp với máy chủ thông qua các điểm cuối. Câu trả lời phù hợp với hành vi loại hệ thống hoặc an toàn vô giá trị của Dart; sử dụng các loại nullable và toán tử nhận biết null một cách có chủ ý để tránh lỗi null.

**Link tham khảo:**

https://docs.flutter.dev/platform-integration

### Câu 354: Dữ liệu, Kiến trúc, Plugin & Nền tảng

**Question:** Where is local-storage data saved?

A. Directly on the user's device

B. Only in the GPU

C. Only on a cloud server

D. Only in the source code

**Correct Answer:** A

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **A**.

Tùy chọn A đúng: Trực tiếp trên thiết bị của người dùng. Câu trả lời phù hợp với hành vi loại hệ thống hoặc an toàn vô giá trị của Dart; sử dụng các loại nullable và toán tử nhận biết null một cách có chủ ý để tránh lỗi null.

**Link tham khảo:**

https://docs.flutter.dev/platform-integration

### Câu 355: Dữ liệu, Kiến trúc, Plugin & Nền tảng

**Question:** Which local-storage benefits are mentioned?

A. It always requires an internet connection

B. It cannot store preferences

C. It is used only for images

D. It works offline, persists across restarts, and provides fast access

**Correct Answer:** D

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **D**.

Tùy chọn D đúng: Nó hoạt động ngoại tuyến, tiếp tục khởi động lại và cung cấp khả năng truy cập nhanh. Câu trả lời phù hợp với hành vi loại hệ thống hoặc an toàn vô giá trị của Dart; sử dụng các loại nullable và toán tử nhận biết null một cách có chủ ý để tránh lỗi null.

**Link tham khảo:**

https://docs.flutter.dev/platform-integration

### Câu 356: Dữ liệu, Kiến trúc, Plugin & Nền tảng

**Question:** What is SharedPreferences best suited for?

A. Large video files

B. Simple key-value data such as settings and flags

C. 3D game assets

D. Large relational datasets

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

Tùy chọn B đúng: Dữ liệu khóa-giá trị đơn giản như cài đặt và cờ. Câu trả lời phù hợp với hành vi loại hệ thống hoặc an toàn vô giá trị của Dart; sử dụng các loại nullable và toán tử nhận biết null một cách có chủ ý để tránh lỗi null.

**Link tham khảo:**

https://docs.flutter.dev/platform-integration

### Câu 357: Dữ liệu, Kiến trúc, Plugin & Nền tảng

**Question:** Which case should not use SharedPreferences?

A. Default sort mode

B. A dark-mode flag

C. Complex objects or large data

D. An onboarding-completed flag

**Correct Answer:** C

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **C**.

Tùy chọn C đúng: Đối tượng phức tạp hoặc dữ liệu lớn. Câu trả lời phù hợp với hành vi loại hệ thống hoặc an toàn vô giá trị của Dart; sử dụng các loại nullable và toán tử nhận biết null một cách có chủ ý để tránh lỗi null.

**Link tham khảo:**

https://docs.flutter.dev/platform-integration

### Câu 358: Dữ liệu, Kiến trúc, Plugin & Nền tảng

**Question:** On Flutter Web, SharedPreferences normally maps to what?

A. Firebase Authentication

B. Browser localStorage

C. Android Manifest

D. An SQLite file

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

Tùy chọn B đúng: Trình duyệt localStorage. Flutter hỗ trợ nhiều mục tiêu triển khai, mặc dù mỗi mục tiêu có thể có SDK, yêu cầu về công cụ và tích hợp nền tảng riêng.

**Link tham khảo:**

https://docs.flutter.dev/platform-integration

### Câu 359: Dữ liệu, Kiến trúc, Plugin & Nền tảng

**Question:** Which method stores a boolean in SharedPreferences?

A. insertRow()

B. setMap()

C. writeJwt()

D. setBool(key, value)

**Correct Answer:** D

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **D**.

Tùy chọn D đúng: setBool(khóa, giá trị). Câu trả lời phù hợp với hành vi loại hệ thống hoặc an toàn vô giá trị của Dart; sử dụng các loại nullable và toán tử nhận biết null một cách có chủ ý để tránh lỗi null.

**Link tham khảo:**

https://docs.flutter.dev/platform-integration

### Câu 360: Dữ liệu, Kiến trúc, Plugin & Nền tảng

**Question:** Which sqflite method adds a row?

A. insert()

B. query()

C. delete()

D. update()

**Correct Answer:** A

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **A**.

Tùy chọn A đúng: insert(). Bố cục Flutter được tạo từ widgets; widget đã chọn cung cấp hành vi sắp xếp, định cỡ, giãn cách hoặc ràng buộc được mô tả.

**Link tham khảo:**

https://docs.flutter.dev/platform-integration

### Câu 361: Unit test & Mock

**Question:** Which folder in the Flutter project structure holds dependency and asset configuration?

A. lib/

B. test/

C. pubspec.yaml

D. android/

**Correct Answer:** C

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **C**.

`pubspec.yaml` chứa cấu hình nội dung và phần phụ thuộc. A giữ mã Dart chính; B tổ chức các bài kiểm tra đơn vị; D chứa mã dành riêng cho Android.

**Link tham khảo:**

https://docs.flutter.dev/testing

### Câu 362: Unit test & Mock

**Question:** What is the `flutter doctor` command used for?

A. Automatically fix errors in Dart source code

B. Check and confirm whether the Flutter SDK installation and related tools are ready

C. Build the app into a release APK file

D. Run unit tests for the whole project

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

`flutter doctor` kiểm tra môi trường cài đặt Flutter SDK và các công cụ liên quan. A, C, D mô tả sai chức năng của lệnh này.

**Link tham khảo:**

https://docs.flutter.dev/testing

### Câu 363: Unit test & Mock

**Question:** In `ApiService`, what technique does the constructor parameter `ApiService({http.Client? client}) : client = client ?? http.Client();` illustrate?

A. Forces always using the same single global HTTP Client instance

B. Allows "injecting" a custom `http.Client` from outside (useful for testing with a mock client); if none is passed, a default client is used

C. This is invalid Dart syntax

D. No clear purpose, just to shorten the code

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

Điều này minh họa việc chèn phần phụ thuộc --- cho phép một http.Client tùy chỉnh là injected (hữu ích cho việc thử nghiệm mô phỏng), nếu không thì hãy đặt mặc định. A, C, D không phù hợp với mục đích thực sự.

**Link tham khảo:**

https://docs.flutter.dev/testing

### Câu 364: Unit test & Mock

**Question:** According to the lecture, what are the three typical API data groups students can choose from for their project?

A. realtime, media, mock APIs

B. authentication, storage, testing APIs

C. Only JSONPlaceholder alone

D. Firebase, SQLite, GraphQL

**Correct Answer:** A

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **A**.

Ba nhóm điển hình: thời gian thực, phương tiện, API mô phỏng --- khớp với câu hỏi "API là gì? HTTP là gì?" cầu trượt. B, C, D không đúng nội dung đã nêu.

**Link tham khảo:**

https://docs.flutter.dev/testing

### Câu 365: Unit test & Mock

**Question:** In the "SharedPreferences Support Across Environments" table, why doesn't DartPad (Flutter Mode) actually support SharedPreferences?

A. Because DartPad only supports the JavaScript language

B. Because DartPad has no access to real device storage (no native storage), so a mock class (like FakePrefs) is needed to simulate storage behavior in memory

C. Because SharedPreferences only works on iOS

D. Because DartPad doesn't support any Flutter widgets at all

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

DartPad không có quyền truy cập vào bộ nhớ thiết bị thực, yêu cầu một lớp mô phỏng để mô phỏng bộ nhớ trong bộ nhớ. A, C, D không phù hợp với lý do kỹ thuật thực tế.

**Link tham khảo:**

https://docs.flutter.dev/testing

### Câu 366: Unit test & Mock

**Question:** In Demo 10.1, why does the lecture choose "Mock Authentication" (simulated auth inside AuthService) instead of calling a real API from the start?

A. Because Mock Authentication is theoretically faster in computation

B. To ensure the demo works reliably in every learning environment (not dependent on network connectivity, since a real server could fail/timeout), suitable for the stage of learning basic concepts before moving to real API integration

C. Because Real APIs always require payment

D. Because Flutter doesn't support making real HTTP requests in mobile apps

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

Xác thực mô phỏng đảm bảo các bản demo đáng tin cậy trên các môi trường bất kể sự cố mạng, phù hợp để dạy các khái niệm cơ bản trước khi tích hợp API thực. A, C, D không khớp với lý do thực tế.

**Link tham khảo:**

https://docs.flutter.dev/testing

### Câu 367: Unit test & Mock

**Question:** Per the Mock API vs Real API comparison table, what is a disadvantage of Real API compared to Mock API in the teaching context?

A. Real API is always faster and more stable than Mock API

B. Real API can encounter errors from network, server, TLS, or CORS --- less stable than Mock API, which always works without needing the Internet

C. Real API cannot be used to teach students about networking

D. Mock API is never used in real-world projects or in teaching at all

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

API thực có thể bị lỗi do sự cố mạng/máy chủ/TLS/CORS, kém ổn định hơn Mock API không cần Internet. A, C, D không khớp với nội dung thực tế của bảng so sánh.

**Link tham khảo:**

https://docs.flutter.dev/testing

### Câu 368: Unit test & Mock

**Question:** What are the three main testing types in Flutter mentioned in the lecture?

A. Unit Test, Widget Test, Integration Test

B. Alpha Test, Beta Test, Release Test

C. Manual Test, Auto Test, Smoke Test

D. Load Test, Stress Test, Security Test

**Correct Answer:** A

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **A**.

Ba loại thử nghiệm chính: Thử nghiệm đơn vị, Thử nghiệm Widget, Thử nghiệm tích hợp. B, C, D không phải là các phân loại bài kiểm tra được dạy ở Học phần 11.

**Link tham khảo:**

https://docs.flutter.dev/testing

### Câu 369: Unit test & Mock

**Question:** Per the "Flutter Testing Pyramid," which test type should have the LARGEST quantity in a project, since it's fast, stable, and low cost?

A. Integration Test

B. Widget Test

C. Unit Test

D. All three types should have equal quantities

**Correct Answer:** C

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **C**.

Các bài kiểm thử đơn vị phải có số lượng nhiều nhất theo Kim tự tháp kiểm thử --- nhanh, ổn định, chi phí thấp. A, B không đúng vị trí trong kim tự tháp; D sai vì phân phối không bằng nhau.

**Link tham khảo:**

https://docs.flutter.dev/testing

### Câu 370: Unit test & Mock

**Question:** Given this Unit Test: test('toggle() should switch completed state', () { final task = Task(id: '1', title: 'Demo task'); expect(task.completed, false); task.toggle(); expect(task.completed, true); task.toggle(); expect(task.completed, false); }); What common test structuring pattern does this test apply (even though not explicitly labeled with comments)?

A. Model-View-Controller (MVC)

B. Arrange - Act - Assert (prepare data, perform an action, verify the result)

C. Singleton Pattern

D. Observer Pattern

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

test này tuân theo mẫu Sắp xếp - Hành động - Khẳng định. A, C, D là các mẫu thiết kế/kiến trúc không liên quan, không phải cấu trúc test.

**Link tham khảo:**

https://docs.flutter.dev/testing

### Câu 371: Unit test & Mock

**Question:** How does a Widget Test in Flutter differ from a Unit Test?

A. Widget Test only checks pure logic unrelated to UI, exactly like a Unit Test

B. Widget Test checks UI rendering and interaction (e.g. entering text, tapping buttons) on a widget or small widget tree, while Unit Test only checks logic/functions unrelated to UI

C. Widget Test always runs slower than Integration Test

D. Widget Test cannot simulate typing text or tapping

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

Kiểm tra Widget kiểm tra việc hiển thị/tương tác UI trên cây widget; Kiểm tra đơn vị kiểm tra logic thuần túy không liên quan đến UI. A, C, D mô tả sai đặc điểm của hai loại bài kiểm tra.

**Link tham khảo:**

https://docs.flutter.dev/testing

### Câu 372: Unit test & Mock

**Question:** In a Navigation Test, how does `pumpAndSettle()` differ from a plain `pump()`?

A. No difference at all, the two functions are entirely equivalent

B. `pumpAndSettle()` continuously "pumps" frames until no animation/transition is still running (fully settled), very useful for waiting for a screen-transition effect to finish before asserting

C. `pumpAndSettle()` can only be used for Unit Test

D. `pump()` always waits longer than `pumpAndSettle()`

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

pumpAndSettle() liên tục bơm khung hình cho đến khi tất cả hoạt ảnh ổn định, hữu ích cho việc chờ chuyển đổi điều hướng. A, C, D mô tả sai chức năng này.

**Link tham khảo:**

https://docs.flutter.dev/testing

### Câu 373: Unit test & Mock

**Question:** Per the "How Tests Map to Real Flutter Problems" table, the "Wrong navigation" issue should mainly be detected by which test type?

A. Unit Test

B. Navigation Test (part of the extended Widget Test group)

C. Navigation issues cannot be tested at all

D. Can only be detected via manual testing

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

Điều hướng sai" chủ yếu phải được phát hiện bởi Điều hướng Test (Kiểm tra Widget mở rộng), trên mỗi bảng. A, C, D không khớp với nội dung của bảng.

**Link tham khảo:**

https://docs.flutter.dev/testing

### Câu 374: Unit test & Mock

**Question:** In Taskly App, `TaskRepository` handles CRUD logic for tasks, while `TaskProvider` manages state. If a Widget Test wants to check UI behavior WITHOUT depending on the Repository's real database/API connection, what reasonable approach is recommended in Module 11's "Best Practices"?

A. Always connect directly to real data to ensure absolute test accuracy

B. Mock the Repository when possible, letting Widget Tests run fast, reliably, and independently of real external data state

C. Completely skip testing any widget related to the Repository

D. Move all Repository logic inside the Widget to make testing easier

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

Việc mô phỏng Repository khi có thể giúp Widget Kiểm tra nhanh, ổn định và độc lập với dữ liệu bên ngoài state. A, C, D không phù hợp với phương pháp hay nhất được đề xuất.

**Link tham khảo:**

https://docs.flutter.dev/testing

### Câu 375: Unit test & Mock

**Question:** In the issue-to-test-type mapping table: \| Flutter Issue \| Recommended Test \| \|---\|---\| \| Logic failure \| Unit test \| \| UI not updating \| Widget test \| \| Wrong navigation \| Navigation test \| \| Entire feature broken \| Integration test \| If a bug occurs because a Provider doesn't call `notifyListeners()` after updating data (causing the UI to not update even though the data changed in memory), which test type can most directly detect this issue?

A. A Unit Test checking just the data-update function alone, since it's unrelated to UI

B. Widget Test --- because it needs to verify that after the action occurs, the UI actually re-renders with the new data (something a pure-logic Unit Test cannot check)

C. No test type can detect this bug

D. Only Integration Test can detect it, Widget Test is entirely unsuitable

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

Thử nghiệm Widget là trực tiếp nhất vì nó xác minh UI thực sự hiển thị lại với dữ liệu mới, không giống như Thử nghiệm đơn vị logic thuần túy. A, C, D không phù hợp với phương pháp phát hiện thích hợp.

**Link tham khảo:**

https://docs.flutter.dev/testing

### Câu 376: Unit test & Mock

**Question:** What is `expect()` in flutter_test used for?

A. Initializing the widget tree for the test

B. Comparing the actual value with the expected value, and failing if they don't match --- this is the "Assert" step in the testing process

C. Waiting for an animation to finish

D. Generating random mock data

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

expect() so sánh giá trị thực tế và giá trị mong đợi, không khớp --- bước Khẳng định. A, C, D mô tả sai chức năng của expect().

**Link tham khảo:**

https://docs.flutter.dev/testing

### Câu 377: Unit test & Mock

**Question:** Consider the lecture's explanation: "Most UI issues start from logic → unit tests catch problems early." Applying this practically: if the function counting incomplete tasks (`getIncompleteCount()`) in TaskProvider has a logic bug (calculates wrong), but the UI still shows the correct number by coincidence with small test data, which testing approach best and most reliably catches this bug early, regardless of data size?

A. Relying solely on manual UI observation with random datasets

B. Write a dedicated Unit Test for `getIncompleteCount()` with multiple different datasets (edge cases: empty, all completed, mixed), isolating and verifying the calculation logic correctly without depending on whether the UI "happens" to display correctly

C. Integration Test is the only way to catch this logic bug

D. No automated testing form can detect a logic bug

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

Bài kiểm tra đơn vị chuyên dụng với các bộ dữ liệu trường hợp biên khác nhau sẽ tách biệt và xác minh logic tính toán một cách đáng tin cậy bất kể hiển thị chính xác ngẫu nhiên. A, C, D không phù hợp với phương pháp phát hiện sớm đáng tin cậy nhất.

**Link tham khảo:**

https://docs.flutter.dev/testing

### Câu 378: Unit test & Mock

**Question:** Per Module 11's Summary, which skill is NOT listed as a learning objective of this module?

A. Writing Unit Tests to check model logic and behavior

B. Writing Widget Tests to check UI rendering and interaction

C. Building and signing a release APK file for publishing to Google Play

D. Using DevTools to diagnose layout, rebuild, and navigation issues

**Correct Answer:** C

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **C**.

Xây dựng và ký release APK để xuất bản trên Google Play là chủ đề của Mô-đun 12, KHÔNG phải là mục tiêu học tập của Mô-đun 11. A, B, D đều là mục tiêu học tập chính xác của Mô-đun 11.

**Link tham khảo:**

https://docs.flutter.dev/testing

### Câu 379: Unit test & Mock

**Question:** Consider: a student group writes VERY MANY Integration Tests (the vast majority of all tests) but almost no Unit Tests. Per the "Testing Pyramid" principle learned, what realistic consequence is likely?

A. No negative consequence at all, more Integration Tests is always better in every case

B. The test suite will run significantly slower, cost more time/resources to maintain, and pinpointing the root cause when a bug occurs will be harder than having a solid Unit Test foundation to isolate logic bugs early

C. Integration Tests are always faster than Unit Tests, so this is the optimal strategy

D. The distribution of test types has no effect on speed or maintenance cost at all

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

Quá nhiều Kiểm thử tích hợp và quá ít Kiểm thử đơn vị sẽ dẫn đến bộ công cụ chậm hơn, tốn kém hơn để bảo trì và khó tách biệt nguyên nhân gốc rễ hơn. A, C, D mâu thuẫn với nguyên tắc Kim tự tháp Kiểm tra.

**Link tham khảo:**

https://docs.flutter.dev/testing

### Câu 380: Unit test & Mock

**Question:** In the "Deployment Checklist" after completing Demo 12.4, which of the following items is mentioned?

A. Remove debug statements, clean up unused assets, ensure versionCode has been updated

B. Double the number of animations in the app

C. Delete the entire pubspec.yaml configuration file

D. Convert the entire app to use Widget Test instead of Unit Test

**Correct Answer:** A

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **A**.

Danh sách kiểm tra đề cập đến việc xóa câu lệnh debug, xóa nội dung không sử dụng và đảm bảo versionCode được cập nhật. B, C, D không phải là những mục hợp lý/được nêu trong danh sách kiểm tra thực tế.

**Link tham khảo:**

https://docs.flutter.dev/testing

### Câu 381: Unit test & Mock

**Question:** Per Module 12's summary, what is the ultimate goal of the entire process of optimizing and packaging the Taskly app?

A. Simply to reduce the project's number of lines of code

B. To produce a performance-optimized Release build, verify the app's size, and be ready for real-world deployment (production-ready)

C. To completely eliminate the need for writing Unit Tests in future projects

D. To convert the entire app from Flutter to a native platform

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

Mục tiêu cuối cùng là bản dựng Bản phát hành được tối ưu hóa hiệu suất, được xác minh kích thước, sẵn sàng sản xuất, theo Tóm tắt của Mô-đun 12. A, C, D không phù hợp với mục tiêu final đã nêu của mô-đun.

**Link tham khảo:**

https://docs.flutter.dev/testing

### Câu 382: Unit test & Mock

**Question:** A group of students intentionally skips writing Unit Tests and separating clear architecture (State/Repository) to "finish the project quickly," resulting in it later being very hard to fix bugs or add new features without breaking working parts. What concept from the lecture does this illustrate, and how does it relate to the architectural principles (Repository Pattern, Testing Pyramid) taught in Module 3 and Module 11?

A. This is unrelated to any concept taught in previous modules

B. This is an example of "Technical Debt" --- skipping clean architecture (Repository Pattern from Module 3) and testing (Testing Pyramid from Module 11) saves short-term time but increases long-term maintenance/bug-fixing costs, matching the "borrow now, pay interest later" nature of technical debt

C. This is an example of Golden Testing

D. This is the recommended approach for performance optimization per Module 12

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

Đây là ví dụ về Nợ kỹ thuật: bỏ qua thử nghiệm và kiến trúc sạch giúp tiết kiệm thời gian ngắn hạn nhưng làm tăng chi phí bảo trì dài hạn, phù hợp với bản chất "mượn trước, trả sau" của nợ. A, C, D không khớp với khái niệm/mối quan hệ đúng.

**Link tham khảo:**

https://docs.flutter.dev/testing

### Câu 383: Unit test & Mock

**Question:** If a Golden Test is set up to run automatically in a CI/CD pipeline before merging code, what is the main purpose of doing this?

A. Increases the speed of building the release app

B. Automatically catches unintended visual regressions caused by code changes early, before those changes get merged into the main branch, helping ensure UI consistency over time

C. Fully replaces Unit Test and Widget Test

D. Only has the effect of checking the app's network speed

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

Chạy thử nghiệm vàng trong CI/CD sẽ phát hiện sớm các hồi quy trực quan trước khi hợp nhất, đảm bảo tính nhất quán của UI theo thời gian. A, C, D không phù hợp với mục đích thực tế của việc tích hợp CI/CD này.

**Link tham khảo:**

https://docs.flutter.dev/testing

### Câu 384: Unit test & Mock

**Question:** What does the Embedder layer mainly handle?

A. Storing data with SQLite

B. Platform integration, input, lifecycle, and window management

C. Defining Dart data types

D. Writing unit tests

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

Tùy chọn B đúng: Tích hợp nền tảng, đầu vào, lifecycle và quản lý cửa sổ. Câu trả lời phù hợp với hành vi loại hệ thống hoặc an toàn vô giá trị của Dart; sử dụng các loại nullable và toán tử nhận biết null một cách có chủ ý để tránh lỗi null.

**Link tham khảo:**

https://docs.flutter.dev/testing

### Câu 385: Unit test & Mock

**Question:** Which standard screen elements can Scaffold provide?

A. AppBar, body, drawer, bottomNavigationBar, and floatingActionButton

B. TextField only

C. Unit tests only

D. A database connection only

**Correct Answer:** A

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **A**.

Tùy chọn A đúng: AppBar, nội dung, ngăn kéo, bottomNavigationBar và floatingActionButton. Câu trả lời phù hợp với hành vi loại hệ thống hoặc an toàn vô giá trị của Dart; sử dụng các loại nullable và toán tử nhận biết null một cách có chủ ý để tránh lỗi null.

**Link tham khảo:**

https://docs.flutter.dev/testing

### Câu 386: Unit test & Mock

**Question:** What is Info.plist URL Types used for?

A. Storing an access token

B. Defining a Provider

C. Running unit tests

D. Declaring a custom URL scheme for an iOS application

**Correct Answer:** D

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **D**.

Tùy chọn D đúng: Khai báo lược đồ URL tùy chỉnh cho ứng dụng iOS. Câu trả lời phù hợp với hành vi loại hệ thống hoặc an toàn vô giá trị của Dart; sử dụng các loại nullable và toán tử nhận biết null một cách có chủ ý để tránh lỗi null.

**Link tham khảo:**

https://docs.flutter.dev/testing

### Câu 387: Unit test & Mock

**Question:** What is mock authentication best suited for?

A. Google Play signing

B. Database migration

C. Classroom demonstrations and learning a stable flow without network dependency

D. The final production implementation

**Correct Answer:** C

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **C**.

Phương án C đúng: Minh họa trên lớp và học tập theo một quy trình ổn định mà không phụ thuộc vào mạng. Kiểm tra đơn vị isolate một hàm, phương thức hoặc lớp; mô phỏng giúp kiểm soát và lặp lại các phần phụ thuộc bên ngoài.

**Link tham khảo:**

https://docs.flutter.dev/testing

### Câu 388: Unit test & Mock

**Question:** What risks does real-API authentication have compared with mock authentication?

A. It does not need async code

B. It may fail because of the network, server, TLS, or CORS

C. It does not need error handling

D. It never fails

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

Tùy chọn B đúng: Tùy chọn này có thể không thành công do mạng, máy chủ, TLS hoặc CORS. Kiểm tra đơn vị isolate một hàm, phương thức hoặc lớp; mô phỏng giúp kiểm soát và lặp lại các phần phụ thuộc bên ngoài.

**Link tham khảo:**

https://docs.flutter.dev/testing

### Câu 389: Unit test & Mock

**Question:** What does a unit test validate?

A. APK size

B. Logic without requiring UI

C. Animations only

D. A complete user flow on a device

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

Tùy chọn B đúng: Logic không yêu cầu UI. Kiểm tra đơn vị isolate một hàm, phương thức hoặc lớp; mô phỏng giúp kiểm soát và lặp lại các phần phụ thuộc bên ngoài.

**Link tham khảo:**

https://docs.flutter.dev/testing

### Câu 390: Unit test & Mock

**Question:** According to the testing pyramid, which type of test should be most numerous?

A. Unit tests

B. Manual tests only

C. Release tests

D. Integration tests

**Correct Answer:** A

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **A**.

Tùy chọn A đúng: Kiểm tra đơn vị. Câu trả lời phù hợp với hành vi loại hệ thống hoặc an toàn vô giá trị của Dart; sử dụng các loại nullable và toán tử nhận biết null một cách có chủ ý để tránh lỗi null.

**Link tham khảo:**

https://docs.flutter.dev/testing

### Câu 391: Unit test & Mock

**Question:** Which test type should be prioritized for a logic failure?

A. Integration test only

B. Manual screenshot only

C. Unit test

D. Application-size test

**Correct Answer:** C

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **C**.

Lựa chọn C đúng: Kiểm tra đơn vị. Câu trả lời phù hợp với hành vi loại hệ thống hoặc an toàn vô giá trị của Dart; sử dụng các loại nullable và toán tử nhận biết null một cách có chủ ý để tránh lỗi null.

**Link tham khảo:**

https://docs.flutter.dev/testing

### Câu 392: Unit test & Mock

**Question:** What is the Act step in a unit test of toggle()?

A. Run flutter build

B. Create the task

C. Call expect()

D. Call task.toggle()

**Correct Answer:** D

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **D**.

Tùy chọn D đúng: Gọi task.toggle(). Kiểm tra đơn vị isolate một hàm, phương thức hoặc lớp; mô phỏng giúp kiểm soát và lặp lại các phần phụ thuộc bên ngoài.

**Link tham khảo:**

https://docs.flutter.dev/testing

### Câu 393: Unit test & Mock

**Question:** Which testing best practice is correct?

A. Retest Flutter framework behavior

B. Never use keys

C. Keep tests small and focused, and mock repositories when possible

D. Use integration tests for every method

**Correct Answer:** C

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **C**.

Tùy chọn C đúng: Giữ các bài kiểm tra nhỏ và tập trung, đồng thời mô phỏng các kho lưu trữ khi có thể. Câu trả lời phù hợp với hành vi loại hệ thống hoặc an toàn vô giá trị của Dart; sử dụng các loại nullable và toán tử nhận biết null một cách có chủ ý để tránh lỗi null.

**Link tham khảo:**

https://docs.flutter.dev/testing

### Câu 394: Unit test & Mock

**Question:** Which package is used for mocking in Dart tests often?

A. provider

B. mocktail

C. skia

D. sqflite

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

Tùy chọn B đúng: mocktail. Kiểm tra đơn vị isolate một hàm, phương thức hoặc lớp; mô phỏng giúp kiểm soát và lặp lại các phần phụ thuộc bên ngoài.

**Link tham khảo:**

https://docs.flutter.dev/testing

### Câu 395: Widget test

**Question:** In Demo 11.4 (Integration Test: Full CRUD Flow), the test sequentially: adds a task → opens detail → edits the title → saves → checks the updated list. Why is this test type classified as "Integration Test" rather than a plain "Widget Test"?

A. Because it uses more lines of code than a typical Widget Test

B. Because it validates the entire interaction flow across multiple app layers (UI → Provider → Repository) through consecutive steps, simulating a complete real user journey, rather than checking just a single isolated UI behavior

C. Because it doesn't use any widgets at all

D. Because Integration Test and Widget Test are the same concept, just different names

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

Nó được phân loại là Kiểm tra tích hợp vì nó xác thực toàn bộ luồng trên UI → Provider → Repository, mô phỏng toàn bộ hành trình của người dùng. A, C, D không phù hợp với lý do phân loại.

**Link tham khảo:**

https://docs.flutter.dev/cookbook/testing/widget

### Câu 396: Widget test

**Question:** What is `find.byKey(const Key('taskTextField'))` used for in a test?

A. Searching for displayed text on screen by string content

B. Finding one specific widget exactly via its assigned Key, making widget identification in the test tree more reliable than searching by type or text (which can be duplicated or change)

C. Finding all TextFields on screen regardless of Key

D. Has no effect, purely illustrative

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

find.byKey() định vị một widget cụ thể một cách đáng tin cậy thông qua Key được chỉ định, đáng tin cậy hơn so với tìm kiếm theo loại/văn bản. A, C, D mô tả sai chức năng của nó.

**Link tham khảo:**

https://docs.flutter.dev/cookbook/testing/widget

### Câu 397: Widget test

**Question:** Why does the lecture recommend "Use keys for widget tests"?

A. Because a Key is syntactically mandatory for every Flutter widget

B. Because assigning a Key helps accurately locate a specific widget in the test, avoiding confusion when multiple widgets of the same type or text content exist on screen

C. Because a Key doubles the test's execution speed

D. A Key only works with StatelessWidget, not with StatefulWidget

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

Việc chỉ định Khóa hỗ trợ vị trí widget chính xác trong các thử nghiệm, tránh nhầm lẫn giữa các widgets tương tự. A, C, D không khớp với lý do đằng sau khuyến nghị này.

**Link tham khảo:**

https://docs.flutter.dev/cookbook/testing/widget

### Câu 398: Widget test

**Question:** In the test file `test/widget/demo_11_3_navigation_to_detail_test.dart`, suppose the final assertion is: expect(find.text('Task Detail'), findsOneWidget); but the detail screen actually displays the title as "Task Details" (with an extra "s"). What is the test's result?

A. The test still passes because Flutter automatically does fuzzy text matching

B. The test fails (findsOneWidget errors since no widget with the exact text "Task Detail" is found), because `find.text()` requires an exact string match

C. The test automatically skips this assertion

D. The test passes but prints a warning, not treated as a failure

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

find.text() yêu cầu đối sánh chuỗi chính xác an, do đó, "Task Detail" không khớp với "Task Details" sẽ khiến the test không khớp. A, C, D không khớp với hành vi khớp thực tế của find.text().

**Link tham khảo:**

https://docs.flutter.dev/cookbook/testing/widget

### Câu 399: Widget test

**Question:** What does `tester.pumpWidget(createTaskListTestApp())` do as the first step of a Widget Test?

A. Clears all previous test data

B. Pumps" (renders) the given widget tree into the virtual test environment, equivalent to launching the app for the first time to begin testing

C. Builds the app into an APK file

D. Connects to a real server to fetch data

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

pumpWidget() hiển thị cây widget đã cho vào môi trường thử nghiệm, tương đương với việc khởi chạy ứng dụng để bắt đầu thử nghiệm. A, C, D mô tả sai chức năng này.

**Link tham khảo:**

https://docs.flutter.dev/cookbook/testing/widget

### Câu 400: Widget test

**Question:** Per "How Flutter Builds the UI (Render Pipeline)," what are the respective roles of the three core concepts Widget, Element, RenderObject?

A. Widget is an immutable blueprint describing configuration, Element manages lifecycle & state, RenderObject performs the actual layout/painting/compositing

B. Widget, Element, RenderObject are three different names for the same concept

C. RenderObject is immutable, Widget performs painting directly to the screen

D. Element only exists in Widget Test, not when the app actually runs

**Correct Answer:** A

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **A**.

Widget = bản thiết kế bất biến, trình quản lý Element = lifecycle/state, RenderObject = thực hiện bố cục/vẽ/kết hợp. B, C, D mô tả sai vai trò của ba thành phần này.

**Link tham khảo:**

https://docs.flutter.dev/cookbook/testing/widget

### Câu 401: Widget test

**Question:** What does Golden Testing in Flutter check?

A. Asynchronous data-processing logic (Future/Stream)

B. Comparing a widget's rendered UI against a saved reference ("golden") image, to detect unintended visual regressions

C. Checking API response speed

D. Checking the app's security

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

Thử nghiệm vàng so sánh UI được kết xuất với hình ảnh tham chiếu vàng đã lưu để phát hiện hồi quy trực quan. A, C, D mô tả sai mục đích của loại bài kiểm tra này.

**Link tham khảo:**

https://docs.flutter.dev/cookbook/testing/widget

### Câu 402: Widget test

**Question:** In `flutter_test`, which function is used to compare the current widget against a saved golden image?

A. `expect(find.text(...), findsOneWidget)`

B. `matchesGoldenFile('image_label.png')` combined with `expectLater()`

C. `tester.pumpAndSettle()`

D. `verify()`

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

`matchesGoldenFile()` kết hợp với `expectLater()` là flutter_test API tiêu chuẩn để so sánh với hình ảnh vàng. A, C, D không phải là chức năng chính xác cho mục đích này.

**Link tham khảo:**

https://docs.flutter.dev/cookbook/testing/widget

### Câu 403: Widget test

**Question:** A student group runs a Golden Test on Windows, but the original golden image was created on macOS, causing the test to fail repeatedly even though the UI looks "identical" to the naked eye. What is the most common cause of this issue?

A. Golden Tests never work reliably on any operating system

B. Font rendering and anti-aliasing can differ slightly between operating systems/Flutter versions, causing pixel-by-pixel images to not match exactly even if hard to notice by eye --- so Golden Tests are usually recommended to run consistently on the same environment (e.g. a fixed CI) to avoid false failures

C. Because SliverAppBar is incompatible with Golden Test

D. Because Windows doesn't support running `flutter test`

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

Sự khác biệt nhỏ về kết xuất phông chữ/khử răng cưa giữa các nền tảng gây ra pixel không khớp, do đó nên chạy Thử nghiệm vàng trên một environment nhất quán ({1}} cố định). A, C, D không khớp với nguyên nhân kỹ thuật thực tế.

**Link tham khảo:**

https://docs.flutter.dev/cookbook/testing/widget

### Câu 404: Widget test

**Question:** In `flutter_bloc`, how does the `BlocListener` widget differ from `BlocBuilder`?

A. The two widgets are entirely identical, interchangeable in every case

B. `BlocBuilder` is used to rebuild the UI based on the new state (returns a widget); `BlocListener` is used to perform one-time side-effects (e.g. navigation, showing a SnackBar/Dialog) when the state changes, WITHOUT rebuilding the UI

C. `BlocListener` can only be used with Cubit, not with Bloc

D. `BlocBuilder` is only used for Golden Testing

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

BlocBuilder xây dựng lại UI dựa trên state mới; BlocListener thực hiện tác dụng phụ một lần đối với thay đổi state mà không cần xây dựng lại. A, C, D mô tả sai sự khác biệt giữa hai widgets này.

**Link tham khảo:**

https://docs.flutter.dev/cookbook/testing/widget

### Câu 405: Widget test

**Question:** Which method does ChangeNotifier use to inform its listeners?

A. json.decode()

B. setString()

C. notifyListeners()

D. pumpAndSettle()

**Correct Answer:** C

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **C**.

Tùy chọn C đúng: notifyListeners(). Câu trả lời phù hợp với hành vi loại hệ thống hoặc an toàn vô giá trị của Dart; sử dụng các loại nullable và toán tử nhận biết null một cách có chủ ý để tránh lỗi null.

**Link tham khảo:**

https://docs.flutter.dev/cookbook/testing/widget

### Câu 406: Widget test

**Question:** What is JSON?

A. A rendering engine

B. A Flutter UI language

C. A lightweight text format for exchanging key-value and array data

D. A type of widget test

**Correct Answer:** C

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **C**.

Tùy chọn C đúng: Định dạng văn bản nhẹ để trao đổi dữ liệu mảng và khóa-giá trị. Câu trả lời phù hợp với hành vi loại hệ thống hoặc an toàn vô giá trị của Dart; sử dụng các loại nullable và toán tử nhận biết null một cách có chủ ý để tránh lỗi null.

**Link tham khảo:**

https://docs.flutter.dev/cookbook/testing/widget

### Câu 407: Widget test

**Question:** Which package is used in the slides for HTTP requests?

A. http

B. sqflite

C. provider only

D. flutter_test

**Correct Answer:** A

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **A**.

Tùy chọn A đúng: http. Câu trả lời phù hợp với hành vi loại hệ thống hoặc an toàn vô giá trị của Dart; sử dụng các loại nullable và toán tử nhận biết null một cách có chủ ý để tránh lỗi null.

**Link tham khảo:**

https://docs.flutter.dev/cookbook/testing/widget

### Câu 408: Widget test

**Question:** Which package helps locate the application's documents directory?

A. provider

B. flutter_test

C. path_provider

D. http

**Correct Answer:** C

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **C**.

Tùy chọn C đúng: path_provider. Câu trả lời phù hợp với hành vi loại hệ thống hoặc an toàn vô giá trị của Dart; sử dụng các loại nullable và toán tử nhận biết null một cách có chủ ý để tránh lỗi null.

**Link tham khảo:**

https://docs.flutter.dev/cookbook/testing/widget

### Câu 409: Widget test

**Question:** What does a widget test validate?

A. Google Play upload

B. Token signing

C. UI rendering and widget interaction

D. Only the native database engine

**Correct Answer:** C

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **C**.

Tùy chọn C đúng: hiển thị UI và tương tác widget. Các thử nghiệm Widget xác minh khả năng hiển thị và tương tác của UI trong môi trường thử nghiệm của Flutter; người tìm kiếm và người so khớp xác nhận những gì hiện có và cách nó hoạt động.

**Link tham khảo:**

https://docs.flutter.dev/cookbook/testing/widget

### Câu 410: Widget test

**Question:** Why should there be fewer integration tests?

A. Flutter cannot run them

B. They cannot use expect()

C. They are slower and more expensive, so they should focus on critical flows

D. They cannot test UI

**Correct Answer:** C

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **C**.

Phương án C đúng: Chúng chậm hơn và đắt hơn, vì vậy chúng nên tập trung vào các luồng quan trọng. Kiểm thử tích hợp thực hiện toàn diện một ứng dụng hoàn chỉnh hoặc một tính năng quan trọng; Patrol thêm hỗ trợ cho các tương tác trên nền tảng gốc.

**Link tham khảo:**

https://docs.flutter.dev/cookbook/testing/widget

### Câu 411: Widget test

**Question:** What is normally the final step of a testing workflow?

A. Use expect() to verify the result

B. Save SharedPreferences

C. Sign a JWT

D. Create a release APK

**Correct Answer:** A

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **A**.

Tùy chọn A đúng: Sử dụng expect() để xác minh kết quả. Câu trả lời phù hợp với hành vi loại hệ thống hoặc an toàn vô giá trị của Dart; sử dụng các loại nullable và toán tử nhận biết null một cách có chủ ý để tránh lỗi null.

**Link tham khảo:**

https://docs.flutter.dev/cookbook/testing/widget

### Câu 412: Widget test

**Question:** Which test type should be prioritized when the UI does not update?

A. Network ping

B. Widget test

C. SQL test

D. Signing test

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

Tùy chọn B đúng: kiểm tra Widget. Câu trả lời phù hợp với hành vi loại hệ thống hoặc an toàn vô giá trị của Dart; sử dụng các loại nullable và toán tử nhận biết null một cách có chủ ý để tránh lỗi null.

**Link tham khảo:**

https://docs.flutter.dev/cookbook/testing/widget

### Câu 413: Widget test

**Question:** Which test should be used to check incorrect navigation?

A. A navigation or widget test

B. An image-cache test

C. A SharedPreferences-only test

D. APK Analyzer

**Correct Answer:** A

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **A**.

Tùy chọn A đúng: Kiểm tra điều hướng hoặc widget. Câu trả lời phù hợp với hành vi loại hệ thống hoặc an toàn vô giá trị của Dart; sử dụng các loại nullable và toán tử nhận biết null một cách có chủ ý để tránh lỗi null.

**Link tham khảo:**

https://docs.flutter.dev/cookbook/testing/widget

### Câu 414: Widget test

**Question:** Which method is used for the Assert step?

A. expect()

B. print()

C. notifyListeners()

D. setState()

**Correct Answer:** A

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **A**.

Tùy chọn A đúng: expect(). Câu trả lời phù hợp với hành vi loại hệ thống hoặc an toàn vô giá trị của Dart; sử dụng các loại nullable và toán tử nhận biết null một cách có chủ ý để tránh lỗi null.

**Link tham khảo:**

https://docs.flutter.dev/cookbook/testing/widget

### Câu 415: Widget test

**Question:** What does tester.pumpWidget() do?

A. Renders a widget tree in the test environment

B. Signs the application

C. Sends an HTTP request

D. Opens a database

**Correct Answer:** A

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **A**.

Tùy chọn A đúng: Hiển thị cây widget trong môi trường thử nghiệm. Câu trả lời phù hợp với hành vi loại hệ thống hoặc an toàn vô giá trị của Dart; sử dụng các loại nullable và toán tử nhận biết null một cách có chủ ý để tránh lỗi null.

**Link tham khảo:**

https://docs.flutter.dev/cookbook/testing/widget

### Câu 416: Widget test

**Question:** Which user action does tester.tap() simulate?

A. Entering text

B. Resetting a Provider

C. Waiting for an animation

D. Tapping a widget

**Correct Answer:** D

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **D**.

Tùy chọn D đúng: Nhấn vào widget. Câu trả lời phù hợp với hành vi loại hệ thống hoặc an toàn vô giá trị của Dart; sử dụng các loại nullable và toán tử nhận biết null một cách có chủ ý để tránh lỗi null.

**Link tham khảo:**

https://docs.flutter.dev/cookbook/testing/widget

### Câu 417: Widget test

**Question:** When is pumpAndSettle() useful?

A. Waiting for animations and navigation to finish

B. Creating an unfinished Future

C. Preventing the UI from rebuilding

D. Testing only a model unit

**Correct Answer:** A

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **A**.

Tùy chọn A đúng: Đang chờ hoạt ảnh và điều hướng kết thúc. pumpAndSettle nâng cao các khung cho đến khi các khung đã lên lịch ổn định, điều này rất hữu ích cho hoạt ảnh và chuyển tiếp tuyến đường.

**Link tham khảo:**

https://docs.flutter.dev/cookbook/testing/widget

### Câu 418: Widget test

**Question:** What does findsOneWidget verify?

A. At least ten widgets exist

B. No widgets exist

C. Exactly one widget matches the finder

D. A database row exists

**Correct Answer:** C

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **C**.

Tùy chọn C đúng: Chính xác một widget khớp với công cụ tìm. Các thử nghiệm Widget xác minh khả năng hiển thị và tương tác của UI trong môi trường thử nghiệm của Flutter; người tìm kiếm và người so khớp xác nhận những gì hiện có và cách nó hoạt động.

**Link tham khảo:**

https://docs.flutter.dev/cookbook/testing/widget

### Câu 419: Widget test

**Question:** How does a Key help in a widget test?

A. It directly increases FPS

B. It encrypts a token

C. It reduces application size

D. It provides a stable way to find the correct widget for interaction

**Correct Answer:** D

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **D**.

Tùy chọn D đúng: Nó cung cấp một cách ổn định để tìm widget chính xác cho tương tác. Các thử nghiệm Widget xác minh khả năng hiển thị và tương tác của UI trong môi trường thử nghiệm của Flutter; người tìm kiếm và người so khớp xác nhận những gì hiện có và cách nó hoạt động.

**Link tham khảo:**

https://docs.flutter.dev/cookbook/testing/widget

### Câu 420: Widget test

**Question:** Which package helps generate immutable models and JSON code?

A. freezed

B. lint

C. flutter_test

D. path

**Correct Answer:** A

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **A**.

Tùy chọn A đúng: freezed. Câu trả lời phù hợp với hành vi loại hệ thống hoặc an toàn vô giá trị của Dart; sử dụng các loại nullable và toán tử nhận biết null một cách có chủ ý để tránh lỗi null.

**Link tham khảo:**

https://docs.flutter.dev/cookbook/testing/widget

### Câu 421: Widget test

**Question:** Widget tests are used to?

A. Test UI widgets

B. Publish app

C. Configure IDE

D. Create plugins

**Correct Answer:** A

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **A**.

Lựa chọn A đúng: Kiểm tra UI widgets. Các thử nghiệm Widget xác minh khả năng hiển thị và tương tác của UI trong môi trường thử nghiệm của Flutter; người tìm kiếm và người so khớp xác nhận những gì hiện có và cách nó hoạt động.

**Link tham khảo:**

https://docs.flutter.dev/cookbook/testing/widget

### Câu 422: Widget test

**Question:** Which widget test utility pumps frames/widgets?

A. tester.pump

B. tester.run

C. tester.click

D. tester.build

**Correct Answer:** A

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **A**.

Tùy chọn A đúng: tester.pump. Các thử nghiệm Widget xác minh khả năng hiển thị và tương tác của UI trong môi trường thử nghiệm của Flutter; người tìm kiếm và người so khớp xác nhận những gì hiện có và cách nó hoạt động.

**Link tham khảo:**

https://docs.flutter.dev/cookbook/testing/widget

### Câu 423: Widget test

**Question:** Which package provides core Flutter testing APIs?

A. flutter_test

B. flutter_http

C. flutter_state

D. flutter_async

**Correct Answer:** A

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **A**.

Tùy chọn A đúng: flutter_test. Câu trả lời phù hợp với hành vi loại hệ thống hoặc an toàn vô giá trị của Dart; sử dụng các loại nullable và toán tử nhận biết null một cách có chủ ý để tránh lỗi null.

**Link tham khảo:**

https://docs.flutter.dev/cookbook/testing/widget

### Câu 424: Widget test

**Question:** What is the primary purpose of a Widget Test in Flutter?

A. To validate complete user flows from start to finish.

B. To test business logic in total isolation from the UI.

C. To validate UI rendering and individual widget interactions.

D. To check if the app can connect to a remote database.

**Correct Answer:** C

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **C**.

Tùy chọn C đúng: Để xác thực việc hiển thị UI và các tương tác widget riêng lẻ.. Các thử nghiệm Widget xác minh việc hiển thị và tương tác UI trong môi trường thử nghiệm của Flutter; người tìm kiếm và người so khớp xác nhận những gì hiện có và cách nó hoạt động.

**Link tham khảo:**

https://docs.flutter.dev/cookbook/testing/widget

### Câu 425: Widget test

**Question:** In a widget test, which method is specifically used to trigger a UI rebuild after an interaction (like a button tap)?

A. tester.tap()

B. tester.pumpAndSettle()

C. tester.pump()

D. tester.pumpWidget()

**Correct Answer:** C

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **C**.

Tùy chọn C đúng: tester.pump(). Các thử nghiệm Widget xác minh khả năng hiển thị và tương tác của UI trong môi trường thử nghiệm của Flutter; người tìm kiếm và người so khớp xác nhận những gì hiện có và cách nó hoạt động.

**Link tham khảo:**

https://docs.flutter.dev/cookbook/testing/widget

### Câu 426: Widget test

**Question:** When testing navigation between screens, why is tester.pumpAndSettle() used instead of a standard tester.pump()?

A. To clear the local cache before moving to a new screen.

B. To wait for all animations and transitions to fully complete.

C. To simulate a user pressing the physical back button.

D. To refresh the Provider state management.

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

Tùy chọn B đúng: Để đợi tất cả hoạt ảnh và chuyển tiếp hoàn tất.. pumpAndSettle nâng cao khung hình cho đến khi khung được lên lịch ổn định, điều này rất hữu ích cho hoạt ảnh và chuyển tiếp tuyến đường.

**Link tham khảo:**

https://docs.flutter.dev/cookbook/testing/widget

### Câu 427: Widget test

**Question:** What is a recommended best practice for identifying widgets within a widget test to ensure they are easily found?

A. Always search by the widget's color.

B. Search by the line number in the source code.

C. Use unique Keys (e.g., find.byKey).

D. Rely solely on hardcoded text strings

**Correct Answer:** C

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **C**.

Tùy chọn C đúng: Sử dụng các thử nghiệm Keys (e.g., find.byKey) duy nhất.. Widget xác minh việc hiển thị và tương tác UI trong môi trường thử nghiệm của Flutter; người tìm kiếm và người so khớp xác nhận những gì hiện có và cách nó hoạt động.

**Link tham khảo:**

https://docs.flutter.dev/cookbook/testing/widget

### Câu 428: Widget test

**Question:** According to the "Testing Workflow," which function is used to verify that the actual result of a test matches the expected behavior?

A. verify()

B. check()

C. expect()

D. assert()

**Correct Answer:** C

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **C**.

Tùy chọn C đúng: expect(). Câu trả lời phù hợp với hành vi loại hệ thống hoặc an toàn vô giá trị của Dart; sử dụng các loại nullable và toán tử nhận biết null một cách có chủ ý để tránh lỗi null.

**Link tham khảo:**

https://docs.flutter.dev/cookbook/testing/widget

### Câu 429: Integration test & Patrol

**Question:** In the testing pyramid, how many Integration Tests are recommended and for what purpose?

A. Use the most since it's the most comprehensive test type

B. Use few, since they run slowly and cost more --- should only be applied to critical, business-critical user flows

C. Integration Tests should never be used under any circumstance

D. Only used to test CPU performance

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

Kiểm thử tích hợp nên được sử dụng một cách tiết kiệm vì chúng chậm/tốn kém --- dành riêng cho các luồng người dùng quan trọng. A, C, D không phù hợp với nguyên tắc của Kim tự tháp Kiểm tra.

**Link tham khảo:**

https://docs.flutter.dev/testing/integration-tests

### Câu 430: Integration test & Patrol

**Question:** A student writes an Integration Test but insists on also testing whether "the AppBar's background color is exactly Colors.blue per Material Design's default" (a default framework behavior, not custom app logic). Per the "Best Practices" learned, why should this approach be avoided?

A. Because Integration Test is not allowed to check colors in any form

B. Because this tests the Flutter framework's default behavior (not the app's custom business logic), wasting effort writing the test without adding any real value to ensuring app quality

C. Because AppBar cannot be tested by any tool

D. Because colors always change randomly between builds so they can't be tested

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

Việc kiểm tra hành vi của khung mặc định thay vì logic ứng dụng tùy chỉnh sẽ lãng phí công sức mà không thêm giá trị đảm bảo chất lượng thực sự. A, C, D không khớp với lý do tránh điều này.

**Link tham khảo:**

https://docs.flutter.dev/testing/integration-tests

### Câu 431: Integration test & Patrol

**Question:** What is the purpose of ThemeData?

A. Running integration tests

B. Calling a REST API

C. Defining global colors, typography, and shapes

D. Storing a session token

**Correct Answer:** C

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **C**.

Tùy chọn C đúng: Xác định màu sắc, kiểu chữ và hình dạng chung. Câu trả lời phù hợp với hành vi loại hệ thống hoặc an toàn vô giá trị của Dart; sử dụng các loại nullable và toán tử nhận biết null một cách có chủ ý để tránh lỗi null.

**Link tham khảo:**

https://docs.flutter.dev/testing/integration-tests

### Câu 432: Integration test & Patrol

**Question:** What does an integration test validate?

A. One validator only

B. One isolated pure function

C. A static Text widget

D. A complete user flow from beginning to end

**Correct Answer:** D

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **D**.

Tùy chọn D đúng: Luồng người dùng hoàn chỉnh từ đầu đến cuối. Kiểm thử tích hợp thực hiện toàn diện một ứng dụng hoàn chỉnh hoặc một tính năng quan trọng; Patrol thêm hỗ trợ cho các tương tác trên nền tảng gốc.

**Link tham khảo:**

https://docs.flutter.dev/testing/integration-tests

### Câu 433: Integration test & Patrol

**Question:** Integration tests are used to?

A. Test entire app flows

B. Only compile code

C. Draw UI

D. Format code

**Correct Answer:** A

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **A**.

Tùy chọn A đúng: Kiểm tra toàn bộ luồng ứng dụng. Kiểm thử tích hợp thực hiện toàn diện một ứng dụng hoàn chỉnh hoặc một tính năng quan trọng; Patrol thêm hỗ trợ cho các tương tác trên nền tảng gốc.

**Link tham khảo:**

https://docs.flutter.dev/testing/integration-tests

### Câu 434: Integration test & Patrol

**Question:** Why should integration tests be used sparingly (the "few" at the top of the pyramid)?

A. Because they are the least reliable at catching bugs.

B. Because they cannot test navigation.

C. Because they are slow and expensive to run compared to other tests.

D. Because they only work in Debug mode.

**Correct Answer:** C

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **C**.

Tùy chọn C đúng: Bởi vì chúng chạy chậm và tốn kém so với các thử nghiệm khác.. Thử nghiệm tích hợp thực hiện một ứng dụng hoàn chỉnh hoặc một tính năng quan trọng từ đầu đến cuối; Patrol thêm hỗ trợ cho các tương tác trên nền tảng gốc.

**Link tham khảo:**

https://docs.flutter.dev/testing/integration-tests

### Câu 435: Coverage & CI

**Question:** What order does Flutter's rendering workflow follow?

A. GPU Rendering → Widget Tree → Render Tree → Composited Scene

B. Widget Tree → Render Tree → Composited Scene → GPU Rendering

C. Render Tree → Widget Tree → GPU Rendering → Composited Scene

D. Composited Scene → Widget Tree → GPU Rendering → Render Tree

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

Quy trình kết xuất: Widget Cây → Cây kết xuất → Cảnh tổng hợp → Kết xuất GPU, khớp chính xác với thứ tự của trang chiếu. Các tùy chọn khác đảo ngược thứ tự không chính xác.

**Link tham khảo:**

https://docs.flutter.dev/testing

### Câu 436: Coverage & CI

**Question:** Per "Why Notifications After Authentication?", what is the main purpose of sending a notification right after a successful login (e.g. "Login successful. Welcome back!")?

A. Fully replaces showing a SnackBar

B. Connects notifications with the app's real business workflows (like confirming an important action that just occurred), increasing user engagement and awareness of their account status

C. Only meant to check the device's Internet access permission

D. Mandatory for the JWT to become valid

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

Mục đích là kết nối thông báo với quy trình công việc kinh doanh thực tế, tăng cường mức độ tương tác và nhận thức về trạng thái tài khoản. A, C, D không phù hợp với mục đích thực tế đã nêu.

**Link tham khảo:**

https://docs.flutter.dev/testing

### Câu 437: Coverage & CI

**Question:** What is the rendering pipeline sequence presented in the slides?

A. Source Code -> SQL -> Render Tree -> API

B. Widget Tree -> HTTP -> JSON -> GPU

C. Widget Tree -> Render Tree -> Composited Scene -> GPU Rendering

D. GPU -> Widget Tree -> Database -> UI

**Correct Answer:** C

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **C**.

Tùy chọn C đúng: Widget Cây -> Cây kết xuất -> Cảnh tổng hợp -> Kết xuất GPU. Câu trả lời phù hợp với hành vi loại hệ thống hoặc an toàn vô giá trị của Dart; sử dụng các loại nullable và toán tử nhận biết null một cách có chủ ý để tránh lỗi null.

**Link tham khảo:**

https://docs.flutter.dev/testing

### Câu 438: Coverage & CI

**Question:** Which sequence is the correct SharedPreferences workflow?

A. Load instance -> read -> update -> save -> refresh UI

B. Save -> build APK -> delete

C. HTTP -> JSON -> GPU

D. Route -> pop -> push

**Correct Answer:** A

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **A**.

Tùy chọn A đúng: Tải phiên bản -> đọc -> cập nhật -> lưu -> làm mới UI. Câu trả lời phù hợp với hành vi loại hệ thống hoặc an toàn vô giá trị của Dart; sử dụng các loại nullable và toán tử nhận biết null một cách có chủ ý để tránh lỗi null.

**Link tham khảo:**

https://docs.flutter.dev/testing

### Câu 439: Coverage & CI

**Question:** How is a Widget described in Flutter's render pipeline?

A. The only object that paints directly

B. An immutable blueprint

C. An HTTP response

D. A database row

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

Lựa chọn B đúng: Một bản thiết kế không thể thay đổi. Câu trả lời phù hợp với hành vi loại hệ thống hoặc an toàn vô giá trị của Dart; sử dụng các loại nullable và toán tử nhận biết null một cách có chủ ý để tránh lỗi null.

**Link tham khảo:**

https://docs.flutter.dev/testing

### Câu 440: Coverage & CI

**Question:** In the SharedPreferences workflow, what is the final step after a value has been saved to the storage?

A. Load the instance again

B. Read the key

C. Refresh the UI to reflect the updated data

D. Close the database file

**Correct Answer:** C

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **C**.

Tùy chọn C đúng: Làm mới UI để phản ánh dữ liệu đã cập nhật. Câu trả lời phù hợp với hành vi loại hệ thống hoặc an toàn vô giá trị của Dart; sử dụng các loại nullable và toán tử nhận biết null một cách có chủ ý để tránh lỗi null.

**Link tham khảo:**

https://docs.flutter.dev/testing

### Câu 441: Coverage & CI

**Question:** In the standard Flutter testing workflow, what are the three steps (the "3 As") used to structure a test?

A. Apply, Act, Assert

B. Arrange, Act, Assert

C. Arrange, Analyze, Apply

D. Assemble, Act, Assert

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

Phương án B đúng: Sắp xếp, Hành động, Khẳng định. Câu trả lời phù hợp với hành vi loại hệ thống hoặc an toàn vô giá trị của Dart; sử dụng các loại nullable và toán tử nhận biết null một cách có chủ ý để tránh lỗi null.

**Link tham khảo:**

https://docs.flutter.dev/testing

### Câu 442: Coverage & CI

**Question:** In the Flutter render pipeline, which specific component is responsible for handling the lifecycle and state of widgets?

A. Widgets

B. Elements

C. RenderObjects

D. Skia Engine

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

Tùy chọn B đúng: Elements. Đây là khái niệm quản lý state: các thay đổi state phải thông báo hoặc kích hoạt phần có liên quan của UI để xây dựng lại.

**Link tham khảo:**

https://docs.flutter.dev/testing

### Câu 443: Hiệu năng

**Question:** Which programming language and rendering engine does Flutter use?

A. Kotlin and Skia

B. Dart and Skia

C. Dart and V8

D. Swift and Metal

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

Flutter sử dụng Dart với công cụ kết xuất Skia. (A, C, D đều ghép sai ngôn ngữ/động cơ.)

**Link tham khảo:**

https://docs.flutter.dev/perf/ui-performance

### Câu 444: Hiệu năng

**Question:** In the framework comparison table from Module 1, what is the core difference between Flutter and React Native?

A. Flutter uses Dart and compiles to native UI with its own engine, while React Native uses JavaScript and bridges to native components

B. Both compile directly to native machine code without an engine

C. React Native is faster because it needs no bridge

D. Flutter cannot build for iOS, only Android

**Correct Answer:** A

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **A**.

Bảng so sánh: Flutter (Dart, Gốc UI + Engine) so với React Native (JS, Bridge to Native) so với Native (Kotlin/Swift, Pure Native) --- như được hiển thị trong trang trình bày. B sai vì React Bản địa cần một cầu nối; C và D là những yêu cầu không được hỗ trợ.

**Link tham khảo:**

https://docs.flutter.dev/perf/ui-performance

### Câu 445: Hiệu năng

**Question:** What characterizes an abstract class in Dart?

A. It cannot have any methods with a body

B. It defines structure without full behavior, forcing subclasses to implement the bodiless methods

C. Only usable inside the Flutter Framework, not in pure Dart

D. Can be instantiated directly with the `new` keyword

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

Một lớp trừu tượng định nghĩa cấu trúc không có hành vi đầy đủ, buộc các lớp con phải triển khai cấu trúc đó. A sai vì các lớp trừu tượng có thể có các phương thức có nội dung; C sai vì nó cũng hoạt động ở dạng Dart thuần túy; D sai vì các lớp trừu tượng không thể được khởi tạo trực tiếp.

**Link tham khảo:**

https://docs.flutter.dev/perf/ui-performance

### Câu 446: Hiệu năng

**Question:** What problem does `SafeArea` in Flutter solve on modern devices?

A. Increases the app's rendering speed

B. Avoids UI content being obscured by unusable areas like notches, Dynamic Island, or curved screens

C. Encrypts user data

D. Automatically translates the UI language

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

SafeArea tránh nội dung UI bị che khuất bởi rãnh khía/Đảo động/màn hình cong. A, C, D mô tả sai mục đích của SafeArea.

**Link tham khảo:**

https://docs.flutter.dev/perf/ui-performance

### Câu 447: Hiệu năng

**Question:** What frame-rate target (FPS) does Flutter aim for to ensure a smooth experience on standard devices?

A. 24 FPS

B. 30 FPS

C. 60 FPS

D. 144 FPS

**Correct Answer:** C

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **C**.

Flutter nhắm mục tiêu 60 FPS để có trải nghiệm mượt mà trên các thiết bị tiêu chuẩn. A, B, D không trùng với số đã nêu.

**Link tham khảo:**

https://docs.flutter.dev/perf/ui-performance

### Câu 448: Hiệu năng

**Question:** If a device runs at 60 FPS, roughly how many milliseconds does Flutter have to complete build, layout, and paint for EACH frame before a dropped frame (jank) occurs?

A. About 16.6ms

B. About 100ms

C. About 1ms

D. About 1000ms

**Correct Answer:** A

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **A**.

Ở tốc độ 60 FPS, Flutter có khoảng 16,6 mili giây trên mỗi khung hình. B, C, D không đúng với con số tính toán trong bài giảng.

**Link tham khảo:**

https://docs.flutter.dev/perf/ui-performance

### Câu 449: Hiệu năng

**Question:** Which language is the Flutter Framework layer mainly written in?

A. Dart

B. C++

C. Swift

D. Rust

**Correct Answer:** A

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **A**.

Tùy chọn A đúng: Dart. Câu trả lời phù hợp với hành vi loại hệ thống hoặc an toàn vô giá trị của Dart; sử dụng các loại nullable và toán tử nhận biết null một cách có chủ ý để tránh lỗi null.

**Link tham khảo:**

https://docs.flutter.dev/perf/ui-performance

### Câu 450: Hiệu năng

**Question:** How is Dart described in the slides?

A. An assembly language for Android

B. A web markup language

C. A client-optimized, class-based language developed by Google

D. A language used only for databases

**Correct Answer:** C

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **C**.

Tùy chọn C đúng: Ngôn ngữ dựa trên lớp, được tối ưu hóa cho khách hàng do Google phát triển. Câu trả lời phù hợp với hành vi loại hệ thống hoặc an toàn vô giá trị của Dart; sử dụng các loại nullable và toán tử nhận biết null một cách có chủ ý để tránh lỗi null.

**Link tham khảo:**

https://docs.flutter.dev/perf/ui-performance

### Câu 451: Hiệu năng

**Question:** Which library is used to read and write File objects in Dart?

A. dart:html is always required

B. dart:io

C. flutter/rendering

D. dart:ui only

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

Tùy chọn B đúng: dart:io. Câu trả lời phù hợp với hành vi loại hệ thống hoặc an toàn vô giá trị của Dart; sử dụng các loại nullable và toán tử nhận biết null một cách có chủ ý để tránh lỗi null.

**Link tham khảo:**

https://docs.flutter.dev/perf/ui-performance

### Câu 452: Hiệu năng

**Question:** At 60 FPS, how much time is available for each frame?

A. About 16.6 ms

B. 120 ms

C. 8 ms

D. 60 ms

**Correct Answer:** A

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **A**.

Lựa chọn A đúng: Khoảng 16,6 mili giây. Hiệu suất Flutter phải được đánh giá ở chế độ profile, tốt nhất là trên thiết bị vật lý vì thời gian ở chế độ debug không mang tính đại diện.

**Link tham khảo:**

https://docs.flutter.dev/perf/ui-performance

### Câu 453: Hiệu năng

**Question:** What is a benefit of a const constructor?

A. Creating database tables

B. Encrypting tokens

C. Increasing network latency

D. Reducing rebuild work, saving memory, and helping tree diffing

**Correct Answer:** D

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **D**.

Tùy chọn D đúng: Giảm công việc xây dựng lại, tiết kiệm bộ nhớ và giúp phân biệt cây. Câu trả lời phù hợp với hành vi loại hệ thống hoặc an toàn vô giá trị của Dart; sử dụng các loại nullable và toán tử nhận biết null một cách có chủ ý để tránh lỗi null.

**Link tham khảo:**

https://docs.flutter.dev/perf/ui-performance

### Câu 454: Hiệu năng

**Question:** Why can UniqueKey() be harmful when misused?

A. It creates a new identity and may force widgets to rebuild repeatedly

B. It does not create a key

C. It is used only for databases

D. It does not compile

**Correct Answer:** A

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **A**.

Tùy chọn A đúng: Nó tạo ra một danh tính mới và có thể buộc widgets phải xây dựng lại nhiều lần. Câu trả lời phù hợp với hành vi loại hệ thống hoặc an toàn vô giá trị của Dart; sử dụng các loại nullable và toán tử nhận biết null một cách có chủ ý để tránh lỗi null.

**Link tham khảo:**

https://docs.flutter.dev/perf/ui-performance

### Câu 455: Hiệu năng

**Question:** Which technique correctly optimizes thumbnail images?

A. Always load the largest image

B. Resize or compress the image for its display size instead of loading a 2000-pixel image

C. Decode the image inside build() on every frame

D. Never use a placeholder

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

Tùy chọn B đúng: Thay đổi kích thước hoặc nén hình ảnh cho kích thước hiển thị thay vì tải hình ảnh 2000 pixel. Câu trả lời phù hợp với hành vi loại hệ thống hoặc an toàn vô giá trị của Dart; sử dụng các loại nullable và toán tử nhận biết null một cách có chủ ý để tránh lỗi null.

**Link tham khảo:**

https://docs.flutter.dev/perf/ui-performance

### Câu 456: Hiệu năng

**Question:** Flutter uses which rendering engine?

A. WebKit

B. Skia

C. Blink

D. Metal

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

Tùy chọn B đúng: Skia. Câu trả lời phù hợp với hành vi loại hệ thống hoặc an toàn vô giá trị của Dart; sử dụng các loại nullable và toán tử nhận biết null một cách có chủ ý để tránh lỗi null.

**Link tham khảo:**

https://docs.flutter.dev/perf/ui-performance

### Câu 457: Hiệu năng

**Question:** Which constructor is optimized for large grids?

A. GridView.count

B. GridView.builder

C. GridView.fixed

D. GridView.simple

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

Tùy chọn B đúng: GridView.builder. Câu trả lời phù hợp với hành vi loại hệ thống hoặc an toàn vô giá trị của Dart; sử dụng các loại nullable và toán tử nhận biết null một cách có chủ ý để tránh lỗi null.

**Link tham khảo:**

https://docs.flutter.dev/perf/ui-performance

### Câu 458: Hiệu năng

**Question:** Why use const widgets?

A. More network access

B. Better rebuild optimization

C. Adds state

D. Enables navigation

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

Tùy chọn B đúng: Tối ưu hóa xây dựng lại tốt hơn. Câu trả lời phù hợp với hành vi loại hệ thống hoặc an toàn vô giá trị của Dart; sử dụng các loại nullable và toán tử nhận biết null một cách có chủ ý để tránh lỗi null.

**Link tham khảo:**

https://docs.flutter.dev/perf/ui-performance

### Câu 459: Hiệu năng

**Question:** What are the key compilation features of Dart, Flutter's programming language?

A. It combines Ahead-of-Time (AOT) and Just-in-Time (JIT) compilation.

B. It is strictly an interpreted language.

C. It only supports manual memory management.

D. It does not support null safety.

**Correct Answer:** A

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **A**.

Tùy chọn A đúng: Nó kết hợp quá trình biên dịch Ahead-of-Time (AOT) và Just-in-Time (JIT).. Câu trả lời phù hợp với hành vi loại hệ thống hoặc an toàn vô giá trị của Dart; sử dụng các loại nullable và toán tử nhận biết null một cách có chủ ý để tránh lỗi null.

**Link tham khảo:**

https://docs.flutter.dev/perf/ui-performance

### Câu 460: Hiệu năng

**Question:** When the Dart execution engine runs, which of the following has the highest priority?

A. Microtask queue

B. Event queue

C. UI Rendering events

D. Timer events

**Correct Answer:** A

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **A**.

Tùy chọn A đúng: Hàng đợi microtask. Câu trả lời phù hợp với hành vi loại hệ thống hoặc an toàn vô giá trị của Dart; sử dụng các loại nullable và toán tử nhận biết null một cách có chủ ý để tránh lỗi null.

**Link tham khảo:**

https://docs.flutter.dev/perf/ui-performance

### Câu 461: Hiệu năng

**Question:** Why is it considered a UX best practice to disable the submit button while a network request is in progress?

A. To save battery life on the device.

B. To prevent "double-submit" and show a loading indicator.

C. To allow the Skia engine to render faster.

D. Because Flutter cannot handle multiple simultaneous POST requests.

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

Tùy chọn B đúng: Để ngăn "double-gửi" và hiển thị chỉ báo tải.. Câu trả lời khớp với hành vi loại hệ thống hoặc an toàn vô giá trị của Dart; sử dụng các loại nullable và toán tử nhận biết null một cách có chủ ý để tránh lỗi null.

**Link tham khảo:**

https://docs.flutter.dev/perf/ui-performance

### Câu 462: Hiệu năng

**Question:** Which of the following is true regarding UI Overflow Errors in Flutter?

A. They cause the application to crash immediately.

B. They occur when a widget exceeds its layout constraints but do not crash the app.

C. They can only be detected by a physical device.

D. They are automatically fixed by the Flutter framework.

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

Tùy chọn B đúng: Chúng xảy ra khi widget vượt quá giới hạn bố cục nhưng không làm hỏng ứng dụng.. Câu trả lời khớp với hành vi loại hệ thống hoặc an toàn vô giá trị của Dart; sử dụng các loại nullable và toán tử nhận biết null một cách có chủ ý để tránh lỗi null.

**Link tham khảo:**

https://docs.flutter.dev/perf/ui-performance

### Câu 463: Build & Phát hành

**Question:** Given: String? name; print(name ?? "Guest"); name = "Minh"; print(name!.length); What is printed, in order?

A. null, 4

B. Guest, 4

C. Guest, 5

D. Compile error because `!` cannot be used with a String? variable

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

`name` ban đầu có giá trị rỗng nên nó in ra "Guest"; sau khi gán "Minh" (4 ký tự: M-i-n-h), `name!.length` = 4 → kết quả "Guest, 4". A có giá trị đầu tiên sai; C có length sai (phải là 4, không phải 5); D sai vì `!` có giá trị về mặt cú pháp khi biến được đảm bảo không rỗng tại thời điểm đó.

**Link tham khảo:**

https://docs.flutter.dev/deployment

### Câu 464: Build & Phát hành

**Question:** For an app running on small phones, large phones, tablets, and desktop, why does the lecture recommend "Avoid fixed values"?

A. Because Flutter doesn't support fixed numbers in code

B. Because fixed values (e.g. absolute pixel width/height) don't adapt to diverse screen sizes, easily causing overflow or wasted space on other devices

C. Because fixed values increase the APK file size

D. No specific technical reason

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

Các giá trị cố định không thích ứng với các kích thước màn hình đa dạng, dễ gây tràn hoặc lãng phí dung lượng. A, C, D không phù hợp với lý do kỹ thuật thực tế.

**Link tham khảo:**

https://docs.flutter.dev/deployment

### Câu 465: Build & Phát hành

**Question:** Why does the lecture encourage testing responsive UI across multiple device sizes (e.g. Pixel 2 → Pixel 7 → iPad) instead of just one single emulator?

A. Because Flutter requires testing on at least 3 devices to submit an assignment

B. Because layout behavior (especially breakpoints, Wrap, GridView) can vary significantly across screen sizes, and overflow/misalignment bugs often only appear at specific sizes

C. Because each device runs a different version of Dart

D. No real reason, it's just an optional suggestion

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

Hành vi bố cục có thể khác nhau đáng kể giữa các kích thước màn hình và lỗi thường chỉ xuất hiện ở các kích thước cụ thể, do đó cần phải thử nghiệm nhiều thiết bị khác nhau. A, C, D không phù hợp với lý do kỹ thuật thực tế.

**Link tham khảo:**

https://docs.flutter.dev/deployment

### Câu 466: Build & Phát hành

**Question:** Comparing the three storage types learned (SharedPreferences, JSON File, SQLite) against the offline-first principle "Store offline → Use offline → Sync online." When designing a notes app that will later sync to a server, which initial local storage choice makes future "Sync online" and "Resolve conflicts" easiest to implement, and why?

A. SharedPreferences, because it's the simplest to start coding with

B. SQLite, because its clear row/column data structure makes it easy to track changes (e.g. by id, timestamp) for syncing and resolving conflicts with the server, compared to managing a single JSON string blob in SharedPreferences or a JSON file with no mechanism to query/track changes per element

C. No local storage needed, always call the API every time the app opens to avoid conflicts

D. JSON File, because files automatically sync in real-time with the server

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

Cấu trúc hàng/cột rõ ràng của SQLite giúp việc theo dõi changes (id, dấu thời gian) để đồng bộ hóa/giải quyết xung đột dễ dàng hơn nhiều so với tệp hoặc blob JSON. A, C, D không khớp với lý do kỹ thuật để xử lý xung đột/đồng bộ hóa trong tương lai.

**Link tham khảo:**

https://docs.flutter.dev/deployment

### Câu 467: Build & Phát hành

**Question:** In the common errors table, if Google Sign-In returns null when tested on an emulator, what is the most common cause stated?

A. Missing camera permission

B. The emulator lacks Google Play Services --- use an emulator with the Play Store installed or a real device instead

C. Wrong SharedPreferences configuration

D. Expired JWT

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

emulator thiếu Dịch vụ Google Play là nguyên nhân phổ biến; sử dụng một cái với Play Store hoặc thiết bị thực. A, C, D không phù hợp với nguyên nhân đã nêu.

**Link tham khảo:**

https://docs.flutter.dev/deployment

### Câu 468: Build & Phát hành

**Question:** What debugging aspects does DevTools in Flutter support, per Module 11?

A. Only supports syntax debugging

B. Layout issues, failed state updates, slow performance, unnecessary rebuilds, and navigation issues

C. Only supports checking network connectivity

D. Only used to build the release app

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

DevTools hỗ trợ các vấn đề về bố cục, cập nhật state không thành công, hiệu suất, các lần xây dựng lại không cần thiết và các vấn đề điều hướng theo "Mục tiêu gỡ lỗi trong Flutter". A, C, D không bao gồm toàn bộ phạm vi của nó.

**Link tham khảo:**

https://docs.flutter.dev/deployment

### Câu 469: Build & Phát hành

**Question:** Why does the lecture recommend running Flutter DevTools in "Profile Mode" instead of "Debug Mode" when measuring performance?

A. Because DevTools cannot be opened in Debug Mode

B. Because Debug Mode has a lot of debugging overhead (assertions, extra checks) that make measured performance numbers not accurately reflect real release-mode performance; Profile Mode is closer to real-world performance

C. Because Profile Mode runs slower than Debug Mode, making it suitable for finding bugs more thoroughly

D. There's no difference between the two modes when measuring performance

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

Chi phí chung của Chế độ gỡ lỗi làm lệch các con số hiệu suất so với hiệu suất release thực; Profile Mode gần với thực tế hơn. A, C, D không khớp với lý do thực tế của đề xuất này.

**Link tham khảo:**

https://docs.flutter.dev/deployment

### Câu 470: Build & Phát hành

**Question:** Per "Optimization Technique 2: Extract Widgets" (e.g. extracting `TaskTile` as its own widget), what is the main benefit of breaking a large widget into smaller pieces?

A. Significantly shrinks the APK file size

B. When one item's data changes, only the corresponding child widget (like a specific `TaskTile`) needs to rebuild, instead of the entire list/parent screen rebuilding along with it, reducing rebuild scope and cost

C. An extracted widget automatically gets its own key without needing to declare one

D. No real benefit, just makes the code look tidier formally

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

Việc trích xuất widgets thu hẹp phạm vi xây dựng lại chỉ còn mục đã thay đổi, giảm chi phí xây dựng lại tổng thể. A, C, D không phù hợp với lợi ích kỹ thuật thực sự.

**Link tham khảo:**

https://docs.flutter.dev/deployment

### Câu 471: Build & Phát hành

**Question:** Which command is used to analyze a detailed app-size breakdown by source code, assets, and packages?

A. flutter doctor

B. flutter build apk --analyze-size

C. flutter test

D. flutter clean

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

`flutter build apk --analyze-size` được sử dụng để phân tích chi tiết ứng dụng-size. A, C, D không phải là lệnh đúng cho mục đích này.

**Link tham khảo:**

https://docs.flutter.dev/deployment

### Câu 472: Build & Phát hành

**Question:** Per "Common Size Optimization Tips," what benefit does "Enable tree-shaking icons" (removing unused Material icons) bring to the released app?

A. Makes icons look visually nicer

B. Removes Material Design icons not actually used in the app from the final build package, reducing the app's size

C. Tree-shaking only affects app runtime speed, not size

D. This technique only applies to images, not icons

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

Biểu tượng rung cây sẽ xóa các biểu tượng Material không sử dụng khỏi bản dựng, giảm kích thước ứng dụng. A, C, D không phù hợp với lợi ích thực tế.

**Link tham khảo:**

https://docs.flutter.dev/deployment

### Câu 473: Build & Phát hành

**Question:** What is the difference between `flutter build apk --debug` and `flutter build apk --release`?

A. No difference at all in performance or size

B. The debug build contains extensive debugging support info, not optimized for performance/size; the release build is optimized, removes debug overhead, giving performance and size closer to the real end-user experience

C. `--release` only works on iOS, `--debug` only works on Android

D. `--debug` always produces a smaller file size than `--release`

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

Bản dựng gỡ lỗi mang theo chi phí gỡ lỗi không được tối ưu hóa; Bản dựng release được tối ưu hóa cho hiệu suất và kích thước trong thế giới thực. A, C, D không khớp với sự khác biệt thực sự giữa hai chế độ build.

**Link tham khảo:**

https://docs.flutter.dev/deployment

### Câu 474: Build & Phát hành

**Question:** What file format does Google Play require (instead of a traditional APK) when publishing an app to the store, and what is the corresponding build command?

A. A .aab file (Android App Bundle), built with the command `flutter build appbundle --release`

B. A .ipa file, built with the command `flutter build ios --release`

C. A .exe file, built with the command `flutter build windows --release`

D. Google Play only accepts .apk files, no other format

**Correct Answer:** A

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **A**.

Google Play yêu cầu định dạng .aab, được tạo qua `flutter build appbundle --release`. B, C, D không khớp với định dạng/lệnh chính xác cho Android trên Google Play.

**Link tham khảo:**

https://docs.flutter.dev/deployment

### Câu 475: Build & Phát hành

**Question:** What important rule governs `versionCode` in `android/app/build.gradle` when publishing consecutive updates?

A. It must always keep the same value across every release

B. It must be an integer and must increase with every new release (every update pushed to the store)

C. It doesn't matter, it can be any value including decreasing

D. Only applies to apps running on iOS

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

versionCode phải là số nguyên và tăng theo mỗi release mới. A, C, D không khớp với quy tắc lập phiên bản bắt buộc này.

**Link tham khảo:**

https://docs.flutter.dev/deployment

### Câu 476: Build & Phát hành

**Question:** Before running `flutter build apk --release` for the official release, the lecture recommends first trying the app in "Profile Mode" (`flutter run --profile`). What is the most reasonable reason for this intermediate step?

A. Because Profile Mode is the only mandatory step to successfully build the release file

B. Profile Mode removes most of Debug Mode's overhead while still allowing observation of near-real-world performance (smoothness/jank, build/render speed) before creating the official release build, helping catch performance issues early without waiting until the final packaging step

C. Profile Mode and Release Mode are entirely identical so this step is unnecessary

D. Profile Mode is only used to check syntax errors, unrelated to performance

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

Chế độ hồ sơ loại bỏ hầu hết chi phí gỡ lỗi trong khi hiển thị hiệu suất gần như thực tế, phát hiện sớm các sự cố trước final release build. A, C, D không khớp với lý do thực tế của bước này.

**Link tham khảo:**

https://docs.flutter.dev/deployment

### Câu 477: Build & Phát hành

**Question:** In the general Software Development Life Cycle (SDLC), what is the main role of the "Analysis" phase?

A. Writing detailed source code for each feature

B. Gathering and clarifying requirements from users/clients before starting design and coding

C. Packaging and publishing the product to a store

D. Running the final automated test before release

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

Giai đoạn Phân tích tập trung vào việc thu thập/làm rõ các yêu cầu trước khi bắt đầu thiết kế và mã hóa. A, C, D là các giai đoạn SDLC khác, không phải Phân tích.

**Link tham khảo:**

https://docs.flutter.dev/deployment

### Câu 478: Build & Phát hành

**Question:** What does "Technical Debt" refer to in software development?

A. A direct financial cost paid to a cloud service provider

B. The future cost (time to fix bugs, difficulty maintaining, difficulty scaling) arising from rushed or unoptimized design/coding decisions made now, similar to a "debt" that must be paid off gradually over time

C. The maximum number of lines of code allowed in a project

D. A mandatory fee paid when publishing an app to Google Play/App Store

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

Nợ kỹ thuật là chi phí trong tương lai do các quyết định thiết kế/mã hóa vội vã hiện tại, giống như một khoản nợ được trả dần theo thời gian. A, C, D không phù hợp với khái niệm thực tế.

**Link tham khảo:**

https://docs.flutter.dev/deployment

### Câu 479: Build & Phát hành

**Question:** In the software development lifecycle, where is the "Testing" phase usually placed relative to "Implementation" (coding)?

A. Testing always happens before Implementation in every development model

B. Testing usually happens after (or continuously in parallel with, depending on Agile/TDD models) the Implementation phase, to verify the written code works as required per the analysis

C. Testing has no relationship with Implementation at all

D. Testing is only ever done once, after the app has been released

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

Việc kiểm tra thường diễn ra after (hoặc liên tục song song với việc triển khai Agile/TDD), xác minh mã đáp ứng các yêu cầu. A, C, D không khớp với vị trí thông thường của Kiểm tra trong SDLC.

**Link tham khảo:**

https://docs.flutter.dev/deployment

### Câu 480: Build & Phát hành

**Question:** Which feature lets developers see code changes quickly without restarting the entire application?

A. Code Signing

B. Hot Reload

C. AOT only

D. Cold Boot

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

Tùy chọn B đúng: Tải lại nóng. Câu trả lời phù hợp với hành vi loại hệ thống hoặc an toàn vô giá trị của Dart; sử dụng các loại nullable và toán tử nhận biết null một cách có chủ ý để tránh lỗi null.

**Link tham khảo:**

https://docs.flutter.dev/deployment

### Câu 481: Build & Phát hành

**Question:** In which year was Flutter 1.0 released according to the slides?

A. 2021

B. 2018

C. 2015

D. 2017

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

Tùy chọn B đúng: 2018. Câu trả lời phù hợp với hành vi loại hệ thống hoặc an toàn vô giá trị của Dart; sử dụng các loại nullable và toán tử nhận biết null một cách có chủ ý để tránh lỗi null.

**Link tham khảo:**

https://docs.flutter.dev/deployment

### Câu 482: Build & Phát hành

**Question:** What is DartPad best suited for?

A. Creating a native Android emulator

B. Running Dart or Flutter code directly in a browser without installation

C. Managing Firebase projects

D. Building a signed AAB file

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

Tùy chọn B đúng: Chạy mã Dart hoặc Flutter trực tiếp trong trình duyệt mà không cần cài đặt. Câu trả lời phù hợp với hành vi loại hệ thống hoặc an toàn vô giá trị của Dart; sử dụng các loại nullable và toán tử nhận biết null một cách có chủ ý để tránh lỗi null.

**Link tham khảo:**

https://docs.flutter.dev/deployment

### Câu 483: Build & Phát hành

**Question:** Which command is commonly used to check the Flutter environment after installing the SDK?

A. android verify

B. flutter doctor

C. flutter database

D. dart publish

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

Tùy chọn B đúng: flutter doctor. Câu trả lời phù hợp với hành vi loại hệ thống hoặc an toàn vô giá trị của Dart; sử dụng các loại nullable và toán tử nhận biết null một cách có chủ ý để tránh lỗi null.

**Link tham khảo:**

https://docs.flutter.dev/deployment

### Câu 484: Build & Phát hành

**Question:** Which lifecycle method is used to release controllers or other resources?

A. runApp()

B. initState()

C. createState()

D. dispose()

**Correct Answer:** D

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **D**.

Tùy chọn D đúng: dispose(). Câu trả lời phù hợp với hành vi loại hệ thống hoặc an toàn vô giá trị của Dart; sử dụng các loại nullable và toán tử nhận biết null một cách có chủ ý để tránh lỗi null.

**Link tham khảo:**

https://docs.flutter.dev/deployment

### Câu 485: Build & Phát hành

**Question:** When are Material Icons commonly used?

A. Storing relational data

B. Compiling a release build

C. Navigation buttons, action buttons, and status indicators

D. Parsing JSON

**Correct Answer:** C

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **C**.

Tùy chọn C đúng: Nút điều hướng, nút hành động và chỉ báo trạng thái. Câu trả lời phù hợp với hành vi loại hệ thống hoặc an toàn vô giá trị của Dart; sử dụng các loại nullable và toán tử nhận biết null một cách có chủ ý để tránh lỗi null.

**Link tham khảo:**

https://docs.flutter.dev/deployment

### Câu 486: Build & Phát hành

**Question:** Where are Associated Domains added for iOS?

A. DartPad settings

B. AndroidManifest.xml

C. Signing & Capabilities of the Runner target

D. pubspec.yaml

**Correct Answer:** C

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **C**.

Tùy chọn C đúng: Ký kết & Khả năng của mục tiêu Á quân. Flutter hỗ trợ nhiều mục tiêu triển khai, mặc dù mỗi mục tiêu có thể có SDK, yêu cầu về công cụ và tích hợp nền tảng riêng.

**Link tham khảo:**

https://docs.flutter.dev/deployment

### Câu 487: Build & Phát hành

**Question:** What does InheritedWidget help accomplish?

A. Sending a POST request

B. Signing an APK

C. Efficiently passing data down the widget tree

D. Creating an emulator

**Correct Answer:** C

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **C**.

Tùy chọn C đúng: Truyền dữ liệu xuống cây widget một cách hiệu quả. Câu trả lời phù hợp với hành vi loại hệ thống hoặc an toàn vô giá trị của Dart; sử dụng các loại nullable và toán tử nhận biết null một cách có chủ ý để tránh lỗi null.

**Link tham khảo:**

https://docs.flutter.dev/deployment

### Câu 488: Build & Phát hành

**Question:** Which problems can occur without responsive design?

A. Incorrect SQL syntax

B. APK signing failure

C. JWT expiration

D. Overflow, misaligned widgets, clipped text, and poor UX

**Correct Answer:** D

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **D**.

Tùy chọn D đúng: Tràn, widgets bị căn chỉnh sai, văn bản bị cắt bớt và UX kém. Câu trả lời phù hợp với hành vi loại hệ thống hoặc an toàn vô giá trị của Dart; sử dụng các loại nullable và toán tử nhận biết null một cách có chủ ý để tránh lỗi null.

**Link tham khảo:**

https://docs.flutter.dev/deployment

### Câu 489: Build & Phát hành

**Question:** Which problems can a well-designed form reduce?

A. Low FPS caused only by large images

B. APK size

C. A deep route stack

D. Invalid data, poor UX, and data-quality risks

**Correct Answer:** D

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **D**.

Tùy chọn D đúng: Dữ liệu không hợp lệ, UX kém và rủi ro về chất lượng dữ liệu. Câu trả lời phù hợp với hành vi loại hệ thống hoặc an toàn vô giá trị của Dart; sử dụng các loại nullable và toán tử nhận biết null một cách có chủ ý để tránh lỗi null.

**Link tham khảo:**

https://docs.flutter.dev/deployment

### Câu 490: Build & Phát hành

**Question:** What does GlobalKey`<FormState>` allow you to do?

A. Access FormState to validate, save, and reset the whole form

B. Sign an APK

C. Open a database

D. Create a JWT

**Correct Answer:** A

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **A**.

Tùy chọn A đúng: Truy cập FormState để xác thực, lưu và đặt lại toàn bộ biểu mẫu. Đây là khái niệm quản lý state: các thay đổi state phải thông báo hoặc kích hoạt phần có liên quan của UI để xây dựng lại.

**Link tham khảo:**

https://docs.flutter.dev/deployment

### Câu 491: Build & Phát hành

**Question:** Which sequence describes the flow from a form to a backend?

A. UI -> SQLite -> GPU -> Widget

B. Form -> Theme -> Navigator only

C. UI Form -> local validation -> POST request -> server -> response -> UI update

D. Input -> APK signing

**Correct Answer:** C

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **C**.

Tùy chọn C đúng: Biểu mẫu UI -> xác thực cục bộ -> yêu cầu POST -> máy chủ -> phản hồi -> cập nhật UI. Câu trả lời phù hợp với hành vi loại hệ thống hoặc an toàn vô giá trị của Dart; sử dụng các loại nullable và toán tử nhận biết null một cách có chủ ý để tránh lỗi null.

**Link tham khảo:**

https://docs.flutter.dev/deployment

### Câu 492: Build & Phát hành

**Question:** Why do API calls use async/await?

A. To wait for the network without freezing the UI

B. To increase APK size

C. To avoid using model classes

D. To remove error handling

**Correct Answer:** A

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **A**.

Tùy chọn A đúng: Chờ mạng mà không đóng băng UI. Dart sử dụng Future cho một kết quả không đồng bộ và Stream cho một chuỗi sự kiện không đồng bộ; async/await làm cho mã dựa trên Future dễ đọc hơn.

**Link tham khảo:**

https://docs.flutter.dev/deployment

### Câu 493: Build & Phát hành

**Question:** When is FutureBuilder appropriate?

A. Creating a custom URL scheme

B. Signing an application

C. Storing key-value data

D. Connecting a one-time Future to the UI and handling loading, error, and data states

**Correct Answer:** D

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **D**.

Tùy chọn D đúng: Kết nối Future một lần với UI và xử lý các trạng thái tải, lỗi và dữ liệu. Dart sử dụng Future cho một kết quả không đồng bộ và Stream cho một chuỗi sự kiện không đồng bộ; async/await làm cho mã dựa trên Future dễ đọc hơn.

**Link tham khảo:**

https://docs.flutter.dev/deployment

### Câu 494: Build & Phát hành

**Question:** What is a local JSON file suitable for?

A. UI navigation

B. Simple lists, history, or export/import

C. Complex multi-table relationships

D. JWT signing

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

Tùy chọn B đúng: Danh sách, lịch sử hoặc xuất/nhập đơn giản. Câu trả lời phù hợp với hành vi loại hệ thống hoặc an toàn vô giá trị của Dart; sử dụng các loại nullable và toán tử nhận biết null một cách có chủ ý để tránh lỗi null.

**Link tham khảo:**

https://docs.flutter.dev/deployment

### Câu 495: Build & Phát hành

**Question:** What is onCreate in openDatabase() normally used for?

A. Signing in with Google

B. Running CREATE TABLE when the database is created for the first time

C. Calling an API on every frame

D. Rendering a ListView

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

Tùy chọn B đúng: Chạy CREATE TABLE khi cơ sở dữ liệu được tạo lần đầu tiên. Câu trả lời phù hợp với hành vi loại hệ thống hoặc an toàn vô giá trị của Dart; sử dụng các loại nullable và toán tử nhận biết null một cách có chủ ý để tránh lỗi null.

**Link tham khảo:**

https://docs.flutter.dev/deployment

### Câu 496: Build & Phát hành

**Question:** Which sequence correctly describes the high-level authentication flow?

A. Enter credentials -> API request -> backend verification -> token -> store token -> send token with later requests

B. Notification -> login -> hash password on the client

C. Route -> JSON -> SQLite -> token

D. Store token -> enter credentials -> build APK

**Correct Answer:** A

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **A**.

Tùy chọn A đúng: Nhập thông tin xác thực -> yêu cầu API -> xác minh phụ trợ -> mã thông báo -> mã thông báo lưu trữ -> gửi mã thông báo với các yêu cầu sau. Câu trả lời phù hợp với hành vi loại hệ thống hoặc an toàn vô giá trị của Dart; sử dụng các loại nullable và toán tử nhận biết null một cách có chủ ý để tránh lỗi null.

**Link tham khảo:**

https://docs.flutter.dev/deployment

### Câu 497: Nền tảng hỗ trợ

**Question:** What is the difference between Local Notification and Push Notification?

A. Local Notification is triggered by the app itself and needs no Internet; Push Notification is sent from a server and needs Internet plus backend support

B. The two notification types are completely identical in mechanism

C. Push Notification needs no backend, only Local Notification does

D. Local Notification only works on iOS

**Correct Answer:** A

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **A**.

Thông báo cục bộ được kích hoạt bởi ứng dụng, không cần Internet; Thông báo đẩy được gửi từ máy chủ, cần hỗ trợ Internet và phụ trợ. B, C, D mô tả sai/đảo ngược hai loại thông báo này.

**Link tham khảo:**

https://docs.flutter.dev/reference/supported-platforms

### Câu 498: Nền tảng hỗ trợ

**Question:** What is the basic difference between Implicit Animation and Explicit Animation in Flutter?

A. Implicit Animation needs a manual AnimationController, Explicit Animation doesn't

B. Implicit Animation automatically interpolates between old and new values when a property changes, without needing to manage an AnimationController manually; Explicit Animation requires explicitly declaring and controlling an AnimationController

C. The two animation types are entirely identical, just different names

D. Implicit Animation only works on iOS, Explicit Animation only works on Android

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

Hoạt hình tiềm ẩn tự động nội suy mà không cần bộ điều khiển thủ công; Hoạt ảnh rõ ràng yêu cầu khai báo/kiểm soát AnimationController rõ ràng. A, C, D không phù hợp với đặc tính kỹ thuật thực tế.

**Link tham khảo:**

https://docs.flutter.dev/reference/supported-platforms

### Câu 499: Nền tảng hỗ trợ

**Question:** Which file is the main entry point of a Flutter application?

A. web/index.css

B. lib/main.dart

C. android/Manifest.xml

D. test/main_test.sql

**Correct Answer:** B

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **B**.

Tùy chọn B đúng: lib/main.dart. Câu trả lời phù hợp với hành vi loại hệ thống hoặc an toàn vô giá trị của Dart; sử dụng các loại nullable và toán tử nhận biết null một cách có chủ ý để tránh lỗi null.

**Link tham khảo:**

https://docs.flutter.dev/reference/supported-platforms

### Câu 500: Nền tảng hỗ trợ

**Question:** Which language is used for Flutter web logic?

A. Dart

B. PHP

C. Ruby

D. C#

**Correct Answer:** A

**Giải thích bằng tiếng Việt:**

Đáp án đúng là **A**.

Tùy chọn A đúng: Dart. Flutter hỗ trợ nhiều mục tiêu triển khai, mặc dù mỗi mục tiêu có thể có SDK, yêu cầu về công cụ và tích hợp nền tảng riêng.

**Link tham khảo:**

https://docs.flutter.dev/reference/supported-platforms
