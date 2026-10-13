# BÀI THỰC HÀNH 3: SMART CONTRACT & WEB3 REACTJS DAPP (PTIT)

Học phần: **Tiền số và Công nghệ Blockchain**  
Học viện Công nghệ Bưu chính Viễn thông (PTIT)

---

## 📌 Giới thiệu dự án

Dự án là bài thực hành hoàn chỉnh về việc phát triển, kiểm thử, triển khai Smart Contract trên mạng thử nghiệm Ethereum (Sepolia Testnet) và xây dựng ứng dụng phi tập trung (DApp) với **ReactJS** và thư viện **Web3.js**.

Dự án mô phỏng hoạt động của một **Tổ chức tự trị phi tập trung (DominionDAO)**:
* Người dùng có thể đóng góp ETH vào quỹ DAO (`Contribute`).
* Đạt mốc đóng góp quy định ($\ge 0.01\text{ ETH}$) sẽ được cấp quyền Cổ đông (`Stakeholder`).
* Cổ đông có quyền tạo đề xuất cấp kinh phí (`Raise Proposal`) và tham gia bỏ phiếu biểu quyết (`Vote`).
* Khi đề xuất hết hạn và đạt đủ số phiếu tán thành, hợp đồng thông minh tự động giải ngân (`Payout`) trực tiếp cho người thụ hưởng.

---

## 📂 Cấu trúc thư mục

```text
TH3/
├── smartcontract/                # Bài 1.1: Khởi tạo Hardhat & FirstSmartContract.sol
│   ├── contracts/
│   │   └── FirstSmartContract.sol
│   ├── scripts/
│   │   └── sample-script.js
│   ├── hardhat.config.js
│   └── package.json
│
├── CodeSmartcontractThucHanhPtit/# Bài 1.2: Hợp đồng chính DominionDAO.sol
│   ├── contracts/
│   │   └── DominionDAO.sol
│   ├── scripts/
│   │   └── deploy_3.js
│   ├── hardhat.config.js
│   └── package.json
│
├── web3-app/                     # Bài 2: Ứng dụng Frontend ReactJS Web3
│   ├── public/
│   ├── src/
│   │   ├── abis/                 # File ABI DominionDAO.json
│   │   ├── components/           # Các thành phần giao diện (Header, Banner, Proposals,...)
│   │   ├── views/                # Các trang chính (Home, Proposal)
│   │   ├── store/                # Quản lý Global State (react-hooks-global-state)
│   │   ├── Blockchain.services.jsx # Tích hợp thư viện Web3.js giao tiếp với Smart Contract
│   │   ├── App.jsx
│   │   └── index.jsx
│   ├── .env                      # Cấu hình địa chỉ Smart Contract
│   ├── tailwind.config.js
│   ├── package.json
│   └── config-overrides.js
│
├── Bao_Cao_TH3_SmartContract_React_PTIT.docx # Báo cáo chi tiết kèm 22 ảnh minh chứng
└── README.md
```

---

## 🌐 Thông tin triển khai trên Blockchain (Sepolia Testnet)

* **Mạng thử nghiệm:** Ethereum Sepolia Testnet (Chain ID: `11155111`)
* **Trình khám phá khối:** [Sepolia Etherscan](https://sepolia.etherscan.io/)

| Thành phần | Địa chỉ trên Sepolia Etherscan |
| :--- | :--- |
| **FirstSmartContract** (Hardhat) | [`0xFBf3C2Fba708a78ef91CA068025FF7C6F24bf7bd`](https://sepolia.etherscan.io/address/0xFBf3C2Fba708a78ef91CA068025FF7C6F24bf7bd) |
| **DominionDAO** (Cá nhân) | [`0x5DF2604E0829b080042767A90D5e9EF80786E227`](https://sepolia.etherscan.io/address/0x5DF2604E0829b080042767A90D5e9EF80786E227) |
| **DominionDAO** (Sử dụng chung cho DApp) | [`0x3555735C2C0c3c7C9f49C0E999d766171e33404F`](https://sepolia.etherscan.io/address/0x3555735C2C0c3c7C9f49C0E999d766171e33404F) |

---

## 🚀 Hướng dẫn cài đặt & Chạy ứng dụng

### 1. Yêu cầu môi trường
* **Node.js**: Phiên bản 16.x hoặc 18.x trở lên.
* **NPM** hoặc **Yarn**.
* Tiện ích mở rộng **MetaMask** trên trình duyệt (đã chuyển sang mạng Sepolia và có sẵn SepoliaETH thử nghiệm).

---

### 2. Triển khai Smart Contract (CodeSmartcontractThucHanhPtit)

```bash
# Di chuyển vào thư mục Smart Contract
cd CodeSmartcontractThucHanhPtit

# Cài đặt các gói phụ thuộc
npm install

# Biên dịch hợp đồng
npx hardhat compile

# Triển khai lên mạng Sepolia (yêu cầu cấu hình private key trong .env)
npx hardhat run scripts/deploy_3.js --network sepolia
```

---

### 3. Khởi chạy Ứng dụng Web3 ReactJS (web3-app)

```bash
# Di chuyển vào thư mục web3-app
cd ../web3-app

# Cài đặt các gói phụ thuộc
npm install

# Tạo file .env và cấu hình địa chỉ Smart Contract
# REACT_APP_CONTRACT_ADDRESS=0x3555735C2C0c3c7C9f49C0E999d766171e33404F

# Khởi chạy máy chủ phát triển
npm start
```

Ứng dụng sẽ tự động mở tại: **`http://localhost:3000`**

---

## 🛠️ Quy trình thao tác trên DApp (DominionDAO)

1. **Kết nối ví:** Nhấn **Connect Wallet** ở góc phải để kết nối ví MetaMask.
2. **Đóng góp quỹ (`Contribute`):** Nhập số lượng SepoliaETH đóng góp. Khi tổng mức đóng góp $\ge 0.01\text{ ETH}$, người dùng nhận quyền **Stakeholder** và mở khóa nút **PROPOSE**.
3. **Tạo đề xuất (`Raise Proposal`):** Nhập tiêu đề, mô tả, số ETH cần giải ngân và địa chỉ ví người thụ hưởng (`Beneficiary Address`). Ký giao dịch trên MetaMask.
4. **Bỏ phiếu biểu quyết (`Vote`):** Vào chi tiết đề xuất, nhấn **ACCEPT** hoặc **REJECT** để ghi nhận phiếu bầu on-chain.
5. **Giải ngân (`Payout`):** Sau khi thời gian đề xuất kết thúc (5 phút), nếu đề xuất được thông qua, Stakeholder nhấn nút **PAYOUT** để hợp đồng tự động chuyển ETH từ quỹ DAO về ví người thụ hưởng.

---

## 📄 Tài liệu báo cáo

Báo cáo chi tiết từng bước thực hành, ảnh chụp màn hình Remix IDE, Hardhat, Etherscan và toàn bộ luồng giao dịch trên DApp được lưu trữ tại file:
* [`Bao_Cao_TH3_SmartContract_React_PTIT.docx`](./Bao_Cao_TH3_SmartContract_React_PTIT.docx)
