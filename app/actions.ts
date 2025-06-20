"use server"

export async function sendContactForm(prevState: any, formData: FormData) {
  const name = formData.get("name") as string
  const email = formData.get("email") as string
  const phone = formData.get("phone") as string
  const message = formData.get("message") as string

  // Validação dos campos obrigatórios
  if (!name || !email || !phone || !message) {
    return {
      success: false,
      message: "Todos os campos são obrigatórios.",
    }
  }

  // Validação de email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return {
      success: false,
      message: "Por favor, insira um email válido.",
    }
  }

  try {
    // Simular envio de email (aqui você integraria com um serviço real como Resend, SendGrid, etc.)
    // Para demonstração, vou simular um delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Aqui você faria a integração real com o serviço de email
    // Exemplo com dados que seriam enviados:
    const emailData = {
      to: "bcm.actionn@gmail.com",
      subject: "Nova Solicitação de Orçamento - BCM ACTION",
      html: `
        <h2>Nova Solicitação de Orçamento</h2>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefone:</strong> ${phone}</p>
        <p><strong>Mensagem:</strong></p>
        <p>${message}</p>
        <hr>
        <p><small>Enviado através do site BCM ACTION</small></p>
      `,
    }

    console.log("Email que seria enviado:", emailData)

    return {
      success: true,
      message: "Solicitação enviada com sucesso! Entraremos em contato em breve.",
    }
  } catch (error) {
    console.error("Erro ao enviar email:", error)
    return {
      success: false,
      message: "Erro ao enviar solicitação. Tente novamente.",
    }
  }
}
