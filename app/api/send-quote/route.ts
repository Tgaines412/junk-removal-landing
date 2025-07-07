import { type NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend("re_WxvFQgar_7Tb6G9FQyzRTm5ypNLG2FVaz")

export async function POST(request: NextRequest) {
  console.log("API route called - /api/send-quote")

  try {
    const formData = await request.formData()

    // Extract form data
    const name = formData.get("name") as string
    const phone = formData.get("phone") as string
    const email = formData.get("email") as string
    const address = formData.get("address") as string
    const message = formData.get("message") as string
    
    // Extract multiple photos
    const photos: File[] = []
    let index = 0
    while (formData.get(`photo${index}`)) {
      const photo = formData.get(`photo${index}`) as File
      if (photo && photo.size > 0) {
        photos.push(photo)
      }
      index++
    }

    console.log("API - Form data extracted:", { name, phone, email, address, hasPhotos: photos.length > 0, photoCount: photos.length })

    // Validate required fields
    if (!name || !phone || !email || !address) {
      return NextResponse.json({
        success: false,
        message: "Please fill in all required fields.",
      })
    }

    // Validate file sizes (max 5MB each)
    for (const photo of photos) {
      if (photo.size > 5 * 1024 * 1024) {
        return NextResponse.json({
          success: false,
          message: `Photo "${photo.name}" is too large. Each photo must be less than 5MB. Please compress your images and try again.`,
        })
      }
    }

    // Create email content
    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>New Quote Request - Bin Busters</title>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #dc2626, #b91c1c); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
            .content { background: #f9fafb; padding: 30px; border-radius: 0 0 10px 10px; }
            .info-row { margin: 15px 0; padding: 15px; background: white; border-radius: 8px; border-left: 4px solid #dc2626; }
            .label { font-weight: bold; color: #dc2626; display: inline-block; width: 120px; }
            .value { color: #374151; }
            .photo-info { background: #fef2f2; border: 2px dashed #dc2626; padding: 20px; text-align: center; border-radius: 8px; margin: 20px 0; }
            .urgent { background: #fee2e2; border: 1px solid #fecaca; padding: 15px; border-radius: 8px; margin: 20px 0; }
            .footer { text-align: center; margin-top: 30px; color: #6b7280; font-size: 14px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>🚛 New Quote Request</h1>
              <p>Bin Busters Junk Removal</p>
            </div>
            
            <div class="content">
              <div class="urgent">
                <strong>⏰ URGENT:</strong> Customer expects instant response as promised on website!
              </div>
              
              <h2>Customer Details:</h2>
              
              <div class="info-row">
                <span class="label">Name:</span>
                <span class="value">${name}</span>
              </div>
              
              <div class="info-row">
                <span class="label">Phone:</span>
                <span class="value"><a href="tel:${phone}">${phone}</a></span>
              </div>
              
              <div class="info-row">
                <span class="label">Email:</span>
                <span class="value"><a href="mailto:${email}">${email}</a></span>
              </div>
              
              <div class="info-row">
                <span class="label">Address:</span>
                <span class="value">${address}</span>
              </div>
              
              ${
                message
                  ? `
              <div class="info-row">
                <span class="label">Message:</span>
                <span class="value">${message}</span>
              </div>
              `
                  : ""
              }
              
              ${
                photos.length > 0
                  ? `
              <div class="photo-info">
                <h3>📸 Photos Uploaded (${photos.length})</h3>
                ${photos.map((photo, index) => `
                  <p><strong>Photo ${index + 1}:</strong> ${photo.name} (${(photo.size / 1024 / 1024).toFixed(2)} MB)</p>
                `).join('')}
              </div>
              `
                  : `
              <div class="photo-info">
                <h3>⚠️ No Photos Uploaded</h3>
                <p>Customer did not upload any photos with their request</p>
              </div>
              `
              }
              
              <div class="footer">
                <p>This quote request was submitted through the Bin Busters website.</p>
                <p>Please respond promptly to maintain our 1-hour response guarantee.</p>
              </div>
            </div>
          </div>
        </body>
      </html>
    `

    console.log("API - Attempting to send email via Resend...")

    // Prepare email options
    const emailOptions: any = {
      from: "Bin Busters <onboarding@resend.dev>",
      to: ["binbustersnz@gmail.com"], // Send to Bin Busters email
      subject: `🚛 URGENT Quote Request from ${name} - ${address}`,
      html: htmlContent,
      replyTo: email,
    }

    // Add attachments if photos were uploaded
    if (photos.length > 0) {
      const attachments = await Promise.all(
        photos.map(async (photo) => {
          const photoBuffer = Buffer.from(await photo.arrayBuffer())
          return {
            filename: photo.name,
            content: photoBuffer,
          }
        })
      )
      emailOptions.attachments = attachments
    }

    // Send email using Resend
    try {
      const { data, error } = await resend.emails.send(emailOptions)

      if (error) {
        console.error("API - Resend error:", error)
        return NextResponse.json({
          success: false,
          message: "Sorry, there was an error sending your request. Please call us directly at 021 448 097.",
        })
      }

      console.log("API - Email sent successfully:", data)

      return NextResponse.json({
        success: true,
        message: "Quote request sent successfully! We'll get back to you within the hour.",
      })
    } catch (sendError) {
      console.error("API - Resend send error:", sendError)
      return NextResponse.json({
        success: false,
        message: "Sorry, there was an error sending your request. Please call us directly at 021 448 097.",
      })
    }
  } catch (error) {
    console.error("API - Unexpected error:", error)
    return NextResponse.json({
      success: false,
      message: "Sorry, there was an error sending your request. Please call us directly at 021 448 097.",
    })
  }
}
