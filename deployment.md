# 🚀 En Garde Fencing Academy — Deployment & Hosting Guide

Comprehensive deployment, hosting, domain booking, and maintenance manual for **En Garde Fencing Academy** (`engarde-fencing-academy-v2`).

---

## 📌 Executive Summary & Quick Recommendation

| Component | Recommended Choice | 1st Year Cost | Subsequent Years Cost | Why It's Best |
| :--- | :--- | :--- | :--- | :--- |
| **Domain Registrar** | **Porkbun** or **Hostinger India** | ~₹750 – ₹900 | ~₹850 – ₹1,000 / yr | No hidden renewal spikes, free WHOIS privacy forever, supports `.in` & `.com`. |
| **Hosting Platform** | **Cloudflare Pages** (or **Vercel**) | **₹0 (Free)** | **₹0 / yr (Free forever)** | Blazing fast edge caching in Pune & Mumbai; unlimited bandwidth; zero server maintenance. |
| **SSL Certificate** | **Cloudflare / Let's Encrypt** | **₹0 (Free)** | **₹0 / yr (Free forever)** | Automated renewal, enterprise-grade security. |
| **Business Email** | **Zoho Mail** or **Cloudflare Routing** | **₹0 (Free)** | **₹0 / yr (Free forever)** | 5 free custom mailboxes (e.g., `info@engardefencing.in`) on Zoho Mail free plan. |
| **Total Annual Cost** | — | **~₹800 / year** | **~₹900 / year** | **Save ₹5,000–₹12,000/yr compared to traditional hosting.** |

---

## 🌐 1. Domain Booking Comparison (Pune / India Context)

For a Pune academy, the two best domain extensions are:
1. **`.in`** (e.g., `engardefencing.in` or `engardeacademy.in`) — High trust in India, great for local Pune/Maharashtra Google search ranking.
2. **`.com`** (e.g., `engardefencing.com` or `engardeacademy.com`) — Recognized globally.

### Registrar Cost Comparison (All prices approx. in INR, including renewal & privacy)

| Registrar | 1st Year Cost | Renewal Cost (Year 2+) | WHOIS Privacy | Indian UPI/Cards | 5-Year Total Cost | Verdict |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 🐷 **Porkbun** | ~₹750 (`.in` / `.com`) | ~₹850 – ₹920 / yr | **Free Forever** | International Cards / PayPal | ~₹4,200 | ⭐ **Best Overall Value**. Truly transparent, zero hidden fees. |
| 🟣 **Hostinger (India)** | ~₹699 – ₹799 | ~₹1,099 – ₹1,299 / yr | **Free** | **UPI, NetBanking, RuPay, Paytm** | ~₹5,200 | ⭐ **Easiest Payment in India**. Smooth checkout via UPI. |
| 🛡️ **Namecheap** | ~₹800 | ~₹1,200 – ₹1,350 / yr | **Free Forever** | Cards / PayPal | ~₹5,800 | Solid and reputable, slight renewal markup. |
| 🟧 **Cloudflare Registrar** | ~₹820 (`.com` only) | ~₹820 / yr (At-cost) | **Free Forever** | Credit/Debit Cards | ~₹4,100 | **Cheapest for `.com`**, but does not register `.in` directly. |
| ⚠️ **GoDaddy** | ₹399 – ₹499 *(intro)* | **₹1,699 – ₹2,199 / yr** | **Charged extra** (₹300–500/yr) | UPI / Cards | **₹9,500 – ₹12,000** | ❌ **Avoid**. Bait-and-switch pricing with steep renewal hikes. |

> [!TIP]
> **Domain Name Suggestions**:
> - `engardefencing.in` (Top pick)
> - `engardefencingacademy.com`
> - `engardepune.in`

---

## 🏢 2. Hosting Options Comparison

The website is a React 19 single-page application (built with Vite and Tailwind CSS v4) with 69 pre-bundled images, thought leadership blogs, athlete profiles, and direct WhatsApp/phone contact channels.

### Option A: Static Edge CDN Hosting (Cloudflare Pages / Vercel) — **RECOMMENDED**
- **Yearly Cost**: **₹0 / year forever** (Generous free tier with unlimited bandwidth on Cloudflare Pages, 100GB/mo on Vercel).
- **Speed**: Extreme. Cloudflare has active edge data centers right in **Pune** and **Mumbai**, delivering load times under 100ms.
- **Maintenance**: Zero Linux/sysadmin maintenance. Push code to GitHub -> site updates automatically in 45 seconds.

### Option B: Full-Stack Web Service (Render / Railway)
- **Yearly Cost**: Free tier (sleeps after inactivity) or **~₹6,000 – ₹7,200 / year** ($7/month paid plan).
- **When to choose**: Only if you build dynamic Node.js backend features requiring continuous server compute (e.g., custom cron jobs, internal database auth).

### Option C: Self-Hosted Cloud VPS (Hetzner / Hostinger Cloud / DigitalOcean)
- **Yearly Cost**: **~₹3,800 – ₹5,000 / year** (approx $4–$5/month).
- **When to choose**: If you want complete root server control, multiple sites on one server, or self-hosted MySQL databases. Requires ongoing OS updates, security patches, and Nginx administration.

---

## 🛠️ 3. First-Time Deployment Guide

### Method 1: Cloudflare Pages (Recommended — ₹0 / yr)

> [!IMPORTANT]
> **CRITICAL — Select "Pages", NOT "Workers"**:
> Cloudflare's dashboard groups Workers & Pages together under **Compute (Workers & Pages)**.
> - **Workers** is for serverless backend scripts (requires `npx wrangler deploy`).
> - **Pages** is for static frontend websites like this React Vite app (deploys `dist/public` directly with **zero deploy command**).
> Make sure you click the **Pages** tab before connecting Git!

#### Step 1: Create a Pages Application
1. Log in to [dash.cloudflare.com](https://dash.cloudflare.com/).
2. In the left navigation, click **Compute (Workers & Pages)**.
3. At the top of the page, click the **Pages** tab (do not click the "Workers" tab).
4. Click **Connect to Git** (or **Create application** > select **Pages** > **Connect to Git**).
5. Select your GitHub account and choose repository:
   `indiaegfa/engarde-fencing-academy-v2`
6. Click **Begin setup**.

#### Step 2: Configure Build Settings
Fill in the deployment form with the following exact settings:
- **Project Name**: `engarde-fencing-academy` (or `egfa`)
- **Production Branch**: `main`
- **Framework Preset**: Select **Vite** (or **None**)
- **Build Command**: `pnpm run build:client`
- **Build Output Directory**: `dist/public`
- **Root Directory**: *(leave blank)*

> [!NOTE]
> In Cloudflare Pages, there is **no Deploy Command** field. Cloudflare automatically takes the files generated in `dist/public` and distributes them globally across its edge network.

#### Step 3: Add Environment Variable (Recommended)
Expand the **Environment variables** dropdown and add:
- **Variable name**: `NODE_VERSION`
- **Value**: `20`

#### Step 4: Deploy
Click **Save and Deploy**.
- In about 60–90 seconds, Cloudflare will install dependencies with `pnpm`, run `vite build`, and publish all 95 assets.
- You will receive an instant, working `*.pages.dev` preview URL (e.g. `https://engarde-fencing-academy.pages.dev`).
- Test opening the link: all routes, photos, coaches, and blogs will load instantly with HTTPS.

---

#### Step 5: Connect Your Hostinger Domain (`egfa.in`)

Now connect the domain you purchased from Hostinger (`egfa.in`):

##### Step 5A: Add Domain to Cloudflare DNS (Free Plan)
1. In Cloudflare dashboard, click **Websites** in the top/left navigation.
2. Click **Add a site** (or **Add domain**).
3. Type: `egfa.in` and click **Continue**.
4. Select the **Free** plan ($0) and click **Continue**.
5. Cloudflare will scan for existing DNS records. Click **Continue**.
6. Cloudflare will display **2 Assigned Nameservers**. They look like:
   - `something.ns.cloudflare.com`
   - `somethingelse.ns.cloudflare.com`
   *(Copy these two nameserver addresses).*

##### Step 5B: Update Nameservers in Hostinger hPanel
1. Open a new tab and log in to [Hostinger hPanel](https://hpanel.hostinger.com/).
2. In the top navigation, click **Domains** > click on **`egfa.in`**.
3. In the left sidebar, click **DNS / Nameservers**.
4. In the Nameservers card, click **Change Nameservers**.
5. Choose **Change Cloudflare / Custom Nameservers**.
6. Paste the 2 Cloudflare nameservers:
   - **Nameserver 1**: `...ns.cloudflare.com`
   - **Nameserver 2**: `...ns.cloudflare.com`
7. Click **Save**.
   *(Nameserver propagation usually takes between 5 and 30 minutes).*

##### Step 5C: Link Domain to your Pages Project
1. Return to Cloudflare Dashboard > **Compute (Workers & Pages)** > **Pages** > click **`engarde-fencing-academy`**.
2. Click the **Custom domains** tab.
3. Click **Set up a custom domain**.
4. Enter `egfa.in` and click **Continue** > **Activate domain**.
5. Click **Set up a custom domain** again, enter `www.egfa.in`, and click **Activate domain**.
6. Cloudflare will automatically configure the SSL/TLS certificate and point both `https://egfa.in` and `https://www.egfa.in` to your website!

---

### Method 2: Vercel Deployment (Alternative — ₹0 / yr)

1. Sign in to [vercel.com](https://vercel.com/) with your GitHub account.
2. Click **Add New...** > **Project**.
3. Import `indiaegfa/engarde-fencing-academy-v2`.
4. Vercel will automatically detect `vercel.json` included in this repository.
5. Verify:
   - **Build Command**: `pnpm run build`
   - **Output Directory**: `dist/public`
6. Click **Deploy**.
7. Go to **Settings > Domains** and add your custom domain. Update the DNS records provided by Vercel.

---

### Method 3: Self-Hosted Ubuntu VPS (DigitalOcean / Hetzner / Hostinger)

If you prefer hosting the full Node.js Express server on an Ubuntu 22.04/24.04 server:

#### 1. Install Node.js, pnpm, and PM2
```bash
# Update packages
sudo apt update && sudo apt upgrade -y

# Install Node.js 20.x
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs git nginx

# Install pnpm & pm2 globally
sudo npm install -g pnpm pm2
```

#### 2. Clone and Build Project
```bash
# Navigate to web root
cd /var/www
sudo git clone https://github.com/indiaegfa/engarde-fencing-academy-v2.git
cd engarde-fencing-academy-v2

# Install dependencies and build
pnpm install
pnpm run build
```

#### 3. Start Node.js Server with PM2
```bash
# Start the production process
pm2 start "pnpm run start" --name "engarde-academy"

# Enable auto-start on server reboot
pm2 save
pm2 startup
```

#### 4. Configure Nginx Reverse Proxy
Create `/etc/nginx/sites-available/engardefencing.in`:
```nginx
server {
    listen 80;
    server_name engardefencing.in www.engardefencing.in;

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```
Enable site and test:
```bash
sudo ln -s /etc/nginx/sites-available/engardefencing.in /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

#### 5. Install Free SSL with Certbot
```bash
sudo apt install -y certbot python3-certbot-nginx
sudo certbot --nginx -d engardefencing.in -d www.engardefencing.in
```

---

## 🔄 4. How to Redeploy with Changes

Whenever you update text, coaches, tournament photos, blog posts, or fees:

### Flow A: Automatic Redeployment via Git (Recommended)
Because your repository is linked to GitHub (`origin/main`):
```bash
# 1. Check changed files
git status

# 2. Stage your changes
git add .

# 3. Commit with a descriptive message
git commit -m "Update upcoming tournament schedule and new coach bio"

# 4. Push to GitHub
git push origin main
```
* **What happens next**: Cloudflare Pages / Vercel automatically detects the push, runs the build, and publishes the new version within 60 seconds with zero downtime.

### Flow B: Redeploying on a VPS Server
If using Method 3 (Ubuntu VPS):
```bash
cd /var/www/engarde-fencing-academy-v2
git pull origin main
pnpm install
pnpm run build
pm2 restart engarde-academy
```

### Flow C: Rollback (If something goes wrong)
If a mistake is published:
- **On Cloudflare Pages / Vercel**: Open your dashboard > **Deployments** > click on any previous successful build > click **Rollback to this deployment**. Your site immediately reverts in under 5 seconds.

---

## 📬 5. Professional Business Email Setup (₹0 / Free)

To receive official emails like `contact@engardefencing.in` or `shweta@engardefencing.in`:

### Choice 1: Zoho Mail Free Plan (Best for full inbox)
- **Cost**: **100% Free** forever.
- **Includes**: Up to 5 users, 5 GB storage per user, mobile apps for Android & iOS.
- **Setup**: Sign up at [zoho.com/mail](https://www.zoho.com/mail/), select the "Free Forever" tier, verify your domain with a TXT DNS record, and add Zoho's MX records to your domain DNS.

### Choice 2: Cloudflare Email Routing (Best for simplicity)
- **Cost**: **100% Free**.
- **How it works**: Any email sent to `info@engardefencing.in` automatically forwards straight to your wife's personal Gmail inbox (`@gmail.com`).
- **Setup**: In the Cloudflare dashboard, go to **Email Routing**, click **Enable**, create custom addresses (e.g. `info`, `admissions`), and point them to your destination Gmail.

---

## 🔒 6. Pre-Launch Verification Checklist

Before announcing the website:
- [ ] **Mobile Responsiveness**: Test on iPhone and Android screens (check navbar drawer, gallery lightbox, tables).
- [ ] **Direct WhatsApp & Phone Links**: Tap on `+91 91580 71777` and `+91 93562 26379` to ensure WhatsApp opens directly.
- [ ] **Page Refresh Test**: Open an internal route like `/programs/competitive` and reload the browser page. The SPA redirect (`_redirects` / `vercel.json`) ensures no 404 error occurs.
- [ ] **SSL Verification**: Verify the padlock icon appears on `https://yourdomain.in`.
- [ ] **Google Search Console**: Submit `https://yourdomain.in` to [Google Search Console](https://search.google.com/search-console) for indexation in Pune / India searches.
