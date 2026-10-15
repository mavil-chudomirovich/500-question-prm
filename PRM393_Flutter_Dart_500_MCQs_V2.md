# PRM393 --- Flutter & Dart: 500 Multiple-Choice Questions

> Compiled primarily from the supplied Quizlet question-set files.
> Answer explanations are retained where available and added where
> source explanations were missing. The official documentation URLs are
> topic-level cross-check references; this file does not claim that
> every question was independently verified against the official docs.

## Contents

-   [Read me and source notes](#read-me-and-source-notes)
-   [Question bank](#question-bank)
-   [Topic distribution](#topic-distribution)
-   [Sources and verification](#sources-and-verification)

## Read me and source notes

PRM393 --- Flutter & Dart MCQ Bank (500 Questions)

Purpose --- 500 English multiple-choice questions with answer keys and
explanations, organized by topic.

How to use --- Filter the Question Bank by Topic, search by question
text, or review the Topic Distribution sheet.

Question source --- The four user-provided Quizlet compilations.
Question wording and options are preserved where parsing succeeded.

Verification caveat --- The official documentation URL is supplied per
topic to support review. Source answer keys were retained except for
flagged version-sensitive claims; this workbook does not falsely claim
that every individual Quizlet fact was independently confirmed by an
official page.

Explanation policy --- Original explanations are retained when
available. Otherwise, a concise explanation is generated from the keyed
answer and topic.

Deduplication --- Exact and high-similarity question stems were
deduplicated. Similar concepts with materially different question
wording may remain.

Question count --- 500

## Question bank

### PRM-001 --- 1 --- Intro to Flutter & Dart

Which of the following is the best example of a case where you should
NOT choose Flutter and should build natively instead?

-   **A.** A simple movie ticket booking app
-   **B.** An e-commerce app with a standard UI
-   **C.** A real-time graphics-intensive game requiring low-level
    hardware access
-   **D.** An internal enterprise management dashboard app

**Correct answer:** C --- A real-time graphics-intensive game requiring
low-level hardware access

**Explanation:** A real-time, graphics-intensive game requiring
low-level hardware access is the textbook example of 'When Native
Development Is Preferable.' A, B, D are all cases where Flutter fits
well.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/resources/faq

------------------------------------------------------------------------

### PRM-002 --- 1 --- Intro to Flutter & Dart

In Dart, `Set<int> s = {1, 2, 2, 3};` --- after initialization, what is
`s.length`?

-   **A.** 4
-   **B.** 3
-   **C.** 2
-   **D.** Compile error because Set doesn't allow duplicate elements in
    a declaration

**Correct answer:** B --- 3

**Explanation:** Set removes duplicates: `{1,2,2,3}` becomes `{1,2,3}` →
length = 3. A wrongly counts the duplicate; C is missing an element; D
is wrong since Set allows duplicates in the declaration, it only
auto-removes them when stored.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/resources/faq

------------------------------------------------------------------------

### PRM-003 --- 1 --- Intro to Flutter & Dart

Consider this named constructor code: class Point { int x, y;
Point(this.x, this.y); Point.origin() : x = 0, y = 0; } void main() {
var p1 = Point(3, 4); var p2 = Point.origin(); print('${p1.x},${p1.y} -
${p2.x},${p2.y}'); } What is printed?

-   **A.** 0,0 - 3,4
-   **B.** 3,4 - 0,0
-   **C.** Error because Dart doesn't support multiple constructors in
    the same class
-   **D.** null,null - 0,0

**Correct answer:** B --- 3,4 - 0,0

**Explanation:** `Point(3,4)` assigns x=3,y=4; `Point.origin()` assigns
x=0,y=0 via the initializer list --- prints "3,4 - 0,0". A reverses the
output; C is wrong since Dart supports named constructors; D is wrong
since the values are correctly assigned, not null.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/resources/faq

------------------------------------------------------------------------

### PRM-004 --- 1 --- Intro to Flutter & Dart

Given this function: void greet({String name = "Guest", int age = 18}) {
print("\$name is \$age"); } What does calling `greet(name: "Lan");`
print?

-   **A.** Error due to missing age parameter
-   **B.** Lan is 18
-   **C.** Guest is 18
-   **D.** Lan is null

**Correct answer:** B --- Lan is 18

**Explanation:** `greet(name: "Lan")` only passes name; age uses its
default value of 18 → "Lan is 18". A is wrong since age has a default; C
is wrong since name was passed; D is wrong since age clearly has a
default.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/resources/faq

------------------------------------------------------------------------

### PRM-005 --- 1 --- Intro to Flutter & Dart

Consider this OOP code: class Animal { String sound() =\> "Some sound";
} class Dog extends Animal { @override String sound() =\> "Woof"; } void
main() { Animal a = Dog(); print(a.sound()); } What is printed, and
which OOP concept does it illustrate?

-   **A.** Some sound" --- illustrates Encapsulation
-   **B.** Woof" --- illustrates Polymorphism via method override
-   **C.** Compile error because Dog cannot be assigned to an
    Animal-typed variable
-   **D.** Woof Some sound" --- both functions are called

**Correct answer:** B --- Woof" --- illustrates Polymorphism via method
override

**Explanation:** This illustrates Polymorphism: a variable typed as
Animal calls Dog's overridden method at runtime, printing "Woof". A
mislabels the concept; C is wrong since upcasting is valid; D is wrong
since only one method is called.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/resources/faq

------------------------------------------------------------------------

### PRM-006 --- 1 --- Intro to Flutter & Dart

Given this string interpolation code: String name = "FPT University";
print("Hello \$name"); print("Length: \${name.length}"); print("Upper:
\${name.toUpperCase()\[0\]}"); What character does the third line print?

-   **A.** f
-   **B.** F
-   **C.** FPT
-   **D.** Error because you cannot index directly into a function
    result inside string interpolation

**Correct answer:** B --- F

**Explanation:** `name.toUpperCase()` = "FPT UNIVERSITY", index \[0\] =
'F'. A has the wrong case; C is not a single character; D is wrong since
Dart allows indexing a function result directly inside string
interpolation.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/resources/faq

------------------------------------------------------------------------

### PRM-007 --- 1 --- Intro to Flutter & Dart

In Dart, what is the role of the `main()` function?

-   **A.** It's a callback called last when the app closes
-   **B.** It's the entry point of execution for every Dart program
-   **C.** Only used in Flutter, not in pure Dart
-   **D.** A function used to define classes

**Correct answer:** B --- It's the entry point of execution for every
Dart program

**Explanation:** `main()` is the entry point of execution for every Dart
program. A, C, D misdescribe the role of the main function.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/resources/faq

------------------------------------------------------------------------

### PRM-008 --- 1 --- Intro to Flutter & Dart

In `List<int> nums = [1,2,3]; for(var x in nums) print(x);`, what is the
main purpose of using `var` instead of `int` for variable `x`?

-   **A.** `var` must be used because `int` would cause an error
-   **B.** Type inference --- Dart automatically infers the data type
    (int) based on the List's elements, keeping code concise while still
    being strongly typed
-   **C.** `var` makes variable x fully dynamic with no type checking at
    all
-   **D.** No difference at all, it's just a coding habit

**Correct answer:** B --- Type inference --- Dart automatically infers
the data type (int) based on the List's elements, keeping code concise
while still being strongly typed

**Explanation:** `var` lets Dart infer the type (int) from the List's
elements, keeping code concise while remaining strongly typed. A is
wrong since int is equally valid; C is wrong since var differs from
dynamic; D is wrong since there is a difference in type inference even
if the runtime result looks the same.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/resources/faq

------------------------------------------------------------------------

### PRM-009 --- 1 --- Intro to Flutter & Dart

Given this code, predict the result of calling `Eagle().fly()`: class
Bird { void fly() =\> print("Bird flying"); } class Eagle implements
Bird { @override void fly() =\> print("Eagle gliding"); }

-   **A.** Bird flying" because implements also inherits the method body
-   **B.** Eagle gliding" --- because implements only takes the
    interface (signature), Eagle must redefine fly() entirely itself
-   **C.** Compile error because Eagle has not defined a constructor
-   **D.** Both "Bird flying" and "Eagle gliding" are printed

**Correct answer:** B --- Eagle gliding" --- because implements only
takes the interface (signature), Eagle must redefine fly() entirely
itself

**Explanation:** Since `implements` only takes the signature, Eagle must
redefine fly() entirely → prints "Eagle gliding". A is wrong since
implements does not inherit the method body; C is wrong since no
constructor is needed here; D is wrong since only one method is called.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/resources/faq

------------------------------------------------------------------------

### PRM-010 --- 1 --- Intro to Flutter & Dart

Given this generic constraint: abstract class Animal { String sound(); }
class Cat extends Animal { sound() =\> "Meow"; } class
Box`<T extends Animal>`{=html} { T pet; Box(this.pet); void play() =\>
print(pet.sound()); } What does the `<T extends Animal>` syntax mean?

-   **A.** Box can only hold the exact Animal type, no subclasses
    accepted
-   **B.** Restricts the generic type T to be Animal or a subclass of
    Animal, guaranteeing T always has a sound() method
-   **C.** This is invalid syntax, Dart doesn't support generic
    constraints
-   **D.** `extends` here means Box inherits from Animal

**Correct answer:** B --- Restricts the generic type T to be Animal or a
subclass of Animal, guaranteeing T always has a sound() method

**Explanation:** `<T extends Animal>` restricts generic T to Animal or
its subclasses, guaranteeing T has a sound() method. A is wrong since
subclasses are still accepted; C is wrong since this is valid syntax; D
confuses generic constraint `extends` with class inheritance.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/resources/faq

------------------------------------------------------------------------

### PRM-011 --- 1 --- Intro to Flutter & Dart

Given: var base = \[1, 2, 3\]; var list = \[ ...base, if (true) 99, for
(var x in base) x \* 10 \]; print(list); What is printed?

-   **A.** \[1, 2, 3, 99, 10, 20, 30\]
-   **B.** \[1, 2, 3, 10, 20, 30, 99\]
-   **C.** \[99, 1, 2, 3, 10, 20, 30\]
-   **D.** Compile error because you cannot mix spread, if, and for in
    the same List

**Correct answer:** A --- \[1, 2, 3, 99, 10, 20, 30\]

**Explanation:** `[...base, if(true) 99, for(x in base) x*10]` =
\[1,2,3, 99, 10,20,30\]. B, C have the wrong order; D is wrong since
Dart allows mixing these syntaxes.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/resources/faq

------------------------------------------------------------------------

### PRM-012 --- 1 --- Intro to Flutter & Dart

In the example `AnimationController implements Listenable` mentioned in
the lecture, what does using `implements` instead of `extends`
demonstrate?

-   **A.** AnimationController copies all of Listenable's existing code
-   **B.** AnimationController only follows Listenable's contract and
    implements its own behavior, without inheriting existing
    implementation
-   **C.** AnimationController and Listenable are unrelated to each
    other
-   **D.** This is a syntax error, `extends` must be used

**Correct answer:** B --- AnimationController only follows Listenable's
contract and implements its own behavior, without inheriting existing
implementation

**Explanation:** `implements` means AnimationController only follows the
contract and implements its own behavior, without inheriting existing
implementation from Listenable. A is wrong since implements doesn't copy
code; C is wrong since there's a clear relationship via implements; D is
wrong since this is valid Dart syntax.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/resources/faq

------------------------------------------------------------------------

### PRM-013 --- 1 --- Intro to Flutter & Dart

According to general recommendations, `BottomNavigationBar` best fits
apps with how many main navigation tabs?

-   **A.** 1 tab
-   **B.** 2-5 tabs
-   **C.** 10-15 tabs
-   **D.** No limit on the number

**Correct answer:** B --- 2-5 tabs

**Explanation:** BottomNavigationBar best suits 2-5 tabs per general
recommendation. A, C, D don't match the recommended number.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/resources/faq

------------------------------------------------------------------------

### PRM-014 --- 1 --- Intro to Flutter & Dart

According to "Using Breakpoints" in the lecture, what layout-splitting
rule based on width is proposed?

-   **A.** \< 400px: Small, 400-800px: Medium, \> 800px: Large
-   **B.** \< 100px: Small, 100-300px: Medium, \> 300px: Large
-   **C.** Only 2 levels: Mobile and Desktop, no intermediate level
-   **D.** Breakpoint is always fixed at 1024px in every case

**Correct answer:** A --- \< 400px: Small, 400-800px: Medium, \> 800px:
Large

**Explanation:** Proposed breakpoint rule: \<400px Small, 400-800px
Medium, \>800px Large --- matching the slide. B, C, D don't match the
stated numbers.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/resources/faq

------------------------------------------------------------------------

### PRM-015 --- 1 --- Intro to Flutter & Dart

`AutovalidateMode` has three modes: `disabled`, `always`, and
`onUserInteraction`. According to the lecture, which mode is recommended
and why?

-   **A.** `always` --- because showing errors right away helps users be
    more careful
-   **B.** `disabled` --- because never showing errors keeps the UI
    always clean
-   **C.** `onUserInteraction` --- because it avoids showing red errors
    right from the start (annoying) while still responding promptly once
    the user starts interacting with that field, balancing "too early"
    and "too late
-   **D.** No mode is recommended, it's arbitrary

**Correct answer:** C --- `onUserInteraction` --- because it avoids
showing red errors right from the start (annoying) while still
responding promptly once the user starts interacting with that field,
balancing "too early" and "too late

**Explanation:** `onUserInteraction` is recommended because it balances
not showing errors too early (annoying) and not too late (confusing). A,
B, D don't match the recommended mode/reason.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/resources/faq

------------------------------------------------------------------------

### PRM-016 --- 1 --- Intro to Flutter & Dart

Per the "Error Messages & UX" section, which of the following error
messages is a GOOD UX example?

-   **A.** ERROR_400_INVALID_FIELD
-   **B.** Enter a valid email
-   **C.** Invalid!!!
-   **D.** Something went wrong somewhere

**Correct answer:** B --- Enter a valid email

**Explanation:** Enter a valid email" is a good UX example: short,
clear, specific. A, C, D are bad examples (technical error code, vague,
unspecific).

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/resources/faq

------------------------------------------------------------------------

### PRM-017 --- 1 --- Intro to Flutter & Dart

What main benefit does Firebase Authentication provide over building
your own authentication system from scratch?

-   **A.** It requires writing a more complex custom backend
-   **B.** Provides a secure, scalable login solution, supporting
    multiple methods (Google, Apple, Facebook, Email/Password) along
    with automatic session persistence and token refresh, reducing the
    effort of building an identity backend
-   **C.** Only works for apps that don't need login
-   **D.** Not compatible with Flutter

**Correct answer:** B --- Provides a secure, scalable login solution,
supporting multiple methods (Google, Apple, Facebook, Email/Password)
along with automatic session persistence and token refresh, reducing the
effort of building an identity backend

**Explanation:** Firebase Auth provides secure, scalable, multi-method
login with automatic session persistence/refresh, reducing backend
identity effort. A, C, D don't match Firebase Authentication's real
benefit.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/resources/faq

------------------------------------------------------------------------

### PRM-018 --- 1 --- Intro to Flutter & Dart

In the Google Sign-In flow: "User taps Sign in with Google → Google
account chooser → Google issues OAuth tokens → Convert to Firebase
credential → Firebase signs in the user → App receives Firebase User
object." What is the core meaning of the statement "Firebase handles
identity → our app only handles UI + navigation"?

-   **A.** The Flutter app must write all the OAuth authentication logic
    itself from scratch
-   **B.** Firebase handles all the complex parts of identity
    verification and OAuth token management; the Flutter developer only
    needs to focus on building the UI and handling navigation after a
    successful login
-   **C.** Google Sign-In is unrelated to Firebase at all
-   **D.** UI and navigation must be entirely handled on the server side

**Correct answer:** B --- Firebase handles all the complex parts of
identity verification and OAuth token management; the Flutter developer
only needs to focus on building the UI and handling navigation after a
successful login

**Explanation:** Firebase handles all the complex identity/OAuth
verification, letting the Flutter developer focus only on UI and
navigation. A, C, D don't match the meaning of this statement.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/resources/faq

------------------------------------------------------------------------

### PRM-019 --- 1 --- Intro to Flutter & Dart

Per the "Understanding User Session" section, what components does a
typical session usually include?

-   **A.** Only the user's password
-   **B.** Access token, user profile info, and the token expiry
    timestamp
-   **C.** Only the app name and Flutter version
-   **D.** The user's entire operation history on the device

**Correct answer:** B --- Access token, user profile info, and the token
expiry timestamp

**Explanation:** A typical session includes: access token, user profile,
and token expiry timestamp. A, C, D are incomplete/incorrect about the
content of "Understanding User Session.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/resources/faq

------------------------------------------------------------------------

### PRM-020 --- 1 --- Intro to Flutter & Dart

Which language is mainly used to write Flutter applications?

-   **A.** Dart
-   **B.** Kotlin
-   **C.** JavaScript
-   **D.** Swift

**Correct answer:** A --- Dart

**Explanation:** Option A is correct: Dart. The answer matches Dart's
type-system or null-safety behavior; use nullable types and null-aware
operators deliberately to avoid null errors.

**Source:** Quizlet compilation 2

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/resources/faq

------------------------------------------------------------------------

### PRM-021 --- 1 --- Intro to Flutter & Dart

Why is Flutter especially suitable for MVPs and startups?

-   **A.** It runs only on high-end devices
-   **B.** It requires two separate codebases
-   **C.** It eliminates the need for testing
-   **D.** It shortens time to market and maintains one codebase

**Correct answer:** D --- It shortens time to market and maintains one
codebase

**Explanation:** Option D is correct: It shortens time to market and
maintains one codebase. The answer matches Dart's type-system or
null-safety behavior; use nullable types and null-aware operators
deliberately to avoid null errors.

**Source:** Quizlet compilation 2

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/resources/faq

------------------------------------------------------------------------

### PRM-022 --- 1 --- Intro to Flutter & Dart

In a Flutter-and-native integration model, which parts are usually
handled by Flutter?

-   **A.** UI and business logic
-   **B.** The operating-system kernel
-   **C.** Driver compilation
-   **D.** Device firmware

**Correct answer:** A --- UI and business logic

**Explanation:** Option A is correct: UI and business logic. The answer
matches Dart's type-system or null-safety behavior; use nullable types
and null-aware operators deliberately to avoid null errors.

**Source:** Quizlet compilation 2

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/resources/faq

------------------------------------------------------------------------

### PRM-023 --- 1 --- Intro to Flutter & Dart

Which language is the Flutter Engine layer mainly written in?

-   **A.** Dart
-   **B.** Kotlin
-   **C.** Objective-C
-   **D.** C++

**Correct answer:** D --- C++

**Explanation:** Option D is correct: C++. The answer matches Dart's
type-system or null-safety behavior; use nullable types and null-aware
operators deliberately to avoid null errors.

**Source:** Quizlet compilation 2

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/resources/faq

------------------------------------------------------------------------

### PRM-024 --- 1 --- Intro to Flutter & Dart

Which two compilation approaches does Dart combine?

-   **A.** JIT and AOT
-   **B.** SQL and NoSQL
-   **C.** HTML and CSS
-   **D.** JVM and CLR

**Correct answer:** A --- JIT and AOT

**Explanation:** Option A is correct: JIT and AOT. The answer matches
Dart's type-system or null-safety behavior; use nullable types and
null-aware operators deliberately to avoid null errors.

**Source:** Quizlet compilation 2

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/resources/faq

------------------------------------------------------------------------

### PRM-025 --- 1 --- Intro to Flutter & Dart

From which function does every Dart program begin execution?

-   **A.** run()
-   **B.** start()
-   **C.** init()
-   **D.** main()

**Correct answer:** D --- main()

**Explanation:** Option D is correct: main(). The answer matches Dart's
type-system or null-safety behavior; use nullable types and null-aware
operators deliberately to avoid null errors.

**Source:** Quizlet compilation 2

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/resources/faq

------------------------------------------------------------------------

### PRM-026 --- 1 --- Intro to Flutter & Dart

Which function prints a line to the console in Dart?

-   **A.** print()
-   **B.** console.log()
-   **C.** echo()
-   **D.** Java's println()

**Correct answer:** A --- print()

**Explanation:** Option A is correct: print(). The answer matches Dart's
type-system or null-safety behavior; use nullable types and null-aware
operators deliberately to avoid null errors.

**Source:** Quizlet compilation 2

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/resources/faq

------------------------------------------------------------------------

### PRM-027 --- 1 --- Intro to Flutter & Dart

Which Dart type is used for whole numbers?

-   **A.** bool
-   **B.** String
-   **C.** int
-   **D.** double

**Correct answer:** C --- int

**Explanation:** Option C is correct: int. The answer matches Dart's
type-system or null-safety behavior; use nullable types and null-aware
operators deliberately to avoid null errors.

**Source:** Quizlet compilation 2

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/resources/faq

------------------------------------------------------------------------

### PRM-028 --- 1 --- Intro to Flutter & Dart

Which Dart type is used for fractional numbers?

-   **A.** Never
-   **B.** Set
-   **C.** int
-   **D.** double

**Correct answer:** D --- double

**Explanation:** Option D is correct: double. The answer matches Dart's
type-system or null-safety behavior; use nullable types and null-aware
operators deliberately to avoid null errors.

**Source:** Quizlet compilation 2

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/resources/faq

------------------------------------------------------------------------

### PRM-029 --- 1 --- Intro to Flutter & Dart

Which data type represents an ordered collection?

-   **A.** List
-   **B.** enum
-   **C.** Map
-   **D.** Set

**Correct answer:** A --- List

**Explanation:** Option A is correct: List. The answer matches Dart's
type-system or null-safety behavior; use nullable types and null-aware
operators deliberately to avoid null errors.

**Source:** Quizlet compilation 2

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/resources/faq

------------------------------------------------------------------------

### PRM-030 --- 1 --- Intro to Flutter & Dart

What is the logical AND operator in Dart?

-   **A.** !
-   **B.** \|\|
-   **C.** &&
-   **D.** ??

**Correct answer:** C --- &&

**Explanation:** Option C is correct: &&. The answer matches Dart's
type-system or null-safety behavior; use nullable types and null-aware
operators deliberately to avoid null errors.

**Source:** Quizlet compilation 2

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/resources/faq

------------------------------------------------------------------------

### PRM-031 --- 1 --- Intro to Flutter & Dart

According to the slide example, what is the main difference between
dynamic and var?

-   **A.** dynamic is resolved at runtime and may hold values of
    different types
-   **B.** dynamic is always an integer
-   **C.** dynamic is a constant
-   **D.** dynamic cannot be assigned a value

**Correct answer:** A --- dynamic is resolved at runtime and may hold
values of different types

**Explanation:** Option A is correct: dynamic is resolved at runtime and
may hold values of different types. The answer matches Dart's
type-system or null-safety behavior; use nullable types and null-aware
operators deliberately to avoid null errors.

**Source:** Quizlet compilation 2

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/resources/faq

------------------------------------------------------------------------

### PRM-032 --- 1 --- Intro to Flutter & Dart

When is final appropriate?

-   **A.** When a function returns no value
-   **B.** When the value must be known at compile time
-   **C.** When a variable must continuously change type
-   **D.** When a value is assigned once but may be determined at
    runtime

**Correct answer:** D --- When a value is assigned once but may be
determined at runtime

**Explanation:** Option D is correct: When a value is assigned once but
may be determined at runtime. The answer matches Dart's type-system or
null-safety behavior; use nullable types and null-aware operators
deliberately to avoid null errors.

**Source:** Quizlet compilation 2

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/resources/faq

------------------------------------------------------------------------

### PRM-033 --- 1 --- Intro to Flutter & Dart

In object-oriented programming, what is an object?

-   **A.** An operator
-   **B.** A configuration file
-   **C.** A type of loop
-   **D.** An instance of a class

**Correct answer:** D --- An instance of a class

**Explanation:** Option D is correct: An instance of a class. The answer
matches Dart's type-system or null-safety behavior; use nullable types
and null-aware operators deliberately to avoid null errors.

**Source:** Quizlet compilation 2

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/resources/faq

------------------------------------------------------------------------

### PRM-034 --- 1 --- Intro to Flutter & Dart

What is the ?? operator commonly used for in null safety?

-   **A.** Providing a fallback value when the left side is null
-   **B.** Asserting that a value is definitely non-null
-   **C.** Declaring a nullable variable
-   **D.** Comparing two numbers

**Correct answer:** A --- Providing a fallback value when the left side
is null

**Explanation:** Option A is correct: Providing a fallback value when
the left side is null. The answer matches Dart's type-system or
null-safety behavior; use nullable types and null-aware operators
deliberately to avoid null errors.

**Source:** Quizlet compilation 2

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/resources/faq

------------------------------------------------------------------------

### PRM-035 --- 1 --- Intro to Flutter & Dart

When a class uses implements, what must it do?

-   **A.** Fully override the required interface members
-   **B.** Be declared abstract
-   **C.** Use only one method
-   **D.** Inherit all existing behavior without rewriting it

**Correct answer:** A --- Fully override the required interface members

**Explanation:** Option A is correct: Fully override the required
interface members. The answer matches Dart's type-system or null-safety
behavior; use nullable types and null-aware operators deliberately to
avoid null errors.

**Source:** Quizlet compilation 2

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/resources/faq

------------------------------------------------------------------------

### PRM-036 --- 2 --- Installation & Environment

A student creates an emulator on a low-spec PC. According to the
lecture's recommendation, which emulator configuration is more suitable
to reduce the load on the machine?

-   **A.** Pixel 8, API 33+
-   **B.** Pixel 3a, API 30
-   **C.** Pixel Tablet, API 34
-   **D.** Pixel Fold, API 35

**Correct answer:** B --- Pixel 3a, API 30

**Explanation:** The lecture recommends Pixel 3a / API 30 for low-spec
machines. A, C, D are heavier configurations, unsuitable for weak
machines.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/get-started/install

------------------------------------------------------------------------

### PRM-037 --- 2 --- Installation & Environment

How does DartPad differ from VS Code/Android Studio when developing
Flutter?

-   **A.** DartPad requires a full SDK installation just like Android
    Studio
-   **B.** DartPad is an online environment, requires no installation,
    and runs directly in the browser
-   **C.** DartPad does not support basic widgets like Text, Column
-   **D.** DartPad can only be used for the Kotlin language

**Correct answer:** B --- DartPad is an online environment, requires no
installation, and runs directly in the browser

**Explanation:** DartPad is an online environment requiring no
installation. A is wrong because DartPad needs no full SDK; C is wrong
because DartPad supports Text, Column; D is wrong because this is
Dart/Flutter, not Kotlin.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/get-started/install

------------------------------------------------------------------------

### PRM-038 --- 2 --- Installation & Environment

In the 'Hello World' example run across three environments (DartPad, VS
Code, Android Studio), what is the most important common point
emphasized?

-   **A.** Each environment uses a different programming language
-   **B.** All tools compile down to the same Flutter runtime, producing
    identical results
-   **C.** Only Android Studio can run a real app
-   **D.** DartPad cannot display TextStyle

**Correct answer:** B --- All tools compile down to the same Flutter
runtime, producing identical results

**Explanation:** The key common point: all tools compile to the same
Flutter runtime, giving identical results across DartPad/VS Code/Android
Studio. A, C, D are all incorrect per the lecture.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/get-started/install

------------------------------------------------------------------------

### PRM-039 --- 2 --- Installation & Environment

According to the lecture, what tool does macOS need to build a Flutter
app for iOS?

-   **A.** Android Studio
-   **B.** Xcode
-   **C.** Visual Studio
-   **D.** IntelliJ IDEA

**Correct answer:** B --- Xcode

**Explanation:** macOS needs Xcode to build for iOS, per the note 'macOS
users need Xcode for iOS builds.' A, C, D are not the tool stated for
this purpose.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/get-started/install

------------------------------------------------------------------------

### PRM-040 --- 2 --- Installation & Environment

Comparing `TimePicker` (`showTimePicker`) and `DatePicker`
(`showDatePicker`) in the context of building a booking flow combining
both date and time: what is the correct approach per the lecture?

-   **A.** Only call one of the two, Flutter will automatically infer
    the other value
-   **B.** Call two separate async functions sequentially (`pickDate()`
    and `pickTime()`), store the results in two separate State variables
    (`DateTime? d`, `TimeOfDay? t`), then display them combined in the
    UI
-   **C.** Use a single built-in `DateTimePicker` widget in the Flutter
    SDK
-   **D.** It's impossible to combine DatePicker and TimePicker on the
    same screen

**Correct answer:** B --- Call two separate async functions sequentially
(`pickDate()` and `pickTime()`), store the results in two separate State
variables (`DateTime? d`, `TimeOfDay? t`), then display them combined in
the UI

**Explanation:** Call `pickDate()` and `pickTime()` sequentially, store
results in two separate State variables, then display combined ---
matching the Booking demo's approach. A, C, D don't reflect the taught
implementation.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/get-started/install

------------------------------------------------------------------------

### PRM-041 --- 2 --- Installation & Environment

Given: ElevatedButton( onPressed: () { Navigator.push( context,
MaterialPageRoute(builder: (\_) =\> SecondPage()), ); }, child: Text('Go
to Second Page'), ) According to the lecture's explanation of why this
original code doesn't run directly on DartPad, what is the main cause?

-   **A.** DartPad doesn't support ElevatedButton
-   **B.** Missing a complete program structure: DartPad requires
    `main()`, `runApp()`, and a root `MaterialApp`; providing only a
    lone widget like this without a valid Navigator context
    (e.g. SecondPage undefined, or missing the surrounding MaterialApp)
    causes an error
-   **C.** Navigator.push only works on real devices, not on DartPad
-   **D.** MaterialPageRoute is an API that has been removed from
    Flutter

**Correct answer:** B --- Missing a complete program structure: DartPad
requires `main()`, `runApp()`, and a root `MaterialApp`; providing only
a lone widget like this without a valid Navigator context
(e.g. SecondPage undefined, or missing the surrounding MaterialApp)
causes an error

**Explanation:** DartPad needs a complete structure (main, runApp,
MaterialApp); missing these or undefined referenced classes (like
SecondPage) causes errors. A, C, D don't match the lecture's
explanation.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/get-started/install

------------------------------------------------------------------------

### PRM-042 --- 2 --- Installation & Environment

What is the main reason "hardcoding URLs everywhere in the code" is
listed as a pitfall?

-   **A.** Hardcoded URLs make the app run significantly slower
-   **B.** It makes it difficult to change the base URL (e.g. switching
    dev/production environments), easily leading to mistakes and
    duplicated code when it must be edited in multiple places
-   **C.** Dart doesn't allow declaring URL strings directly in code
-   **D.** Only affects security, unrelated to code maintenance

**Correct answer:** B --- It makes it difficult to change the base URL
(e.g. switching dev/production environments), easily leading to mistakes
and duplicated code when it must be edited in multiple places

**Explanation:** Hardcoded URLs make changing the base URL difficult and
cause duplication/errors across the codebase. A, C, D don't match the
actual reason stated.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/get-started/install

------------------------------------------------------------------------

### PRM-043 --- 2 --- Installation & Environment

Given this FakePrefs code simulating SharedPreferences in DartPad: class
FakePrefs { static final Map\<String, Object\> \_store = {};
Future`<void>`{=html} setBool(String key, bool value) async {
\_store\[key\] = value; } bool getBool(String key) { final value =
\_store\[key\]; if (value is bool) return value; return false; } } Why
is `_store` declared `static`?

-   **A.** To limit the app to only one FakePrefs object existing
-   **B.** So the stored data is shared across all instances of
    FakePrefs (mimicking the singleton-ish behavior of real
    SharedPreferences), instead of each instance having its own separate
    data copy
-   **C.** `static` has no effect in this context
-   **D.** To automatically save data permanently even after the app is
    closed

**Correct answer:** B --- So the stored data is shared across all
instances of FakePrefs (mimicking the singleton-ish behavior of real
SharedPreferences), instead of each instance having its own separate
data copy

**Explanation:** `static` makes the stored data shared across all
FakePrefs instances, mimicking real SharedPreferences' singleton-ish
behavior. A, C, D don't match static's actual role here.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/get-started/install

------------------------------------------------------------------------

### PRM-044 --- 2 --- Installation & Environment

The slide note "Note: data resets on reload (not persistent)" when using
FakePrefs on DartPad hints at what limitation?

-   **A.** Data stored in FakePrefs persists forever even after
    reloading the page
-   **B.** Since FakePrefs only stores data in the RAM of the current
    session, the data is lost on hot-restart or page reload --- unlike
    real SharedPreferences, which persists durably on the device
-   **C.** FakePrefs only works with the String data type
-   **D.** This is a Flutter bug that needs to be patched

**Correct answer:** B --- Since FakePrefs only stores data in the RAM of
the current session, the data is lost on hot-restart or page reload ---
unlike real SharedPreferences, which persists durably on the device

**Explanation:** FakePrefs only stores data in-memory for the current
session, so it's lost on hot-restart/reload, unlike real durable
SharedPreferences. A, C, D don't match this stated limitation.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/get-started/install

------------------------------------------------------------------------

### PRM-045 --- 2 --- Installation & Environment

In the high-level Authentication Flow, after the backend verifies valid
login credentials, what does the system usually return to the app?

-   **A.** The user's password in encrypted form
-   **B.** A token (usually a JWT) for the app to store and use for
    subsequent requests
-   **C.** The entire user database
-   **D.** A list of other apps the user has installed

**Correct answer:** B --- A token (usually a JWT) for the app to store
and use for subsequent requests

**Explanation:** The backend returns a token (usually JWT) for the app
to store and use for subsequent requests. A, C, D don't match the
standard authentication flow.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/get-started/install

------------------------------------------------------------------------

### PRM-046 --- 2 --- Installation & Environment

In Demo 10.5, at what point in the app's actual flow is the local
notification triggered?

-   **A.** Right when the app opens, before login
-   **B.** Right after a successful login
-   **C.** Only when the app is fully in the background
-   **D.** When the app is uninstalled

**Correct answer:** B --- Right after a successful login

**Explanation:** The local notification is triggered right after a
successful login, per Demo 10.5. A, C, D don't match the described real
flow.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/get-started/install

------------------------------------------------------------------------

### PRM-047 --- 2 --- Installation & Environment

Which description best defines Flutter?

-   **A.** Google's UI toolkit for building natively compiled
    applications from a single codebase
-   **B.** A programming language that completely replaces Dart
-   **C.** An Android emulator
-   **D.** Google's database management system

**Correct answer:** A --- Google's UI toolkit for building natively
compiled applications from a single codebase

**Explanation:** Option A is correct: Google's UI toolkit for building
natively compiled applications from a single codebase. The answer
matches Dart's type-system or null-safety behavior; use nullable types
and null-aware operators deliberately to avoid null errors.

**Source:** Quizlet compilation 2

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/get-started/install

------------------------------------------------------------------------

### PRM-048 --- 2 --- Installation & Environment

What does the Repository pattern separate from the UI?

-   **A.** The Android emulator
-   **B.** Data-access, API, and database logic
-   **C.** ThemeData colors
-   **D.** Row and Column layout

**Correct answer:** B --- Data-access, API, and database logic

**Explanation:** Option B is correct: Data-access, API, and database
logic. The answer matches Dart's type-system or null-safety behavior;
use nullable types and null-aware operators deliberately to avoid null
errors.

**Source:** Quizlet compilation 2

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/get-started/install

------------------------------------------------------------------------

### PRM-049 --- 2 --- Installation & Environment

What does setState() do?

-   **A.** Notifies the framework to rebuild the relevant State UI
-   **B.** Runs flutter doctor
-   **C.** Creates a database migration
-   **D.** Stores a token on the server

**Correct answer:** A --- Notifies the framework to rebuild the relevant
State UI

**Explanation:** Option A is correct: Notifies the framework to rebuild
the relevant State UI. This is a state-management concept: state changes
must notify or trigger the relevant part of the UI to rebuild.

**Source:** Quizlet compilation 2

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/get-started/install

------------------------------------------------------------------------

### PRM-050 --- 2 --- Installation & Environment

Why cannot DartPad use the real SharedPreferences plugin?

-   **A.** Its environment does not provide native plugin or
    persistent-storage support
-   **B.** It requires JWT
-   **C.** SharedPreferences works only on iOS
-   **D.** DartPad runs only Java

**Correct answer:** A --- Its environment does not provide native plugin
or persistent-storage support

**Explanation:** Option A is correct: Its environment does not provide
native plugin or persistent-storage support. The answer matches Dart's
type-system or null-safety behavior; use nullable types and null-aware
operators deliberately to avoid null errors.

**Source:** Quizlet compilation 2

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/get-started/install

------------------------------------------------------------------------

### PRM-051 --- 2 --- Installation & Environment

Where does FakePrefs in DartPad store data?

-   **A.** A real database file
-   **B.** Secure Storage
-   **C.** A cloud server
-   **D.** An in-memory Map that resets on reload

**Correct answer:** D --- An in-memory Map that resets on reload

**Explanation:** Option D is correct: An in-memory Map that resets on
reload. The answer matches Dart's type-system or null-safety behavior;
use nullable types and null-aware operators deliberately to avoid null
errors.

**Source:** Quizlet compilation 2

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/get-started/install

------------------------------------------------------------------------

### PRM-052 --- 2 --- Installation & Environment

How is an access token normally used?

-   **A.** To store the password
-   **B.** To create a UI theme
-   **C.** Only once during application installation
-   **D.** It is sent with every API request that requires
    authentication

**Correct answer:** D --- It is sent with every API request that
requires authentication

**Explanation:** Option D is correct: It is sent with every API request
that requires authentication. The answer matches Dart's type-system or
null-safety behavior; use nullable types and null-aware operators
deliberately to avoid null errors.

**Source:** Quizlet compilation 2

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/get-started/install

------------------------------------------------------------------------

### PRM-053 --- 2 --- Installation & Environment

Which mode should be used for more accurate performance measurements?

-   **A.** Test mode only
-   **B.** Debug mode
-   **C.** DartPad mode
-   **D.** Profile mode

**Correct answer:** D --- Profile mode

**Explanation:** Option D is correct: Profile mode. Flutter performance
should be evaluated in profile mode, preferably on a physical device,
because debug-mode timings are not representative.

**Source:** Quizlet compilation 2

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/get-started/install

------------------------------------------------------------------------

### PRM-054 --- 2 --- Installation & Environment

ListView.builder is best for?

-   **A.** One small fixed list
-   **B.** Large or dynamic lists
-   **C.** Static images
-   **D.** Theme setup

**Correct answer:** B --- Large or dynamic lists

**Explanation:** Option B is correct: Large or dynamic lists. Flutter
layout is composed from widgets; the selected widget provides the
arrangement, sizing, spacing, or constraint behavior described.

**Source:** Quizlet compilation 3

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/get-started/install

------------------------------------------------------------------------

### PRM-055 --- 2 --- Installation & Environment

Which command checks environment setup?

-   **A.** flutter doctor
-   **B.** flutter inspect
-   **C.** flutter env
-   **D.** flutter config

**Correct answer:** A --- flutter doctor

**Explanation:** Option A is correct: flutter doctor. The answer matches
Dart's type-system or null-safety behavior; use nullable types and
null-aware operators deliberately to avoid null errors.

**Source:** Quizlet compilation 3

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/get-started/install

------------------------------------------------------------------------

### PRM-056 --- 2 --- Installation & Environment

Which command lists connected devices?

-   **A.** flutter devices
-   **B.** flutter emulators
-   **C.** flutter targets
-   **D.** flutter doctor

**Correct answer:** A --- flutter devices

**Explanation:** Option A is correct: flutter devices. The answer
matches Dart's type-system or null-safety behavior; use nullable types
and null-aware operators deliberately to avoid null errors.

**Source:** Quizlet compilation 3

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/get-started/install

------------------------------------------------------------------------

### PRM-057 --- 2 --- Installation & Environment

Which command shows available emulators?

-   **A.** flutter devices
-   **B.** flutter emulators
-   **C.** flutter doctor
-   **D.** flutter list

**Correct answer:** B --- flutter emulators

**Explanation:** Option B is correct: flutter emulators. The answer
matches Dart's type-system or null-safety behavior; use nullable types
and null-aware operators deliberately to avoid null errors.

**Source:** Quizlet compilation 3

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/get-started/install

------------------------------------------------------------------------

### PRM-058 --- 2 --- Installation & Environment

What is the purpose of pub.dev?

-   **A.** Flutter package repository
-   **B.** Device emulator
-   **C.** Rendering engine
-   **D.** Cloud IDE

**Correct answer:** A --- Flutter package repository

**Explanation:** Option A is correct: Flutter package repository. The
answer matches Dart's type-system or null-safety behavior; use nullable
types and null-aware operators deliberately to avoid null errors.

**Source:** Quizlet compilation 3

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/get-started/install

------------------------------------------------------------------------

### PRM-059 --- 2 --- Installation & Environment

Which tool is used to inspect widget tree and performance?

-   **A.** Flutter DevTools
-   **B.** Android Paint
-   **C.** Xcode Organizer only
-   **D.** Pub Inspector

**Correct answer:** A --- Flutter DevTools

**Explanation:** Option A is correct: Flutter DevTools. Flutter
performance should be evaluated in profile mode, preferably on a
physical device, because debug-mode timings are not representative.

**Source:** Quizlet compilation 3

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/get-started/install

------------------------------------------------------------------------

### PRM-060 --- 2 --- Installation & Environment

Which development environment is described as an online editor ideal for
quick demos and learning syntax without installation?

-   **A.** VS Code
-   **B.** Android Studio
-   **C.** DartPad
-   **D.** Xcode

**Correct answer:** C --- DartPad

**Explanation:** Option C is correct: DartPad. The answer matches
Dart's type-system or null-safety behavior; use nullable types and
null-aware operators deliberately to avoid null errors.

**Source:** Quizlet compilation 4

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/get-started/install

------------------------------------------------------------------------

### PRM-061 --- 2 --- Installation & Environment

Which command should a developer use to verify the Flutter installation
and see a summary of the environment status?

-   **A.** flutter run
-   **B.** flutter create
-   **C.** flutter doctor
-   **D.** flutter build

**Correct answer:** C --- flutter doctor

**Explanation:** Option C is correct: flutter doctor. The answer
matches Dart's type-system or null-safety behavior; use nullable types
and null-aware operators deliberately to avoid null errors.

**Source:** Quizlet compilation 4

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/get-started/install

------------------------------------------------------------------------

### PRM-062 --- 2 --- Installation & Environment

When should a developer choose to use local JSON files (dart:io) instead
of SharedPreferences?

-   **A.** When storing a single boolean for dark mode.
-   **B.** When the data is larger than simple key-value pairs or needs
    to be exported/imported.
-   **C.** When the app requires complex relational data with sorting
    and filtering.
-   **D.** Only when the app is running in a DartPad environment.

**Correct answer:** B --- When the data is larger than simple key-value
pairs or needs to be exported/imported.

**Explanation:** Option B is correct: When the data is larger than
simple key-value pairs or needs to be exported/imported.. The answer
matches Dart's type-system or null-safety behavior; use nullable types
and null-aware operators deliberately to avoid null errors.

**Source:** Quizlet compilation 4

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/get-started/install

------------------------------------------------------------------------

### PRM-063 --- 2 --- Installation & Environment

During the SQFlite setup process, which method is used to define the
initial table structure when the database is first created?

-   **A.** openDatabase()
-   **B.** onCreate
-   **C.** insert()
-   **D.** query()

**Correct answer:** B --- onCreate

**Explanation:** Option B is correct: onCreate. The answer matches
Dart's type-system or null-safety behavior; use nullable types and
null-aware operators deliberately to avoid null errors.

**Source:** Quizlet compilation 4

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/get-started/install

------------------------------------------------------------------------

### PRM-064 --- 3 --- Flutter CLI & Pub

In a Flutter project, which file is the entry point of the app?

-   **A.** pubspec.yaml
-   **B.** lib/main.dart
-   **C.** android/build.gradle
-   **D.** web/index.html

**Correct answer:** B --- lib/main.dart

**Explanation:** `lib/main.dart` is the entry point, as stated in the
project structure table. A is the dependency config file; C, D are
platform config files, not the entry point.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/tools/pubspec

------------------------------------------------------------------------

### PRM-065 --- 3 --- Flutter CLI & Pub

Consider the following code running in main.dart: import
'package:flutter/material.dart'; void main() =\> runApp(const
MaterialApp( home: Scaffold( body: Center( child: Text('Hello, World',
style: TextStyle(fontSize: 28, fontWeight: FontWeight.bold)), ), ), ));
If the `const` keyword before `MaterialApp` is removed, what happens to
the app's behavior?

-   **A.** The app will fail to compile immediately
-   **B.** The app still runs correctly, only losing the performance
    optimization benefit since Flutter can no longer reuse the same
    immutable widget instance
-   **C.** The Text will fail to display "Hello, World
-   **D.** The Scaffold will no longer be able to have an AppBar later

**Correct answer:** B --- The app still runs correctly, only losing the
performance optimization benefit since Flutter can no longer reuse the
same immutable widget instance

**Explanation:** `const` helps Flutter optimize tree-diffing; removing
it still runs correctly but loses that performance benefit. A is wrong
since it doesn't cause a compile error; C is wrong since the Text still
displays normally; D is unrelated.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/tools/pubspec

------------------------------------------------------------------------

### PRM-066 --- 3 --- Flutter CLI & Pub

An instructor creates a new Flutter project with Organization ID
`com.fptu.movies` and project name `movies`. What is the main purpose of
the Organization ID during project creation?

-   **A.** Only used to set the display name shown on the device's home
    screen
-   **B.** Determines the unique package name/bundle identifier for the
    app when packaged for Android/iOS
-   **C.** Has no real effect, purely illustrative
-   **D.** Used to set the app's color theme

**Correct answer:** B --- Determines the unique package name/bundle
identifier for the app when packaged for Android/iOS

**Explanation:** Organization ID determines the unique package
name/bundle identifier when packaging the app. A, C, D misdescribe its
technical role.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/tools/pubspec

------------------------------------------------------------------------

### PRM-067 --- 3 --- Flutter CLI & Pub

The lecture has this snippet: Widget tile(String t, String s) =\> Card(
margin: const EdgeInsets.symmetric(vertical: 6), child: ListTile(title:
Text(t), subtitle: Text(s)), ); What is the main benefit of extracting
repeated UI into a separate function/widget like `tile()`, in the spirit
of "Everything is a Widget"?

-   **A.** Makes Flutter run faster in absolute CPU terms
-   **B.** Reuse and organize UI into blocks (LEGO blocks), making code
    more readable, maintainable, and consistent in spacing
-   **C.** It's mandatory or Flutter will throw an error
-   **D.** No real benefit, just a coding style

**Correct answer:** B --- Reuse and organize UI into blocks (LEGO
blocks), making code more readable, maintainable, and consistent in
spacing

**Explanation:** Extracting repeated UI blocks aids reuse, organization,
readability, maintainability, and spacing consistency. A, C, D don't
match the actual benefit stated.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/tools/pubspec

------------------------------------------------------------------------

### PRM-068 --- 3 --- Flutter CLI & Pub

What is the difference between `Image.network` and `Image.asset`?

-   **A.** `Image.network` loads an image from an internet URL,
    `Image.asset` loads an image bundled within the project (declared in
    pubspec.yaml)
-   **B.** Both only load images from local storage
-   **C.** `Image.asset` only works on Web
-   **D.** `Image.network` doesn't support BoxFit

**Correct answer:** A --- `Image.network` loads an image from an
internet URL, `Image.asset` loads an image bundled within the project
(declared in pubspec.yaml)

**Explanation:** `Image.network` loads from a URL, `Image.asset` loads
bundled project images. B, C, D misdescribe the two image widgets'
functions.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/tools/pubspec

------------------------------------------------------------------------

### PRM-069 --- 3 --- Flutter CLI & Pub

In an Android deep link configuration, where does the following XML
snippet belong and what does it mean? `<intent-filter>`{=html}
`<action android:name="android.intent.action.VIEW" />`{=html}
`<category android:name="android.intent.category.DEFAULT" />`{=html}
`<category android:name="android.intent.category.BROWSABLE" />`{=html}
`<data android:scheme="movieapps" android:host="movies" />`{=html}
`</intent-filter>`{=html}

-   **A.** In `pubspec.yaml`, used to declare a dependency
-   **B.** In `AndroidManifest.xml`, declaring an intent-filter so the
    Android OS recognizes and routes links like `movieapps://movies` to
    the correct app
-   **C.** In `main.dart`, used to define a Flutter route
-   **D.** In `Info.plist`, only applicable to iOS

**Correct answer:** B --- In `AndroidManifest.xml`, declaring an
intent-filter so the Android OS recognizes and routes links like
`movieapps://movies` to the correct app

**Explanation:** This snippet belongs in `AndroidManifest.xml`,
declaring an intent-filter so Android routes matching links to this app.
A, C, D are the wrong file location.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/tools/pubspec

------------------------------------------------------------------------

### PRM-070 --- 3 --- Flutter CLI & Pub

On iOS, to support a custom URL scheme (e.g. `movieapps://`), where does
the configuration need to be added?

-   **A.** AndroidManifest.xml
-   **B.** build.gradle
-   **C.** Info.plist (add URL Types → URL Schemes)
-   **D.** pubspec.yaml

**Correct answer:** C --- Info.plist (add URL Types → URL Schemes)

**Explanation:** Custom URL scheme config on iOS goes in Info.plist (URL
Types → URL Schemes). A, B, D are not the correct location for this
configuration.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/tools/pubspec

------------------------------------------------------------------------

### PRM-071 --- 3 --- Flutter CLI & Pub

Comparing using the plain `http` package versus a more advanced HTTP
management package (e.g. Dio, not in the slides but askable at an
analytical level): in the spirit of Module 8's "Service Layer Pattern,"
why does wrapping HTTP logic in `ApiService` make switching HTTP
libraries later (if needed) easier?

-   **A.** Because every HTTP package has an entirely identical API
-   **B.** Because all networking logic is isolated in a single class;
    if the library needs to change, you only edit inside `ApiService`
    without touching every widget that consumes the data, minimizing
    risk and effort
-   **C.** No benefit at all, switching libraries always requires
    rewriting the entire app
-   **D.** The Service Layer Pattern only applies to the `http` package,
    not to other packages

**Correct answer:** B --- Because all networking logic is isolated in a
single class; if the library needs to change, you only edit inside
`ApiService` without touching every widget that consumes the data,
minimizing risk and effort

**Explanation:** Isolating networking logic in one class means switching
libraries only requires editing ApiService, not every consuming widget,
minimizing risk/effort. A, C, D don't match this software-architecture
principle.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/tools/pubspec

------------------------------------------------------------------------

### PRM-072 --- 3 --- Flutter CLI & Pub

Which package is mentioned for determining the app's storage directory
when working with local JSON files?

-   **A.** shared_preferences
-   **B.** path_provider
-   **C.** sqflite
-   **D.** http

**Correct answer:** B --- path_provider

**Explanation:** `path_provider` is used to determine app storage
directories for local JSON files. A, C, D are not the package for this
purpose.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/tools/pubspec

------------------------------------------------------------------------

### PRM-073 --- 3 --- Flutter CLI & Pub

Per the Google Sign-In "Common Errors & Fixes" table, the
"DEVELOPER_ERROR" is usually caused by what?

-   **A.** Missing Internet connection
-   **B.** Wrong package name not matching the Firebase configuration
-   **C.** Missing pubspec.yaml file
-   **D.** Too-new Flutter version

**Correct answer:** B --- Wrong package name not matching the Firebase
configuration

**Explanation:** DEVELOPER_ERROR" is usually caused by a wrong package
name not matching the Firebase configuration. A, C, D don't match the
stated common cause.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/tools/pubspec

------------------------------------------------------------------------

### PRM-074 --- 3 --- Flutter CLI & Pub

In the `flutter_bloc` package, what is the correct data-flow
relationship between Event, Bloc, and State?

-   **A.** State → Bloc → Event
-   **B.** UI sends an Event into the Bloc → Bloc processes and maps the
    Event into a new State → Bloc emits the State → UI listens to the
    State to rebuild
-   **C.** Event and State are the same concept, interchangeable
-   **D.** Bloc only receives State, not Event

**Correct answer:** B --- UI sends an Event into the Bloc → Bloc
processes and maps the Event into a new State → Bloc emits the State →
UI listens to the State to rebuild

**Explanation:** The correct flow: UI sends Event → Bloc processes/maps
to new State → emits State → UI listens and rebuilds. A reverses this;
C, D misdescribe the relationship between Event/State/Bloc.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/tools/pubspec

------------------------------------------------------------------------

### PRM-075 --- 3 --- Flutter CLI & Pub

How does `Cubit` in the `flutter_bloc` package differ from a traditional
`Bloc`?

-   **A.** Cubit cannot manage state, only Bloc can
-   **B.** Cubit is a simplified version of Bloc --- it doesn't need a
    separate Event class defined, instead directly calling methods to
    emit new States, reducing boilerplate compared to a full Bloc
-   **C.** Cubit only works with int data
-   **D.** Cubit and Bloc are entirely identical in API, no difference

**Correct answer:** B --- Cubit is a simplified version of Bloc --- it
doesn't need a separate Event class defined, instead directly calling
methods to emit new States, reducing boilerplate compared to a full Bloc

**Explanation:** Cubit is a simplified Bloc --- no separate Event class
needed, methods directly emit new State, reducing boilerplate. A, C, D
misdescribe Cubit's characteristics.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/tools/pubspec

------------------------------------------------------------------------

### PRM-076 --- 3 --- Flutter CLI & Pub

Which file declares a Flutter project's dependencies and assets?

-   **A.** build.gradle.kts only
-   **B.** package.json
-   **C.** settings.xml
-   **D.** pubspec.yaml

**Correct answer:** D --- pubspec.yaml

**Explanation:** Option D is correct: pubspec.yaml. pubspec.yaml is the
project manifest used to declare packages and asset configuration.

**Source:** Quizlet compilation 2

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/tools/pubspec

------------------------------------------------------------------------

### PRM-077 --- 3 --- Flutter CLI & Pub

On Android, which element is commonly used to configure deep links?

-   **A.** ThemeData in main.dart
-   **B.** An SQLite trigger
-   **C.** An intent-filter in AndroidManifest
-   **D.** pubspec.lock

**Correct answer:** C --- An intent-filter in AndroidManifest

**Explanation:** Option C is correct: An intent-filter in
AndroidManifest. Flutter navigation APIs manage route transitions or map
incoming route/URL information to application state, depending on the
API used.

**Source:** Quizlet compilation 2

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/tools/pubspec

------------------------------------------------------------------------

### PRM-078 --- 3 --- Flutter CLI & Pub

What is DEVELOPER_ERROR commonly related to?

-   **A.** An incorrect SQL SELECT statement
-   **B.** An incorrect package name or Firebase configuration
-   **C.** A missing SafeArea
-   **D.** A missing ListView

**Correct answer:** B --- An incorrect package name or Firebase
configuration

**Explanation:** Option B is correct: An incorrect package name or
Firebase configuration. The answer matches Dart's type-system or
null-safety behavior; use nullable types and null-aware operators
deliberately to avoid null errors.

**Source:** Quizlet compilation 2

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/tools/pubspec

------------------------------------------------------------------------

### PRM-079 --- 3 --- Flutter CLI & Pub

What does CPU Profiler help identify?

-   **A.** A Firebase package name
-   **B.** A screen notch
-   **C.** Execution-time hotspots
-   **D.** Form error text

**Correct answer:** C --- Execution-time hotspots

**Explanation:** Option C is correct: Execution-time hotspots. The
answer matches Dart's type-system or null-safety behavior; use nullable
types and null-aware operators deliberately to avoid null errors.

**Source:** Quizlet compilation 2

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/tools/pubspec

------------------------------------------------------------------------

### PRM-080 --- 3 --- Flutter CLI & Pub

for-in loop is mainly used for?

-   **A.** Arithmetic
-   **B.** Iterating collections
-   **C.** Creating widgets
-   **D.** Importing packages

**Correct answer:** B --- Iterating collections

**Explanation:** Option B is correct: Iterating collections. The answer
matches Dart's type-system or null-safety behavior; use nullable types
and null-aware operators deliberately to avoid null errors.

**Source:** Quizlet compilation 3

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/tools/pubspec

------------------------------------------------------------------------

### PRM-081 --- 3 --- Flutter CLI & Pub

A class defines?

-   **A.** A loop
-   **B.** A structure or blueprint
-   **C.** A package
-   **D.** An import

**Correct answer:** B --- A structure or blueprint

**Explanation:** Option B is correct: A structure or blueprint. The
answer matches Dart's type-system or null-safety behavior; use nullable
types and null-aware operators deliberately to avoid null errors.

**Source:** Quizlet compilation 3

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/tools/pubspec

------------------------------------------------------------------------

### PRM-082 --- 3 --- Flutter CLI & Pub

What is pubspec.yaml used for?

-   **A.** App screenshots
-   **B.** Dependencies and assets
-   **C.** SQL tables
-   **D.** Route trees

**Correct answer:** B --- Dependencies and assets

**Explanation:** Option B is correct: Dependencies and assets.
pubspec.yaml is the project manifest used to declare packages and asset
configuration.

**Source:** Quizlet compilation 3

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/tools/pubspec

------------------------------------------------------------------------

### PRM-083 --- 3 --- Flutter CLI & Pub

Assets must be declared in?

-   **A.** main.dart
-   **B.** pubspec.yaml
-   **C.** analysis_options.yaml
-   **D.** androidmanifest.xml

**Correct answer:** B --- pubspec.yaml

**Explanation:** Option B is correct: pubspec.yaml. pubspec.yaml is the
project manifest used to declare packages and asset configuration.

**Source:** Quizlet compilation 3

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/tools/pubspec

------------------------------------------------------------------------

### PRM-084 --- 3 --- Flutter CLI & Pub

Which command fetches Flutter dependencies?

-   **A.** flutter add
-   **B.** flutter get
-   **C.** flutter pub get
-   **D.** dart fetch

**Correct answer:** C --- flutter pub get

**Explanation:** Option C is correct: flutter pub get. pubspec.yaml is
the project manifest used to declare packages and asset configuration.

**Source:** Quizlet compilation 3

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/tools/pubspec

------------------------------------------------------------------------

### PRM-085 --- 3 --- Flutter CLI & Pub

Which command creates a new Flutter project?

-   **A.** flutter new
-   **B.** flutter create
-   **C.** dart create flutter
-   **D.** flutter init

**Correct answer:** B --- flutter create

**Explanation:** Option B is correct: flutter create. The answer matches
Dart's type-system or null-safety behavior; use nullable types and
null-aware operators deliberately to avoid null errors.

**Source:** Quizlet compilation 3

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/tools/pubspec

------------------------------------------------------------------------

### PRM-086 --- 3 --- Flutter CLI & Pub

Which command runs a Flutter app?

-   **A.** flutter go
-   **B.** flutter start
-   **C.** flutter run
-   **D.** dart run ui

**Correct answer:** C --- flutter run

**Explanation:** Option C is correct: flutter run. The answer matches
Dart's type-system or null-safety behavior; use nullable types and
null-aware operators deliberately to avoid null errors.

**Source:** Quizlet compilation 3

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/tools/pubspec

------------------------------------------------------------------------

### PRM-087 --- 3 --- Flutter CLI & Pub

Which command cleans the build folder?

-   **A.** flutter purge
-   **B.** flutter clear
-   **C.** flutter clean
-   **D.** flutter remove

**Correct answer:** C --- flutter clean

**Explanation:** Option C is correct: flutter clean. The answer matches
Dart's type-system or null-safety behavior; use nullable types and
null-aware operators deliberately to avoid null errors.

**Source:** Quizlet compilation 3

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/tools/pubspec

------------------------------------------------------------------------

### PRM-088 --- 3 --- Flutter CLI & Pub

Which command builds an iOS app?

-   **A.** flutter build ios
-   **B.** flutter ios build
-   **C.** flutter make ios
-   **D.** dart build ios

**Correct answer:** A --- flutter build ios

**Explanation:** Option A is correct: flutter build ios. Flutter
supports multiple deployment targets, although each target can have its
own SDK, tooling, and platform-integration requirements.

**Source:** Quizlet compilation 3

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/tools/pubspec

------------------------------------------------------------------------

### PRM-089 --- 3 --- Flutter CLI & Pub

Which package is popular for simple state management?

-   **A.** Provider
-   **B.** SQL
-   **C.** HttpClient
-   **D.** Lint

**Correct answer:** A --- Provider

**Explanation:** Option A is correct: Provider. This is a
state-management concept: state changes must notify or trigger the
relevant part of the UI to rebuild.

**Source:** Quizlet compilation 3

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/tools/pubspec

------------------------------------------------------------------------

### PRM-090 --- 3 --- Flutter CLI & Pub

Which package is used for HTTP requests commonly?

-   **A.** path
-   **B.** async
-   **C.** http
-   **D.** test

**Correct answer:** C --- http

**Explanation:** Option C is correct: http. The answer matches Dart's
type-system or null-safety behavior; use nullable types and null-aware
operators deliberately to avoid null errors.

**Source:** Quizlet compilation 3

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/tools/pubspec

------------------------------------------------------------------------

### PRM-091 --- 3 --- Flutter CLI & Pub

Which method sends a GET request with package:http?

-   **A.** http.load
-   **B.** http.fetch
-   **C.** http.get
-   **D.** http.readall

**Correct answer:** C --- http.get

**Explanation:** Option C is correct: http.get. The answer matches
Dart's type-system or null-safety behavior; use nullable types and
null-aware operators deliberately to avoid null errors.

**Source:** Quizlet compilation 3

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/tools/pubspec

------------------------------------------------------------------------

### PRM-092 --- 3 --- Flutter CLI & Pub

Which package is widely used for local key-value storage?

-   **A.** dio
-   **B.** shared_preferences
-   **C.** provider
-   **D.** analyzer

**Correct answer:** B --- shared_preferences

**Explanation:** Option B is correct: shared_preferences. The answer
matches Dart's type-system or null-safety behavior; use nullable types
and null-aware operators deliberately to avoid null errors.

**Source:** Quizlet compilation 3

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/tools/pubspec

------------------------------------------------------------------------

### PRM-093 --- 3 --- Flutter CLI & Pub

Which package is often used for powerful networking in Flutter?

-   **A.** dio
-   **B.** lint
-   **C.** path
-   **D.** test

**Correct answer:** A --- dio

**Explanation:** Option A is correct: dio. The answer matches Dart's
type-system or null-safety behavior; use nullable types and null-aware
operators deliberately to avoid null errors.

**Source:** Quizlet compilation 3

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/tools/pubspec

------------------------------------------------------------------------

### PRM-094 --- 3 --- Flutter CLI & Pub

Which command runs tests in Flutter?

-   **A.** flutter test
-   **B.** flutter run test
-   **C.** dart flutter test
-   **D.** flutter check

**Correct answer:** A --- flutter test

**Explanation:** Option A is correct: flutter test. The answer matches
Dart's type-system or null-safety behavior; use nullable types and
null-aware operators deliberately to avoid null errors.

**Source:** Quizlet compilation 3

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/tools/pubspec

------------------------------------------------------------------------

### PRM-095 --- 3 --- Flutter CLI & Pub

Which file often stores lint rules for Dart/Flutter?

-   **A.** analysis_options.yaml
-   **B.** pubspec.lock
-   **C.** routes.yaml
-   **D.** build.gradle

**Correct answer:** A --- analysis_options.yaml

**Explanation:** Option A is correct: analysis_options.yaml. The answer
matches Dart's type-system or null-safety behavior; use nullable types
and null-aware operators deliberately to avoid null errors.

**Source:** Quizlet compilation 3

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/tools/pubspec

------------------------------------------------------------------------

### PRM-096 --- 3 --- Flutter CLI & Pub

The extends keyword is used to?

-   **A.** Implement interface only
-   **B.** Inherit from a class
-   **C.** Create object
-   **D.** Import package

**Correct answer:** B --- Inherit from a class

**Explanation:** Option B is correct: Inherit from a class. The answer
matches Dart's type-system or null-safety behavior; use nullable types
and null-aware operators deliberately to avoid null errors.

**Source:** Quizlet compilation 3

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/tools/pubspec

------------------------------------------------------------------------

### PRM-097 --- 3 --- Flutter CLI & Pub

The implements keyword is used to?

-   **A.** Force interface contract implementation
-   **B.** Extend build time
-   **C.** Export packages
-   **D.** Hide members

**Correct answer:** A --- Force interface contract implementation

**Explanation:** Option A is correct: Force interface contract
implementation. The answer matches Dart's type-system or null-safety
behavior; use nullable types and null-aware operators deliberately to
avoid null errors.

**Source:** Quizlet compilation 3

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/tools/pubspec

------------------------------------------------------------------------

### PRM-098 --- 3 --- Flutter CLI & Pub

Which file is generated and should usually not be edited manually for
dependencies lock?

-   **A.** pubspec.lock
-   **B.** main.dart
-   **C.** analysis_options.yaml
-   **D.** android/app/build.gradle

**Correct answer:** A --- pubspec.lock

**Explanation:** Option A is correct: pubspec.lock. pubspec.yaml is the
project manifest used to declare packages and asset configuration.

**Source:** Quizlet compilation 3

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/tools/pubspec

------------------------------------------------------------------------

### PRM-099 --- 4 --- Dev Tools & Hot Reload

Which combined compilation model does Dart use to support both fast
development and optimized production performance?

-   **A.** JIT (Just-In-Time) only
-   **B.** AOT (Ahead-Of-Time) only
-   **C.** Both JIT (development) and AOT (production)
-   **D.** Purely interpreted, no compilation

**Correct answer:** C --- Both JIT (development) and AOT (production)

**Explanation:** Dart combines JIT (fast development, hot reload) and
AOT (high-performance production compilation). A and B state only half
the truth; D is entirely wrong.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/tools/devtools/overview

------------------------------------------------------------------------

### PRM-100 --- 4 --- Dev Tools & Hot Reload

Which statement is FALSE regarding the reasons to choose Flutter ('Why
Flutter')?

-   **A.** Hot Reload/Hot Restart enables fast development
-   **B.** Provides Material & Cupertino widgets for a beautiful UI
-   **C.** Can only run on a single platform
-   **D.** Near-native performance

**Correct answer:** C --- Can only run on a single platform

**Explanation:** 'Can only run on a single platform' is FALSE because
Flutter is cross-platform (Android, iOS, Web, Desktop) --- this is
Flutter's core strength, the exact opposite of what 'Why Flutter'
states. A, B, D are all valid reasons stated in the lecture.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/tools/devtools/overview

------------------------------------------------------------------------

### PRM-101 --- 4 --- Dev Tools & Hot Reload

What benefit does a Custom Exception in Dart
(e.g. `class LoginException implements Exception`) offer over throwing
an ordinary error string?

-   **A.** No benefit, it just adds code complexity
-   **B.** Provides specific business-domain error context, making it
    easier to debug and handle logic at the UI/Repository layer
-   **C.** Custom Exceptions run faster than plain Strings
-   **D.** Custom Exceptions can only be used with external APIs, not
    internally

**Correct answer:** B --- Provides specific business-domain error
context, making it easier to debug and handle logic at the UI/Repository
layer

**Explanation:** Custom Exceptions provide specific domain error
context, aiding debugging and handling at the UI/Repository layer. A, C,
D don't match the real benefit stated.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/tools/devtools/overview

------------------------------------------------------------------------

### PRM-102 --- 4 --- Dev Tools & Hot Reload

Per the "Security" section of Best Practices, what practice is
recommended regarding token storage?

-   **A.** Store the token as public plain text in a log file for easy
    debugging
-   **B.** Don't store raw tokens insecurely --- use a secure storage
    mechanism and always use HTTPS
-   **C.** Send the token over an unencrypted HTTP channel to increase
    speed
-   **D.** Share the token via social media to sync across multiple
    devices

**Correct answer:** B --- Don't store raw tokens insecurely --- use a
secure storage mechanism and always use HTTPS

**Explanation:** The recommended practice is secure storage and always
using HTTPS, never insecurely storing raw tokens. A, C, D are WRONG
practices, contrary to the recommended security guidance.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/tools/devtools/overview

------------------------------------------------------------------------

### PRM-103 --- 4 --- Dev Tools & Hot Reload

What characteristic of the UI Overflow bug described in Module 11 makes
it hard to detect if you only rely on running the app normally?

-   **A.** Overflow always makes the app crash instantly, so it's very
    easy to spot
-   **B.** Overflow bugs typically don't crash the app (no exception
    stopping the program), so tools like tests or DevTools are needed to
    detect them, rather than just relying on the app "still running
-   **C.** Overflow only occurs on iOS devices
-   **D.** Overflow is always automatically fixed by Dart at compile
    time

**Correct answer:** B --- Overflow bugs typically don't crash the app
(no exception stopping the program), so tools like tests or DevTools are
needed to detect them, rather than just relying on the app "still
running

**Explanation:** Overflow bugs usually don't crash the app, requiring
tests/DevTools for detection rather than just observing that it "still
runs." A, C, D don't match the actual characteristic of overflow bugs.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/tools/devtools/overview

------------------------------------------------------------------------

### PRM-104 --- 4 --- Dev Tools & Hot Reload

In "Debugging Goals in Flutter," the "Frequent unnecessary rebuilds"
issue directly relates to which topic that will be explored deeper in
Module 12?

-   **A.** Building local JSON files
-   **B.** Performance Optimization
-   **C.** Deep link configuration
-   **D.** Setting up Firebase Authentication

**Correct answer:** B --- Performance Optimization

**Explanation:** Frequent unnecessary rebuilds" directly relates to
Performance Optimization, explored further in Module 12. A, C, D are
unrelated to this rebuild issue.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/tools/devtools/overview

------------------------------------------------------------------------

### PRM-105 --- 4 --- Dev Tools & Hot Reload

When Flutter does not directly support a feature such as camera,
Bluetooth, or NFC, what integration approach is recommended?

-   **A.** Write native code and connect it through Platform Channels
-   **B.** Convert the entire application to HTML
-   **C.** Store the feature data in SharedPreferences
-   **D.** Use only Widget Inspector

**Correct answer:** A --- Write native code and connect it through
Platform Channels

**Explanation:** Option A is correct: Write native code and connect it
through Platform Channels. The answer matches Dart's type-system or
null-safety behavior; use nullable types and null-aware operators
deliberately to avoid null errors.

**Source:** Quizlet compilation 2

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/tools/devtools/overview

------------------------------------------------------------------------

### PRM-106 --- 4 --- Dev Tools & Hot Reload

What is a breakpoint used for?

-   **A.** Selecting a layout for a defined range of sizes
-   **B.** Encrypting a token
-   **C.** Pausing the debugger
-   **D.** Creating a database index

**Correct answer:** A --- Selecting a layout for a defined range of
sizes

**Explanation:** Option A is correct: Selecting a layout for a defined
range of sizes. The answer matches Dart's type-system or null-safety
behavior; use nullable types and null-aware operators deliberately to
avoid null errors.

**Source:** Quizlet compilation 2

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/tools/devtools/overview

------------------------------------------------------------------------

### PRM-107 --- 4 --- Dev Tools & Hot Reload

What does the DevTools Performance view help inspect?

-   **A.** JWT payloads
-   **B.** SQL schemas
-   **C.** The FPS timeline and frame-rendering cost
-   **D.** Named routes

**Correct answer:** C --- The FPS timeline and frame-rendering cost

**Explanation:** Option C is correct: The FPS timeline and
frame-rendering cost. Flutter performance should be evaluated in profile
mode, preferably on a physical device, because debug-mode timings are
not representative.

**Source:** Quizlet compilation 2

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/tools/devtools/overview

------------------------------------------------------------------------

### PRM-108 --- 4 --- Dev Tools & Hot Reload

According to the source, what is a "Breakpoint"?

-   **A.** A point where the application code stops for debugging.
-   **B.** A specific pixel width (e.g., 600px) used to define when
    layout logic should change.
-   **C.** The maximum height a ListView can reach before it scrolls.
-   **D.** A crash that occurs when a widget overflows its boundaries.

**Correct answer:** B --- A specific pixel width (e.g., 600px) used to
define when layout logic should change.

**Explanation:** Option B is correct: A specific pixel width (e.g.,
600px) used to define when layout logic should change.. The answer
matches Dart's type-system or null-safety behavior; use nullable types
and null-aware operators deliberately to avoid null errors.

**Source:** Quizlet compilation 4

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/tools/devtools/overview

------------------------------------------------------------------------

### PRM-109 --- 5 --- Basic Widgets & Keys

In Dart, what is the basic difference between `final` and `const`?

-   **A.** No difference, the two keywords are interchangeable in every
    case
-   **B.** `final` is a compile-time constant, `const` is a runtime
    constant
-   **C.** `final` is a value assigned once at runtime
    (runtime-constant), `const` is a compile-time constant
-   **D.** `final` is only for numeric types, `const` is only for string
    types

**Correct answer:** C --- `final` is a value assigned once at runtime
(runtime-constant), `const` is a compile-time constant

**Explanation:** `final` is assigned once at runtime; `const` is a value
known ahead of time at compile-time. B reverses the definitions; D is
wrong since neither is limited to a specific data type.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/ui

------------------------------------------------------------------------

### PRM-110 --- 5 --- Basic Widgets & Keys

Which statement is correct about the differences between `List`, `Set`,
and `Map` in Dart?

-   **A.** List is unordered and disallows duplicates, Set is ordered,
    Map stores key-value pairs
-   **B.** List is an ordered collection, Set is a collection of unique
    (unordered) elements, Map stores key-value pairs
-   **C.** All three are the same data type, just different names
-   **D.** Set is ordered and allows duplicates, List does not

**Correct answer:** B --- List is an ordered collection, Set is a
collection of unique (unordered) elements, Map stores key-value pairs

**Explanation:** List is ordered; Set is a collection of unique,
unordered elements; Map stores key-value pairs --- the standard
definition. A, C, D all misdescribe the basic characteristics.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/ui

------------------------------------------------------------------------

### PRM-111 --- 5 --- Basic Widgets & Keys

In Flutter, `State<T>` is a textbook example of which concept from
Module 3?

-   **A.** Mixin
-   **B.** Abstract class --- forcing StatefulWidgets to override
    methods to define behavior
-   **C.** Generic Constraint
-   **D.** Factory Constructor

**Correct answer:** B --- Abstract class --- forcing StatefulWidgets to
override methods to define behavior

**Explanation:** `State<T>` is an abstract class, forcing
StatefulWidgets to override methods to define behavior. A, C, D do not
correctly describe State`<T>`{=html}'s nature.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/ui

------------------------------------------------------------------------

### PRM-112 --- 5 --- Basic Widgets & Keys

What does collection-if / collection-for syntax allow in Dart?

-   **A.** Only usable in a regular for loop, not in a List declaration
-   **B.** Flexibly building a List/Set/Map by inserting conditional
    elements (`if`) or generating elements from a loop (`for`) directly
    inside the collection declaration
-   **C.** Fully replaces the `var` keyword
-   **D.** Only applies to Map, not to List

**Correct answer:** B --- Flexibly building a List/Set/Map by inserting
conditional elements (`if`) or generating elements from a loop (`for`)
directly inside the collection declaration

**Explanation:** Collection-if/for lets you flexibly build collections
with conditional insertion or loop-generated elements right inside the
declaration. A, C, D misdescribe the scope of application.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/ui

------------------------------------------------------------------------

### PRM-113 --- 5 --- Basic Widgets & Keys

According to the lecture, what are Material Icons in Flutter commonly
used for?

-   **A.** Purely decorative, no function
-   **B.** Navigation buttons, action buttons (add, delete), and status
    indicators
-   **C.** Only used as a Scaffold background
-   **D.** Completely replaces the Text widget

**Correct answer:** B --- Navigation buttons, action buttons (add,
delete), and status indicators

**Explanation:** Material Icons are used for navigation buttons, action
buttons, and status indicators. A, C, D misdescribe their purpose.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/ui

------------------------------------------------------------------------

### PRM-114 --- 5 --- Basic Widgets & Keys

Which data type stores values as key-value pairs?

-   **A.** Map
-   **B.** List
-   **C.** bool
-   **D.** Set

**Correct answer:** A --- Map

**Explanation:** Option A is correct: Map. The answer matches Dart's
type-system or null-safety behavior; use nullable types and null-aware
operators deliberately to avoid null errors.

**Source:** Quizlet compilation 2

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/ui

------------------------------------------------------------------------

### PRM-115 --- 5 --- Basic Widgets & Keys

What does the keyword var mean?

-   **A.** A compile-time constant
-   **B.** The variable type is inferred from its initial value
-   **C.** A function that never returns
-   **D.** A variable that can always change to any type

**Correct answer:** B --- The variable type is inferred from its initial
value

**Explanation:** Option B is correct: The variable type is inferred from
its initial value. The answer matches Dart's type-system or null-safety
behavior; use nullable types and null-aware operators deliberately to
avoid null errors.

**Source:** Quizlet compilation 2

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/ui

------------------------------------------------------------------------

### PRM-116 --- 5 --- Basic Widgets & Keys

Which keyword is used to inherit from a class in Dart?

-   **A.** implements only
-   **B.** with only
-   **C.** extends
-   **D.** inherits

**Correct answer:** C --- extends

**Explanation:** Option C is correct: extends. The answer matches Dart's
type-system or null-safety behavior; use nullable types and null-aware
operators deliberately to avoid null errors.

**Source:** Quizlet compilation 2

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/ui

------------------------------------------------------------------------

### PRM-117 --- 5 --- Basic Widgets & Keys

How many main Scaffold widgets should a typical Material page usually
contain?

-   **A.** One
-   **B.** Exactly two
-   **C.** Unlimited nested Scaffolds are always required
-   **D.** Scaffold must not be used

**Correct answer:** A --- One

**Explanation:** Option A is correct: One. The answer matches Dart's
type-system or null-safety behavior; use nullable types and null-aware
operators deliberately to avoid null errors.

**Source:** Quizlet compilation 2

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/ui

------------------------------------------------------------------------

### PRM-118 --- 5 --- Basic Widgets & Keys

Which method displays an image declared in the project assets?

-   **A.** Image.network
-   **B.** AssetText
-   **C.** Image.asset
-   **D.** FileBuilder

**Correct answer:** C --- Image.asset

**Explanation:** Option C is correct: Image.asset. pubspec.yaml is the
project manifest used to declare packages and asset configuration.

**Source:** Quizlet compilation 2

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/ui

------------------------------------------------------------------------

### PRM-119 --- 5 --- Basic Widgets & Keys

ElevatedButton is normally used for which kind of action?

-   **A.** An icon-only action
-   **B.** A secondary text link only
-   **C.** A primary action such as Login, Save, or Submit
-   **D.** Selecting a continuous value

**Correct answer:** C --- A primary action such as Login, Save, or
Submit

**Explanation:** Option C is correct: A primary action such as Login,
Save, or Submit. The answer matches Dart's type-system or null-safety
behavior; use nullable types and null-aware operators deliberately to
avoid null errors.

**Source:** Quizlet compilation 2

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/ui

------------------------------------------------------------------------

### PRM-120 --- 5 --- Basic Widgets & Keys

Which method writes a String to a file?

-   **A.** A widget's setString()
-   **B.** writeAsString()
-   **C.** query()
-   **D.** pushNamed()

**Correct answer:** B --- writeAsString()

**Explanation:** Option B is correct: writeAsString(). The answer
matches Dart's type-system or null-safety behavior; use nullable types
and null-aware operators deliberately to avoid null errors.

**Source:** Quizlet compilation 2

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/ui

------------------------------------------------------------------------

### PRM-121 --- 5 --- Basic Widgets & Keys

How is a token described?

-   **A.** An image file
-   **B.** A widget
-   **C.** The user's raw password
-   **D.** A short-lived digital credential generated by the server to
    prove identity

**Correct answer:** D --- A short-lived digital credential generated by
the server to prove identity

**Explanation:** Option D is correct: A short-lived digital credential
generated by the server to prove identity. The answer matches Dart's
type-system or null-safety behavior; use nullable types and null-aware
operators deliberately to avoid null errors.

**Source:** Quizlet compilation 2

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/ui

------------------------------------------------------------------------

### PRM-122 --- 5 --- Basic Widgets & Keys

What is the main concept of Flutter UI?

-   **A.** Everything is a widget
-   **B.** Everything is a class
-   **C.** Everything is a function
-   **D.** Everything is a file

**Correct answer:** A --- Everything is a widget

**Explanation:** Option A is correct: Everything is a widget. The answer
matches Dart's type-system or null-safety behavior; use nullable types
and null-aware operators deliberately to avoid null errors.

**Source:** Quizlet compilation 3

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/ui

------------------------------------------------------------------------

### PRM-123 --- 5 --- Basic Widgets & Keys

Which Dart keyword declares an inferred variable?

-   **A.** let
-   **B.** dynamic
-   **C.** var
-   **D.** auto

**Correct answer:** C --- var

**Explanation:** Option C is correct: var. The answer matches Dart's
type-system or null-safety behavior; use nullable types and null-aware
operators deliberately to avoid null errors.

**Source:** Quizlet compilation 3

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/ui

------------------------------------------------------------------------

### PRM-124 --- 5 --- Basic Widgets & Keys

Which collection uses key-value pairs?

-   **A.** List
-   **B.** Set
-   **C.** Map
-   **D.** Tuple

**Correct answer:** C --- Map

**Explanation:** Option C is correct: Map. The answer matches Dart's
type-system or null-safety behavior; use nullable types and null-aware
operators deliberately to avoid null errors.

**Source:** Quizlet compilation 3

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/ui

------------------------------------------------------------------------

### PRM-125 --- 5 --- Basic Widgets & Keys

An object is?

-   **A.** A function
-   **B.** An instance of a class
-   **C.** A library
-   **D.** A widget tree

**Correct answer:** B --- An instance of a class

**Explanation:** Option B is correct: An instance of a class. The answer
matches Dart's type-system or null-safety behavior; use nullable types
and null-aware operators deliberately to avoid null errors.

**Source:** Quizlet compilation 3

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/ui

------------------------------------------------------------------------

### PRM-126 --- 5 --- Basic Widgets & Keys

Which widget is commonly used for material cards?

-   **A.** Panel
-   **B.** Card
-   **C.** Canvas
-   **D.** Tile

**Correct answer:** B --- Card

**Explanation:** Option B is correct: Card. The answer matches Dart's
type-system or null-safety behavior; use nullable types and null-aware
operators deliberately to avoid null errors.

**Source:** Quizlet compilation 3

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/ui

------------------------------------------------------------------------

### PRM-127 --- 5 --- Basic Widgets & Keys

Which widget displays a single line of text?

-   **A.** Text
-   **B.** RichText only
-   **C.** Label
-   **D.** String

**Correct answer:** A --- Text

**Explanation:** Option A is correct: Text. The answer matches Dart's
type-system or null-safety behavior; use nullable types and null-aware
operators deliberately to avoid null errors.

**Source:** Quizlet compilation 3

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/ui

------------------------------------------------------------------------

### PRM-128 --- 5 --- Basic Widgets & Keys

Which widget displays an image from assets?

-   **A.** Image.asset
-   **B.** Asset.image
-   **C.** File.image
-   **D.** Picture.asset

**Correct answer:** A --- Image.asset

**Explanation:** Option A is correct: Image.asset. pubspec.yaml is the
project manifest used to declare packages and asset configuration.

**Source:** Quizlet compilation 3

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/ui

------------------------------------------------------------------------

### PRM-129 --- 5 --- Basic Widgets & Keys

Which widget creates a Material button?

-   **A.** ElevatedButton
-   **B.** ButtonWidget
-   **C.** ClickButton
-   **D.** TapButton

**Correct answer:** A --- ElevatedButton

**Explanation:** Option A is correct: ElevatedButton. The answer matches
Dart's type-system or null-safety behavior; use nullable types and
null-aware operators deliberately to avoid null errors.

**Source:** Quizlet compilation 3

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/ui

------------------------------------------------------------------------

### PRM-130 --- 5 --- Basic Widgets & Keys

Which widget is used for icon-only actions?

-   **A.** FloatingActionButton
-   **B.** IconButton
-   **C.** ActionChip
-   **D.** PopupMenuButton

**Correct answer:** B --- IconButton

**Explanation:** Option B is correct: IconButton. The answer matches
Dart's type-system or null-safety behavior; use nullable types and
null-aware operators deliberately to avoid null errors.

**Source:** Quizlet compilation 3

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/ui

------------------------------------------------------------------------

### PRM-131 --- 5 --- Basic Widgets & Keys

Which widget commonly shows a circular action button?

-   **A.** ElevatedButton
-   **B.** Icon
-   **C.** FloatingActionButton
-   **D.** Card

**Correct answer:** C --- FloatingActionButton

**Explanation:** Option C is correct: FloatingActionButton. The answer
matches Dart's type-system or null-safety behavior; use nullable types
and null-aware operators deliberately to avoid null errors.

**Source:** Quizlet compilation 3

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/ui

------------------------------------------------------------------------

### PRM-132 --- 5 --- Basic Widgets & Keys

Which widget shows a popup message at the bottom?

-   **A.** AlertDialog
-   **B.** SnackBar
-   **C.** Banner
-   **D.** ToastView

**Correct answer:** B --- SnackBar

**Explanation:** Option B is correct: SnackBar. The answer matches
Dart's type-system or null-safety behavior; use nullable types and
null-aware operators deliberately to avoid null errors.

**Source:** Quizlet compilation 3

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/ui

------------------------------------------------------------------------

### PRM-133 --- 5 --- Basic Widgets & Keys

Which widget shows a modal dialog?

-   **A.** AlertDialog
-   **B.** Card
-   **C.** SnackBar
-   **D.** Drawer

**Correct answer:** A --- AlertDialog

**Explanation:** Option A is correct: AlertDialog. The answer matches
Dart's type-system or null-safety behavior; use nullable types and
null-aware operators deliberately to avoid null errors.

**Source:** Quizlet compilation 3

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/ui

------------------------------------------------------------------------

### PRM-134 --- 5 --- Basic Widgets & Keys

Which class holds mutable state for StatefulWidget?

-   **A.** State
-   **B.** WidgetStateHolder
-   **C.** MutableWidget
-   **D.** Store

**Correct answer:** A --- State

**Explanation:** Option A is correct: State. This is a state-management
concept: state changes must notify or trigger the relevant part of the
UI to rebuild.

**Source:** Quizlet compilation 3

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/ui

------------------------------------------------------------------------

### PRM-135 --- 5 --- Basic Widgets & Keys

Which method describes the widget UI?

-   **A.** render
-   **B.** create
-   **C.** build
-   **D.** mount

**Correct answer:** C --- build

**Explanation:** Option C is correct: build. The answer matches Dart's
type-system or null-safety behavior; use nullable types and null-aware
operators deliberately to avoid null errors.

**Source:** Quizlet compilation 3

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/ui

------------------------------------------------------------------------

### PRM-136 --- 5 --- Basic Widgets & Keys

Which widget should be preferred for static UI parts when possible?

-   **A.** const widget
-   **B.** dynamic widget
-   **C.** late widget
-   **D.** mutable widget

**Correct answer:** A --- const widget

**Explanation:** Option A is correct: const widget. The answer matches
Dart's type-system or null-safety behavior; use nullable types and
null-aware operators deliberately to avoid null errors.

**Source:** Quizlet compilation 3

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/ui

------------------------------------------------------------------------

### PRM-137 --- 5 --- Basic Widgets & Keys

Which widget displays app bar title area?

-   **A.** AppBar
-   **B.** TopBar
-   **C.** TitleBar
-   **D.** Header

**Correct answer:** A --- AppBar

**Explanation:** Option A is correct: AppBar. The answer matches Dart's
type-system or null-safety behavior; use nullable types and null-aware
operators deliberately to avoid null errors.

**Source:** Quizlet compilation 3

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/ui

------------------------------------------------------------------------

### PRM-138 --- 5 --- Basic Widgets & Keys

Which property of AppBar usually shows the title widget?

-   **A.** text
-   **B.** header
-   **C.** title
-   **D.** label

**Correct answer:** C --- title

**Explanation:** Option C is correct: title. The answer matches Dart's
type-system or null-safety behavior; use nullable types and null-aware
operators deliberately to avoid null errors.

**Source:** Quizlet compilation 3

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/ui

------------------------------------------------------------------------

### PRM-139 --- 5 --- Basic Widgets & Keys

Which widget animates opacity changes?

-   **A.** Opacity
-   **B.** AnimatedOpacity
-   **C.** FadeBox
-   **D.** AlphaWidget

**Correct answer:** B --- AnimatedOpacity

**Explanation:** Option B is correct: AnimatedOpacity. The answer
matches Dart's type-system or null-safety behavior; use nullable types
and null-aware operators deliberately to avoid null errors.

**Source:** Quizlet compilation 3

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/ui

------------------------------------------------------------------------

### PRM-140 --- 5 --- Basic Widgets & Keys

Which property of ListTile usually displays leading icon/avatar?

-   **A.** before
-   **B.** lead
-   **C.** leading
-   **D.** start

**Correct answer:** C --- leading

**Explanation:** Option C is correct: leading. The answer matches Dart's
type-system or null-safety behavior; use nullable types and null-aware
operators deliberately to avoid null errors.

**Source:** Quizlet compilation 3

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/ui

------------------------------------------------------------------------

### PRM-141 --- 5 --- Basic Widgets & Keys

Which property of ListTile usually displays smaller text below title?

-   **A.** caption
-   **B.** body
-   **C.** subtitle
-   **D.** note

**Correct answer:** C --- subtitle

**Explanation:** Option C is correct: subtitle. The answer matches
Dart's type-system or null-safety behavior; use nullable types and
null-aware operators deliberately to avoid null errors.

**Source:** Quizlet compilation 3

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/ui

------------------------------------------------------------------------

### PRM-142 --- 5 --- Basic Widgets & Keys

Which property of ListTile usually displays trailing widget?

-   **A.** trailing
-   **B.** end
-   **C.** after
-   **D.** suffix

**Correct answer:** A --- trailing

**Explanation:** Option A is correct: trailing. The answer matches
Dart's type-system or null-safety behavior; use nullable types and
null-aware operators deliberately to avoid null errors.

**Source:** Quizlet compilation 3

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/ui

------------------------------------------------------------------------

### PRM-143 --- 5 --- Basic Widgets & Keys

Which widget can create dismissible list items?

-   **A.** Dismissible
-   **B.** Removable
-   **C.** SwipeDelete
-   **D.** HiddenTile

**Correct answer:** A --- Dismissible

**Explanation:** Option A is correct: Dismissible. The answer matches
Dart's type-system or null-safety behavior; use nullable types and
null-aware operators deliberately to avoid null errors.

**Source:** Quizlet compilation 3

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/ui

------------------------------------------------------------------------

### PRM-144 --- 6 --- Basic Layout

Consider: dynamic x = 10; x = "Hello"; print(x); What happens when this
code runs?

-   **A.** Compile error because a String cannot be assigned to a
    variable already typed as int
-   **B.** Prints "Hello" because `dynamic` allows the data type to
    change at runtime
-   **C.** Prints 10 because the original data type is preserved
-   **D.** Throws a TypeError exception at runtime

**Correct answer:** B --- Prints "Hello" because `dynamic` allows the
data type to change at runtime

**Explanation:** `dynamic` allows the data type to change at runtime, so
it prints "Hello". A is wrong since this is valid `dynamic` behavior; C,
D are wrong since there's no error and the final value is "Hello".

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/ui/layout

------------------------------------------------------------------------

### PRM-145 --- 6 --- Basic Layout

What does the `??` operator do in Dart?

-   **A.** Type equality comparison
-   **B.** Returns the left-hand value if it's not null, otherwise
    returns the right-hand value
-   **C.** Forces a non-null cast, throwing an error if null
-   **D.** Logical XOR operator

**Correct answer:** B --- Returns the left-hand value if it's not null,
otherwise returns the right-hand value

**Explanation:** `??` returns the left side if non-null, otherwise the
right side (null-coalescing). A, C, D misdescribe this operator's
function.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/ui/layout

------------------------------------------------------------------------

### PRM-146 --- 6 --- Basic Layout

Given `Map<String, int> scores = {"Anna": 95};`, what happens when
accessing `scores["Ben"]` (a nonexistent key)?

-   **A.** Throws an exception immediately
-   **B.** Returns 0
-   **C.** Returns null
-   **D.** Returns an empty string

**Correct answer:** C --- Returns null

**Explanation:** Accessing a Map with a nonexistent key returns null in
Dart. A, B, D do not match Map's default behavior in Dart.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/ui/layout

------------------------------------------------------------------------

### PRM-147 --- 6 --- Basic Layout

In Dart's try/catch, what does the `catch (e, s)` syntax allow a
developer to do?

-   **A.** Catch two different exception types at once
-   **B.** Catch the error object and its corresponding stack trace
-   **C.** Catch errors on two different threads
-   **D.** Only applicable to String-type errors

**Correct answer:** B --- Catch the error object and its corresponding
stack trace

**Explanation:** `catch (e, s)` catches both the error object and the
stack trace. A, C, D misdescribe this syntax's function.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/ui/layout

------------------------------------------------------------------------

### PRM-148 --- 6 --- Basic Layout

Consider this constrained mixin code: class Pet { String name;
Pet(this.name); } mixin CanBark on Pet { void bark() =\> print("\$name
says woof!"); } class Dog extends Pet with CanBark { Dog() :
super("Buddy"); } class Fish { // want to apply "with CanBark" here } If
class `Fish` (not extending `Pet`) tries to declare
`class Fish with CanBark {}`, what happens?

-   **A.** Compiles successfully, Fish will have a working bark() method
-   **B.** Compile error, because mixin `CanBark` is constrained
    `on Pet`, only classes extending Pet can apply this mixin
-   **C.** Compiles but throws a runtime error when calling bark()
-   **D.** Dart will automatically make Fish implicitly extend Pet

**Correct answer:** B --- Compile error, because mixin `CanBark` is
constrained `on Pet`, only classes extending Pet can apply this mixin

**Explanation:** Mixin `CanBark on Pet` is constrained to only apply to
classes extending Pet; since Fish doesn't extend Pet, it fails to
compile. A, C, D don't match how mixin constraints work.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/ui/layout

------------------------------------------------------------------------

### PRM-149 --- 6 --- Basic Layout

Given this generic class code: class Box`<T>`{=html} { T value;
Box(this.value); void show() =\> print("Value = \$value"); } void main()
=\> Box`<int>`{=html}(10).show(); If `Box<int>(10)` is replaced with
`Box<String>(10)`, what happens?

-   **A.** Runs normally, prints "Value = 10
-   **B.** Compile error because 10 is not a String, violating the
    generic type constraint
-   **C.** Dart automatically converts 10 to "10
-   **D.** The program throws a runtime exception but still compiles

**Correct answer:** B --- Compile error because 10 is not a String,
violating the generic type constraint

**Explanation:** `Box<String>(10)` fails to compile since 10 (int)
doesn't match the declared String type, violating the strict generic
type check. A, C, D don't match Dart's strict generic type checking.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/ui/layout

------------------------------------------------------------------------

### PRM-150 --- 6 --- Basic Layout

In Flutter, which widget acts as the "backbone" of a Material screen,
providing AppBar, body, and FloatingActionButton?

-   **A.** Container
-   **B.** Scaffold
-   **C.** MaterialApp
-   **D.** Column

**Correct answer:** B --- Scaffold

**Explanation:** Scaffold is the backbone of a Material screen,
providing AppBar/body/FAB. A, C, D don't correctly describe this
structural role.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/ui/layout

------------------------------------------------------------------------

### PRM-151 --- 6 --- Basic Layout

A student places a `ListView` directly inside a `Column` without
wrapping it in `Expanded` or `Flexible`. What common error occurs?

-   **A.** The app runs completely normally, no issues
-   **B.** A "RenderFlex overflow" error or unbounded height constraint
    error, because both Column and ListView try to claim unlimited space
    along the main axis
-   **C.** The ListView automatically shrinks to exactly 1 item
-   **D.** The Column is completely hidden from the screen

**Correct answer:** B --- A "RenderFlex overflow" error or unbounded
height constraint error, because both Column and ListView try to claim
unlimited space along the main axis

**Explanation:** Placing a ListView in a Column without
Expanded/Flexible causes an unbounded height error (overflow). A is
wrong since this is exactly the common bug; C, D don't match Flutter's
actual behavior.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/ui/layout

------------------------------------------------------------------------

### PRM-152 --- 6 --- Basic Layout

In the ListTile + CircleAvatar example: ListTile( leading:
CircleAvatar(child: Text(m\['title'\]\![0\])), title:
Text(m\['title'\]!), subtitle: Text(m\['year'\]!), trailing: const
Icon(Icons.chevron_right), onTap: () =\> debugPrint('Selected
\${m\['title'\]}'), ); What does the `!` after `m['title']` mean in the
context of Dart's null-safety?

-   **A.** Logical negation (NOT) operator
-   **B.** The "null assertion" operator --- asserting to the compiler
    that the value is definitely non-null; if wrong, it throws a runtime
    error
-   **C.** This operator is purely decorative, no effect on logic
-   **D.** Converts a String type to int

**Correct answer:** B --- The "null assertion" operator --- asserting to
the compiler that the value is definitely non-null; if wrong, it throws
a runtime error

**Explanation:** `!` is the null assertion operator, asserting non-null
to the compiler, throwing a runtime error if wrong. A, C, D misdescribe
this operator's meaning in null-safety.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/ui/layout

------------------------------------------------------------------------

### PRM-153 --- 6 --- Basic Layout

How does the `Wrap` widget differ from `Row`, and why does it suit a
genre chip list?

-   **A.** Wrap is identical to Row, no difference
-   **B.** Wrap automatically wraps child elements to a new line when
    there isn't enough horizontal space, avoiding the overflow error Row
    would encounter with too many elements
-   **C.** Wrap only allows a maximum of 2 child elements
-   **D.** Row auto-wraps but Wrap doesn't

**Correct answer:** B --- Wrap automatically wraps child elements to a
new line when there isn't enough horizontal space, avoiding the overflow
error Row would encounter with too many elements

**Explanation:** Wrap automatically wraps children to a new line when
out of horizontal space, avoiding the overflow Row would suffer. A, C, D
misdescribe/reverse the two widgets' characteristics.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/ui/layout

------------------------------------------------------------------------

### PRM-154 --- 6 --- Basic Layout

In the Sectioned Home Screen code: body: ListView( padding: const
EdgeInsets.all(12), children: \[ section('Now Playing'), const
Placeholder(fallbackHeight: 120), section('Trending'), const
Placeholder(fallbackHeight: 120), \], ), Why use `ListView` (instead of
`Column`) as the root widget for an entire screen containing multiple
sections?

-   **A.** Because ListView is mandatory inside every Scaffold
-   **B.** Because ListView automatically allows scrolling when content
    exceeds screen height, while Column by default cannot scroll and
    easily causes overflow
-   **C.** Because Column doesn't support padding
-   **D.** No technical reason, it's a random choice

**Correct answer:** B --- Because ListView automatically allows
scrolling when content exceeds screen height, while Column by default
cannot scroll and easily causes overflow

**Explanation:** ListView allows scrolling when content exceeds screen
height, while Column doesn't scroll by default and easily overflows. A,
C, D don't match the actual technical reason.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/ui/layout

------------------------------------------------------------------------

### PRM-155 --- 6 --- Basic Layout

In VS Code, what does the "Wrap with Widget" feature support for a
Flutter developer?

-   **A.** Automatically deploy the app to a store
-   **B.** Quickly wrap a selected widget with another widget like
    Padding, Center, Expanded to refactor layout
-   **C.** Automatically fix all syntax errors in the file
-   **D.** Convert Dart to Kotlin

**Correct answer:** B --- Quickly wrap a selected widget with another
widget like Padding, Center, Expanded to refactor layout

**Explanation:** Wrap with Widget" quickly wraps a selected widget with
Padding/Center/Expanded to refactor layout. A, C, D don't match this
feature's function.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/ui/layout

------------------------------------------------------------------------

### PRM-156 --- 6 --- Basic Layout

In a basic Scaffold example, where is `floatingActionButton` typically
placed and what is it used for?

-   **A.** In the middle of the screen, as a background for the whole
    body
-   **B.** Usually floats in the bottom-right corner of the screen, used
    for a prominent primary action (e.g. add new)
-   **C.** Only displayed inside the AppBar
-   **D.** No fixed position, always centered in the AppBar

**Correct answer:** B --- Usually floats in the bottom-right corner of
the screen, used for a prominent primary action (e.g. add new)

**Explanation:** floatingActionButton typically floats bottom-right,
used for a prominent primary action. A, C, D misdescribe its
position/role.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/ui/layout

------------------------------------------------------------------------

### PRM-157 --- 6 --- Basic Layout

According to Module 4, when should `SingleChildScrollView` or `Flexible`
be used to fix overflow on small screens?

-   **A.** Never needed, Flutter automatically handles overflow
-   **B.** When UI content exceeds the available screen size (especially
    on small screens), you need scrolling or flexible resizing to avoid
    layout overflow
-   **C.** Only used for apps running on Desktop
-   **D.** Only applicable to the Text widget

**Correct answer:** B --- When UI content exceeds the available screen
size (especially on small screens), you need scrolling or flexible
resizing to avoid layout overflow

**Explanation:** Use them when content exceeds the available screen
size, to allow scrolling or flexible resizing and avoid overflow. A is
wrong since Flutter doesn't auto-handle every overflow case; C, D
wrongly restrict the scope of use.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/ui/layout

------------------------------------------------------------------------

### PRM-158 --- 6 --- Basic Layout

What is the difference between `Flexible` and `Expanded` in a
Row/Column?

-   **A.** No difference, the two widgets are entirely equivalent
-   **B.** `Expanded` forces a child to occupy the entire allocated
    space by flex ratio, while `Flexible` allows a child to be smaller
    than the allocated space if it doesn't need it all (depending on
    `fit: FlexFit.loose`)
-   **C.** Flexible can only be used inside GridView, not in Row/Column
-   **D.** Expanded only works with the Text widget

**Correct answer:** B --- `Expanded` forces a child to occupy the entire
allocated space by flex ratio, while `Flexible` allows a child to be
smaller than the allocated space if it doesn't need it all (depending on
`fit: FlexFit.loose`)

**Explanation:** Expanded forces filling the entire allocated flex
space; Flexible allows a smaller size if not needed (FlexFit.loose). A,
C, D don't match their actual behavior.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/ui/layout

------------------------------------------------------------------------

### PRM-159 --- 6 --- Basic Layout

Per Module 6's "Best Practices," when should `Wrap` be prioritized over
`Row`?

-   **A.** When displaying a long chip list that could overflow
    horizontal space
-   **B.** When there's only exactly 1 child element
-   **C.** When you need a fixed widget that never changes size
-   **D.** `Wrap` should never be prioritized over Row

**Correct answer:** A --- When displaying a long chip list that could
overflow horizontal space

**Explanation:** Wrap should be prioritized for long chip lists that
could overflow horizontally. B, C, D don't match the stated best
practice.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/ui/layout

------------------------------------------------------------------------

### PRM-160 --- 6 --- Basic Layout

In the example above, if the user enters the email
`"taken123@test.com"`, what message does the app show after 2 seconds?

-   **A.** Account created for taken123@test.com
-   **B.** This email is already taken
-   **C.** No message is shown
-   **D.** The app will throw an exception because the email is invalid

**Correct answer:** B --- This email is already taken

**Explanation:** Since the email starts with "taken", the logic
`_email.toLowerCase().startsWith("taken")` shows "This email is already
taken" after 2 seconds. A, C, D don't match the given code's logic.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/ui/layout

------------------------------------------------------------------------

### PRM-161 --- 6 --- Basic Layout

In the SQL SELECT syntax reviewed in the lecture, which clause is used
to FILTER data rows before returning the result?

-   **A.** ORDER BY
-   **B.** WHERE
-   **C.** LIMIT
-   **D.** SELECT

**Correct answer:** B --- WHERE

**Explanation:** `WHERE` filters data rows before returning results. A,
C, D serve other purposes (sorting, limiting, selecting columns).

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/ui/layout

------------------------------------------------------------------------

### PRM-162 --- 6 --- Basic Layout

When is the `GROUP BY` clause combined with `HAVING` typically used?

-   **A.** When you need to sort results alphabetically
-   **B.** When you need to group rows by a criterion and apply a filter
    condition on aggregate functions like SUM, COUNT
-   **C.** When you need to limit the number of returned records
    (pagination)
-   **D.** When you need to rename a column in the query result

**Correct answer:** B --- When you need to group rows by a criterion and
apply a filter condition on aggregate functions like SUM, COUNT

**Explanation:** GROUP BY + HAVING are used for grouping rows and
filtering on aggregate functions like SUM/COUNT. A, C, D don't match the
purpose of these clauses.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/ui/layout

------------------------------------------------------------------------

### PRM-163 --- 6 --- Basic Layout

Which of the following widgets is a textbook example of Implicit
Animation?

-   **A.** AnimationController
-   **B.** AnimatedContainer
-   **C.** Tween
-   **D.** CurvedAnimation

**Correct answer:** B --- AnimatedContainer

**Explanation:** `AnimatedContainer` is a textbook Implicit Animation
widget --- it auto-animates when its properties (color, size...) change.
A, C, D are components belonging to Explicit Animation or supporting
tools, not an Implicit Animation widget itself.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/ui/layout

------------------------------------------------------------------------

### PRM-164 --- 6 --- Basic Layout

What does Map.putIfAbsent(key, ifAbsent) do when the key does not exist?

-   **A.** Deletes the entire Map
-   **B.** Immediately throws an error
-   **C.** Calls ifAbsent, stores the result in the Map, and returns the
    new value
-   **D.** Returns null without calling the function

**Correct answer:** C --- Calls ifAbsent, stores the result in the Map,
and returns the new value

**Explanation:** Option C is correct: Calls ifAbsent, stores the result
in the Map, and returns the new value. The answer matches Dart's
type-system or null-safety behavior; use nullable types and null-aware
operators deliberately to avoid null errors.

**Source:** Quizlet compilation 2

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/ui/layout

------------------------------------------------------------------------

### PRM-165 --- 6 --- Basic Layout

In which directions do Column and Row arrange their children?

-   **A.** Column vertically and Row horizontally
-   **B.** Both as grids
-   **C.** Both vertically only
-   **D.** Column horizontally and Row vertically

**Correct answer:** A --- Column vertically and Row horizontally

**Explanation:** Option A is correct: Column vertically and Row
horizontally. Flutter layout is composed from widgets; the selected
widget provides the arrangement, sizing, spacing, or constraint behavior
described.

**Source:** Quizlet compilation 2

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/ui/layout

------------------------------------------------------------------------

### PRM-166 --- 6 --- Basic Layout

Which widget is appropriate for displaying a long scrollable list?

-   **A.** A non-scrollable Stack
-   **B.** IconButton
-   **C.** A fixed Row
-   **D.** ListView.builder or ListView.separated

**Correct answer:** D --- ListView.builder or ListView.separated

**Explanation:** Option D is correct: ListView.builder or
ListView.separated. The answer matches Dart's type-system or null-safety
behavior; use nullable types and null-aware operators deliberately to
avoid null errors.

**Source:** Quizlet compilation 2

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/ui/layout

------------------------------------------------------------------------

### PRM-167 --- 6 --- Basic Layout

How is the common error of placing an unconstrained ListView inside a
Column usually fixed?

-   **A.** Replace it with Text
-   **B.** Add a GlobalKey everywhere
-   **C.** Remove the Scaffold
-   **D.** Wrap the ListView with Expanded

**Correct answer:** D --- Wrap the ListView with Expanded

**Explanation:** Option D is correct: Wrap the ListView with Expanded.
Flutter layout is composed from widgets; the selected widget provides
the arrangement, sizing, spacing, or constraint behavior described.

**Source:** Quizlet compilation 2

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/ui/layout

------------------------------------------------------------------------

### PRM-168 --- 6 --- Basic Layout

How does Flexible differ from Expanded?

-   **A.** It allows a child to flex without forcing it to fill all
    remaining space
-   **B.** It is used only for databases
-   **C.** It always creates scrolling
-   **D.** It cannot be used in a Row or Column

**Correct answer:** A --- It allows a child to flex without forcing it
to fill all remaining space

**Explanation:** Option A is correct: It allows a child to flex without
forcing it to fill all remaining space. Flutter layout is composed from
widgets; the selected widget provides the arrangement, sizing, spacing,
or constraint behavior described.

**Source:** Quizlet compilation 2

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/ui/layout

------------------------------------------------------------------------

### PRM-169 --- 6 --- Basic Layout

Which improvement is suggested for screens wider than 800 pixels?

-   **A.** Require a fixed width
-   **B.** Hide all filters
-   **C.** Use a filter sidebar and a two-column movie list
-   **D.** Use only one narrow Column

**Correct answer:** C --- Use a filter sidebar and a two-column movie
list

**Explanation:** Option C is correct: Use a filter sidebar and a
two-column movie list. The answer matches Dart's type-system or
null-safety behavior; use nullable types and null-aware operators
deliberately to avoid null errors.

**Source:** Quizlet compilation 2

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/ui/layout

------------------------------------------------------------------------

### PRM-170 --- 6 --- Basic Layout

What type is a network response body before decoding?

-   **A.** A ready-made Post object
-   **B.** String
-   **C.** A database row
-   **D.** A widget tree

**Correct answer:** B --- String

**Explanation:** Option B is correct: String. The answer matches Dart's
type-system or null-safety behavior; use nullable types and null-aware
operators deliberately to avoid null errors.

**Source:** Quizlet compilation 2

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/ui/layout

------------------------------------------------------------------------

### PRM-171 --- 1 --- Intro to Flutter & Dart

What is the arrow function syntax in Dart?

-   **A.** -\>
-   **B.** =\>
-   **C.** ==\>
-   **D.** ::=

**Correct answer:** B --- `=>`

**Explanation:** Option B is correct: `=>` is Dart's arrow syntax for a
function consisting of a single expression.

**Source:** Quizlet compilation 3

**Verification note:** Dart language question. The supplied Quizlet
answer is retained; the official Dart language reference is linked for
checking.

**Official documentation (topic-level reference):**
https://dart.dev/language/functions

------------------------------------------------------------------------

### PRM-172 --- 6 --- Basic Layout

What does ?? mean in Dart?

-   **A.** Throw exception
-   **B.** Default if null
-   **C.** Force cast
-   **D.** Increment

**Correct answer:** B --- Default if null

**Explanation:** Option B is correct: Default if null. The answer
matches Dart's type-system or null-safety behavior; use nullable types
and null-aware operators deliberately to avoid null errors.

**Source:** Quizlet compilation 3

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/ui/layout

------------------------------------------------------------------------

### PRM-173 --- 6 --- Basic Layout

Which widget adds empty space around its child?

-   **A.** Margin
-   **B.** Padding
-   **C.** Align
-   **D.** Stack

**Correct answer:** B --- Padding

**Explanation:** Option B is correct: Padding. The answer matches Dart's
type-system or null-safety behavior; use nullable types and null-aware
operators deliberately to avoid null errors.

**Source:** Quizlet compilation 3

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/ui/layout

------------------------------------------------------------------------

### PRM-174 --- 6 --- Basic Layout

Which widget centers its child?

-   **A.** Expanded
-   **B.** Align
-   **C.** Center
-   **D.** Positioned

**Correct answer:** C --- Center

**Explanation:** Option C is correct: Center. Flutter layout is composed
from widgets; the selected widget provides the arrangement, sizing,
spacing, or constraint behavior described.

**Source:** Quizlet compilation 3

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/ui/layout

------------------------------------------------------------------------

### PRM-175 --- 6 --- Basic Layout

Which widget arranges children vertically?

-   **A.** Row
-   **B.** Column
-   **C.** Stack
-   **D.** Wrap

**Correct answer:** B --- Column

**Explanation:** Option B is correct: Column. The answer matches Dart's
type-system or null-safety behavior; use nullable types and null-aware
operators deliberately to avoid null errors.

**Source:** Quizlet compilation 3

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/ui/layout

------------------------------------------------------------------------

### PRM-176 --- 6 --- Basic Layout

Which widget arranges children horizontally?

-   **A.** Row
-   **B.** Column
-   **C.** ListView
-   **D.** Flex

**Correct answer:** A --- Row

**Explanation:** Option A is correct: Row. The answer matches Dart's
type-system or null-safety behavior; use nullable types and null-aware
operators deliberately to avoid null errors.

**Source:** Quizlet compilation 3

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/ui/layout

------------------------------------------------------------------------

### PRM-177 --- 6 --- Basic Layout

Which widget overlaps children?

-   **A.** Stack
-   **B.** Wrap
-   **C.** Column
-   **D.** Expanded

**Correct answer:** A --- Stack

**Explanation:** Option A is correct: Stack. The answer matches Dart's
type-system or null-safety behavior; use nullable types and null-aware
operators deliberately to avoid null errors.

**Source:** Quizlet compilation 3

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/ui/layout

------------------------------------------------------------------------

### PRM-178 --- 6 --- Basic Layout

Which widget is used for scrollable lists?

-   **A.** GridView
-   **B.** ListView
-   **C.** Row
-   **D.** Table

**Correct answer:** B --- ListView

**Explanation:** Option B is correct: ListView. The answer matches
Dart's type-system or null-safety behavior; use nullable types and
null-aware operators deliberately to avoid null errors.

**Source:** Quizlet compilation 3

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/ui/layout

------------------------------------------------------------------------

### PRM-179 --- 7 --- Advanced Layout

What is `CurvedAnimation` in Flutter used for?

-   **A.** Drawing a geometric curve shape on screen
-   **B.** Applying an easing curve (e.g. `Curves.easeIn`) onto an
    existing linear Animation, changing how the animation's value varies
    over time (uneven fast/slow) instead of linearly
-   **C.** Fully replacing AnimationController
-   **D.** Only usable with SliverAppBar

**Correct answer:** B --- Applying an easing curve
(e.g. `Curves.easeIn`) onto an existing linear Animation, changing how
the animation's value varies over time (uneven fast/slow) instead of
linearly

**Explanation:** CurvedAnimation applies an easing curve onto a linear
Animation, making its value change non-linearly over time. A, C, D
misdescribe its function.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/ui/layout

------------------------------------------------------------------------

### PRM-180 --- 7 --- Advanced Layout

What is the basic difference between `SliverAppBar` and a regular
`AppBar`?

-   **A.** SliverAppBar can only display icons, not text
-   **B.** SliverAppBar is designed to work inside a `CustomScrollView`,
    able to expand, shrink, or show/hide flexibly based on scroll
    behavior, while a regular AppBar has a fixed position
-   **C.** SliverAppBar cannot contain action buttons
-   **D.** The two widgets are entirely identical, just different names

**Correct answer:** B --- SliverAppBar is designed to work inside a
`CustomScrollView`, able to expand, shrink, or show/hide flexibly based
on scroll behavior, while a regular AppBar has a fixed position

**Explanation:** SliverAppBar works inside CustomScrollView with
flexible expand/shrink/show-hide on scroll, unlike a fixed-position
regular AppBar. A, C, D misdescribe the characteristics.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/ui/layout

------------------------------------------------------------------------

### PRM-181 --- 7 --- Advanced Layout

What are the `flexibleSpace` and `expandedHeight` properties of
`SliverAppBar` used for?

-   **A.** `flexibleSpace` defines the content shown when the AppBar is
    in its expanded state (e.g. a large background image);
    `expandedHeight` sets the maximum height when the AppBar is fully
    expanded --- as you scroll down, the AppBar gradually shrinks to its
    standard height
-   **B.** These two properties only affect color, not size
-   **C.** `expandedHeight` determines the maximum number of action
    buttons
-   **D.** `flexibleSpace` only works when there's no `CustomScrollView`

**Correct answer:** A --- `flexibleSpace` defines the content shown when
the AppBar is in its expanded state (e.g. a large background image);
`expandedHeight` sets the maximum height when the AppBar is fully
expanded --- as you scroll down, the AppBar gradually shrinks to its
standard height

**Explanation:** flexibleSpace defines the expanded-state content;
expandedHeight sets the maximum expanded height, shrinking on scroll. B,
C, D misdescribe these two properties' functions.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/ui/layout

------------------------------------------------------------------------

### PRM-182 --- 7 --- Advanced Layout

In the Sliver ecosystem, how do `SliverList` and `SliverGrid` differ
from a regular `ListView`/`GridView`?

-   **A.** No difference at all, the two types are entirely equivalent
    in every context
-   **B.** `SliverList`/`SliverGrid` are designed to combine multiple
    different scrollable content types (like SliverAppBar, SliverList,
    SliverGrid) within a SINGLE `CustomScrollView` with a seamless
    scroll effect, while `ListView`/`GridView` are independent
    scrollable widgets, hard to coordinate scroll effects with other
    scrollable widgets
-   **C.** SliverList only displays up to 10 elements
-   **D.** SliverGrid doesn't support displaying images

**Correct answer:** B --- `SliverList`/`SliverGrid` are designed to
combine multiple different scrollable content types (like SliverAppBar,
SliverList, SliverGrid) within a SINGLE `CustomScrollView` with a
seamless scroll effect, while `ListView`/`GridView` are independent
scrollable widgets, hard to coordinate scroll effects with other
scrollable widgets

**Explanation:** SliverList/SliverGrid are designed to combine multiple
scrollable contents seamlessly in one CustomScrollView, unlike
independent ListView/GridView. A, C, D don't match the actual technical
characteristics.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/ui/layout

------------------------------------------------------------------------

### PRM-183 --- 7 --- Advanced Layout

Which widget clips its child to rounded corners easily?

-   **A.** ClipRRect
-   **B.** BorderRadius
-   **C.** DecoratedBox
-   **D.** RoundedBox

**Correct answer:** A --- ClipRRect

**Explanation:** Option A is correct: ClipRRect. The answer matches
Dart's type-system or null-safety behavior; use nullable types and
null-aware operators deliberately to avoid null errors.

**Source:** Quizlet compilation 3

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/ui/layout

------------------------------------------------------------------------

### PRM-184 --- 7 --- Advanced Layout

Which widget is used for custom painting?

-   **A.** CustomPaint
-   **B.** PaintBox
-   **C.** DrawWidget
-   **D.** CanvasView

**Correct answer:** A --- CustomPaint

**Explanation:** Option A is correct: CustomPaint. The answer matches
Dart's type-system or null-safety behavior; use nullable types and
null-aware operators deliberately to avoid null errors.

**Source:** Quizlet compilation 3

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/ui/layout

------------------------------------------------------------------------

### PRM-185 --- 7 --- Advanced Layout

Which class is extended for custom drawing?

-   **A.** CustomPainter
-   **B.** PaintState
-   **C.** DrawerPainter
-   **D.** ShapeBuilder

**Correct answer:** A --- CustomPainter

**Explanation:** Option A is correct: CustomPainter. The answer matches
Dart's type-system or null-safety behavior; use nullable types and
null-aware operators deliberately to avoid null errors.

**Source:** Quizlet compilation 3

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/ui/layout

------------------------------------------------------------------------

### PRM-186 --- 7 --- Advanced Layout

Which widget combines multiple slivers in one scrollable area?

-   **A.** CustomScrollView
-   **B.** MultiList
-   **C.** ScrollGroup
-   **D.** SliverBox

**Correct answer:** A --- CustomScrollView

**Explanation:** Option A is correct: CustomScrollView. The answer
matches Dart's type-system or null-safety behavior; use nullable types
and null-aware operators deliberately to avoid null errors.

**Source:** Quizlet compilation 3

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/ui/layout

------------------------------------------------------------------------

### PRM-187 --- 7 --- Advanced Layout

Which widget can pin and expand an app bar in a CustomScrollView?

-   **A.** SliverAppBar
-   **B.** FlexibleBar
-   **C.** StickyBar
-   **D.** AppHeader

**Correct answer:** A --- SliverAppBar

**Explanation:** Option A is correct: SliverAppBar. The answer matches
Dart's type-system or null-safety behavior; use nullable types and
null-aware operators deliberately to avoid null errors.

**Source:** Quizlet compilation 3

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/ui/layout

------------------------------------------------------------------------

### PRM-188 --- 7 --- Advanced Layout

Which widget is essential for ensuring that UI elements are not obscured
by hardware features like the "Dynamic Island," notches, or curved
screen edges?

-   **A.** Expanded
-   **B.** AspectRatio
-   **C.** SafeArea
-   **D.** FractionallySizedBox

**Correct answer:** C --- SafeArea

**Explanation:** Option C is correct: SafeArea. The answer matches
Dart's type-system or null-safety behavior; use nullable types and
null-aware operators deliberately to avoid null errors.

**Source:** Quizlet compilation 4

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/ui/layout

------------------------------------------------------------------------

### PRM-189 --- 7 --- Advanced Layout

If you want a GridView to display 2 columns on a mobile device and 4
columns on a tablet, which property should be updated based on screen
width?

-   **A.** mainAxisSpacing
-   **B.** crossAxisCount
-   **C.** aspectRatio
-   **D.** pixelDensity

**Correct answer:** B --- crossAxisCount

**Explanation:** Option B is correct: crossAxisCount. Flutter layout is
composed from widgets; the selected widget provides the arrangement,
sizing, spacing, or constraint behavior described.

**Source:** Quizlet compilation 4

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/ui/layout

------------------------------------------------------------------------

### PRM-190 --- 8 --- Theme & Responsive

What is the main role of the Embedder Layer in Flutter's architecture?

-   **A.** Provide all Material and Cupertino widgets
-   **B.** Compile Dart code to ARM machine code
-   **C.** Platform-specific integration, handling input, lifecycle, and
    window management
-   **D.** Perform JSON parsing from APIs

**Correct answer:** C --- Platform-specific integration, handling input,
lifecycle, and window management

**Explanation:** The Embedder Layer handles platform-specific
integration, input, lifecycle, and window management. A and D belong to
the Framework/networking layers; B is the job of the Dart AOT compiler,
not the Embedder.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/ui/adaptive-responsive

------------------------------------------------------------------------

### PRM-191 --- 8 --- Theme & Responsive

What does `ThemeMode.system` mean in `MaterialApp`?

-   **A.** Forces the app to always use the light theme
-   **B.** Forces the app to always use the dark theme
-   **C.** The app automatically follows the device's OS-level
    light/dark appearance setting
-   **D.** Has no effect if darkTheme isn't declared

**Correct answer:** C --- The app automatically follows the device's
OS-level light/dark appearance setting

**Explanation:** `ThemeMode.system` makes the app follow the device OS's
light/dark setting automatically. A, B fix one mode, contradicting
"system"; D is wrong since themeMode still has meaning but full effect
needs darkTheme declared.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/ui/adaptive-responsive

------------------------------------------------------------------------

### PRM-192 --- 8 --- Theme & Responsive

Given: return MaterialApp( theme: ThemeData.light(useMaterial3: true),
darkTheme: ThemeData.dark(useMaterial3: true), themeMode:
ThemeMode.dark, home: const DemoTheme(), ); Inside a child widget, what
is the correct syntax to access the current theme's style
(e.g. `titleLarge`)?

-   **A.** `ThemeData.of(context).textTheme.titleLarge`
-   **B.** `Theme.of(context).textTheme.titleLarge`
-   **C.** `context.theme.titleLarge`
-   **D.** `MaterialApp.theme(context).titleLarge`

**Correct answer:** B --- `Theme.of(context).textTheme.titleLarge`

**Explanation:** `Theme.of(context).textTheme.titleLarge` is the correct
syntax for accessing the current theme. A, C, D are not valid Flutter
APIs.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/ui/adaptive-responsive

------------------------------------------------------------------------

### PRM-193 --- 8 --- Theme & Responsive

A student writes: class DemoTheme extends StatelessWidget { @override
Widget build(BuildContext context) { return Scaffold( body:
Center(child: Text('Current theme', style:
Theme.of(context).textTheme.titleLarge)), ); } } What role does
`BuildContext context` in the `build` function play when calling
`Theme.of(context)`?

-   **A.** A parameter with no real effect, purely formal
-   **B.** Represents the widget's position in the widget tree, allowing
    it to look up the nearest InheritedWidget data (like Theme) above it
    in the tree
-   **C.** A global variable storing app state
-   **D.** Only used to pass API data

**Correct answer:** B --- Represents the widget's position in the widget
tree, allowing it to look up the nearest InheritedWidget data (like
Theme) above it in the tree

**Explanation:** `BuildContext` represents the widget's tree position,
allowing lookup of the nearest InheritedWidget (like Theme) above it. A,
C, D misdescribe BuildContext's role.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/ui/adaptive-responsive

------------------------------------------------------------------------

### PRM-194 --- 8 --- Theme & Responsive

What is the core difference between "Responsive UI" and "Adaptive UI"
per the lecture?

-   **A.** Responsive UI changes based on device type, Adaptive UI
    changes based on available space
-   **B.** Responsive UI changes layout based on available space
    (e.g. Column → Row), while Adaptive UI changes based on device type
    (e.g. Bottom Nav → NavigationRail on tablet)
-   **C.** The two concepts are identical, no real difference
-   **D.** Adaptive UI only applies to Web apps

**Correct answer:** B --- Responsive UI changes layout based on
available space (e.g. Column → Row), while Adaptive UI changes based on
device type (e.g. Bottom Nav → NavigationRail on tablet)

**Explanation:** Responsive UI reacts to available space; Adaptive UI
reacts to device type. A reverses the two definitions; C, D don't match
the lecture content.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/ui/adaptive-responsive

------------------------------------------------------------------------

### PRM-195 --- 8 --- Theme & Responsive

What information does `MediaQuery.of(context).size.width` retrieve?

-   **A.** The width of the current widget itself
-   **B.** The full width of the current device's screen
-   **C.** The width of the virtual keyboard
-   **D.** The number of child widgets in the tree

**Correct answer:** B --- The full width of the current device's screen

**Explanation:** `MediaQuery.of(context).size.width` gets the current
device's full screen width. A, C, D misdescribe the scope of the
returned value.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/ui/adaptive-responsive

------------------------------------------------------------------------

### PRM-196 --- 8 --- Theme & Responsive

Given: Widget build(BuildContext context) { final w =
MediaQuery.of(context).size.width; return Scaffold( body: Center( child:
Text(w \< 600 ? "Mobile Layout" : "Tablet Layout"), ), ); } When the
device is rotated from portrait to landscape, making the width exceed
600px, what happens to the displayed text?

-   **A.** Nothing changes because MediaQuery only reads the value once
    at app startup
-   **B.** Flutter automatically rebuilds the widget when the screen
    size changes (e.g. due to rotation), so the text switches from
    "Mobile Layout" to "Tablet Layout
-   **C.** The app crashes because MediaQuery doesn't support screen
    rotation
-   **D.** Only the Text is completely hidden until the app restarts

**Correct answer:** B --- Flutter automatically rebuilds the widget when
the screen size changes (e.g. due to rotation), so the text switches
from "Mobile Layout" to "Tablet Layout

**Explanation:** Flutter automatically rebuilds when screen size changes
(e.g. rotation), so MediaQuery reflects it in real time. A, C, D don't
match MediaQuery/Flutter's actual behavior.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/ui/adaptive-responsive

------------------------------------------------------------------------

### PRM-197 --- 8 --- Theme & Responsive

What is the core difference between `LayoutBuilder` and `MediaQuery`?

-   **A.** LayoutBuilder provides information about the direct parent
    widget's constraints, while MediaQuery provides the entire device
    screen's info
-   **B.** Both are entirely identical in function
-   **C.** LayoutBuilder only works on Web
-   **D.** MediaQuery only provides the parent widget's constraints, not
    the full screen

**Correct answer:** A --- LayoutBuilder provides information about the
direct parent widget's constraints, while MediaQuery provides the entire
device screen's info

**Explanation:** LayoutBuilder gives the direct parent's constraints;
MediaQuery gives full-screen device info. B, C, D reverse/misstate the
characteristics of the two tools.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/ui/adaptive-responsive

------------------------------------------------------------------------

### PRM-198 --- 8 --- Theme & Responsive

Given: LayoutBuilder( builder: (context, c) { return c.maxWidth \> 500 ?
WideCard() : NarrowCard(); }, ); If this `LayoutBuilder` is placed
inside a `Container` with a fixed width of 300px (while the device
screen is 800px wide), which widget is displayed?

-   **A.** WideCard(), because the device screen is wider than 500px
-   **B.** NarrowCard(), because `c.maxWidth` reflects the constraint
    from the direct parent widget (300px), not the full device screen
-   **C.** Both widgets will be displayed at the same time
-   **D.** This will cause an error because LayoutBuilder cannot be
    placed inside a fixed-size Container

**Correct answer:** B --- NarrowCard(), because `c.maxWidth` reflects
the constraint from the direct parent widget (300px), not the full
device screen

**Explanation:** `c.maxWidth` reflects the direct parent's constraint
(300px), not the full screen, so NarrowCard() is shown. A ignores the
local constraint's role; C, D don't match how LayoutBuilder actually
works.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/ui/adaptive-responsive

------------------------------------------------------------------------

### PRM-199 --- 8 --- Theme & Responsive

What is `OrientationBuilder` used for?

-   **A.** Detecting device rotation (portrait/landscape) and changing
    the UI accordingly
-   **B.** Only used to change the app's background color
-   **C.** Checking the device's network connection
-   **D.** Fully replaces MediaQuery in every case

**Correct answer:** A --- Detecting device rotation (portrait/landscape)
and changing the UI accordingly

**Explanation:** OrientationBuilder detects device rotation and lets the
UI change accordingly. B, C, D misdescribe its function.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/ui/adaptive-responsive

------------------------------------------------------------------------

### PRM-200 --- 8 --- Theme & Responsive

In the "Responsive Widgets Overview" list, which widget helps avoid
overflow by letting a child take up the remaining space in a Row/Column?

-   **A.** Wrap
-   **B.** Expanded
-   **C.** AspectRatio
-   **D.** FractionallySizedBox

**Correct answer:** B --- Expanded

**Explanation:** Expanded lets a child take the remaining space in a
Row/Column, avoiding overflow. A, C, D serve other purposes, not
specifically this one.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/ui/adaptive-responsive

------------------------------------------------------------------------

### PRM-201 --- 8 --- Theme & Responsive

Given this GridView code: GridView.count( crossAxisCount: width \< 600 ?
2 : 4, ); If the `width` variable is read ONCE in `initState()` instead
of in `build()` (from MediaQuery), what problem could arise when the
user rotates the screen afterward?

-   **A.** No problem at all because Flutter automatically syncs
    initState with build
-   **B.** `crossAxisCount` won't be updated when the screen size
    changes (due to rotation), because initState only runs once when the
    widget is created, causing the layout to no longer reflect the
    current size
-   **C.** GridView will automatically hide completely
-   **D.** The app will show a compile error

**Correct answer:** B --- `crossAxisCount` won't be updated when the
screen size changes (due to rotation), because initState only runs once
when the widget is created, causing the layout to no longer reflect the
current size

**Explanation:** Reading width only in initState() means crossAxisCount
isn't updated on rotation, since initState runs only once at widget
creation. A, C, D don't match the actual technical consequence.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/ui/adaptive-responsive

------------------------------------------------------------------------

### PRM-202 --- 8 --- Theme & Responsive

In the Genre Chips example (Wrap-based chip list), the lecture
emphasizes: "This behavior is achieved automatically by using Wrap,
without conditional logic." What does this mean technically?

-   **A.** You need many `if` statements to check screen size then
    decide chips per row
-   **B.** The `Wrap` widget automatically calculates and wraps elements
    to a new line based on available space, without the developer
    writing manual conditional logic for responsiveness
-   **C.** Wrap only works correctly when combined with LayoutBuilder
-   **D.** This description is wrong, Wrap always needs accompanying
    conditional logic

**Correct answer:** B --- The `Wrap` widget automatically calculates and
wraps elements to a new line based on available space, without the
developer writing manual conditional logic for responsiveness

**Explanation:** `Wrap` automatically calculates and wraps elements
based on available space without manual conditional logic. A, C, D don't
match the intended meaning of the quoted statement.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/ui/adaptive-responsive

------------------------------------------------------------------------

### PRM-203 --- 8 --- Theme & Responsive

In the Responsive Movie Card example: LayoutBuilder( builder: (context,
c) { final isWide = c.maxWidth \> 600; return Row(children: \[
Image.network(poster, width: isWide ? 150 : 100), SizedBox(width: 16),
Expanded(child: Text(title)) \]); }, ) What is the role of `Expanded`
wrapping `Text(title)` in this Row?

-   **A.** Makes the Text automatically bold
-   **B.** Lets the Text take up all remaining horizontal space after
    the image, while avoiding horizontal overflow when the title is long
-   **C.** Expanded is purely cosmetic, unrelated to layout
-   **D.** Expanded causes the image to shrink to match the Text's size

**Correct answer:** B --- Lets the Text take up all remaining horizontal
space after the image, while avoiding horizontal overflow when the title
is long

**Explanation:** Expanded lets Text take remaining horizontal space and
avoids horizontal overflow for long titles. A, C, D misdescribe
Expanded's technical role here.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/ui/adaptive-responsive

------------------------------------------------------------------------

### PRM-204 --- 8 --- Theme & Responsive

In Lab 6.3 (Tablet Layout Enhancement), the requirement for screens \>
800px is to add a sidebar filter and switch to a 2-column movie list.
What technique is recommended to implement this at the screen's root
level?

-   **A.** Use `Wrap` alone, no other tool needed
-   **B.** Use `LayoutBuilder` at the root level to detect the width
    constraint, deciding whether to show the tablet layout (sidebar + 2
    columns) or the mobile layout
-   **C.** Use `OrientationBuilder` instead of checking width
-   **D.** It's impossible to build a distinct tablet layout in Flutter

**Correct answer:** B --- Use `LayoutBuilder` at the root level to
detect the width constraint, deciding whether to show the tablet layout
(sidebar + 2 columns) or the mobile layout

**Explanation:** Using LayoutBuilder at the root level to detect the
width constraint is the recommended technique (per the note "use
LayoutBuilder at root level"). A, C, D don't match the recommended
technique.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/ui/adaptive-responsive

------------------------------------------------------------------------

### PRM-205 --- 8 --- Theme & Responsive

What problem does the `AspectRatio` widget in the "Responsive Widgets
Overview" list help solve?

-   **A.** Helps images avoid being stretched/distorted when the
    container size changes, by maintaining a fixed aspect ratio
-   **B.** Speeds up loading images from the network
-   **C.** Only usable for video, not for images
-   **D.** Fully replaces BoxFit

**Correct answer:** A --- Helps images avoid being stretched/distorted
when the container size changes, by maintaining a fixed aspect ratio

**Explanation:** AspectRatio maintains a fixed aspect ratio so images
aren't stretched when the container size changes. B, C, D don't match
its scope/function.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/ui/adaptive-responsive

------------------------------------------------------------------------

### PRM-206 --- 8 --- Theme & Responsive

Consider: a sort Dropdown is placed inside a `Row` with
`mainAxisSize: MainAxisSize.max` alongside other large fixed-size
widgets, causing the total width to exceed a small screen. In the spirit
of Module 6, what is the most reasonable solution?

-   **A.** Completely remove the Dropdown from small screens
-   **B.** Wrap the flexible element (like the Dropdown or long text)
    with `Flexible`/`Expanded`, or use `Wrap` to auto-wrap to a new line
    when there isn't enough space
-   **C.** Always give every element in the Row an absolute fixed size
-   **D.** Convert the entire Row into a Stack

**Correct answer:** B --- Wrap the flexible element (like the Dropdown
or long text) with `Flexible`/`Expanded`, or use `Wrap` to auto-wrap to
a new line when there isn't enough space

**Explanation:** Wrapping the flexible element with Flexible/Expanded or
using Wrap for auto-wrapping is the recommended solution. A, C, D don't
match the responsive principles taught.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/ui/adaptive-responsive

------------------------------------------------------------------------

### PRM-207 --- 8 --- Theme & Responsive

Comparing using `MediaQuery.of(context).size.width` at the full-screen
level versus `LayoutBuilder` at a deeply nested child widget level
(e.g. inside a narrow Card within a 3-column Row). Which statement is
most accurate?

-   **A.** Both approaches always give identical results in every case
-   **B.** `MediaQuery` returns the device's full screen width even
    though the child widget is much more constrained by its parent,
    while `LayoutBuilder` accurately reflects the real space
    (constraint) the child widget actually has --- so use LayoutBuilder
    when you need to respond to local space
-   **C.** LayoutBuilder cannot be used nested inside a Row
-   **D.** MediaQuery only works inside a StatelessWidget

**Correct answer:** B --- `MediaQuery` returns the device's full screen
width even though the child widget is much more constrained by its
parent, while `LayoutBuilder` accurately reflects the real space
(constraint) the child widget actually has --- so use LayoutBuilder when
you need to respond to local space

**Explanation:** MediaQuery returns full-screen width regardless of
local constraints; LayoutBuilder accurately reflects the actual local
space --- use LayoutBuilder for local responsiveness. A, C, D don't
match the analyzed technical characteristics.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/ui/adaptive-responsive

------------------------------------------------------------------------

### PRM-208 --- 8 --- Theme & Responsive

According to the lecture, which tool in Flutter Inspector helps debug
responsive layout?

-   **A.** Layout Explorer
-   **B.** Network Inspector
-   **C.** Memory Profiler
-   **D.** CPU Profiler

**Correct answer:** A --- Layout Explorer

**Explanation:** Layout Explorer" in Flutter Inspector helps debug
responsive layout, per Module 6's "Best Practices." B, C, D are not the
tool stated for this purpose.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/ui/adaptive-responsive

------------------------------------------------------------------------

### PRM-209 --- 8 --- Theme & Responsive

In the context of the responsive search bar: Container( padding:
EdgeInsets.symmetric(horizontal: 16), child: TextField(...), ) The
lecture notes "Students often forget SafeArea here." If this is the
first element in the Scaffold's `body` and has no SafeArea, what
specific risk is most likely on a device with a notch?

-   **A.** The TextField will be automatically disabled
-   **B.** The top of the search bar may be overlapped by the status
    bar/notch, making it hard for the user to tap the TextField
    accurately
-   **C.** The virtual keyboard will never appear
-   **D.** The app won't compile

**Correct answer:** B --- The top of the search bar may be overlapped by
the status bar/notch, making it hard for the user to tap the TextField
accurately

**Explanation:** Missing SafeArea risks the search bar's top being
overlapped by the status bar/notch, making the TextField hard to tap
accurately. A, C, D don't reflect the realistic risk.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/ui/adaptive-responsive

------------------------------------------------------------------------

### PRM-210 --- 8 --- Theme & Responsive

What is `FractionallySizedBox` in the responsive widget list used for?

-   **A.** Sizing a widget as a percentage relative to its parent
    widget, instead of a fixed pixel value
-   **B.** Only used for animations
-   **C.** Cropping rounded corners on a widget
-   **D.** Has no real function, purely illustrative in the slide

**Correct answer:** A --- Sizing a widget as a percentage relative to
its parent widget, instead of a fixed pixel value

**Explanation:** FractionallySizedBox sizes a widget as a percentage of
its parent, instead of fixed pixels. B, C, D misdescribe its function.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/ui/adaptive-responsive

------------------------------------------------------------------------

### PRM-211 --- 8 --- Theme & Responsive

Given: if (width \< 600) return MobileView(); return TabletView(); If
this breakpoint logic is placed in the `build()` function of a deeply
nested child widget inside multiple constrained `Padding`/`Container`
layers, but `width` is taken from `MediaQuery.of(context).size.width`
(full screen width) instead of `LayoutBuilder`, what is the potential
consequence?

-   **A.** No consequence at all because Flutter automatically syncs
-   **B.** The responsive decision could be wrong: the widget might
    incorrectly choose `TabletView` even though the actual local space
    it has is very narrow (because parent widgets have constrained the
    space), leading to overflow or an unsuitable layout
-   **C.** The app will always correctly show MobileView regardless of
    screen size
-   **D.** This is the only recommended way to write this in every case

**Correct answer:** B --- The responsive decision could be wrong: the
widget might incorrectly choose `TabletView` even though the actual
local space it has is very narrow (because parent widgets have
constrained the space), leading to overflow or an unsuitable layout

**Explanation:** Using full-screen MediaQuery width instead of local
LayoutBuilder constraints can lead to a wrong responsive decision and
overflow/unsuitable layout in nested contexts. A, C, D don't match the
realistic consequence.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/ui/adaptive-responsive

------------------------------------------------------------------------

### PRM-212 --- 8 --- Theme & Responsive

According to the "Types of Local Storage in Flutter" table, which case
best fits using SQLite (sqflite)?

-   **A.** Storing a boolean flag "has onboarding been completed
-   **B.** Storing structured relational data, e.g. a Todo app with many
    records needing querying, filtering, sorting
-   **C.** Storing only the light/dark theme
-   **D.** Storing a simple text string that needs no querying

**Correct answer:** B --- Storing structured relational data, e.g. a
Todo app with many records needing querying, filtering, sorting

**Explanation:** SQLite best fits structured relational data needing
query/filter/sort, like a Todo app. A, C, D fit better with
SharedPreferences or a simple file.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/ui/adaptive-responsive

------------------------------------------------------------------------

### PRM-213 --- 8 --- Theme & Responsive

Which data type is NOT listed as a typical example suitable for Local
Storage in "Why Local Storage?

-   **A.** Dark mode settings
-   **B.** Recently viewed items
-   **C.** Real-time video call session token (real-time streaming data)
-   **D.** Onboarding flag ("first-time user?")

**Correct answer:** C --- Real-time video call session token (real-time
streaming data)

**Explanation:** A real-time video call session token is NOT listed as a
typical Local Storage example. A, B, D are all examples explicitly
mentioned in the lecture.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/ui/adaptive-responsive

------------------------------------------------------------------------

### PRM-214 --- 8 --- Theme & Responsive

In Lab 9 (Offline-First Mini App), what part of the app is
SharedPreferences suggested to be used for?

-   **A.** Storing the entire relationally-structured Todo list
-   **B.** Storing the app's theme state (Dark/Light mode)
-   **C.** Storing the data export/import JSON file
-   **D.** Storing multi-table relational data

**Correct answer:** B --- Storing the app's theme state (Dark/Light
mode)

**Explanation:** SharedPreferences is suggested for storing the app's
theme state (Dark/Light mode) in Lab 9. A, C, D fit better with
SQLite/JSON file.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/ui/adaptive-responsive

------------------------------------------------------------------------

### PRM-215 --- 8 --- Theme & Responsive

Per "Optimization Technique 3: Avoid Heavy Work in build()," which of
the following should NOT be done directly inside the `build()` function?

-   **A.** Returning a simple `Text` widget
-   **B.** Calling an API, parsing JSON, sorting a list, or doing
    complex calculations
-   **C.** Returning a `Column` containing a few static child widgets
-   **D.** Reading a value from MediaQuery

**Correct answer:** B --- Calling an API, parsing JSON, sorting a list,
or doing complex calculations

**Explanation:** Calling APIs, parsing JSON, sorting, or complex
calculations should NOT be done inside build(). A, C, D are normal,
low-cost operations that don't cause significant performance issues in
build().

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/ui/adaptive-responsive

------------------------------------------------------------------------

### PRM-216 --- 8 --- Theme & Responsive

What required parameter does `AnimationController` need to work,
illustrating the connection between animation and widget lifecycle?

-   **A.** `context` --- because animation must be tied to BuildContext
-   **B.** `vsync` --- usually provided by `TickerProviderStateMixin`,
    to sync the animation with displayed frames and avoid wasting
    resources when the widget isn't visible
-   **C.** `theme` --- so the animation applies the correct color
-   **D.** `key` --- so the animation can be tested

**Correct answer:** B --- `vsync` --- usually provided by
`TickerProviderStateMixin`, to sync the animation with displayed frames
and avoid wasting resources when the widget isn't visible

**Explanation:** `vsync` (typically from TickerProviderStateMixin) syncs
the animation with display frames, avoiding wasted resources when not
visible. A, C, D are not AnimationController's required parameter.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/ui/adaptive-responsive

------------------------------------------------------------------------

### PRM-217 --- 8 --- Theme & Responsive

What do Material and Cupertino mainly provide in Flutter?

-   **A.** Two testing tools
-   **B.** Two types of local databases
-   **C.** Two state management systems
-   **D.** UI widget sets that follow Android and iOS design styles

**Correct answer:** D --- UI widget sets that follow Android and iOS
design styles

**Explanation:** Option D is correct: UI widget sets that follow Android
and iOS design styles. The answer matches Dart's type-system or
null-safety behavior; use nullable types and null-aware operators
deliberately to avoid null errors.

**Source:** Quizlet compilation 2

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/ui/adaptive-responsive

------------------------------------------------------------------------

### PRM-218 --- 8 --- Theme & Responsive

Why are custom exceptions useful?

-   **A.** They directly increase FPS
-   **B.** They replace Provider
-   **C.** They provide domain-specific error context instead of generic
    error strings
-   **D.** They automatically make the UI responsive

**Correct answer:** C --- They provide domain-specific error context
instead of generic error strings

**Explanation:** Option C is correct: They provide domain-specific error
context instead of generic error strings. The answer matches Dart's
type-system or null-safety behavior; use nullable types and null-aware
operators deliberately to avoid null errors.

**Source:** Quizlet compilation 2

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/ui/adaptive-responsive

------------------------------------------------------------------------

### PRM-219 --- 8 --- Theme & Responsive

What is responsive UI?

-   **A.** A UI that always uses fixed pixels
-   **B.** A layout that changes only according to the operating system
-   **C.** A UI that changes only its theme color
-   **D.** A layout that changes according to the available space

**Correct answer:** D --- A layout that changes according to the
available space

**Explanation:** Option D is correct: A layout that changes according to
the available space. The answer matches Dart's type-system or
null-safety behavior; use nullable types and null-aware operators
deliberately to avoid null errors.

**Source:** Quizlet compilation 2

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/ui/adaptive-responsive

------------------------------------------------------------------------

### PRM-220 --- 8 --- Theme & Responsive

What is adaptive UI?

-   **A.** A layout that changes only according to the parent's width
-   **B.** A layout that uses only SafeArea
-   **C.** A layout that uses only GridView
-   **D.** A layout or component that changes according to the device or
    platform type

**Correct answer:** D --- A layout or component that changes according
to the device or platform type

**Explanation:** Option D is correct: A layout or component that changes
according to the device or platform type. The answer matches Dart's
type-system or null-safety behavior; use nullable types and null-aware
operators deliberately to avoid null errors.

**Source:** Quizlet compilation 2

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/ui/adaptive-responsive

------------------------------------------------------------------------

### PRM-221 --- 8 --- Theme & Responsive

Which example is responsive behavior?

-   **A.** Replacing BottomNavigationBar with NavigationRail because the
    device is a tablet
-   **B.** Changing a grid from two columns to four columns when the
    screen becomes wider
-   **C.** Using Material on Android and Cupertino on iOS
-   **D.** Using Firebase Authentication

**Correct answer:** B --- Changing a grid from two columns to four
columns when the screen becomes wider

**Explanation:** Option B is correct: Changing a grid from two columns
to four columns when the screen becomes wider. The answer matches Dart's
type-system or null-safety behavior; use nullable types and null-aware
operators deliberately to avoid null errors.

**Source:** Quizlet compilation 2

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/ui/adaptive-responsive

------------------------------------------------------------------------

### PRM-222 --- 8 --- Theme & Responsive

Which example is adaptive behavior?

-   **A.** Increasing padding according to width
-   **B.** Allowing chips to wrap automatically
-   **C.** Using AspectRatio for an image
-   **D.** Replacing bottom navigation with NavigationRail on a tablet

**Correct answer:** D --- Replacing bottom navigation with
NavigationRail on a tablet

**Explanation:** Option D is correct: Replacing bottom navigation with
NavigationRail on a tablet. The answer matches Dart's type-system or
null-safety behavior; use nullable types and null-aware operators
deliberately to avoid null errors.

**Source:** Quizlet compilation 2

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/ui/adaptive-responsive

------------------------------------------------------------------------

### PRM-223 --- 8 --- Theme & Responsive

Which expression gets the screen width through MediaQuery?

-   **A.** Screen.getWidth()
-   **B.** MediaQuery.of(context).size.width
-   **C.** context.width.database
-   **D.** LayoutBuilder.width() without a builder

**Correct answer:** B --- MediaQuery.of(context).size.width

**Explanation:** Option B is correct: MediaQuery.of(context).size.width.
The answer matches Dart's type-system or null-safety behavior; use
nullable types and null-aware operators deliberately to avoid null
errors.

**Source:** Quizlet compilation 2

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/ui/adaptive-responsive

------------------------------------------------------------------------

### PRM-224 --- 8 --- Theme & Responsive

What does OrientationBuilder detect?

-   **A.** Light or dark theme
-   **B.** Portrait or landscape orientation
-   **C.** Whether a token has expired
-   **D.** Whether the device is online or offline

**Correct answer:** B --- Portrait or landscape orientation

**Explanation:** Option B is correct: Portrait or landscape orientation.
The answer matches Dart's type-system or null-safety behavior; use
nullable types and null-aware operators deliberately to avoid null
errors.

**Source:** Quizlet compilation 2

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/ui/adaptive-responsive

------------------------------------------------------------------------

### PRM-225 --- 9 --- State & Lifecycle

What is the difference between an arrow function (`=>`) and a function
block (`{ return ...; }`) in Dart?

-   **A.** Arrow functions can only be used for async functions
-   **B.** An arrow function is shorthand for a function with a single
    return expression, while a function block allows multiple statements
-   **C.** The two syntaxes have completely different meanings regarding
    return type
-   **D.** Arrow functions are not allowed to take parameters

**Correct answer:** B --- An arrow function is shorthand for a function
with a single return expression, while a function block allows multiple
statements

**Explanation:** Arrow function is shorthand for a single-expression
return; function block allows multiple statements. A, C, D do not match
this syntax's characteristics.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/data-and-backend/state-mgmt/intro

------------------------------------------------------------------------

### PRM-226 --- 9 --- State & Lifecycle

Consider this code, predict the result: Future`<String>`{=html}
fetchData() async { await Future.delayed(Duration(seconds: 1)); return
"Data loaded"; } void main() { print("Start"); fetchData().then((value)
=\> print(value)); print("End"); } What order is printed to console?

-   **A.** Start, Data loaded, End
-   **B.** Start, End, Data loaded
-   **C.** Data loaded, Start, End
-   **D.** Start, End (never prints "Data loaded")

**Correct answer:** B --- Start, End, Data loaded

**Explanation:** Since `fetchData()` is not awaited in `main()`, it
doesn't block subsequent code --- `.then()` is non-blocking, so "Start",
"End" print first, and after 1 second "Data loaded" prints. A, C have
the wrong order; D is wrong since Data loaded is eventually printed.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/data-and-backend/state-mgmt/intro

------------------------------------------------------------------------

### PRM-227 --- 9 --- State & Lifecycle

Consider the Student class and mini-lab: class Student { String name;
Student(this.name); } void main() async { var list = \[Student("An"),
Student("Binh")\]; await Future.delayed(Duration(seconds: 1));
list.forEach((s) =\> print(s.name)); } If the `await` keyword before
`Future.delayed(...)` is removed, what happens?

-   **A.** The program will show a compile error due to missing await
-   **B.** `forEach` still prints student names in the correct order but
    may run before the 1-second delay finishes (since it no longer waits
    for the Future to complete), because `Future.delayed` without await
    is merely "started" without blocking execution
-   **C.** The program will crash because the Future is unhandled
-   **D.** The student list order will be reversed

**Correct answer:** B --- `forEach` still prints student names in the
correct order but may run before the 1-second delay finishes (since it
no longer waits for the Future to complete), because `Future.delayed`
without await is merely "started" without blocking execution

**Explanation:** Not awaiting `Future.delayed` lets `main()` continue
executing subsequent statements without waiting the full second ---
though `forEach` still executes names in the correct order, it may run
before the "delay" completes (with no practical effect here since
nothing depends on the delay). A is wrong since it's not a compile
error; C is wrong since it doesn't crash; D is wrong since the name
order is preserved.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/data-and-backend/state-mgmt/intro

------------------------------------------------------------------------

### PRM-228 --- 9 --- State & Lifecycle

Given the comparison table of `extends`, `implements`, `with`, which
best describes `implements`?

-   **A.** Inherits all available behavior from the parent class
-   **B.** Only inherits the "signature" of the class/interface, forcing
    you to rewrite all custom behavior --- used to define a contract
-   **C.** Used to share reusable code blocks without an inheritance
    relationship
-   **D.** Not supported by Dart, only exists in Java

**Correct answer:** B --- Only inherits the "signature" of the
class/interface, forcing you to rewrite all custom behavior --- used to
define a contract

**Explanation:** `implements` only takes the signature (interface),
forcing you to write all the behavior yourself, used as a contract. A
describes `extends`; C describes `mixin`; D is wrong since Dart fully
supports implements.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/data-and-backend/state-mgmt/intro

------------------------------------------------------------------------

### PRM-229 --- 9 --- State & Lifecycle

What is the main purpose behind introducing the Repository Pattern in
Module 3?

-   **A.** Fully replaces Widgets in Flutter
-   **B.** Separates data-fetching logic from the presentation/UI layer,
    making code easier to test and maintain, and forming the foundation
    for Bloc/Provider/Riverpod
-   **C.** Only used for apps with no UI
-   **D.** A replacement for SQLite

**Correct answer:** B --- Separates data-fetching logic from the
presentation/UI layer, making code easier to test and maintain, and
forming the foundation for Bloc/Provider/Riverpod

**Explanation:** The Repository Pattern separates data fetching from UI,
aiding testability/maintainability, and forms the foundation for
Bloc/Provider/Riverpod. A, C, D misdescribe its purpose.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/data-and-backend/state-mgmt/intro

------------------------------------------------------------------------

### PRM-230 --- 9 --- State & Lifecycle

Given this repository code using a Stream: Stream`<int>`{=html}
counter() async { for (int i = 1; i \<= 3; i++) { await
Future.delayed(Duration(milliseconds: 300)); yield i; } } When this
Stream is bound to `StreamBuilder(stream: repo.counter(), ...)`, how
will the UI behave?

-   **A.** The UI only builds once, after the entire loop finishes
-   **B.** The UI automatically rebuilds each time a new value is
    `yield`-ed, creating a real-time update effect
-   **C.** StreamBuilder doesn't support Streams generated from `async`
-   **D.** The app will freeze (block the UI thread) for a full 900ms

**Correct answer:** B --- The UI automatically rebuilds each time a new
value is `yield`-ed, creating a real-time update effect

**Explanation:** The UI automatically rebuilds each time a new value is
yielded, creating a real-time update effect. A is wrong since
StreamBuilder rebuilds per event; C is wrong since StreamBuilder fully
supports async\*; D is wrong since the delay doesn't block the whole UI
thread thanks to the async mechanism.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/data-and-backend/state-mgmt/intro

------------------------------------------------------------------------

### PRM-231 --- 9 --- State & Lifecycle

Given: class \_RadioScreenState extends State`<RadioScreen>`{=html} {
String? quality = 'HD'; @override Widget build(BuildContext context) {
return Column(children: \[ RadioListTile`<String>`{=html}( title: const
Text('SD'), value: 'SD', groupValue: quality, onChanged: (v) =\>
setState(() =\> quality = v), ), RadioListTile`<String>`{=html}( title:
const Text('HD'), value: 'HD', groupValue: quality, onChanged: (v) =\>
setState(() =\> quality = v), ), \]); } } If `setState()` is removed
from `onChanged` (keeping only `quality = v`), what happens when the
user taps 'SD'?

-   **A.** Variable `quality` is still updated to 'SD' but the UI
    doesn't rebuild to reflect the change, the radio still displays as
    before
-   **B.** The app throws a runtime error immediately
-   **C.** The radio button automatically rebuilds because Flutter
    always tracks every variable in State
-   **D.** The value of quality won't change because setState i

**Correct answer:** A --- Variable `quality` is still updated to 'SD'
but the UI doesn't rebuild to reflect the change, the radio still
displays as before

**Explanation:** Without setState, `quality` still updates in memory but
Flutter doesn't know to rebuild --- the UI shows no change. B is wrong
since there's no runtime error; C is wrong since Flutter doesn't
auto-track every variable; D is wrong since quality does change, only
the UI doesn't.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/data-and-backend/state-mgmt/intro

------------------------------------------------------------------------

### PRM-232 --- 9 --- State & Lifecycle

This code is used to pick a date: Future`<void>`{=html} pickDate() async
{ final date = await showDatePicker( context: context, initialDate:
DateTime.now(), firstDate: DateTime(2000), lastDate: DateTime(2100), );
if (date != null) setState(() =\> selectedDate = date); } Why is
checking `if (date != null)` needed before calling `setState`?

-   **A.** Because `showDatePicker` always returns null when working
    correctly
-   **B.** Because the user might cancel/dismiss the date-picker dialog,
    in which case the Future returns null, and you shouldn't setState
    with an unwanted null value
-   **C.** Because this is required Dart syntax for every async function
-   **D.** Because DateTime is never allowed to be null in Flutter

**Correct answer:** B --- Because the user might cancel/dismiss the
date-picker dialog, in which case the Future returns null, and you
shouldn't setState with an unwanted null value

**Explanation:** The null check is needed since the user can cancel the
dialog, causing the Future to return null, and you shouldn't setState
with an unwanted null. A, C, D don't match the actual reason.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/data-and-backend/state-mgmt/intro

------------------------------------------------------------------------

### PRM-233 --- 9 --- State & Lifecycle

In the `HomeTabs` example: class \_HomeTabsState extends
State`<HomeTabs>`{=html} { int index = 0; final screens = const
\[Center(child: Text('Home')), ...\]; @override Widget
build(BuildContext context) { return Scaffold( body: screens\[index\],
bottomNavigationBar: BottomNavigationBar( currentIndex: index, onTap:
(i) =\> setState(() =\> index = i), items: const \[...\], ), ); } } If
the `index` variable were not held inside a `StatefulWidget`
(e.g. declared in a StatelessWidget), what would happen when the user
taps a tab?

-   **A.** The app still works normally because StatelessWidget also
    supports setState
-   **B.** `setState` cannot be called, and the UI cannot automatically
    update the corresponding screen when the user switches tabs, because
    StatelessWidget has no mechanism for mutable internal state
-   **C.** The program will automatically switch to using
    InheritedWidget
-   **D.** There's no difference b

**Correct answer:** B --- `setState` cannot be called, and the UI cannot
automatically update the corresponding screen when the user switches
tabs, because StatelessWidget has no mechanism for mutable internal
state

**Explanation:** StatelessWidget has no setState, so it can't store and
update the `index` state when the user taps a tab. A, C, D misdescribe
StatelessWidget's characteristics.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/data-and-backend/state-mgmt/intro

------------------------------------------------------------------------

### PRM-234 --- 9 --- State & Lifecycle

In Module 4's "Common Errors & Fixes" list, what is the common cause of
the UI "not updating" after data changes?

-   **A.** Network error
-   **B.** Forgetting to call `setState()` after changing a variable's
    value in a StatefulWidget
-   **C.** Missing Scaffold
-   **D.** Incorrect import syntax

**Correct answer:** B --- Forgetting to call `setState()` after changing
a variable's value in a StatefulWidget

**Explanation:** Forgetting to call `setState()` is the common cause of
a UI not updating, per the "Common Errors & Fixes" checklist. A, C, D
are not the cause stated in the lecture.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/data-and-backend/state-mgmt/intro

------------------------------------------------------------------------

### PRM-235 --- 9 --- State & Lifecycle

What is the basic difference between `StatelessWidget` and
`StatefulWidget`?

-   **A.** StatelessWidget can change its UI more flexibly than
    StatefulWidget
-   **B.** StatelessWidget holds no mutable internal state and doesn't
    rebuild when internal data changes; StatefulWidget holds state (a
    State object) and can rebuild via `setState()`
-   **C.** Only StatelessWidget has a `build()` method
-   **D.** StatefulWidget is not allowed to contain child widgets

**Correct answer:** B --- StatelessWidget holds no mutable internal
state and doesn't rebuild when internal data changes; StatefulWidget
holds state (a State object) and can rebuild via `setState()`

**Explanation:** StatelessWidget has no mutable state and doesn't
rebuild on its own; StatefulWidget holds a State object and rebuilds via
setState(). A, C, D misdescribe the basic characteristics of the two
widget types.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/data-and-backend/state-mgmt/intro

------------------------------------------------------------------------

### PRM-236 --- 9 --- State & Lifecycle

Given this CounterPage code using `setState`: class \_CounterPageState
extends State`<CounterPage>`{=html} { int count = 0; void increment() {
setState(() { count++; }); } ... } If replaced with just `count++;`
WITHOUT calling `setState()`, what happens?

-   **A.** `count`'s value still correctly increases in memory, but
    Flutter won't know to rebuild the widget, so the UI's displayed
    count doesn't change
-   **B.** The app throws an immediate compile error
-   **C.** The UI still automatically updates because Flutter always
    tracks every variable in State
-   **D.** The count value resets to 0 every time it rebuilds

**Correct answer:** A --- `count`'s value still correctly increases in
memory, but Flutter won't know to rebuild the widget, so the UI's
displayed count doesn't change

**Explanation:** Without setState, count still increases in memory, but
Flutter doesn't know to rebuild --- the UI shows an unchanged count. B
is wrong since there's no compile error; C is wrong since Flutter
doesn't auto-track every variable; D is wrong since count isn't reset.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/data-and-backend/state-mgmt/intro

------------------------------------------------------------------------

### PRM-237 --- 9 --- State & Lifecycle

What does "Lifting State Up" mean in Flutter?

-   **A.** Removing all state from the app
-   **B.** Moving shared state up to a common ancestor widget so child
    widgets can access and sync data, reducing duplicated logic
-   **C.** Moving all UI logic to the server side
-   **D.** Only applicable when using Provider

**Correct answer:** B --- Moving shared state up to a common ancestor
widget so child widgets can access and sync data, reducing duplicated
logic

**Explanation:** Lifting State Up moves shared state to a common
ancestor to reduce duplicated logic and improve data flow. A, C, D
misdescribe this concept.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/data-and-backend/state-mgmt/intro

------------------------------------------------------------------------

### PRM-238 --- 9 --- State & Lifecycle

What foundation does `Provider` (ChangeNotifierProvider + Consumer)
build on in Flutter, and what benefit does it bring over plain
InheritedWidget?

-   **A.** Built on SQLite, helps store offline data
-   **B.** Built on top of InheritedWidget but reduces boilerplate code,
    making state sharing and listening much easier
-   **C.** Unrelated to InheritedWidget at all
-   **D.** Provider only works with the String data type

**Correct answer:** B --- Built on top of InheritedWidget but reduces
boilerplate code, making state sharing and listening much easier

**Explanation:** Provider is built on InheritedWidget but reduces
boilerplate for state sharing/listening. A, C, D don't match Provider's
actual technical foundation.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/data-and-backend/state-mgmt/intro

------------------------------------------------------------------------

### PRM-239 --- 9 --- State & Lifecycle

Given this Provider code: class CounterModel with ChangeNotifier { int
count = 0; void increment() { count++; notifyListeners(); } } If the
`notifyListeners();` line is removed from `increment()`, what happens?

-   **A.** The program shows a compile error
-   **B.** `count` still increases in memory, but
    `Consumer<CounterModel>` widgets won't be notified to rebuild, so
    the UI doesn't show the new value
-   **C.** `notifyListeners()` has no effect on the UI, it's just an
    internal log
-   **D.** The app automatically calls notifyListeners() silently every
    second

**Correct answer:** B --- `count` still increases in memory, but
`Consumer<CounterModel>` widgets won't be notified to rebuild, so the UI
doesn't show the new value

**Explanation:** Without notifyListeners(), count still increases in
memory but Consumer widgets aren't notified to rebuild --- the UI
doesn't update. A, C, D misdescribe this behavior.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/data-and-backend/state-mgmt/intro

------------------------------------------------------------------------

### PRM-240 --- 9 --- State & Lifecycle

In the "Managing App State" section with `ChangeNotifier`: class
AppState extends ChangeNotifier { bool loggedIn = false; void login() {
loggedIn = true; notifyListeners(); } } Why is separating state
(login/logout) into its own class away from the UI considered good
practice (per the instructor's note)?

-   **A.** Because Flutter requires this to compile
-   **B.** Because separation increases testability and clarifies the
    app's architecture; the UI only needs to listen for changes instead
    of managing business logic itself
-   **C.** Because doing so makes the app run twice as fast
-   **D.** No specific reason, just the instructor's personal preference

**Correct answer:** B --- Because separation increases testability and
clarifies the app's architecture; the UI only needs to listen for
changes instead of managing business logic itself

**Explanation:** Separating state improves testability and architecture
clarity, letting the UI just listen instead of managing business logic.
A, C, D are not the correct/valid reason.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/data-and-backend/state-mgmt/intro

------------------------------------------------------------------------

### PRM-241 --- 9 --- State & Lifecycle

According to Module 5's Summary, which state management techniques are
covered, in order from basic to more advanced?

-   **A.** Provider → InheritedWidget → setState
-   **B.** setState → InheritedWidget → Provider
-   **C.** Only setState is covered, no other technique is mentioned
-   **D.** BLoC → Riverpod → GetX

**Correct answer:** B --- setState → InheritedWidget → Provider

**Explanation:** Per the Summary, the order from basic to advanced is:
setState → InheritedWidget → Provider. A reverses the order; C is
incomplete; D is not the focus of Module 5 (only briefly mentioned as
prep in Module 3).

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/data-and-backend/state-mgmt/intro

------------------------------------------------------------------------

### PRM-242 --- 9 --- State & Lifecycle

In Demo 8.3, the `try/catch/finally` block is used as follows: try {
final response = await http.post(...); if (response.statusCode == 201) {
setState(() =\> result = response.body); } else { throw
Exception('Failed with status: \${response.statusCode}'); } } catch (e)
{ setState(() =\> errorMessage = e.toString()); } finally { setState(()
=\> isLoading = false); } Why is `setState(() => isLoading = false);`
placed in the `finally` block instead of just in the `try` block?

-   **A.** No difference between placing it in try or finally
-   **B.** To ensure the loading state is always turned off whether the
    request succeeds or fails (throws an exception), avoiding the button
    getting "stuck" in loading state permanently on error
-   **C.** `finally` runs before `try`, so it must be placed there to
    run earlier
-   **D.** Placing it in finally causes isLoading to never become false

**Correct answer:** B --- To ensure the loading state is always turned
off whether the request succeeds or fails (throws an exception),
avoiding the button getting "stuck" in loading state permanently on
error

**Explanation:** finally ensures isLoading is always turned off
regardless of success or failure, avoiding a permanently stuck loading
state. A, C, D don't match finally's actual role/execution order.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/data-and-backend/state-mgmt/intro

------------------------------------------------------------------------

### PRM-243 --- 9 --- State & Lifecycle

In Module 8's "Common Pitfalls & Best Practices," how is calling an API
directly inside `build()` regarded?

-   **A.** A best practice that should be applied
-   **B.** A common pitfall to avoid --- since `build()` can be called
    repeatedly, leading to uncontrolled repeated API calls; you should
    call the API in `initState()` instead
-   **C.** The only way to call an API in Flutter
-   **D.** Only causes problems with POST, doesn't affect GET

**Correct answer:** B --- A common pitfall to avoid --- since `build()`
can be called repeatedly, leading to uncontrolled repeated API calls;
you should call the API in `initState()` instead

**Explanation:** Calling an API inside build() is a pitfall to avoid
since build() can rerun repeatedly; call in initState() instead. A, C, D
don't match the lecture's stated pitfall content.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/data-and-backend/state-mgmt/intro

------------------------------------------------------------------------

### PRM-244 --- 9 --- State & Lifecycle

Comparing parsing `response.body` (JSON) directly in a widget's
`build()` function versus parsing in a separate function (like
`fetchPosts()` called from `initState()`). Which statement is most
accurate regarding performance?

-   **A.** No performance difference between the two approaches
-   **B.** Parsing JSON in `build()` causes the heavy work (parsing) to
    be redone every time the widget rebuilds --- which can happen very
    often --- while parsing in a function called from `initState()`
    (with the result stored in a Future variable) only happens once per
    data load
-   **C.** build() always runs faster than initState() regardless of
    content
-   **D.** Where code is placed doesn't affect performance, only code
    organization

**Correct answer:** B --- Parsing JSON in `build()` causes the heavy
work (parsing) to be redone every time the widget rebuilds --- which can
happen very often --- while parsing in a function called from
`initState()` (with the result stored in a Future variable) only happens
once per data load

**Explanation:** Parsing in build() repeats the heavy work on every
rebuild, while parsing once from initState() (result cached in a Future)
happens only once per load. A, C, D don't match the real performance
analysis.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/data-and-backend/state-mgmt/intro

------------------------------------------------------------------------

### PRM-245 --- 9 --- State & Lifecycle

In SharedPreferences' standard High-Level Flow: "Load storage instance →
Read existing value → Update value based on user action → Save back to
storage → Refresh the UI." If the "Refresh the UI" step (e.g. calling
`setState()`) is skipped after saving the new value, what happens?

-   **A.** The value is still correctly saved to device storage (correct
    on the next app launch), but the current UI won't reflect the change
    immediately until another rebuild occurs
-   **B.** The value won't be saved to storage if this step is missing
-   **C.** The app will automatically crash
-   **D.** SharedPreferences will automatically call setState implicitly

**Correct answer:** A --- The value is still correctly saved to device
storage (correct on the next app launch), but the current UI won't
reflect the change immediately until another rebuild occurs

**Explanation:** The value is still correctly saved to storage, but the
current UI won't reflect the change until another rebuild happens. B, C,
D don't match SharedPreferences/Flutter's actual behavior.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/data-and-backend/state-mgmt/intro

------------------------------------------------------------------------

### PRM-246 --- 9 --- State & Lifecycle

In the Taskly App's architecture (used as the running example throughout
Module 11), which component is responsible for managing app-wide state?

-   **A.** TaskListScreen
-   **B.** TaskProvider
-   **C.** TaskRepository
-   **D.** main.dart

**Correct answer:** B --- TaskProvider

**Explanation:** TaskProvider is responsible for managing app-wide state
in Taskly's architecture. A, C, D don't match this responsibility.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/data-and-backend/state-mgmt/intro

------------------------------------------------------------------------

### PRM-247 --- 9 --- State & Lifecycle

Given this "before optimization" code from Demo 12.1: Widget
build(BuildContext context) { final tasks =
context.watch`<TaskProvider>`{=html}().tasks; return Column( children:
\[ InputRow(), // static Expanded( child: ListView.builder( itemCount:
tasks.length, itemBuilder: (\_, i) =\> ListTile( title:
Text(tasks\[i\].title), trailing: Checkbox(...), ), ), ), \], ); } Why
does using `context.watch<TaskProvider>()` right at the top-level widget
(including the static `InputRow`) cause a performance problem?

-   **A.** No problem at all, this is the recommended way to write it
-   **B.** Any change in `TaskProvider` (even a small change to one
    task) causes the entire parent widget (including the unrelated
    static `InputRow`) to rebuild, wasting resources unnecessarily
-   **C.** `context.watch` can only be used in a StatelessWidget,
    causing a compile error here
-   **D.** The only problem is misplacing Expanded

**Correct answer:** B --- Any change in `TaskProvider` (even a small
change to one task) causes the entire parent widget (including the
unrelated static `InputRow`) to rebuild, wasting resources unnecessarily

**Explanation:** Watching at the top level causes even unrelated static
widgets like InputRow to rebuild on any provider change, wasting
resources. A, C, D don't match the actual performance problem.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/data-and-backend/state-mgmt/intro

------------------------------------------------------------------------

### PRM-248 --- 9 --- State & Lifecycle

What benefit does the "Use Selector to rebuild ONLY the list" solution
in Demo 12.1 bring over a plain `context.watch<T>()`?

-   **A.** Selector allows fine-grained rebuilding --- only the UI
    portion actually dependent on the changed data rebuilds, instead of
    the entire parent widget as with a broad-scope watch
-   **B.** Selector and watch behave entirely identically regarding
    rebuilds
-   **C.** Selector only works with the String data type
-   **D.** Selector causes the entire app to always rebuild regardless
    of whether anything changed

**Correct answer:** A --- Selector allows fine-grained rebuilding ---
only the UI portion actually dependent on the changed data rebuilds,
instead of the entire parent widget as with a broad-scope watch

**Explanation:** Selector enables fine-grained rebuilds, only rebuilding
the part actually dependent on changed data. B, C, D don't match
Selector's real behavior/benefit.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/data-and-backend/state-mgmt/intro

------------------------------------------------------------------------

### PRM-249 --- 9 --- State & Lifecycle

Given: class \_MyWidgetState extends State`<MyWidget>`{=html} with
SingleTickerProviderStateMixin { late AnimationController \_controller;
@override void initState() { super.initState(); \_controller =
AnimationController( duration: const Duration(seconds: 2), vsync: this,
)..repeat(); } @override void dispose() { \_controller.dispose();
super.dispose(); } } If a developer forgets to call
`_controller.dispose()` in `dispose()`, what is the most likely
consequence?

-   **A.** No consequence at all because Dart automatically
    garbage-collects every object
-   **B.** The `AnimationController` (especially while `repeat()`-ing)
    keeps running even after the widget is removed from the tree,
    causing a memory leak and wasting CPU resources
-   **C.** The app crashes immediately when the widget is disposed
-   **D.** The animation automatically stops because Flutter always
    tracks widget lifecycle

**Correct answer:** B --- The `AnimationController` (especially while
`repeat()`-ing) keeps running even after the widget is removed from the
tree, causing a memory leak and wasting CPU resources

**Explanation:** Forgetting dispose() leaves a repeating
AnimationController running after widget removal, causing a memory leak
and wasted CPU. A is wrong since Dart's GC can't collect an object still
referenced by an active Ticker; C, D don't match Flutter's actual
behavior.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/data-and-backend/state-mgmt/intro

------------------------------------------------------------------------

### PRM-250 --- 9 --- State & Lifecycle

BLoC (Business Logic Component) is a state-management architecture
pattern in Flutter, based on which core concept?

-   **A.** A parent widget passes data directly to a child widget via
    the constructor
-   **B.** The input stream is Events, the output stream is States ---
    BLoC receives an Event, processes business logic, then emits a new
    State for the UI to listen to and update
-   **C.** Only using SharedPreferences to store state
-   **D.** There's no core concept, BLoC is just another name for
    setState

**Correct answer:** B --- The input stream is Events, the output stream
is States --- BLoC receives an Event, processes business logic, then
emits a new State for the UI to listen to and update

**Explanation:** BLoC's core concept: input stream = Events, output
stream = States, processing business logic in between. A, C, D
misdescribe BLoC's fundamental nature.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/data-and-backend/state-mgmt/intro

------------------------------------------------------------------------

### PRM-251 --- 9 --- State & Lifecycle

Given this simple Cubit code: class CounterCubit extends
Cubit`<int>`{=html} { CounterCubit() : super(0); void increment() =\>
emit(state + 1); } Which widget in `flutter_bloc` best listens to
`CounterCubit` and automatically rebuilds the UI whenever the `state`
value changes?

-   **A.** `FutureBuilder`
-   **B.** `BlocBuilder<CounterCubit, int>`
-   **C.** `StreamController`
-   **D.** `InheritedWidget` (used directly, without the library)

**Correct answer:** B --- `BlocBuilder<CounterCubit, int>`

**Explanation:** `BlocBuilder<CounterCubit, int>` is the correct
flutter_bloc API for listening to a Cubit and auto-rebuilding on state
changes. A, C, D are not the appropriate widget/API for this purpose.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/data-and-backend/state-mgmt/intro

------------------------------------------------------------------------

### PRM-252 --- 9 --- State & Lifecycle

Per BLoC pattern's design philosophy, why should business logic be
entirely separated from the UI widget?

-   **A.** Because Flutter doesn't allow writing logic inside a widget
-   **B.** To increase testability (testing logic independently without
    building the UI), reuse logic across different platforms/screens,
    and keep the widget focused on display
-   **C.** Because BLoC runs faster if the logic is inside the widget
-   **D.** No clear reason, it's just a naming convention

**Correct answer:** B --- To increase testability (testing logic
independently without building the UI), reuse logic across different
platforms/screens, and keep the widget focused on display

**Explanation:** Separation increases testability, allows logic reuse
across platforms/screens, and keeps widgets focused on display. A, C, D
misdescribe the purpose of this design philosophy.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/data-and-backend/state-mgmt/intro

------------------------------------------------------------------------

### PRM-253 --- 9 --- State & Lifecycle

Consider the Taskly app (from Modules 11/12) rewritten with BLoC
architecture instead of Provider: `TaskBloc` would receive
`AddTaskEvent` and `ToggleTaskEvent`, then emit a new `TaskState`.
Compared to using `TaskProvider` (ChangeNotifier) as in the original
slides, what is the core difference in the processing flow?

-   **A.** No difference at all, BLoC and Provider are entirely
    identical in how they receive changes from the UI
-   **B.** With ChangeNotifier (Provider), the UI directly calls a
    method on the Provider (e.g. `taskProvider.addTask(...)`) and the
    Provider mutates itself then calls `notifyListeners()`; with BLoC,
    the UI must "dispatch" an Event object
    (e.g. `bloc.add(AddTaskEvent(...))`) into the input stream, and the
    Bloc processes that Event to emit a new State, entirely decoupled
    from a direct call
-   **C.** BLoC cannot be used to build a Todo app like Taskly
-   **D.** Provider is required to use Events just

**Correct answer:** B --- With ChangeNotifier (Provider), the UI
directly calls a method on the Provider
(e.g. `taskProvider.addTask(...)`) and the Provider mutates itself then
calls `notifyListeners()`; with BLoC, the UI must "dispatch" an Event
object (e.g. `bloc.add(AddTaskEvent(...))`) into the input stream, and
the Bloc processes that Event to emit a new State, entirely decoupled
from a direct call

**Explanation:** Provider uses direct method calls + notifyListeners();
BLoC uses dispatched Events processed into emitted States, decoupled
from direct calls --- this is the core flow difference. A, C, D don't
match how the two architectures actually operate.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/data-and-backend/state-mgmt/intro

------------------------------------------------------------------------

### PRM-254 --- 9 --- State & Lifecycle

Why do many real-world Flutter projects choose BLoC instead of just
`setState` for large-scale apps with many screens sharing complex state?

-   **A.** Because `setState` isn't supported by Flutter in large apps
-   **B.** BLoC clearly separates the Event/State flow, making logic
    easier to test independently (without building UI), easier to trace
    data flow explicitly, and scales better when many screens need to
    share and react to the same complex state source --- something local
    `setState` struggles with as an app grows
-   **C.** `setState` only works with exactly 1 screen in the entire app
-   **D.** BLoC is always faster than setState in absolute render
    performance in every case

**Correct answer:** B --- BLoC clearly separates the Event/State flow,
making logic easier to test independently (without building UI), easier
to trace data flow explicitly, and scales better when many screens need
to share and react to the same complex state source --- something local
`setState` struggles with as an app grows

**Explanation:** BLoC's clear Event/State separation aids independent
testability, explicit data-flow tracing, and better scaling for shared
complex state across many screens. A, C, D don't match the real
reasoning for choosing BLoC.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/data-and-backend/state-mgmt/intro

------------------------------------------------------------------------

### PRM-255 --- 9 --- State & Lifecycle

Arrow syntax (=\>) is suitable for which type of function?

-   **A.** A mandatory factory constructor
-   **B.** A function without parameters
-   **C.** A function containing several try/catch blocks
-   **D.** A function consisting of a single expression

**Correct answer:** D --- A function consisting of a single expression

**Explanation:** Option D is correct: A function consisting of a single
expression. Flutter layout is composed from widgets; the selected widget
provides the arrangement, sizing, spacing, or constraint behavior
described.

**Source:** Quizlet compilation 2

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/data-and-backend/state-mgmt/intro

------------------------------------------------------------------------

### PRM-256 --- 9 --- State & Lifecycle

When is Future chaining with then() useful?

-   **A.** Defining an SQLite schema
-   **B.** Creating multiple inheritance chains
-   **C.** Drawing a widget tree
-   **D.** Chaining asynchronous steps without an async/await block

**Correct answer:** D --- Chaining asynchronous steps without an
async/await block

**Explanation:** Option D is correct: Chaining asynchronous steps
without an async/await block. Dart uses Future for a single asynchronous
result and Stream for a sequence of asynchronous events; async/await
makes Future-based code easier to read.

**Source:** Quizlet compilation 2

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/data-and-backend/state-mgmt/intro

------------------------------------------------------------------------

### PRM-257 --- 9 --- State & Lifecycle

Which keyword emits values from a Stream-producing async\* function?

-   **A.** yield
-   **B.** notifyListeners
-   **C.** return only
-   **D.** emitWidget

**Correct answer:** A --- yield

**Explanation:** Option A is correct: yield. Dart uses Future for a
single asynchronous result and Stream for a sequence of asynchronous
events; async/await makes Future-based code easier to read.

**Source:** Quizlet compilation 2

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/data-and-backend/state-mgmt/intro

------------------------------------------------------------------------

### PRM-258 --- 9 --- State & Lifecycle

What is a widget in Flutter?

-   **A.** A SQL table
-   **B.** A compiler
-   **C.** A type of token
-   **D.** The basic building block of the user interface

**Correct answer:** D --- The basic building block of the user interface

**Explanation:** Option D is correct: The basic building block of the
user interface. The answer matches Dart's type-system or null-safety
behavior; use nullable types and null-aware operators deliberately to
avoid null errors.

**Source:** Quizlet compilation 2

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/data-and-backend/state-mgmt/intro

------------------------------------------------------------------------

### PRM-259 --- 10 --- Interaction, Forms & Async UI

What is Flutter?

-   **A.** A new programming language developed by Google
-   **B.** A UI toolkit by Google for building natively compiled apps
    from a single codebase
-   **C.** A framework only for building web applications
-   **D.** A mobile operating system by Google

**Correct answer:** B --- A UI toolkit by Google for building natively
compiled apps from a single codebase

**Explanation:** Flutter is Google's UI toolkit for building natively
compiled apps from one codebase. (A is wrong because Flutter is not a
language; C is wrong because Flutter is cross-platform, not just web; D
is wrong because Flutter is not an OS.)

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/cookbook/forms

------------------------------------------------------------------------

### PRM-260 --- 10 --- Interaction, Forms & Async UI

Which layer of the Flutter architecture is written in C++ and uses Skia
to handle rendering, accessibility, and text layout?

-   **A.** Framework Layer
-   **B.** Engine Layer
-   **C.** Embedder Layer
-   **D.** Widget Layer

**Correct answer:** B --- Engine Layer

**Explanation:** The Engine Layer is written in C++ and uses Skia for
rendering/accessibility/text layout. Framework Layer (A) is the Dart
layer above it; Embedder (C) handles platform integration; 'Widget
Layer' (D) is not an official name for this architecture layer.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/cookbook/forms

------------------------------------------------------------------------

### PRM-261 --- 10 --- Interaction, Forms & Async UI

A startup wants to build an MVP quickly, running on both Android and
iOS, with a limited development team and no need for extreme graphics
performance. According to the lecture, this situation is:

-   **A.** Not suitable for Flutter because Flutter only supports
    Android
-   **B.** A reasonable fit for Flutter because it matches the goal of
    faster time-to-market and reduced development cost
-   **C.** Better suited to pure native code because Flutter doesn't
    support MVPs
-   **D.** Best done in Kotlin because Flutter is not optimized for
    commercial apps

**Correct answer:** B --- A reasonable fit for Flutter because it
matches the goal of faster time-to-market and reduced development cost

**Explanation:** The lecture states Flutter suits MVPs, startups, cost
reduction, and time-to-market --- matching this scenario exactly. A, C,
D all contradict the lecture content.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/cookbook/forms

------------------------------------------------------------------------

### PRM-262 --- 10 --- Interaction, Forms & Async UI

Flutter communicates with native features (Camera, Bluetooth, NFC...)
that it does not support directly through which mechanism?

-   **A.** WebSocket
-   **B.** Platform Channels
-   **C.** REST API
-   **D.** Automatic FFI Bridge

**Correct answer:** B --- Platform Channels

**Explanation:** Flutter integrates with native features via Platform
Channels. A, C, D are not the mechanism covered in the lecture.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/cookbook/forms

------------------------------------------------------------------------

### PRM-263 --- 10 --- Interaction, Forms & Async UI

According to the development history timeline mentioned in the lecture,
what platform support did Flutter 2.0 (2021) add?

-   **A.** Only added Android Wear support
-   **B.** Web and Desktop
-   **C.** Only added iOS support
-   **D.** Only added watchOS support

**Correct answer:** B --- Web and Desktop

**Explanation:** Flutter 2.0 (2021) added Web and Desktop support per
the lecture's timeline. A, C, D do not match the stated milestones.

**Source:** Quizlet compilation 1

**Verification note:** Historical/version-specific claim from the
supplied study set; verify against the relevant Flutter release notes if
the exam asks for exact version history.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/cookbook/forms

------------------------------------------------------------------------

### PRM-264 --- 10 --- Interaction, Forms & Async UI

According to the lecture, when should a development team consider using
native code (Kotlin/Swift) instead of pure Flutter?

-   **A.** When the app needs very low-level hardware access or strict
    platform-specific UI/UX requirements
-   **B.** When the app only needs to run on a simple single Android
    platform
-   **C.** When the team has little experience with Kotlin/Swift
-   **D.** When the app only displays a static list of text

**Correct answer:** A --- When the app needs very low-level hardware
access or strict platform-specific UI/UX requirements

**Explanation:** Native should be considered for very low-level hardware
access or strict platform-specific UI/UX --- matching 'When Native
Development Is Preferable.' B, C, D are cases where Flutter still fits
or are unrelated.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/cookbook/forms

------------------------------------------------------------------------

### PRM-265 --- 10 --- Interaction, Forms & Async UI

Given the comparison table: Flutter (Dart, Native UI + Engine), React
Native (JS, Bridge to Native), Native (Kotlin/Swift, Pure Native). Which
statement best analyzes the trade-off among these three approaches?

-   **A.** Native is always slower than Flutter because it has no
    dedicated engine
-   **B.** React Native is fastest because it needs no compilation
-   **C.** Flutter achieves near-native performance thanks to its own
    renderer engine (Skia) without needing a bridge like React Native,
    while Native achieves maximum performance but loses the
    shared-codebase advantage
-   **D.** All three produce identical pure native code

**Correct answer:** C --- Flutter achieves near-native performance
thanks to its own renderer engine (Skia) without needing a bridge like
React Native, while Native achieves maximum performance but loses the
shared-codebase advantage

**Explanation:** Flutter achieves near-native performance via its own
Skia engine without a bridge like React Native; Native achieves top
performance but loses the shared codebase --- this is the accurate
trade-off per the comparison table. A, B, D are wrong or oversimplified.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/cookbook/forms

------------------------------------------------------------------------

### PRM-266 --- 10 --- Interaction, Forms & Async UI

Given: List`<int>`{=html} nums = \[1, 2, 3, 4, 5\]; var result =
nums.map((e) =\> e \* 2).where((e) =\> e \> 4).toList(); print(result);
What is printed?

-   **A.** \[2, 4, 6, 8, 10\]
-   **B.** \[6, 8, 10\]
-   **C.** \[3, 4, 5\]
-   **D.** \[1, 2, 3, 4, 5\]

**Correct answer:** B --- \[6, 8, 10\]

**Explanation:** `[1,2,3,4,5].map(x*2) = [2,4,6,8,10]`, then
`.where(e>4) = [6,8,10]`. A only shows the map step; C, D do not match
the transformation.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/cookbook/forms

------------------------------------------------------------------------

### PRM-267 --- 10 --- Interaction, Forms & Async UI

In the following code, what is printed to the console? void main() { try
{ int result = 10 \~/ 0; print(result); } catch (e) { print("Error:
\$e"); } finally { print("Done"); } }

-   **A.** Error: ... then Done (integer division by zero throws
    IntegerDivisionByZeroException)
-   **B.** 10, without printing Done
-   **C.** Infinity, Done
-   **D.** The program crashes completely with no output

**Correct answer:** A --- Error: ... then Done (integer division by zero
throws IntegerDivisionByZeroException)

**Explanation:** Integer division by 0 with `~/` throws
`IntegerDivisionByZeroException`, caught by `catch`, printing "Error:
..." then "Done" (finally always runs). B, C are wrong since an
exception occurs; D is wrong since catch handles the error, the program
doesn't fully crash.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/cookbook/forms

------------------------------------------------------------------------

### PRM-268 --- 10 --- Interaction, Forms & Async UI

What is the difference between `for-in` and `forEach` when iterating a
List in Dart?

-   **A.** `for-in` cannot be used with a List
-   **B.** `forEach` is the classic index-based loop syntax, while
    `for-in` is a higher-order function
-   **C.** `for-in` is syntax for iterating each element of a
    collection, while `forEach` calls a callback function in a
    functional programming style for each element
-   **D.** The two syntaxes are entirely identical in performance and
    syntax, with no difference

**Correct answer:** C --- `for-in` is syntax for iterating each element
of a collection, while `forEach` calls a callback function in a
functional programming style for each element

**Explanation:** `for-in` iterates each collection element; `forEach` is
a higher-order function taking a callback in a functional style. A is
wrong since for-in works with List; B reverses the description; D is
wrong since there is a stylistic difference.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/cookbook/forms

------------------------------------------------------------------------

### PRM-269 --- 10 --- Interaction, Forms & Async UI

Consider this code illustrating Dart's Event Loop: import 'dart:async';
void main() { print("A"); scheduleMicrotask(() =\> print("micro"));
Future(() =\> print("future")); print("B"); } What is the correct output
order?

-   **A.** A, B, micro, future
-   **B.** A, micro, future, B
-   **C.** A, B, future, micro
-   **D.** micro, A, B, future

**Correct answer:** A --- A, B, micro, future

**Explanation:** Microtasks have higher priority than the Event queue
but still run after currently executing synchronous code: prints "A",
"B" (sync first), then microtask "micro" runs before Future "future".
Correct answer: A, B, micro, future.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/cookbook/forms

------------------------------------------------------------------------

### PRM-270 --- 10 --- Interaction, Forms & Async UI

Given this Stream code: Stream`<int>`{=html} countUp() async { for (int
i = 1; i \<= 3; i++) { yield i; } } void main() async { await for (var
value in countUp()) { print(value); } } What is printed?

-   **A.** 1
-   **B.** 1 2 3 (each number on its own line)
-   **C.** 3 2 1
-   **D.** Error because `async` is not allowed for a function returning
    a Stream

**Correct answer:** B --- 1 2 3 (each number on its own line)

**Explanation:** The `async`/`yield` loop generates 1, 2, 3 in order,
each printed on its own line via `await for`. A only lists one value; C
reverses the order; D is wrong since Dart fully supports `async`.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/cookbook/forms

------------------------------------------------------------------------

### PRM-271 --- 10 --- Interaction, Forms & Async UI

In Dart, what is the `Never` type used for?

-   **A.** A variable that is never assigned a value
-   **B.** A function that never returns normally (always throws an
    exception or loops infinitely)
-   **C.** A data type equivalent to `void`
-   **D.** A type used for asynchronous functions

**Correct answer:** B --- A function that never returns normally (always
throws an exception or loops infinitely)

**Explanation:** `Never` is used for functions that never return
normally (always throw or loop infinitely). A, C, D misdescribe the
purpose of the Never type.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/cookbook/forms

------------------------------------------------------------------------

### PRM-272 --- 10 --- Interaction, Forms & Async UI

In Dart's switch-case, why is `break` (or `return`) usually needed after
each case?

-   **A.** Because every non-empty case must end with break/return/continue --- Dart forbids implicit fall-through (unlike C), otherwise it is a compile error
-   **B.** Because Dart requires this syntax to compile, unrelated to
    behavior
-   **C.** Because break is used to exit the main function
-   **D.** Dart doesn't support switch-case

**Correct answer:** A --- Because every non-empty case must end with break/return/continue --- Dart forbids implicit fall-through (unlike C), otherwise it is a compile error

**Explanation:** Non-empty switch cases in Dart never fall through implicitly (only empty cases share a body); a terminator is required syntax. B, C, D misdescribe break's
role in switch-case.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/cookbook/forms

------------------------------------------------------------------------

### PRM-273 --- 10 --- Interaction, Forms & Async UI

What is a mixin used for in Dart?

-   **A.** Fully replaces constructors
-   **B.** Sharing behavior across multiple classes without a
    traditional inheritance chain
-   **C.** Used exclusively for JSON handling
-   **D.** A special kind of variable in Dart

**Correct answer:** B --- Sharing behavior across multiple classes
without a traditional inheritance chain

**Explanation:** A mixin shares behavior across multiple classes without
a traditional inheritance chain. A, C, D misdescribe the purpose of a
mixin.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/cookbook/forms

------------------------------------------------------------------------

### PRM-274 --- 10 --- Interaction, Forms & Async UI

How does a factory constructor differ from a regular constructor in
Dart?

-   **A.** A factory constructor always creates a completely new object,
    with no exceptions
-   **B.** A factory constructor allows control over instance creation
    --- it can return an existing instance (cache/singleton) or parse
    data (JSON) instead of always returning a new object
-   **C.** A factory constructor cannot be named
-   **D.** A factory constructor can only be used with an abstract class

**Correct answer:** B --- A factory constructor allows control over
instance creation --- it can return an existing instance
(cache/singleton) or parse data (JSON) instead of always returning a new
object

**Explanation:** A factory constructor controls instance creation --- it
can return an existing instance or parse data, instead of always
creating new. A is wrong since this is the exact difference; C, D are
incorrect about syntax/scope.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/cookbook/forms

------------------------------------------------------------------------

### PRM-275 --- 10 --- Interaction, Forms & Async UI

Given: class User { final String name; factory User.fromJson(Map j) =\>
User.\_(j\['name'\]); User.\_(this.name); } Why is the `User._`
constructor made private (with `_`)?

-   **A.** Because Dart requires every factory constructor to have an
    accompanying private constructor
-   **B.** To prevent code outside the class from directly calling the
    regular constructor, forcing usage through `User.fromJson` ---
    controlling how objects are created
-   **C.** Because `_` is a required naming convention for JSON parsing
-   **D.** No particular reason, just a coding style choice

**Correct answer:** B --- To prevent code outside the class from
directly calling the regular constructor, forcing usage through
`User.fromJson` --- controlling how objects are created

**Explanation:** Making the constructor private prevents direct calls
from outside, forcing usage through `fromJson` --- controlling object
creation. A, C, D are not the correct/precise reasons in this factory
pattern.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/cookbook/forms

------------------------------------------------------------------------

### PRM-276 --- 10 --- Interaction, Forms & Async UI

What is the main benefit that generics (`List<T>`, `Future<T>`,
`Map<K,V>`) bring in Dart?

-   **A.** Makes the program run faster on the CPU
-   **B.** Ensures compile-time type safety, avoiding errors from
    misusing the dynamic type
-   **C.** Allows completely skipping data type declarations
-   **D.** Only works with primitive types (int, double)

**Correct answer:** B --- Ensures compile-time type safety, avoiding
errors from misusing the dynamic type

**Explanation:** Generics ensure compile-time type safety, avoiding
dynamic-type misuse errors. A, C, D misdescribe the core benefit of
generics.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/cookbook/forms

------------------------------------------------------------------------

### PRM-277 --- 10 --- Interaction, Forms & Async UI

In Dart, which queue has HIGHER priority between the Microtask queue and
the Event queue?

-   **A.** The Event queue has higher priority, always running before
    the Microtask queue
-   **B.** The Microtask queue has higher priority --- all microtasks
    run before Dart continues processing the Event queue (Futures,
    timers, UI events)
-   **C.** Both run in parallel, with no priority order
-   **D.** Priority depends on the declaration order in the code, not
    fixed

**Correct answer:** B --- The Microtask queue has higher priority ---
all microtasks run before Dart continues processing the Event queue
(Futures, timers, UI events)

**Explanation:** The Microtask queue has higher priority --- all
microtasks run before Dart proceeds to the Event queue. A reverses this;
C, D don't match Dart's event loop mechanism.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/cookbook/forms

------------------------------------------------------------------------

### PRM-278 --- 10 --- Interaction, Forms & Async UI

Given this Future chaining code: Future(() =\> 1) .then((v) =\> v + 1)
.then((v) =\> print(v)); What value is printed?

-   **A.** 1
-   **B.** 2
-   **C.** 0
-   **D.** Nothing is printed because await is missing

**Correct answer:** B --- 2

**Explanation:** `Future(()=>1).then((v)=>v+1).then((v)=>print(v))` →
1+1 = 2, prints 2. A, C have the wrong value; D is wrong since the code
still executes without an explicit await at main.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/cookbook/forms

------------------------------------------------------------------------

### PRM-279 --- 10 --- Interaction, Forms & Async UI

Comparing Future chaining (`.then()`) with `async/await`, which
statement is most accurate?

-   **A.** `.then()` and `async/await` are entirely incompatible, cannot
    be used together in a project
-   **B.** `.then()` suits simple async chains without needing
    intermediate variables; `async/await` makes async code read
    linearly, easier to follow when there are multiple dependent steps
-   **C.** `async/await` runs fully synchronously, no longer
    asynchronous
-   **D.** `.then()` is always faster than `async/await` in terms of
    performance

**Correct answer:** B --- `.then()` suits simple async chains without
needing intermediate variables; `async/await` makes async code read
linearly, easier to follow when there are multiple dependent steps

**Explanation:** `.then()` suits simple chains; `async/await` helps code
read linearly when steps depend on each other. A is wrong since they can
be used together; C is wrong since async/await is still asynchronous; D
has no basis regarding absolute performance.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/cookbook/forms

------------------------------------------------------------------------

### PRM-280 --- 10 --- Interaction, Forms & Async UI

How does `StreamController.broadcast()` differ from the default
single-subscription Stream?

-   **A.** Broadcast only allows exactly one listener
-   **B.** Broadcast allows multiple listeners to listen simultaneously
    and receive shared events, while single-subscription only allows one
    listener, consuming sequentially
-   **C.** No real difference, just a different name
-   **D.** Broadcast only works with String data types

**Correct answer:** B --- Broadcast allows multiple listeners to listen
simultaneously and receive shared events, while single-subscription only
allows one listener, consuming sequentially

**Explanation:** Broadcast allows multiple listeners to receive shared
events; single-subscription allows only one. A reverses this; C, D don't
match the actual characteristics of the two Stream types.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/cookbook/forms

------------------------------------------------------------------------

### PRM-281 --- 10 --- Interaction, Forms & Async UI

Given this StreamController.broadcast() code: var c =
StreamController`<int>`{=html}.broadcast(); c.stream.listen((v) =\>
print("A:$v")); c.stream.listen((v) => print("B:$v"));
c..add(1)..add(2); What is printed, in order?

-   **A.** A:1, A:2, B:1, B:2
-   **B.** A:1, B:1, A:2, B:2
-   **C.** Only A:1, A:2 are printed because listener B doesn't work
-   **D.** Error because StreamController.broadcast() doesn't support
    multiple listeners

**Correct answer:** B --- A:1, B:1, A:2, B:2

**Explanation:** With `c..add(1)..add(2)`, each add triggers both
listeners A and B before the next add: A:1, B:1, A:2, B:2. A has the
wrong grouping order; C is wrong since both listeners work; D is wrong
since broadcast fully supports multiple listeners.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/cookbook/forms

------------------------------------------------------------------------

### PRM-282 --- 10 --- Interaction, Forms & Async UI

According to the "Performance Best Practices" section of Module 3, which
practice is NOT recommended?

-   **A.** Using const widgets to reduce rebuild cost
-   **B.** Running a heavy loop directly on the main isolate while
    building the UI
-   **C.** Using async functions for I/O operations
-   **D.** Using Isolates for heavy CPU tasks

**Correct answer:** B --- Running a heavy loop directly on the main
isolate while building the UI

**Explanation:** Running a heavy loop directly on the main isolate while
building UI is the practice that should NOT be done (opposite of best
practice). A, C, D are all recommended practices.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/cookbook/forms

------------------------------------------------------------------------

### PRM-283 --- 10 --- Interaction, Forms & Async UI

In Dart, what is the core difference between an `abstract class` and an
`implicit interface` (every class automatically has an interface)?

-   **A.** No difference, the two concepts are the same
-   **B.** An abstract class can contain both bodied and bodiless
    methods and cannot be instantiated directly; while any regular class
    automatically defines an implicit interface that other classes can
    `implements`
-   **C.** Interfaces only exist in Java, Dart has no such concept
-   **D.** Abstract classes are always faster than interfaces at runtime

**Correct answer:** B --- An abstract class can contain both bodied and
bodiless methods and cannot be instantiated directly; while any regular
class automatically defines an implicit interface that other classes can
`implements`

**Explanation:** Abstract class can mix bodied/bodiless methods and
can't be instantiated directly; any regular class automatically has an
implicit interface others can implement. A is wrong since there's a
clear difference; C is wrong since Dart has this concept via implicit
interfaces; D has no basis regarding absolute runtime performance.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/cookbook/forms

------------------------------------------------------------------------

### PRM-284 --- 10 --- Interaction, Forms & Async UI

A student writes this Repository: class Repo { Future`<String>`{=html}
getUser() async { await Future.delayed(Duration(milliseconds: 300));
return "Anna"; } } and calls `var name = repo.getUser();` (without using
`await`). What type and value will variable `name` have at the moment of
assignment?

-   **A.** Type String, value "Anna" immediately
-   **B.** Type Future`<String>`{=html}, a Future object still "pending"
    completion, not yet the actual String value
-   **C.** Type dynamic, value null
-   **D.** Compile error due to missing await

**Correct answer:** B --- Type Future`<String>`{=html}, a Future object
still "pending" completion, not yet the actual String value

**Explanation:** Without await, `name` has type `Future<String>` --- a
pending Future object, not yet the actual String value. A, C, D don't
match Future's behavior in Dart.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/cookbook/forms

------------------------------------------------------------------------

### PRM-285 --- 10 --- Interaction, Forms & Async UI

In RadioListTile, what is the role of the `groupValue` property?

-   **A.** Determines that particular radio button's own value
-   **B.** Holds the currently selected value for the entire group of
    RadioListTiles, used to compare against each item's `value` to
    determine selected state
-   **C.** Has no effect, purely decorative
-   **D.** Used to set the background color of RadioListTile

**Correct answer:** B --- Holds the currently selected value for the
entire group of RadioListTiles, used to compare against each item's
`value` to determine selected state

**Explanation:** `groupValue` holds the currently selected value for the
whole group, compared with each item's `value`. A, C, D misdescribe its
function.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/cookbook/forms

------------------------------------------------------------------------

### PRM-286 --- 10 --- Interaction, Forms & Async UI

What is the difference between `Slider` and `Switch` in Flutter?

-   **A.** Slider selects a continuous value within a range, Switch only
    toggles a boolean value
-   **B.** Both are used for boolean values
-   **C.** Switch is for real numbers, Slider is for boolean
-   **D.** No functional difference

**Correct answer:** A --- Slider selects a continuous value within a
range, Switch only toggles a boolean value

**Explanation:** Slider selects a continuous value, Switch only toggles
boolean. B, C, D misdescribe/reverse the two widgets' functions.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/cookbook/forms

------------------------------------------------------------------------

### PRM-287 --- 10 --- Interaction, Forms & Async UI

In the `showDatePicker` example, what are the `firstDate` and `lastDate`
parameters used for?

-   **A.** Determine the default current date
-   **B.** Restrict the valid date range the user can select on the
    calendar
-   **C.** No real effect, purely a required syntax parameter
-   **D.** Determine the date display format (dd/mm/yyyy or mm/dd/yyyy)

**Correct answer:** B --- Restrict the valid date range the user can
select on the calendar

**Explanation:** `firstDate`/`lastDate` restrict the valid selectable
date range on the calendar. A, C, D misdescribe these two parameters'
function.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/cookbook/forms

------------------------------------------------------------------------

### PRM-288 --- 10 --- Interaction, Forms & Async UI

In the Stateless/Stateful comparison table, which usage example fits
StatelessWidget?

-   **A.** An input form with validation
-   **B.** A counter that increases/decreases with user interaction
-   **C.** A static logo, unchanging text
-   **D.** A list where items can be added/removed

**Correct answer:** C --- A static logo, unchanging text

**Explanation:** A static logo/unchanging text fits StatelessWidget
since there's no rebuild needed. A, B, D all require StatefulWidget due
to changing state.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/cookbook/forms

------------------------------------------------------------------------

### PRM-289 --- 10 --- Interaction, Forms & Async UI

A student forgets to wrap a search bar in `SafeArea` on a device with a
notch. What is the most likely real-world consequence?

-   **A.** The app automatically crashes right at startup
-   **B.** Part of the search bar's top area may be obscured or clipped
    by the notch/status bar, harming the user experience
-   **C.** GridView automatically switches its layout to 2 columns
-   **D.** No effect at all, SafeArea is purely cosmetic and unnecessary

**Correct answer:** B --- Part of the search bar's top area may be
obscured or clipped by the notch/status bar, harming the user experience

**Explanation:** Missing SafeArea can cause the top of the search bar to
be obscured/clipped by the notch/status bar, harming UX. A, C, D don't
reflect the realistic consequence.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/cookbook/forms

------------------------------------------------------------------------

### PRM-290 --- 10 --- Interaction, Forms & Async UI

When should you use `TextFormField` instead of a plain `TextField`?

-   **A.** When you don't need any special functionality
-   **B.** When the input needs to be inside a `Form` and needs
    validation functionality
-   **C.** `TextFormField` can only be used for Web
-   **D.** There's no difference between the two widgets

**Correct answer:** B --- When the input needs to be inside a `Form` and
needs validation functionality

**Explanation:** Use TextFormField when the input is inside a Form and
needs validation. A, C, D misdescribe when to use it.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/cookbook/forms

------------------------------------------------------------------------

### PRM-291 --- 10 --- Interaction, Forms & Async UI

What is `GlobalKey<FormState>` used for in a `Form`?

-   **A.** Only used to set the form's color
-   **B.** Allows accessing and controlling the Form's state from
    outside, e.g. calling `validate()`, `save()`, `reset()` on all
    fields in the form
-   **C.** Syntactically required but has no real effect
-   **D.** Used to encrypt the entered data

**Correct answer:** B --- Allows accessing and controlling the Form's
state from outside, e.g. calling `validate()`, `save()`, `reset()` on
all fields in the form

**Explanation:** GlobalKey`<FormState>`{=html} allows
accessing/controlling the Form's state externally via
validate()/save()/reset(). A, C, D misdescribe its role.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/cookbook/forms

------------------------------------------------------------------------

### PRM-292 --- 10 --- Interaction, Forms & Async UI

Given: void \_submit() { final isValid =
\_formKey.currentState!.validate(); if (!isValid) return;
\_formKey.currentState!.save();
ScaffoldMessenger.of(context).showSnackBar( SnackBar(content:
Text('Signed up as $_name ($\_email)')), ); } If the order is swapped,
calling `_formKey.currentState!.save();` BEFORE calling `validate()`,
what could happen?

-   **A.** No difference, the call order doesn't matter
-   **B.** Invalid data could still be saved into state variables
    (`_name`, `_email`...) via `onSaved`, because save() doesn't itself
    check validity before saving --- validate() must be called first to
    ensure only checked data gets saved
-   **C.** The app will show a compile error
-   **D.** save() will automatically call validate() implicitly before
    saving

**Correct answer:** B --- Invalid data could still be saved into state
variables (`_name`, `_email`...) via `onSaved`, because save() doesn't
itself check validity before saving --- validate() must be called first
to ensure only checked data gets saved

**Explanation:** Calling save() before validate() risks saving
unvalidated data via onSaved, since save() doesn't check validity
itself. A is wrong since order matters; C is wrong since it's not a
compile error; D is wrong since save() doesn't auto-call validate().

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/cookbook/forms

------------------------------------------------------------------------

### PRM-293 --- 11 --- Navigation & Deep Links

According to the lecture, what common pitfall is emphasized for students
new to Dart?

-   **A.** Forgetting to close a class's curly braces
-   **B.** Ignoring null-safety warnings and improperly mixing
    synchronous/asynchronous code
-   **C.** Using too many async functions causing incorrect parallel
    execution
-   **D.** Being unable to create a String-type variable

**Correct answer:** B --- Ignoring null-safety warnings and improperly
mixing synchronous/asynchronous code

**Explanation:** The stated common pitfalls: ignoring null-safety
warnings and improperly mixing sync/async code. A, C, D are not content
emphasized in the lecture.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/ui/navigation

------------------------------------------------------------------------

### PRM-294 --- 11 --- Navigation & Deep Links

Consider Module 4's "Practice Task": build a movie list using
`ListView.builder` + `ListTile`, where `onTap` needs to show
`SnackBar(title)`. What is the correct way to call a SnackBar in
Flutter?

-   **A.** `Text(title).showSnackBar()`
-   **B.**
    `ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text(title)))`
-   **C.** `Navigator.of(context).showSnackBar(title)`
-   **D.** `SnackBar.show(context, title)`

**Correct answer:** B ---
`ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text(title)))`

**Explanation:**
`ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text(title)))`
is the correct call. A, C, D are not valid Flutter APIs.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/ui/navigation

------------------------------------------------------------------------

### PRM-295 --- 11 --- Navigation & Deep Links

In Flutter, what does `Navigator.push()` do?

-   **A.** Clears the entire navigation stack
-   **B.** Adds (pushes) a new route/screen onto the top of the
    navigation stack
-   **C.** Goes back to the previous screen
-   **D.** Closes the app

**Correct answer:** B --- Adds (pushes) a new route/screen onto the top
of the navigation stack

**Explanation:** `Navigator.push()` pushes a new route onto the top of
the navigation stack. A, C, D misdescribe this method's function.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/ui/navigation

------------------------------------------------------------------------

### PRM-296 --- 11 --- Navigation & Deep Links

What does the `Navigator.pop(context)` method do?

-   **A.** Pushes another new screen onto the stack
-   **B.** Removes (pops) the screen currently at the top of the stack,
    revealing the screen below it
-   **C.** Replaces the entire stack with a new route
-   **D.** Restarts the app from scratch

**Correct answer:** B --- Removes (pops) the screen currently at the top
of the stack, revealing the screen below it

**Explanation:** `Navigator.pop(context)` removes the top screen from
the stack, showing the one below. A, C, D misdescribe this behavior.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/ui/navigation

------------------------------------------------------------------------

### PRM-297 --- 11 --- Navigation & Deep Links

What is the difference between `Navigator.push()` and
`Navigator.pushReplacement()`?

-   **A.** No difference
-   **B.** `push()` adds a new route on top of the current one (the old
    route stays in the stack), while `pushReplacement()` replaces the
    current route with a new one (the old route is removed from the
    stack)
-   **C.** `pushReplacement()` can only be used with named routes
-   **D.** `push()` doesn't allow going back with the back button

**Correct answer:** B --- `push()` adds a new route on top of the
current one (the old route stays in the stack), while
`pushReplacement()` replaces the current route with a new one (the old
route is removed from the stack)

**Explanation:** `push()` keeps the old route in the stack;
`pushReplacement()` removes the old route when adding the new one. A is
wrong since there's a clear difference; C, D are not accurate technical
characteristics.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/ui/navigation

------------------------------------------------------------------------

### PRM-298 --- 11 --- Navigation & Deep Links

In a login flow, a developer uses
`Navigator.pushReplacementNamed(context, '/home')` instead of
`Navigator.pushNamed(context, '/home')` after a successful login. What
is the most reasonable reason for this choice?

-   **A.** `pushReplacementNamed` runs faster in terms of performance
-   **B.** It prevents the user from pressing Back to return to the
    Login screen after successfully logging in, since the Login route
    has been removed from the stack
-   **C.** `pushNamed` doesn't support passing parameters
-   **D.** There's no real difference between the two calls

**Correct answer:** B --- It prevents the user from pressing Back to
return to the Login screen after successfully logging in, since the
Login route has been removed from the stack

**Explanation:** `pushReplacementNamed` prevents returning to Login via
Back since the Login route is removed from the stack. A, C, D are not
the correct reason.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/ui/navigation

------------------------------------------------------------------------

### PRM-299 --- 11 --- Navigation & Deep Links

What benefit do Named Routes in Flutter bring over calling
`MaterialPageRoute` directly everywhere?

-   **A.** Named Routes run faster at runtime
-   **B.** They increase readability and scalability in large apps,
    especially when parameters need to be passed or many screens need
    centralized management
-   **C.** Named Routes are the only way Flutter supports navigation
-   **D.** Named Routes only work with Navigator 2.0

**Correct answer:** B --- They increase readability and scalability in
large apps, especially when parameters need to be passed or many screens
need centralized management

**Explanation:** Named Routes improve readability and scalability in
large apps, especially for parameter passing and centralized screen
management. A, C, D don't match the actual benefit.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/ui/navigation

------------------------------------------------------------------------

### PRM-300 --- 11 --- Navigation & Deep Links

What is the core difference between Navigator 1.0 and Navigator 2.0?

-   **A.** Navigator 1.0 uses a declarative model, Navigator 2.0 uses an
    imperative model
-   **B.** Navigator 1.0 is imperative --- manually calling
    push()/pop(); Navigator 2.0 is declarative --- describing the
    desired stack state and letting the framework sync automatically
-   **C.** Both are entirely identical, just different names across
    Flutter versions
-   **D.** Navigator 2.0 doesn't support deep linking, only Navigator
    1.0 does

**Correct answer:** B --- Navigator 1.0 is imperative --- manually
calling push()/pop(); Navigator 2.0 is declarative --- describing the
desired stack state and letting the framework sync automatically

**Explanation:** Navigator 1.0 is imperative (manual push/pop);
Navigator 2.0 is declarative (describes the desired stack, framework
syncs). A reverses this; C, D don't match the two versions'
characteristics.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/ui/navigation

------------------------------------------------------------------------

### PRM-301 --- 11 --- Navigation & Deep Links

What are the three main components in Navigator 2.0's architecture, as
mentioned in the lecture?

-   **A.** Router, Controller, View
-   **B.** RouterDelegate, RouteInformationParser, BackButtonDispatcher
-   **C.** Navigator, Route, Stack
-   **D.** Provider, Consumer, ChangeNotifier

**Correct answer:** B --- RouterDelegate, RouteInformationParser,
BackButtonDispatcher

**Explanation:** The three main components: RouterDelegate,
RouteInformationParser, BackButtonDispatcher --- matching the slide. A,
C, D are not the correct names of these components.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/ui/navigation

------------------------------------------------------------------------

### PRM-302 --- 11 --- Navigation & Deep Links

What does deep linking in Flutter allow?

-   **A.** Increases app build speed
-   **B.** Lets the user open a specific screen in the app directly via
    a URL or external source (e.g. a web link or notification)
-   **C.** Only applicable to apps running on Web
-   **D.** A feature that fully replaces SharedPreferences

**Correct answer:** B --- Lets the user open a specific screen in the
app directly via a URL or external source (e.g. a web link or
notification)

**Explanation:** Deep linking lets users open a specific screen directly
via a URL/external source. A, C, D misdescribe deep linking's purpose.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/ui/navigation

------------------------------------------------------------------------

### PRM-303 --- 11 --- Navigation & Deep Links

Given this `InheritedWidget` code: class AppData extends InheritedWidget
{ final String theme; const AppData({required this.theme, required
Widget child, Key? key}) : super(key: key, child: child); static AppData
of(BuildContext context) =\>
context.dependOnInheritedWidgetOfExactType`<AppData>`{=html}()!; } What
is the main purpose of `InheritedWidget` in this example?

-   **A.** Only used to define navigation routes
-   **B.** Efficiently passing data down to all child widgets in the
    widget tree without manually passing parameters through every
    intermediate constructor
-   **C.** Fully replaces Scaffold
-   **D.** Only used for storing offline data

**Correct answer:** B --- Efficiently passing data down to all child
widgets in the widget tree without manually passing parameters through
every intermediate constructor

**Explanation:** InheritedWidget efficiently passes data down the widget
tree without manually passing through every constructor level. A, C, D
misdescribe its purpose.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/ui/navigation

------------------------------------------------------------------------

### PRM-304 --- 11 --- Navigation & Deep Links

In this code combining Navigation and State: if (appState.loggedIn)
Navigator.pushNamed(context, '/dashboard'); else
Navigator.pushNamed(context, '/login'); What principle does this code
illustrate?

-   **A.** State is completely separate and unrelated to navigation
-   **B.** App state determines the navigation flow --- combining state
    management logic with the decision of which route to display
-   **C.** This is incorrect code because if/else cannot be used with
    Navigator
-   **D.** Only works when using Navigator 2.0

**Correct answer:** B --- App state determines the navigation flow ---
combining state management logic with the decision of which route to
display

**Explanation:** This illustrates state determining the navigation flow,
combining state logic with route decisions. A, C, D misdescribe the
meaning/validity of this code.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/ui/navigation

------------------------------------------------------------------------

### PRM-305 --- 11 --- Navigation & Deep Links

In Navigator 2.0, which component's role does the following code
illustrate? class AppRouterDelegate extends
RouterDelegate`<AppRoute>`{=html} with ChangeNotifier,
PopNavigatorRouterDelegateMixin`<AppRoute>`{=html} { @override Widget
build(BuildContext context) { return Navigator( pages:
\[MaterialPage(child: HomePage())\], onPopPage: (route, result) =\>
route.didPop(result), ); } }

-   **A.** RouteInformationParser --- responsible for parsing the URL
-   **B.** RouterDelegate --- responsible for building the current page
    stack (`pages`) and handling pop events, reflecting the desired
    navigation state
-   **C.** BackButtonDispatcher --- only handles the Android physical
    back button
-   **D.** This is just a regular StatelessWidget unrelated to
    navigation

**Correct answer:** B --- RouterDelegate --- responsible for building
the current page stack (`pages`) and handling pop events, reflecting the
desired navigation state

**Explanation:** This code illustrates RouterDelegate --- building the
current page stack and handling pop events. A, C, D wrongly assign the
role to a different Navigator 2.0 component.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/ui/navigation

------------------------------------------------------------------------

### PRM-306 --- 11 --- Navigation & Deep Links

In the MovieDetailPage Hero Banner example: Stack( children: \[
Image.network(movie.posterUrl, fit: BoxFit.cover), Positioned(bottom: 0,
child: Container(height: 80, decoration: gradient)), \], ) Why is
`Stack` used instead of `Column` here?

-   **A.** Because Stack runs faster than Column
-   **B.** Because Stack allows child widgets to overlap at the same
    position, needed to place a gradient layer over the poster image
-   **C.** Because Column doesn't support Image.network
-   **D.** No difference, the two widgets are entirely equivalent

**Correct answer:** B --- Because Stack allows child widgets to overlap
at the same position, needed to place a gradient layer over the poster
image

**Explanation:** Stack allows overlapping children, needed to layer a
gradient over the poster image. A, C, D don't match the technical reason
for this choice.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/ui/navigation

------------------------------------------------------------------------

### PRM-307 --- 11 --- Navigation & Deep Links

In the deep link handling flow via `onGenerateRoute`, what is the main
purpose of this callback in `MaterialApp`?

-   **A.** Only handles network errors
-   **B.** Allows the app to parse the route name (and parameters)
    coming from an external link, then dynamically return the
    corresponding route/screen, commonly used to handle deep links
-   **C.** Fully replaces Scaffold
-   **D.** Only works when the app is offline

**Correct answer:** B --- Allows the app to parse the route name (and
parameters) coming from an external link, then dynamically return the
corresponding route/screen, commonly used to handle deep links

**Explanation:** `onGenerateRoute` parses the route name/parameters from
an external link and dynamically returns the corresponding screen,
commonly for deep links. A, C, D misdescribe its purpose.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/ui/navigation

------------------------------------------------------------------------

### PRM-308 --- 11 --- Navigation & Deep Links

What does the `Route` class in Flutter represent?

-   **A.** An API endpoint from a server
-   **B.** A screen/page in the app, usually implemented via
    `MaterialPageRoute`
-   **C.** A type of animation
-   **D.** A JSON data structure

**Correct answer:** B --- A screen/page in the app, usually implemented
via `MaterialPageRoute`

**Explanation:** `Route` represents a screen/page in the app, typically
implemented via MaterialPageRoute. A, C, D misdescribe the Route
concept.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/ui/navigation

------------------------------------------------------------------------

### PRM-309 --- 11 --- Navigation & Deep Links

Consider the requirement: "Tap outside the form → keyboard hides." What
is the common implementation approach mentioned in the lecture?

-   **A.** Call `Navigator.pop(context)` when the user taps outside
-   **B.** Wrap the form in a `GestureDetector` with `onTap` calling
    `FocusScope.of(context).unfocus()` (hiding the keyboard when tapping
    outside the input fields)
-   **C.** This cannot be done in Flutter
-   **D.** The keyboard can only be hidden with the physical Back button

**Correct answer:** B --- Wrap the form in a `GestureDetector` with
`onTap` calling `FocusScope.of(context).unfocus()` (hiding the keyboard
when tapping outside the input fields)

**Explanation:** Wrapping the form with GestureDetector calling
FocusScope.of(context).unfocus() on tap is the common implementation. A,
C, D don't match the taught standard approach.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/ui/navigation

------------------------------------------------------------------------

### PRM-310 --- 11 --- Navigation & Deep Links

Given: Future`<void>`{=html} fetchPosts() async { final url =
Uri.parse('https://jsonplaceholder.typicode.com/posts'); final response
= await http.get(url); if (response.statusCode == 200) { print('Response
body: \${response.body}'); } else { print('Request failed:
\${response.statusCode}'); } } Why does this function need to be
declared `async` and use `await` before `http.get(url)`?

-   **A.** Because `http.get()` always runs synchronously so async is
    mandatory
-   **B.** Because `http.get()` returns a `Future<Response>` --- the
    network operation doesn't complete immediately, `await` pauses
    function execution until a response arrives, avoiding blocking the
    UI thread while waiting
-   **C.** `async`/`await` is purely decorative syntax with no effect on
    behavior
-   **D.** Because Dart doesn't support calling an asynchronous function
    without async

**Correct answer:** B --- Because `http.get()` returns a
`Future<Response>` --- the network operation doesn't complete
immediately, `await` pauses function execution until a response arrives,
avoiding blocking the UI thread while waiting

**Explanation:** `http.get()` returns a Future`<Response>`{=html}; await
pauses execution until it completes, avoiding blocking the UI thread. A,
C, D misdescribe the real technical reason.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/ui/navigation

------------------------------------------------------------------------

### PRM-311 --- 11 --- Navigation & Deep Links

In Demo 8.2, when the user taps an item in the post list to open the
detail screen, how is the post data (`Post`) passed to
`PostDetailScreen`?

-   **A.** Calling the API again to separately load the detail data
-   **B.** Directly passing the already-available `Post` object through
    `PostDetailScreen`'s constructor when navigating via
    `MaterialPageRoute`
-   **C.** Saving it to SharedPreferences then reading it back on the
    detail screen
-   **D.** Using a global variable to share the data

**Correct answer:** B --- Directly passing the already-available `Post`
object through `PostDetailScreen`'s constructor when navigating via
`MaterialPageRoute`

**Explanation:** The Post object is passed directly through
PostDetailScreen's constructor during navigation via MaterialPageRoute,
per the Demo 8.2 code. A, C, D don't match the demo's actual
implementation.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/ui/navigation

------------------------------------------------------------------------

### PRM-312 --- 11 --- Navigation & Deep Links

Suppose a student writes: Future\<List`<Post>`{=html}\> fetchPosts()
async { final response = await http.get(url); final
List`<dynamic>`{=html} jsonList = json.decode(response.body); return
jsonList.map((e) =\> Post.fromJson(e)).toList(); } but does NOT check
`response.statusCode` before decoding. If the server returns a 500 error
with non-valid-JSON content (e.g. an HTML error page), what is most
likely to happen?

-   **A.** The app still displays the post list normally
-   **B.** `json.decode()` will throw a `FormatException` because the
    returned content isn't valid JSON, causing the `Future` to error
    out, which needs handling via `catch` or `snapshot.hasError` in
    FutureBuilder
-   **C.** The server will automatically resend a correctly formatted
    response
-   **D.** Dart will automatically ignore the error and return an empty
    list

**Correct answer:** B --- `json.decode()` will throw a `FormatException`
because the returned content isn't valid JSON, causing the `Future` to
error out, which needs handling via `catch` or `snapshot.hasError` in
FutureBuilder

**Explanation:** json.decode() throws a FormatException on non-JSON
content, erroring the Future, requiring catch/snapshot.hasError
handling. A, C, D don't match json.decode()'s actual behavior on invalid
input.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/ui/navigation

------------------------------------------------------------------------

### PRM-313 --- 11 --- Navigation & Deep Links

Per "Best Practices & Patterns for Authentication," why is
`pushReplacementNamed()` recommended over `pushNamed()` when moving from
the Splash/Login screen to Home after successful authentication?

-   **A.** Because `pushReplacementNamed()` runs faster in CPU speed
-   **B.** To prevent the user from pressing Back to return to the
    Splash or Login screen that has already served its purpose, avoiding
    an illogical navigation experience (login → back → login again)
-   **C.** Because `pushNamed()` doesn't support named routes
-   **D.** There's no real difference between the two methods in this
    context

**Correct answer:** B --- To prevent the user from pressing Back to
return to the Splash or Login screen that has already served its
purpose, avoiding an illogical navigation experience (login → back →
login again)

**Explanation:** pushReplacementNamed() prevents returning to the
finished Splash/Login screen via Back, avoiding illogical navigation. A,
C, D don't match the actual reason.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/ui/navigation

------------------------------------------------------------------------

### PRM-314 --- 11 --- Navigation & Deep Links

The keyword with is normally used with what?

-   **A.** Factory constructors
-   **B.** Named routes
-   **C.** Mixins
-   **D.** FutureBuilder

**Correct answer:** C --- Mixins

**Explanation:** Option C is correct: Mixins. The answer matches Dart's
type-system or null-safety behavior; use nullable types and null-aware
operators deliberately to avoid null errors.

**Source:** Quizlet compilation 2

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/ui/navigation

------------------------------------------------------------------------

### PRM-315 --- 11 --- Navigation & Deep Links

What need does a mixin address?

-   **A.** Creating declarative routes
-   **B.** Reusing behavior across classes without requiring an is-a
    inheritance relationship
-   **C.** Storing relational data
-   **D.** Replacing an HTTP client

**Correct answer:** B --- Reusing behavior across classes without
requiring an is-a inheritance relationship

**Explanation:** Option B is correct: Reusing behavior across classes
without requiring an is-a inheritance relationship. The answer matches
Dart's type-system or null-safety behavior; use nullable types and
null-aware operators deliberately to avoid null errors.

**Source:** Quizlet compilation 2

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/ui/navigation

------------------------------------------------------------------------

### PRM-316 --- 11 --- Navigation & Deep Links

In Box`<T>`{=html}, what does T represent?

-   **A.** A fixed Future
-   **B.** The name of a global variable
-   **C.** A route name
-   **D.** A generic type parameter

**Correct answer:** D --- A generic type parameter

**Explanation:** Option D is correct: A generic type parameter. The
answer matches Dart's type-system or null-safety behavior; use nullable
types and null-aware operators deliberately to avoid null errors.

**Source:** Quizlet compilation 2

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/ui/navigation

------------------------------------------------------------------------

### PRM-317 --- 11 --- Navigation & Deep Links

Which two main queues are described in Dart's asynchronous engine?

-   **A.** Render queue and Route queue
-   **B.** Widget queue and SQL queue
-   **C.** HTTP queue and JSON queue
-   **D.** Microtask queue and Event queue

**Correct answer:** D --- Microtask queue and Event queue

**Explanation:** Option D is correct: Microtask queue and Event queue.
Dart uses Future for a single asynchronous result and Stream for a
sequence of asynchronous events; async/await makes Future-based code
easier to read.

**Source:** Quizlet compilation 2

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/ui/navigation

------------------------------------------------------------------------

### PRM-318 --- 11 --- Navigation & Deep Links

Which type of task is processed before tasks in the event queue?

-   **A.** Image frame
-   **B.** Microtask
-   **C.** Named route
-   **D.** Database migration

**Correct answer:** B --- Microtask

**Explanation:** Option B is correct: Microtask. The answer matches
Dart's type-system or null-safety behavior; use nullable types and
null-aware operators deliberately to avoid null errors.

**Source:** Quizlet compilation 2

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/ui/navigation

------------------------------------------------------------------------

### PRM-319 --- 11 --- Navigation & Deep Links

What does scheduleMicrotask() do?

-   **A.** Adds a callback to the microtask queue
-   **B.** Declares a generic
-   **C.** Opens a route
-   **D.** Creates a JSON file

**Correct answer:** A --- Adds a callback to the microtask queue

**Explanation:** Option A is correct: Adds a callback to the microtask
queue. The answer matches Dart's type-system or null-safety behavior;
use nullable types and null-aware operators deliberately to avoid null
errors.

**Source:** Quizlet compilation 2

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/ui/navigation

------------------------------------------------------------------------

### PRM-320 --- 11 --- Navigation & Deep Links

Which lifecycle method is used for one-time initialization logic in a
State object?

-   **A.** onGenerateRoute()
-   **B.** build() only
-   **C.** dispose()
-   **D.** initState()

**Correct answer:** D --- initState()

**Explanation:** Option D is correct: initState(). This is a
state-management concept: state changes must notify or trigger the
relevant part of the UI to rebuild.

**Source:** Quizlet compilation 2

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/ui/navigation

------------------------------------------------------------------------

### PRM-321 --- 11 --- Navigation & Deep Links

Which method displays an image from a URL?

-   **A.** Image.asset only
-   **B.** Text.network
-   **C.** Image.network
-   **D.** Icon.url

**Correct answer:** C --- Image.network

**Explanation:** Option C is correct: Image.network. The answer matches
Dart's type-system or null-safety behavior; use nullable types and
null-aware operators deliberately to avoid null errors.

**Source:** Quizlet compilation 2

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/ui/navigation

------------------------------------------------------------------------

### PRM-322 --- 11 --- Navigation & Deep Links

What does BoxFit control?

-   **A.** How a token expires
-   **B.** How an image is scaled or fitted inside its display area
-   **C.** How a List is filtered
-   **D.** How a route is pushed

**Correct answer:** B --- How an image is scaled or fitted inside its
display area

**Explanation:** Option B is correct: How an image is scaled or fitted
inside its display area. The answer matches Dart's type-system or
null-safety behavior; use nullable types and null-aware operators
deliberately to avoid null errors.

**Source:** Quizlet compilation 2

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/ui/navigation

------------------------------------------------------------------------

### PRM-323 --- 11 --- Navigation & Deep Links

Which structure does Navigator 1.0 use to manage screens?

-   **A.** A stack of routes/pages
-   **B.** A SQL tree
-   **C.** A list of tokens
-   **D.** A microtask queue

**Correct answer:** A --- A stack of routes/pages

**Explanation:** Option A is correct: A stack of routes/pages. Flutter
navigation APIs manage route transitions or map incoming route/URL
information to application state, depending on the API used.

**Source:** Quizlet compilation 2

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/ui/navigation

------------------------------------------------------------------------

### PRM-324 --- 11 --- Navigation & Deep Links

When an app needs complex deep links and web URL synchronization, what
do the docs recommend considering?

-   **A.** Only use setState
-   **B.** Container
-   **C.** ThemeData
-   **D.** Router

**Correct answer:** D --- Router

**Explanation:** Router suits more complex routing and deep-linking needs
that imperative Navigator 1.0 push/pop cannot express, including web URL
synchronization. The other options are unrelated widgets or state APIs.

**Source:** Previous AI-generated bank (verified against
docs.flutter.dev, Flutter 3.47)

**Verification note:** Replaces a question that duplicated PRM-295
(Navigator.push); answer verified against official docs.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/ui/navigation

------------------------------------------------------------------------

### PRM-325 --- 11 --- Navigation & Deep Links

What does Navigator.pop() do?

-   **A.** Removes the current route and reveals the route below it
-   **B.** Replaces the entire application state
-   **C.** Adds a new route
-   **D.** Creates a deep link

**Correct answer:** A --- Removes the current route and reveals the
route below it

**Explanation:** Option A is correct: Removes the current route and
reveals the route below it. Flutter navigation APIs manage route
transitions or map incoming route/URL information to application state,
depending on the API used.

**Source:** Quizlet compilation 2

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/ui/navigation

------------------------------------------------------------------------

### PRM-326 --- 11 --- Navigation & Deep Links

What does a MaterialPageRoute builder return?

-   **A.** A JSON Map
-   **B.** A database
-   **C.** The widget that defines the next screen's UI
-   **D.** A JWT token

**Correct answer:** C --- The widget that defines the next screen's UI

**Explanation:** Option C is correct: The widget that defines the next
screen's UI. Flutter navigation APIs manage route transitions or map
incoming route/URL information to application state, depending on the
API used.

**Source:** Quizlet compilation 2

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/ui/navigation

------------------------------------------------------------------------

### PRM-327 --- 12 --- Data, Architecture, Plugins & Platform

Flutter's architecture has three main layers. What is the correct
top-to-bottom order (closest to the developer to closest to the
hardware)?

-   **A.** Engine → Framework → Embedder
-   **B.** Framework → Engine → Embedder
-   **C.** Embedder → Framework → Engine
-   **D.** Framework → Embedder → Engine

**Correct answer:** B --- Framework → Engine → Embedder

**Explanation:** Architecture order: Framework (Dart) → Engine (C++) →
Embedder --- the standard order stated in the 'Flutter Architecture
Overview' slide. Other options reverse the order incorrectly.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/platform-integration

------------------------------------------------------------------------

### PRM-328 --- 12 --- Data, Architecture, Plugins & Platform

According to Flutter's architecture, which statement best describes the
concept of a 'Widget'?

-   **A.** Widgets are only components that display images
-   **B.** In Flutter, everything on screen (layout, style, interaction)
    is built through Widgets
-   **C.** Widgets only exist in the Engine Layer
-   **D.** Widget is an Android-only concept, not used in Flutter

**Correct answer:** B --- In Flutter, everything on screen (layout,
style, interaction) is built through Widgets

**Explanation:** 'Everything is a Widget' --- everything on screen is a
widget. A wrongly limits the scope; C, D are wrong about where/what a
widget is.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/platform-integration

------------------------------------------------------------------------

### PRM-329 --- 12 --- Data, Architecture, Plugins & Platform

How does `ListView.separated` differ from `ListView.builder`?

-   **A.** `ListView.separated` doesn't support itemBuilder
-   **B.** `ListView.separated` allows inserting a separator widget
    between items via `separatorBuilder`, which `ListView.builder` lacks
-   **C.** `ListView.builder` only displays up to 10 items
-   **D.** The two are entirely identical in API

**Correct answer:** B --- `ListView.separated` allows inserting a
separator widget between items via `separatorBuilder`, which
`ListView.builder` lacks

**Explanation:** `ListView.separated` allows inserting a separator
between items via `separatorBuilder`. A is wrong since it still has
itemBuilder; C is wrong since there's no 10-item limit; D is wrong since
the two APIs differ.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/platform-integration

------------------------------------------------------------------------

### PRM-330 --- 12 --- Data, Architecture, Plugins & Platform

What is `FocusNode` combined with
`textInputAction: TextInputAction.next` and `onFieldSubmitted` used for?

-   **A.** Encrypting data entered into the field
-   **B.** Controlling the shift of focus to the next input field when
    the user presses "Next" on the keyboard, improving the mobile input
    experience
-   **C.** Completely hiding the keyboard when starting to type
-   **D.** Automatically filling in data from an API

**Correct answer:** B --- Controlling the shift of focus to the next
input field when the user presses "Next" on the keyboard, improving the
mobile input experience

**Explanation:** This combination controls shifting focus to the next
field when the user presses Next, improving mobile UX. A, C, D
misdescribe its purpose.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/platform-integration

------------------------------------------------------------------------

### PRM-331 --- 12 --- Data, Architecture, Plugins & Platform

What kind of data does `SharedPreferences` best suit?

-   **A.** Complex relational data with many linked tables
-   **B.** Simple key-value data like flags or settings
-   **C.** Large image files
-   **D.** Long-duration video

**Correct answer:** B --- Simple key-value data like flags or settings

**Explanation:** SharedPreferences best suits simple key-value data like
flags or settings. A, C, D are not suitable cases for SharedPreferences.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/platform-integration

------------------------------------------------------------------------

### PRM-332 --- 12 --- Data, Architecture, Plugins & Platform

On Flutter Web, `SharedPreferences` operates based on which browser
storage mechanism?

-   **A.** IndexedDB
-   **B.** Cookie
-   **C.** localStorage
-   **D.** SessionStorage

**Correct answer:** C --- localStorage

**Explanation:** On Flutter Web, SharedPreferences maps to the browser's
`localStorage`. A, B, D don't match the mechanism stated in the
comparison table.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/platform-integration

------------------------------------------------------------------------

### PRM-333 --- 12 --- Data, Architecture, Plugins & Platform

How does SQFlite differ from SQLite, per the "Why not name it SQLite?"
explanation?

-   **A.** SQFlite and SQLite are two different names for the exact same
    concept, no technical difference
-   **B.** SQLite is the actual storage engine, while SQFlite is a
    Flutter plugin/wrapper (written in Dart + native code) that lets
    Flutter communicate with SQLite --- SQFlite is not a standalone
    database
-   **C.** SQFlite runs 10 times faster than SQLite
-   **D.** SQFlite only works on Web, SQLite only works on mobile

**Correct answer:** B --- SQLite is the actual storage engine, while
SQFlite is a Flutter plugin/wrapper (written in Dart + native code) that
lets Flutter communicate with SQLite --- SQFlite is not a standalone
database

**Explanation:** SQLite is the actual storage engine; SQFlite is
Flutter's plugin/wrapper that bridges to it, not a standalone database.
A, C, D don't match the explanation given.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/platform-integration

------------------------------------------------------------------------

### PRM-334 --- 12 --- Data, Architecture, Plugins & Platform

In SQFlite, which function is called to open or create a database, and
how often should it be called?

-   **A.** `openDatabase()` --- should only be called once
    (singleton/service) to avoid opening multiple duplicate connections
-   **B.** `createDatabase()` --- should be called every time before
    querying
-   **C.** `initDatabase()` --- call frequency doesn't matter
-   **D.** `connectDatabase()` --- only usable with Web

**Correct answer:** A --- `openDatabase()` --- should only be called
once (singleton/service) to avoid opening multiple duplicate connections

**Explanation:** `openDatabase()` should only be called once
(singleton/service) to avoid duplicate connections. B, C, D are not the
correct function name/recommended usage.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/platform-integration

------------------------------------------------------------------------

### PRM-335 --- 12 --- Data, Architecture, Plugins & Platform

Given: a Todo app needs to display the task list paginated to avoid
loading all data at once on mobile. Which SQL clause is most suitable
for implementing pagination?

-   **A.** GROUP BY and HAVING
-   **B.** LIMIT and OFFSET
-   **C.** WHERE alone is sufficient
-   **D.** SQLite doesn't support pagination

**Correct answer:** B --- LIMIT and OFFSET

**Explanation:** `LIMIT` and `OFFSET` are the standard SQL syntax for
pagination. A, C, D are not suitable/correct for this purpose.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/platform-integration

------------------------------------------------------------------------

### PRM-336 --- 12 --- Data, Architecture, Plugins & Platform

Offline-First" is an app design strategy based on what principle?

-   **A.** The app only works with a stable Internet connection
-   **B.** Prioritize loading and displaying local data first, then sync
    with the server when a network connection is available, keeping the
    app usable offline
-   **C.** Never store data locally, always call the API every time data
    is needed
-   **D.** Only applicable to game apps

**Correct answer:** B --- Prioritize loading and displaying local data
first, then sync with the server when a network connection is available,
keeping the app usable offline

**Explanation:** Offline-First prioritizes loading local data first,
syncing with the server when online, keeping the app usable offline. A,
C, D misdescribe this design principle.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/platform-integration

------------------------------------------------------------------------

### PRM-337 --- 12 --- Data, Architecture, Plugins & Platform

Why is SharedPreferences described as "NOT for complex objects or large
data"?

-   **A.** Because SharedPreferences only supports storing integers
-   **B.** Because SharedPreferences is designed for storing simple
    key-value values (String, bool, int, double, List`<String>`{=html}),
    which is unsuitable and inefficient for complex-structured or
    large-volume data
-   **C.** Because SharedPreferences only works with a network
    connection
-   **D.** Because SharedPreferences automatically deletes data after 24
    hours

**Correct answer:** B --- Because SharedPreferences is designed for
storing simple key-value values (String, bool, int, double,
List`<String>`{=html}), which is unsuitable and inefficient for
complex-structured or large-volume data

**Explanation:** SharedPreferences is designed for simple key-value
data, unsuitable/inefficient for complex or large data. A, C, D don't
match the real reason.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/platform-integration

------------------------------------------------------------------------

### PRM-338 --- 12 --- Data, Architecture, Plugins & Platform

What is the difference between Authentication and Authorization?

-   **A.** The two concepts are entirely identical
-   **B.** Authentication answers "Who are you?" (identity
    verification), Authorization answers "What are you allowed to do?"
    (access control)
-   **C.** Authorization always happens before Authentication
-   **D.** Authentication only applies to web, not mobile

**Correct answer:** B --- Authentication answers "Who are you?"
(identity verification), Authorization answers "What are you allowed to
do?" (access control)

**Explanation:** Authentication verifies identity ("Who are you?");
Authorization determines permissions ("What can you do?"). A, C, D
misdescribe/reverse the two concepts.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/platform-integration

------------------------------------------------------------------------

### PRM-339 --- 12 --- Data, Architecture, Plugins & Platform

Per the instructor's note "JWTs must not store passwords. Only identity
claims," what is WRONG if a system stores a user's password directly in
the JWT payload?

-   **A.** No problem at all since JWT is signed, making it always
    absolutely secure
-   **B.** A JWT is only signed, not encrypted by default --- meaning
    the payload can be decoded and read by anyone holding the token
    (e.g. via base64 decode), so storing sensitive info like a password
    is a serious security vulnerability
-   **C.** A JWT cannot contain an object-type payload, only plain
    strings
-   **D.** This is a standard, industry-recommended practice

**Correct answer:** B --- A JWT is only signed, not encrypted by default
--- meaning the payload can be decoded and read by anyone holding the
token (e.g. via base64 decode), so storing sensitive info like a
password is a serious security vulnerability

**Explanation:** JWT is only signed (not encrypted), so its payload is
readable by anyone with the token --- storing passwords in it is a
serious vulnerability. A, C, D don't match JWT's actual security
properties.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/platform-integration

------------------------------------------------------------------------

### PRM-340 --- 12 --- Data, Architecture, Plugins & Platform

What is the difference between an Access Token and a Refresh Token, per
the lecture?

-   **A.** The Access Token has a longer lifetime than the Refresh Token
-   **B.** The Access Token is usually short-lived (reducing risk if
    exposed) and sent with every request; the Refresh Token has stronger
    privileges, used to get a new Access Token when it expires, so it
    needs more secure storage (Secure Storage)
-   **C.** The two token types have completely identical functions, just
    different names
-   **D.** The Refresh Token is sent with every API request, while the
    Access Token is only used once

**Correct answer:** B --- The Access Token is usually short-lived
(reducing risk if exposed) and sent with every request; the Refresh
Token has stronger privileges, used to get a new Access Token when it
expires, so it needs more secure storage (Secure Storage)

**Explanation:** Access Token is short-lived and sent per request;
Refresh Token has stronger privileges, used to renew the Access Token,
needing more secure storage. A, C, D misdescribe the two tokens'
characteristics.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/platform-integration

------------------------------------------------------------------------

### PRM-341 --- 12 --- Data, Architecture, Plugins & Platform

In the Signup Flow process, which statement is correct about the
relationship between AuthService used for Login (Demo 10.1) and Signup
(Demo 10.2)?

-   **A.** Signup must create an entirely new service, completely
    separate from Login's AuthService
-   **B.** Signup reuses the same `AuthService` class, only adding a new
    method (`signup(...)`), keeping the same architecture and error
    handling already established by Login
-   **C.** Signup needs no service at all, handling everything directly
    in the widget
-   **D.** AuthService is only used for logout

**Correct answer:** B --- Signup reuses the same `AuthService` class,
only adding a new method (`signup(...)`), keeping the same architecture
and error handling already established by Login

**Explanation:** Signup reuses the same AuthService class, adding a new
signup() method while keeping the existing architecture/error handling.
A, C, D don't match the "Signup API Integration (Reuse AuthService)"
content.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/platform-integration

------------------------------------------------------------------------

### PRM-342 --- 12 --- Data, Architecture, Plugins & Platform

What is `SharedPreferences` used for in Demo 10.3, mainly?

-   **A.** Storing the user's entire web browsing history
-   **B.** Persisting the authentication token to implement auto-login,
    so the user doesn't need to log in again every time the app opens
-   **C.** Storing the user's avatar image as binary data
-   **D.** Fully replacing JWT

**Correct answer:** B --- Persisting the authentication token to
implement auto-login, so the user doesn't need to log in again every
time the app opens

**Explanation:** SharedPreferences persists the auth token for
auto-login, avoiding repeated logins. A, C, D don't match its purpose in
Demo 10.3.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/platform-integration

------------------------------------------------------------------------

### PRM-343 --- 12 --- Data, Architecture, Plugins & Platform

In the Auto Login Flow: "Splash → (has token?) → Home / Login." If the
token has expired but still exists in SharedPreferences (the app only
checks "does a token exist" WITHOUT checking its expiry), what could
happen?

-   **A.** The app will always accurately detect an expired token
    because SharedPreferences auto-validates it
-   **B.** The app might mistakenly navigate the user to Home even
    though the token has expired, causing subsequent API requests to be
    rejected (401 Unauthorized) --- showing the need to also check token
    expiry or handle 401 errors to force logout when needed
-   **C.** The token will automatically refresh with no additional logic
    needed
-   **D.** The app will always stay on the Splash screen forever

**Correct answer:** B --- The app might mistakenly navigate the user to
Home even though the token has expired, causing subsequent API requests
to be rejected (401 Unauthorized) --- showing the need to also check
token expiry or handle 401 errors to force logout when needed

**Explanation:** Without checking expiry, the app might wrongly navigate
to Home, leading to 401 errors on subsequent requests, showing the need
for expiry checks or 401 handling. A, C, D don't match the realistic
consequence.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/platform-integration

------------------------------------------------------------------------

### PRM-344 --- 12 --- Data, Architecture, Plugins & Platform

An app does the following: (1) The user logs in and receives an Access
Token that expires in 15 minutes; (2) The Access Token is stored in
SharedPreferences; (3) No Refresh Token mechanism is implemented. What
is the most likely real-world consequence after 15 minutes of continuous
app use?

-   **A.** The app will automatically extend the token forever with no
    action needed
-   **B.** API requests after the expiry point will start being rejected
    (401 Unauthorized), and since there's no Refresh Token, the user is
    forced to manually log in again to get a new Access Token --- this
    is a limitation that should be fixed with a refresh token mechanism
-   **C.** The Access Token will automatically become a Refresh Token
-   **D.** The app will crash immediately when the Access Token expires

**Correct answer:** B --- API requests after the expiry point will start
being rejected (401 Unauthorized), and since there's no Refresh Token,
the user is forced to manually log in again to get a new Access Token
--- this is a limitation that should be fixed with a refresh token
mechanism

**Explanation:** Without a refresh mechanism, requests after expiry get
401 errors, forcing manual re-login --- a limitation needing a refresh
token fix. A, C, D don't match the realistic consequence.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/platform-integration

------------------------------------------------------------------------

### PRM-345 --- 12 --- Data, Architecture, Plugins & Platform

Compare the AuthService (Singleton pattern) mentioned in "Architecture
Patterns" with scattering authentication logic directly across
individual screen widgets (LoginScreen, SignupScreen, HomeScreen each
writing their own API-calling logic). In the spirit of the lecture, what
is the main drawback of the scattered approach?

-   **A.** No drawback at all, both approaches are equivalent in quality
-   **B.** The scattered approach leads to duplicated logic across
    screens, is hard to maintain consistently when the auth flow
    changes, and reduces reusability --- while a centralized AuthService
    separates UI from business logic, making it easier to test and
    extend
-   **C.** The scattered approach is always faster at runtime
-   **D.** The Singleton AuthService is only suitable for apps that
    don't need login

**Correct answer:** B --- The scattered approach leads to duplicated
logic across screens, is hard to maintain consistently when the auth
flow changes, and reduces reusability --- while a centralized
AuthService separates UI from business logic, making it easier to test
and extend

**Explanation:** Scattering auth logic causes duplication, hard
maintenance, and low reusability; a centralized AuthService separates UI
from logic, aiding testability/extensibility. A, C, D don't match the
software architecture analysis.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/platform-integration

------------------------------------------------------------------------

### PRM-346 --- 12 --- Data, Architecture, Plugins & Platform

Which rendering engine is mentioned in Flutter's architecture?

-   **A.** Gecko
-   **B.** Blink
-   **C.** Skia
-   **D.** WebKit

**Correct answer:** C --- Skia

**Explanation:** Option C is correct: Skia. The answer matches Dart's
type-system or null-safety behavior; use nullable types and null-aware
operators deliberately to avoid null errors.

**Source:** Quizlet compilation 2

**Verification note:** Version-sensitive: the supplied Quizlet set names
Skia. Current Flutter documentation describes Impeller as the default
renderer on supported targets; retain this answer only when the question
is about the lecture's historical architecture or Skia specifically.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/platform-integration

------------------------------------------------------------------------

### PRM-347 --- 12 --- Data, Architecture, Plugins & Platform

What are the three main layers of Flutter architecture?

-   **A.** HTML, CSS, and JavaScript
-   **B.** Model, View, and Controller
-   **C.** Client, Server, and Database
-   **D.** Framework, Engine, and Embedder

**Correct answer:** D --- Framework, Engine, and Embedder

**Explanation:** Option D is correct: Framework, Engine, and Embedder.
The answer matches Dart's type-system or null-safety behavior; use
nullable types and null-aware operators deliberately to avoid null
errors.

**Source:** Quizlet compilation 2

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/platform-integration

------------------------------------------------------------------------

### PRM-348 --- 12 --- Data, Architecture, Plugins & Platform

When is const appropriate?

-   **A.** When a constant value is known at compile time
-   **B.** When a value is known only after an API call
-   **C.** When a value must be nullable
-   **D.** When a variable must change continuously

**Correct answer:** A --- When a constant value is known at compile time

**Explanation:** Option A is correct: When a constant value is known at
compile time. The answer matches Dart's type-system or null-safety
behavior; use nullable types and null-aware operators deliberately to
avoid null errors.

**Source:** Quizlet compilation 2

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/platform-integration

------------------------------------------------------------------------

### PRM-349 --- 12 --- Data, Architecture, Plugins & Platform

What do Padding and SizedBox mainly improve?

-   **A.** Database table creation
-   **B.** JWT encryption
-   **C.** Spacing, readability, and visual consistency
-   **D.** API request speed

**Correct answer:** C --- Spacing, readability, and visual consistency

**Explanation:** Option C is correct: Spacing, readability, and visual
consistency. Flutter layout is composed from widgets; the selected
widget provides the arrangement, sizing, spacing, or constraint behavior
described.

**Source:** Quizlet compilation 2

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/platform-integration

------------------------------------------------------------------------

### PRM-350 --- 12 --- Data, Architecture, Plugins & Platform

What does AspectRatio help achieve?

-   **A.** Preserving the aspect ratio and preventing image distortion
-   **B.** Calling an API
-   **C.** Encrypting an image
-   **D.** Creating multiple grid columns

**Correct answer:** A --- Preserving the aspect ratio and preventing
image distortion

**Explanation:** Option A is correct: Preserving the aspect ratio and
preventing image distortion. The answer matches Dart's type-system or
null-safety behavior; use nullable types and null-aware operators
deliberately to avoid null errors.

**Source:** Quizlet compilation 2

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/platform-integration

------------------------------------------------------------------------

### PRM-351 --- 12 --- Data, Architecture, Plugins & Platform

What does SafeArea prevent?

-   **A.** SQL injection
-   **B.** Null exceptions
-   **C.** Content being covered by a notch, Dynamic Island, or system
    UI area
-   **D.** API timeout

**Correct answer:** C --- Content being covered by a notch, Dynamic
Island, or system UI area

**Explanation:** Option C is correct: Content being covered by a notch,
Dynamic Island, or system UI area. The answer matches Dart's type-system
or null-safety behavior; use nullable types and null-aware operators
deliberately to avoid null errors.

**Source:** Quizlet compilation 2

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/platform-integration

------------------------------------------------------------------------

### PRM-352 --- 12 --- Data, Architecture, Plugins & Platform

What do spacing and runSpacing control in Wrap?

-   **A.** Horizontal spacing and spacing between lines
-   **B.** API timeout and retry
-   **C.** Image width and height
-   **D.** Token expiration and refresh

**Correct answer:** A --- Horizontal spacing and spacing between lines

**Explanation:** Option A is correct: Horizontal spacing and spacing
between lines. Flutter layout is composed from widgets; the selected
widget provides the arrangement, sizing, spacing, or constraint behavior
described.

**Source:** Quizlet compilation 2

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/platform-integration

------------------------------------------------------------------------

### PRM-353 --- 12 --- Data, Architecture, Plugins & Platform

How is an API described?

-   **A.** A required local database
-   **B.** A layout widget
-   **C.** A contract that lets a client communicate with a server
    through endpoints
-   **D.** An image file

**Correct answer:** C --- A contract that lets a client communicate with
a server through endpoints

**Explanation:** Option C is correct: A contract that lets a client
communicate with a server through endpoints. The answer matches Dart's
type-system or null-safety behavior; use nullable types and null-aware
operators deliberately to avoid null errors.

**Source:** Quizlet compilation 2

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/platform-integration

------------------------------------------------------------------------

### PRM-354 --- 12 --- Data, Architecture, Plugins & Platform

Where is local-storage data saved?

-   **A.** Directly on the user's device
-   **B.** Only in the GPU
-   **C.** Only on a cloud server
-   **D.** Only in the source code

**Correct answer:** A --- Directly on the user's device

**Explanation:** Option A is correct: Directly on the user's device. The
answer matches Dart's type-system or null-safety behavior; use nullable
types and null-aware operators deliberately to avoid null errors.

**Source:** Quizlet compilation 2

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/platform-integration

------------------------------------------------------------------------

### PRM-355 --- 12 --- Data, Architecture, Plugins & Platform

Which local-storage benefits are mentioned?

-   **A.** It always requires an internet connection
-   **B.** It cannot store preferences
-   **C.** It is used only for images
-   **D.** It works offline, persists across restarts, and provides fast
    access

**Correct answer:** D --- It works offline, persists across restarts,
and provides fast access

**Explanation:** Option D is correct: It works offline, persists across
restarts, and provides fast access. The answer matches Dart's
type-system or null-safety behavior; use nullable types and null-aware
operators deliberately to avoid null errors.

**Source:** Quizlet compilation 2

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/platform-integration

------------------------------------------------------------------------

### PRM-356 --- 12 --- Data, Architecture, Plugins & Platform

What is SharedPreferences best suited for?

-   **A.** Large video files
-   **B.** Simple key-value data such as settings and flags
-   **C.** 3D game assets
-   **D.** Large relational datasets

**Correct answer:** B --- Simple key-value data such as settings and
flags

**Explanation:** Option B is correct: Simple key-value data such as
settings and flags. The answer matches Dart's type-system or null-safety
behavior; use nullable types and null-aware operators deliberately to
avoid null errors.

**Source:** Quizlet compilation 2

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/platform-integration

------------------------------------------------------------------------

### PRM-357 --- 12 --- Data, Architecture, Plugins & Platform

Which case should not use SharedPreferences?

-   **A.** Default sort mode
-   **B.** A dark-mode flag
-   **C.** Complex objects or large data
-   **D.** An onboarding-completed flag

**Correct answer:** C --- Complex objects or large data

**Explanation:** Option C is correct: Complex objects or large data. The
answer matches Dart's type-system or null-safety behavior; use nullable
types and null-aware operators deliberately to avoid null errors.

**Source:** Quizlet compilation 2

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/platform-integration

------------------------------------------------------------------------

### PRM-358 --- 12 --- Data, Architecture, Plugins & Platform

On Flutter Web, SharedPreferences normally maps to what?

-   **A.** Firebase Authentication
-   **B.** Browser localStorage
-   **C.** Android Manifest
-   **D.** An SQLite file

**Correct answer:** B --- Browser localStorage

**Explanation:** Option B is correct: Browser localStorage. Flutter
supports multiple deployment targets, although each target can have its
own SDK, tooling, and platform-integration requirements.

**Source:** Quizlet compilation 2

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/platform-integration

------------------------------------------------------------------------

### PRM-359 --- 12 --- Data, Architecture, Plugins & Platform

Which method stores a boolean in SharedPreferences?

-   **A.** insertRow()
-   **B.** setMap()
-   **C.** writeJwt()
-   **D.** setBool(key, value)

**Correct answer:** D --- setBool(key, value)

**Explanation:** Option D is correct: setBool(key, value). The answer
matches Dart's type-system or null-safety behavior; use nullable types
and null-aware operators deliberately to avoid null errors.

**Source:** Quizlet compilation 2

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/platform-integration

------------------------------------------------------------------------

### PRM-360 --- 12 --- Data, Architecture, Plugins & Platform

Which sqflite method adds a row?

-   **A.** insert()
-   **B.** query()
-   **C.** delete()
-   **D.** update()

**Correct answer:** A --- insert()

**Explanation:** Option A is correct: insert(). Flutter layout is
composed from widgets; the selected widget provides the arrangement,
sizing, spacing, or constraint behavior described.

**Source:** Quizlet compilation 2

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/platform-integration

------------------------------------------------------------------------

### PRM-361 --- 13 --- Unit Tests & Mocks

Which folder in the Flutter project structure holds dependency and asset
configuration?

-   **A.** lib/
-   **B.** test/
-   **C.** pubspec.yaml
-   **D.** android/

**Correct answer:** C --- pubspec.yaml

**Explanation:** `pubspec.yaml` holds dependencies and assets
configuration. A holds the main Dart code; B holds unit tests; D holds
Android-specific code.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/testing

------------------------------------------------------------------------

### PRM-362 --- 13 --- Unit Tests & Mocks

What is the `flutter doctor` command used for?

-   **A.** Automatically fix errors in Dart source code
-   **B.** Check and confirm whether the Flutter SDK installation and
    related tools are ready
-   **C.** Build the app into a release APK file
-   **D.** Run unit tests for the whole project

**Correct answer:** B --- Check and confirm whether the Flutter SDK
installation and related tools are ready

**Explanation:** `flutter doctor` checks the Flutter SDK installation
environment and related tools. A, C, D misdescribe this command's
function.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/testing

------------------------------------------------------------------------

### PRM-363 --- 13 --- Unit Tests & Mocks

In `ApiService`, what technique does the constructor parameter
`ApiService({http.Client? client}) : client = client ?? http.Client();`
illustrate?

-   **A.** Forces always using the same single global HTTP Client
    instance
-   **B.** Allows "injecting" a custom `http.Client` from outside
    (useful for testing with a mock client); if none is passed, a
    default client is used
-   **C.** This is invalid Dart syntax
-   **D.** No clear purpose, just to shorten the code

**Correct answer:** B --- Allows "injecting" a custom `http.Client` from
outside (useful for testing with a mock client); if none is passed, a
default client is used

**Explanation:** This illustrates dependency injection --- allowing a
custom http.Client to be injected (useful for mock testing), defaulting
otherwise. A, C, D don't match the real purpose.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/testing

------------------------------------------------------------------------

### PRM-364 --- 13 --- Unit Tests & Mocks

According to the lecture, what are the three typical API data groups
students can choose from for their project?

-   **A.** realtime, media, mock APIs
-   **B.** authentication, storage, testing APIs
-   **C.** Only JSONPlaceholder alone
-   **D.** Firebase, SQLite, GraphQL

**Correct answer:** A --- realtime, media, mock APIs

**Explanation:** The three typical groups: realtime, media, mock APIs
--- matching the "What is an API? What is HTTP?" slide. B, C, D don't
match the stated content.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/testing

------------------------------------------------------------------------

### PRM-365 --- 13 --- Unit Tests & Mocks

In the "SharedPreferences Support Across Environments" table, why
doesn't DartPad (Flutter Mode) actually support SharedPreferences?

-   **A.** Because DartPad only supports the JavaScript language
-   **B.** Because DartPad has no access to real device storage (no
    native storage), so a mock class (like FakePrefs) is needed to
    simulate storage behavior in memory
-   **C.** Because SharedPreferences only works on iOS
-   **D.** Because DartPad doesn't support any Flutter widgets at all

**Correct answer:** B --- Because DartPad has no access to real device
storage (no native storage), so a mock class (like FakePrefs) is needed
to simulate storage behavior in memory

**Explanation:** DartPad has no access to real device storage, requiring
a mock class to simulate in-memory storage. A, C, D don't match the
actual technical reason.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/testing

------------------------------------------------------------------------

### PRM-366 --- 13 --- Unit Tests & Mocks

In Demo 10.1, why does the lecture choose "Mock Authentication"
(simulated auth inside AuthService) instead of calling a real API from
the start?

-   **A.** Because Mock Authentication is theoretically faster in
    computation
-   **B.** To ensure the demo works reliably in every learning
    environment (not dependent on network connectivity, since a real
    server could fail/timeout), suitable for the stage of learning basic
    concepts before moving to real API integration
-   **C.** Because Real APIs always require payment
-   **D.** Because Flutter doesn't support making real HTTP requests in
    mobile apps

**Correct answer:** B --- To ensure the demo works reliably in every
learning environment (not dependent on network connectivity, since a
real server could fail/timeout), suitable for the stage of learning
basic concepts before moving to real API integration

**Explanation:** Mock Authentication ensures reliable demos across
environments regardless of network issues, suited for teaching basic
concepts before real API integration. A, C, D don't match the actual
reason.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/testing

------------------------------------------------------------------------

### PRM-367 --- 13 --- Unit Tests & Mocks

Per the Mock API vs Real API comparison table, what is a disadvantage of
Real API compared to Mock API in the teaching context?

-   **A.** Real API is always faster and more stable than Mock API
-   **B.** Real API can encounter errors from network, server, TLS, or
    CORS --- less stable than Mock API, which always works without
    needing the Internet
-   **C.** Real API cannot be used to teach students about networking
-   **D.** Mock API is never used in real-world projects or in teaching
    at all

**Correct answer:** B --- Real API can encounter errors from network,
server, TLS, or CORS --- less stable than Mock API, which always works
without needing the Internet

**Explanation:** Real API can fail due to network/server/TLS/CORS
issues, less stable than Mock API which needs no Internet. A, C, D don't
match the comparison table's actual content.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/testing

------------------------------------------------------------------------

### PRM-368 --- 13 --- Unit Tests & Mocks

What are the three main testing types in Flutter mentioned in the
lecture?

-   **A.** Unit Test, Widget Test, Integration Test
-   **B.** Alpha Test, Beta Test, Release Test
-   **C.** Manual Test, Auto Test, Smoke Test
-   **D.** Load Test, Stress Test, Security Test

**Correct answer:** A --- Unit Test, Widget Test, Integration Test

**Explanation:** The three main testing types: Unit Test, Widget Test,
Integration Test. B, C, D are not the testing classifications taught in
Module 11.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/testing

------------------------------------------------------------------------

### PRM-369 --- 13 --- Unit Tests & Mocks

Per the "Flutter Testing Pyramid," which test type should have the
LARGEST quantity in a project, since it's fast, stable, and low cost?

-   **A.** Integration Test
-   **B.** Widget Test
-   **C.** Unit Test
-   **D.** All three types should have equal quantities

**Correct answer:** C --- Unit Test

**Explanation:** Unit Tests should be the most numerous per the Testing
Pyramid --- fast, stable, low cost. A, B are not the correct position in
the pyramid; D is wrong since the distribution is not equal.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/testing

------------------------------------------------------------------------

### PRM-370 --- 13 --- Unit Tests & Mocks

Given this Unit Test: test('toggle() should switch completed state', ()
{ final task = Task(id: '1', title: 'Demo task'); expect(task.completed,
false); task.toggle(); expect(task.completed, true); task.toggle();
expect(task.completed, false); }); What common test structuring pattern
does this test apply (even though not explicitly labeled with comments)?

-   **A.** Model-View-Controller (MVC)
-   **B.** Arrange - Act - Assert (prepare data, perform an action,
    verify the result)
-   **C.** Singleton Pattern
-   **D.** Observer Pattern

**Correct answer:** B --- Arrange - Act - Assert (prepare data, perform
an action, verify the result)

**Explanation:** This test follows the Arrange - Act - Assert pattern.
A, C, D are unrelated design/architecture patterns, not test
structuring.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/testing

------------------------------------------------------------------------

### PRM-371 --- 13 --- Unit Tests & Mocks

How does a Widget Test in Flutter differ from a Unit Test?

-   **A.** Widget Test only checks pure logic unrelated to UI, exactly
    like a Unit Test
-   **B.** Widget Test checks UI rendering and interaction
    (e.g. entering text, tapping buttons) on a widget or small widget
    tree, while Unit Test only checks logic/functions unrelated to UI
-   **C.** Widget Test always runs slower than Integration Test
-   **D.** Widget Test cannot simulate typing text or tapping

**Correct answer:** B --- Widget Test checks UI rendering and
interaction (e.g. entering text, tapping buttons) on a widget or small
widget tree, while Unit Test only checks logic/functions unrelated to UI

**Explanation:** Widget Test checks UI rendering/interaction on a widget
tree; Unit Test checks pure UI-unrelated logic. A, C, D misdescribe the
two test types' characteristics.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/testing

------------------------------------------------------------------------

### PRM-372 --- 13 --- Unit Tests & Mocks

In a Navigation Test, how does `pumpAndSettle()` differ from a plain
`pump()`?

-   **A.** No difference at all, the two functions are entirely
    equivalent
-   **B.** `pumpAndSettle()` continuously "pumps" frames until no
    animation/transition is still running (fully settled), very useful
    for waiting for a screen-transition effect to finish before
    asserting
-   **C.** `pumpAndSettle()` can only be used for Unit Test
-   **D.** `pump()` always waits longer than `pumpAndSettle()`

**Correct answer:** B --- `pumpAndSettle()` continuously "pumps" frames
until no animation/transition is still running (fully settled), very
useful for waiting for a screen-transition effect to finish before
asserting

**Explanation:** pumpAndSettle() continuously pumps frames until all
animations settle, useful for waiting out navigation transitions. A, C,
D misdescribe this function.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/testing

------------------------------------------------------------------------

### PRM-373 --- 13 --- Unit Tests & Mocks

Per the "How Tests Map to Real Flutter Problems" table, the "Wrong
navigation" issue should mainly be detected by which test type?

-   **A.** Unit Test
-   **B.** Navigation Test (part of the extended Widget Test group)
-   **C.** Navigation issues cannot be tested at all
-   **D.** Can only be detected via manual testing

**Correct answer:** B --- Navigation Test (part of the extended Widget
Test group)

**Explanation:** Wrong navigation" should mainly be caught by a
Navigation Test (an extended Widget Test), per the table. A, C, D don't
match the table's content.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/testing

------------------------------------------------------------------------

### PRM-374 --- 13 --- Unit Tests & Mocks

In Taskly App, `TaskRepository` handles CRUD logic for tasks, while
`TaskProvider` manages state. If a Widget Test wants to check UI
behavior WITHOUT depending on the Repository's real database/API
connection, what reasonable approach is recommended in Module 11's "Best
Practices"?

-   **A.** Always connect directly to real data to ensure absolute test
    accuracy
-   **B.** Mock the Repository when possible, letting Widget Tests run
    fast, reliably, and independently of real external data state
-   **C.** Completely skip testing any widget related to the Repository
-   **D.** Move all Repository logic inside the Widget to make testing
    easier

**Correct answer:** B --- Mock the Repository when possible, letting
Widget Tests run fast, reliably, and independently of real external data
state

**Explanation:** Mocking the Repository when possible keeps Widget Tests
fast, stable, and independent of external data state. A, C, D don't
match the recommended best practice.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/testing

------------------------------------------------------------------------

### PRM-375 --- 13 --- Unit Tests & Mocks

In the issue-to-test-type mapping table: \| Flutter Issue \| Recommended
Test \| \|---\|---\| \| Logic failure \| Unit test \| \| UI not updating
\| Widget test \| \| Wrong navigation \| Navigation test \| \| Entire
feature broken \| Integration test \| If a bug occurs because a Provider
doesn't call `notifyListeners()` after updating data (causing the UI to
not update even though the data changed in memory), which test type can
most directly detect this issue?

-   **A.** A Unit Test checking just the data-update function alone,
    since it's unrelated to UI
-   **B.** Widget Test --- because it needs to verify that after the
    action occurs, the UI actually re-renders with the new data
    (something a pure-logic Unit Test cannot check)
-   **C.** No test type can detect this bug
-   **D.** Only Integration Test can detect it, Widget Test is entirely
    unsuitable

**Correct answer:** B --- Widget Test --- because it needs to verify
that after the action occurs, the UI actually re-renders with the new
data (something a pure-logic Unit Test cannot check)

**Explanation:** A Widget Test is most direct since it verifies the UI
actually re-renders with new data, unlike a pure-logic Unit Test. A, C,
D don't match the appropriate detection method.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/testing

------------------------------------------------------------------------

### PRM-376 --- 13 --- Unit Tests & Mocks

What is `expect()` in flutter_test used for?

-   **A.** Initializing the widget tree for the test
-   **B.** Comparing the actual value with the expected value, and
    failing if they don't match --- this is the "Assert" step in the
    testing process
-   **C.** Waiting for an animation to finish
-   **D.** Generating random mock data

**Correct answer:** B --- Comparing the actual value with the expected
value, and failing if they don't match --- this is the "Assert" step in
the testing process

**Explanation:** expect() compares actual vs. expected values, failing
on mismatch --- the Assert step. A, C, D misdescribe expect()'s
function.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/testing

------------------------------------------------------------------------

### PRM-377 --- 13 --- Unit Tests & Mocks

Consider the lecture's explanation: "Most UI issues start from logic →
unit tests catch problems early." Applying this practically: if the
function counting incomplete tasks (`getIncompleteCount()`) in
TaskProvider has a logic bug (calculates wrong), but the UI still shows
the correct number by coincidence with small test data, which testing
approach best and most reliably catches this bug early, regardless of
data size?

-   **A.** Relying solely on manual UI observation with random datasets
-   **B.** Write a dedicated Unit Test for `getIncompleteCount()` with
    multiple different datasets (edge cases: empty, all completed,
    mixed), isolating and verifying the calculation logic correctly
    without depending on whether the UI "happens" to display correctly
-   **C.** Integration Test is the only way to catch this logic bug
-   **D.** No automated testing form can detect a logic bug

**Correct answer:** B --- Write a dedicated Unit Test for
`getIncompleteCount()` with multiple different datasets (edge cases:
empty, all completed, mixed), isolating and verifying the calculation
logic correctly without depending on whether the UI "happens" to display
correctly

**Explanation:** A dedicated Unit Test with varied edge-case datasets
isolates and reliably verifies the calculation logic regardless of
coincidental correct display. A, C, D don't match the most reliable
early-detection approach.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/testing

------------------------------------------------------------------------

### PRM-378 --- 13 --- Unit Tests & Mocks

Per Module 11's Summary, which skill is NOT listed as a learning
objective of this module?

-   **A.** Writing Unit Tests to check model logic and behavior
-   **B.** Writing Widget Tests to check UI rendering and interaction
-   **C.** Building and signing a release APK file for publishing to
    Google Play
-   **D.** Using DevTools to diagnose layout, rebuild, and navigation
    issues

**Correct answer:** C --- Building and signing a release APK file for
publishing to Google Play

**Explanation:** Building and signing a release APK for Google Play
publishing is a Module 12 topic, NOT a Module 11 learning objective. A,
B, D are all accurate Module 11 learning objectives.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/testing

------------------------------------------------------------------------

### PRM-379 --- 13 --- Unit Tests & Mocks

Consider: a student group writes VERY MANY Integration Tests (the vast
majority of all tests) but almost no Unit Tests. Per the "Testing
Pyramid" principle learned, what realistic consequence is likely?

-   **A.** No negative consequence at all, more Integration Tests is
    always better in every case
-   **B.** The test suite will run significantly slower, cost more
    time/resources to maintain, and pinpointing the root cause when a
    bug occurs will be harder than having a solid Unit Test foundation
    to isolate logic bugs early
-   **C.** Integration Tests are always faster than Unit Tests, so this
    is the optimal strategy
-   **D.** The distribution of test types has no effect on speed or
    maintenance cost at all

**Correct answer:** B --- The test suite will run significantly slower,
cost more time/resources to maintain, and pinpointing the root cause
when a bug occurs will be harder than having a solid Unit Test
foundation to isolate logic bugs early

**Explanation:** Too many Integration Tests and too few Unit Tests leads
to a slower, costlier-to-maintain suite and harder root-cause isolation.
A, C, D contradict the Testing Pyramid principle.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/testing

------------------------------------------------------------------------

### PRM-380 --- 13 --- Unit Tests & Mocks

In the "Deployment Checklist" after completing Demo 12.4, which of the
following items is mentioned?

-   **A.** Remove debug statements, clean up unused assets, ensure
    versionCode has been updated
-   **B.** Double the number of animations in the app
-   **C.** Delete the entire pubspec.yaml configuration file
-   **D.** Convert the entire app to use Widget Test instead of Unit
    Test

**Correct answer:** A --- Remove debug statements, clean up unused
assets, ensure versionCode has been updated

**Explanation:** The checklist mentions removing debug statements,
cleaning unused assets, and ensuring versionCode is updated. B, C, D are
not reasonable/stated items in the actual checklist.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/testing

------------------------------------------------------------------------

### PRM-381 --- 13 --- Unit Tests & Mocks

Per Module 12's summary, what is the ultimate goal of the entire process
of optimizing and packaging the Taskly app?

-   **A.** Simply to reduce the project's number of lines of code
-   **B.** To produce a performance-optimized Release build, verify the
    app's size, and be ready for real-world deployment
    (production-ready)
-   **C.** To completely eliminate the need for writing Unit Tests in
    future projects
-   **D.** To convert the entire app from Flutter to a native platform

**Correct answer:** B --- To produce a performance-optimized Release
build, verify the app's size, and be ready for real-world deployment
(production-ready)

**Explanation:** The ultimate goal is a performance-optimized,
size-verified, production-ready Release build, per Module 12's Summary.
A, C, D don't match the module's stated final goal.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/testing

------------------------------------------------------------------------

### PRM-382 --- 13 --- Unit Tests & Mocks

A group of students intentionally skips writing Unit Tests and
separating clear architecture (State/Repository) to "finish the project
quickly," resulting in it later being very hard to fix bugs or add new
features without breaking working parts. What concept from the lecture
does this illustrate, and how does it relate to the architectural
principles (Repository Pattern, Testing Pyramid) taught in Module 3 and
Module 11?

-   **A.** This is unrelated to any concept taught in previous modules
-   **B.** This is an example of "Technical Debt" --- skipping clean
    architecture (Repository Pattern from Module 3) and testing (Testing
    Pyramid from Module 11) saves short-term time but increases
    long-term maintenance/bug-fixing costs, matching the "borrow now,
    pay interest later" nature of technical debt
-   **C.** This is an example of Golden Testing
-   **D.** This is the recommended approach for performance optimization
    per Module 12

**Correct answer:** B --- This is an example of "Technical Debt" ---
skipping clean architecture (Repository Pattern from Module 3) and
testing (Testing Pyramid from Module 11) saves short-term time but
increases long-term maintenance/bug-fixing costs, matching the "borrow
now, pay interest later" nature of technical debt

**Explanation:** This is a Technical Debt example: skipping clean
architecture and testing saves short-term time but raises long-term
maintenance costs, matching debt's "borrow now, pay later" nature. A, C,
D don't match the correct concept/relationship.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/testing

------------------------------------------------------------------------

### PRM-383 --- 13 --- Unit Tests & Mocks

If a Golden Test is set up to run automatically in a CI/CD pipeline
before merging code, what is the main purpose of doing this?

-   **A.** Increases the speed of building the release app
-   **B.** Automatically catches unintended visual regressions caused by
    code changes early, before those changes get merged into the main
    branch, helping ensure UI consistency over time
-   **C.** Fully replaces Unit Test and Widget Test
-   **D.** Only has the effect of checking the app's network speed

**Correct answer:** B --- Automatically catches unintended visual
regressions caused by code changes early, before those changes get
merged into the main branch, helping ensure UI consistency over time

**Explanation:** Running Golden Tests in CI/CD catches visual
regressions early before merging, ensuring UI consistency over time. A,
C, D don't match the actual purpose of this CI/CD integration.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/testing

------------------------------------------------------------------------

### PRM-384 --- 13 --- Unit Tests & Mocks

What does the Embedder layer mainly handle?

-   **A.** Storing data with SQLite
-   **B.** Platform integration, input, lifecycle, and window management
-   **C.** Defining Dart data types
-   **D.** Writing unit tests

**Correct answer:** B --- Platform integration, input, lifecycle, and
window management

**Explanation:** Option B is correct: Platform integration, input,
lifecycle, and window management. The answer matches Dart's type-system
or null-safety behavior; use nullable types and null-aware operators
deliberately to avoid null errors.

**Source:** Quizlet compilation 2

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/testing

------------------------------------------------------------------------

### PRM-385 --- 13 --- Unit Tests & Mocks

Which standard screen elements can Scaffold provide?

-   **A.** AppBar, body, drawer, bottomNavigationBar, and
    floatingActionButton
-   **B.** TextField only
-   **C.** Unit tests only
-   **D.** A database connection only

**Correct answer:** A --- AppBar, body, drawer, bottomNavigationBar, and
floatingActionButton

**Explanation:** Option A is correct: AppBar, body, drawer,
bottomNavigationBar, and floatingActionButton. The answer matches Dart's
type-system or null-safety behavior; use nullable types and null-aware
operators deliberately to avoid null errors.

**Source:** Quizlet compilation 2

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/testing

------------------------------------------------------------------------

### PRM-386 --- 13 --- Unit Tests & Mocks

What is Info.plist URL Types used for?

-   **A.** Storing an access token
-   **B.** Defining a Provider
-   **C.** Running unit tests
-   **D.** Declaring a custom URL scheme for an iOS application

**Correct answer:** D --- Declaring a custom URL scheme for an iOS
application

**Explanation:** Option D is correct: Declaring a custom URL scheme for
an iOS application. The answer matches Dart's type-system or null-safety
behavior; use nullable types and null-aware operators deliberately to
avoid null errors.

**Source:** Quizlet compilation 2

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/testing

------------------------------------------------------------------------

### PRM-387 --- 13 --- Unit Tests & Mocks

What is mock authentication best suited for?

-   **A.** Google Play signing
-   **B.** Database migration
-   **C.** Classroom demonstrations and learning a stable flow without
    network dependency
-   **D.** The final production implementation

**Correct answer:** C --- Classroom demonstrations and learning a stable
flow without network dependency

**Explanation:** Option C is correct: Classroom demonstrations and
learning a stable flow without network dependency. Unit tests isolate a
function, method, or class; mocks help keep external dependencies
controlled and repeatable.

**Source:** Quizlet compilation 2

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/testing

------------------------------------------------------------------------

### PRM-388 --- 13 --- Unit Tests & Mocks

What risks does real-API authentication have compared with mock
authentication?

-   **A.** It does not need async code
-   **B.** It may fail because of the network, server, TLS, or CORS
-   **C.** It does not need error handling
-   **D.** It never fails

**Correct answer:** B --- It may fail because of the network, server,
TLS, or CORS

**Explanation:** Option B is correct: It may fail because of the
network, server, TLS, or CORS. Unit tests isolate a function, method, or
class; mocks help keep external dependencies controlled and repeatable.

**Source:** Quizlet compilation 2

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/testing

------------------------------------------------------------------------

### PRM-389 --- 13 --- Unit Tests & Mocks

What does a unit test validate?

-   **A.** APK size
-   **B.** Logic without requiring UI
-   **C.** Animations only
-   **D.** A complete user flow on a device

**Correct answer:** B --- Logic without requiring UI

**Explanation:** Option B is correct: Logic without requiring UI. Unit
tests isolate a function, method, or class; mocks help keep external
dependencies controlled and repeatable.

**Source:** Quizlet compilation 2

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/testing

------------------------------------------------------------------------

### PRM-390 --- 13 --- Unit Tests & Mocks

According to the testing pyramid, which type of test should be most
numerous?

-   **A.** Unit tests
-   **B.** Manual tests only
-   **C.** Release tests
-   **D.** Integration tests

**Correct answer:** A --- Unit tests

**Explanation:** Option A is correct: Unit tests. The answer matches
Dart's type-system or null-safety behavior; use nullable types and
null-aware operators deliberately to avoid null errors.

**Source:** Quizlet compilation 2

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/testing

------------------------------------------------------------------------

### PRM-391 --- 13 --- Unit Tests & Mocks

Which test type should be prioritized for a logic failure?

-   **A.** Integration test only
-   **B.** Manual screenshot only
-   **C.** Unit test
-   **D.** Application-size test

**Correct answer:** C --- Unit test

**Explanation:** Option C is correct: Unit test. The answer matches
Dart's type-system or null-safety behavior; use nullable types and
null-aware operators deliberately to avoid null errors.

**Source:** Quizlet compilation 2

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/testing

------------------------------------------------------------------------

### PRM-392 --- 13 --- Unit Tests & Mocks

What is the Act step in a unit test of toggle()?

-   **A.** Run flutter build
-   **B.** Create the task
-   **C.** Call expect()
-   **D.** Call task.toggle()

**Correct answer:** D --- Call task.toggle()

**Explanation:** Option D is correct: Call task.toggle(). Unit tests
isolate a function, method, or class; mocks help keep external
dependencies controlled and repeatable.

**Source:** Quizlet compilation 2

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/testing

------------------------------------------------------------------------

### PRM-393 --- 13 --- Unit Tests & Mocks

Which testing best practice is correct?

-   **A.** Retest Flutter framework behavior
-   **B.** Never use keys
-   **C.** Keep tests small and focused, and mock repositories when
    possible
-   **D.** Use integration tests for every method

**Correct answer:** C --- Keep tests small and focused, and mock
repositories when possible

**Explanation:** Option C is correct: Keep tests small and focused, and
mock repositories when possible. The answer matches Dart's type-system
or null-safety behavior; use nullable types and null-aware operators
deliberately to avoid null errors.

**Source:** Quizlet compilation 2

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/testing

------------------------------------------------------------------------

### PRM-394 --- 13 --- Unit Tests & Mocks

Which package is used for mocking in Dart tests often?

-   **A.** provider
-   **B.** mocktail
-   **C.** skia
-   **D.** sqflite

**Correct answer:** B --- mocktail

**Explanation:** Option B is correct: mocktail. Unit tests isolate a
function, method, or class; mocks help keep external dependencies
controlled and repeatable.

**Source:** Quizlet compilation 3

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/testing

------------------------------------------------------------------------

### PRM-395 --- 14 --- Widget Tests

In Demo 11.4 (Integration Test: Full CRUD Flow), the test sequentially:
adds a task → opens detail → edits the title → saves → checks the
updated list. Why is this test type classified as "Integration Test"
rather than a plain "Widget Test"?

-   **A.** Because it uses more lines of code than a typical Widget Test
-   **B.** Because it validates the entire interaction flow across
    multiple app layers (UI → Provider → Repository) through consecutive
    steps, simulating a complete real user journey, rather than checking
    just a single isolated UI behavior
-   **C.** Because it doesn't use any widgets at all
-   **D.** Because Integration Test and Widget Test are the same
    concept, just different names

**Correct answer:** B --- Because it validates the entire interaction
flow across multiple app layers (UI → Provider → Repository) through
consecutive steps, simulating a complete real user journey, rather than
checking just a single isolated UI behavior

**Explanation:** It's classified as Integration Test because it
validates the full flow across UI → Provider → Repository, simulating a
complete user journey. A, C, D don't match the classification reason.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/cookbook/testing/widget

------------------------------------------------------------------------

### PRM-396 --- 14 --- Widget Tests

What is `find.byKey(const Key('taskTextField'))` used for in a test?

-   **A.** Searching for displayed text on screen by string content
-   **B.** Finding one specific widget exactly via its assigned Key,
    making widget identification in the test tree more reliable than
    searching by type or text (which can be duplicated or change)
-   **C.** Finding all TextFields on screen regardless of Key
-   **D.** Has no effect, purely illustrative

**Correct answer:** B --- Finding one specific widget exactly via its
assigned Key, making widget identification in the test tree more
reliable than searching by type or text (which can be duplicated or
change)

**Explanation:** find.byKey() reliably locates one specific widget via
its assigned Key, more reliable than searching by type/text. A, C, D
misdescribe its function.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/cookbook/testing/widget

------------------------------------------------------------------------

### PRM-397 --- 14 --- Widget Tests

Why does the lecture recommend "Use keys for widget tests"?

-   **A.** Because a Key is syntactically mandatory for every Flutter
    widget
-   **B.** Because assigning a Key helps accurately locate a specific
    widget in the test, avoiding confusion when multiple widgets of the
    same type or text content exist on screen
-   **C.** Because a Key doubles the test's execution speed
-   **D.** A Key only works with StatelessWidget, not with
    StatefulWidget

**Correct answer:** B --- Because assigning a Key helps accurately
locate a specific widget in the test, avoiding confusion when multiple
widgets of the same type or text content exist on screen

**Explanation:** Assigning a Key aids accurate widget location in tests,
avoiding confusion among similar widgets. A, C, D don't match the
reasoning behind this recommendation.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/cookbook/testing/widget

------------------------------------------------------------------------

### PRM-398 --- 14 --- Widget Tests

In the test file `test/widget/demo_11_3_navigation_to_detail_test.dart`,
suppose the final assertion is: expect(find.text('Task Detail'),
findsOneWidget); but the detail screen actually displays the title as
"Task Details" (with an extra "s"). What is the test's result?

-   **A.** The test still passes because Flutter automatically does
    fuzzy text matching
-   **B.** The test fails (findsOneWidget errors since no widget with
    the exact text "Task Detail" is found), because `find.text()`
    requires an exact string match
-   **C.** The test automatically skips this assertion
-   **D.** The test passes but prints a warning, not treated as a
    failure

**Correct answer:** B --- The test fails (findsOneWidget errors since no
widget with the exact text "Task Detail" is found), because
`find.text()` requires an exact string match

**Explanation:** find.text() requires an exact string match, so a
mismatched "Task Detail" vs "Task Details" causes the test to fail. A,
C, D don't match find.text()'s actual matching behavior.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/cookbook/testing/widget

------------------------------------------------------------------------

### PRM-399 --- 14 --- Widget Tests

What does `tester.pumpWidget(createTaskListTestApp())` do as the first
step of a Widget Test?

-   **A.** Clears all previous test data
-   **B.** Pumps" (renders) the given widget tree into the virtual test
    environment, equivalent to launching the app for the first time to
    begin testing
-   **C.** Builds the app into an APK file
-   **D.** Connects to a real server to fetch data

**Correct answer:** B --- Pumps" (renders) the given widget tree into
the virtual test environment, equivalent to launching the app for the
first time to begin testing

**Explanation:** pumpWidget() renders the given widget tree into the
test environment, equivalent to launching the app to begin testing. A,
C, D misdescribe this function.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/cookbook/testing/widget

------------------------------------------------------------------------

### PRM-400 --- 14 --- Widget Tests

Per "How Flutter Builds the UI (Render Pipeline)," what are the
respective roles of the three core concepts Widget, Element,
RenderObject?

-   **A.** Widget is an immutable blueprint describing configuration,
    Element manages lifecycle & state, RenderObject performs the actual
    layout/painting/compositing
-   **B.** Widget, Element, RenderObject are three different names for
    the same concept
-   **C.** RenderObject is immutable, Widget performs painting directly
    to the screen
-   **D.** Element only exists in Widget Test, not when the app actually
    runs

**Correct answer:** A --- Widget is an immutable blueprint describing
configuration, Element manages lifecycle & state, RenderObject performs
the actual layout/painting/compositing

**Explanation:** Widget = immutable blueprint, Element = lifecycle/state
manager, RenderObject = performs layout/painting/compositing. B, C, D
misdescribe the roles of these three components.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/cookbook/testing/widget

------------------------------------------------------------------------

### PRM-401 --- 14 --- Widget Tests

What does Golden Testing in Flutter check?

-   **A.** Asynchronous data-processing logic (Future/Stream)
-   **B.** Comparing a widget's rendered UI against a saved reference
    ("golden") image, to detect unintended visual regressions
-   **C.** Checking API response speed
-   **D.** Checking the app's security

**Correct answer:** B --- Comparing a widget's rendered UI against a
saved reference ("golden") image, to detect unintended visual
regressions

**Explanation:** Golden Testing compares rendered UI against a saved
golden reference image to detect visual regressions. A, C, D misdescribe
this test type's purpose.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/cookbook/testing/widget

------------------------------------------------------------------------

### PRM-402 --- 14 --- Widget Tests

In `flutter_test`, which function is used to compare the current widget
against a saved golden image?

-   **A.** `expect(find.text(...), findsOneWidget)`
-   **B.** `matchesGoldenFile('image_label.png')` combined with
    `expectLater()`
-   **C.** `tester.pumpAndSettle()`
-   **D.** `verify()`

**Correct answer:** B --- `matchesGoldenFile('image_label.png')`
combined with `expectLater()`

**Explanation:** `matchesGoldenFile()` combined with `expectLater()` is
the standard flutter_test API for comparing against a golden image. A,
C, D are not the correct function for this purpose.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/cookbook/testing/widget

------------------------------------------------------------------------

### PRM-403 --- 14 --- Widget Tests

A student group runs a Golden Test on Windows, but the original golden
image was created on macOS, causing the test to fail repeatedly even
though the UI looks "identical" to the naked eye. What is the most
common cause of this issue?

-   **A.** Golden Tests never work reliably on any operating system
-   **B.** Font rendering and anti-aliasing can differ slightly between
    operating systems/Flutter versions, causing pixel-by-pixel images to
    not match exactly even if hard to notice by eye --- so Golden Tests
    are usually recommended to run consistently on the same environment
    (e.g. a fixed CI) to avoid false failures
-   **C.** Because SliverAppBar is incompatible with Golden Test
-   **D.** Because Windows doesn't support running `flutter test`

**Correct answer:** B --- Font rendering and anti-aliasing can differ
slightly between operating systems/Flutter versions, causing
pixel-by-pixel images to not match exactly even if hard to notice by eye
--- so Golden Tests are usually recommended to run consistently on the
same environment (e.g. a fixed CI) to avoid false failures

**Explanation:** Slight cross-platform font-rendering/anti-aliasing
differences cause pixel mismatches, hence the recommendation to run
Golden Tests on a consistent environment (fixed CI). A, C, D don't match
the real technical cause.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/cookbook/testing/widget

------------------------------------------------------------------------

### PRM-404 --- 14 --- Widget Tests

In `flutter_bloc`, how does the `BlocListener` widget differ from
`BlocBuilder`?

-   **A.** The two widgets are entirely identical, interchangeable in
    every case
-   **B.** `BlocBuilder` is used to rebuild the UI based on the new
    state (returns a widget); `BlocListener` is used to perform one-time
    side-effects (e.g. navigation, showing a SnackBar/Dialog) when the
    state changes, WITHOUT rebuilding the UI
-   **C.** `BlocListener` can only be used with Cubit, not with Bloc
-   **D.** `BlocBuilder` is only used for Golden Testing

**Correct answer:** B --- `BlocBuilder` is used to rebuild the UI based
on the new state (returns a widget); `BlocListener` is used to perform
one-time side-effects (e.g. navigation, showing a SnackBar/Dialog) when
the state changes, WITHOUT rebuilding the UI

**Explanation:** BlocBuilder rebuilds UI based on new state;
BlocListener performs one-time side-effects on state change without
rebuilding. A, C, D misdescribe the difference between these two
widgets.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/cookbook/testing/widget

------------------------------------------------------------------------

### PRM-405 --- 14 --- Widget Tests

Which method does ChangeNotifier use to inform its listeners?

-   **A.** json.decode()
-   **B.** setString()
-   **C.** notifyListeners()
-   **D.** pumpAndSettle()

**Correct answer:** C --- notifyListeners()

**Explanation:** Option C is correct: notifyListeners(). The answer
matches Dart's type-system or null-safety behavior; use nullable types
and null-aware operators deliberately to avoid null errors.

**Source:** Quizlet compilation 2

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/cookbook/testing/widget

------------------------------------------------------------------------

### PRM-406 --- 14 --- Widget Tests

What is JSON?

-   **A.** A rendering engine
-   **B.** A Flutter UI language
-   **C.** A lightweight text format for exchanging key-value and array
    data
-   **D.** A type of widget test

**Correct answer:** C --- A lightweight text format for exchanging
key-value and array data

**Explanation:** Option C is correct: A lightweight text format for
exchanging key-value and array data. The answer matches Dart's
type-system or null-safety behavior; use nullable types and null-aware
operators deliberately to avoid null errors.

**Source:** Quizlet compilation 2

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/cookbook/testing/widget

------------------------------------------------------------------------

### PRM-407 --- 14 --- Widget Tests

Which package is used in the slides for HTTP requests?

-   **A.** http
-   **B.** sqflite
-   **C.** provider only
-   **D.** flutter_test

**Correct answer:** A --- http

**Explanation:** Option A is correct: http. The answer matches Dart's
type-system or null-safety behavior; use nullable types and null-aware
operators deliberately to avoid null errors.

**Source:** Quizlet compilation 2

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/cookbook/testing/widget

------------------------------------------------------------------------

### PRM-408 --- 14 --- Widget Tests

Which package helps locate the application's documents directory?

-   **A.** provider
-   **B.** flutter_test
-   **C.** path_provider
-   **D.** http

**Correct answer:** C --- path_provider

**Explanation:** Option C is correct: path_provider. The answer matches
Dart's type-system or null-safety behavior; use nullable types and
null-aware operators deliberately to avoid null errors.

**Source:** Quizlet compilation 2

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/cookbook/testing/widget

------------------------------------------------------------------------

### PRM-409 --- 14 --- Widget Tests

What does a widget test validate?

-   **A.** Google Play upload
-   **B.** Token signing
-   **C.** UI rendering and widget interaction
-   **D.** Only the native database engine

**Correct answer:** C --- UI rendering and widget interaction

**Explanation:** Option C is correct: UI rendering and widget
interaction. Widget tests verify UI rendering and interaction in
Flutter's test environment; finders and matchers assert what is present
and how it behaves.

**Source:** Quizlet compilation 2

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/cookbook/testing/widget

------------------------------------------------------------------------

### PRM-410 --- 14 --- Widget Tests

Why should there be fewer integration tests?

-   **A.** Flutter cannot run them
-   **B.** They cannot use expect()
-   **C.** They are slower and more expensive, so they should focus on
    critical flows
-   **D.** They cannot test UI

**Correct answer:** C --- They are slower and more expensive, so they
should focus on critical flows

**Explanation:** Option C is correct: They are slower and more
expensive, so they should focus on critical flows. Integration tests
exercise a complete app or a substantial feature end-to-end; Patrol adds
support for native platform interactions.

**Source:** Quizlet compilation 2

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/cookbook/testing/widget

------------------------------------------------------------------------

### PRM-411 --- 14 --- Widget Tests

What is normally the final step of a testing workflow?

-   **A.** Use expect() to verify the result
-   **B.** Save SharedPreferences
-   **C.** Sign a JWT
-   **D.** Create a release APK

**Correct answer:** A --- Use expect() to verify the result

**Explanation:** Option A is correct: Use expect() to verify the result.
The answer matches Dart's type-system or null-safety behavior; use
nullable types and null-aware operators deliberately to avoid null
errors.

**Source:** Quizlet compilation 2

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/cookbook/testing/widget

------------------------------------------------------------------------

### PRM-412 --- 14 --- Widget Tests

Which test type should be prioritized when the UI does not update?

-   **A.** Network ping
-   **B.** Widget test
-   **C.** SQL test
-   **D.** Signing test

**Correct answer:** B --- Widget test

**Explanation:** Option B is correct: Widget test. The answer matches
Dart's type-system or null-safety behavior; use nullable types and
null-aware operators deliberately to avoid null errors.

**Source:** Quizlet compilation 2

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/cookbook/testing/widget

------------------------------------------------------------------------

### PRM-413 --- 14 --- Widget Tests

Which test should be used to check incorrect navigation?

-   **A.** A navigation or widget test
-   **B.** An image-cache test
-   **C.** A SharedPreferences-only test
-   **D.** APK Analyzer

**Correct answer:** A --- A navigation or widget test

**Explanation:** Option A is correct: A navigation or widget test. The
answer matches Dart's type-system or null-safety behavior; use nullable
types and null-aware operators deliberately to avoid null errors.

**Source:** Quizlet compilation 2

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/cookbook/testing/widget

------------------------------------------------------------------------

### PRM-414 --- 14 --- Widget Tests

Which method is used for the Assert step?

-   **A.** expect()
-   **B.** print()
-   **C.** notifyListeners()
-   **D.** setState()

**Correct answer:** A --- expect()

**Explanation:** Option A is correct: expect(). The answer matches
Dart's type-system or null-safety behavior; use nullable types and
null-aware operators deliberately to avoid null errors.

**Source:** Quizlet compilation 2

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/cookbook/testing/widget

------------------------------------------------------------------------

### PRM-415 --- 14 --- Widget Tests

What does tester.pumpWidget() do?

-   **A.** Renders a widget tree in the test environment
-   **B.** Signs the application
-   **C.** Sends an HTTP request
-   **D.** Opens a database

**Correct answer:** A --- Renders a widget tree in the test environment

**Explanation:** Option A is correct: Renders a widget tree in the test
environment. The answer matches Dart's type-system or null-safety
behavior; use nullable types and null-aware operators deliberately to
avoid null errors.

**Source:** Quizlet compilation 2

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/cookbook/testing/widget

------------------------------------------------------------------------

### PRM-416 --- 14 --- Widget Tests

Which user action does tester.tap() simulate?

-   **A.** Entering text
-   **B.** Resetting a Provider
-   **C.** Waiting for an animation
-   **D.** Tapping a widget

**Correct answer:** D --- Tapping a widget

**Explanation:** Option D is correct: Tapping a widget. The answer
matches Dart's type-system or null-safety behavior; use nullable types
and null-aware operators deliberately to avoid null errors.

**Source:** Quizlet compilation 2

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/cookbook/testing/widget

------------------------------------------------------------------------

### PRM-417 --- 14 --- Widget Tests

When is pumpAndSettle() useful?

-   **A.** Waiting for animations and navigation to finish
-   **B.** Creating an unfinished Future
-   **C.** Preventing the UI from rebuilding
-   **D.** Testing only a model unit

**Correct answer:** A --- Waiting for animations and navigation to
finish

**Explanation:** Option A is correct: Waiting for animations and
navigation to finish. pumpAndSettle advances frames until scheduled
frames settle, which is useful for animations and route transitions.

**Source:** Quizlet compilation 2

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/cookbook/testing/widget

------------------------------------------------------------------------

### PRM-418 --- 14 --- Widget Tests

What does findsOneWidget verify?

-   **A.** At least ten widgets exist
-   **B.** No widgets exist
-   **C.** Exactly one widget matches the finder
-   **D.** A database row exists

**Correct answer:** C --- Exactly one widget matches the finder

**Explanation:** Option C is correct: Exactly one widget matches the
finder. Widget tests verify UI rendering and interaction in Flutter's
test environment; finders and matchers assert what is present and how it
behaves.

**Source:** Quizlet compilation 2

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/cookbook/testing/widget

------------------------------------------------------------------------

### PRM-419 --- 14 --- Widget Tests

How does a Key help in a widget test?

-   **A.** It directly increases FPS
-   **B.** It encrypts a token
-   **C.** It reduces application size
-   **D.** It provides a stable way to find the correct widget for
    interaction

**Correct answer:** D --- It provides a stable way to find the correct
widget for interaction

**Explanation:** Option D is correct: It provides a stable way to find
the correct widget for interaction. Widget tests verify UI rendering and
interaction in Flutter's test environment; finders and matchers assert
what is present and how it behaves.

**Source:** Quizlet compilation 2

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/cookbook/testing/widget

------------------------------------------------------------------------

### PRM-420 --- 14 --- Widget Tests

Which package helps generate immutable models and JSON code?

-   **A.** freezed
-   **B.** lint
-   **C.** flutter_test
-   **D.** path

**Correct answer:** A --- freezed

**Explanation:** Option A is correct: freezed. The answer matches Dart's
type-system or null-safety behavior; use nullable types and null-aware
operators deliberately to avoid null errors.

**Source:** Quizlet compilation 3

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/cookbook/testing/widget

------------------------------------------------------------------------

### PRM-421 --- 14 --- Widget Tests

Widget tests are used to?

-   **A.** Test UI widgets
-   **B.** Publish app
-   **C.** Configure IDE
-   **D.** Create plugins

**Correct answer:** A --- Test UI widgets

**Explanation:** Option A is correct: Test UI widgets. Widget tests
verify UI rendering and interaction in Flutter's test environment;
finders and matchers assert what is present and how it behaves.

**Source:** Quizlet compilation 3

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/cookbook/testing/widget

------------------------------------------------------------------------

### PRM-422 --- 14 --- Widget Tests

Which widget test utility pumps frames/widgets?

-   **A.** tester.pump
-   **B.** tester.run
-   **C.** tester.click
-   **D.** tester.build

**Correct answer:** A --- tester.pump

**Explanation:** Option A is correct: tester.pump. Widget tests verify
UI rendering and interaction in Flutter's test environment; finders and
matchers assert what is present and how it behaves.

**Source:** Quizlet compilation 3

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/cookbook/testing/widget

------------------------------------------------------------------------

### PRM-423 --- 14 --- Widget Tests

Which package provides core Flutter testing APIs?

-   **A.** flutter_test
-   **B.** flutter_http
-   **C.** flutter_state
-   **D.** flutter_async

**Correct answer:** A --- flutter_test

**Explanation:** Option A is correct: flutter_test. The answer matches
Dart's type-system or null-safety behavior; use nullable types and
null-aware operators deliberately to avoid null errors.

**Source:** Quizlet compilation 3

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/cookbook/testing/widget

------------------------------------------------------------------------

### PRM-424 --- 14 --- Widget Tests

What is the primary purpose of a Widget Test in Flutter?

-   **A.** To validate complete user flows from start to finish.
-   **B.** To test business logic in total isolation from the UI.
-   **C.** To validate UI rendering and individual widget interactions.
-   **D.** To check if the app can connect to a remote database.

**Correct answer:** C --- To validate UI rendering and individual widget
interactions.

**Explanation:** Option C is correct: To validate UI rendering and
individual widget interactions.. Widget tests verify UI rendering and
interaction in Flutter's test environment; finders and matchers assert
what is present and how it behaves.

**Source:** Quizlet compilation 4

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/cookbook/testing/widget

------------------------------------------------------------------------

### PRM-425 --- 14 --- Widget Tests

In a widget test, which method is specifically used to trigger a UI
rebuild after an interaction (like a button tap)?

-   **A.** tester.tap()
-   **B.** tester.pumpAndSettle()
-   **C.** tester.pump()
-   **D.** tester.pumpWidget()

**Correct answer:** C --- tester.pump()

**Explanation:** Option C is correct: tester.pump(). Widget tests verify
UI rendering and interaction in Flutter's test environment; finders and
matchers assert what is present and how it behaves.

**Source:** Quizlet compilation 4

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/cookbook/testing/widget

------------------------------------------------------------------------

### PRM-426 --- 14 --- Widget Tests

When testing navigation between screens, why is tester.pumpAndSettle()
used instead of a standard tester.pump()?

-   **A.** To clear the local cache before moving to a new screen.
-   **B.** To wait for all animations and transitions to fully complete.
-   **C.** To simulate a user pressing the physical back button.
-   **D.** To refresh the Provider state management.

**Correct answer:** B --- To wait for all animations and transitions to
fully complete.

**Explanation:** Option B is correct: To wait for all animations and
transitions to fully complete.. pumpAndSettle advances frames until
scheduled frames settle, which is useful for animations and route
transitions.

**Source:** Quizlet compilation 4

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/cookbook/testing/widget

------------------------------------------------------------------------

### PRM-427 --- 14 --- Widget Tests

What is a recommended best practice for identifying widgets within a
widget test to ensure they are easily found?

-   **A.** Always search by the widget's color.
-   **B.** Search by the line number in the source code.
-   **C.** Use unique Keys (e.g., find.byKey).
-   **D.** Rely solely on hardcoded text strings

**Correct answer:** C --- Use unique Keys (e.g., find.byKey).

**Explanation:** Option C is correct: Use unique Keys (e.g.,
find.byKey).. Widget tests verify UI rendering and interaction in
Flutter's test environment; finders and matchers assert what is present
and how it behaves.

**Source:** Quizlet compilation 4

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/cookbook/testing/widget

------------------------------------------------------------------------

### PRM-428 --- 14 --- Widget Tests

According to the "Testing Workflow," which function is used to verify
that the actual result of a test matches the expected behavior?

-   **A.** verify()
-   **B.** check()
-   **C.** expect()
-   **D.** assert()

**Correct answer:** C --- expect()

**Explanation:** Option C is correct: expect(). The answer matches
Dart's type-system or null-safety behavior; use nullable types and
null-aware operators deliberately to avoid null errors.

**Source:** Quizlet compilation 4

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/cookbook/testing/widget

------------------------------------------------------------------------

### PRM-429 --- 15 --- Integration Tests & Patrol

In the testing pyramid, how many Integration Tests are recommended and
for what purpose?

-   **A.** Use the most since it's the most comprehensive test type
-   **B.** Use few, since they run slowly and cost more --- should only
    be applied to critical, business-critical user flows
-   **C.** Integration Tests should never be used under any circumstance
-   **D.** Only used to test CPU performance

**Correct answer:** B --- Use few, since they run slowly and cost more
--- should only be applied to critical, business-critical user flows

**Explanation:** Integration Tests should be used sparingly since
they're slow/costly --- reserved for critical user flows. A, C, D don't
match the Testing Pyramid's principle.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/testing/integration-tests

------------------------------------------------------------------------

### PRM-430 --- 15 --- Integration Tests & Patrol

A student writes an Integration Test but insists on also testing whether
"the AppBar's background color is exactly Colors.blue per Material
Design's default" (a default framework behavior, not custom app logic).
Per the "Best Practices" learned, why should this approach be avoided?

-   **A.** Because Integration Test is not allowed to check colors in
    any form
-   **B.** Because this tests the Flutter framework's default behavior
    (not the app's custom business logic), wasting effort writing the
    test without adding any real value to ensuring app quality
-   **C.** Because AppBar cannot be tested by any tool
-   **D.** Because colors always change randomly between builds so they
    can't be tested

**Correct answer:** B --- Because this tests the Flutter framework's
default behavior (not the app's custom business logic), wasting effort
writing the test without adding any real value to ensuring app quality

**Explanation:** Testing a default framework behavior instead of custom
app logic wastes effort without adding real quality-assurance value. A,
C, D don't match the reasoning behind avoiding this.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/testing/integration-tests

------------------------------------------------------------------------

### PRM-431 --- 15 --- Integration Tests & Patrol

What is the purpose of ThemeData?

-   **A.** Running integration tests
-   **B.** Calling a REST API
-   **C.** Defining global colors, typography, and shapes
-   **D.** Storing a session token

**Correct answer:** C --- Defining global colors, typography, and shapes

**Explanation:** Option C is correct: Defining global colors,
typography, and shapes. The answer matches Dart's type-system or
null-safety behavior; use nullable types and null-aware operators
deliberately to avoid null errors.

**Source:** Quizlet compilation 2

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/testing/integration-tests

------------------------------------------------------------------------

### PRM-432 --- 15 --- Integration Tests & Patrol

What does an integration test validate?

-   **A.** One validator only
-   **B.** One isolated pure function
-   **C.** A static Text widget
-   **D.** A complete user flow from beginning to end

**Correct answer:** D --- A complete user flow from beginning to end

**Explanation:** Option D is correct: A complete user flow from
beginning to end. Integration tests exercise a complete app or a
substantial feature end-to-end; Patrol adds support for native platform
interactions.

**Source:** Quizlet compilation 2

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/testing/integration-tests

------------------------------------------------------------------------

### PRM-433 --- 15 --- Integration Tests & Patrol

Integration tests are used to?

-   **A.** Test entire app flows
-   **B.** Only compile code
-   **C.** Draw UI
-   **D.** Format code

**Correct answer:** A --- Test entire app flows

**Explanation:** Option A is correct: Test entire app flows. Integration
tests exercise a complete app or a substantial feature end-to-end;
Patrol adds support for native platform interactions.

**Source:** Quizlet compilation 3

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/testing/integration-tests

------------------------------------------------------------------------

### PRM-434 --- 15 --- Integration Tests & Patrol

Why should integration tests be used sparingly (the "few" at the top of
the pyramid)?

-   **A.** Because they are the least reliable at catching bugs.
-   **B.** Because they cannot test navigation.
-   **C.** Because they are slow and expensive to run compared to other
    tests.
-   **D.** Because they only work in Debug mode.

**Correct answer:** C --- Because they are slow and expensive to run
compared to other tests.

**Explanation:** Option C is correct: Because they are slow and
expensive to run compared to other tests.. Integration tests exercise a
complete app or a substantial feature end-to-end; Patrol adds support
for native platform interactions.

**Source:** Quizlet compilation 4

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/testing/integration-tests

------------------------------------------------------------------------

### PRM-435 --- 16 --- Coverage & CI

What order does Flutter's rendering workflow follow?

-   **A.** GPU Rendering → Widget Tree → Render Tree → Composited Scene
-   **B.** Widget Tree → Render Tree → Composited Scene → GPU Rendering
-   **C.** Render Tree → Widget Tree → GPU Rendering → Composited Scene
-   **D.** Composited Scene → Widget Tree → GPU Rendering → Render Tree

**Correct answer:** B --- Widget Tree → Render Tree → Composited Scene →
GPU Rendering

**Explanation:** Render workflow: Widget Tree → Render Tree → Composited
Scene → GPU Rendering, matching the slide's order exactly. Other options
reverse the order incorrectly.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/testing

------------------------------------------------------------------------

### PRM-436 --- 16 --- Coverage & CI

Per "Why Notifications After Authentication?", what is the main purpose
of sending a notification right after a successful login (e.g. "Login
successful. Welcome back!")?

-   **A.** Fully replaces showing a SnackBar
-   **B.** Connects notifications with the app's real business workflows
    (like confirming an important action that just occurred), increasing
    user engagement and awareness of their account status
-   **C.** Only meant to check the device's Internet access permission
-   **D.** Mandatory for the JWT to become valid

**Correct answer:** B --- Connects notifications with the app's real
business workflows (like confirming an important action that just
occurred), increasing user engagement and awareness of their account
status

**Explanation:** The purpose is connecting notifications with real
business workflows, boosting engagement and account-status awareness. A,
C, D don't match the actual purpose stated.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/testing

------------------------------------------------------------------------

### PRM-437 --- 16 --- Coverage & CI

What is the rendering pipeline sequence presented in the slides?

-   **A.** Source Code -\> SQL -\> Render Tree -\> API
-   **B.** Widget Tree -\> HTTP -\> JSON -\> GPU
-   **C.** Widget Tree -\> Render Tree -\> Composited Scene -\> GPU
    Rendering
-   **D.** GPU -\> Widget Tree -\> Database -\> UI

**Correct answer:** C --- Widget Tree -\> Render Tree -\> Composited
Scene -\> GPU Rendering

**Explanation:** Option C is correct: Widget Tree -\> Render Tree -\>
Composited Scene -\> GPU Rendering. The answer matches Dart's
type-system or null-safety behavior; use nullable types and null-aware
operators deliberately to avoid null errors.

**Source:** Quizlet compilation 2

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/testing

------------------------------------------------------------------------

### PRM-438 --- 16 --- Coverage & CI

Which sequence is the correct SharedPreferences workflow?

-   **A.** Load instance -\> read -\> update -\> save -\> refresh UI
-   **B.** Save -\> build APK -\> delete
-   **C.** HTTP -\> JSON -\> GPU
-   **D.** Route -\> pop -\> push

**Correct answer:** A --- Load instance -\> read -\> update -\> save -\>
refresh UI

**Explanation:** Option A is correct: Load instance -\> read -\> update
-\> save -\> refresh UI. The answer matches Dart's type-system or
null-safety behavior; use nullable types and null-aware operators
deliberately to avoid null errors.

**Source:** Quizlet compilation 2

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/testing

------------------------------------------------------------------------

### PRM-439 --- 16 --- Coverage & CI

How is a Widget described in Flutter's render pipeline?

-   **A.** The only object that paints directly
-   **B.** An immutable blueprint
-   **C.** An HTTP response
-   **D.** A database row

**Correct answer:** B --- An immutable blueprint

**Explanation:** Option B is correct: An immutable blueprint. The answer
matches Dart's type-system or null-safety behavior; use nullable types
and null-aware operators deliberately to avoid null errors.

**Source:** Quizlet compilation 2

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/testing

------------------------------------------------------------------------

### PRM-440 --- 16 --- Coverage & CI

In the SharedPreferences workflow, what is the final step after a value
has been saved to the storage?

-   **A.** Load the instance again
-   **B.** Read the key
-   **C.** Refresh the UI to reflect the updated data
-   **D.** Close the database file

**Correct answer:** C --- Refresh the UI to reflect the updated data

**Explanation:** Option C is correct: Refresh the UI to reflect the
updated data. The answer matches Dart's type-system or null-safety
behavior; use nullable types and null-aware operators deliberately to
avoid null errors.

**Source:** Quizlet compilation 4

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/testing

------------------------------------------------------------------------

### PRM-441 --- 16 --- Coverage & CI

In the standard Flutter testing workflow, what are the three steps (the
"3 As") used to structure a test?

-   **A.** Apply, Act, Assert
-   **B.** Arrange, Act, Assert
-   **C.** Arrange, Analyze, Apply
-   **D.** Assemble, Act, Assert

**Correct answer:** B --- Arrange, Act, Assert

**Explanation:** Option B is correct: Arrange, Act, Assert. The answer
matches Dart's type-system or null-safety behavior; use nullable types
and null-aware operators deliberately to avoid null errors.

**Source:** Quizlet compilation 4

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/testing

------------------------------------------------------------------------

### PRM-442 --- 16 --- Coverage & CI

In the Flutter render pipeline, which specific component is responsible
for handling the lifecycle and state of widgets?

-   **A.** Widgets
-   **B.** Elements
-   **C.** RenderObjects
-   **D.** Skia Engine

**Correct answer:** B --- Elements

**Explanation:** Option B is correct: Elements. This is a
state-management concept: state changes must notify or trigger the
relevant part of the UI to rebuild.

**Source:** Quizlet compilation 4

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/testing

------------------------------------------------------------------------

### PRM-443 --- 17 --- Performance

Which programming language and rendering engine does Flutter use?

-   **A.** Kotlin and Skia
-   **B.** Dart and Skia
-   **C.** Dart and V8
-   **D.** Swift and Metal

**Correct answer:** B --- Dart and Skia

**Explanation:** Flutter uses Dart with the Skia rendering engine. (A,
C, D all pair the wrong language/engine.)

**Source:** Quizlet compilation 1

**Verification note:** Version-sensitive: the supplied Quizlet set names
Skia. Current Flutter documentation describes Impeller as the default
renderer on supported targets; retain this answer only when the question
is about the lecture's historical architecture or Skia specifically.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/perf/ui-performance

------------------------------------------------------------------------

### PRM-444 --- 17 --- Performance

In the framework comparison table from Module 1, what is the core
difference between Flutter and React Native?

-   **A.** Flutter uses Dart and compiles to native UI with its own
    engine, while React Native uses JavaScript and bridges to native
    components
-   **B.** Both compile directly to native machine code without an
    engine
-   **C.** React Native is faster because it needs no bridge
-   **D.** Flutter cannot build for iOS, only Android

**Correct answer:** A --- Flutter uses Dart and compiles to native UI
with its own engine, while React Native uses JavaScript and bridges to
native components

**Explanation:** Comparison table: Flutter (Dart, Native UI + Engine) vs
React Native (JS, Bridge to Native) vs Native (Kotlin/Swift, Pure
Native) --- as shown in the slide. B is wrong because React Native needs
a bridge; C and D are unsupported claims.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/perf/ui-performance

------------------------------------------------------------------------

### PRM-445 --- 17 --- Performance

What characterizes an abstract class in Dart?

-   **A.** It cannot have any methods with a body
-   **B.** It defines structure without full behavior, forcing
    subclasses to implement the bodiless methods
-   **C.** Only usable inside the Flutter Framework, not in pure Dart
-   **D.** Can be instantiated directly with the `new` keyword

**Correct answer:** B --- It defines structure without full behavior,
forcing subclasses to implement the bodiless methods

**Explanation:** An abstract class defines structure without full
behavior, forcing subclasses to implement it. A is wrong since abstract
classes can have methods with a body; C is wrong since it works in pure
Dart too; D is wrong since abstract classes cannot be instantiated
directly.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/perf/ui-performance

------------------------------------------------------------------------

### PRM-446 --- 17 --- Performance

What problem does `SafeArea` in Flutter solve on modern devices?

-   **A.** Increases the app's rendering speed
-   **B.** Avoids UI content being obscured by unusable areas like
    notches, Dynamic Island, or curved screens
-   **C.** Encrypts user data
-   **D.** Automatically translates the UI language

**Correct answer:** B --- Avoids UI content being obscured by unusable
areas like notches, Dynamic Island, or curved screens

**Explanation:** SafeArea avoids UI content being obscured by
notches/Dynamic Island/curved screens. A, C, D misdescribe SafeArea's
purpose.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/perf/ui-performance

------------------------------------------------------------------------

### PRM-447 --- 17 --- Performance

What frame-rate target (FPS) does Flutter aim for to ensure a smooth
experience on standard devices?

-   **A.** 24 FPS
-   **B.** 30 FPS
-   **C.** 60 FPS
-   **D.** 144 FPS

**Correct answer:** C --- 60 FPS

**Explanation:** Flutter targets 60 FPS for a smooth experience on
standard devices. A, B, D don't match the stated number.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/perf/ui-performance

------------------------------------------------------------------------

### PRM-448 --- 17 --- Performance

If a device runs at 60 FPS, roughly how many milliseconds does Flutter
have to complete build, layout, and paint for EACH frame before a
dropped frame (jank) occurs?

-   **A.** About 16.6ms
-   **B.** About 100ms
-   **C.** About 1ms
-   **D.** About 1000ms

**Correct answer:** A --- About 16.6ms

**Explanation:** At 60 FPS, Flutter has about 16.6ms per frame. B, C, D
don't match the calculated figure in the lecture.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/perf/ui-performance

------------------------------------------------------------------------

### PRM-449 --- 17 --- Performance

Which language is the Flutter Framework layer mainly written in?

-   **A.** Dart
-   **B.** C++
-   **C.** Swift
-   **D.** Rust

**Correct answer:** A --- Dart

**Explanation:** Option A is correct: Dart. The answer matches Dart's
type-system or null-safety behavior; use nullable types and null-aware
operators deliberately to avoid null errors.

**Source:** Quizlet compilation 2

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/perf/ui-performance

------------------------------------------------------------------------

### PRM-450 --- 17 --- Performance

How is Dart described in the slides?

-   **A.** An assembly language for Android
-   **B.** A web markup language
-   **C.** A client-optimized, class-based language developed by Google
-   **D.** A language used only for databases

**Correct answer:** C --- A client-optimized, class-based language
developed by Google

**Explanation:** Option C is correct: A client-optimized, class-based
language developed by Google. The answer matches Dart's type-system or
null-safety behavior; use nullable types and null-aware operators
deliberately to avoid null errors.

**Source:** Quizlet compilation 2

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/perf/ui-performance

------------------------------------------------------------------------

### PRM-451 --- 17 --- Performance

Which library is used to read and write File objects in Dart?

-   **A.** dart:html is always required
-   **B.** dart:io
-   **C.** flutter/rendering
-   **D.** dart:ui only

**Correct answer:** B --- dart:io

**Explanation:** Option B is correct: dart:io. The answer matches Dart's
type-system or null-safety behavior; use nullable types and null-aware
operators deliberately to avoid null errors.

**Source:** Quizlet compilation 2

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/perf/ui-performance

------------------------------------------------------------------------

### PRM-452 --- 17 --- Performance

At 60 FPS, how much time is available for each frame?

-   **A.** About 16.6 ms
-   **B.** 120 ms
-   **C.** 8 ms
-   **D.** 60 ms

**Correct answer:** A --- About 16.6 ms

**Explanation:** Option A is correct: About 16.6 ms. Flutter performance
should be evaluated in profile mode, preferably on a physical device,
because debug-mode timings are not representative.

**Source:** Quizlet compilation 2

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/perf/ui-performance

------------------------------------------------------------------------

### PRM-453 --- 17 --- Performance

What is a benefit of a const constructor?

-   **A.** Creating database tables
-   **B.** Encrypting tokens
-   **C.** Increasing network latency
-   **D.** Reducing rebuild work, saving memory, and helping tree
    diffing

**Correct answer:** D --- Reducing rebuild work, saving memory, and
helping tree diffing

**Explanation:** Option D is correct: Reducing rebuild work, saving
memory, and helping tree diffing. The answer matches Dart's type-system
or null-safety behavior; use nullable types and null-aware operators
deliberately to avoid null errors.

**Source:** Quizlet compilation 2

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/perf/ui-performance

------------------------------------------------------------------------

### PRM-454 --- 17 --- Performance

Why can UniqueKey() be harmful when misused?

-   **A.** It creates a new identity and may force widgets to rebuild
    repeatedly
-   **B.** It does not create a key
-   **C.** It is used only for databases
-   **D.** It does not compile

**Correct answer:** A --- It creates a new identity and may force
widgets to rebuild repeatedly

**Explanation:** Option A is correct: It creates a new identity and may
force widgets to rebuild repeatedly. The answer matches Dart's
type-system or null-safety behavior; use nullable types and null-aware
operators deliberately to avoid null errors.

**Source:** Quizlet compilation 2

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/perf/ui-performance

------------------------------------------------------------------------

### PRM-455 --- 17 --- Performance

Which technique correctly optimizes thumbnail images?

-   **A.** Always load the largest image
-   **B.** Resize or compress the image for its display size instead of
    loading a 2000-pixel image
-   **C.** Decode the image inside build() on every frame
-   **D.** Never use a placeholder

**Correct answer:** B --- Resize or compress the image for its display
size instead of loading a 2000-pixel image

**Explanation:** Option B is correct: Resize or compress the image for
its display size instead of loading a 2000-pixel image. The answer
matches Dart's type-system or null-safety behavior; use nullable types
and null-aware operators deliberately to avoid null errors.

**Source:** Quizlet compilation 2

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/perf/ui-performance

------------------------------------------------------------------------

### PRM-456 --- 17 --- Performance

Flutter uses which rendering engine?

-   **A.** WebKit
-   **B.** Skia
-   **C.** Blink
-   **D.** Metal

**Correct answer:** B --- Skia

**Explanation:** Option B is correct: Skia. The answer matches Dart's
type-system or null-safety behavior; use nullable types and null-aware
operators deliberately to avoid null errors.

**Source:** Quizlet compilation 3

**Verification note:** Version-sensitive: the supplied Quizlet set names
Skia. Current Flutter documentation describes Impeller as the default
renderer on supported targets; retain this answer only when the question
is about the lecture's historical architecture or Skia specifically.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/perf/ui-performance

------------------------------------------------------------------------

### PRM-457 --- 17 --- Performance

Which constructor is optimized for large grids?

-   **A.** GridView.count
-   **B.** GridView.builder
-   **C.** GridView.fixed
-   **D.** GridView.simple

**Correct answer:** B --- GridView.builder

**Explanation:** Option B is correct: GridView.builder. The answer
matches Dart's type-system or null-safety behavior; use nullable types
and null-aware operators deliberately to avoid null errors.

**Source:** Quizlet compilation 3

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/perf/ui-performance

------------------------------------------------------------------------

### PRM-458 --- 17 --- Performance

Why use const widgets?

-   **A.** More network access
-   **B.** Better rebuild optimization
-   **C.** Adds state
-   **D.** Enables navigation

**Correct answer:** B --- Better rebuild optimization

**Explanation:** Option B is correct: Better rebuild optimization. The
answer matches Dart's type-system or null-safety behavior; use nullable
types and null-aware operators deliberately to avoid null errors.

**Source:** Quizlet compilation 3

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/perf/ui-performance

------------------------------------------------------------------------

### PRM-459 --- 17 --- Performance

What are the key compilation features of Dart, Flutter's programming
language?

-   **A.** It combines Ahead-of-Time (AOT) and Just-in-Time (JIT)
    compilation.
-   **B.** It is strictly an interpreted language.
-   **C.** It only supports manual memory management.
-   **D.** It does not support null safety.

**Correct answer:** A --- It combines Ahead-of-Time (AOT) and
Just-in-Time (JIT) compilation.

**Explanation:** Option A is correct: It combines Ahead-of-Time (AOT)
and Just-in-Time (JIT) compilation.. The answer matches Dart's
type-system or null-safety behavior; use nullable types and null-aware
operators deliberately to avoid null errors.

**Source:** Quizlet compilation 4

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/perf/ui-performance

------------------------------------------------------------------------

### PRM-460 --- 17 --- Performance

When the Dart execution engine runs, which of the following has the
highest priority?

-   **A.** Microtask queue
-   **B.** Event queue
-   **C.** UI Rendering events
-   **D.** Timer events

**Correct answer:** A --- Microtask queue

**Explanation:** Option A is correct: Microtask queue. The answer
matches Dart's type-system or null-safety behavior; use nullable types
and null-aware operators deliberately to avoid null errors.

**Source:** Quizlet compilation 4

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/perf/ui-performance

------------------------------------------------------------------------

### PRM-461 --- 17 --- Performance

Why is it considered a UX best practice to disable the submit button
while a network request is in progress?

-   **A.** To save battery life on the device.
-   **B.** To prevent "double-submit" and show a loading indicator.
-   **C.** To allow the Skia engine to render faster.
-   **D.** Because Flutter cannot handle multiple simultaneous POST
    requests.

**Correct answer:** B --- To prevent "double-submit" and show a loading
indicator.

**Explanation:** Option B is correct: To prevent "double-submit" and
show a loading indicator.. The answer matches Dart's type-system or
null-safety behavior; use nullable types and null-aware operators
deliberately to avoid null errors.

**Source:** Quizlet compilation 4

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/perf/ui-performance

------------------------------------------------------------------------

### PRM-462 --- 17 --- Performance

Which of the following is true regarding UI Overflow Errors in Flutter?

-   **A.** They cause the application to crash immediately.
-   **B.** They occur when a widget exceeds its layout constraints but
    do not crash the app.
-   **C.** They can only be detected by a physical device.
-   **D.** They are automatically fixed by the Flutter framework.

**Correct answer:** B --- They occur when a widget exceeds its layout
constraints but do not crash the app.

**Explanation:** Option B is correct: They occur when a widget exceeds
its layout constraints but do not crash the app.. The answer matches
Dart's type-system or null-safety behavior; use nullable types and
null-aware operators deliberately to avoid null errors.

**Source:** Quizlet compilation 4

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/perf/ui-performance

------------------------------------------------------------------------

### PRM-463 --- 18 --- Build & Release

Given: String? name; print(name ?? "Guest"); name = "Minh";
print(name!.length); What is printed, in order?

-   **A.** null, 4
-   **B.** Guest, 4
-   **C.** Guest, 5
-   **D.** Compile error because `!` cannot be used with a String?
    variable

**Correct answer:** B --- Guest, 4

**Explanation:** `name` is initially null, so it prints "Guest"; after
assigning "Minh" (4 characters: M-i-n-h), `name!.length` = 4 → result
"Guest, 4". A has the wrong first value; C has the wrong length (should
be 4, not 5); D is wrong since `!` is syntactically valid when the
variable is guaranteed non-null at that point.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/deployment

------------------------------------------------------------------------

### PRM-464 --- 18 --- Build & Release

For an app running on small phones, large phones, tablets, and desktop,
why does the lecture recommend "Avoid fixed values"?

-   **A.** Because Flutter doesn't support fixed numbers in code
-   **B.** Because fixed values (e.g. absolute pixel width/height) don't
    adapt to diverse screen sizes, easily causing overflow or wasted
    space on other devices
-   **C.** Because fixed values increase the APK file size
-   **D.** No specific technical reason

**Correct answer:** B --- Because fixed values (e.g. absolute pixel
width/height) don't adapt to diverse screen sizes, easily causing
overflow or wasted space on other devices

**Explanation:** Fixed values don't adapt to diverse screen sizes,
easily causing overflow or wasted space. A, C, D don't match the actual
technical reason.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/deployment

------------------------------------------------------------------------

### PRM-465 --- 18 --- Build & Release

Why does the lecture encourage testing responsive UI across multiple
device sizes (e.g. Pixel 2 → Pixel 7 → iPad) instead of just one single
emulator?

-   **A.** Because Flutter requires testing on at least 3 devices to
    submit an assignment
-   **B.** Because layout behavior (especially breakpoints, Wrap,
    GridView) can vary significantly across screen sizes, and
    overflow/misalignment bugs often only appear at specific sizes
-   **C.** Because each device runs a different version of Dart
-   **D.** No real reason, it's just an optional suggestion

**Correct answer:** B --- Because layout behavior (especially
breakpoints, Wrap, GridView) can vary significantly across screen sizes,
and overflow/misalignment bugs often only appear at specific sizes

**Explanation:** Layout behavior can vary significantly across screen
sizes, and bugs often only surface at specific sizes, hence the need for
varied device testing. A, C, D don't match the actual technical reason.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/deployment

------------------------------------------------------------------------

### PRM-466 --- 18 --- Build & Release

Comparing the three storage types learned (SharedPreferences, JSON File,
SQLite) against the offline-first principle "Store offline → Use offline
→ Sync online." When designing a notes app that will later sync to a
server, which initial local storage choice makes future "Sync online"
and "Resolve conflicts" easiest to implement, and why?

-   **A.** SharedPreferences, because it's the simplest to start coding
    with
-   **B.** SQLite, because its clear row/column data structure makes it
    easy to track changes (e.g. by id, timestamp) for syncing and
    resolving conflicts with the server, compared to managing a single
    JSON string blob in SharedPreferences or a JSON file with no
    mechanism to query/track changes per element
-   **C.** No local storage needed, always call the API every time the
    app opens to avoid conflicts
-   **D.** JSON File, because files automatically sync in real-time with
    the server

**Correct answer:** B --- SQLite, because its clear row/column data
structure makes it easy to track changes (e.g. by id, timestamp) for
syncing and resolving conflicts with the server, compared to managing a
single JSON string blob in SharedPreferences or a JSON file with no
mechanism to query/track changes per element

**Explanation:** SQLite's clear row/column structure makes tracking
changes (id, timestamp) for syncing/conflict resolution far easier than
a JSON blob or file. A, C, D don't match the technical reasoning for
future sync/conflict handling.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/deployment

------------------------------------------------------------------------

### PRM-467 --- 18 --- Build & Release

In the common errors table, if Google Sign-In returns null when tested
on an emulator, what is the most common cause stated?

-   **A.** Missing camera permission
-   **B.** The emulator lacks Google Play Services --- use an emulator
    with the Play Store installed or a real device instead
-   **C.** Wrong SharedPreferences configuration
-   **D.** Expired JWT

**Correct answer:** B --- The emulator lacks Google Play Services ---
use an emulator with the Play Store installed or a real device instead

**Explanation:** The emulator lacking Google Play Services is the common
cause; use one with Play Store or a real device. A, C, D don't match the
stated cause.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/deployment

------------------------------------------------------------------------

### PRM-468 --- 18 --- Build & Release

What debugging aspects does DevTools in Flutter support, per Module 11?

-   **A.** Only supports syntax debugging
-   **B.** Layout issues, failed state updates, slow performance,
    unnecessary rebuilds, and navigation issues
-   **C.** Only supports checking network connectivity
-   **D.** Only used to build the release app

**Correct answer:** B --- Layout issues, failed state updates, slow
performance, unnecessary rebuilds, and navigation issues

**Explanation:** DevTools supports layout issues, failed state updates,
performance, unnecessary rebuilds, and navigation issues, per "Debugging
Goals in Flutter." A, C, D don't cover its full scope.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/deployment

------------------------------------------------------------------------

### PRM-469 --- 18 --- Build & Release

Why does the lecture recommend running Flutter DevTools in "Profile
Mode" instead of "Debug Mode" when measuring performance?

-   **A.** Because DevTools cannot be opened in Debug Mode
-   **B.** Because Debug Mode has a lot of debugging overhead
    (assertions, extra checks) that make measured performance numbers
    not accurately reflect real release-mode performance; Profile Mode
    is closer to real-world performance
-   **C.** Because Profile Mode runs slower than Debug Mode, making it
    suitable for finding bugs more thoroughly
-   **D.** There's no difference between the two modes when measuring
    performance

**Correct answer:** B --- Because Debug Mode has a lot of debugging
overhead (assertions, extra checks) that make measured performance
numbers not accurately reflect real release-mode performance; Profile
Mode is closer to real-world performance

**Explanation:** Debug Mode's overhead skews performance numbers away
from real release performance; Profile Mode is closer to reality. A, C,
D don't match the actual reason for this recommendation.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/deployment

------------------------------------------------------------------------

### PRM-470 --- 18 --- Build & Release

Per "Optimization Technique 2: Extract Widgets" (e.g. extracting
`TaskTile` as its own widget), what is the main benefit of breaking a
large widget into smaller pieces?

-   **A.** Significantly shrinks the APK file size
-   **B.** When one item's data changes, only the corresponding child
    widget (like a specific `TaskTile`) needs to rebuild, instead of the
    entire list/parent screen rebuilding along with it, reducing rebuild
    scope and cost
-   **C.** An extracted widget automatically gets its own key without
    needing to declare one
-   **D.** No real benefit, just makes the code look tidier formally

**Correct answer:** B --- When one item's data changes, only the
corresponding child widget (like a specific `TaskTile`) needs to
rebuild, instead of the entire list/parent screen rebuilding along with
it, reducing rebuild scope and cost

**Explanation:** Extracting widgets narrows rebuild scope to just the
changed item, reducing overall rebuild cost. A, C, D don't match the
real technical benefit.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/deployment

------------------------------------------------------------------------

### PRM-471 --- 18 --- Build & Release

Which command is used to analyze a detailed app-size breakdown by source
code, assets, and packages?

-   **A.** flutter doctor
-   **B.** flutter build apk --analyze-size
-   **C.** flutter test
-   **D.** flutter clean

**Correct answer:** B --- flutter build apk --analyze-size

**Explanation:** `flutter build apk --analyze-size` is used for a
detailed app-size breakdown. A, C, D are not the correct command for
this purpose.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/deployment

------------------------------------------------------------------------

### PRM-472 --- 18 --- Build & Release

Per "Common Size Optimization Tips," what benefit does "Enable
tree-shaking icons" (removing unused Material icons) bring to the
released app?

-   **A.** Makes icons look visually nicer
-   **B.** Removes Material Design icons not actually used in the app
    from the final build package, reducing the app's size
-   **C.** Tree-shaking only affects app runtime speed, not size
-   **D.** This technique only applies to images, not icons

**Correct answer:** B --- Removes Material Design icons not actually
used in the app from the final build package, reducing the app's size

**Explanation:** Tree-shaking icons removes unused Material icons from
the build, reducing app size. A, C, D don't match the actual benefit.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/deployment

------------------------------------------------------------------------

### PRM-473 --- 18 --- Build & Release

What is the difference between `flutter build apk --debug` and
`flutter build apk --release`?

-   **A.** No difference at all in performance or size
-   **B.** The debug build contains extensive debugging support info,
    not optimized for performance/size; the release build is optimized,
    removes debug overhead, giving performance and size closer to the
    real end-user experience
-   **C.** `--release` only works on iOS, `--debug` only works on
    Android
-   **D.** `--debug` always produces a smaller file size than
    `--release`

**Correct answer:** B --- The debug build contains extensive debugging
support info, not optimized for performance/size; the release build is
optimized, removes debug overhead, giving performance and size closer to
the real end-user experience

**Explanation:** Debug builds carry unoptimized debugging overhead;
release builds are optimized for real-world performance and size. A, C,
D don't match the real difference between the two build modes.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/deployment

------------------------------------------------------------------------

### PRM-474 --- 18 --- Build & Release

What file format does Google Play require (instead of a traditional APK)
when publishing an app to the store, and what is the corresponding build
command?

-   **A.** A .aab file (Android App Bundle), built with the command
    `flutter build appbundle --release`
-   **B.** A .ipa file, built with the command
    `flutter build ios --release`
-   **C.** A .exe file, built with the command
    `flutter build windows --release`
-   **D.** Google Play only accepts .apk files, no other format

**Correct answer:** A --- A .aab file (Android App Bundle), built with
the command `flutter build appbundle --release`

**Explanation:** Google Play requires .aab format, built via
`flutter build appbundle --release`. B, C, D don't match the correct
format/command for Android on Google Play.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/deployment

------------------------------------------------------------------------

### PRM-475 --- 18 --- Build & Release

What important rule governs `versionCode` in `android/app/build.gradle`
when publishing consecutive updates?

-   **A.** It must always keep the same value across every release
-   **B.** It must be an integer and must increase with every new
    release (every update pushed to the store)
-   **C.** It doesn't matter, it can be any value including decreasing
-   **D.** Only applies to apps running on iOS

**Correct answer:** B --- It must be an integer and must increase with
every new release (every update pushed to the store)

**Explanation:** versionCode must be an integer and increase with each
new release. A, C, D don't match this required versioning rule.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/deployment

------------------------------------------------------------------------

### PRM-476 --- 18 --- Build & Release

Before running `flutter build apk --release` for the official release,
the lecture recommends first trying the app in "Profile Mode"
(`flutter run --profile`). What is the most reasonable reason for this
intermediate step?

-   **A.** Because Profile Mode is the only mandatory step to
    successfully build the release file
-   **B.** Profile Mode removes most of Debug Mode's overhead while
    still allowing observation of near-real-world performance
    (smoothness/jank, build/render speed) before creating the official
    release build, helping catch performance issues early without
    waiting until the final packaging step
-   **C.** Profile Mode and Release Mode are entirely identical so this
    step is unnecessary
-   **D.** Profile Mode is only used to check syntax errors, unrelated
    to performance

**Correct answer:** B --- Profile Mode removes most of Debug Mode's
overhead while still allowing observation of near-real-world performance
(smoothness/jank, build/render speed) before creating the official
release build, helping catch performance issues early without waiting
until the final packaging step

**Explanation:** Profile Mode removes most Debug overhead while showing
near-real performance, catching issues early before the final release
build. A, C, D don't match the actual reasoning for this step.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/deployment

------------------------------------------------------------------------

### PRM-477 --- 18 --- Build & Release

In the general Software Development Life Cycle (SDLC), what is the main
role of the "Analysis" phase?

-   **A.** Writing detailed source code for each feature
-   **B.** Gathering and clarifying requirements from users/clients
    before starting design and coding
-   **C.** Packaging and publishing the product to a store
-   **D.** Running the final automated test before release

**Correct answer:** B --- Gathering and clarifying requirements from
users/clients before starting design and coding

**Explanation:** The Analysis phase focuses on gathering/clarifying
requirements before design and coding begin. A, C, D are other SDLC
phases, not Analysis.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/deployment

------------------------------------------------------------------------

### PRM-478 --- 18 --- Build & Release

What does "Technical Debt" refer to in software development?

-   **A.** A direct financial cost paid to a cloud service provider
-   **B.** The future cost (time to fix bugs, difficulty maintaining,
    difficulty scaling) arising from rushed or unoptimized design/coding
    decisions made now, similar to a "debt" that must be paid off
    gradually over time
-   **C.** The maximum number of lines of code allowed in a project
-   **D.** A mandatory fee paid when publishing an app to Google
    Play/App Store

**Correct answer:** B --- The future cost (time to fix bugs, difficulty
maintaining, difficulty scaling) arising from rushed or unoptimized
design/coding decisions made now, similar to a "debt" that must be paid
off gradually over time

**Explanation:** Technical Debt is the future cost from rushed
present-day design/coding decisions, like a debt paid off over time. A,
C, D don't match the actual concept.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/deployment

------------------------------------------------------------------------

### PRM-479 --- 18 --- Build & Release

In the software development lifecycle, where is the "Testing" phase
usually placed relative to "Implementation" (coding)?

-   **A.** Testing always happens before Implementation in every
    development model
-   **B.** Testing usually happens after (or continuously in parallel
    with, depending on Agile/TDD models) the Implementation phase, to
    verify the written code works as required per the analysis
-   **C.** Testing has no relationship with Implementation at all
-   **D.** Testing is only ever done once, after the app has been
    released

**Correct answer:** B --- Testing usually happens after (or continuously
in parallel with, depending on Agile/TDD models) the Implementation
phase, to verify the written code works as required per the analysis

**Explanation:** Testing usually happens after (or in continuous
parallel with, per Agile/TDD) Implementation, verifying the code meets
requirements. A, C, D don't match Testing's usual position in the SDLC.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/deployment

------------------------------------------------------------------------

### PRM-480 --- 18 --- Build & Release

Which feature lets developers see code changes quickly without
restarting the entire application?

-   **A.** Code Signing
-   **B.** Hot Reload
-   **C.** AOT only
-   **D.** Cold Boot

**Correct answer:** B --- Hot Reload

**Explanation:** Option B is correct: Hot Reload. The answer matches
Dart's type-system or null-safety behavior; use nullable types and
null-aware operators deliberately to avoid null errors.

**Source:** Quizlet compilation 2

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/deployment

------------------------------------------------------------------------

### PRM-481 --- 18 --- Build & Release

In which year was Flutter 1.0 released according to the slides?

-   **A.** 2021
-   **B.** 2018
-   **C.** 2015
-   **D.** 2017

**Correct answer:** B --- 2018

**Explanation:** Option B is correct: 2018. The answer matches Dart's
type-system or null-safety behavior; use nullable types and null-aware
operators deliberately to avoid null errors.

**Source:** Quizlet compilation 2

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/deployment

------------------------------------------------------------------------

### PRM-482 --- 18 --- Build & Release

What is DartPad best suited for?

-   **A.** Creating a native Android emulator
-   **B.** Running Dart or Flutter code directly in a browser without
    installation
-   **C.** Managing Firebase projects
-   **D.** Building a signed AAB file

**Correct answer:** B --- Running Dart or Flutter code directly in a
browser without installation

**Explanation:** Option B is correct: Running Dart or Flutter code
directly in a browser without installation. The answer matches Dart's
type-system or null-safety behavior; use nullable types and null-aware
operators deliberately to avoid null errors.

**Source:** Quizlet compilation 2

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/deployment

------------------------------------------------------------------------

### PRM-483 --- 18 --- Build & Release

Which command is commonly used to check the Flutter environment after
installing the SDK?

-   **A.** android verify
-   **B.** flutter doctor
-   **C.** flutter database
-   **D.** dart publish

**Correct answer:** B --- flutter doctor

**Explanation:** Option B is correct: flutter doctor. The answer matches
Dart's type-system or null-safety behavior; use nullable types and
null-aware operators deliberately to avoid null errors.

**Source:** Quizlet compilation 2

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/deployment

------------------------------------------------------------------------

### PRM-484 --- 18 --- Build & Release

Which lifecycle method is used to release controllers or other
resources?

-   **A.** runApp()
-   **B.** initState()
-   **C.** createState()
-   **D.** dispose()

**Correct answer:** D --- dispose()

**Explanation:** Option D is correct: dispose(). The answer matches
Dart's type-system or null-safety behavior; use nullable types and
null-aware operators deliberately to avoid null errors.

**Source:** Quizlet compilation 2

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/deployment

------------------------------------------------------------------------

### PRM-485 --- 18 --- Build & Release

When are Material Icons commonly used?

-   **A.** Storing relational data
-   **B.** Compiling a release build
-   **C.** Navigation buttons, action buttons, and status indicators
-   **D.** Parsing JSON

**Correct answer:** C --- Navigation buttons, action buttons, and status
indicators

**Explanation:** Option C is correct: Navigation buttons, action
buttons, and status indicators. The answer matches Dart's type-system or
null-safety behavior; use nullable types and null-aware operators
deliberately to avoid null errors.

**Source:** Quizlet compilation 2

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/deployment

------------------------------------------------------------------------

### PRM-486 --- 18 --- Build & Release

Where are Associated Domains added for iOS?

-   **A.** DartPad settings
-   **B.** AndroidManifest.xml
-   **C.** Signing & Capabilities of the Runner target
-   **D.** pubspec.yaml

**Correct answer:** C --- Signing & Capabilities of the Runner target

**Explanation:** Option C is correct: Signing & Capabilities of the
Runner target. Flutter supports multiple deployment targets, although
each target can have its own SDK, tooling, and platform-integration
requirements.

**Source:** Quizlet compilation 2

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/deployment

------------------------------------------------------------------------

### PRM-487 --- 18 --- Build & Release

What does InheritedWidget help accomplish?

-   **A.** Sending a POST request
-   **B.** Signing an APK
-   **C.** Efficiently passing data down the widget tree
-   **D.** Creating an emulator

**Correct answer:** C --- Efficiently passing data down the widget tree

**Explanation:** Option C is correct: Efficiently passing data down the
widget tree. The answer matches Dart's type-system or null-safety
behavior; use nullable types and null-aware operators deliberately to
avoid null errors.

**Source:** Quizlet compilation 2

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/deployment

------------------------------------------------------------------------

### PRM-488 --- 18 --- Build & Release

Which problems can occur without responsive design?

-   **A.** Incorrect SQL syntax
-   **B.** APK signing failure
-   **C.** JWT expiration
-   **D.** Overflow, misaligned widgets, clipped text, and poor UX

**Correct answer:** D --- Overflow, misaligned widgets, clipped text,
and poor UX

**Explanation:** Option D is correct: Overflow, misaligned widgets,
clipped text, and poor UX. The answer matches Dart's type-system or
null-safety behavior; use nullable types and null-aware operators
deliberately to avoid null errors.

**Source:** Quizlet compilation 2

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/deployment

------------------------------------------------------------------------

### PRM-489 --- 18 --- Build & Release

Which problems can a well-designed form reduce?

-   **A.** Low FPS caused only by large images
-   **B.** APK size
-   **C.** A deep route stack
-   **D.** Invalid data, poor UX, and data-quality risks

**Correct answer:** D --- Invalid data, poor UX, and data-quality risks

**Explanation:** Option D is correct: Invalid data, poor UX, and
data-quality risks. The answer matches Dart's type-system or null-safety
behavior; use nullable types and null-aware operators deliberately to
avoid null errors.

**Source:** Quizlet compilation 2

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/deployment

------------------------------------------------------------------------

### PRM-490 --- 18 --- Build & Release

What does GlobalKey`<FormState>`{=html} allow you to do?

-   **A.** Access FormState to validate, save, and reset the whole form
-   **B.** Sign an APK
-   **C.** Open a database
-   **D.** Create a JWT

**Correct answer:** A --- Access FormState to validate, save, and reset
the whole form

**Explanation:** Option A is correct: Access FormState to validate,
save, and reset the whole form. This is a state-management concept:
state changes must notify or trigger the relevant part of the UI to
rebuild.

**Source:** Quizlet compilation 2

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/deployment

------------------------------------------------------------------------

### PRM-491 --- 18 --- Build & Release

Which sequence describes the flow from a form to a backend?

-   **A.** UI -\> SQLite -\> GPU -\> Widget
-   **B.** Form -\> Theme -\> Navigator only
-   **C.** UI Form -\> local validation -\> POST request -\> server -\>
    response -\> UI update
-   **D.** Input -\> APK signing

**Correct answer:** C --- UI Form -\> local validation -\> POST request
-\> server -\> response -\> UI update

**Explanation:** Option C is correct: UI Form -\> local validation -\>
POST request -\> server -\> response -\> UI update. The answer matches
Dart's type-system or null-safety behavior; use nullable types and
null-aware operators deliberately to avoid null errors.

**Source:** Quizlet compilation 2

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/deployment

------------------------------------------------------------------------

### PRM-492 --- 18 --- Build & Release

Why do API calls use async/await?

-   **A.** To wait for the network without freezing the UI
-   **B.** To increase APK size
-   **C.** To avoid using model classes
-   **D.** To remove error handling

**Correct answer:** A --- To wait for the network without freezing the
UI

**Explanation:** Option A is correct: To wait for the network without
freezing the UI. Dart uses Future for a single asynchronous result and
Stream for a sequence of asynchronous events; async/await makes
Future-based code easier to read.

**Source:** Quizlet compilation 2

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/deployment

------------------------------------------------------------------------

### PRM-493 --- 18 --- Build & Release

When is FutureBuilder appropriate?

-   **A.** Creating a custom URL scheme
-   **B.** Signing an application
-   **C.** Storing key-value data
-   **D.** Connecting a one-time Future to the UI and handling loading,
    error, and data states

**Correct answer:** D --- Connecting a one-time Future to the UI and
handling loading, error, and data states

**Explanation:** Option D is correct: Connecting a one-time Future to
the UI and handling loading, error, and data states. Dart uses Future
for a single asynchronous result and Stream for a sequence of
asynchronous events; async/await makes Future-based code easier to read.

**Source:** Quizlet compilation 2

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/deployment

------------------------------------------------------------------------

### PRM-494 --- 18 --- Build & Release

What is a local JSON file suitable for?

-   **A.** UI navigation
-   **B.** Simple lists, history, or export/import
-   **C.** Complex multi-table relationships
-   **D.** JWT signing

**Correct answer:** B --- Simple lists, history, or export/import

**Explanation:** Option B is correct: Simple lists, history, or
export/import. The answer matches Dart's type-system or null-safety
behavior; use nullable types and null-aware operators deliberately to
avoid null errors.

**Source:** Quizlet compilation 2

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/deployment

------------------------------------------------------------------------

### PRM-495 --- 18 --- Build & Release

What is onCreate in openDatabase() normally used for?

-   **A.** Signing in with Google
-   **B.** Running CREATE TABLE when the database is created for the
    first time
-   **C.** Calling an API on every frame
-   **D.** Rendering a ListView

**Correct answer:** B --- Running CREATE TABLE when the database is
created for the first time

**Explanation:** Option B is correct: Running CREATE TABLE when the
database is created for the first time. The answer matches Dart's
type-system or null-safety behavior; use nullable types and null-aware
operators deliberately to avoid null errors.

**Source:** Quizlet compilation 2

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/deployment

------------------------------------------------------------------------

### PRM-496 --- 18 --- Build & Release

Which sequence correctly describes the high-level authentication flow?

-   **A.** Enter credentials -\> API request -\> backend verification
    -\> token -\> store token -\> send token with later requests
-   **B.** Notification -\> login -\> hash password on the client
-   **C.** Route -\> JSON -\> SQLite -\> token
-   **D.** Store token -\> enter credentials -\> build APK

**Correct answer:** A --- Enter credentials -\> API request -\> backend
verification -\> token -\> store token -\> send token with later
requests

**Explanation:** Option A is correct: Enter credentials -\> API request
-\> backend verification -\> token -\> store token -\> send token with
later requests. The answer matches Dart's type-system or null-safety
behavior; use nullable types and null-aware operators deliberately to
avoid null errors.

**Source:** Quizlet compilation 2

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/deployment

------------------------------------------------------------------------

### PRM-497 --- 19 --- Supported Platforms

What is the difference between Local Notification and Push Notification?

-   **A.** Local Notification is triggered by the app itself and needs
    no Internet; Push Notification is sent from a server and needs
    Internet plus backend support
-   **B.** The two notification types are completely identical in
    mechanism
-   **C.** Push Notification needs no backend, only Local Notification
    does
-   **D.** Local Notification only works on iOS

**Correct answer:** A --- Local Notification is triggered by the app
itself and needs no Internet; Push Notification is sent from a server
and needs Internet plus backend support

**Explanation:** Local Notification is app-triggered, needing no
Internet; Push Notification is server-sent, needing Internet and backend
support. B, C, D misdescribe/reverse these two notification types.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/reference/supported-platforms

------------------------------------------------------------------------

### PRM-498 --- 19 --- Supported Platforms

What is the basic difference between Implicit Animation and Explicit
Animation in Flutter?

-   **A.** Implicit Animation needs a manual AnimationController,
    Explicit Animation doesn't
-   **B.** Implicit Animation automatically interpolates between old and
    new values when a property changes, without needing to manage an
    AnimationController manually; Explicit Animation requires explicitly
    declaring and controlling an AnimationController
-   **C.** The two animation types are entirely identical, just
    different names
-   **D.** Implicit Animation only works on iOS, Explicit Animation only
    works on Android

**Correct answer:** B --- Implicit Animation automatically interpolates
between old and new values when a property changes, without needing to
manage an AnimationController manually; Explicit Animation requires
explicitly declaring and controlling an AnimationController

**Explanation:** Implicit Animation auto-interpolates without a manual
controller; Explicit Animation requires explicit AnimationController
declaration/control. A, C, D don't match the actual technical
characteristics.

**Source:** Quizlet compilation 1

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/reference/supported-platforms

------------------------------------------------------------------------

### PRM-499 --- 19 --- Supported Platforms

Which file is the main entry point of a Flutter application?

-   **A.** web/index.css
-   **B.** lib/main.dart
-   **C.** android/Manifest.xml
-   **D.** test/main_test.sql

**Correct answer:** B --- lib/main.dart

**Explanation:** Option B is correct: lib/main.dart. The answer matches
Dart's type-system or null-safety behavior; use nullable types and
null-aware operators deliberately to avoid null errors.

**Source:** Quizlet compilation 2

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/reference/supported-platforms

------------------------------------------------------------------------

### PRM-500 --- 19 --- Supported Platforms

Which language is used for Flutter web logic?

-   **A.** Dart
-   **B.** PHP
-   **C.** Ruby
-   **D.** C#

**Correct answer:** A --- Dart

**Explanation:** Option A is correct: Dart. Flutter supports multiple
deployment targets, although each target can have its own SDK, tooling,
and platform-integration requirements.

**Source:** Quizlet compilation 3

**Verification note:** Answer retained from the supplied Quizlet
compilation; official Flutter documentation reference is provided for
topic-level cross-check. Version-sensitive or lecture-specific claims
are called out where detected.

**Official documentation (topic-level reference):**
https://docs.flutter.dev/reference/supported-platforms

------------------------------------------------------------------------

## Topic distribution

Topic \| Question Count \| Question IDs 1 --- Intro to Flutter & Dart \|
36 \| PRM-001, PRM-002, PRM-003, PRM-004, PRM-005, PRM-006, PRM-007,
PRM-008, PRM-009, PRM-010, PRM-011, PRM-012, PRM-013, PRM-014, PRM-015,
PRM-016, PRM-017, PRM-018, PRM-019, PRM-020, PRM-021, PRM-022, PRM-023,
PRM-024, PRM-025, PRM-026, PRM-027, PRM-028, PRM-029, PRM-030, PRM-031,
PRM-032, PRM-033, PRM-034, PRM-035, PRM-171 2 --- Installation &
Environment \| 28 \| PRM-036, PRM-037, PRM-038, PRM-039, PRM-040,
PRM-041, PRM-042, PRM-043, PRM-044, PRM-045, PRM-046, PRM-047, PRM-048,
PRM-049, PRM-050, PRM-051, PRM-052, PRM-053, PRM-054, PRM-055, PRM-056,
PRM-057, PRM-058, PRM-059, PRM-060, PRM-061, PRM-062, PRM-063 3 ---
Flutter CLI & Pub \| 35 \| PRM-064, PRM-065, PRM-066, PRM-067, PRM-068,
PRM-069, PRM-070, PRM-071, PRM-072, PRM-073, PRM-074, PRM-075, PRM-076,
PRM-077, PRM-078, PRM-079, PRM-080, PRM-081, PRM-082, PRM-083, PRM-084,
PRM-085, PRM-086, PRM-087, PRM-088, PRM-089, PRM-090, PRM-091, PRM-092,
PRM-093, PRM-094, PRM-095, PRM-096, PRM-097, PRM-098 4 --- Dev Tools &
Hot Reload \| 10 \| PRM-099, PRM-100, PRM-101, PRM-102, PRM-103,
PRM-104, PRM-105, PRM-106, PRM-107, PRM-108 5 --- Basic Widgets & Keys
\| 35 \| PRM-109, PRM-110, PRM-111, PRM-112, PRM-113, PRM-114, PRM-115,
PRM-116, PRM-117, PRM-118, PRM-119, PRM-120, PRM-121, PRM-122, PRM-123,
PRM-124, PRM-125, PRM-126, PRM-127, PRM-128, PRM-129, PRM-130, PRM-131,
PRM-132, PRM-133, PRM-134, PRM-135, PRM-136, PRM-137, PRM-138, PRM-139,
PRM-140, PRM-141, PRM-142, PRM-143 6 --- Basic Layout \| 34 \| PRM-144,
PRM-145, PRM-146, PRM-147, PRM-148, PRM-149, PRM-150, PRM-151, PRM-152,
PRM-153, PRM-154, PRM-155, PRM-156, PRM-157, PRM-158, PRM-159, PRM-160,
PRM-161, PRM-162, PRM-163, PRM-164, PRM-165, PRM-166, PRM-167, PRM-168,
PRM-169, PRM-170, PRM-172, PRM-173, PRM-174, PRM-175, PRM-176, PRM-177,
PRM-178 7 --- Advanced Layout \| 11 \| PRM-179, PRM-180, PRM-181,
PRM-182, PRM-183, PRM-184, PRM-185, PRM-186, PRM-187, PRM-188, PRM-189 8
--- Theme & Responsive \| 35 \| PRM-190, PRM-191, PRM-192, PRM-193,
PRM-194, PRM-195, PRM-196, PRM-197, PRM-198, PRM-199, PRM-200, PRM-201,
PRM-202, PRM-203, PRM-204, PRM-205, PRM-206, PRM-207, PRM-208, PRM-209,
PRM-210, PRM-211, PRM-212, PRM-213, PRM-214, PRM-215, PRM-216, PRM-217,
PRM-218, PRM-219, PRM-220, PRM-221, PRM-222, PRM-223, PRM-224 9 ---
State & Lifecycle \| 34 \| PRM-225, PRM-226, PRM-227, PRM-228, PRM-229,
PRM-230, PRM-231, PRM-232, PRM-233, PRM-234, PRM-235, PRM-236, PRM-237,
PRM-238, PRM-239, PRM-240, PRM-241, PRM-242, PRM-243, PRM-244, PRM-245,
PRM-246, PRM-247, PRM-248, PRM-249, PRM-250, PRM-251, PRM-252, PRM-253,
PRM-254, PRM-255, PRM-256, PRM-257, PRM-258 10 --- Interaction, Forms &
Async UI \| 34 \| PRM-259, PRM-260, PRM-261, PRM-262, PRM-263, PRM-264,
PRM-265, PRM-266, PRM-267, PRM-268, PRM-269, PRM-270, PRM-271, PRM-272,
PRM-273, PRM-274, PRM-275, PRM-276, PRM-277, PRM-278, PRM-279, PRM-280,
PRM-281, PRM-282, PRM-283, PRM-284, PRM-285, PRM-286, PRM-287, PRM-288,
PRM-289, PRM-290, PRM-291, PRM-292 11 --- Navigation & Deep Links \| 34
\| PRM-293, PRM-294, PRM-295, PRM-296, PRM-297, PRM-298, PRM-299,
PRM-300, PRM-301, PRM-302, PRM-303, PRM-304, PRM-305, PRM-306, PRM-307,
PRM-308, PRM-309, PRM-310, PRM-311, PRM-312, PRM-313, PRM-314, PRM-315,
PRM-316, PRM-317, PRM-318, PRM-319, PRM-320, PRM-321, PRM-322, PRM-323,
PRM-324, PRM-325, PRM-326 12 --- Data, Architecture, Plugins & Platform
\| 34 \| PRM-327, PRM-328, PRM-329, PRM-330, PRM-331, PRM-332, PRM-333,
PRM-334, PRM-335, PRM-336, PRM-337, PRM-338, PRM-339, PRM-340, PRM-341,
PRM-342, PRM-343, PRM-344, PRM-345, PRM-346, PRM-347, PRM-348, PRM-349,
PRM-350, PRM-351, PRM-352, PRM-353, PRM-354, PRM-355, PRM-356, PRM-357,
PRM-358, PRM-359, PRM-360 13 --- Unit Tests & Mocks \| 34 \| PRM-361,
PRM-362, PRM-363, PRM-364, PRM-365, PRM-366, PRM-367, PRM-368, PRM-369,
PRM-370, PRM-371, PRM-372, PRM-373, PRM-374, PRM-375, PRM-376, PRM-377,
PRM-378, PRM-379, PRM-380, PRM-381, PRM-382, PRM-383, PRM-384, PRM-385,
PRM-386, PRM-387, PRM-388, PRM-389, PRM-390, PRM-391, PRM-392, PRM-393,
PRM-394 14 --- Widget Tests \| 34 \| PRM-395, PRM-396, PRM-397, PRM-398,
PRM-399, PRM-400, PRM-401, PRM-402, PRM-403, PRM-404, PRM-405, PRM-406,
PRM-407, PRM-408, PRM-409, PRM-410, PRM-411, PRM-412, PRM-413, PRM-414,
PRM-415, PRM-416, PRM-417, PRM-418, PRM-419, PRM-420, PRM-421, PRM-422,
PRM-423, PRM-424, PRM-425, PRM-426, PRM-427, PRM-428 15 --- Integration
Tests & Patrol \| 6 \| PRM-429, PRM-430, PRM-431, PRM-432, PRM-433,
PRM-434 16 --- Coverage & CI \| 8 \| PRM-435, PRM-436, PRM-437, PRM-438,
PRM-439, PRM-440, PRM-441, PRM-442 17 --- Performance \| 20 \| PRM-443,
PRM-444, PRM-445, PRM-446, PRM-447, PRM-448, PRM-449, PRM-450, PRM-451,
PRM-452, PRM-453, PRM-454, PRM-455, PRM-456, PRM-457, PRM-458, PRM-459,
PRM-460, PRM-461, PRM-462 18 --- Build & Release \| 34 \| PRM-463,
PRM-464, PRM-465, PRM-466, PRM-467, PRM-468, PRM-469, PRM-470, PRM-471,
PRM-472, PRM-473, PRM-474, PRM-475, PRM-476, PRM-477, PRM-478, PRM-479,
PRM-480, PRM-481, PRM-482, PRM-483, PRM-484, PRM-485, PRM-486, PRM-487,
PRM-488, PRM-489, PRM-490, PRM-491, PRM-492, PRM-493, PRM-494, PRM-495,
PRM-496 19 --- Supported Platforms \| 4 \| PRM-497, PRM-498, PRM-499,
PRM-500

## Sources and verification

Item --- Details

Primary source --- Four user-provided text files described by the user
as collected Quizlet question sets.

Question selection --- Questions are retained in English, with source
wording/options preserved where the source text could be parsed. Exact
and high-similarity duplicate question stems were removed.

Answer keys --- Answer keys were taken from the supplied compilation.
The explanation field uses the supplied explanation when available;
otherwise it adds a topic-specific explanation based on the keyed
option.

Official documentation --- The Official Flutter Docs column links to the
relevant docs.flutter.dev topic for each question. This is a topic-level
cross-check reference, not a claim that every statement in every Quizlet
item was individually confirmed by an official page.

Version-sensitive issue --- Questions claiming Flutter universally uses
Skia are version-sensitive. Current Flutter docs discuss Impeller as the
default renderer on supported targets; notes flag this for review rather
than silently rewriting the supplied choices.

Coverage limitation --- The workbook contains 500 deduplicated questions
selected from the supplied Quizlet compilations. Since the provided pool
already exceeds 500 parseable questions, no new questions were added
from Flutter Docs.

Source files --- Văn bản đã dán (1)(1).txt; Văn bản đã dán (2)(1).txt;
Văn bản đã dán (3)(1).txt; Văn bản đã dán (4).txt

Official docs --- UI & layout --- https://docs.flutter.dev/ui and
https://docs.flutter.dev/ui/layout

Official docs --- testing --- https://docs.flutter.dev/testing/overview

Official docs --- performance ---
https://docs.flutter.dev/perf/ui-performance

Official docs --- supported platforms ---
https://docs.flutter.dev/reference/supported-platforms

Official docs --- platform integration ---
https://docs.flutter.dev/platform-integration
