import { useState } from "react";
import { X, Send, Upload, CheckCircle2, Sparkles } from "lucide-react";

type ServiceOption =
  | "Pistorasian asennus/vaihto"
  | "Valaisimen asennus"
  | "Kiukaan asennus"
  | "Latausaseman asennus"
  | "Sähkövian korjaus"
  | "Sähköremontti / Energiaremontti"
  | "Jotain muuta tai isompi projekti";

type TimeOption =
  "Mahdollisimman pian / Hätätyö" | "1-2 viikon sisällä" | "Joustavasti / Sovitaan ajankohta";

export function ChatTarjousWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState<number>(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);

  // Form State
  const [selectedService, setSelectedService] = useState<ServiceOption | "">("");
  const [location, setLocation] = useState<string>("");
  const [selectedTime, setSelectedTime] = useState<TimeOption | "">("");
  const [description, setDescription] = useState<string>("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  // Honeypot-spammiloukku boteille
  const [honeypot, setHoneypot] = useState<string>("");

  const serviceOptions: ServiceOption[] = [
    "Pistorasian asennus/vaihto",
    "Valaisimen asennus",
    "Kiukaan asennus",
    "Latausaseman asennus",
    "Sähkövian korjaus",
    "Sähköremontti / Energiaremontti",
    "Jotain muuta tai isompi projekti",
  ];

  const timeOptions: TimeOption[] = [
    "Mahdollisimman pian / Hätätyö",
    "1-2 viikon sisällä",
    "Joustavasti / Sovitaan ajankohta",
  ];

  const handleNextStep = () => {
    setStep((prev) => prev + 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Botti-ansa
    if (honeypot.trim() !== "") {
      setIsSubmitted(true);
      return;
    }

    setIsSending(true);

    try {
      const formData = new FormData();
      // Kytketty sinun Web3Forms Access Key
      formData.append("access_key", "d27e59d7-fc45-4b26-8860-ff6af1e6df72");
      formData.append("subject", `Uusi tarjouspyyntö: ${selectedService} (${name})`);
      formData.append("from_name", "KS-Sähkö Verkkosivu-Widget");

      formData.append("Palvelu", selectedService);
      formData.append("Sijainti / Kaupunki", location);
      formData.append("Aikataulu", selectedTime);
      formData.append("Lisätiedot", description || "Ei lisätietoja");
      formData.append("Asiakkaan Nimi", name);
      formData.append("Asiakkaan Puhelin", phone);
      formData.append("Asiakkaan Sähköposti", email || "Ei annettu");

      if (selectedFile) {
        formData.append("attachment", selectedFile);
      }

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setIsSubmitted(true);
      } else {
        alert("Virhe lähetyksessä: " + data.message);
      }
    } catch (error) {
      alert("Virhe viestin lähetyksessä. Tarkista internetyhteys tai soita meille!");
    } finally {
      setIsSending(false);
    }
  };

  const resetForm = () => {
    setStep(1);
    setIsSubmitted(false);
    setSelectedService("");
    setLocation("");
    setSelectedTime("");
    setDescription("");
    setSelectedFile(null);
    setName("");
    setPhone("");
    setEmail("");
    setHoneypot("");
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end">
      {/* CHAT-IKKUNA */}
      {isOpen && (
        <div className="mb-4 w-[92vw] max-w-[400px] h-[520px] bg-card border border-border rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in slide-in-from-bottom-5 duration-200">
          {/* HEADER */}
          <div className="bg-[var(--ink)] text-white p-4 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-3">
              <div className="size-9 rounded-full bg-white p-1 flex items-center justify-center shadow-sm overflow-hidden shrink-0">
                <img
                  src="/Logo_k.png"
                  alt="KS-Sähkö Oy logo"
                  className="h-full w-auto object-contain"
                />
              </div>
              <div>
                <h4 className="font-bold text-sm leading-tight text-white">KS-Sähkö Oy Apuri</h4>
                <p className="text-[11px] text-white/70 flex items-center gap-1">
                  <span className="size-2 rounded-full bg-emerald-400 inline-block" /> Pyydä nopea
                  tarjous
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-lg text-white/80 hover:bg-white/10 transition-colors"
              aria-label="Sulje"
            >
              <X className="size-5" />
            </button>
          </div>

          {/* CHAT SISÄLTÖ */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-secondary/20">
            {!isSubmitted ? (
              <>
                {/* VAIHE 1: VALITSE PALVELU */}
                {step >= 1 && (
                  <div className="space-y-2">
                    <div className="bg-card border border-border p-3 rounded-2xl rounded-tl-none text-xs text-[var(--ink)] font-semibold shadow-sm max-w-[85%]">
                      👋 Hei! Missä sähkötyössä tarvitset apua?
                    </div>

                    <div className="space-y-1.5 pt-1 pl-2">
                      {serviceOptions.map((opt) => (
                        <button
                          key={opt}
                          onClick={() => {
                            setSelectedService(opt);
                            if (step === 1) setStep(2);
                          }}
                          className={`w-full text-left p-2.5 rounded-xl text-xs font-bold transition-all border ${
                            selectedService === opt
                              ? "bg-[var(--brand)] text-[var(--ink)] border-[var(--brand)] shadow-sm"
                              : "bg-card border-border text-[var(--ink)] hover:border-[var(--brand)]"
                          }`}
                        >
                          ○ {opt}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* VAIHE 2: MISSÄ KOHTEESI SIJAITSEE? */}
                {step >= 2 && (
                  <div className="space-y-2 pt-2 animate-in fade-in duration-200">
                    <div className="bg-card border border-border p-3 rounded-2xl rounded-tl-none text-xs text-[var(--ink)] font-semibold shadow-sm max-w-[85%]">
                      📍 Missä kaupungissa / kunnassa kohde sijaitsee?
                    </div>

                    <div className="space-y-2 pl-2">
                      <input
                        type="text"
                        placeholder="Esim. Jyväskylä, Laukaa, Muurame..."
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        className="w-full p-2.5 rounded-xl border border-border bg-card text-xs focus:ring-2 focus:ring-[var(--brand)] outline-none"
                      />

                      {location.trim().length > 1 && step === 2 && (
                        <button
                          onClick={handleNextStep}
                          className="btn-primary text-xs py-2 w-full justify-center"
                        >
                          Jatka eteenpäin →
                        </button>
                      )}
                    </div>
                  </div>
                )}

                {/* VAIHE 3: MILLOIN TYÖ HALUTAAN? */}
                {step >= 3 && (
                  <div className="space-y-2 pt-2 animate-in fade-in duration-200">
                    <div className="bg-card border border-border p-3 rounded-2xl rounded-tl-none text-xs text-[var(--ink)] font-semibold shadow-sm max-w-[85%]">
                      📅 Milloin työ pitäisi toteuttaa?
                    </div>

                    <div className="space-y-1.5 pl-2">
                      {timeOptions.map((tOpt) => (
                        <button
                          key={tOpt}
                          onClick={() => {
                            setSelectedTime(tOpt);
                            if (step === 3) setStep(4);
                          }}
                          className={`w-full text-left p-2.5 rounded-xl text-xs font-bold transition-all border ${
                            selectedTime === tOpt
                              ? "bg-[var(--brand)] text-[var(--ink)] border-[var(--brand)] shadow-sm"
                              : "bg-card border-border text-[var(--ink)] hover:border-[var(--brand)]"
                          }`}
                        >
                          ○ {tOpt}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* VAIHE 4: KUVA / LISÄTIEDOT & YHTEYSTIEDOT */}
                {step >= 4 && (
                  <form
                    onSubmit={handleSubmit}
                    className="space-y-3 pt-2 animate-in fade-in duration-200"
                  >
                    {/* NÄKYMÄTÖN SPAMMILOUKKU BOTEILLE */}
                    <input
                      type="text"
                      name="website_url_check"
                      value={honeypot}
                      onChange={(e) => setHoneypot(e.target.value)}
                      style={{ display: "none" }}
                      tabIndex={-1}
                      autoComplete="off"
                    />

                    <div className="bg-card border border-border p-3 rounded-2xl rounded-tl-none text-xs text-[var(--ink)] font-semibold shadow-sm max-w-[85%]">
                      📷 Voit halutessasi liittää kuvan kohteesta sekä jättää yhteystietosi
                      tarjousta varten.
                    </div>

                    <div className="space-y-2 pl-2 bg-card p-3 rounded-2xl border border-border">
                      <div>
                        <label className="block text-[11px] font-bold text-muted-foreground mb-1">
                          Liitä kuva kohteesta (valinnainen)
                        </label>
                        <label className="flex items-center gap-2 p-2 border border-dashed border-border rounded-xl cursor-pointer hover:bg-secondary text-xs text-muted-foreground">
                          <Upload className="size-4 text-[var(--brand-deep)]" />
                          <span className="truncate">
                            {selectedFile ? selectedFile.name : "Valitse kuva laitteeltasi..."}
                          </span>
                          <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => setSelectedFile(e.target.files?.[0] || null)}
                            className="hidden"
                          />
                        </label>
                      </div>

                      <div>
                        <input
                          type="text"
                          placeholder="Lisätiedot kohteesta (valinnainen)"
                          value={description}
                          onChange={(e) => setDescription(e.target.value)}
                          className="w-full p-2 border border-border rounded-xl bg-background text-xs outline-none"
                        />
                      </div>

                      <div>
                        <input
                          type="text"
                          required
                          placeholder="Nimesi *"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="w-full p-2 border border-border rounded-xl bg-background text-xs outline-none"
                        />
                      </div>

                      <div>
                        <input
                          type="tel"
                          required
                          placeholder="Puhelinnumerosi *"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="w-full p-2 border border-border rounded-xl bg-background text-xs outline-none"
                        />
                      </div>

                      <div>
                        <input
                          type="email"
                          placeholder="Sähköposti (valinnainen)"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full p-2 border border-border rounded-xl bg-background text-xs outline-none"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={isSending}
                        className="btn-primary text-xs py-2.5 w-full justify-center mt-2"
                      >
                        {isSending ? (
                          "Lähetetään..."
                        ) : (
                          <>
                            Lähetä tarjouspyyntö <Send className="size-3.5" />
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                )}
              </>
            ) : (
              <div className="text-center py-12 px-4 space-y-4">
                <div className="p-3 bg-emerald-100 text-emerald-700 rounded-full w-fit mx-auto">
                  <CheckCircle2 className="size-8" />
                </div>
                <h4 className="font-bold text-base text-[var(--ink)]">
                  Kiitos tarjouspyynnöstäsi!
                </h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Olemme sinuun yhteydessä mahdollisimman pian. Voit myös tarvittaessa soittaa
                  meille suoraan numeroon 050 360 0142.
                </p>
                <button
                  onClick={resetForm}
                  className="btn-ghost text-xs py-2 px-4 border border-border mt-4"
                >
                  Sulje
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* FLOATING CHAT-BALLOON & LOGO-PALLO */}
      <div className="flex items-center gap-3">
        {!isOpen && (
          <button
            onClick={() => setIsOpen(true)}
            className="bg-card border border-border text-[var(--ink)] font-bold text-xs px-3.5 py-2 rounded-full shadow-lg hover:border-[var(--brand)] transition-all flex items-center gap-2 group animate-in fade-in duration-300"
          >
            <Sparkles className="size-3.5 text-[var(--brand-deep)]" />
            <span>Missä tarvitset apua?</span>
          </button>
        )}

        {/* Pyöreä pallo yrityksen omalla logolla */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="size-14 rounded-full bg-white text-[var(--ink)] p-2.5 flex items-center justify-center shadow-xl hover:scale-105 transition-all duration-200 border-2 border-[var(--ink)] shrink-0 overflow-hidden"
          aria-label="Avaa tarjousapuri"
        >
          {isOpen ? (
            <X className="size-6 text-[var(--ink)]" />
          ) : (
            <img
              src="/Logo_k.png"
              alt="KS-Sähkö Oy logo"
              className="w-full h-full object-contain"
            />
          )}
        </button>
      </div>
    </div>
  );
}
