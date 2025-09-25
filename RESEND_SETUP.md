# Resend Contact Form - Production Setup Guide

## Why Resend?

✅ **Production-Ready**: Built specifically for developers and transactional emails  
✅ **Reliable**: 99.9% uptime SLA  
✅ **Simple**: Easy API, great documentation  
✅ **Affordable**: Generous free tier (3,000 emails/month)  
✅ **Fast Setup**: Works immediately, no complex SMTP configuration  
✅ **Great Deliverability**: High inbox delivery rates  

## Quick Setup (5 minutes)

### 1. Sign Up for Resend
- Go to [resend.com](https://resend.com)
- Sign up with your email
- Verify your account

### 2. Get API Key
- Go to API Keys in your dashboard
- Create a new API key
- Copy the API key (starts with `re_`)

### 3. Add to Environment Variables

**Local Development (.env.local):**
```
RESEND_API_KEY=re_your_actual_api_key_here
```

**Vercel Production:**
1. Go to your Vercel project dashboard
2. Settings → Environment Variables
3. Add:
   - Key: `RESEND_API_KEY`
   - Value: `re_your_actual_api_key_here`
   - Environment: Production

### 4. Domain Verification (Optional but Recommended)

**For Development**: Uses `onboarding@resend.dev` (included in free tier)

**For Production**: 
1. Add your domain in Resend dashboard
2. Add DNS records as shown
3. Update API route to use `contact@voyage-forge.com`

## Testing

### Test the Contact Form:
1. Start your development server: `npm run dev`
2. Go to `/contact`
3. Fill out and submit the form
4. Check your email for both notifications

### Test API Directly:
```bash
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "firstName": "Test",
    "lastName": "User", 
    "email": "test@example.com",
    "subject": "Test Message",
    "message": "Testing the contact form"
  }'
```

## Pricing

### Free Tier:
- 3,000 emails/month
- Perfect for most contact forms
- No credit card required

### Paid Plans:
- $20/month for 50,000 emails
- $80/month for 500,000 emails

## Production Deployment

### Vercel (Recommended):
1. Set environment variable `RESEND_API_KEY`
2. Deploy your application
3. Test the contact form on your live site

### Other Platforms:
- Set `RESEND_API_KEY` environment variable
- Ensure your platform supports Node.js API routes
- Deploy and test

## Monitoring

### Check Email Delivery:
- Resend dashboard shows delivery status
- Failed emails are logged with reasons
- Set up webhooks for advanced monitoring

### Error Handling:
- API returns detailed error messages
- Failed emails are automatically retried
- Rate limiting built-in

## Domain Setup (Production)

### 1. Add Domain in Resend:
- Go to Domains in dashboard
- Add `voyage-forge.com`

### 2. Update DNS Records:
```
Type: TXT
Name: @
Value: [provided by Resend]

Type: CNAME  
Name: resend._domainkey
Value: [provided by Resend]
```

### 3. Update API Route:
Change from `onboarding@resend.dev` to `contact@voyage-forge.com`

## Advantages Over Other Solutions

### vs. Nodemailer + Gmail:
- ✅ More reliable (no Gmail limits)
- ✅ Better for business use
- ✅ Proper deliverability
- ✅ No SMTP configuration needed

### vs. SendGrid:
- ✅ Simpler API
- ✅ Better developer experience  
- ✅ More generous free tier
- ✅ Faster setup

### vs. Formspree:
- ✅ Full control over emails
- ✅ Custom email templates
- ✅ Send to multiple recipients
- ✅ Better branding

## Security Features

- ✅ Built-in rate limiting
- ✅ SPF/DKIM/DMARC support
- ✅ Bounce handling
- ✅ Unsubscribe management
- ✅ Webhook security

## Support

- Excellent documentation: [resend.com/docs](https://resend.com/docs)
- Discord community
- Email support for paid plans
- GitHub examples and SDKs

---

**The contact form is now production-ready with Resend!** Just add your API key and deploy.