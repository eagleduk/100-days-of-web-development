Udemy

# 100일 Web Development 부트캠프

[<img src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white" />](https://github.com/academind/100-days-of-web-development/)

## 마일스톤 프로젝트: 완전한 온라인 상점(처음부터 끝까지!)

536. 모듈 소개
537. 프로젝트 계획

```
= Structure =
    FrontEnd                         BackEnd
(HTML, CSS, JS)             (NodeJS, Express, MongoDB)
        |                               |
        |-          Customer           -|
        |-           Admin             -|
```

```
= Views =
    Customer                                                    Admin
                            == Login    == SignUp
    - All Products                                              - DashBoard
    - Product Detail                                            - All Products
    - Shopping Cart                                             - New Product
    - All Order For Customer                                    - Update Product
                                                                - All Orders
```

```
= Models =
Users: email, password, isAdmin, address, name
Product: name, summary, price, description, image
Cart: Items, total price, number of items
Orders: User data, Product | Cart data, date, status
```

538. 여러분의 챌린지!
539. 과정 프로젝트 설정
