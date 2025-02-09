import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFViewer,
  Image,
} from "@react-pdf/renderer";
import google from "../assets/google_img.png";

// Create styles
const styles = StyleSheet.create({
  viewer: {
    width: "100%",
    height: "100vh",
  },
  page: {
    padding: 40,
    fontFamily: "Helvetica",
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 28,
  },
  logo: {
    width: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 12,
  },
  companyInfo: {
    fontSize: 10,
    textAlign: "right",
  },
  billTo: {
    marginBottom: 40,
  },
  sectionTitle: {
    fontSize: 12,
    fontFamily: "Helvetica-Bold",
    marginBottom: 8,
  },
  text: {
    fontSize: 10,
    lineHeight: 1.4,
  },
  details: {
    marginBottom: 10,
  },
  detailRow: {
    flexDirection: "row",
    marginBottom: 4,
  },
  detailLabel: {},
  detailValue: {
    flex: 1,
  },
  dots: {
    borderBottom: "1px dotted #999999",
    flex: 1,
    marginHorizontal: 8,
    marginBottom: "6px",
  },
  totalUSD: {
    fontSize: 20,
    textAlign: "right",
    marginBottom: 4,
  },
  totalLabel: {
    fontSize: 10,
    color: "#666666",
    textAlign: "right",
    marginBottom: 20,
  },
  summaryTitle: {
    fontSize: 11,
    fontFamily: "Helvetica-Bold",
    marginBottom: 12,
  },
  summaryRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 4,
  },
  summaryText: {
    fontSize: 10,
  },
});

export default function InvoicePDF({ data }) {
  return (
    <PDFViewer style={styles.viewer}>
      <Document>
        <Page size="A4" style={{ ...styles.page }}>
          {/* Header */}
          <View style={styles.header}>
            <View
              style={{ display: "flex", flexDirection: "column", gap: "6px" }}
            >
              <Image src={google} style={{ width: "120px", height: "auto" }} />

              <Text style={{ fontSize: "30px" }}>Tax Invoice</Text>
              <Text style={styles.text}>
                Invoice number: {data?.details?.invoiceNumber}
              </Text>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "6px",
                fontSize: "10px",
                textAlign: "right",
                alignItems: "flex-end",
              }}
            >
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: "10px",
                  fontFamily: "Helvetica-Bold",
                }}
              >
                Google Asia Pacific Pte. Ltd.
              </Text>
              <Text>70 Pasir Panjang Road, #03-71</Text>
              <Text>Mapletree Business City</Text>
              <Text>Singapore 117371</Text>
              <Text>BIN: 003769273-0208</Text>
            </View>
          </View>

          {/* Bill To */}
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "3px",
              marginBottom: "20px",
            }}
          >
            <Text style={styles.sectionTitle}>Bill to</Text>
            <Text style={styles.text}>{data?.name}</Text>
            <Text style={styles.text}>{data?.companyName}</Text>
            <Text style={styles.text}>{data?.companyAddress}</Text>
            {/* <Text style={styles.text}>Banani</Text> */}
            <Text style={styles.text}>{data?.city}</Text>
            <Text style={styles.text}>{data?.country}</Text>
          </View>

          {/* Details */}
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "20px",
              marginBottom: "40px",
            }}
          >
            <View style={{ ...styles.details, width: "100%" }}>
              <Text style={styles.sectionTitle}>Details</Text>

              <View style={styles.detailRow}>
                <Text style={[styles.text, styles.detailLabel]}>
                  Invoice number
                </Text>
                <View style={styles.dots} />
                <Text style={{ width: "110px", fontSize: 10, lineHeight: 1.4 }}>
                  {data?.details?.invoiceNumber}
                </Text>
              </View>
              <View style={styles.detailRow}>
                <Text style={[styles.text, styles.detailLabel]}>
                  Invoice date
                </Text>
                <View style={styles.dots} />
                <Text style={{ width: "110px", fontSize: 10, lineHeight: 1.4 }}>
                  {data?.details?.invoiceDate}
                </Text>
              </View>
              <View style={styles.detailRow}>
                <Text style={[styles.text, styles.detailLabel]}>
                  Billing ID
                </Text>
                <View style={styles.dots} />
                <Text style={{ width: "110px", fontSize: 10, lineHeight: 1.4 }}>
                  {data?.details?.billingId}
                </Text>
              </View>
              <View style={styles.detailRow}>
                <Text style={[styles.text, styles.detailLabel]}>
                  Account ID
                </Text>
                <View style={styles.dots} />
                <Text style={{ width: "110px", fontSize: 10, lineHeight: 1.4 }}>
                  {data?.details?.accountId}
                </Text>
              </View>
            </View>

            {/* Summary */}
            <View style={{ width: "100%" }}>
              <Text
                style={{
                  borderBottom: "2px solid #878787",
                  paddingBottom: "6px",
                  fontSize: "11px",
                  fontFamily: "Helvetica-Bold",
                }}
              >
                Google Cloud
              </Text>

              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "4px 0",
                  paddingBottom: "20px",
                }}
              >
                <Text style={{ ...styles.totalLabel, marginTop: "12px" }}>
                  Total in USD
                </Text>
                <Text
                  style={{ ...styles.totalUSD, fontFamily: "Helvetica-Bold" }}
                >
                  ${data?.totalUSD}
                </Text>
              </View>
              <Text
                style={{
                  borderBottom: "2px solid #878787",
                  paddingBottom: "6px",
                  fontSize: "11px",
                  fontFamily: "Helvetica-Bold",
                  marginBottom: "20px",
                }}
              >
                Summary for {data?.summaryFor}
              </Text>

              <View style={styles.summaryRow}>
                <Text style={styles.summaryText}>Subtotal in USD</Text>
                <Text style={styles.summaryText}>${data?.subtotal}</Text>
              </View>
              <View style={styles.summaryRow}>
                <Text style={styles.summaryText}>VAT (15%)</Text>
                <Text style={styles.summaryText}>${data?.vat}</Text>
              </View>
              <View style={[styles.summaryRow, { marginBottom: 20 }]}>
                <Text style={[styles.summaryText]}>Total in USD</Text>
                <Text style={styles.summaryText}>${data?.totalUSD}</Text>
              </View>

              <Text style={styles.summaryTitle}>For reference in BDT:</Text>
              <View style={styles.summaryRow}>
                <Text style={styles.summaryText}>Subtotal in BDT</Text>
                <Text style={styles.summaryText}>BDT {data?.subTotalBDT}</Text>
              </View>
              <View style={styles.summaryRow}>
                <Text style={styles.summaryText}>VAT (15%)</Text>
                <Text style={styles.summaryText}>BDT {data?.vatBDT}</Text>
              </View>
              <View style={[styles.summaryRow, { marginBottom: 20 }]}>
                <Text style={[styles.summaryText]}>Total in BDT</Text>
                <Text style={[styles.summaryText]}>BDT {data?.totalBDT}</Text>
              </View>

              <Text style={[styles.summaryText]}>
                Exchange rate USD 1 : BDT {data?.exchangeRate}
              </Text>
            </View>
          </View>

          {/* Footer */}
          <View>
            <Text style={{ fontSize: "12px" }}>
              You will be automatically charged for any amount due.
            </Text>
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
}
