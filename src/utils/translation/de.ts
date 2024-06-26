import * as T from "./translationKeys";

const de = {
  [T.HEADER.BUY]: "Kaufen",
  [T.HEADER.SELL]: "Verkaufen",
  [T.HEADER.RECEIVE]: "Empfangen",
  [T.BUY_CRYPTO_MAIN_PAGE.CREDIT_CARD]: "Debit-/Kreditkarte",
  [T.BUY_CRYPTO_MAIN_PAGE.BANK_TRANSFER]: "Banküberweisung",
  [T.BUY_CRYPTO_MAIN_PAGE.ASTRO_PAY]: "Astropay",
  [T.BUY_CRYPTO_MAIN_PAGE.YOU_PAY]: "Sie bezahlen",
  [T.BUY_CRYPTO_MAIN_PAGE.PAY_TOOLTIP]:
    "Dieser Betrag kann je nach Wechselkurs zum Zeitpunkt der Transaktion variieren.",
  [T.BUY_CRYPTO_MAIN_PAGE.YOU_GET]: "Sie bekommen",
  [T.BUY_CRYPTO_MAIN_PAGE.GET_TOOLTIP]:
    "Dieser Betrag kann je nach Wechselkurs zum Zeitpunkt der Transaktion variieren.",
  [T.BUY_CRYPTO_MAIN_PAGE.COUNTRY_RESIDENCE]: "Aufenthaltsland",
  [T.BUY_CRYPTO_MAIN_PAGE.COUNTRY_PLACEHOLDER]: "Land",
  [T.BUY_CRYPTO_MAIN_PAGE.BUY_BUTTON]: "Krypto kaufen",
  [T.BUY_CRYPTO_SUMMARY.HEADER]: "Zusammenfassung",
  [T.BUY_CRYPTO_SUMMARY.PAY]: "Zahlen",
  [T.BUY_CRYPTO_SUMMARY.GET]: "Bekommen",
  [T.BUY_CRYPTO_SUMMARY.EXCHANGE_RATE]: "Wechselkurs",
  [T.BUY_CRYPTO_SUMMARY.SERVICE_FEE]: "Servicegebühr",
  [T.BUY_CRYPTO_SUMMARY.NETWORK_FEE]: "Netzwerkgebühr",
  [T.BUY_CRYPTO_SUMMARY.NETWORK]: "Netzwerk",
  [T.BUY_CRYPTO_SUMMARY.INFO_TEXT]:
    "Der Wechselkurs und die Gebühren werden bei der Zahlung festgelegt",
  [T.BUY_CRYPTO_SUMMARY.WALLET_ADDRESS]: "Wallet Adresse",
  [T.BUY_CRYPTO_SUMMARY.WALLET_TOOLTIP]:
    "Stellen Sie sicher, dass die Wallet-Adresse und das Netzwerk korrekt angegeben sind, da wir Ihnen bei der Rückgabe der Kryptowährung nicht helfen können.",
  [T.BUY_CRYPTO_SUMMARY.TIMER_TEXT]: "Sekunden",
  [T.BUY_CRYPTO_SUMMARY.WALLET_PLACEHOLDER]:
    "Fügen Sie Ihre Wallet Adresse ein",
  [T.BUY_CRYPTO_SUMMARY.START_OVER]: "Von vorne anfangen",
  [T.BUY_CRYPTO_SUMMARY.CONFIRM]: "Weitermachen",
  [T.BUY_CRYPTO_SUMMARY.QR_HEADER]: "QR-Scanner",
  [T.BUY_CRYPTO_TRANSACTION_RESULT.HEADER]: "Ausstehende Transaktion",
  [T.BUY_CRYPTO_TRANSACTION_RESULT.EXCHANGE_RATE]: "Wechselkurs",
  [T.BUY_CRYPTO_TRANSACTION_RESULT.FIAT_EQUIVALENT]: "Fiatgeld Äquivalent",
  [T.BUY_CRYPTO_TRANSACTION_RESULT.SERVICE_FEE]: "Servicegebühr",
  [T.BUY_CRYPTO_TRANSACTION_RESULT.NETWORK_FEE]: "Netzwerkgebühr",
  [T.BUY_CRYPTO_TRANSACTION_RESULT.INFO_TEXT]:
    "Die Transaktion wird von der Bank bearbeitet. Sie werden per E-Mail benachrichtigt, sobald Ihre Zahlung von Ihrer Bank bestätigt wurde.",
  [T.BUY_CRYPTO_TRANSACTION_RESULT.BUTTON_TEXT]: "Nächste Transaktion",
  [T.RECEIVE_MAIN_PAGE.FIAT_AMOUNT]: "Fiatgeld Betrag",
  [T.RECEIVE_MAIN_PAGE.CRYPTO]: "Kryptowährung",
  [T.RECEIVE_MAIN_PAGE.WALLET_ADDRESS]: "Wallet Adresse",
  [T.RECEIVE_MAIN_PAGE.WALLET_TOOLTIP]:
    "Stellen Sie sicher, dass die Wallet-Adresse und das Netzwerk korrekt angegeben sind, da wir Ihnen bei der Rückgabe der Kryptowährung nicht helfen können.",
  [T.RECEIVE_MAIN_PAGE.WALLET_PLACEHOLDER]: "Fügen Sie Ihre Wallet Adresse ein",
  [T.RECEIVE_MAIN_PAGE.BUTTON_TEXT]: "Erhalten",
  [T.RECEIVE_GENERATE_LINK.HEADER]: "Link für die Bezahlung",
  [T.RECEIVE_GENERATE_LINK.RECIPIENT]: "Empfänger",
  [T.RECEIVE_GENERATE_LINK.RECIPIENT_PLACEHOLDER]: "Empfängername",
  [T.RECEIVE_GENERATE_LINK.PAYER]: "Zahler",
  [T.RECEIVE_GENERATE_LINK.PAYER_PLACEHOLDER]: "Name des Zahlers",
  [T.RECEIVE_GENERATE_LINK.COMMENTS]: "Kommentare (optional)",
  [T.RECEIVE_GENERATE_LINK.COMMENTS_PLACEHOLDER]:
    "Bereichnung der Dienstleistung",
  [T.RECEIVE_GENERATE_LINK.COMMENT_TOOLTIP]: "Maximal 40 Zeichen zulässig",
  [T.RECEIVE_GENERATE_LINK.BUTTON_TEXT]: "Einen Link generieren",
  [T.RECEIVE_LINK.PAYMENT_LINK]: "Zahlungslink für",
  [T.RECEIVE_LINK.COPY]: "Kopieren",
  [T.RECEIVE_LINK.SHARE_LINK]: "Zahlungslink teilen",
  [T.RECEIVE_LINK.BUTTON_TEXT]: "Neuen Link erstellen",
  [T.RECEIVE_SUMMARY.HEADER]: "Krypto senden",
  [T.RECEIVE_SUMMARY.BANNER_HEADER]: "Sie übertragen auf eine Einzelperson!",
  [T.RECEIVE_SUMMARY.BANNER_TEXT]:
    "Das Geld erhält eine Person, nicht ein Unternehmen. Wenn Sie den Verdacht haben, dass es sich hierbei um einen Betrüger handelt",
  [T.RECEIVE_SUMMARY.BANNER_TEXT_CONTACT_US]: "kontaktieren Sie uns bitte.",
  [T.RECEIVE_SUMMARY.RECIPIENT]: "Empfänger",
  [T.RECEIVE_SUMMARY.PAYER]: "Zahler",
  [T.RECEIVE_SUMMARY.COMMENTS]: "Kommentar",
  [T.RECEIVE_SUMMARY.RECEIVE_DETAILS]: "Details empfangen",
  [T.RECEIVE_SUMMARY.EXCHANGE_RATE]: "Wechselkurs",
  [T.RECEIVE_SUMMARY.CRYPTO_TYPE]: "Kryptotyp",
  [T.RECEIVE_SUMMARY.NETWORK]: "Netzwerk",
  [T.RECEIVE_SUMMARY.NETWORK_FEE]: "Netzwerkgebühr",
  [T.RECEIVE_SUMMARY.SERVICE_FEE]: "Servicegebühr",
  [T.RECEIVE_SUMMARY.WALLET_ADDRESS]: "Wallet Adresse",
  [T.RECEIVE_SUMMARY.PAYMENT_METHOD]: "Zahlungsmethode",
  [T.RECEIVE_SUMMARY.CREDIT_CARD]: "Debit-/Kreditkarte",
  [T.RECEIVE_SUMMARY.BANK_TRANSFER]: "Banküberweisung",
  [T.RECEIVE_SUMMARY.BUTTON_TEXT]: "Fortsetzen",
  [T.RECEIVE_EXPIRED.HEADER]: "Link abgelaufen",
  [T.RECEIVE_EXPIRED.TEXT]:
    "Über diesen Link wurde bereits eine Zahlung getätigt.",
  [T.RECEIVE_EXPIRED.BUTTON_TEXT]: "Zur Hauptseite",
  [T.RECEIVE_SUMMARY.CONFIRM]: "Bestätigen",
  [T.SELL_FLOW_MAIN_PAGE.BANK_TRANSFER]: "Banküberweisung",
  [T.SELL_FLOW_MAIN_PAGE.INSTANT_BANKING]: "Sofort-Banking",
  [T.SELL_FLOW_MAIN_PAGE.TEXT]:
    "Derzeit ist diese Funktion nur in den EU-Ländern und im Vereinigten Königreich verfügbar.",
  [T.SELL_FLOW_MAIN_PAGE.YOU_PAY]: "Sie bezahlen",
  [T.SELL_FLOW_MAIN_PAGE.PAY_TOOLTIP]:
    "Dieser Betrag kann je nach Wechselkurs zum Zeitpunkt der Transaktion variieren.",
  [T.SELL_FLOW_MAIN_PAGE.YOU_GET]: "Sie bekommen",
  [T.SELL_FLOW_MAIN_PAGE.GET_TOOLTIP]:
    "Dieser Betrag kann je nach Wechselkurs zum Zeitpunkt der Transaktion variieren.",
  [T.SELL_FLOW_MAIN_PAGE.COUNTRY_OF_RESIDENCE]: "Aufenthaltsland",
  [T.SELL_FLOW_MAIN_PAGE.COUNTRY_PLACEHOLDER]: "Land",
  [T.SELL_FLOW_MAIN_PAGE.BUTTON_TEXT]: "Krypto verkaufen",
  [T.SELL_FLOW_SUMMARY.HEADER]: "Zusammenfassung",
  [T.SELL_FLOW_SUMMARY.PAY]: "Zahlen",
  [T.SELL_FLOW_SUMMARY.GET]: "Bekommen",
  [T.SELL_FLOW_SUMMARY.EXCHANGE_RATE]: "Wechselkurs",
  [T.SELL_FLOW_SUMMARY.NETWORK]: "Netzwerk",
  [T.SELL_FLOW_SUMMARY.SERVICE_FEE]: "Servicegebühr",
  [T.SELL_FLOW_SUMMARY.START_OVER]: "Von vorne anfangen",
  [T.SELL_FLOW_SUMMARY.CONFIRM]: "Bertätigen",
  [T.SELL_FLOW_BANK_TRANSFER.HEADER]: "Bankverbindung hinzufügen",
  [T.SELL_FLOW_BANK_TRANSFER.ROW_1]:
    "Der Name des Begünstigten muss mit dem bei Swaps.app registrierten Benutzernamen übereinstimmen.",
  [T.SELL_FLOW_BANK_TRANSFER.ROW_2]:
    "Stellen Sie sicher, dass das von Ihnen eingegebene Bankkonto die ausgewählte Fiat-Währung unterstützt.",
  [T.SELL_FLOW_BANK_TRANSFER.ROW_3]:
    "Die Transaktionsdauer ist nicht festgelegt und hängt von den Richtlinien der Bank des Empfängers ab.",
  [T.SELL_FLOW_BANK_TRANSFER.BENIFICIARY]: "Empfänger",
  [T.SELL_FLOW_BANK_TRANSFER.BENIFICIARY_PLACEHOLDER]: "Ihr Name",
  [T.SELL_FLOW_BANK_TRANSFER.IBAN]: "IBAN",
  [T.SELL_FLOW_BANK_TRANSFER.IBAN_PLACEHOLDER]: "IBAN des Empfängers",
  [T.SELL_FLOW_BANK_TRANSFER.BUTTON_TEXT]: "Bestätigen",
  [T.SUMMARY_SELL.HEADER]: "Fast geschafft",
  [T.SUMMARY_SELL.PAY]: "Bezahlen",
  [T.SUMMARY_SELL.GET]: "Bekommen",
  [T.SUMMARY_SELL.ROW_1]:
    "Verwenden Sie diese Empfängeradresse des Wallets zum Senden Ihrer Kryptowährung. Bitte überprüfen Sie die Transaktionsdetails sorgfältig, da wir die an eine falsche Adresse gesendete Kryptowährung nicht zurückfordern können.",
  [T.SUMMARY_SELL.ROW_2_PLEASE_SEND]: "Bitte senden Sie",
  [T.SUMMARY_SELL.ROW_2_TO_THE_NEXT]: "an folgende Adresse:",
  [T.SUMMARY_SELL.QR_TEXT]:
    "Wir überweisen {currency} auf Ihr Bankkonto, sobald wir Ihre Kryptowährung erhalten. Es kann bis zu 2-3 Werktage dauern. Sollten Sie Fragen haben, stehen wir Ihnen gerne zur Verfügung.",
  [T.SUMMARY_SELL.FOOTER_TEXT]:
    "Sie erhalten eine E-Mail Benachrichtigung, sobald die Transaktion abgeschlossen ist.",
  [T.SUMMARY_SELL.BUTTON_TEXT]: "OK",
  [T.MENU_MAIN.HEADER]: "Menü",
  [T.MENU_MAIN.LOGIN]: "Anmelden",
  [T.MENU_MAIN.LOGOUT]: "Abmelden",
  [T.MENU_MAIN.BUY_CRYPTO]: "Kryptowährung kaufen",
  [T.MENU_MAIN.SELL_CRYPTO]: "Kryptowährung verkaufen",
  [T.MENU_MAIN.RECEIVE_CRYPTO]: "Kryptowährung empfangen",
  [T.MENU_MAIN.TRANSACTION_HISTORY]: "Transaktionsverlauf",
  [T.MENU_MAIN.LEGAL]: "Rechtliche Hinweise",
  [T.MENU_MAIN.BADGE_STATUS]: "Ausstehend",
  [T.MENU_MAIN.BUY_TEXT]: "Bitcoin kaufen",
  [T.MENU_LEGAL.HEADER]: "Rechtliche Hinweise",
  [T.MENU_LEGAL.PRIVACY_POLICY]: "Datenschutzrichtlinie",
  [T.MENU_LEGAL.TERMS]: "AGB's",
  [T.MENU_LEGAL.COOKIE_POLICY]: "Cookie-Richtlinie",
  [T.MENU_LEGAL.ABOUT_US]: "Über uns",
  [T.MENU_LEGAL.HELP_CENTER]: "Hilfe-Center",
  [T.CRYPTO_DROPDOWN.HEADER]: "Kryptowährung auswählen",
  [T.CRYPTO_DROPDOWN.SEARCH]: "Suche",
  [T.CURRENCY_DROPDOWN.HEADER]: "Währung auswählen",
  [T.COUNTRY_DROPDOWN.HEADER]: "Aufenthaltsland",
  [T.LOADER.LOADER_TEXT]:
    "Verwenden Sie die Wallet-Adresse, die Sie erstellt haben und die Ihnen gehört.",
  [T.TRANSACTION_HISTORY_MAIN_PAGE.HEADER]: "Transaktionsverlauf",
  [T.TRANSACTION_HISTORY_MAIN_PAGE.SEARCH]: "Suche",
  [T.TRANSACTION_HISTORY_MAIN_PAGE.ALL]: "Alle",
  [T.TRANSACTION_HISTORY_MAIN_PAGE.SUCCESS]: "Erfolgreich",
  [T.TRANSACTION_HISTORY_MAIN_PAGE.FAILED]: "Fehlgeschlagen",
  [T.TRANSACTION_HISTORY_MAIN_PAGE.PENDING]: "Ausstehend",
  [T.TRANSACTION_HISTORY_MAIN_PAGE.BUY]: "Kaufen",
  [T.TRANSACTION_HISTORY_MAIN_PAGE.SELL]: "Verkaufen",
  [T.TRANSACTION_HISTORY_MAIN_PAGE.RECEIVE]: "Empfangen",
  [T.TRANSACTION_HISTORY_MAIN_PAGE.LOAD_MORE]: "Weitere laden",
  [T.TRANSACTION_DETAILS.HEADER]: "Transaktionsdetails",
  [T.TRANSACTION_DETAILS.STATUS]: "Status",
  [T.TRANSACTION_DETAILS.TRANSACTION_TYPE]: "Art der Transaktion",
  [T.TRANSACTION_DETAILS.TRANSACTION_ID]: "Transaktions-ID",
  [T.TRANSACTION_DETAILS.CREATED_AT]: "Erstellt am",
  [T.TRANSACTION_DETAILS.EXCHANGE_RATE]: "Wechselkurs",
  [T.TRANSACTION_DETAILS.PAIR_OF_ASSETS]: "Vermögenswerte-Paar",
  [T.TRANSACTION_DETAILS.SERVICE_FEE]: "Servicegebühr",
  [T.TRANSACTION_DETAILS.NETWORK_FEE]: "Netzwerkgebühr",
  [T.TRANSACTION_DETAILS.NETWORK]: "Netzwerk",
  [T.TRANSACTION_DETAILS.WALLET_ADDRESS]: "Wallet Adresse",
  [T.TRANSACTION_DETAILS.CONTACT_SUPPORT]: "Support kontaktieren",
  [T.TRANSACTION_DETAILS.TEXT]:
    "Die Transaktion wird von der Bank bearbeitet. Sie werden per E-Mail benachrichtigt, sobald Ihre Zahlung von Ihrer Bank bestätigt wurde.",
  [T.TRANSACTION_DETAILS.BACK_HOME]: "Zurück zur Hauptseite",
  [T.TRANSACTION_DETAILS.VIEW_TRANSACTION]:
    "Transaktion in der Blockchain anzeigen",
  [T.TRANSACTION_HISTORY_EMPTY.HEADER]: "Transaktionsverlauf",
  [T.TRANSACTION_HISTORY_EMPTY.TEXT]: "Sie haben aktuell keine Transaktionen",
  [T.TRANSACTION_HISTORY_EMPTY.BUTTON_TEXT]: "Transaktion erstellen",
  [T.TRANSACTION_HISTORY_EMPTY.NO_TRANSACTION]:
    "Keine derartigen Transaktionen",
  [T.WELCOME_PAGE_LOGIN.HEADER]: "Willkommen bei Swaps.app",
  [T.WELCOME_PAGE_LOGIN.TEXT]:
    "Kaufen und verkaufen Sie Kryptowährung schnell und reibungslos",
  [T.WELCOME_PAGE_LOGIN.OR]: "ODER weiter mit",
  [T.WELCOME_PAGE_LOGIN.EMAIL_PLACEHOLDER]: "Geben sie ihre E-Mail Adresse ein",
  [T.WELCOME_PAGE_LOGIN.BUTTON_TEXT]: "Weitermachen mit",
  [T.WELCOME_PAGE_LOGIN.PRIVACY_TEXT]: "Ich stimme dem zu",
  [T.WELCOME_PAGE_LOGIN.PRIVACY_TEXT_TERMS]: "Nutzungsbedingungen",
  [T.WELCOME_PAGE_LOGIN.PRIVACY_TEXT_AND]: "und",
  [T.WELCOME_PAGE_LOGIN.PRIVACY_TEXT_POLICY]: " der Datenschutzrichtlinie von",

  [T.WELCOME_PAGE_LOGIN.SUBSCRIPTION_TEXT]:
    "Erhalten Sie unsere Newsletter per E-Mail",
  [T.CODE_VERIFICATION.HEADER]: "Code-Verifizierung",
  [T.CODE_VERIFICATION.CODE]: "Code",
  [T.CODE_VERIFICATION.PASTE_CODE]: "Code einfügen",
  [T.CODE_VERIFICATION.TEXT]:
    "Bitte geben Sie den 6-stelligen Bestätigungscode ein, der an Sie gesendet wurde",
  [T.CODE_VERIFICATION.TIMER_TEXT_PART1]:
    "Wenn Sie den Code nicht erhalten haben, überprüfen Sie bitte den Spam-Ordner oder warten Sie ",
  [T.CODE_VERIFICATION.TIMER_TEXT_PART2]: ", um einen neuen Code anzufordern.",
  [T.CODE_VERIFICATION.TIMER_TEXT_SECONDS]: "sekunden",
  [T.CODE_VERIFICATION.TIMER_TEXT_MINUTES]: "minuten",
  [T.CODE_VERIFICATION.TIMER_TEXT_SECOND]: "sekunde",
  [T.CODE_VERIFICATION.TIMER_TEXT_MINUTE]: "minute",
  [T.CODE_VERIFICATION.RESEND_CODE]: "Erneut senden",
  [T.CODE_VERIFICATION.PRE_RESEND_CODE]:
    "Haben Sie keinen Verifizierungscode erhalten?",

  [T.CODE_VERIFICATION.FRAUD_PROTECT_HEADER]: "Schützen Sie sich vor Betrug",
  [T.CODE_VERIFICATION.FRAUD_PROTECT_ROW_1]:
    "Hat Ihnen jemand, den Sie nicht kennen, bei dieser Transaktion geholfen?",
  [T.CODE_VERIFICATION.FRAUD_PROTECT_ROW_2]:
    "Hat jemand Sie mit einem unbekannten oder verdächtigen Link hierher geschickt?",
  [T.CODE_VERIFICATION.FRAUD_PROTECT_FOOTER]:
    "Wenn Sie eine dieser Fragen mit Ja beantworten, könnten Sie Ziel eines Betrugs sein.",
  [T.PERSONAL_DETAILS.HEADER]: "Persönliche Informationen",
  [T.PERSONAL_DETAILS.STEP]: "Schritt",
  [T.PERSONAL_DETAILS.TEXT]:
    "Bitte geben Sie in den folgenden Feldern Ihre persönlichen Daten ein, die Ihrem Ausweis entsprechen.",
  [T.PERSONAL_DETAILS.FIRST_NAME]: "Vorname",
  [T.PERSONAL_DETAILS.LAST_NAME]: "Nachname",
  [T.PERSONAL_DETAILS.MIDDLE_NAME]: "Zweitname (optional)",
  [T.PERSONAL_DETAILS.DATE_OF_BIRTH]: "Geburtsdatum",
  [T.PERSONAL_DETAILS.DATE_OF_BIRTH_TOOLTIP]:
    "Sie müssen mindestens 18 Jahre alt sein, um sich bei Swaps.app zu registrieren",
  [T.PERSONAL_DETAILS.BUTTON_TEXT]: "Fortfahren",
  [T.RESIDENCE_ADDRESS.HEADER]: "Wohnanschrift",
  [T.RESIDENCE_ADDRESS.LABEL]: "Wohnanschrift",
  [T.RESIDENCE_ADDRESS.COUNTRY]: "Land",
  [T.RESIDENCE_ADDRESS.ADDRESS]: "Anschrift",
  [T.RESIDENCE_ADDRESS.CITY]: "Stadt",
  [T.RESIDENCE_ADDRESS.STATE]: "Bundesland",
  [T.RESIDENCE_ADDRESS.ZIP]: "PLZ",
  [T.RESIDENCE_ADDRESS.TEXT]:
    "Ihre Rechnungsadresse stimmt mit Ihrer Wohnadresse überein",
  [T.KYC_PAGE.HEADER]: "Bestätigen Sie Ihre Identität",
  [T.KYC_PAGE.TEXT]:
    "Aus rechtlichen und Sicherheitsgründen müssen wir Ihre Identität überprüfen.",
  [T.KYC_PAGE.ROW_1]: "Bitte halten Sie Ihren Ausweis bereit.",
  [T.KYC_PAGE.ROW_2]: "Machen Sie sich bereit für ein Selfie.",
  [T.KYC_PAGE.BUTTON_TEXT]: "Fortfahren",
  [T.KYC_SUCCESS.HEADER]: "Erfolgreicher Abschluss des KYC",
  [T.KYC_SUCCESS.TEXT]:
    "Herzlichen Glückwunsch, Sie haben die Identitätsprüfung erfolgreich bestanden und können nun alle Funktionen unseres Widgets nutzen",
  [T.KYC_SUCCESS.BUTTON_TEXT]: "Jetzt kaufen",
  [T.ERROR_MESSAGES.ABC]: "Bitte verwenden Sie das lateinische Alphabet",
  [T.ERROR_MESSAGES.INVALID_DATE_BIRTH]: "Das Geburtsdatum ist ungültig",
  [T.ERROR_MESSAGES.DATE_BIRTH_REQUIRED]: "Geburtsdatum erforderlich",
  [T.ERROR_MESSAGES.LASTNAME_REQUIRED]: "Nachname ist erforderlich",
  [T.ERROR_MESSAGES.FIRSTNAME_REQUIRED]: "Vorname ist erforderlich",
  [T.ADDRESS.LINE]: "Adresszeile",
  [T.BILLING_ADDRESS.HEADER]: "Rechnungsadresse",
  [T.BILLING_ADDRESS.LABEL]: "Rechnungsadresse",
  [T.BILLING_ADDRESS.COUNTRY]: "Land",
  [T.BILLING_ADDRESS.ADDRESS]: "Anschrift",
  [T.BILLING_ADDRESS.CITY]: "Stadt",
  [T.BILLING_ADDRESS.STATE]: "Bundesland",
  [T.BILLING_ADDRESS.ZIP]: "PLZ",
  [T.ERROR_MESSAGES.EMAIL]: "Das Feld muss eine gültige E-Mail-Adresse sein.",
  [T.ACTIONS.RESTRICTED_COUNTRIES]: "Siehe eingeschränkte Länder",
  [T.ERROR_MESSAGES.UNSUPPORTED_COUNTRY]:
    "Leider ist dieser Dienst in Ihrem Land derzeit nicht verfügbar.",
  [T.ACTIONS.COPIED]: "Kopiert",
  [T.ERROR_MESSAGES.WE_SENT_CODE_AGAIN]: "We sent you the code again. You have",
  [T.ERROR_MESSAGES.ATTEMPTS_LEFT]: "more attempts left.",
  [T.ERROR_MESSAGES.YOU_TRIED_ALL_ATTEMPTS]:
    "You have tried all attempts. Try again in 30 minutes.",
  [T.ERROR_MESSAGES.DELETED_ACCOUNT]:
    "  The account linked to this email is deleted.",
  [T.ACTIONS.COPY_LINK]: "Link kopieren",
  [T.RECEIVE_LINK.PAYER]: "Zahler",
  [T.RECEIVE_LINK.RECEPIENT]: "Empfänger",
  [T.RECEIVE_MAIN_PAGE.PASTE_WALLET]: "Fügen Sie Ihre Wallet-Adresse ein",
  [T.RECEIVE_MAIN_PAGE.PASTE_IBAN]: "Fügen Sie Ihre IBAN-Adresse ein",
  [T.ERROR_MESSAGES.PURCHASE_LIMITS]:
    "Sie haben Ihr Einkaufslimit erreicht. Um das Limit zu erhöhen, wenden Sie sich bitte an den Support.",
  [T.FOOTER.USE_TERMS]: "Nutzungsbedingungen",
  [T.FOOTER.PRIVACY_POLICY]: "Datenschutzrichtlinie",
  [T.FOOTER.COOKIE_POLICY]: "Cookie-Richtlinie",
  [T.ERROR_MESSAGES.MORE_THAN]: "Kann nicht mehr als sein",
  [T.ERROR_MESSAGES.LESS_THAN]: "Darf nicht kleiner sein als",
  [T.RECEIVE_MAIN_PAGE.RECEIVE]: "Erhalten",
  [T.ACTIONS.SELECT_CURRENCY]: "Währung wählen",
  [T.ACTIONS.SELECT_CRYPTO_CURRENCY]: "Kryptowährung auswählen",
  [T.META.BUY_TITLE]:
    "Krypto sofort zu den niedrigsten Gebühren kaufen | Swaps-App.",
  [T.META.BUY_DESCRIPTION]:
    "Kaufen Sie Bitcoin, Ethereum und andere Kryptowährungen profitabel, einfach und sicher mit Bankkarte, Apple Pay, Google Pay, Banküberweisung..",
  [T.META.SELL_TITLE]:
    "Krypto sofort zu niedrigen Gebühren verkaufen | Swaps.app",
  [T.META.SELL_DESCRIPTION]:
    "Verkaufen Sie Bitcoin, Ethereum und andere Kryptowährungen mit minimaler Provision, einfach und sicher.",
  [T.META.RECEIVE_TITLE]:
    "Empfangen Sie Zahlungen und Überweisungen in Kryptowährung, wo immer Sie sind | Swaps.app",
  [T.META.RECEIVE_DESCRIPTION]:
    "Erstellen Sie Zahlungslinks, um Überweisungen und Zahlungen in Kryptowährung zu empfangen. Swaps.app macht Zahlungen bequem, schnell und sicher.",
  [T.ACTIONS.HELP]: "helfen",
  [T.ACTIONS.UNDERSTAND]: "Ich verstehe",
  [T.PROMPTS.NAME_MUST_MATCH]:
    "Der Name auf Ihrem Bankkonto muss mit dem Namen übereinstimmen, der auf Ihrem Swaps-Konto registriert ist.",
  [T.PROMPTS.PLEASE_INITIATE_ONLY]:
    "Bitte veranlassen Sie nur eine Transaktion mit der angegebenen IBAN.",

  [T.PROMPTS.TRANSFERS_ARE_NOT_INSTANT]:
    "Überweisungen erfolgen nicht sofort und die Bearbeitung kann einige Tage dauern.",
  [T.PROMPTS.BE_SURE_TO_INCLUDE]:
    "Geben Sie bei Ihrer Überweisung unbedingt den „Referenzvermerk“ an.",
  [T.ERROR_MESSAGES.UNSUPPORTED_BILLING_COUNTRY]:
    "Ihr Rechnungsland unterstützt keine Banküberweisung. Bitte wählen Sie eine andere Zahlungsmethode.",

  [T.PROMPTS.MAKE_TRANSFER_BY]: "Machen Sie eine Überweisung nach Details.",
  [T.SELL_FLOW_BANK_TRANSFER.BANK_NAME]: "Bank Name",
  [T.SELL_FLOW_BANK_TRANSFER.BANK_ADDRESS]: "Bankadresse",
  [T.ACTIONS.OK]: "OK",
  [T.ACTIONS.COPY_ALL]: "Kopiere alles",
  [T.FOOTER.CONTACT_US]: "Kontaktiere uns",
  [T.RECEIVE_SUMMARY.BANNER_TEXT_CONTACT_US]: "Kontaktiere uns",

  [T.MENU_MAIN.WELCOME]: "Willkommen bei Swaps.app",
  [T.MENU_MAIN.ACCESS_FEATURES]: "Greifen Sie auf alle Widget-Funktionen zu",
  [T.PROMPTS.WE_WILL_SEND]: "Wir senden",
  [T.PROMPTS.YOUR_BANK_ACCOUNT]:
    "an Ihr Bankkonto, sobald wir Ihre Kryptowährung erhalten. Es kann bis zu 2-3 Werktage dauern. Sollten Sie Fragen haben, sind wir gerne für Sie da.",
  [T.ERROR_MESSAGES.INVALID_ADDRESS]: " Ungültige {currency} Adresse",
  [T.SELL_FLOW_BANK_TRANSFER.BANK_DETAILS]: "Bankdaten",
  [T.PAYMENT_METHOD_DROPDOWN.HEADER]: "Zahlungsart auswählen",
  [T.PAYMENT.GET_INFO]: "Sie erhalten {getLine} für {payLine}",
  [T.SELL_FLOW_SUMMARY.ACCOUNT_NUMBER]: "Kontonummer",
  [T.SELL_FLOW_SUMMARY.SORT_CODE]: "Bankleitzahl",
  [T.MENU_MAIN.GENERAL]: "Allgemein",

  [T.MENU_MAIN.CURRENCY]: "Währung",
  [T.MENU_MAIN.SUPPORT]: "Unterstützung",
  [T.MENU_MAIN.FEEDBACK]: "Feedback",
  [T.MENU_MAIN.DARK_MODE]: "Dunkler Modus",
  [T.MENU_MAIN.ABOUT_US]: "Über uns",
  [T.MENU_MAIN.PROFILE]: "Profil",
  [T.MENU_MAIN.COMMUNITY]: "Gemeinschaft",
  [T.SELL_FLOW_BANK_TRANSFER.ACCOUNT_NUMBER]: "Kontonummer",
  [T.SELL_FLOW_BANK_TRANSFER.SORT_CODE]: "Bankleitzahl",
  [T.WELCOME_PAGE_LOGIN.EMAIL]: "E-Mail",
  [T.WELCOME_PAGE_LOGIN.BOTTOM_TEXT]:
    "Swaps hält keine Benutzergelder und bietet nur den Währungsumtausch an.",
  [T.WELCOME_PAGE_LOGIN.CONTINUE]: "Bestätigen und fortfahren",
  [T.WELCOME_PAGE_LOGIN.SELECT_ALL]: "Alle auswählen",
  [T.WELCOME_PAGE_LOGIN.SANCTIONS_LIST_TEXT]:
    "Indem Sie dieses Kästchen ankreuzen, bestätigen Sie, dass Sie nicht auf einer Sanktionsliste stehen – wir freuen uns über Ihre Hilfe bei der",
  [T.WELCOME_PAGE_LOGIN.SANCTIONS_LIST_HREF]: "Sicherstellung der Einhaltung!",
  [T.WELCOME_PAGE_LOGIN.OWN_CRYPTOWALLET]:
    "Ich bestätige, dass die angegebene Krypto-Wallet-Adresse dem Empfänger gehört und bin mir des Empfängers und der damit verbundenen Risiken bewusst",
  [T.WELCOME_PAGE_LOGIN.PEP_FIRST_TEXT]: "Ich bestätige, dass ich keine",
  [T.WELCOME_PAGE_LOGIN.PEP_FIRST_HREF]: "Politisch Exponierte Person,",
  [T.WELCOME_PAGE_LOGIN.PEP_SECOND_TEXT]:
    "kein Familienmitglied oder keine Person bin, die bekanntermaßen eng mit der politisch exponierten Person verbunden ist",
  [T.WELCOME_PAGE_LOGIN.SIGN_IN]: "Anmelden",
  [T.WELCOME_PAGE_LOGIN.SIGN_UP]: "Anmelden",
  [T.WELCOME_PAGE_LOGIN.TERMS_AGREEMENT]:
    "Indem Sie fortfahren, stimmen Sie unseren zu",
  [T.WELCOME_PAGE_LOGIN.AGREEMENT_HEADER]: "Bleiben Sie sicher",
  [T.WELCOME_PAGE_LOGIN.AGREEMENT_DESCRIPTION]:
    "Swaps.app ist ein Zahlungsanbieter und nicht für die Gelder verantwortlich",
  [T.RECEIVE_LINK.GO_HOME]: "Nach Hause gehen",
  [T.RECEIVE_LINK.EXPIRED_TEXT]:
    "Über diesen Link wurde bereits eine Zahlung getätigt",
  [T.RECEIVE_LINK.LINK_EXPIRED]: "Link abgelaufen",
  [T.RECEIVE_SUMMARY.BANNER_WARNING]:
    "Stellen Sie sicher, dass Sie den Empfänger kennen und ihm vertrauen, da wir Ihnen möglicherweise nicht dabei helfen können, Ihr Geld zurückzubekommen",
  [T.KYC_PAGE.SUCCESSFUL]: "Erfolgreicher Abschluss von KYC",
  [T.KYC_PAGE.SUCCESSFUL_DESCRIPTION]:
    "Herzlichen Glückwunsch, Sie haben die Identitätsprüfung erfolgreich bestanden und können nun alle Funktionen unseres Widgets nutzen",
  [T.ERROR_MESSAGES.MIN_CHARACTERS]: "Muss mindestens 2 Zeichen lang sein.",
  [T.BUY_CRYPTO_SUMMARY.CONFIRM_TRANSACTION]: "Transaktion bestätigen",
  [T.BUY_CRYPTO_SUMMARY.NEXT]: "Weiter",
  [T.THEME_MODE.DARK]: "Dunkel",
  [T.THEME_MODE.LIGHT]: "Licht",
  [T.THEME_MODE.SYSTEM]: "System",
  [T.THEME_MODE.TITLE]: "Theme",
};
export default de;
