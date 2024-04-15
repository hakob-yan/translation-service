import * as T from "./translationKeys";

const fr = {
  [T.HEADER.BUY]: "Acheter",
  [T.HEADER.SELL]: "Vendre",
  [T.HEADER.RECEIVE]: "Recevoir",
  [T.BUY_CRYPTO_MAIN_PAGE.CREDIT_CARD]: "Carte de débit/crédit",
  [T.BUY_CRYPTO_MAIN_PAGE.BANK_TRANSFER]: "Virement bancaire",
  [T.BUY_CRYPTO_MAIN_PAGE.ASTRO_PAY]: "Astropay",
  [T.BUY_CRYPTO_MAIN_PAGE.YOU_PAY]: "Vous paierez",
  [T.BUY_CRYPTO_MAIN_PAGE.PAY_TOOLTIP]:
    "Ce montant peut varier en fonction du taux de change au moment de la transaction.",
  [T.BUY_CRYPTO_MAIN_PAGE.YOU_GET]: "Vous obtiendrez",
  [T.BUY_CRYPTO_MAIN_PAGE.GET_TOOLTIP]:
    "Ce montant peut varier en fonction du taux de change au moment de la transaction.",
  [T.BUY_CRYPTO_MAIN_PAGE.COUNTRY_RESIDENCE]: "Pays de résidence",
  [T.BUY_CRYPTO_MAIN_PAGE.COUNTRY_PLACEHOLDER]: "Pays de résidence",
  [T.BUY_CRYPTO_MAIN_PAGE.BUY_BUTTON]: "Acheter Crypto",
  [T.BUY_CRYPTO_SUMMARY.HEADER]: "Résumé",
  [T.BUY_CRYPTO_SUMMARY.PAY]: "Payer",
  [T.BUY_CRYPTO_SUMMARY.GET]: "Obtenir",
  [T.BUY_CRYPTO_SUMMARY.EXCHANGE_RATE]: "Taux de change",
  [T.BUY_CRYPTO_SUMMARY.SERVICE_FEE]: "Frais de service",
  [T.BUY_CRYPTO_SUMMARY.NETWORK_FEE]: "Frais de réseau",
  [T.BUY_CRYPTO_SUMMARY.NETWORK]: "Réseau",
  [T.BUY_CRYPTO_SUMMARY.INFO_TEXT]:
    "Le taux de change et les frais sont fixes pendant le paiement.",
  [T.BUY_CRYPTO_SUMMARY.WALLET_ADDRESS]: "Adresse de portefeuille",
  [T.BUY_CRYPTO_SUMMARY.WALLET_TOOLTIP]:
    "Assurez-vous que l'adresse de portefeuille et le réseau sont correctement définis, car nous ne pourrons pas vous aider à retourner la cryptomonnaie.",
  [T.BUY_CRYPTO_SUMMARY.TIMER_TEXT]: "secondes",
  [T.BUY_CRYPTO_SUMMARY.WALLET_PLACEHOLDER]:
    "Collez votre adresse de portefeuille",
  [T.BUY_CRYPTO_SUMMARY.START_OVER]: "Recommencer",
  [T.BUY_CRYPTO_SUMMARY.CONFIRM]: "Continuer",
  [T.BUY_CRYPTO_SUMMARY.QR_HEADER]: "Scanner code QR",
  [T.BUY_CRYPTO_TRANSACTION_RESULT.HEADER]: "Transaction en attente",
  [T.BUY_CRYPTO_TRANSACTION_RESULT.EXCHANGE_RATE]: "Taux de change",
  [T.BUY_CRYPTO_TRANSACTION_RESULT.FIAT_EQUIVALENT]:
    "Équivalent en monnaie fiat",
  [T.BUY_CRYPTO_TRANSACTION_RESULT.SERVICE_FEE]: "Frais de service",
  [T.BUY_CRYPTO_TRANSACTION_RESULT.NETWORK_FEE]: "Frais de réseau",
  [T.BUY_CRYPTO_TRANSACTION_RESULT.INFO_TEXT]:
    "La transaction est en cours de traitement par la banque. Vous recevrez une notification par e-mail dès que votre paiement sera confirmé par votre banque.",
  [T.BUY_CRYPTO_TRANSACTION_RESULT.BUTTON_TEXT]: "Transaction suivante",
  [T.RECEIVE_MAIN_PAGE.FIAT_AMOUNT]: "Montant en monnaie fiat",
  [T.RECEIVE_MAIN_PAGE.CRYPTO]: "Crypto",
  [T.RECEIVE_MAIN_PAGE.WALLET_ADDRESS]: "Adresse de portefeuille",
  [T.RECEIVE_MAIN_PAGE.WALLET_TOOLTIP]:
    "Assurez-vous que l'adresse de portefeuille et le réseau sont correctement définis, car nous ne pourrons pas vous aider à retourner la cryptomonnaie.",
  [T.RECEIVE_MAIN_PAGE.WALLET_PLACEHOLDER]:
    "Collez votre adresse de portefeuille",
  [T.RECEIVE_MAIN_PAGE.BUTTON_TEXT]: "Confirmer",
  [T.RECEIVE_GENERATE_LINK.HEADER]: "Lien de paiement",
  [T.RECEIVE_GENERATE_LINK.RECIPIENT]: "Destinataire",
  [T.RECEIVE_GENERATE_LINK.RECIPIENT_PLACEHOLDER]: "Nom du destinataire",
  [T.RECEIVE_GENERATE_LINK.PAYER]: "Payeur",
  [T.RECEIVE_GENERATE_LINK.PAYER_PLACEHOLDER]: "Nom du payeur",
  [T.RECEIVE_GENERATE_LINK.COMMENTS]: "Commentaires (facultatif)",
  [T.RECEIVE_GENERATE_LINK.COMMENTS_PLACEHOLDER]: "Nom du service",
  [T.RECEIVE_GENERATE_LINK.COMMENT_TOOLTIP]: "Maximum 40 caractères autorisés",
  [T.RECEIVE_GENERATE_LINK.BUTTON_TEXT]: "Générer un lien",
  [T.RECEIVE_LINK.PAYMENT_LINK]: "Lien de paiement pour",
  [T.RECEIVE_LINK.COPY]: "Copier",
  [T.RECEIVE_LINK.SHARE_LINK]: "Partager le lien de paiement",
  [T.RECEIVE_LINK.BUTTON_TEXT]: "Créer un nouveau lien",
  [T.RECEIVE_SUMMARY.HEADER]: "Envoyer de la cryptomonnaie",
  [T.RECEIVE_SUMMARY.BANNER_HEADER]: "Vous transférez à un particulier !",
  [T.RECEIVE_SUMMARY.BANNER_TEXT]:
    "La personne recevra l'argent, pas l'entreprise. Si vous soupçonnez qu'il s'agit d'une arnaque, veuillez nous contacter.",
  [T.RECEIVE_SUMMARY.RECIPIENT]: "Destinataire",
  [T.RECEIVE_SUMMARY.PAYER]: "Payeur",
  [T.RECEIVE_SUMMARY.COMMENTS]: "Commentaire",
  [T.RECEIVE_SUMMARY.RECEIVE_DETAILS]: "Détails de réception",
  [T.RECEIVE_SUMMARY.EXCHANGE_RATE]: "Taux de change",
  [T.RECEIVE_SUMMARY.CRYPTO_TYPE]: "Type de cryptomonnaie",
  [T.RECEIVE_SUMMARY.NETWORK]: "Réseau",
  [T.RECEIVE_SUMMARY.NETWORK_FEE]: "Frais de réseau",
  [T.RECEIVE_SUMMARY.SERVICE_FEE]: "Frais de service",
  [T.RECEIVE_SUMMARY.WALLET_ADDRESS]: "Adresse de portefeuille",
  [T.RECEIVE_SUMMARY.PAYMENT_METHOD]: "Méthode de paiement",
  [T.RECEIVE_SUMMARY.CREDIT_CARD]: "Carte de débit/crédit",
  [T.RECEIVE_SUMMARY.BANK_TRANSFER]: "Virement bancaire",
  [T.RECEIVE_SUMMARY.BUTTON_TEXT]: "Continuer",
  [T.RECEIVE_EXPIRED.HEADER]: "Lien expiré",
  [T.RECEIVE_EXPIRED.TEXT]: "Un paiement a déjà été effectué avec ce lien.",
  [T.RECEIVE_EXPIRED.BUTTON_TEXT]: "Retour à l'accueil",
  [T.SELL_FLOW_MAIN_PAGE.BANK_TRANSFER]: "Virement bancaire",
  [T.SELL_FLOW_MAIN_PAGE.INSTANT_BANKING]: "Paiement instantané",
  [T.SELL_FLOW_MAIN_PAGE.TEXT]:
    "Actuellement, cette fonctionnalité est disponible dans les pays de l'UE et au Royaume-Uni.",
  [T.SELL_FLOW_MAIN_PAGE.YOU_PAY]: "Vous paierez",
  [T.SELL_FLOW_MAIN_PAGE.PAY_TOOLTIP]:
    "Ce montant peut varier en fonction du taux de change au moment de la transaction.",
  [T.SELL_FLOW_MAIN_PAGE.YOU_GET]: "Vous obtiendrez",
  [T.SELL_FLOW_MAIN_PAGE.GET_TOOLTIP]:
    "Ce montant peut varier en fonction du taux de change au moment de la transaction.",
  [T.SELL_FLOW_MAIN_PAGE.COUNTRY_OF_RESIDENCE]: "Pays de résidence",
  [T.SELL_FLOW_MAIN_PAGE.COUNTRY_PLACEHOLDER]: "Pays",
  [T.SELL_FLOW_MAIN_PAGE.BUTTON_TEXT]: "Vendre de la cryptomonnaie",
  [T.SELL_FLOW_SUMMARY.HEADER]: "Résumé",
  [T.SELL_FLOW_SUMMARY.PAY]: "Payer",
  [T.SELL_FLOW_SUMMARY.GET]: "Obtenir",
  [T.SELL_FLOW_SUMMARY.EXCHANGE_RATE]: "Taux de change",
  [T.SELL_FLOW_SUMMARY.NETWORK]: "Réseau",
  [T.SELL_FLOW_SUMMARY.SERVICE_FEE]: "Frais de service",
  [T.SELL_FLOW_SUMMARY.START_OVER]: "Recommencer",
  [T.SELL_FLOW_SUMMARY.CONFIRM]: "Confirmer",
  [T.SELL_FLOW_BANK_TRANSFER.HEADER]: "Ajouter un compte bancaire",
  [T.SELL_FLOW_BANK_TRANSFER.ROW_1]:
    "Le nom du bénéficiaire doit correspondre au nom d'utilisateur enregistré sur Swaps.app.",
  [T.SELL_FLOW_BANK_TRANSFER.ROW_2]:
    "Assurez-vous que le compte bancaire que vous avez saisi prend en charge la devise fiat sélectionnée.",
  [T.SELL_FLOW_BANK_TRANSFER.ROW_3]:
    "La durée de la transaction n'est pas fixe et dépend des politiques de la banque du bénéficiaire.",
  [T.SELL_FLOW_BANK_TRANSFER.BENIFICIARY]: "Bénéficiaire",
  [T.SELL_FLOW_BANK_TRANSFER.BENIFICIARY_PLACEHOLDER]: "Votre nom",
  [T.SELL_FLOW_BANK_TRANSFER.IBAN]: "IBAN",
  [T.SELL_FLOW_BANK_TRANSFER.IBAN_PLACEHOLDER]: "Numéro IBAN du bénéficiaire",
  [T.SELL_FLOW_BANK_TRANSFER.BUTTON_TEXT]: "Confirmer",
  [T.SUMMARY_SELL.HEADER]: "Presque terminé",
  [T.SUMMARY_SELL.PAY]: "Payer",
  [T.SUMMARY_SELL.GET]: "Obtenir",
  [T.SUMMARY_SELL.ROW_1]:
    "Utilisez cette adresse de portefeuille de dépôt pour envoyer votre cryptomonnaie. Veuillez vérifier attentivement les détails de la transaction, car nous ne pourrons pas récupérer la cryptomonnaie envoyée à une adresse incorrecte.",
  [T.SUMMARY_SELL.ROW_2_PLEASE_SEND]: "Veuillez envoyer",
  [T.SUMMARY_SELL.ROW_2_TO_THE_NEXT]: "à l'adresse suivante :",
  [T.SUMMARY_SELL.QR_TEXT]:
    "Nous vous enverrons des {currency} sur votre compte bancaire dès que nous recevrons votre cryptomonnaie. Cela peut prendre jusqu'à 2 à 3 jours ouvrables. Si vous avez des questions, nous sommes là pour vous aider.",
  [T.SUMMARY_SELL.FOOTER_TEXT]:
    "Vous recevrez une notification par e-mail lorsque la transaction sera terminée.",
  [T.SUMMARY_SELL.BUTTON_TEXT]: "OK",
  [T.MENU_MAIN.HEADER]: "Menu",
  [T.MENU_MAIN.LOGIN]: "Se connecter",
  [T.MENU_MAIN.LOGOUT]: "Se déconnecter",
  [T.MENU_MAIN.BUY_CRYPTO]: "Acheter de la cryptomonnaie",
  [T.MENU_MAIN.SELL_CRYPTO]: "Vendre de la cryptomonnaie",
  [T.MENU_MAIN.RECEIVE_CRYPTO]: "Recevoir de la cryptomonnaie",
  [T.MENU_MAIN.TRANSACTION_HISTORY]: "Historique des transactions",
  [T.MENU_MAIN.LEGAL]: "Mentions légales",
  [T.MENU_MAIN.BADGE_STATUS]: "En attente",
  [T.MENU_MAIN.BUY_TEXT]: "Acheter du Bitcoin",
  [T.MENU_LEGAL.HEADER]: "Légal",
  [T.MENU_LEGAL.PRIVACY_POLICY]: "Politique de confidentialité",
  [T.MENU_LEGAL.TERMS]: "Conditions générales",
  [T.MENU_LEGAL.COOKIE_POLICY]: "Politique sur les cookies",
  [T.MENU_LEGAL.ABOUT_US]: "À propos de nous",
  [T.MENU_LEGAL.HELP_CENTER]: "Centre d'aide",
  [T.CRYPTO_DROPDOWN.HEADER]: "Sélectionner une cryptomonnaie",
  [T.CRYPTO_DROPDOWN.SEARCH]: "Rechercher",
  [T.CURRENCY_DROPDOWN.HEADER]: "Sélectionner une devise",
  [T.COUNTRY_DROPDOWN.HEADER]: "Pays de résidence",
  [T.LOADER.LOADER_TEXT]:
    "Utilisez l'adresse de portefeuille créée et détenue par vous.",
  [T.TRANSACTION_HISTORY_MAIN_PAGE.HEADER]: "Historique des transactions",
  [T.TRANSACTION_HISTORY_MAIN_PAGE.SEARCH]: "Rechercher",
  [T.TRANSACTION_HISTORY_MAIN_PAGE.ALL]: "Toutes",
  [T.TRANSACTION_HISTORY_MAIN_PAGE.SUCCESS]: "Réussies",
  [T.TRANSACTION_HISTORY_MAIN_PAGE.FAILED]: "Échouées",
  [T.TRANSACTION_HISTORY_MAIN_PAGE.PENDING]: "En attente",
  [T.TRANSACTION_HISTORY_MAIN_PAGE.BUY]: "Acheter",
  [T.TRANSACTION_HISTORY_MAIN_PAGE.SELL]: "Vendre",
  [T.TRANSACTION_HISTORY_MAIN_PAGE.RECEIVE]: "Recevoir",
  [T.TRANSACTION_HISTORY_MAIN_PAGE.LOAD_MORE]: "Charger plus",
  [T.TRANSACTION_DETAILS.HEADER]: "Détails de la transaction",
  [T.TRANSACTION_DETAILS.STATUS]: "Statut",
  [T.TRANSACTION_DETAILS.TRANSACTION_TYPE]: "Type de transaction",
  [T.TRANSACTION_DETAILS.TRANSACTION_ID]: "Identifiant de transaction",
  [T.TRANSACTION_DETAILS.CREATED_AT]: "Créé à",
  [T.TRANSACTION_DETAILS.EXCHANGE_RATE]: "Taux de change",
  [T.TRANSACTION_DETAILS.PAIR_OF_ASSETS]: "Paire d'actifs",
  [T.TRANSACTION_DETAILS.SERVICE_FEE]: "Frais de service",
  [T.TRANSACTION_DETAILS.NETWORK_FEE]: "Frais de réseau",
  [T.TRANSACTION_DETAILS.NETWORK]: "Réseau",
  [T.TRANSACTION_DETAILS.WALLET_ADDRESS]: "Adresse de portefeuille",
  [T.TRANSACTION_DETAILS.CONTACT_SUPPORT]: "Contacter le support",
  [T.TRANSACTION_DETAILS.TEXT]:
    "La transaction est en cours de traitement par la banque. Vous recevrez une notification par e-mail dès que votre paiement sera confirmé par votre banque.",
  [T.TRANSACTION_DETAILS.BACK_HOME]: "Retour à l'accueil",
  [T.TRANSACTION_DETAILS.VIEW_TRANSACTION]:
    "Voir la transaction dans la blockchain",
  [T.TRANSACTION_HISTORY_EMPTY.HEADER]: "Historique des transactions",
  [T.TRANSACTION_HISTORY_EMPTY.TEXT]: "Vous n'avez pas encore de transactions",
  [T.TRANSACTION_HISTORY_EMPTY.BUTTON_TEXT]: "Créer une transaction",
  [T.TRANSACTION_HISTORY_EMPTY.NO_TRANSACTION]: "Aucune transaction de ce type",
  [T.WELCOME_PAGE_LOGIN.HEADER]: "Bienvenue sur Swaps.app",
  [T.WELCOME_PAGE_LOGIN.TEXT]:
    "Achetez et vendez de la cryptomonnaie de manière transparente et rapide",
  [T.WELCOME_PAGE_LOGIN.OR]: "OU continuez avec",
  [T.WELCOME_PAGE_LOGIN.EMAIL_PLACEHOLDER]: "Entrez votre e-mail",
  [T.WELCOME_PAGE_LOGIN.BUTTON_TEXT]: "Continue avec",
  [T.WELCOME_PAGE_LOGIN.PRIVACY_TEXT]: "je suis d'accord avec le",

  [T.WELCOME_PAGE_LOGIN.PRIVACY_TEXT_TERMS]: "conditions d'utilisation",
  [T.WELCOME_PAGE_LOGIN.PRIVACY_TEXT_AND]: "et",
  [T.WELCOME_PAGE_LOGIN.PRIVACY_TEXT_POLICY]:
    "la politique de confidentialité de",
  [T.WELCOME_PAGE_LOGIN.SUBSCRIPTION_TEXT]:
    "Recevoir des e-mails promotionnels sur votre adresse e-mail",
  [T.CODE_VERIFICATION.HEADER]: "Vérification du code",
  [T.CODE_VERIFICATION.TEXT]:
    "Veuillez entrer le code de vérification à 6 chiffres qui a été envoyé à",
  [T.CODE_VERIFICATION.TIMER_TEXT_PART1]:
    "Si vous n'avez pas reçu le code, veuillez vérifier dans les spams ou attendez",
  [T.CODE_VERIFICATION.TIMER_TEXT_PART2]: "pour demander un nouveau code.",
  [T.CODE_VERIFICATION.TIMER_TEXT_SECONDS]: "secondes",
  [T.CODE_VERIFICATION.TIMER_TEXT_MINUTES]: " minutes",
  [T.CODE_VERIFICATION.TIMER_TEXT_SECOND]: "seconde",
  [T.CODE_VERIFICATION.TIMER_TEXT_MINUTE]: "minute",
  [T.CODE_VERIFICATION.RESEND_CODE]: "Envoyer à nouveau",
  [T.CODE_VERIFICATION.PRE_RESEND_CODE]:
    "Vous n'avez pas reçu de code de vérification ?",

  [T.CODE_VERIFICATION.CODE]: "Code",
  [T.CODE_VERIFICATION.PASTE_CODE]: "Coller le code",
  [T.CODE_VERIFICATION.FRAUD_PROTECT_HEADER]: "Protégez-vous contre la fraude",
  [T.CODE_VERIFICATION.FRAUD_PROTECT_ROW_1]:
    "Quelqu'un que vous ne connaissez pas vous a-t-il aidé avec cette transaction ?",
  [T.CODE_VERIFICATION.FRAUD_PROTECT_ROW_2]:
    "Quelqu'un vous a-t-il envoyé ici en utilisant un lien inconnu ou suspect ?",
  [T.CODE_VERIFICATION.FRAUD_PROTECT_FOOTER]:
    "Si la réponse est oui à l'une des questions ci-dessus, vous pourriez être la cible d'une escroquerie.",
  [T.PERSONAL_DETAILS.HEADER]: "Informations personnelles",
  [T.PERSONAL_DETAILS.STEP]: "étape",
  [T.PERSONAL_DETAILS.TEXT]:
    "Veuillez entrer vos informations personnelles dans les champs suivants telles qu'elles apparaissent sur vos documents officiels.",
  [T.PERSONAL_DETAILS.FIRST_NAME]: "Prénom",
  [T.PERSONAL_DETAILS.LAST_NAME]: "Nom",
  [T.PERSONAL_DETAILS.MIDDLE_NAME]: "Deuxième prénom (facultatif)",
  [T.PERSONAL_DETAILS.DATE_OF_BIRTH]: "Date de naissance",
  [T.PERSONAL_DETAILS.DATE_OF_BIRTH_TOOLTIP]:
    "Vous devez avoir 18 ans ou plus pour vous inscrire sur Swaps.app",
  [T.PERSONAL_DETAILS.BUTTON_TEXT]: "Continuer",
  [T.RESIDENCE_ADDRESS.HEADER]: "Adresse de résidence",
  [T.RESIDENCE_ADDRESS.LABEL]: "Adresse de résidence",
  [T.RESIDENCE_ADDRESS.COUNTRY]: "Pays",
  [T.RESIDENCE_ADDRESS.ADDRESS]: "Adresse",
  [T.RESIDENCE_ADDRESS.CITY]: "Ville",
  [T.RESIDENCE_ADDRESS.STATE]: "État/Province",
  [T.RESIDENCE_ADDRESS.ZIP]: "Code postal",
  [T.RESIDENCE_ADDRESS.TEXT]:
    "Votre adresse de facturation correspond à votre adresse de résidence",
  [T.KYC_PAGE.HEADER]: "Vérifiez votre identité",
  [T.KYC_PAGE.TEXT]:
    "En raison des exigences légales et pour des raisons de sécurité, nous devons vérifier votre identité",
  [T.KYC_PAGE.ROW_1]: "Veuillez préparer votre pièce d'identité",
  [T.KYC_PAGE.ROW_2]: "Préparez-vous à prendre un selfie",
  [T.KYC_PAGE.BUTTON_TEXT]: "Continuer",
  [T.KYC_SUCCESS.HEADER]: "Réussite de la vérification KYC",
  [T.KYC_SUCCESS.TEXT]:
    "Félicitations, vous avez réussi la vérification d'identité et vous pouvez désormais utiliser toutes les fonctionnalités de notre widget",
  [T.KYC_SUCCESS.BUTTON_TEXT]: "Acheter maintenant",
  [T.ERROR_MESSAGES.ABC]: "Veuillez utiliser l'alphabet latin",
  [T.ERROR_MESSAGES.INVALID_DATE_BIRTH]:
    "La date de naissance n'est pas valide",
  [T.ERROR_MESSAGES.DATE_BIRTH_REQUIRED]: "La date de naissance est requise",
  [T.ERROR_MESSAGES.LASTNAME_REQUIRED]: "Le nom de famille est obligatoire",
  [T.ERROR_MESSAGES.FIRSTNAME_REQUIRED]:
    "Le prénom est requis,Le prénom est requis",
  [T.ADDRESS.LINE]: "ligne d'adresse 1",

  [T.BILLING_ADDRESS.HEADER]: "Adresse de facturation",
  [T.BILLING_ADDRESS.LABEL]: "Adresse de facturation",
  [T.BILLING_ADDRESS.COUNTRY]: "Pays",
  [T.BILLING_ADDRESS.ADDRESS]: "Adresse",
  [T.BILLING_ADDRESS.CITY]: "Ville",
  [T.BILLING_ADDRESS.STATE]: "État/Province",
  [T.BILLING_ADDRESS.ZIP]: "Code postal",
  [T.ERROR_MESSAGES.EMAIL]: "Le champ doit être un e-mail valide.",
  [T.ACTIONS.RESTRICTED_COUNTRIES]: "Voir les pays restreints",
  [T.ERROR_MESSAGES.UNSUPPORTED_COUNTRY]:
    "Désolé, ce service n'est actuellement pas disponible dans votre pays.",
  [T.ACTIONS.COPIED]: "Copié",
  [T.ERROR_MESSAGES.WE_SENT_CODE_AGAIN]: "We sent you the code again. You have",
  [T.ERROR_MESSAGES.ATTEMPTS_LEFT]: "more attempts left.",
  [T.ERROR_MESSAGES.YOU_TRIED_ALL_ATTEMPTS]:
    "You have tried all attempts. Try again in 30 minutes.",
  [T.ERROR_MESSAGES.DELETED_ACCOUNT]:
    "  The account linked to this email is deleted.",
  [T.ACTIONS.COPY_LINK]: "Copier le lien",
  [T.RECEIVE_LINK.PAYER]: "Payeur",
  [T.RECEIVE_LINK.RECEPIENT]: "Destinataire",
  [T.RECEIVE_MAIN_PAGE.PASTE_WALLET]: "Collez l'adresse de votre portefeuille",
  [T.RECEIVE_MAIN_PAGE.PASTE_IBAN]: "Collez votre adresse IBAN",
  [T.ERROR_MESSAGES.PURCHASE_LIMITS]:
    "Vous avez atteint votre limite d'achat. Pour augmenter la limite, veuillez contacter le support.",
  [T.FOOTER.USE_TERMS]: "Conditions d'utilisation",
  [T.FOOTER.PRIVACY_POLICY]: "Politique de confidentialité",
  [T.FOOTER.COOKIE_POLICY]: "Politique de cookies",
  [T.ERROR_MESSAGES.MORE_THAN]: "Ne peut pas être plus que",
  [T.ERROR_MESSAGES.LESS_THAN]: "Ne peut pas être inférieur à",
  [T.RECEIVE_MAIN_PAGE.RECEIVE]: "Recevoir",
  [T.ACTIONS.SELECT_CURRENCY]: "Sélectionnez la devise",
  [T.ACTIONS.SELECT_CRYPTO_CURRENCY]: "Sélectionnez la crypto-monnaie",
  [T.META.BUY_TITLE]:
    "Achetez des cryptos instantanément avec les frais les plus bas | Application d'échange.",
  [T.META.BUY_DESCRIPTION]:
    "Achetez Bitcoin, Ethereum et autres cryptomonnaies de manière rentable, facilement et en toute sécurité avec carte bancaire, Apple Pay, Google Pay, virement bancaire.",
  [T.META.SELL_TITLE]:
    "Vendez des crypto-monnaies instantanément avec des frais peu élevés | Swaps.app",
  [T.META.SELL_DESCRIPTION]:
    "Vendez du Bitcoin, de l'Ethereum et d'autres crypto-monnaies avec une commission minimale, simplement et en toute sécurité.",
  [T.META.RECEIVE_TITLE]:
    "Recevez des paiements et des transferts en crypto-monnaie où que vous soyez | Swaps.app",
  [T.META.RECEIVE_DESCRIPTION]:
    "Créez des liens de paiement pour recevoir des virements et des paiements en crypto-monnaie. Swaps.app rend les paiements pratiques, rapides et sécurisés.",
  [T.ACTIONS.HELP]: "aide",
  [T.ACTIONS.UNDERSTAND]: "Je comprends",
  [T.PROMPTS.NAME_MUST_MATCH]:
    "Le nom sur votre compte bancaire doit correspondre au nom enregistré sur votre compte Swaps.",
  [T.PROMPTS.PLEASE_INITIATE_ONLY]:
    "Please initiate only one transaction to the provided IBAN.",

  [T.PROMPTS.TRANSFERS_ARE_NOT_INSTANT]:
    "Les transferts ne sont pas instantanés et leur traitement peut prendre quelques jours.",
  [T.PROMPTS.BE_SURE_TO_INCLUDE]:
    "Assurez-vous d'inclure la « Note de référence » lors de votre transfert.",
  [T.ERROR_MESSAGES.UNSUPPORTED_BILLING_COUNTRY]:
    "Votre pays de facturation ne prend pas en charge les virements bancaires. Veuillez sélectionner un autre mode de paiement.",

  [T.PROMPTS.MAKE_TRANSFER_BY]: "Effectuer un virement par détails.",
  [T.SELL_FLOW_BANK_TRANSFER.BANK_NAME]: "Nom de banque.",
  [T.SELL_FLOW_BANK_TRANSFER.BANK_ADDRESS]: "Adresse de la banque.",
  [T.ACTIONS.OK]: "D'accord.",
  [T.ACTIONS.COPY_ALL]: "Tout copier",
  [T.FOOTER.CONTACT_US]: "Contactez-nous.",
  [T.RECEIVE_SUMMARY.BANNER_TEXT_CONTACT_US]: "Contactez-nous.",

  [T.MENU_MAIN.WELCOME]: "Bienvenue sur Swaps.app.",
  [T.MENU_MAIN.ACCESS_FEATURES]:
    "Accédez à toutes les fonctionnalités du widget",
  [T.PROMPTS.WE_WILL_SEND]: "Nous enverrons",
  [T.PROMPTS.YOUR_BANK_ACCOUNT]:
    "sur votre compte bancaire dès que nous recevrons votre crypto. Cela peut prendre jusqu'à 2 à 3 jours ouvrables. Si vous avez des questions, nous sommes là pour.",
  [T.ERROR_MESSAGES.INVALID_ADDRESS]: "Adresse {currency} invalide",
  [T.SELL_FLOW_BANK_TRANSFER.BANK_DETAILS]: "Coordonnées Bancaires",
  [T.PAYMENT_METHOD_DROPDOWN.HEADER]: "Choisissez le mode de paiement",
  [T.PAYMENT.GET_INFO]: "Vous obtenez {getLine} pour {payLine}",
  [T.SELL_FLOW_SUMMARY.ACCOUNT_NUMBER]: "Numéro de compte",
  [T.SELL_FLOW_SUMMARY.SORT_CODE]: "Code de tri",
  [T.MENU_MAIN.GENERAL]: "Générale",

  [T.MENU_MAIN.CURRENCY]: "Devise",
  [T.MENU_MAIN.SUPPORT]: "Assistance",
  [T.MENU_MAIN.FEEDBACK]: "Commentaires",
  [T.MENU_MAIN.DARK_MODE]: "Mode sombre",
  [T.MENU_MAIN.ABOUT_US]: "À propos de nous",
  [T.MENU_MAIN.PROFILE]: "Profil",
  [T.MENU_MAIN.COMMUNITY]: "Communauté",
  [T.SELL_FLOW_BANK_TRANSFER.ACCOUNT_NUMBER]: "Numéro de compte",
  [T.SELL_FLOW_BANK_TRANSFER.SORT_CODE]: "Code de tri",
  [T.WELCOME_PAGE_LOGIN.EMAIL]: "E-mail",
  [T.WELCOME_PAGE_LOGIN.BOTTOM_TEXT]:
    "Swaps.app ne stocke pas les fonds des utilisateurs et ne fournit qu'une conversion de devises.",
  [T.WELCOME_PAGE_LOGIN.CONTINUE]: "Confirmer et continuer",
  [T.WELCOME_PAGE_LOGIN.SELECT_ALL]: "Sélectionner tout",
  [T.WELCOME_PAGE_LOGIN.SANCTIONS_LIST_TEXT]:
    "En cochant cette case, vous vérifiez que vous ne figurez sur aucune liste de sanctions – nous apprécions votre aide pour",
  [T.WELCOME_PAGE_LOGIN.SANCTIONS_LIST_HREF]: "garantir la conformité !",
  [T.WELCOME_PAGE_LOGIN.OWN_CRYPTOWALLET]:
    "Je confirme que l'adresse du crypto-wallet fournie appartient au destinataire et je connais le destinataire et les risques associés",
  [T.WELCOME_PAGE_LOGIN.PEP_FIRST_TEXT]: "Je confirme que je ne suis pas une",
  [T.WELCOME_PAGE_LOGIN.PEP_FIRST_HREF]: "personne politiquement exposée,",
  [T.WELCOME_PAGE_LOGIN.PEP_SECOND_TEXT]:
    "un membre de ma famille ou une personne connue pour être un proche associé de la personne politiquement exposée.",
  [T.WELCOME_PAGE_LOGIN.SIGN_IN]: "Connexion",
  [T.WELCOME_PAGE_LOGIN.SIGN_UP]: "Inscription",
  [T.WELCOME_PAGE_LOGIN.TERMS_AGREEMENT]: "En continuant, vous acceptez nos",
  [T.WELCOME_PAGE_LOGIN.AGREEMENT_HEADER]: "Restez en sécurité",
  [T.WELCOME_PAGE_LOGIN.AGREEMENT_DESCRIPTION]:
    "Swaps.app est un moyen de paiement et n'est pas responsable des fonds",
  [T.RECEIVE_LINK.GO_HOME]: "Rentrer chez soi",
  [T.RECEIVE_LINK.EXPIRED_TEXT]: "Un paiement a déjà été effectué via ce lien",
  [T.RECEIVE_LINK.LINK_EXPIRED]: "Lien expiré",
  [T.RECEIVE_SUMMARY.BANNER_WARNING]:
    "Assurez-vous de connaître et de faire confiance au destinataire, car nous ne pourrons peut-être pas vous aider à récupérer votre argent",
  [T.KYC_PAGE.SUCCESSFUL]: "Réussite du KYC",
  [T.KYC_PAGE.SUCCESSFUL_DESCRIPTION]:
    "Félicitations, vous avez réussi la vérification d'identité et vous pouvez désormais utiliser toutes les fonctionnalités de notre widget",
  [T.ERROR_MESSAGES.MIN_CHARACTERS]: "Doit contenir au moins 2 caractères.",
  [T.BUY_CRYPTO_SUMMARY.CONFIRM_TRANSACTION]: "Confirmer la transaction",
  [T.BUY_CRYPTO_SUMMARY.NEXT]: "Suivant",
  [T.THEME_MODE.DARK]: "Sombre",
  [T.THEME_MODE.LIGHT]: "Lumière",
  [T.THEME_MODE.SYSTEM]: "Système",
  [T.THEME_MODE.TITLE]: "Thème",
};
export default fr;
