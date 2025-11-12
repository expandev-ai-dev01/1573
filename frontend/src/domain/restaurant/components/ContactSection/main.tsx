import type { ContactSectionProps } from './types';

export const ContactSection = ({ contactInfo }: ContactSectionProps) => {
  if (!contactInfo) return null;

  const handlePhoneClick = () => {
    window.location.href = `tel:${contactInfo.phone}`;
  };

  const handleEmailClick = () => {
    window.location.href = `mailto:${contactInfo.email}`;
  };

  const handleWhatsAppClick = () => {
    if (contactInfo.whatsapp) {
      const cleanNumber = contactInfo.whatsapp.replace(/\D/g, '');
      window.open(`https://wa.me/55${cleanNumber}`, '_blank');
    }
  };

  return (
    <section id="contact" className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold text-center mb-8">Entre em Contato</h2>

        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Telefone</h3>
                <button
                  onClick={handlePhoneClick}
                  className="text-blue-600 hover:text-blue-700 transition-colors"
                >
                  {contactInfo.phone}
                </button>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Email</h3>
                <button
                  onClick={handleEmailClick}
                  className="text-blue-600 hover:text-blue-700 transition-colors"
                >
                  {contactInfo.email}
                </button>
              </div>

              {contactInfo.whatsapp && (
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">WhatsApp</h3>
                  <button
                    onClick={handleWhatsAppClick}
                    className="text-green-600 hover:text-green-700 transition-colors"
                  >
                    {contactInfo.whatsapp}
                  </button>
                </div>
              )}
            </div>

            {contactInfo.socialMedia && contactInfo.socialMedia.length > 0 && (
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Redes Sociais</h3>
                <div className="flex flex-wrap gap-4">
                  {contactInfo.socialMedia.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors"
                    >
                      <span>{social.name}</span>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
