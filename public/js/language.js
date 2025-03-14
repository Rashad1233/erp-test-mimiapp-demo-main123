/**
 * Language Switcher Functionality for ERP System
 */

// Define available languages
const languages = {
    en: {
        code: 'en',
        name: 'English',
        flag: 'images/flags/en.png',
        currency: {
            symbol: '$',
            position: 'before' // валютный символ до числа
        }
    },
    ru: {
        code: 'ru',
        name: 'Русский',
        flag: 'images/flags/ru.png',
        currency: {
            symbol: '₽',
            position: 'after' // валютный символ после числа
        }
    },
    az: {
        code: 'az',
        name: 'Azərbaycan',
        flag: 'images/flags/az.png',
        currency: {
            symbol: '₼',
            position: 'after' // валютный символ после числа
        }
    }
};

// Default language
let currentLanguage = localStorage.getItem('erp_language') || 'en';

// Dictionary of translations
const translations = {
    en: {
        // Login page
        'login': 'Login',
        'username': 'Username',
        'password': 'Password',
        
        // Dashboard
        'dashboard': 'Dashboard',
        'totalProducts': 'Total Products',
        'lowStockItems': 'Low Stock Items',
        'activeSuppliers': 'Active Suppliers',
        'recentSales': 'Recent Sales',
        'lowStockAlerts': 'Low Stock Alerts',
        'viewAll': 'View All',
        
        // Navigation
        'products': 'Products',
        'suppliers': 'Suppliers',
        'inventory': 'Inventory',
        'sales': 'Sales',
        'clients': 'Clients',
        'purchaseOrders': 'Purchase Orders',
        'reports': 'Reports',
        'logout': 'Logout',
        
        // User info
        'language': 'Language',
        
        // Common
        'save': 'Save',
        'cancel': 'Cancel',
        'add': 'Add',
        'edit': 'Edit',
        'delete': 'Delete',
        'search': 'Search',
        'filter': 'Filter',
        'loading': 'Loading...',
        'actions': 'Actions',
        'id': 'ID',
        'name': 'Name',
        'description': 'Description',
        'price': 'Price',
        'costPrice': 'Cost Price',
        'confirmDelete': 'Confirm Delete',
        
        // Products page
        'addProduct': 'Add Product',
        'searchProducts': 'Search products...',
        'currentStock': 'Current Stock',
        'minLevel': 'Min Level',
        'supplier': 'Supplier',
        'deleteProductConfirm': 'Are you sure you want to delete this product?',
        
        // Suppliers page
        'addSupplier': 'Add Supplier',
        'searchSuppliers': 'Search suppliers...',
        'contactPerson': 'Contact Person',
        'email': 'Email',
        'phone': 'Phone',
        'address': 'Address',
        'paymentTerms': 'Payment Terms',
        'deleteSupplierConfirm': 'Are you sure you want to delete this supplier?',
        
        // Inventory page
        'inventoryManagement': 'Inventory Management',
        'addTransaction': 'Add Transaction',
        'filterByType': 'Filter by Type:',
        'allTransactions': 'All Transactions',
        'purchases': 'Purchases',
        'purchase': 'Purchase',
        'sale': 'Sale',
        'dateRange': 'Date Range:',
        'allTime': 'All Time',
        'today': 'Today',
        'thisWeek': 'This Week',
        'thisMonth': 'This Month',
        'date': 'Date',
        'type': 'Type',
        'product': 'Product',
        'quantity': 'Quantity',
        'unitPrice': 'Unit Price',
        'totalAmount': 'Total Amount',
        'notes': 'Notes',
        'deleteTransactionConfirm': 'Are you sure you want to delete this transaction?',
        
        // Sales page
        'salesManagement': 'Sales Management',
        'newSale': 'New Sale',
        'salesList': 'Sales List',
        'searchSales': 'Search sales...',
        'allStatuses': 'All Statuses',
        'completed': 'Completed',
        'pending': 'Pending',
        'cancelled': 'Cancelled',
        'client': 'Client',
        'total': 'Total',
        'status': 'Status',
        'createNewSale': 'Create New Sale',
        'selectClient': 'Select Client',
        'addItems': 'Add Items',
        'selectProduct': 'Select Product',
        'add': 'Add',
        'saleSummary': 'Sale Summary',
        'completeSale': 'Complete Sale',
        'saleDetails': 'Sale Details',
        'close': 'Close',
        'lowStockAlert': 'Low Stock Alert',
        
        // Purchase Orders page
        'purchaseOrdersManagement': 'Purchase Orders',
        'createOrder': 'Create Order',
        'orderID': 'Order ID',
        'allOrders': 'All Orders',
        'orderItems': 'Order Items',
        'addItem': 'Add Item',
        'totalItems': 'Total Items',
        'createPurchaseOrder': 'Create Purchase Order',
        'orderDetails': 'Order Details',
        
        // Clients page
        'clientManagement': 'Client Management',
        'newClient': 'New Client',
        'clientsList': 'Clients List',
        'searchClients': 'Search clients...',
        'addNewClient': 'Add New Client',
        'clientDetails': 'Client Details',
        
        // Reports page
        'reportsTitle': 'Reports',
        'availableReports': 'Available Reports',
        'salesReport': 'Sales Report',
        'salesReportDesc': 'View sales performance over time',
        'inventoryReport': 'Inventory Report',
        'inventoryReportDesc': 'Current stock levels and valuation',
        'clientReport': 'Client Report',
        'clientReportDesc': 'Client activity and purchase history',
        'supplierReport': 'Supplier Report',
        'supplierReportDesc': 'Supplier performance and order history',
        'lowStockReport': 'Low Stock Report',
        'lowStockReportDesc': 'Products with low stock levels',
        'financialReport': 'Financial Report',
        'financialReportDesc': 'Revenue, expenses, and profit',
        'reportResults': 'Report Results',
        'exportPDF': 'Export PDF',
        'reportFilters': 'Report Filters',
        'salesReportFilters': 'Sales Report Filters',
        'inventoryReportFilters': 'Inventory Report Filters',
        'clientsReport': 'Clients Report',
        'supplierReportFilters': 'Supplier Report Filters',
        'lowStockReportFilters': 'Low Stock Report Filters',
        'financialReportFilters': 'Financial Report Filters',
        'thisQuarter': 'This Quarter',
        'thisYear': 'This Year',
        'customRange': 'Custom Range',
        'startDate': 'Start Date',
        'endDate': 'End Date',
        'applyFilters': 'Apply Filters',
        'clientFilter': 'Client',
        'statusFilter': 'Status',
        'stockFilter': 'Stock Level',
        'allStockLevels': 'All Stock Levels',
        'lowStock': 'Low Stock',
        'normalStock': 'Normal Stock',
        'highStock': 'High Stock',
        'supplierFilter': 'Supplier',
        'allSuppliers': 'All Suppliers',
        'allClients': 'All Clients',
        'severityFilter': 'Severity Level',
        'allLevels': 'All Levels',
        'critical': 'Critical',
        'requireReplenishment': 'Replenishment Required',
        'outOfStock': 'Out of Stock',
        'salesOverTime': 'Sales Over Time',
        'exportSection': 'Export Section',
        'salesTrendVisualization': 'Sales trend visualization would appear here',
        'salesSummary': 'Sales Summary',
        'totalSales': 'Total Sales',
        'totalRevenue': 'Total Revenue',
        'averageSale': 'Average Sale',
        'exportFullReport': 'Export Full Report',
        'generated': 'Generated',
        'error': 'Error',
        'warning': 'Warning',
        'unknownReportType': 'Unknown report type',
        'errorLoadingReport': 'Error Loading Report',
        'unexpectedError': 'An unexpected error occurred',
        'tryAgainLater': 'Please try again later',
        'noSalesData': 'No sales data available for the selected period',
        
        // Reports page - additional keys
        'noInventoryData': 'No inventory data to display',
        'inventorySummary': 'Inventory Summary',
        'totalProducts': 'Total Products',
        'totalValue': 'Total Value',
        'averageStockLevel': 'Average Stock Level',
        'stockDistribution': 'Stock Distribution',
        'productInventoryDetails': 'Product Inventory Details',
        'noClientData': 'No client data to display',
        'clientsSummary': 'Clients Summary',
        'totalClients': 'Total Clients',
        'activeClients': 'Active Clients',
        'topClients': 'Top Clients',
        'clientName': 'Client Name',
        'totalPurchases': 'Total Purchases',
        'lastPurchase': 'Last Purchase',
        'noSupplierData': 'No supplier data to display',
        'suppliersSummary': 'Suppliers Summary',
        'totalSuppliers': 'Total Suppliers',
        'activeSuppliers': 'Active Suppliers',
        'topSuppliers': 'Top Suppliers',
        'supplierDetails': 'Supplier Details',
        'noLowStockData': 'No low stock items to display',
        'lowStockSummary': 'Low Stock Summary',
        'criticalItems': 'Critical Items',
        'warningItems': 'Warning Items',
        'outOfStockItems': 'Out of Stock Items',
        'stockLevel': 'Stock Level',
        'minStockLevel': 'Min Stock Level',
        'noFinancialData': 'No financial data to display',
        'financialSummary': 'Financial Summary',
        'totalIncome': 'Total Income',
        'totalExpenses': 'Total Expenses',
        'netProfit': 'Net Profit',
        'incomeVsExpenses': 'Income vs Expenses',
        'financialDetails': 'Financial Details',
        
        // Reports page - additional keys for tables and charts
        'salesChart': 'Sales Chart',
        'salesDetails': 'Sales Details',
        'unknownClient': 'Unknown Client',
        'amount': 'Amount',
        'completed': 'Completed',
        'pending': 'Pending',
        'cancelled': 'Cancelled',
        'inventoryDetails': 'Inventory Details',
        'stockStatus': 'Stock Status',
        'category': 'Category',
        'low': 'Low',
        'normal': 'Normal',
        'high': 'High',
        'inventoryValuation': 'Inventory Valuation',
        'clientDetails': 'Client Details',
        'contactInfo': 'Contact Info',
        'orderHistory': 'Order History',
        
        // Product page actions and notifications
        'productAddedSuccess': 'Product added successfully',
        'productUpdatedSuccess': 'Product updated successfully',
        'productDeletedSuccess': 'Product deleted successfully',
        'productAddFailed': 'Failed to add product',
        'productUpdateFailed': 'Failed to update product',
        'productDeleteFailed': 'Failed to delete product',
        'failedLoadProductDetails': 'Failed to load product details',
        'failedLoadSuppliers': 'Failed to load suppliers',
        'errorLoadingProducts': 'Error loading products. Please try again.',
        'none': 'None',
        
        // Additional sales page translations
        'view': 'View',
        'pdf': 'PDF',
        'stock': 'Stock',
        'noSalesFound': 'No sales found',
        'errorLoadingClients': 'Error loading clients',
        'errorLoadingProducts': 'Error loading products',
        'errorLoadingSales': 'Error loading sales',
        'saleCompletedSuccessfully': 'Sale completed successfully',
        'errorCreatingSale': 'Error creating sale',
        'saleDeleted': 'Sale has been deleted',
        'errorDeletingSale': 'Error deleting sale',
        'confirmDeleteSale': 'Are you sure you want to delete this sale?',
        'errorLoadingSaleDetails': 'Error loading sale details',
        'pleaseSelectClient': 'Please select a client',
        'pleaseAddItems': 'Please add items to the sale',
        'items': 'Items',
        'subtotal': 'Subtotal',
        
        // Delete confirmation dialog
        'confirmDeletePurchaseOrder': 'Are you sure you want to delete this purchase order?',
        'enterAdminPassword': 'Please enter admin password to confirm:',
        'adminPassword': 'Admin Password'
    },
    ru: {
        // Login page
        'login': 'Вход',
        'username': 'Имя пользователя',
        'password': 'Пароль',
        
        // Dashboard
        'dashboard': 'Панель управления',
        'totalProducts': 'Всего товаров',
        'lowStockItems': 'Товары с низким запасом',
        'activeSuppliers': 'Активные поставщики',
        'recentSales': 'Недавние продажи',
        'lowStockAlerts': 'Предупреждения о низком запасе',
        'viewAll': 'Смотреть все',
        
        // Navigation
        'products': 'Товары',
        'suppliers': 'Поставщики',
        'inventory': 'Склад',
        'sales': 'Продажи',
        'clients': 'Клиенты',
        'purchaseOrders': 'Заказы на закупку',
        'reports': 'Отчёты',
        'logout': 'Выход',
        
        // User info
        'language': 'Язык',
        
        // Common
        'save': 'Сохранить',
        'cancel': 'Отмена',
        'add': 'Добавить',
        'edit': 'Редактировать',
        'delete': 'Удалить',
        'search': 'Поиск',
        'filter': 'Фильтр',
        'loading': 'Загрузка...',
        'actions': 'Действия',
        'id': 'ИД',
        'name': 'Название',
        'description': 'Описание',
        'price': 'Цена',
        'costPrice': 'Закупочная цена',
        'confirmDelete': 'Подтверждение удаления',
        
        // Products page
        'addProduct': 'Добавить товар',
        'searchProducts': 'Поиск товаров...',
        'currentStock': 'Текущий запас',
        'minLevel': 'Минимальный уровень',
        'supplier': 'Поставщик',
        'deleteProductConfirm': 'Вы уверены, что хотите удалить этот товар?',
        
        // Suppliers page
        'addSupplier': 'Добавить поставщика',
        'searchSuppliers': 'Поиск поставщиков...',
        'contactPerson': 'Контактное лицо',
        'email': 'Эл. почта',
        'phone': 'Телефон',
        'address': 'Адрес',
        'paymentTerms': 'Условия оплаты',
        'deleteSupplierConfirm': 'Вы уверены, что хотите удалить этого поставщика?',
        
        // Inventory page
        'inventoryManagement': 'Управление запасами',
        'addTransaction': 'Добавить транзакцию',
        'filterByType': 'Фильтр по типу:',
        'allTransactions': 'Все транзакции',
        'purchases': 'Закупки',
        'purchase': 'Закупка',
        'sale': 'Продажа',
        'dateRange': 'Период:',
        'allTime': 'Всё время',
        'today': 'Сегодня',
        'thisWeek': 'Эта неделя',
        'thisMonth': 'Этот месяц',
        'date': 'Дата',
        'type': 'Тип',
        'product': 'Продукт',
        'quantity': 'Количество',
        'unitPrice': 'Цена за единицу',
        'totalAmount': 'Общая сумма',
        'notes': 'Примечания',
        'deleteTransactionConfirm': 'Вы уверены, что хотите удалить эту транзакцию?',
        
        // Sales page
        'salesManagement': 'Управление продажами',
        'newSale': 'Новая продажа',
        'salesList': 'Список продаж',
        'searchSales': 'Поиск продаж...',
        'allStatuses': 'Все статусы',
        'completed': 'Завершено',
        'pending': 'В ожидании',
        'cancelled': 'Отменено',
        'client': 'Клиент',
        'total': 'Итого',
        'status': 'Статус',
        'createNewSale': 'Создать новую продажу',
        'selectClient': 'Выбрать клиента',
        'addItems': 'Добавить товары',
        'selectProduct': 'Выбрать продукт',
        'add': 'Добавить',
        'saleSummary': 'Итог продажи',
        'completeSale': 'Завершить продажу',
        'saleDetails': 'Детали продажи',
        'close': 'Закрыть',
        'lowStockAlert': 'Предупреждение о низком запасе',
        
        // Purchase Orders page
        'purchaseOrdersManagement': 'Заказы на покупку',
        'createOrder': 'Создать заказ',
        'orderID': 'ID заказа',
        'allOrders': 'Все заказы',
        'orderItems': 'Товары заказа',
        'addItem': 'Добавить товар',
        'totalItems': 'Всего товаров',
        'createPurchaseOrder': 'Создать заказ на покупку',
        'orderDetails': 'Детали заказа',
        
        // Clients page
        'clientManagement': 'Управление клиентами',
        'newClient': 'Новый клиент',
        'clientsList': 'Список клиентов',
        'searchClients': 'Поиск клиентов...',
        'addNewClient': 'Добавить нового клиента',
        'clientDetails': 'Информация о клиенте',
        
        // Reports page
        'reportsTitle': 'Отчеты',
        'availableReports': 'Доступные отчеты',
        'salesReport': 'Отчет по продажам',
        'salesReportDesc': 'Просмотр показателей продаж за период',
        'inventoryReport': 'Отчет по инвентарю',
        'inventoryReportDesc': 'Текущие уровни запасов и их стоимость',
        'clientReport': 'Отчет по клиентам',
        'clientReportDesc': 'Активность клиентов и история покупок',
        'supplierReport': 'Отчет по поставщикам',
        'supplierReportDesc': 'Показатели поставщиков и история заказов',
        'lowStockReport': 'Отчет по низким запасам',
        'lowStockReportDesc': 'Продукты с низким уровнем запасов',
        'financialReport': 'Финансовый отчет',
        'financialReportDesc': 'Доходы, расходы и прибыль',
        'reportResults': 'Результаты отчета',
        'exportPDF': 'Экспорт в PDF',
        'reportFilters': 'Фильтры отчета',
        'salesReportFilters': 'Фильтры отчета по продажам',
        'inventoryReportFilters': 'Фильтры отчета по инвентарю',
        'clientsReport': 'Отчет по клиентам',
        'supplierReportFilters': 'Фильтры отчета по поставщикам',
        'lowStockReportFilters': 'Фильтры отчета по низким запасам',
        'financialReportFilters': 'Фильтры финансового отчета',
        'thisQuarter': 'Этот квартал',
        'thisYear': 'Этот год',
        'customRange': 'Произвольный период',
        'startDate': 'Начальная дата',
        'endDate': 'Конечная дата',
        'applyFilters': 'Применить фильтры',
        'clientFilter': 'Клиент',
        'statusFilter': 'Статус',
        'stockFilter': 'Уровень запасов',
        'allStockLevels': 'Все уровни запасов',
        'lowStock': 'Низкий запас',
        'normalStock': 'Нормальный запас',
        'highStock': 'Высокий запас',
        'supplierFilter': 'Поставщик',
        'allSuppliers': 'Все поставщики',
        'allClients': 'Все клиенты',
        'severityFilter': 'Уровень критичности',
        'allLevels': 'Все уровни',
        'critical': 'Критический',
        'requireReplenishment': 'Требуется пополнение',
        'outOfStock': 'Нет в наличии',
        'salesOverTime': 'Продажи за период',
        'exportSection': 'Экспорт раздела',
        'salesTrendVisualization': 'Здесь будет отображаться визуализация тенденций продаж',
        'salesSummary': 'Сводка по продажам',
        'totalSales': 'Всего продаж',
        'totalRevenue': 'Общая выручка',
        'averageSale': 'Средняя продажа',
        'exportFullReport': 'Экспорт полного отчета',
        'generated': 'Сформировано',
        'error': 'Ошибка',
        'warning': 'Предупреждение',
        'unknownReportType': 'Неизвестный тип отчета',
        'errorLoadingReport': 'Ошибка загрузки отчета',
        'unexpectedError': 'Произошла непредвиденная ошибка',
        'tryAgainLater': 'Пожалуйста, попробуйте позже',
        'noSalesData': 'Нет данных о продажах за выбранный период',
        
        // Reports page - additional keys
        'noInventoryData': 'Нет данных о запасах для отображения',
        'inventorySummary': 'Сводка по запасам',
        'totalProducts': 'Всего товаров',
        'totalValue': 'Общая стоимость',
        'averageStockLevel': 'Средний уровень запасов',
        'stockDistribution': 'Распределение запасов',
        'productInventoryDetails': 'Детали запасов продуктов',
        'noClientData': 'Нет данных о клиентах для отображения',
        'clientsSummary': 'Сводка по клиентам',
        'totalClients': 'Всего клиентов',
        'activeClients': 'Активные клиенты',
        'topClients': 'Лучшие клиенты',
        'clientName': 'Имя клиента',
        'totalPurchases': 'Всего покупок',
        'lastPurchase': 'Последняя покупка',
        'noSupplierData': 'Нет данных о поставщиках для отображения',
        'suppliersSummary': 'Сводка по поставщикам',
        'totalSuppliers': 'Всего поставщиков',
        'activeSuppliers': 'Активные поставщики',
        'topSuppliers': 'Лучшие поставщики',
        'supplierDetails': 'Детали поставщика',
        'noLowStockData': 'Нет товаров с низким запасом для отображения',
        'lowStockSummary': 'Сводка по низким запасам',
        'criticalItems': 'Критические товары',
        'warningItems': 'Товары с предупреждением',
        'outOfStockItems': 'Отсутствующие товары',
        'stockLevel': 'Уровень запасов',
        'minStockLevel': 'Минимальный уровень запасов',
        'noFinancialData': 'Нет финансовых данных для отображения',
        'financialSummary': 'Финансовая сводка',
        'totalIncome': 'Общий доход',
        'totalExpenses': 'Общие расходы',
        'netProfit': 'Чистая прибыль',
        'incomeVsExpenses': 'Доходы и расходы',
        'financialDetails': 'Финансовые детали',
        
        // Reports page - additional keys for tables and charts
        'salesChart': 'График продаж',
        'salesDetails': 'Детали продаж',
        'unknownClient': 'Неизвестный клиент',
        'amount': 'Сумма',
        'completed': 'Завершено',
        'pending': 'В ожидании',
        'cancelled': 'Отменено',
        'inventoryDetails': 'Детали запасов',
        'stockStatus': 'Статус запаса',
        'category': 'Категория',
        'low': 'Низкий',
        'normal': 'Нормальный',
        'high': 'Высокий',
        'inventoryValuation': 'Оценка запасов',
        'clientDetails': 'Детали клиента',
        'contactInfo': 'Контактная информация',
        'orderHistory': 'История заказов',
        
        // Product page actions and notifications
        'productAddedSuccess': 'Товар успешно добавлен',
        'productUpdatedSuccess': 'Товар успешно обновлен',
        'productDeletedSuccess': 'Товар успешно удален',
        'productAddFailed': 'Не удалось добавить товар',
        'productUpdateFailed': 'Не удалось обновить товар',
        'productDeleteFailed': 'Не удалось удалить товар',
        'failedLoadProductDetails': 'Не удалось загрузить детали товара',
        'failedLoadSuppliers': 'Не удалось загрузить поставщиков',
        'errorLoadingProducts': 'Ошибка при загрузке товаров. Пожалуйста, попробуйте снова.',
        'none': 'Нет',
        
        // Additional sales page translations
        'view': 'Просмотр',
        'pdf': 'PDF',
        'stock': 'Запас',
        'noSalesFound': 'Продажи не найдены',
        'errorLoadingClients': 'Ошибка загрузки клиентов',
        'errorLoadingProducts': 'Ошибка загрузки товаров',
        'errorLoadingSales': 'Ошибка загрузки продаж',
        'saleCompletedSuccessfully': 'Продажа успешно завершена',
        'errorCreatingSale': 'Ошибка создания продажи',
        'saleDeleted': 'Продажа удалена',
        'errorDeletingSale': 'Ошибка удаления продажи',
        'confirmDeleteSale': 'Вы уверены, что хотите удалить эту продажу?',
        'errorLoadingSaleDetails': 'Ошибка загрузки деталей продажи',
        'pleaseSelectClient': 'Пожалуйста, выберите клиента',
        'pleaseAddItems': 'Пожалуйста, добавьте товары в продажу',
        'items': 'Товары',
        'subtotal': 'Подытог',
        
        // Delete confirmation dialog
        'confirmDeletePurchaseOrder': 'Вы уверены, что хотите удалить этот заказ на покупку?',
        'enterAdminPassword': 'Пожалуйста, введите пароль администратора для подтверждения:',
        'adminPassword': 'Пароль администратора'
    },
    az: {
        // Login page
        'login': 'Giriş',
        'username': 'İstifadəçi adı',
        'password': 'Şifrə',
        
        // Dashboard
        'dashboard': 'İdarəetmə paneli',
        'totalProducts': 'Ümumi məhsullar',
        'lowStockItems': 'Az ehtiyatı olan məhsullar',
        'activeSuppliers': 'Aktiv təchizatçılar',
        'recentSales': 'Son satışlar',
        'lowStockAlerts': 'Az ehtiyat xəbərdarlıqları',
        'viewAll': 'Hamısına baxın',
        
        // Navigation
        'products': 'Məhsullar',
        'suppliers': 'Təchizatçılar',
        'inventory': 'Anbar',
        'sales': 'Satışlar',
        'clients': 'Müştərilər',
        'purchaseOrders': 'Satınalma sifarişləri',
        'reports': 'Hesabatlar',
        'logout': 'Çıxış',
        
        // User info
        'language': 'Dil',
        
        // Common actions
        'add': 'Əlavə et',
        'edit': 'Redaktə et',
        'delete': 'Sil',
        'save': 'Saxla',
        'cancel': 'Ləğv et',
        'search': 'Axtar',
        'filter': 'Filtr',
        'apply': 'Tətbiq et',
        'clear': 'Təmizlə',
        'confirm': 'Təsdiq et',
        'back': 'Geri',
        'next': 'İrəli',
        'refresh': 'Yenilə',
        'export': 'İxrac et',
        'import': 'İdxal et',
        'print': 'Çap et',
        'download': 'Yüklə',
        'upload': 'Yüklə',
        'details': 'Ətraflı məlumat',
        
        // Status and notifications
        'success': 'Uğurlu',
        'error': 'Xəta',
        'warning': 'Xəbərdarlıq',
        'info': 'Məlumat',
        'loading': 'Yüklənir',
        'noData': 'Məlumat tapılmadı',
        'confirmation': 'Təsdiq',
        'confirmDelete': 'Silməyi təsdiq edin',
        
        // Common fields
        'id': 'ID',
        'name': 'Ad',
        'description': 'Təsvir',
        'price': 'Qiymət',
        'costPrice': 'Maya dəyəri',
        'status': 'Status',
        'date': 'Tarix',
        'notes': 'Qeydlər',
        'total': 'Cəmi',
        'amount': 'Məbləğ',
        'quantity': 'Miqdar',
        'type': 'Növ',
        'actions': 'Əməliyyatlar',
        
        // Products page
        'addProduct': 'Məhsul əlavə et',
        'editProduct': 'Məhsulu redaktə et',
        'productName': 'Məhsulun adı',
        'productDescription': 'Məhsulun təsviri',
        'productPrice': 'Məhsulun qiyməti',
        'productCost': 'Maya dəyəri',
        'currentStock': 'Cari ehtiyat',
        'minLevel': 'Minimum səviyyə',
        'supplier': 'Təchizatçı',
        'category': 'Kateqoriya',
        'searchProducts': 'Məhsulları axtar...',
        'deleteProductConfirm': 'Bu məhsulu silmək istədiyinizə əminsiniz?',
        
        // Suppliers page
        'addSupplier': 'Təchizatçı əlavə et',
        'editSupplier': 'Təchizatçını redaktə et',
        'contactPerson': 'Əlaqə şəxsi',
        'email': 'E-poçt',
        'phone': 'Telefon',
        'address': 'Ünvan',
        'paymentTerms': 'Ödəniş şərtləri',
        'searchSuppliers': 'Təchizatçıları axtar...',
        'deleteSupplierConfirm': 'Bu təchizatçını silmək istədiyinizə əminsiniz?',

        // Reports
        'reportsTitle': 'Hesabatlar',
        'availableReports': 'Mövcud hesabatlar',
        'salesReport': 'Satış hesabatı',
        'salesReportDesc': 'Müəyyən müddət ərzində satış göstəricilərini izləyin',
        'inventoryReport': 'Anbar hesabatı',
        'inventoryReportDesc': 'Cari anbar səviyyələri və dəyərləndirmə',
        'clientReport': 'Müştəri hesabatı',
        'clientReportDesc': 'Müştəri fəaliyyəti və alış tarixçəsi',
        'supplierReport': 'Təchizatçı hesabatı',
        'supplierReportDesc': 'Təchizatçı fəaliyyəti və sifariş tarixçəsi',
        'lowStockReport': 'Az ehtiyat hesabatı',
        'lowStockReportDesc': 'Ehtiyatı az olan məhsullar',
        'financialReport': 'Maliyyə hesabatı',
        'financialReportDesc': 'Gəlirlər, xərclər və mənfəət',
        'reportResults': 'Hesabat nəticələri',
        'exportPDF': 'PDF-ə ixrac et',
        'reportFilters': 'Hesabat filtrləri',
        'salesReportFilters': 'Satış hesabatı filtrləri',
        'inventoryReportFilters': 'Anbar hesabatı filtrləri',
        'clientsReport': 'Müştəri hesabatı',
        'supplierReportFilters': 'Təchizatçı hesabatı filtrləri',
        'lowStockReportFilters': 'Az ehtiyat hesabatı filtrləri',
        'financialReportFilters': 'Maliyyə hesabatı filtrləri',
        'thisQuarter': 'Bu rüb',
        'thisYear': 'Bu il',
        'customRange': 'Xüsusi aralıq',
        'applyFilters': 'Filtrləri tətbiq et',
        'clientFilter': 'Müştəri',
        'statusFilter': 'Status',
        'stockFilter': 'Ehtiyat səviyyəsi',
        'allStockLevels': 'Bütün ehtiyat səviyyələri',
        'lowStock': 'Az ehtiyat',
        'normalStock': 'Normal ehtiyat',
        'highStock': 'Yüksək ehtiyat',
        'supplierFilter': 'Təchizatçı',
        'allSuppliers': 'Bütün təchizatçılar',
        'allClients': 'Bütün müştərilər',
        'severityFilter': 'Kritiklik səviyyəsi',
        'allLevels': 'Bütün səviyyələr',
        'critical': 'Kritik',
        'requireReplenishment': 'Yenilənmə tələb edir',
        'outOfStock': 'Bitib',
        'salesOverTime': 'Müddət ərzində satışlar',
        'exportSection': 'Bölməni ixrac et',
        'salesTrendVisualization': 'Satış tendensiyası vizualizasiyası burada görünəcək',
        'salesSummary': 'Satış xülasəsi',
        'totalSales': 'Ümumi satışlar',
        'totalRevenue': 'Ümumi gəlir',
        'averageSale': 'Orta satış',
        'exportFullReport': 'Tam hesabatı ixrac et',
        'generated': 'Yaradılıb',
        'dailyReport': 'Gündəlik hesabat',
        'weeklyReport': 'Həftəlik hesabat',
        'monthlyReport': 'Aylıq hesabat',
        'annualReport': 'İllik hesabat',
        'generateReport': 'Hesabat yaratmaq',
        'exportReport': 'Hesabatı ixrac etmək',
        'noSalesData': 'Seçilmiş dövr üçün satış məlumatı yoxdur',
        
        // Inventory and additional
        'inventorySummary': 'Anbar xülasəsi',
        'totalProducts': 'Ümumi məhsullar',
        'totalValue': 'Ümumi dəyər',
        'averageStockLevel': 'Orta ehtiyat səviyyəsi',
        'stockDistribution': 'Ehtiyat bölgüsü',
        'productInventoryDetails': 'Məhsul ehtiyatı təfərrüatları',
        'noInventoryData': 'Göstəriləcək anbar məlumatı yoxdur',
        'clientsSummary': 'Müştərilər xülasəsi',
        'totalClients': 'Ümumi müştərilər',
        'activeClients': 'Aktiv müştərilər',
        'topClients': 'Əsas müştərilər',
        'clientName': 'Müştəri adı',
        'totalPurchases': 'Ümumi alışlar',
        'lastPurchase': 'Son alış',
        'noClientData': 'Göstəriləcək müştəri məlumatı yoxdur',
        'suppliersSummary': 'Təchizatçılar xülasəsi',
        'totalSuppliers': 'Ümumi təchizatçılar',
        'topSuppliers': 'Əsas təchizatçılar',
        'supplierDetails': 'Təchizatçı təfərrüatları',
        'noSupplierData': 'Göstəriləcək təchizatçı məlumatı yoxdur',
        'lowStockSummary': 'Az ehtiyat xülasəsi',
        'criticalItems': 'Kritik elementlər',
        'warningItems': 'Xəbərdarlıq elementləri',
        'outOfStockItems': 'Bitmiş elementlər',
        'stockLevel': 'Ehtiyat səviyyəsi',
        'minStockLevel': 'Minimum ehtiyat səviyyəsi',
        'noLowStockData': 'Göstəriləcək az ehtiyat elementi yoxdur',
        'financialSummary': 'Maliyyə xülasəsi',
        'totalIncome': 'Ümumi gəlir',
        'totalExpenses': 'Ümumi xərclər',
        'netProfit': 'Xalis mənfəət',
        'incomeVsExpenses': 'Gəlir və xərclər',
        'financialDetails': 'Maliyyə təfərrüatları',
        'noFinancialData': 'Göstəriləcək maliyyə məlumatı yoxdur',
        'salesChart': 'Satış qrafiki',
        'salesDetails': 'Satış təfərrüatları',
        'unknownClient': 'Naməlum müştəri',
        'completed': 'Tamamlanıb',
        'pending': 'Gözləyir',
        'cancelled': 'Ləğv edilib',
        'inventoryDetails': 'Anbar təfərrüatları',
        'stockStatus': 'Ehtiyat statusu',
        'low': 'Aşağı',
        'normal': 'Normal',
        'high': 'Yüksək',
        'inventoryValuation': 'Anbar dəyərləndirməsi',
        'clientDetails': 'Müştəri təfərrüatları',
        'contactInfo': 'Əlaqə məlumatı',
        'orderHistory': 'Sifariş tarixçəsi',
        'errorLoadingReport': 'Hesabat yüklənməsi xətası',
        'unexpectedError': 'Gözlənilməz xəta baş verdi',
        'tryAgainLater': 'Zəhmət olmasa daha sonra cəhd edin',
        'unknownReportType': 'Naməlum hesabat növü',
        
        // Product page actions and notifications
        'productAddedSuccess': 'Məhsul uğurla əlavə edildi',
        'productUpdatedSuccess': 'Məhsul uğurla yeniləndi',
        'productDeletedSuccess': 'Məhsul uğurla silindi',
        'productAddFailed': 'Məhsul əlavə etmək alınmadı',
        'productUpdateFailed': 'Məhsulu yeniləmək alınmadı',
        'productDeleteFailed': 'Məhsulu silmək alınmadı',
        'failedLoadProductDetails': 'Məhsul məlumatlarını yükləmək alınmadı',
        'failedLoadSuppliers': 'Təchizatçıları yükləmək alınmadı',
        'errorLoadingProducts': 'Məhsulları yüklərkən xəta baş verdi. Zəhmət olmasa yenidən cəhd edin.',
        'none': 'Yoxdur',
        
        // Additional sales page translations
        'view': 'Baxış',
        'pdf': 'PDF',
        'stock': 'Ehtiyat',
        'noSalesFound': 'Satışlar tapılmadı',
        'errorLoadingClients': 'Müştəriləri yükləməkdə xəta',
        'errorLoadingProducts': 'Məhsulları yükləməkdə xəta',
        'errorLoadingSales': 'Satışları yükləməkdə xəta',
        'saleCompletedSuccessfully': 'Satış uğurla tamamlandı',
        'errorCreatingSale': 'Satış yaratmaqda xəta',
        'saleDeleted': 'Satış silindi',
        'errorDeletingSale': 'Satışı silməkdə xəta',
        'confirmDeleteSale': 'Bu satışı silmək istədiyinizə əminsiniz?',
        'errorLoadingSaleDetails': 'Satış təfərrüatlarını yükləməkdə xəta',
        'pleaseSelectClient': 'Zəhmət olmasa müştəri seçin',
        'pleaseAddItems': 'Zəhmət olmasa satışa məhsullar əlavə edin',
        'items': 'Məhsullar',
        'subtotal': 'Aralıq cəm',
        
        // Sales page translations
        'salesManagement': 'Satış idarəetməsi',
        'newSale': 'Yeni satış',
        'salesList': 'Satış siyahısı',
        'searchSales': 'Satışları axtar...',
        'allStatuses': 'Bütün statuslar',
        'id': 'ID',
        'client': 'Müştəri',
        'date': 'Tarix',
        'total': 'Cəmi',
        'status': 'Status',
        'actions': 'Əməliyyatlar',
        'completed': 'Tamamlanıb',
        'pending': 'Gözləyir',
        'cancelled': 'Ləğv edilib',
        'createNewSale': 'Yeni satış yarat',
        'selectClient': 'Müştəri seçin',
        'addItems': 'Məhsullar əlavə et',
        'selectProduct': 'Məhsul seçin',
        'add': 'Əlavə et',
        'saleSummary': 'Satış xülasəsi',
        'completeSale': 'Satışı tamamla',
        'saleDetails': 'Satış təfərrüatları',
        'close': 'Bağla',
        
        // Inventory page
        'inventoryManagement': 'Anbar idarəetməsi',
        'addTransaction': 'Əməliyyat əlavə et',
        'filterByType': 'Növə görə filtr:',
        'allTransactions': 'Bütün əməliyyatlar',
        'purchases': 'Alışlar',
        'purchase': 'Alış',
        'sale': 'Satış',
        'dateRange': 'Tarix aralığı:',
        'allTime': 'Bütün vaxtlar',
        'today': 'Bu gün',
        'thisWeek': 'Bu həftə',
        'thisMonth': 'Bu ay',
        'type': 'Növ',
        'product': 'Məhsul',
        'quantity': 'Miqdar',
        'unitPrice': 'Vahid qiyməti',
        'totalAmount': 'Ümumi məbləğ',
        'notes': 'Qeydlər',
        'deleteTransactionConfirm': 'Bu əməliyyatı silmək istədiyinizə əminsiniz?',
        
        // Inventory notifications and errors
        'errorLoadingTransactions': 'Əməliyyatları yükləməkdə xəta',
        'noTransactionsFound': 'Əməliyyatlar tapılmadı',
        'errorAddingTransaction': 'Əməliyyat əlavə etməkdə xəta. Zəhmət olmasa yenidən cəhd edin.',
        'transactionAddedSuccess': 'Əməliyyat uğurla əlavə edildi',
        'errorDeletingTransaction': 'Əməliyyatı silməkdə xəta. Zəhmət olmasa yenidən cəhd edin.',
        'transactionDeletedSuccess': 'Əməliyyat uğurla silindi',
        'noProductsAvailable': 'Məhsul mövcud deyil',
        'selectProduct': 'Məhsul seçin',
        
        // Delete confirmation dialog
        'confirmDeletePurchaseOrder': 'Bu alış sifarişini silmək istədiyinizə əminsiniz?',
        'enterAdminPassword': 'Təsdiqləmək üçün admin şifrəsini daxil edin:',
        'adminPassword': 'Admin şifrəsi'
    }
};

// Initialize language system
function initLanguage() {
    // Set html lang attribute
    document.documentElement.lang = currentLanguage;
    
    // Special handling for login page
    const isLoginPage = window.location.pathname.includes('index.html') || 
                        window.location.pathname.endsWith('/') ||
                        window.location.pathname.endsWith('/public/');
    
    // Проверяем, существует ли элемент .user-info
    if (!document.querySelector('.user-info') && !isLoginPage) {
        // Создаем элемент .user-info если его нет
        const userInfo = document.createElement('div');
        userInfo.className = 'user-info';
        
        // Добавляем его в .main-header
        const mainHeader = document.querySelector('.main-header');
        if (mainHeader) {
            // Добавляем стили для контейнера
            userInfo.style.display = 'flex';
            userInfo.style.alignItems = 'center';
            userInfo.style.marginLeft = 'auto';
            
            mainHeader.appendChild(userInfo);
            console.log('Created .user-info element in .main-header');
        } else {
            // Если нет .main-header, добавляем в начало body
            document.body.insertBefore(userInfo, document.body.firstChild);
            console.log('Created .user-info element in body');
        }
    }
    
    // Create language selector if it doesn't already exist
    if (!document.querySelector('.language-selector')) {
        createLanguageSelector(isLoginPage);
    }
    
    // Apply current language translations
    // Предотвращаем рекурсию для страницы отчетов, так как там своя функция applyTranslations
    const isReportsPage = window.location.pathname.includes('reports.html');
    if (!isReportsPage) {
        applyTranslations();
    }
    
    // Listen for language change events, если еще не создан слушатель
    if (!window._languageChangeListenerAdded) {
        document.addEventListener('languageChanged', function() {
            // Update html lang attribute
            document.documentElement.lang = currentLanguage;
            
            if (!isReportsPage) {
                applyTranslations();
            }
        });
        window._languageChangeListenerAdded = true;
    }
}

// Create language selector UI
function createLanguageSelector(isLoginPage = false) {
    const container = document.createElement('div');
    container.className = 'language-selector';
    
    // Добавляем метку для селектора языка
    const label = document.createElement('span');
    label.textContent = translations[currentLanguage]?.language || 'Language:';
    label.className = 'language-label';
    container.appendChild(label);
    
    const select = document.createElement('select');
    select.id = 'language-selector';
    
    Object.keys(languages).forEach(langCode => {
        const option = document.createElement('option');
        option.value = langCode;
        option.textContent = languages[langCode].name;
        if (langCode === currentLanguage) {
            option.selected = true;
        }
        select.appendChild(option);
    });
    
    // Add change event listener
    select.addEventListener('change', function() {
        const selectedLang = this.value;
        changeLanguage(selectedLang);
    });
    
    container.appendChild(select);
    
    // Добавляем стили для селектора языка
    container.style.display = 'flex';
    container.style.alignItems = 'center';
    container.style.marginLeft = '20px';
    
    label.style.marginRight = '10px';
    label.style.fontSize = '14px';
    
    select.style.padding = '5px';
    select.style.borderRadius = '4px';
    select.style.border = '1px solid #ccc';
    
    // Add to the DOM
    if (isLoginPage) {
        const loginForm = document.querySelector('.login-form');
        if (loginForm) {
            loginForm.parentNode.insertBefore(container, loginForm);
        }
    } else {
        // Сначала пытаемся найти .user-info
        const userInfo = document.querySelector('.user-info');
        if (userInfo) {
            userInfo.appendChild(container);
        } else {
            // Если .user-info не найден, пробуем добавить в заголовок страницы
            const mainHeader = document.querySelector('.main-header');
            if (mainHeader) {
                // Добавляем стили для отображения в main-header
                container.style.marginLeft = 'auto';
                mainHeader.appendChild(container);
            } else {
                // Если и main-header не найден, добавляем в body
                document.body.appendChild(container);
            }
        }
    }
    
    return container;
}

// Change language
function changeLanguage(langCode) {
    if (languages[langCode]) {
        // Сохраняем предыдущий язык
        const previousLanguage = currentLanguage;
        
        // Обновляем текущий язык
        currentLanguage = langCode;
        localStorage.setItem('erp_language', langCode);
        localStorage.setItem('language', langCode); // Для совместимости
        
        // Обновляем глобальные переменные
        if (window.currentLanguage !== undefined) {
            window.currentLanguage = langCode;
        }
        
        // Обновляем селектор языка, если он существует
        const langSelector = document.getElementById('language-selector');
        if (langSelector) {
            langSelector.value = langCode;
        }
        
        // Применяем переводы перед диспетчеризацией события
        // для страниц, которые не используют событие languageChanged
        applyTranslations();
        
        // Диспетчеризуем событие изменения языка
        const event = new CustomEvent('languageChanged', { 
            detail: { language: langCode, previousLanguage: previousLanguage }
        });
        document.dispatchEvent(event);
        
        console.log(`Язык изменен на ${languages[langCode].name}`);
        
        // Показываем уведомление
        if (typeof showNotification === 'function') {
            const message = (langCode === 'en') ? 'Language changed to English' : 
                        (langCode === 'ru') ? 'Язык изменен на Русский' : 
                        (langCode === 'az') ? 'Dil Azərbaycan dilinə dəyişdirildi' : 
                        'Language changed';
            showNotification(message, 'info');
        }
        
        // Форсируем обновление страницы для полного обновления всех элементов
        // Это крайняя мера, если проблемы с локализацией сохраняются
        // window.location.reload();
        
        return true;
    }
    
    return false;
}

// Apply translations to the current page
function applyTranslations() {
    const elements = document.querySelectorAll('[data-i18n]');
    
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[currentLanguage] && translations[currentLanguage][key]) {
            // Different handling based on element type
            if (element.hasAttribute('data-i18n-placeholder')) {
                // Element is using placeholder
                element.placeholder = translations[currentLanguage][key];
            } else if (element.tagName === 'INPUT' && (element.type === 'text' || element.type === 'search')) {
                // Input fields that should use placeholder
                if (element.placeholder) {
                    element.placeholder = translations[currentLanguage][key];
                } else {
                    element.textContent = translations[currentLanguage][key];
                }
            } else if (element.tagName === 'OPTION') {
                // Handle select options
                element.textContent = translations[currentLanguage][key];
                // If option has a title attribute, translate that too
                if (element.title) {
                    element.title = translations[currentLanguage][key];
                }
            } else if (element.tagName === 'TH') {
                // Table headers - explicitly set text content
                element.textContent = translations[currentLanguage][key];
            } else {
                // Default case: replace text content
                element.textContent = translations[currentLanguage][key];
            }
            
            // Also translate title attribute if it exists
            if (element.hasAttribute('title')) {
                element.title = translations[currentLanguage][key];
            }
        }
    });
    
    // Also update the document title if needed
    const pageTitle = document.title;
    if (pageTitle.includes(' - ')) {
        const pageName = pageTitle.split(' - ')[1];
        const translatedPageName = translations[currentLanguage][pageName.toLowerCase()];
        if (translatedPageName) {
            document.title = 'ERP System - ' + translatedPageName;
        }
    }
    
    // Trigger a custom event after translations are applied
    const event = new CustomEvent('translationsApplied', { 
        detail: { language: currentLanguage }
    });
    document.dispatchEvent(event);
}

// Get translation for a specific key
function getTranslation(key) {
    if (translations[currentLanguage] && translations[currentLanguage][key]) {
        return translations[currentLanguage][key];
    }
    return key; // Fallback to key if translation not found
}

// Инициализация модуля языка
document.addEventListener('DOMContentLoaded', function() {
    // Проверка URL на наличие параметра language
    const urlParams = new URLSearchParams(window.location.search);
    const langParam = urlParams.get('lang');
    
    // Если параметр lang найден и он в списке доступных языков, устанавливаем его
    if (langParam && languages[langParam]) {
        changeLanguage(langParam);
    } else {
        // Иначе используем сохраненный язык или язык по умолчанию
        initLanguage();
    }
    
    // Создаем селектор языка, если его еще нет на странице
    const existingSelector = document.getElementById('language-selector');
    if (!existingSelector) {
        const isLoginPage = document.querySelector('.login-form') !== null;
        createLanguageSelector(isLoginPage);
    }
    
    // Применяем переводы
    applyTranslations();
});

// Функция форматирования валюты - всегда в долларах
function formatCurrency(amount) {
    // Всегда форматируем в долларах, независимо от языка
    return `$${amount.toFixed(2)}`;
}

// Export functions for use in other files
window.erpLanguage = {
    init: initLanguage,
    change: changeLanguage,
    translate: getTranslation,
    current: () => currentLanguage,
    formatCurrency: formatCurrency
}; 