"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Check } from "lucide-react"
import WhatsAppButton from "@/components/whatsapp-button"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { useActionState } from "react"
import { sendContactForm } from "./actions"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const scaleOnHover = {
  whileHover: { scale: 1.02, y: -4 },
  whileTap: { scale: 0.98 },
  transition: { type: "spring", stiffness: 400, damping: 25 },
}

export default function Home() {
  const [state, formAction, isPending] = useActionState(sendContactForm, null)

  return (
    <main className="flex min-h-screen flex-col overflow-hidden bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#8B0000] via-[#A00000] to-[#8B0000] text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/frigorifico-com-alimentos.jpg"
            alt="Interior de supermercado moderno com prateleiras organizadas - Serviços de Promotoria BCM ACTION"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        {/* Adicionar este overlay gradiente */}
        <div className="absolute inset-0 z-[1] bg-gradient-to-r from-[#8B0000]/60 via-[#8B0000]/40 to-[#A00000]/60"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 relative z-20">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 xl:gap-20 2xl:gap-24">
            <motion.div
              className="flex flex-col items-center lg:items-start space-y-6 sm:space-y-8 text-center lg:text-left w-full lg:w-1/2"
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <motion.div
                className="flex justify-center lg:justify-start mb-8 sm:mb-10 lg:mb-12 w-full"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                whileHover={{
                  scale: 1.05,
                  rotate: 1,
                  transition: { type: "spring", stiffness: 300, damping: 20 },
                }}
                className="cursor-pointer"
              >
                <Image
                  src="/images/bcm-logo-white.png"
                  alt="BCM ACTION Logo"
                  width={240}
                  height={240}
                  className="h-auto w-48 sm:w-56 md:w-64 lg:w-96 xl:w-[28rem] 2xl:w-[32rem]"
                />
              </motion.div>

              <motion.h1
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-light leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Serviços Especializados <br />
                Para Seu <span className="font-medium text-[#FF8C00]">Negócio</span>
              </motion.h1>

              <motion.div
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light text-white/90 tracking-wide uppercase text-center lg:text-left">
                  A solução completa para seu negócio
                </h3>
              </motion.div>
            </motion.div>

            <motion.div
              className="w-full lg:w-1/2 xl:w-1/2"
              data-section="orcamento"
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <div className="bg-white/20 backdrop-blur-3xl rounded-3xl sm:rounded-[2rem] p-8 sm:p-10 shadow-2xl border border-white/30 relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/30 before:via-white/10 before:to-transparent before:rounded-3xl sm:before:rounded-[2rem] before:pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-white/5 pointer-events-none rounded-3xl sm:rounded-[2rem]"></div>
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
                <div className="absolute top-0 left-0 h-full w-px bg-gradient-to-b from-transparent via-white/40 to-transparent"></div>
                <div className="absolute -top-20 -left-20 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-white/5 rounded-full blur-3xl"></div>

                <div className="relative z-10">
                  <motion.h2
                    className="text-center text-white text-2xl sm:text-3xl font-medium mb-8 sm:mb-10 drop-shadow-lg"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                  >
                    Faça Seu Orçamento
                  </motion.h2>

                  <motion.form
                    action={formAction}
                    className="space-y-6 sm:space-y-8 max-w-lg mx-auto"
                    variants={staggerContainer}
                    initial="initial"
                    animate="animate"
                  >
                    <motion.div variants={fadeInUp}>
                      <Input
                        type="text"
                        name="name"
                        placeholder="Nome"
                        required
                        className="h-14 sm:h-16 border-0 bg-white/25 backdrop-blur-xl rounded-2xl sm:rounded-3xl text-base sm:text-lg text-white placeholder:text-white/80 transition-all duration-300 focus:bg-white/35 focus:shadow-xl focus:scale-[1.02] focus:border-white/50 focus:ring-2 focus:ring-white/30 selection:bg-[#8B0000] selection:text-white"
                      />
                    </motion.div>
                    <motion.div variants={fadeInUp}>
                      <Input
                        type="email"
                        name="email"
                        placeholder="Email"
                        required
                        className="h-14 sm:h-16 border-0 bg-white/25 backdrop-blur-xl rounded-2xl sm:rounded-3xl text-base sm:text-lg text-white placeholder:text-white/80 transition-all duration-300 focus:bg-white/35 focus:shadow-xl focus:scale-[1.02] focus:border-white/50 focus:ring-2 focus:ring-white/30 selection:bg-[#8B0000] selection:text-white"
                      />
                    </motion.div>
                    <motion.div variants={fadeInUp}>
                      <Input
                        type="tel"
                        name="phone"
                        placeholder="Telefone"
                        required
                        className="h-14 sm:h-16 border-0 bg-white/25 backdrop-blur-xl rounded-2xl sm:rounded-3xl text-base sm:text-lg text-white placeholder:text-white/80 transition-all duration-300 focus:bg-white/35 focus:shadow-xl focus:scale-[1.02] focus:border-white/50 focus:ring-2 focus:ring-white/30 selection:bg-[#8B0000] selection:text-white"
                      />
                    </motion.div>
                    <motion.div variants={fadeInUp}>
                      <Textarea
                        name="message"
                        placeholder="Escreva sua mensagem *"
                        required
                        className="border-0 bg-white/25 backdrop-blur-xl rounded-2xl sm:rounded-3xl min-h-[120px] sm:min-h-[140px] text-base sm:text-lg text-white placeholder:text-white/80 transition-all duration-300 focus:bg-white/35 focus:shadow-xl focus:scale-[1.02] resize-none focus:border-white/50 focus:ring-2 focus:ring-white/30 selection:bg-[#8B0000] selection:text-white"
                      />
                    </motion.div>

                    {/* Mensagem de status */}
                    {state && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`text-center p-4 rounded-2xl backdrop-blur-xl ${
                          state.success
                            ? "bg-green-500/20 text-green-100 border border-green-400/30"
                            : "bg-red-500/20 text-red-100 border border-red-400/30"
                        }`}
                      >
                        {state.message}
                      </motion.div>
                    )}

                    <motion.div variants={fadeInUp} className="flex justify-center pt-4">
                      <motion.div
                        whileHover={{
                          scale: 1.05,
                          y: -2,
                          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                        }}
                        whileTap={{ scale: 0.98 }}
                        transition={{ type: "spring", stiffness: 400, damping: 25 }}
                      >
                        <Button
                          type="submit"
                          disabled={isPending}
                          className="px-12 sm:px-16 h-16 sm:h-18 bg-gradient-to-r from-[#8B0000] via-[#A00000] to-[#8B0000] hover:from-[#A00000] hover:via-[#B91C1C] hover:to-[#A00000] text-white border-0 rounded-2xl sm:rounded-3xl text-lg sm:text-xl font-semibold shadow-2xl transition-all duration-300 hover:shadow-3xl disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700"
                        >
                          <span className="relative z-10">{isPending ? "Enviando..." : "Enviar Solicitação"}</span>
                        </Button>
                      </motion.div>
                    </motion.div>
                  </motion.form>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <AnimatedSection className="py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
          <motion.div className="text-center mb-12 sm:mb-16" {...fadeInUp}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light text-[#8B0000] mb-4">
              Serviços
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 font-light">Soluções completas para sua empresa</p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 xl:gap-10 max-w-7xl mx-auto"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div variants={fadeInUp}>
              <ServiceCard
                title="Promotoria de vendas"
                description={[
                  "Promotores Exclusivos e Compartilhados",
                  "Reposição de PDV",
                  "Controle e organização de estoque",
                  "Gestão de produtos e vendas",
                ]}
                borderColor="border-[#8B0000]"
              />
            </motion.div>

            <motion.div variants={fadeInUp}>
              <ServiceCard
                title="Serviços Administrativos"
                description={[
                  "Auxiliar Administrativo e Secretaria",
                  "Recepcionista e Telefonista",
                  "Suporte administrativo completo",
                  "Gestão de documentos e processos",
                ]}
                borderColor="border-[#FF8C00]"
              />
            </motion.div>

            <motion.div variants={fadeInUp} className="md:col-span-2 lg:col-span-1">
              <ServiceCard
                title="Limpeza e Conservação"
                description={[
                  "Zeladoria e Jardinagem",
                  "Serviços Gerais e Copeira",
                  "Limpeza e conservação de ambientes",
                  "Manutenção predial especializada",
                ]}
                borderColor="border-[#8B0000]"
              />
            </motion.div>
          </motion.div>

          <motion.div
            className="flex justify-center mt-12 sm:mt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.div
              whileHover={{
                scale: 1.05,
                y: -2,
                boxShadow: "0 25px 50px -12px rgba(139, 0, 0, 0.4)",
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              <Button
                onClick={() => {
                  const orcamentoSection = document.querySelector('[data-section="orcamento"]')
                  if (orcamentoSection) {
                    orcamentoSection.scrollIntoView({ behavior: "smooth" })
                  }
                }}
                className="w-full sm:w-auto h-14 sm:h-16 lg:h-18 px-12 sm:px-16 bg-gradient-to-r from-[#8B0000] via-[#A00000] to-[#8B0000] hover:from-[#A00000] hover:via-[#B91C1C] hover:to-[#A00000] text-white border-0 rounded-2xl sm:rounded-3xl text-lg sm:text-xl font-semibold shadow-2xl transition-all duration-300 hover:shadow-3xl relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700"
              >
                <span className="relative z-10">Solicitar Orçamento</span>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* What We Offer Section */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 bg-gradient-to-br from-[#8B0000] via-[#A00000] to-[#8B0000] text-white relative">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/escritorio-moderno.jpg"
            alt="Escritório moderno e profissional - Serviços Administrativos BCM ACTION"
            fill
            className="object-cover opacity-20"
          />
        </div>
        {/* Adicionar este overlay gradiente */}
        <div className="absolute inset-0 z-[1] bg-gradient-to-br from-[#8B0000]/70 via-[#A00000]/50 to-[#8B0000]/70"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 relative z-20">
          <motion.div
            className="text-center mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light mb-4">
              O Que Oferecemos <br />
              Para Sua Empresa
            </h2>
          </motion.div>

          <motion.div
            className="max-w-4xl mx-auto space-y-4 sm:space-y-6"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div variants={fadeInUp}>
              <OfferItem text="Profissionais Qualificados" />
            </motion.div>
            <motion.div variants={fadeInUp}>
              <OfferItem text="Eficiência no Atendimento" />
            </motion.div>
            <motion.div variants={fadeInUp}>
              <OfferItem text="Compromisso com o Seu Negócio" />
            </motion.div>
            <motion.div variants={fadeInUp}>
              <OfferItem text="Gestão de Pessoas" />
            </motion.div>
            <motion.div variants={fadeInUp}>
              <OfferItem text="Preço Justo" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Where We Serve Section */}
      <AnimatedSection className="py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
          <motion.div className="text-center mb-12 sm:mb-16" {...fadeInUp}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light text-[#8B0000] mb-4">
              Onde Atendemos
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 font-light">Nossa área de atuação</p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-7xl mx-auto"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div variants={fadeInUp}>
              <LocationCard
                title="Rio de Janeiro"
                cities="Cabo Frio, São Pedro da Aldeia, Búzios, Arraial do Cabo e Iguaba Grande."
                borderColor="border-[#8B0000]"
              />
            </motion.div>

            <motion.div variants={fadeInUp}>
              <LocationCard
                title="Minas Gerais"
                cities="Belo Horizonte, Betim, Contagem, Ibirité, Sarzedo, Ribeirão das Neves, Nova Lima, Sabará, Vespasiano, Lagoa Santa, Santa Luzia."
                borderColor="border-[#FF8C00]"
              />
            </motion.div>

            <motion.div variants={fadeInUp}>
              <LocationCard
                title="Espírito Santo"
                cities="Linhares, São Mateus, Aracruz, Colatina, Sooretama, Guriri."
                borderColor="border-[#8B0000]"
              />
            </motion.div>
          </motion.div>

          <motion.div
            className="flex justify-center mt-12 sm:mt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.div
              whileHover={{
                scale: 1.05,
                y: -2,
                boxShadow: "0 25px 50px -12px rgba(139, 0, 0, 0.4)",
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              <Button
                onClick={() => {
                  const orcamentoSection = document.querySelector('[data-section="orcamento"]')
                  if (orcamentoSection) {
                    orcamentoSection.scrollIntoView({ behavior: "smooth" })
                  }
                }}
                className="w-full sm:w-auto h-14 sm:h-16 lg:h-18 px-12 sm:px-16 bg-gradient-to-r from-[#8B0000] via-[#A00000] to-[#8B0000] hover:from-[#A00000] hover:via-[#B91C1C] hover:to-[#A00000] text-white border-0 rounded-2xl sm:rounded-3xl text-lg sm:text-xl font-semibold shadow-2xl transition-all duration-300 hover:shadow-3xl relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700"
              >
                <span className="relative z-10">Solicitar Orçamento</span>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* About Us Section */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/professional-team-background.jpg"
            alt="Equipe Profissional - Time trabalhando em colaboração"
            fill
            className="object-cover opacity-10"
          />
        </div>

        {/* Efeitos de fundo modernos com formas geométricas */}
        <div className="absolute inset-0 z-[1] bg-gradient-to-br from-slate-900/90 via-gray-900/80 to-slate-800/90"></div>

        {/* Engrenagens animadas */}
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 opacity-10"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full text-[#8B0000]">
            <path
              d="M50,10 L60,20 L70,10 L80,20 L90,30 L80,40 L90,50 L80,60 L90,70 L80,80 L70,90 L60,80 L50,90 L40,80 L30,90 L20,80 L10,70 L20,60 L10,50 L20,40 L10,30 L20,20 L30,10 L40,20 Z"
              fill="currentColor"
            />
            <circle cx="50" cy="50" r="15" fill="transparent" stroke="currentColor" strokeWidth="2" />
          </svg>
        </motion.div>

        <motion.div
          className="absolute bottom-20 right-10 w-24 h-24 opacity-15"
          animate={{ rotate: -360 }}
          transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full text-[#FF8C00]">
            <path
              d="M50,5 L58,15 L70,10 L75,22 L87,20 L85,32 L95,40 L83,45 L90,55 L78,58 L80,70 L68,68 L60,80 L55,68 L45,75 L42,63 L30,70 L32,58 L20,50 L32,45 L25,35 L37,32 L35,20 L47,22 L50,10 Z"
              fill="currentColor"
            />
            <circle cx="50" cy="50" r="12" fill="transparent" stroke="currentColor" strokeWidth="2" />
          </svg>
        </motion.div>

        {/* Formas geométricas flutuantes */}
        <motion.div
          className="absolute top-1/4 right-1/4 w-20 h-20 bg-[#8B0000]/20 rounded-full blur-xl"
          animate={{
            y: [0, -20, 0],
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />

        <motion.div
          className="absolute bottom-1/3 left-1/3 w-16 h-16 bg-[#FF8C00]/30 rotate-45 blur-lg"
          animate={{
            rotate: [45, 135, 45],
            x: [0, 10, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />

        {/* Hexágonos decorativos */}
        <motion.div
          className="absolute top-1/2 left-20 w-12 h-12 opacity-20"
          animate={{ rotate: 360 }}
          transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full text-white">
            <polygon
              points="50,5 85,25 85,75 50,95 15,75 15,25"
              fill="currentColor"
              stroke="currentColor"
              strokeWidth="2"
            />
          </svg>
        </motion.div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 relative z-20">
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light text-white mb-12 sm:mb-16 text-center relative"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="relative">Quem Somos</span>
          </motion.h2>

          <motion.div
            className="max-w-7xl mx-auto relative"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* Card Principal - Sobre Nós (maior e centralizado) */}
            <motion.div variants={fadeInUp} className="relative z-30 mx-auto max-w-2xl mb-8">
              <motion.div
                whileHover={{ y: -12, scale: 1.03, rotateY: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                className="bg-white/15 backdrop-blur-3xl rounded-[2rem] p-8 sm:p-10 shadow-2xl border border-white/30 relative overflow-hidden"
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Efeitos glassmorphism avançados */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/25 via-white/10 to-transparent rounded-[2rem] pointer-events-none"></div>
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
                <div className="absolute top-0 left-0 h-full w-px bg-gradient-to-b from-transparent via-white/50 to-transparent"></div>

                {/* Engrenagem decorativa no canto */}
                <motion.div
                  className="absolute -top-4 -right-4 w-16 h-16 opacity-20"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                >
                  <svg viewBox="0 0 100 100" className="w-full h-full text-[#FF8C00]">
                    <path
                      d="M50,10 L60,20 L70,10 L80,20 L90,30 L80,40 L90,50 L80,60 L90,70 L80,80 L70,90 L60,80 L50,90 L40,80 L30,90 L20,80 L10,70 L20,60 L10,50 L20,40 L10,30 L20,20 L30,10 L40,20 Z"
                      fill="currentColor"
                    />
                  </svg>
                </motion.div>

                <div className="relative z-10 text-center">
                  <motion.div
                    className="w-20 h-1 bg-gradient-to-r from-[#8B0000] to-[#FF8C00] rounded-full mx-auto mb-6"
                    initial={{ width: 0 }}
                    whileInView={{ width: 80 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.3 }}
                  />
                  <h3 className="text-2xl sm:text-3xl font-medium text-white mb-6">Sobre Nós</h3>
                  <p className="font-light text-white/90 leading-relaxed text-lg">
                    Bem-vindo à BCM ACTION, uma empresa dedicada a fornecer soluções completas em serviços de alta
                    qualidade. Atuamos em diversas áreas, incluindo promotoria de vendas, jardinagem, limpeza e
                    conservação de ambientes, recepção e serviços administrativos.
                  </p>
                </div>
              </motion.div>
            </motion.div>

            {/* Cards laterais sobrepostos */}
            <div className="relative flex flex-col lg:flex-row gap-8 lg:gap-0 lg:justify-between items-center">
              {/* Card Missão - Esquerda */}
              <motion.div variants={fadeInUp} className="relative z-20 lg:w-[45%] lg:-mr-20">
                <motion.div
                  whileHover={{ y: -10, scale: 1.05, rotateY: -8 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  className="bg-white/12 backdrop-blur-2xl rounded-3xl p-6 sm:p-8 shadow-xl border border-white/25 relative overflow-hidden transform lg:-rotate-2"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  {/* Forma geométrica decorativa */}
                  <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#8B0000]/20 rounded-full blur-2xl"></div>
                  <div className="absolute bottom-0 right-0 w-16 h-16 bg-[#FF8C00]/30 rotate-45 blur-xl"></div>

                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-white/5 to-transparent rounded-3xl pointer-events-none"></div>

                  <div className="relative z-10">
                    <motion.div
                      className="w-12 h-1 bg-gradient-to-r from-[#FF8C00] to-[#FFA500] rounded-full mb-6"
                      initial={{ width: 0 }}
                      whileInView={{ width: 48 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.5 }}
                    />
                    <h3 className="text-xl sm:text-2xl font-medium text-white mb-6">Nossa Missão</h3>
                    <p className="font-light text-white/90 leading-relaxed">
                      Atender a todas as necessidades dos nossos clientes com rapidez e competência, garantindo sempre
                      resultados excepcionais em cada projeto.
                    </p>
                  </div>
                </motion.div>
              </motion.div>

              {/* Card Valores - Direita */}
              <motion.div variants={fadeInUp} className="relative z-20 lg:w-[45%] lg:-ml-20">
                <motion.div
                  whileHover={{ y: -10, scale: 1.05, rotateY: 8 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  className="bg-white/12 backdrop-blur-2xl rounded-3xl p-6 sm:p-8 shadow-xl border border-white/25 relative overflow-hidden transform lg:rotate-2"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  {/* Hexágono decorativo */}
                  <motion.div
                    className="absolute -top-4 -right-4 w-20 h-20 opacity-15"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  >
                    <svg viewBox="0 0 100 100" className="w-full h-full text-[#8B0000]">
                      <polygon points="50,5 85,25 85,75 50,95 15,75 15,25" fill="currentColor" />
                    </svg>
                  </motion.div>

                  <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-[#FF8C00]/20 rounded-full blur-2xl"></div>
                  <div className="absolute top-0 left-0 w-16 h-16 bg-[#8B0000]/30 rotate-12 blur-xl"></div>

                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-white/5 to-transparent rounded-3xl pointer-events-none"></div>

                  <div className="relative z-10">
                    <motion.div
                      className="w-12 h-1 bg-gradient-to-r from-[#8B0000] to-[#A00000] rounded-full mb-6"
                      initial={{ width: 0 }}
                      whileInView={{ width: 48 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.7 }}
                    />
                    <h3 className="text-xl sm:text-2xl font-medium text-white mb-6">Nossos Valores</h3>
                    <p className="font-light text-white/90 leading-relaxed">
                      Veracidade, comprometimento e eficiência são os valores que nos diferenciam no mercado.
                      Construímos relacionamentos de confiança duradouros.
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            </div>

            {/* Elementos decorativos flutuantes */}
            <motion.div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-[#FF8C00] rounded-full opacity-60 z-10"
              animate={{
                scale: [1, 2, 1],
                opacity: [0.6, 1, 0.6],
              }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            />

            <motion.div
              className="absolute top-1/4 left-3/4 w-1 h-1 bg-white rounded-full opacity-80 z-10"
              animate={{
                y: [0, -10, 0],
                opacity: [0.8, 1, 0.8],
              }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
            />
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <motion.footer
        className="bg-gradient-to-r from-[#8B0000] to-[#A00000] text-white py-12 sm:py-16 relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center relative">
          <motion.div
            className="mb-6 sm:mb-8 relative z-50"
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{
              scale: 1.15,
              y: -8,
              transition: { type: "spring", stiffness: 400, damping: 25 },
            }}
            className="cursor-pointer"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" })
            }}
          >
            <Image
              src="/images/bcm-logo-white.png"
              alt="BCM ACTION Logo"
              width={240}
              height={240}
              className="h-auto w-24 sm:w-32 md:w-40 lg:w-48 xl:w-56 2xl:w-64 drop-shadow-2xl"
            />
          </motion.div>

          <motion.p
            className="text-center font-light opacity-90 text-sm sm:text-base relative z-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            BCM ACTION SERVIÇOS - CNPJ: 52.418.107/0001-58
            <br />
            Copyright © 2025 - Todos os Direitos Reservados.
          </motion.p>
        </div>
      </motion.footer>

      {/* WhatsApp Button */}
      <WhatsAppButton />
    </main>
  )
}

function AnimatedSection({ children, className }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <motion.section
      ref={ref}
      className={className}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      {children}
    </motion.section>
  )
}

function ServiceCard({ title, description, borderColor }) {
  return (
    <motion.div whileHover={{ y: -8, scale: 1.02 }} transition={{ type: "spring", stiffness: 400, damping: 25 }}>
      <Card className="bg-white shadow-xl border-0 h-full min-h-[280px] rounded-2xl sm:rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500">
        <CardContent className="p-6 sm:p-8">
          <div className={`w-10 sm:w-12 h-1 ${borderColor.replace("border-", "bg-")} rounded-full mb-4 sm:mb-6`}></div>
          <h3 className="text-xl sm:text-2xl font-medium text-gray-900 mb-4 sm:mb-6">{title}</h3>
          <div className="space-y-2 sm:space-y-3">
            {description.map((item, index) => (
              <p key={index} className="text-sm sm:text-base text-gray-600 font-light leading-relaxed">
                {item}
              </p>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

function LocationCard({ title, cities, borderColor }) {
  return (
    <motion.div whileHover={{ y: -8, scale: 1.02 }} transition={{ type: "spring", stiffness: 400, damping: 25 }}>
      <Card className="bg-white shadow-xl border-0 h-full rounded-2xl sm:rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500">
        <CardContent className="p-6 sm:p-8">
          <div className={`w-10 sm:w-12 h-1 ${borderColor.replace("border-", "bg-")} rounded-full mb-4 sm:mb-6`}></div>
          <h3 className="text-xl sm:text-2xl font-medium text-gray-900 mb-4 sm:mb-6">{title}</h3>
          <p className="text-sm sm:text-base text-gray-600 font-light leading-relaxed">{cities}</p>
        </CardContent>
      </Card>
    </motion.div>
  )
}

function OfferItem({ text }) {
  return (
    <motion.div
      className="flex items-center gap-4 sm:gap-6 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl sm:rounded-2xl p-4 sm:p-6 transition-all duration-300 hover:bg-white/20 hover:scale-[1.02]"
      whileHover={{ x: 8 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
    >
      <motion.div
        className="bg-gradient-to-r from-[#FF8C00] to-[#FFA500] rounded-full p-2 flex-shrink-0 shadow-lg"
        initial={{ scale: 0, rotate: -180 }}
        whileInView={{ scale: 1, rotate: 0 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 400, damping: 25, delay: 0.2 }}
      >
        <Check className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
      </motion.div>
      <span className="font-light text-base sm:text-lg">{text}</span>
    </motion.div>
  )
}
