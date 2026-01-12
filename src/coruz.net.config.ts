export const CONTACT_INFO = {
  whatsAppNumber: "525579511924",
  whatsAppNumberFormatted: "+52 55 7951 1924",
  infoEmail: "info@coruz.net",
  contactEmail: "contacto@coruz.net",
};

const DEFAULT_MESSAGE =
  "Buen día, requiero información de los servicios que ofrecen en CORUZ.";

export function createContactURL(
  type: string,
  message: string = DEFAULT_MESSAGE
) {
  if (type === "w")
    return `https://wa.me/${CONTACT_INFO.whatsAppNumber}?text=${encodeURI(
      message
    )}`;
  if (type === "e-info")
    return `mailto:${CONTACT_INFO.infoEmail}?subject=${encodeURI(
      "Solicitud de información"
    )}&body=${encodeURI(message)}`;
  if (type === "e-arco")
    return `mailto:${CONTACT_INFO.contactEmail}?subject=${encodeURI(
      "Derechos ARCO"
    )}`;
}
